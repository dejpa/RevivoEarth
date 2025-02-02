import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="bg-white text-gray-800">
      {/* هیرو بخش */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/case-study.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl">
            Explore real-world applications and research findings on the use of bio-oil mulch and other biodegradable mulches in various environments.
          </p>
        </div>
      </section>

      {/* بخش‌های مختلف */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* مطالعه موردی ۱: فیلم‌های مالچ زیست‌محیطی در ایالات متحده */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Biodegradable Biobased Mulch Films in the United States</h2>
            <p className="text-gray-600 mb-4">
              A comprehensive report by the National Organic Standards Board (NOSB) in the U.S. examined the use of biodegradable biobased mulch films in agriculture. The study highlighted the environmental benefits of these mulches, such as reduced plastic waste and improved soil health.
            </p>
            <a
              href="https://www.ams.usda.gov/sites/default/files/media/CSBiodegradBiobasedFinalRec.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              Read the full report
            </a>
          </div>

          {/* مطالعه موردی ۲: مالچ پلاستیکی زیست‌تخریب‌پذیر در کنتیکت، ایالات متحده */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Biodegradable Plastic Mulch in Connecticut, USA</h2>
            <p className="text-gray-600 mb-4">
              Researchers at the University of Connecticut explored the use of biodegradable plastic mulch as an alternative to traditional polyethylene mulch. The study found that biodegradable mulch effectively controlled weeds, conserved soil moisture, and regulated soil temperature.
            </p>
            <a
              href="https://phys.org/news/2022-09-biodegradable-plastic-mulch-climate-smart-agricultural.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              Read more
            </a>
          </div>

          {/* مطالعه موردی ۳: فیلم‌های مالچ اسپری‌شدنی زیست‌محیطی در نبراسکا، ایالات متحده */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Biobased Sprayable Mulch Films in Nebraska, USA</h2>
            <p className="text-gray-600 mb-4">
              A study conducted at the University of Nebraska evaluated the efficacy of biobased sprayable mulch films for weed control in row crop systems. The research demonstrated that these sprayable mulches suppressed annual weeds effectively.
            </p>
            <a
              href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1283&context=agronhortdiss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              View the study
            </a>
          </div>

          {/* مطالعه موردی ۴: مطالعات زیست‌تخریب‌پذیری فیلم‌های مالچ زیست‌محیطی در مکزیک */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Biodegradation Studies of Biobased Mulch Films in Mexico</h2>
            <p className="text-gray-600 mb-4">
              Researchers in Mexico developed mulch films using gelatin, glycerol, and cellulose derived from waste mangoes. The study assessed the biodegradation time of these films in soil and found significant weight loss within 25 days.
            </p>
            <a
              href="https://www.mdpi.com/2313-4321/9/5/96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              Read the full article
            </a>
          </div>

          {/* مطالعه موردی ۵: مالچ پلاستیکی زیست‌تخریب‌پذیر در فنلاند */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Biodegradable Plastic Mulch in Finland</h2>
            <p className="text-gray-600 mb-4">
              A field study in Finland assessed the performance and environmental impact of biodegradable plastic mulches in agricultural settings. The findings indicated that while these mulches offered benefits such as weed suppression and soil moisture conservation, their degradation rates varied depending on environmental conditions.
            </p>
            <a
              href="https://journals.ashs.org/horttech/view/journals/horttech/26/2/article-p148.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              View the study
            </a>
          </div>

          {/* مطالعه موردی ۶: پذیرش مالچ زیست‌تخریب‌پذیر در عربستان سعودی */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Adoption of Biodegradable Mulch in Saudi Arabia</h2>
            <p className="text-gray-600 mb-4">
              A study conducted in Saudi Arabia assessed farmers' familiarity with biodegradable mulch films and their willingness to adopt this technology. The findings revealed that while many farmers were not initially aware of biodegradable mulches, a significant portion expressed interest in adopting them in the future.
            </p>
            <a
              href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2024.1423136/full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              Read the full article
            </a>
          </div>

          {/* مطالعه موردی ۷: تاثیر مالچ‌های مختلف در مناطق بیابانی ایران */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Effects of Different Mulches in Iran's Desert Regions</h2>
            <p className="text-gray-600 mb-4">
              Research in Iran's central desert areas evaluated the impact of various mulches—including resin, mineral, polymer, and biopolymer—on soil properties and plant growth. The study demonstrated that these mulches could improve soil moisture retention, reduce erosion, and enhance vegetation establishment.
            </p>
            <a
              href="https://www.researchgate.net/publication/360456429_Effects_of_different_mulches_on_soil_and_plants_in_the_desert_of_Iran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              View the study
            </a>
          </div>

          {/* مطالعه موردی ۸: تاثیر کوتاه‌مدت مالچ نفتی بر پویایی پوشش گیاهی در ایران */}
          <div className="mb-12">
            <h2 className="text-gray-600 text-3xl font-bold mb-4">Short-Term Impact of Oil Mulch on Vegetation Dynamics in Iran</h2>
            <p className="text-gray-600 mb-4">
              Another investigation in Iran examined the short-term effects of oil-based mulch on vegetation attributes such as cover and diversity. The study found that applying oil mulch influenced vegetation dynamics, with implications for its use in stabilizing mobile sands and supporting plant establishment in desert landscapes.
            </p>
            <a
              href="https://www.researchgate.net/publication/257368991_Evaluation_of_desert_management_and_rehabilitation_by_petroleum_mulch_base_on_temporal_spectral_analysis_and_field_study_case_study_Ahvaz_Iran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-950 underline"
            >
              View the study
            </a>
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