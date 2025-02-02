// src/app/applications/Applications.ts
import Link from "next/link";
import { FaShieldAlt, FaTint, FaTree, FaRoad, FaIndustry, FaCloud } from "react-icons/fa";

export default function Applications() {
  return (
    <div className="bg-white text-gray-800">
      {/* هیرو بخش */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/applications.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Applications of Bio-Oil Mulch</h1>
          <p className="text-xl">
            Discover the diverse applications of bio-oil mulch in agriculture, environmental restoration, and infrastructure protection.
          </p>
        </div>
      </section>

      {/* بخش‌های مختلف */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* بخش ۱: تثبیت خاک و کنترل بیابان‌زایی */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-green-700 h-8 w-8 mr-4" />
              <h2 className="text-gray-600 text-3xl font-bold">Soil Stabilization and Desertification Control</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Erosion Prevention:</strong> Bio-oil mulches help reduce wind and water erosion by forming a protective layer over the soil surface, preventing sand movement.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Sand Dune Fixation:</strong> In desert areas, these mulches are applied to stabilize shifting sand dunes, reducing the impact of sandstorms.
            </p>
            <p className="text-gray-600">
              <strong>Moisture Retention:</strong> By reducing evaporation, they help retain soil moisture, making arid land more suitable for plant growth.
            </p>
          </div>

          {/* بخش ۲: کشاورزی در مناطق خشک */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaTint className="text-green-700 h-8 w-8 mr-4" />
              <h2 className="text-gray-600 text-3xl font-bold">Agriculture in Arid Lands</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Water Conservation:</strong> Bio-oil mulches help retain moisture in soil, which is crucial for farming in dry climates.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Weed Suppression:</strong> They act as a barrier, preventing weed growth, reducing the need for herbicides.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Soil Health Improvement:</strong> Some bio-mulches decompose into organic material, enriching the soil with nutrients.
            </p>
            <p className="text-gray-600">
              <strong>Greenhouse Farming:</strong> Used to enhance soil fertility and control humidity in controlled agricultural environments.
            </p>
          </div>

          {/* بخش ۳: بازسازی محیط زیست و جنگل‌کاری */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaTree className="text-green-700 h-8 w-8 mr-4" />
              <h2 className="text-gray-600 text-3xl font-bold">Environmental Rehabilitation & Reforestation</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Land Restoration:</strong> Applied in degraded lands to restore fertility and promote vegetation growth.
            </p>
            <p className="text-gray-600">
              <strong>Tree Plantation & Reforestation:</strong> Helps seedlings survive in harsh climates by reducing moisture loss and protecting roots from extreme temperatures.
            </p>
          </div>

          {/* بخش ۴: حفاظت از زیرساخت‌ها */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaRoad className="text-green-700 h-8 w-8 mr-4" />
              <h2 className="text-gray-600 text-3xl font-bold">Infrastructure Protection</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Road and Railway Stabilization:</strong> Used along roadsides and railways in desert regions to prevent sand accumulation, which can obstruct transportation routes.
            </p>
            <p className="text-gray-600">
              <strong>Airport Runway Protection:</strong> Applied around desert airports to prevent sand encroachment onto runways.
            </p>
          </div>

          {/* بخش ۵: کاربردهای صنعتی و ساخت‌وساز */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaIndustry className="text-green-700 h-8 w-8 mr-4" />
              <h2 className="text-gray-600 text-3xl font-bold">Industrial and Construction Uses</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Dust Suppression:</strong> Used in mining and construction sites to control dust pollution.
            </p>
            <p className="text-gray-600">
              <strong>Pipeline & Solar Farm Protection:</strong> Prevents soil displacement around infrastructure in desert environments.
            </p>
          </div>

          {/* بخش ۶: کاهش تغییرات اقلیمی */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaCloud className="text-green-700 h-8 w-8 mr-4" />
              <h2 className="text-gray-600 text-3xl font-bold">Climate Change Mitigation</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Carbon Sequestration:</strong> Some bio-based mulches decompose into organic matter, improving carbon storage in the soil.
            </p>
            <p className="text-gray-600">
              <strong>Reducing Greenhouse Gas Emissions:</strong> They reduce the need for synthetic plastics and chemical herbicides, lowering environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Ready to Make a Change?</h2>
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