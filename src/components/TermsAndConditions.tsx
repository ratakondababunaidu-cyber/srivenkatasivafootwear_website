export default function TermsAndConditions() {
  return (
    <section id="terms" className="py-20 px-6 md:px-24 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-3xl font-black italic uppercase text-zinc-900">
          Terms And Conditions
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-6 text-zinc-700 text-sm md:text-base leading-7">
        <p>
          <span className="font-bold">Product Information and Accuracy:</span>{" "}
          Clarify that while you strive for accuracy in product descriptions and
          images, variations may occur, and the displayed images are for
          illustrative purposes only.
        </p>

        <p>
          <span className="font-bold">Pricing and Payment:</span> Specify that
          all prices are in a particular currency, subject to change without
          notice. Outline accepted payment methods and state that additional
          charges like taxes and shipping fees may apply.
        </p>

        <p>
          <span className="font-bold">Returns and Exchanges:</span> Highlight
          your return and exchange policy, including the timeframe for returns,
          conditions for refunds or exchanges, and any requirements for
          returning products in their original condition and packaging.
        </p>

        <p>
          <span className="font-bold">Intellectual Property:</span> Assert
          ownership of all content on your website and prohibit the
          reproduction, distribution, or modification of said content without
          prior consent.
        </p>

        <p>
          <span className="font-bold">Governing Law:</span>Governing Law: State
          the jurisdiction under which these terms and conditions are governed
          and construed, typically the laws of your country, to establish legal
          clarity and consistency.
        </p>
      </div>
    </section>
  );
}
