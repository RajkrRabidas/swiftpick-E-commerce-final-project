import { useEffect, useState } from "react";
import upload_area from "/upload image.png";
import { toast } from "react-toastify";
import axios from "axios";

export default function Add() {
  const url = "http://localhost:4000";
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    oldPrice: "",
    category: "Mobile", // Ensure this matches the select options
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(upload_area);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData((productData) => ({ ...productData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData((productData) => ({ ...productData, image: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("oldPrice", Number(productData.oldPrice));
    formData.append("price", Number(productData.price));
    formData.append("category", productData.category);
    formData.append("image", productData.image);

    try {
      const response = await axios.post(`${url}/api/product/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        // Reset the form
        setProductData({
          name: "",
          price: "",
          oldPrice: "",
          category: "Mobile", // Ensure this matches the select options
          image: null,
        });
        setImagePreview(upload_area); // Reset image preview
        console.log("Product added successfully!");
        toast.success(response.data.message)
      } else {
        console.error("Failed to add product:", response.data.message);
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error("There was an error uploading the product!", error);
    }
  };

  return (
    <section className="p-4 sm:p-10 w-full bg-slate-200">
      <form
        className="flex flex-col gap-y-5 max-w-[555px]"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-[22px] pb-2 uppercase">PRODUCTS UPLOAD</h2>
        <div className="flex flex-col gap-y-2 max-w-36 h-40">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-full h-full"
              src={imagePreview}
              alt="Product Preview"
            />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            hidden
            required
            onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Type here..."
            className="ring-1 ring-zinc-100 py-1 px-3 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p>Product Price</p>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="ring-1 ring-zinc-100 py-1 px-3 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-32">
          <p>Old Price</p>
          <input
            type="text"
            name="oldPrice"
            value={productData.oldPrice}
            onChange={handleChange}
            className="ring-1 ring-zinc-600 py-1 px-3 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p>Product Category</p>
          <select
            className="outline-none ring-1 ring-white pl-2 text-lg"
            name="category"
            value={productData.category}
            onChange={handleChange}
          >
            <option value="Mobile">Mobile</option>
            <option value="Electronic">Electronic</option>
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>
        <button
          className="bg-black text-white sm:w-5/12 flex justify-center items-center text-center gap-x-2 py-2 rounded"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </section>
  );
}
