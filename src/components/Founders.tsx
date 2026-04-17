import founderImg from "../images/Founder.jpeg";

export default function Founders() {
  return (
    <section id="founders" className="py-20 px-6 md:px-20 bg-white">
      {/* Title */}
      <h2 className="text-xl md:text-3xl font-black italic uppercase text-zinc-900">
        Our Founders
      </h2>
      {/* <div className="text-center mb-10">
        <h2 className="text-xl md:text-3xl font-black italic uppercase text-zinc-900">
          Our Founders
        </h2>
      </div> */}

      {/* Founder Card */}
      <div className="flex justify-center">
        <div className="text-center max-w-sm">
          {/* Image */}
          <img
            src={founderImg}
            alt="Founder"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-lg mx-auto"
          />

          {/* Name */}
          <h3 className="mt-6 text-lg md:text-xl font-semibold text-blue-900 uppercase tracking-wide">
            RATAKONDA BABU NAIDU
          </h3>

          {/* Optional Role */}
          <p className="text-zinc-500 text-sm mt-2">PROPRIETOR</p>
        </div>
      </div>
    </section>
  );
}
