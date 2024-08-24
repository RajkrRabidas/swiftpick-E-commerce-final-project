import React, { useContext, useState} from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, token, all_products, cartItems, url } =
    useContext(ShopContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    all_products.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2, // Adding shopping fee
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
      
    } catch (error) {
      console.log("Order placement failed:", error);
      alert("Order placement failed. Please try again.");
    }
  };

  return (
    <section className="container mx-auto px-16 py-28 xl:py-32">
      <form
        onSubmit={placeOrder}
        className="flex flex-col xl:flex-row gap-20 xl:gap-28"
      >
        {/* Delivery information */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="text-4xl font-bold mb-10">Delivery Information</h3>
          <div className="flex gap-4">
            <input
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="ring-1 ring-slate-900 text-xl p-3 pl-5 rounded-sm border-none outline-none w-1/2"
            />
            <input
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="ring-1 ring-slate-900 text-xl p-3 pl-5 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name="email"
            placeholder="Email"
            required
            className="ring-1 ring-slate-700 text-xl p-3 pl-5 rounded-sm outline-none"
          />
          <input
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="ring-1 ring-slate-700 text-xl p-3 pl-5 rounded-sm outline-none"
          />
          <input
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            name="street"
            placeholder="Street"
            required
            className="ring-1 ring-slate-900 text-xl p-3 pl-5 rounded-sm outline-none"
          />
          <div className="flex gap-4">
            <input
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              name="city"
              placeholder="City"
              required
              className="ring-1 ring-slate-900 text-xl p-3 pl-5 rounded-sm outline-none w-1/2"
            />
            <input
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              name="state"
              placeholder="State"
              required
              className="ring-1 ring-slate-900 text-xl p-3 pl-5 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
            onChange={onChangeHandler}
            value={data.pincode}
            type="text"
            name="pincode"
            placeholder="Pin code"
            required
            className="ring-1 ring-slate-900 text-xl p-3 pl-5 rounded-sm outline-none"
          />
        </div>

        {/* Cart details */}
        <div className="flex flex-1 flex-col gap-2">
          <h4 className="font-bold text-[28px] mb-5">Summary</h4>
          <div className="flex justify-between py-3">
            <h4 className="font-medium text-[16px]">Subtotal:</h4>
            <h4 className="text-gray-800 text-[18px] font-semibold">
              Rs.{getTotalCartAmount()}
            </h4>
          </div>
          <hr className="h-[2px] bg-slate-900 opacity-5" />
          <div className="flex justify-between py-3">
            <h4 className="font-medium text-[16px]">Shopping Fee:</h4>
            <h4 className="text-gray-800 text-[18px] font-semibold">
              Rs.{getTotalCartAmount() === 0 ? 0 : 2}
            </h4>
          </div>
          <hr className="h-[2px] bg-slate-900 opacity-5" />
          <div className="flex justify-between py-3">
            <h4 className="font-medium text-[16px]">Total:</h4>
            <h4 className="font-bold text-[18px]">
              Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
            </h4>
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange-600 py-5 mt-5 text-[15px] text-white font-medium px-10 rounded-md"
        >
          Proceed to Checkout
        </button>
      </form>
    </section>
  );
};

export default Order;
