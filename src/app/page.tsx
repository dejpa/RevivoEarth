"use client"; 
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaLeaf , FaCheckCircle, FaShieldAlt} from "react-icons/fa";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      window.open("https://www.dejpa.com", "_blank");
    }, 10000); // 10 ثانیه بعد
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* hero section */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/cover.jpeg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Struggling with Soil Erosion and Dust Problems?
          </h1>
          <p className="text-xl mb-8">
            Discover how innovative oil mulch enhances land resilience, supports sustainability, and
            embodies creativity in environmental solutions.
          </p>
          <div className="space-x-4">
            <a href="/product" className="bg-zinc-200 text-green-950 px-6 py-3 rounded-lg hover:bg-lime-600 hover:text-white transition duration-300">
              Learn More
            </a>
            <a href="/contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-950 transition duration-300">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/*section: Problem Explanation and Need Creation  */}
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-600">
            Traditional Mulch Solutions Are Not Enough!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Land degradation and desertification are among the most critical environmental challenges of the 21st century. Wind and water erosion have destroyed millions of hectares of land, threatening food security, biodiversity, and economic stability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* مشکل ۱: کاهش حاصلخیزی خاک */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Reduced Soil Fertility</h3>
              <p className="text-gray-600">
                Wind erosion strips away the fertile topsoil, making it difficult for plants to grow.
              </p>
            </div>

            {/* مشکل ۲: افزایش گرد و غبار */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Increased Dust Storms</h3>
              <p className="text-gray-600">
                Dust particles can travel thousands of kilometers, affecting air quality and human health.
              </p>
            </div>

            {/* مشکل ۳: خسارات اقتصادی */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Economic Losses</h3>
              <p className="text-gray-600">
                Dust storms cause flight cancellations, reduce agricultural productivity, and damage infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*section: solution Proposal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-600">
            A Game-Changer for Soil Protection
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bio-Oil Mulch is an innovative solution designed to combat soil erosion, stabilize sand dunes, and promote sustainable land management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* مزیت ۱: Sustainability */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <FaLeaf className="text-green-600 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly and harmless to plants, our product supports a greener future.
              </p>
            </div>

            {/* مزیت ۲: Resilience */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <FaShieldAlt className="text-green-600 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Resilience</h3>
              <p className="text-gray-600">
                Provides strong protection against soil erosion and harsh weather conditions.
              </p>
            </div>

            {/* مزیت ۳: Creativity */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <FaCheckCircle className="text-green-600 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Creativity</h3>
              <p className="text-gray-600">
                An innovative blend inspired by nature, designed for modern challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof and Trust-Building  */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-600">
            Trusted by Experts, Loved by Nature
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our product has been scientifically tested and proven effective in real-world applications. Here's what experts and customers are saying:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <blockquote className="text-gray-600 italic">
                "Bio-Oil Mulch has revolutionized soil stabilization. It's effective, eco-friendly, and easy to apply."
              </blockquote>
              <p className="mt-4 font-semibold text-green-600">- Dr. Ali Reza, Environmental Scientist</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <blockquote className="text-gray-600 italic">
                "We've seen a significant reduction in dust storms since using Bio-Oil Mulch. Highly recommended!"
              </blockquote>
              <p className="mt-4 font-semibold text-green-600">- Farm Owner, Yazd Province</p>
            </div>
          </div>
          {/* link to dejpa */}
          <div className="mt-12">
            <a
              href="https://dejpa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-green-600 underline"
            >
              Learn more about our commitment to sustainability at Dejpa.
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Ready to Make a Change?
          </h2>
          <p className="text-xl mb-8">
            Join us in our mission to create a sustainable future. Contact us today to learn more about our products and services.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-950 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}