import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()

  const { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, url } =
    useContext(ShopContext);

  return (
    <section className="m-auto p-4 container pt-20">
      <div className="py-10">
        <table className="w-full">
          <thead>
            <tr className="border-b-[4px] text-zinc-800 text-[14px] xs:text-[16] text-start py-12">
              <th className="p-1 text-left">Product</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Quantity</th>
              <th className="p-1 text-left">Total</th>
              <th className="p-1 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((product) => {
              if (cartItems[product._id] > 0) {
                return (
                  <tr className="border-b-2 border-slate-200" key={product._id}>
                    <td className="p-2">
                      <img
                        src={url+"/images/"+product.image}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="rounded-lg m-1 "
                      />
                    </td>
                    <td className="text-xl p-2">
                      <div>{product.name}</div>
                    </td>
                    <td className="text-xl p-2">{product.price}</td>
                    <td
                      className="text-xl flex items-center justify-center gap-2 w-[7rem] h-[6rem]"
                    >
                        <button
                          onClick={() => removeFromCart(product._id)}
                          className="px-2 py-1 text-black rounded" 
                        >
                          <i class="ri-subtract-line"></i>
                        </button>
                        <span>{cartItems[product._id]}</span>
                        <button
                          onClick={() => addToCart(product._id)}
                          className="px-2 py-1 text-black rounded"
                        >
                          <i class="ri-add-fill"></i>
                        </button>
                    </td>
                    <td className="text-xl p-2">
                      Rs.
                      {Number(product.price * cartItems[product._id]).toFixed(
                        2
                      )}
                    </td>
                    <td className='text-xl p-2'>
                      <div>
                        <i
                          onClick={() => removeFromCart(product._id)}
                          className="ri-delete-bin-5-line text-xl cursor-pointer"
                        ></i>
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>

        {/* cart delails */}

          <div className="flex flex-col xl:flex-row gap-20 mt-20">
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="font-bold text-[28px] mb-5">Summary</h4>
              <div className="flex justify-between py-3">
                <h4 className="font-medium text-[16px]">Subtotal:</h4>
                <h4 className="text-gray-800 text-[18px] font-semibold">Rs.{getTotalCartAmount()}</h4>
              </div>
              <hr className="h-[2px] bg-slate-900 opacity-5" />
              <div className="flex justify-between py-3">
                <h4 className="font-medium text-[16px]">Shopping Fee:</h4>
                <h4 className="text-gray-800 text-[18px] font-semibold">Rs.{getTotalCartAmount() === 0 ? 0 : 2}</h4>
              </div>
              <hr className="h-[2px] bg-slate-900 opacity-5" />
              <div className="flex justify-between py-3">
                <h4 className="font-medium text-[16px]">Total:</h4>
                <h4 className="font-bold text-[18px]">Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
              </div>
            </div>
          </div>
            <button onClick={()=> navigate("/order")} className="bg-orange-600 py-5 mt-5 text-[15px] text-white font-medium px-10 rounded-md" >Proceed to Checkout</button>
        </div>
    </section>
  );
};

export default Cart;
