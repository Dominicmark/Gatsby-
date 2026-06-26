import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../types";
import { mockProducts as initialMockProducts } from "../data/mockData";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load from local storage or fallback to mock data
    const storedProducts = localStorage.getItem("gatsby_products");
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (e) {
        setProducts(initialMockProducts);
      }
    } else {
      setProducts(initialMockProducts);
      localStorage.setItem("gatsby_products", JSON.stringify(initialMockProducts));
    }
  }, []);

  const saveToStorage = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem("gatsby_products", JSON.stringify(newProducts));
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: `p${Date.now()}`
    };
    saveToStorage([...products, newProduct]);
  };

  const updateProduct = (id: string, updatedProduct: Omit<Product, 'id'>) => {
    const newProducts = products.map(p => p.id === id ? { ...updatedProduct, id } : p);
    saveToStorage(newProducts);
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter(p => p.id !== id);
    saveToStorage(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
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
