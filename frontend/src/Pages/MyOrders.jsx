import React, { useState, useEffect } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from an API or some source
    // For now, we'll use static data
    setOrders([
      {
        packageIcon: "📦",
        title: "Elegant Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse x 1",
        price: "$12",
        quantity: 1,
        status: "Delivered",
        trackLink: "#"
      },
      {
        packageIcon: "📦",
        title: "Stylish Floral Print Summer Dress with Belt and V Neck Design x 2, Sophisticated Double Breasted Longline Blazer x 1",
        price: "$42",
        quantity: 2,
        status: "Delivered",
        trackLink: "#"
      }
    ]);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">My Orders</h1>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="py-6 px-8 text-left text-lg font-semibold">Package</th>
                <th scope="col" className="py-6 px-8 text-left text-lg font-semibold">Title</th>
                <th scope="col" className="py-6 px-8 text-right text-lg font-semibold">Price</th>
                <th scope="col" className="py-6 px-8 text-right text-lg font-semibold">Quantity</th>
                <th scope="col" className="py-6 px-8 text-right text-lg font-semibold">Status</th>
                <th scope="col" className="py-6 px-8 text-right text-lg font-semibold">Track</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-6 px-8 text-lg">{order.packageIcon}</td>
                  <td className="py-6 px-8 text-lg">{order.title}</td>
                  <td className="py-6 px-8 text-lg text-right">{order.price}</td>
                  <td className="py-6 px-8 text-lg text-right">{order.quantity}</td>
                  <td className="py-6 px-8 text-lg text-right">{order.status}</td>
                  <td className="py-6 px-8 text-lg text-right">
                    <a href={order.trackLink} className="text-indigo-600 hover:text-indigo-800">Track</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
