
import { Button } from "@/components/ui/button";

const treatments = [
  {
    title: "Thai Massage",
    description: "Ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Sports Massage",
    description: "Targeted therapy to help athletes prepare for and recover from intense physical activity.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Reflexology",
    description: "Pressure applied to specific points on the feet corresponding to organs and systems throughout the body.",
    image: "https://images.unsplash.com/photo-1554057009-8da6250031a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Aromatherapy",
    description: "Essential oils enhance the benefits of massage while promoting emotional and physical well-being.",
    image: "https://images.unsplash.com/photo-1545620831-7cb0cc28ec80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const TreatmentsSection = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-white" id="treatments">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Treatments</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            Discover our full range of therapeutic treatments designed to enhance your wellbeing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {treatments.map((treatment, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif mb-3 text-wellness-900">{treatment.title}</h3>
                <p className="text-wellness-800 mb-4">{treatment.description}</p>
                <a 
                  href="#pricing" 
                  className="text-wellness-600 hover:text-wellness-800 text-sm font-medium transition-colors underline underline-offset-4"
                  onClick={scrollToPricing}
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-wellness-600 hover:bg-wellness-700"
            onClick={() => {
              const element = document.getElementById("pricing");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View All Treatments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
