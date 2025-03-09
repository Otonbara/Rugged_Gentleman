"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Form submitted:", formData);
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-slate-200 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {/* Success Message */}
        {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-6 rounded-lg space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-8 text-center space-y-3 text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-gray-800" /> <a href="tel:+2341234567890" className="hover:underline">+234 123 456 7890</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-gray-800" /> <a href="mailto:info@ruggedgentleman.com" className="hover:underline">info@ruggedgentleman.com</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-gray-800" /> 123 Lagos Street, Nigeria
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 gap-4">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="#" className="text-pink-600 text-2xl hover:text-pink-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
            <FaTwitter />
          </a>
        </div>

        {/* Google Maps */}
        <div className="mt-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d413.4634430865981!2d6.287809416710689!3d4.932190765645877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1741485208820!5m2!1sen!2sng"
            className="w-full h-64 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
