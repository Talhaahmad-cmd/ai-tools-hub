export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Access to basic AI tools",
        "Search AI directory",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "$9/month",
      features: [
        "Premium AI tools",
        "Advanced recommendations",
        "Priority support",
      ],
    },
    {
      name: "Business",
      price: "$29/month",
      features: [
        "Team access",
        "Custom AI solutions",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-slate-950 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          Choose Your Plan
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {plan.name}
              </h3>

              <p className="text-4xl font-bold mt-4">
                {plan.price}
              </p>


              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>


              <button className="mt-8 w-full bg-cyan-500 text-black py-3 rounded-lg hover:bg-cyan-400">
                Get Started
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}