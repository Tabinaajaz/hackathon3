export default function PricingFAQs() {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
        <p className="text-lg text-gray-400">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Item */}
        {Array(6).fill(0).map((_:any, index) => (
          <div key={index} className="flex gap-4">
            <div className="text-blue-500 text-xl">&gt;</div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                the quick fox Jumps over the lazy dog
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-gray-400">
          Have not got your answer?{" "}
          <span className="text-blue-500 underline cursor-pointer">
            Contact our support
          </span>
        </p>
      </div>
    </div>
  );
}
