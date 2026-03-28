import React from 'react';
import { MessageSquare, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    const phoneNumber = "919848037385"; // Updated with the number from the snippet
    const message = encodeURIComponent("Hello Sri venkatasiva! I'm interested in your elite footwear collection.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter text-zinc-900">
              Connect <br /> With the <br /> Elite
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-2">Flagship Store</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Sri Venkata siva Footwear<br /> #10-2-138, T.K. Street, Tirupati, Andhra Pradesh 517501, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-2">Call Us</h4>
                <p className="text-zinc-500 text-sm">+91 9848037385</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-xs mb-2">Email</h4>
                <p className="text-zinc-500 text-sm">ratakondababunaidu@gmail.com</p>
              </div>
            </div>
          </div>

          {/* <button 
            onClick={handleWhatsApp}
            className="flex items-center gap-4 px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-emerald-600 transition-all group"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            Chat on WhatsApp
          </button> */}
        </div>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden opacity-80 border border-zinc-200 shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.406821422791!2d79.4161048758844!3d13.63548049942472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b038ab8d68b%3A0x19718a6b16968728!2sSri%20Venkatasiva%20Footwear!5e0!3m2!1sen!2sin!4v1710418748000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
