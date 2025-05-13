
const treatments = [
  {
    name: "Swedish Massage",
    duration: "60 min",
    price: "$80",
    description: "Relaxing massage using long, smooth strokes"
  },
  {
    name: "Deep Tissue",
    duration: "60 min",
    price: "$95",
    description: "Targets deeper layers of muscle and connective tissue"
  },
  {
    name: "Hot Stone Therapy",
    duration: "75 min",
    price: "$110",
    description: "Uses heated stones to ease muscle tension"
  },
  {
    name: "Sports Massage",
    duration: "60 min",
    price: "$95",
    description: "Focuses on areas of the body that are overused during sports"
  },
  {
    name: "Aromatherapy",
    duration: "60 min",
    price: "$90",
    description: "Essential oils enhance massage benefits"
  },
  {
    name: "Thai Massage",
    duration: "90 min",
    price: "$120",
    description: "Combines acupressure, Indian Ayurvedic principles, and assisted yoga"
  },
  {
    name: "Reflexology",
    duration: "45 min",
    price: "$65",
    description: "Pressure applied to specific points on the feet"
  },
  {
    name: "Prenatal Massage",
    duration: "60 min",
    price: "$85",
    description: "Designed for expectant mothers past their first trimester"
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-wellness-50" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Treatment Prices</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            Our comprehensive range of treatments to nurture your body and mind
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
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-wellness-800 uppercase tracking-wider">
                  Description
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
                  <td className="px-6 py-4 text-sm text-wellness-800 max-w-xs">
                    {treatment.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                    {treatment.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-wellness-700 text-sm italic">
            * All prices subject to change. Package deals available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
