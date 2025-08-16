import { Link } from 'react-router-dom';
import heroBackground from '../assets/hero-bg.jpg'; 
import { useEffect } from 'react';


export default function Home() {

    useEffect(() => {
      document.title = 'SwiftMove - Home'; // Set the tab title
    }, []); // Empty dependency array ensures it runs once on mount
  
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section
         className="bg-cover bg-center h-screen flex items-center justify-center pt-20"
        style={{
            backgroundImage: `url(${heroBackground})`,
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="text-center text-white bg-black bg-opacity-60 p-8 rounded"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Streamline Your Logistics Operations with SwiftMove
          </h2>
          <p className="mb-6 text-lg">
            Fast, efficient, and smart delivery management tailored for Nigeria.
          </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center items-center">
            <button
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                Request Quote
            </button>
            <Link
                to="/register"
                className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors"
                data-aos="fade-left"
                data-aos-delay="500"
            >
                Get Started
            </Link>
            </div>
                    </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-gray-50" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto px-4">
          <h3
            className="text-3xl font-bold text-center mb-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Quick Transport and Delivery Solutions Across Nigeria
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Road Freight',
              'Warehouse Management',
              'Customs Clearance',
              'Local Dispatch',
              'Fleet Tracking',
              'Driver Assignment',
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded shadow text-center"
                data-aos="zoom-in"
                data-aos-delay={`${200 + idx * 100}`}
              >
                <h4 className="font-semibold text-xl mb-2">{service}</h4>
                <p>Reliable and efficient {service.toLowerCase()} to support your growing business.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div data-aos="fade-right" data-aos-delay="200">
            <div className="text-4xl mb-2">📍</div>
            <h4 className="font-bold text-lg mb-2">Real-time Tracking</h4>
            <p>Track your deliveries in real-time with our robust tracking system.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl mb-2">🚚</div>
            <h4 className="font-bold text-lg mb-2">On-time Delivery</h4>
            <p>Ensure fast and timely delivery to keep customers satisfied.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <div className="text-4xl mb-2">📞</div>
            <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
            <p>We're always available to support your logistics needs.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-50 py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Shipments Delivered', value: '2,000+' },
            { label: 'Partnered Drivers', value: '50+' },
            { label: 'Cities Reached', value: '100+' },
            { label: 'Satisfaction Rate', value: '99%' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow"
              data-aos="zoom-in"
              data-aos-delay={`${200 + idx * 100}`}
            >
              <h5 className="text-2xl font-bold text-green-600">{stat.value}</h5>
              <p className="mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3
            className="text-3xl font-bold mb-10"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Choose a Plan That Fits You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$49', features: ['Up to 100 shipments', '1 driver', 'Email Support'] },
              { name: 'Standard', price: '$99', features: ['Up to 500 shipments', '5 drivers', 'Phone Support'] },
              { name: 'Enterprise', price: '$149', features: ['Unlimited shipments', '20+ drivers', '24/7 Support'] },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded shadow"
                data-aos="zoom-in"
                data-aos-delay={`${200 + idx * 100}`}
              >
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className="text-3xl font-semibold mb-4">{plan.price}/mo</p>
                <ul className="mb-4 text-sm space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-20 bg-red-50" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3
            className="text-3xl font-bold mb-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Register now to start managing your logistics operations in real time.
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border px-4 py-2 rounded"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <select
              className="border px-4 py-2 rounded"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <option>Business Type</option>
              <option>Retail</option>
              <option>Wholesale</option>
              <option>Courier</option>
            </select>
            <input
              type="text"
              placeholder="Message"
              className="border px-4 py-2 rounded"
              data-aos="fade-left"
              data-aos-delay="400"
            />
          </form>
          <Link
            to="/register"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Submit
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-100" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3
            className="text-3xl font-bold mb-10"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Meet Our Team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded shadow"
                data-aos="zoom-in"
                data-aos-delay={`${200 + i * 100}`}
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                  alt="Team Member"
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h4 className="font-semibold">Full Name</h4>
                <p className="text-sm text-gray-500">Logistics Expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3
            className="text-3xl font-bold mb-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Chinedu A.',
                comment: 'SwiftMove has improved our delivery time drastically!',
              },
              {
                name: 'Ngozi E.',
                comment: 'A game changer for logistics in Nigeria. Highly recommended.',
              },
              {
                name: 'Tunde O.',
                comment: 'Their real-time tracking and support is amazing.',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded shadow"
                data-aos="zoom-in"
                data-aos-delay={`${200 + i * 100}`}
              >
                <p className="italic">“{t.comment}”</p>
                <h4 className="mt-4 font-bold">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
