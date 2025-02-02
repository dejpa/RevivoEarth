import Link from "next/link";
import { FaWind, FaLeaf, FaTint, FaSun, FaCity, FaRecycle } from "react-icons/fa";

export default function EnvironmentalImpact() {
  return (
    <div className="bg-white text-gray-800">
      {/* hero section  */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/environmental-impact.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Environmental Impact of Oil Mulch</h1>
          <p className="text-xl">
            Discover how oil mulch contributes to a sustainable future by protecting soil, reducing dust, and improving air quality.
          </p>
        </div>
      </section>

      {/* بخش‌های مختلف */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* بخش ۱: کاهش فرسایش بادی و کنترل طوفان‌های گرد و غبار */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaWind className="text-green-600 h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold">Reducing Wind Erosion and Controlling Dust Storms</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Oil mulch stabilizes the soil surface, preventing the movement of fine particles that contribute to dust storms.
            </p>
            <p className="text-gray-600">
              In areas affected by strong winds, this product helps reduce air pollution and improves overall air quality.
            </p>
          </div>

          {/* بخش ۲: حفظ تنوع زیستی */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-green-600 h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold">Preserving Biodiversity</h2>
            </div>
            <p className="text-gray-600 mb-4">
              By preventing soil erosion, natural habitats remain intact, protecting biodiversity.
            </p>
            <p className="text-gray-600">
              Improved soil conditions allow for the regeneration of vegetation, which strengthens local ecosystems in the long run.
            </p>
          </div>

          {/* بخش ۳: افزایش بهره‌وری کشاورزی و مبارزه با تغییرات اقلیمی */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaSun className="text-green-600 h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold">Enhancing Agricultural Productivity and Combating Climate Change</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Applying oil mulch to degraded lands and agricultural fields helps retain soil moisture.
            </p>
            <p className="text-gray-600">
              Reduced dust levels improve sunlight penetration and photosynthesis, ultimately increasing agricultural yields.
            </p>
          </div>

          {/* بخش ۴: کاهش مصرف آب در مناطق خشک */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaTint className="text-green-600 h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold">Reducing Water Consumption in Arid Regions</h2>
            </div>
            <p className="text-gray-600 mb-4">
              One of the biggest challenges in dry areas is rapid water evaporation from the soil surface.
            </p>
            <p className="text-gray-600">
              Oil mulch acts as a protective layer, minimizing water loss and making it particularly useful in regions facing water scarcity.
            </p>
          </div>

          {/* بخش ۵: بهبود شرایط زندگی شهری و کاهش هزینه‌های اقتصادی */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaCity className="text-green-600 h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold">Improving Urban Living Conditions and Lowering Economic Costs</h2>
            </div>
            <p className="text-gray-600 mb-4">
              By reducing dust pollution, oil mulch helps improve air quality, leading to fewer respiratory problems and associated health costs.
            </p>
            <p className="text-gray-600">
              It also minimizes damage to industrial equipment, solar panels, and wind turbines, reducing maintenance and repair expenses.
            </p>
          </div>

          {/* بخش ۶: یک جایگزین پایدار برای روش‌های سنتی تثبیت خاک */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaRecycle className="text-green-600 h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold">A Sustainable Alternative to Traditional Soil Stabilization Methods</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Compared to conventional methods like planting vegetation or building soil barriers, oil mulch provides a faster and more efficient solution for soil stabilization.
            </p>
            <p className="text-gray-600">
              Unlike harmful chemical treatments, this product does not negatively impact soil health or water resources, making it a viable option for sustainable land management.
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