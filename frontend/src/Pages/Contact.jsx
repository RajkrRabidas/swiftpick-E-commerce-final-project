import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-[28px] font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
