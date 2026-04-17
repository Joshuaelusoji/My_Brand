import TheCity from '../assets/images/TheCity.png';
import goldenGroove from '../assets/images/goldenGroove.png';
import MyPortfolio from '../assets/images/MyPortfolio.png';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-900 text-white px-8 pb-16">
      <h2 className="font-urbanist font-semibold text-center text-4xl mb-8 pt-4 pb-12 tracking-wide">Recent Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img src={TheCity} alt="TheCity" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">Luxury Hotel Website</h3>
            <p>Sophisticated design with easy booking and a user-friendly layout.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
          <img src={MyPortfolio} alt="myPortfolio_png" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">Premium Portfolio Template</h3>
            <p>A clean, professional template showcasing design and Web-development skills.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img src={goldenGroove} alt="goldenGroove_png" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">Music Landing Page for an Artist</h3>
            <p>A sleek, high-end web experience, showcasing the artist's unique sound and style.</p>
          </div>
        </div>
      </div>
    </section>
  );
}