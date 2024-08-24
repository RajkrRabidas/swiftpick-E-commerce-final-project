import React from 'react'

const Testtimonial = () => {
  return (
    <>
            <section class="testimonials bg-gray-100 py-12 mt-20">
        <div class="container mx-auto px-4">
          <h2 class="text-5xl font-bold mb-14 text-center">
            What Our Customers Say
          </h2>
          <div class="flex flex-wrap justify-center">
            <div
              class="testimonial bg-white shadow-md rounded-lg p-6 mx-4 mb-8 h-48 w-full sm:w-1/2 lg:w-2/5"
            >
              <div class="flex items-center mb-4">
                <img
                  src="user-1.png"
                  alt="Customer 1"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p class="text-2xl font-semibold">John Doe</p>
                  <p class="text-gray-600 text-xl">Verified Buyer</p>
                </div>
              </div>
              <p class="text-gray-800 text-xl">
                "Excellent service and great quality products. Highly
                recommend!"
              </p>
            </div>
            <div
              class="testimonial bg-white shadow-md rounded-lg p-6 mx-4 mb-8 h-48 w-full sm:w-1/2 lg:w-2/5"
            >
              <div class="flex items-center mb-4">
                <img
                  src="user-2.png"
                  alt="Customer 1"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p class="text-2xl font-semibold">John Doe</p>
                  <p class="text-gray-600 text-xl">Verified Buyer</p>
                </div>
              </div>
              <p class="text-gray-800 text-xl">
                "Excellent service and great quality products. Highly
                recommend!"
              </p>
            </div>
            <div
              class="testimonial bg-white shadow-md rounded-lg p-6 mx-4 mb-8 h-48 w-full sm:w-1/2 lg:w-2/5"
            >
              <div class="flex items-center mb-4">
                <img
                  src="user-3.png"
                  alt="Customer 1"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p class="text-2xl font-semibold">John Doe</p>
                  <p class="text-gray-600 text-xl">Verified Buyer</p>
                </div>
              </div>
              <p class="text-gray-800 text-xl">
                "Excellent service and great quality products. Highly
                recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testtimonial
