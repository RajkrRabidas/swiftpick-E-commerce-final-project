import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { all_products } from "../../public/data";
import { ShopContext } from "../Context/ShopContext";

const Shopcategory = () => {
  const { categoryName } = useParams();
  const { addToCart, url, all_products } = useContext(ShopContext);

  // Filter products based on the category name passed in the route
  const filteredProducts = all_products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="container mx-auto my-10 px-4" id="category">
      <h6 class="text-black text-4xl mb-10 font-medium opacity-60">
        <Link to="/">
          <i class="ri-arrow-left-line hover:text-black"></i>
        </Link>
      </h6>
      <h2 className="text-4xl font-bold mb-10">Products in {categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <>
              <div
                key={index}
                className="product-item bg-white shadow h-full w-80 rounded-lg p-4 text-center"
              >
                <Link to={`/product/${product._id}`}>
                  <img
                    src={url + "/images/" + product.image}
                    alt={product.name}
                    className="object-contain h-48 w-full mb-4"
                  />
                </Link>

                <p className="text-2xl font-semibold">{product.name}</p>
                <p className="text-xl text-gray-600">{product.price}</p>
                <p className="text-sm text-gray-400 line-through">
                  {product.oldPrice}
                </p>
                <p className="text-yellow-500 outline-none">
                  {"⭐".repeat(product.rating)}
                </p>
                <button
                  onClick={() => addToCart(product._id)}
                  class="bg-[#f1462f] text-white rounded-full px-6 py-2 text-lg font-normal mt-4"
                >
                  Add To Cart
                </button>
              </div>
            </>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Shopcategory;
