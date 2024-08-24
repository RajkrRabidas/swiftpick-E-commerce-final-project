import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-white py-20">
        <div class="container mx-auto px-5">
          <div class="flex flex-wrap item-center justify-between">
            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-3xl font-semibold mb-4">Company</h3>
              <ul class="text-gray-600 font-normal text-2xl">
                <li>
                  <a href="#" class="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-3xl font-semibold mb-4">FAQ</h3>
              <ul class="text-gray-600 font-normal text-2xl">
                <li>
                  <a href="#" class="hover:text-black">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-3xl font-semibold mb-4">Resources</h3>
              <ul class="text-gray-600 font-normal text-2xl">
                <li>
                  <a href="#" class="hover:text-black">
                    Youtube Playlist
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Development Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-black">
                    Free eBooks
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full sm:w-1/4 mb-6">
              <h3 class="text-3xl font-bold mb-4">Social</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-black text-2xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-black text-2xl">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-black text-2xl">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-end items-center mt-4">
            <div class="flex space-x-4">
              <img src="logo-oppo.png" alt="Visa" class="h-8" />
              <img src="logo-godrej.png" alt="Mastercard" class="h-8" />
              <img src="logo-paypal.png" alt="Paypal" class="h-8" />
              <img src="app-store.png" alt="Apple Pay" class="h-8" />
              <img src="play-store.png" alt="Google Pay" class="h-8" />
            </div>
          </div>
          <p class="text-gray-600 text-xl text-center mt-10">
            Copyright 2024 By Raj
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
