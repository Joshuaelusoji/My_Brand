import { Code, LayoutDashboard, Cpu, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="from-gray-900 via-black to-gray-900 text-white px-8 py-20 bg-diagonal-lines">
      <h2 className="font-urbanist font-semibold text-4xl text-center mb-16 text-white tracking-wider">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Website Design & Development
            <Code className="text-orange-800 w-10 h-10 transition-transform duration-700 group-hover:rotate-[360deg]" />
          </h3>
          <p className="font-urbanist font-light absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            Modern and responsive websites tailored to your brand and audience.
          </p>
          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Elegant, interactive, and luxury-inspired web experiences.
          </p>
        </div>
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Landing Pages
            <LayoutDashboard className="text-blue-800 w-10 h-10 duration-700 group-hover:rotate-[360deg]" />
          </h3>
          <p className="absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            High-converting landing pages for products, hotels, or businesses.
          </p>
          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Sleek and persuasive pages that attract clicks and build trust.
          </p>
        </div>
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Website Maintenance
            <Cpu className="text-green-800 w-10 h-10 duration-700 group-hover:rotate-[360deg]" />
          </h3>
          <p className="absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            Keep your website fast, secure, and up-to-date.
          </p>
          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Regular updates, performance tuning, and bulletproof reliability.
          </p>
        </div>
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Brand Websites
            <Sparkles className="text-yellow-600 w-10 h-10 duration-700 group-hover:rotate-[360deg]" />
          </h3>
          <p className="absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            Luxury websites for hotels, resorts, agencies, and premium brands.
          </p>
          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Premium visuals, elite design, and flawless brand storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}