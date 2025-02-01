

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* هیرو بخش */}
      <section className=" bg-green-950 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Revolutionizing Environmental Sustainability
          </h1>
          <p className="text-xl mb-8">
            Our Bio-Oil Mulch is the eco-friendly solution for soil preservation and dust control.
          </p>
          <div className="space-x-4">
            <a
              href="/product"
              className="bg-lime-800 text-white px-6 py-3 rounded-lg hover:bg-lime-600 transition duration-300"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-950 transition duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* مزایای کلیدی */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Bio-Oil Mulch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* مزیت ۱ */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              {/* <FaLeaf className="text-green-500 h-12 w-12 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Our product is 100% biodegradable and safe for the environment.
              </p>
            </div>

            {/* مزیت ۲ */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              {/* <FaShieldAlt className="text-green-500 h-12 w-12 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Dust Control</h3>
              <p className="text-gray-600">
                Effectively prevents dust and airborne particles.
              </p>
            </div>

            {/* مزیت ۳ */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              {/* <FaCheckCircle className="text-green-500 h-12 w-12 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
              <p className="text-gray-600">
                Reduces maintenance costs and improves soil health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* معرفی کوتاه شرکت */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a leading company in sustainable environmental solutions. Our mission is to
            provide innovative products that protect the planet while meeting the needs of modern
            industries. With years of experience, we are committed to delivering high-quality,
            eco-friendly solutions.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-950 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Make a Change?</h2>
          <p className="text-xl mb-8">
            Join us in our mission to create a sustainable future. Contact us today to learn more
            about our products and services.
          </p>
          <a
            href="/contact"
            className="bg-lime-800 text-white px-6 py-3 rounded-lg hover:bg-lime-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}