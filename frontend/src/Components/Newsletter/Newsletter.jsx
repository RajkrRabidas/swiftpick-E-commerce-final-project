import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <>
        <section class="newsletter bg-green-800 py-8 text-white">
        <div
          class="newsbox container px-5 mx-auto flex flex-col md:flex-row items-center justify-between"
        >
          <div class="max-w-2xl w-full text-center md:text-left mb-6 md:mb-0">
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-5">
              Get On the list?
            </h2>
            <p class="text-lg md:text-xl mb-4 md:mb-6">
              Sign up with your email address to receive updates.
            </p>
          </div>
          <form
            action="#"
            method="post"
            class="w-full md:w-auto flex flex-col md:flex-row items-center"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              class="w-96 md:w-96 p-3 mr-2 md:mb-0 rounded-md text-[13px] md:text-2xl text-gray-700 focus:outline-none"
              required
            />
            <button
              type="submit"
              class="bg-white text-lg md:text-xl font-semibold text-black px-6 py-3 md:py-4 rounded-md hover:bg-gray-200 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Newsletter
