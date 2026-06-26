import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { Product } from "../types";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import { formatPrice } from "../data/mockData";
import { cn } from "../lib/utils";

const categories = ['Smart Curtains', 'Turkish Curtains', 'Bedding Sets', 'Bed Toppers', 'Latex Pillows', 'Fiber Pillows', 'Towels'] as const;

export default function Admin() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    category: "Smart Curtains",
    price: 0,
    description: "",
    images: [""],
  });

  const handleEdit = (product: Product) => {
    setFormData({ ...product });
    setIsEditing(product.id);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setFormData({
      name: "",
      category: "Smart Curtains",
      price: 0,
      description: "",
      images: [""],
    });
    setIsAdding(true);
    setIsEditing(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateProduct(isEditing, formData as Omit<Product, 'id'>);
      setIsEditing(null);
    } else if (isAdding) {
      addProduct(formData as Omit<Product, 'id'>);
      setIsAdding(false);
    }
  };

  const cancelForm = () => {
    setIsEditing(null);
    setIsAdding(false);
  };

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto bg-ivory min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-charcoal-900">Admin Dashboard</h1>
        {!isAdding && !isEditing && (
          <button 
            onClick={handleAdd}
            className="flex items-center px-4 py-2 bg-charcoal-900 text-white hover:bg-gold-500 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Product
          </button>
        )}
      </div>

      {(isAdding || isEditing) && (
        <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif text-charcoal-900">
              {isAdding ? "Add New Product" : "Edit Product"}
            </h2>
            <button onClick={cancelForm} className="text-gray-400 hover:text-charcoal-900">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-widest text-charcoal-900 mb-2 font-semibold">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name || ''} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-charcoal-900 mb-2 font-semibold">Category</label>
                <select 
                  required
                  value={formData.category || 'Smart Curtains'} 
                  onChange={e => setFormData({...formData, category: e.target.value as any})}
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gold-500"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-charcoal-900 mb-2 font-semibold">Price (NGN)</label>
                <input 
                  type="number" 
                  required
                  min="0"
                  value={formData.price || 0} 
                  onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-charcoal-900 mb-2 font-semibold">Image URL</label>
                <input 
                  type="url" 
                  required
                  value={formData.images?.[0] || ''} 
                  onChange={e => setFormData({...formData, images: [e.target.value]})}
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gold-500"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest text-charcoal-900 mb-2 font-semibold">Description</label>
              <textarea 
                required
                rows={4}
                value={formData.description || ''} 
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex space-x-4">
              <button 
                type="submit"
                className="bg-charcoal-900 text-white px-8 py-3 hover:bg-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold"
              >
                Save Product
              </button>
              <button 
                type="button"
                onClick={cancelForm}
                className="border border-gray-300 text-charcoal-900 px-8 py-3 hover:border-charcoal-900 transition-colors uppercase tracking-widest text-sm font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 text-sm font-semibold uppercase tracking-widest text-charcoal-900">Image</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-widest text-charcoal-900">Name</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-widest text-charcoal-900">Category</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-widest text-charcoal-900">Price</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-widest text-charcoal-900 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">
                  <div className="w-16 h-16 bg-gray-100">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="p-4 font-medium text-charcoal-900">{product.name}</td>
                <td className="p-4 text-gray-500 text-sm">{product.category}</td>
                <td className="p-4 text-charcoal-900">{formatPrice(product.price)}</td>
                <td className="p-4">
                  <div className="flex items-center justify-end space-x-3">
                    <button 
                      onClick={() => handleEdit(product)}
                      className="p-2 text-gray-400 hover:text-charcoal-900 transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this product?')) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  No products found. Add some to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
