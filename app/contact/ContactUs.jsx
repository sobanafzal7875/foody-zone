'use client'

import { dividerClasses } from '@mui/material';
import React from 'react';

const ContactUs = () => {
  return (
    <div>
        <div className=' contact flex justify-center items-center'>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center  mb-8">
          Contact Us
        </h2>
        </div>
          <div className=" mt-16 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        {/* <h2>leave a massage</h2> */}

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
          <form>
            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-white hover:text-red-600 hover:border-red-600 border border-transparent transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Our Contact Information
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> info@example.com
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Main St, City, Country
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;