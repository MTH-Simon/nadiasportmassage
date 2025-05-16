
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    title: "Deep Tissue",
    description: "Our deep tissue massage targets chronic pain and tension, focusing on the deepest layers of muscle tissue and fascia.",
    icon: "🤲",
    details: "Deep tissue massage is designed to relieve severe tension in the muscle and the connective tissue or fascia. This type of massage focuses on the muscles located below the surface of the top muscles. It is often recommended for individuals who experience consistent pain and are involved in heavy physical activity.",
    duration: "60 min",
    price: "£90"
  },
  {
    title: "Hot Stone",
    description: "Experience ultimate relaxation as smooth, heated stones are placed on key points of the body to melt away tension.",
    icon: "🪨",
    details: "Hot stone massage therapy melts away tension, eases muscle stiffness, and increases circulation and metabolism. Hot stones expand blood vessels, which encourages blood flow throughout the body. The hot stones have a sedative effect that can relieve chronic pain, reduce stress and promote deep relaxation.",
    duration: "90 min",
    price: "£120"
  },
  {
    title: "Swedish",
    description: "Our classic Swedish massage uses long, flowing strokes to improve circulation, ease muscle tension and promote relaxation.",
    icon: "💆",
    details: "Swedish massage is the most common and best-known type of massage in the West. It involves soft, long, kneading strokes, as well as light, rhythmic tapping strokes, on topmost layers of muscles. This is also combined with movement of the joints. By relieving muscle tension, Swedish therapy can be both relaxing and energizing.",
    duration: "60 min",
    price: "£85"
  },
];

const ServicesSection = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
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
                
                <Collapsible 
                  open={openService === index}
                  onOpenChange={() => toggleService(index)}
                  className="w-full mt-4"
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-center text-wellness-600 hover:text-wellness-800 text-sm font-medium transition-colors underline underline-offset-4">
                      {openService === index ? "Show Less" : "View Details"}
                      {openService === index ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-4">
                    <div className="text-wellness-800 text-sm">
                      <p className="mb-4">{service.details}</p>
                      <div className="mt-4 flex flex-col space-y-1">
                        <div className="text-wellness-800 text-sm font-medium flex items-center justify-between">
                          <span>Duration:</span>
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-wellness-800 text-sm font-medium flex items-center justify-between">
                          <span>Price:</span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
