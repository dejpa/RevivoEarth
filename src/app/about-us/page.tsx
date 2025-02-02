import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* hero section  */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/about-us.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">
            Discover the story behind Bio-Oil Mulch and our commitment to sustainable soil protection.
          </p>
        </div>
      </section>

      {/* معرفی شرکت */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">Who We Are</h2>
          <p className="text-gray-600 mb-8">
            At Bio-Oil Mulch, we are dedicated to providing innovative and eco-friendly solutions for soil protection and dust control. Our mission is to revolutionize the way industries, agriculture, and construction sites manage soil erosion and dust problems.
          </p>
          <p className="text-gray-600">
            With years of experience and a passion for sustainability, we have developed Bio-Oil Mulch, a groundbreaking product that combines environmental responsibility with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* تاریخچه شرکت */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">Our History</h2>
          <p className="text-gray-600 mb-8">
            Founded in [Year], Bio-Oil Mulch started as a small team of environmental enthusiasts with a vision to create sustainable solutions for soil protection. Over the years, we have grown into a leading provider of eco-friendly mulch products, serving clients across various industries.
          </p>
          <p className="text-gray-600">
            Our journey has been marked by innovation, resilience, and a commitment to making a positive impact on the environment.
          </p>
        </div>
      </section>

      {/* ماموریت و ارزش‌ها */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">Our Mission & Values</h2>
          <p className="text-gray-600 mb-8">
            Our mission is to provide sustainable and effective solutions for soil protection, helping industries and communities combat soil erosion and dust problems. We are guided by the following core values:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong className="text-green-950">Sustainability:</strong> We prioritize eco-friendly solutions that protect the environment.</li>
            <li><strong className="text-green-950">Innovation:</strong> We continuously strive to develop cutting-edge products.</li>
            <li><strong className="text-green-950">Integrity:</strong> We are committed to honesty and transparency in all our dealings.</li>
            <li><strong className="text-green-950">Customer Focus:</strong> We put our customers' needs at the heart of everything we do.</li>
          </ul>
        </div>
      </section>

      {/* محصولات و خدمات */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">Our Product: Bio-Oil Mulch</h2>
          <p className="text-gray-600 mb-8">
            Bio-Oil Mulch is a revolutionary product designed to protect soil, control dust, and promote sustainable land management. Here are some of its key benefits:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong className="text-green-950">Eco-Friendly:</strong> Made from biodegradable materials, it is safe for the environment.</li>
            <li><strong className="text-green-950">Effective Dust Control:</strong> Reduces airborne dust particles, improving air quality.</li>
            <li><strong className="text-green-950">Soil Stabilization:</strong> Prevents soil erosion and promotes plant growth.</li>
            <li><strong className="text-green-950">Cost-Effective:</strong> Reduces maintenance costs and improves soil health.</li>
          </ul>
        </div>
      </section>

      {/* تیم ما */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">Our Team</h2>
          <p className="text-gray-600 mb-8">
            Our team is composed of passionate professionals with expertise in environmental science, engineering, and business. Together, we are committed to delivering innovative solutions that make a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* عضو تیم ۱ */}
            <div className="text-center">
              <img src="/team-member-1.jpeg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* عضو تیم ۲ */}
            <div className="text-center">
              <img src="/team-member-2.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Research & Development</p>
            </div>

            {/* عضو تیم ۳ */}
            <div className="text-center">
              <img src="/team-member-3.jpeg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Ready to Make a Change?</h2>
          <p className="text-xl mb-8">
            Join us in our mission to create a sustainable future. Contact us today to learn more about our products and services.
          </p>
          <Link href="/contact" className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}