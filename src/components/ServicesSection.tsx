
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Deep Tissue",
    description: "Our deep tissue massage targets chronic pain and tension, focusing on the deepest layers of muscle tissue and fascia.",
    icon: "🤲",
  },
  {
    title: "Hot Stone",
    description: "Experience ultimate relaxation as smooth, heated stones are placed on key points of the body to melt away tension.",
    icon: "🪨",
  },
  {
    title: "Swedish",
    description: "Our classic Swedish massage uses long, flowing strokes to improve circulation, ease muscle tension and promote relaxation.",
    icon: "💆",
  },
];

const ServicesSection = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Services</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            We offer a variety of massage therapies to meet your specific needs, each designed to promote wellness and relaxation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-wellness-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-2">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <CardTitle className="text-xl font-serif text-wellness-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-wellness-800">
                  {service.description}
                </CardDescription>
                <div className="mt-6 text-center">
                  <a 
                    href="#pricing" 
                    className="text-wellness-600 hover:text-wellness-800 text-sm font-medium transition-colors underline underline-offset-4"
                    onClick={scrollToPricing}
                  >
                    View Details
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
