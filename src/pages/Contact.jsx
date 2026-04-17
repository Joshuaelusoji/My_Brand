import { FaWhatsapp, BsFillTelephoneFill, CiMail } from '../icons';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white px-8 py-16 bg-diagonal-lines">
      <h2 className="font-urbanist font-bold text-3xl mb-4 text-center tracking-wide">Let's Connect</h2>
      <p className="text-center mb-8">Have a project in mind? Let's build something amazing together.</p>
      <form className="max-w-2xl mx-auto flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Name" required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"/>
        <input type="email" name="email" placeholder="Email" required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"/>
        <textarea name="message" placeholder="Message" required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"></textarea>
        <button type="submit" className="px-6 py-3 font-semibold text-white border-2 border-yellow-500 rounded-lg transition-colors hover:bg-yellow-500 hover:text-gray-900">
          Send Message
        </button>
      </form>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="mailto:joshuaelusoji7@gmail.com" target="_blank" className="flex items-center gap-2 hover:text-yellow-500">
          <CiMail className="w-5 h-5 text-blue-500" />Mail
        </a>
        <a href="tel:+2349035680651" className="flex items-center gap-2 hover:text-yellow-500">
          <BsFillTelephoneFill className='w-5 h-5 text-gray-400'/>Hotline
        </a>
        <a href="https://wa.me/2349035680651" target="_blank" className="flex items-center gap-2 hover:text-yellow-500">
          <FaWhatsapp className="w-5 h-5 text-green-500" /> WhatsApp
        </a>
      </div>
    </section>
  );
}