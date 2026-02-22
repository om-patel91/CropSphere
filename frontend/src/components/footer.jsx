const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">CropSphere</h2>
          <p className="text-gray-300">
            Smart agriculture platform for seeds, fertilizers,
            machinery rentals, government schemes and AI farming support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Shop</li>
            <li>Rentals</li>
            <li>Education</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Seed Marketplace</li>
            <li>Equipment Rental</li>
            <li>Weather Updates</li>
            <li>AI Farming Assistant</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md text-black mb-3"
          />
          <button className="bg-secondary px-4 py-2 rounded-md w-full font-semibold">
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-12 pt-6 text-center text-gray-300">
        © {new Date().getFullYear()} CropSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;