import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function List() {
  const [products, setProducts] = useState([]);
  const url = "https://swiftpick-e-commerce.onrender.com";

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeProduct = async (productId) => {
    try {
      const response = await axios.delete(`${url}/api/product/remove`, {
        params: { id: productId }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        fetchProducts(); // Refresh the product list after deletion
      } else {
        toast.error("Error: Could not delete the product.");
      }
    } catch (error) {
      console.error("Error removing product", error);
      toast.error("An error occurred while trying to remove the product.");
    }
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-2xl font-semibold mb-6 text-gray-800">PRODUCTS LIST</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-medium text-gray-600">Products</th>
              <th className="p-3 text-left text-sm font-medium text-gray-600">Title</th>
              <th className="p-3 text-left text-sm font-medium text-gray-600">Price</th>
              <th className="p-3 text-left text-sm font-medium text-gray-600">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id} className="border-b last:border-none">
                <td className="p-3">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt="Product"
                    height={38}
                    width={38}
                    className="rounded-lg ring-1 ring-slate-300"
                  />
                </td>
                <td className="p-3">
                  <div className="text-sm font-medium text-gray-800">{item.name}</div>
                </td>
                <td className="p-3 text-sm font-medium text-gray-800">${item.price}</td>
                <td className="p-3">
                  <button
                    onClick={() => removeProduct(item._id)}
                    className="text-red-500 hover:text-red-700 transition duration-150"
                  >
                    <i className="ri-delete-bin-line text-xl"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
