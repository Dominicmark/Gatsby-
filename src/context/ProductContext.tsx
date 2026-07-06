import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../types";
import { db } from "../lib/firebase";
import { collection, doc, setDoc, deleteDoc, onSnapshot, writeBatch } from "firebase/firestore";
import { mockProducts as initialMockProducts } from "../data/mockData";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: string, product: Omit<Product, 'id'>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, "products");
    
    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const fetchedProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      
      if (fetchedProducts.length === 0 && !localStorage.getItem("gatsby_db_seeded")) {
        // Seed database if empty
        const seedDb = async () => {
          try {
            const batch = writeBatch(db);
            initialMockProducts.forEach(prod => {
              const docRef = doc(productsRef, prod.id);
              batch.set(docRef, prod);
            });
            await batch.commit();
            localStorage.setItem("gatsby_db_seeded", "true");
          } catch (e) {
            console.error("Error seeding DB:", e);
          }
        };
        seedDb();
      } else {
        setProducts(fetchedProducts);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching products from Firestore:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addProduct = async (product: Omit<Product, 'id'>) => {
    const newDocRef = doc(collection(db, "products"));
    const newProduct = {
      ...product,
      id: newDocRef.id
    };
    await setDoc(newDocRef, newProduct);
  };

  const updateProduct = async (id: string, updatedProduct: Omit<Product, 'id'>) => {
    const docRef = doc(db, "products", id);
    await setDoc(docRef, { ...updatedProduct, id }, { merge: true });
  };

  const deleteProduct = async (id: string) => {
    await deleteDoc(doc(db, "products", id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, loading }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
