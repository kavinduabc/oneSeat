import React from 'react';
import Logo from '../SubComponents/Logo';

const Footer = () => {
  return (
    <footer className="bg-pink-100 px-6 py-10 mt-10 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Discover the perfect blend of elegance and comfort at OneSeat. Whether you're looking for a cozy sofa, a modern chair, or timeless wooden pieces, we offer high-quality furniture that transforms your space into a home.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Useful Links or Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Delivery & Returns</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} OneSeat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
