import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const { addToCart, url, all_products } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(12);

  const handleSeeMore = () => {
    setVisibleProducts(visibleProducts + 8);
  };

  return (
    <main className="container mx-auto mt-40 my-20 px-4">
      <h2 className="text-6xl font-bold mb-10 text-left">ALL Products</h2>
      <div className="productlist grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {all_products.slice(0, visibleProducts).map((product) => (
          <div key={product._id} className="product bg-white shadow rounded-lg overflow-hidden">
            <Link to={`/product/${product._id}`}>
              <img
                src={url + "/images/" + product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
            </Link>
            <div className="flex w-full bg-white product-details text-center">
              <div className="box2 pb-2 pl-4 pr-12 text-left h-full">
                <a className="px-1.5 py-1 text-lg border-none rounded-md mb-5" href="#">
                  {product.category}
                </a>
                <div className="rating flex items-center mt-2 mb-2">
                  <span className="text-yellow-400 text-xl">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-400 text-xl">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-400 text-xl">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-400 text-xl">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-gray-300 text-xl">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-2 text-blue-500 text-xl">{product.rating}</span>
                </div>
                <p className="text-4xl tracking-wider font-semibold mb-2">{product.name}</p>
                <a href="#" className="text-2xl font-bold text-[#000000ee]">
                  {product.price}
                </a>
                <span className="text-gray-500 ml-2 text-sm line-through">{product.oldPrice}</span>
              </div>
              <div className="w-full relative">
                <button
                  onClick={() => addToCart(product._id)}
                  className="addCart bg-[#3c8a90e8] text-xl text-white rounded-full shadow hover:bg-orange-500 transition duration-300"
                >
                  <i className="fas fa-shopping-cart ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < all_products.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleSeeMore}
            className="bg-[#3c8a90e8] text-white text-2xl py-2 px-8 rounded-full shadow hover:underline transition duration-1000"
          >
            See More
          </button>
        </div>
      )}
    </main>
  );
};

export default ProductDisplay;
