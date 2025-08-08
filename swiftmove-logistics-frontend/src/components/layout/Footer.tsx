export default function Footer() {
  return (
    <footer className="bg-black text-white py-10" data-aos="fade-up" data-aos-delay="100">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div data-aos="fade-right" data-aos-delay="200">
          <h4 className="font-bold text-lg mb-2">SwiftMove Logistics </h4>
          <p>Reliable logistics and smart delivery services across Nigeria.</p>
          <div className="flex space-x-2 mt-2">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="font-bold mb-2">Contact</h4>
          <p>📞 +234 901 234 5678</p>
          <p>📍 Lagos, Nigeria</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <h4 className="font-bold mb-2">Newsletter</h4>
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 w-full text-black rounded"
          />
          <button className="mt-2 bg-green-600 px-4 py-2 rounded w-full hover:bg-green-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center text-sm mt-6" data-aos="fade-up" data-aos-delay="600">
        © 2025 SwiftMove Logistics. All rights reserved.
      </p>
    </footer>
  );
}
