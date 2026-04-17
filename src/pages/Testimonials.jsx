import Smith from '../assets/images/Smith.jpeg';
import David from '../assets/images/David.jpeg';
import Debby from '../assets/images/Debby.jpg';
import Timmy from '../assets/images/Timmy.jpeg';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Smith Gbolahan", role: "CyberSecurity Analyst",
      feedback: '"Joshua is a highly professional and creative developer. I\'m really impressed with the results!"',
      image: Smith, imageClass: "border-2 border-yellow-500 brightness-110 object-[80%_30%] scale-x-[-1]"
    },
    {
      name: "David Owoeye", role: "Entrepreneur",
      feedback: "Joshua did an excellent job onboarding our business to the online community. His website has brought visible engagement and growth to our brand.",
      image: David, imageClass: "border-2 border-yellow-500 brightness-110 object-[80%_30%]"
    },
    {
      name: "Deborah Akinfolarin", role: "Data Annotator",
      feedback: '"Joshua delivered an amazing website with clean design and great performance. Highly recommend!"',
      image: Debby, imageClass: "border-2 border-yellow-500 brightness-110 object-[80%_30%]"
    },
    {
      name: "Timmy Okunloye", role: "Accountant & Auditor",
      feedback: '"Working with Joshua was seamless. The website exceeded our expectations."',
      image: Timmy, imageClass: "border-2 border-yellow-500 brightness-110 object-[50%_25%]"
    },
  ];

  return (
    <section id="testimonial" className="bg-gray-900 text-white px-8 py-16 bg-diagonal-lines">
      <h2 className="font-urbanist font-semibold text-3xl mb-4 text-center tracking-wider">Testimonials</h2>
      <p className="text-center mb-8">What people are saying about my work</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col h-full">
            <div className="flex justify-center mt-6">
              <img src={t.image} alt={t.name} className={`h-24 w-24 rounded-full object-cover ${t.imageClass}`}/>
            </div>
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-urbanist font-semibold text-2xl text-white mb-2 tracking-wider">{t.name}</h3>
                <p className="text-gray-300 mb-4">{t.role}</p>
                <p className="text-gray-200 italic">{t.feedback}</p>
              </div>
            </div>
            <div className="bg-gray-700 text-gray-300 text-sm p-4 text-center">Feedback</div>
          </div>
        ))}
      </div>
    </section>
  );
}