// src/app/contact/contact.ts

"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for reaching out! We will contact you soon.");
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/contact.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl">We’d love to hear from you. Whether you have questions or want to collaborate, reach out to us today.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* فرم تماس */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700  text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* اطلاعات تماس */}
            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-6">You can also reach us via the following contact details.</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-green-700 h-6 w-6" />
                  <span className="text-gray-700">+1 234 567 890</span>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-green-700 h-6 w-6" />
                  <span className="text-gray-700">info@yourdomain.com</span>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-green-700 h-6 w-6" />
                  <span className="text-gray-700">123 Green Street, Sustainability City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-xl mb-8">Interested in collaborating or learning more? Contact us today!</p>
          <a href="mailto:info@yourdomain.com" className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Email Us
          </a>
        </div>
      </section>

     
    </div>
  );
}
