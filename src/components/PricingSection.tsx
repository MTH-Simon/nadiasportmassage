
const treatments = [
  {
    name: "Sports Massage",
    duration: "45 min",
    price: "£75"
  },
  {
    name: "Lymphatic Drainage",
    duration: "90 min",
    price: "£150"
  },
  {
    name: "Head Massage",
    duration: "30 min",
    price: "£50"
  },
  {
    name: "Head Massage",
    duration: "45 min",
    price: "£75"
  },
  {
    name: "Facial Scar Tissue",
    duration: "30 min",
    price: "£50"
  },
  {
    name: "Upper Body (Neck, Shoulders, Back & Scalp)",
    duration: "60 min",
    price: "£100"
  },
  {
    name: "Full Body",
    duration: "75 min",
    price: "£125"
  },
  {
    name: "Lower Body (Legs, Hamstrings, Glutei, IT Band, Calves, Achilles, Soles & Quads/hips)",
    duration: "60 min",
    price: "£100"
  },
  {
    name: "Lower Body",
    duration: "75 min",
    price: "£125"
  },
  {
    name: "Full Body Massage (Strong)",
    duration: "90 min",
    price: "£150"
  },
  {
    name: "From Head To Toes",
    duration: "120 min",
    price: "£200"
  },
  {
    name: "More Work",
    duration: "135 min",
    price: "£225"
  },
  {
    name: "More Work",
    duration: "150 min",
    price: "£250"
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-wellness-50" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">My Treatment Prices</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            Professional treatments personally delivered to help with your recovery and relaxation
          </p>
        </div>
        
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-wellness-100">
            <thead className="bg-wellness-100">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-wellness-800 uppercase tracking-wider">
                  Treatment
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-wellness-800 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-wellness-800 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-wellness-100">
              {treatments.map((treatment, index) => (
                <tr key={index} className="hover:bg-wellness-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                    {treatment.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                    {treatment.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                    {treatment.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-wellness-700 text-sm">
            <span className="font-medium">Gift Vouchers available ·</span> Receipt provided
          </p>
          <p className="text-wellness-700 text-sm">
            <span className="font-medium">All treatments include Hot Stones at £5 extra</span>
          </p>
          <p className="text-wellness-700 text-sm italic">
            * Please Note: Depending on the injury/problem/workload needed, price may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
