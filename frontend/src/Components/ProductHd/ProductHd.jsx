import React, { useContext } from 'react';
import './ProductHd.css';  // Keep your custom styles
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const ProductHd = ({ product }) => {
  const {addToCart, url} = useContext(ShopContext)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-4 gap-8">
      <div className="w-full">
        <img
          className="w-full h-[50rem] object-contain"
          src={url+"/images/"+product.image}
          alt={url+"/images/"+product.image}
          id="mainImg"
        />
        <div className="small-img-group">
          <div className="small-img-col">
            <img
              src={url+"/images/"+product.image}
              className="small-img h-48"
              alt="Product Thumbnail 1"
            />
          </div>
          <div className="small-img-col">
            <img
              src={url+"/images/"+product.image}
              className="small-img  h-48"
              alt="Product Thumbnail 2"
            />
          </div>
          <div className="small-img-col">
            <img
              src={url+"/images/"+product.image}
              className="small-img  h-48"
              alt="Product Thumbnail 3"
            />
          </div>
          <div className="small-img-col">
            <img
              src={url+"/images/"+product.image}
              className="small-img  h-48"
              alt="Product Thumbnail 4"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h6 className="text-black text-2xl opacity-60"> <Link to='/'> Shop / {product.category}</Link></h6>
        <h2 className="text-5xl py-6">{product.price}</h2>
        <select className="my-4 border border-gray-300 rounded px-2 py-1">
          <option>Select size</option>
          <option>XXL</option>
          <option>XL</option>
          <option>Large</option>
          <option>Small</option>
        </select>

        <input type="number" value="1" className="border border-gray-300 rounded w-16 p-2 mr-2" />
        <button onClick={() => addToCart(product._id)} className="buy-btn text-xl font-medium mt-3 px-4 py-2 rounded transition-transform transform hover:scale-105">
          Add To Cart
        </button>
        <h4 className="mt-28 my-12 text-4xl">Product details</h4>
        <span className="products-text text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit animi nulla voluptas maiores quas atque tempora cumque cupiditate magnam? Ratione sint libero dicta eos distinctio sunt quasi quos accusamus.

          {/* {product.description || "No description available."} */}
        </span>
      </div>
    </div>
  );
};

export default ProductHd;
