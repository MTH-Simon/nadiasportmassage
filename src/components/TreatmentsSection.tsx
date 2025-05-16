
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const treatments = [
  {
    title: "Thai Massage",
    description: "Ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Thai massage is an ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. Traditional Thai massage uses no oils or lotions and the recipient remains clothed during treatment."
  },
  {
    title: "Sports Massage",
    description: "Targeted therapy to help athletes prepare for and recover from intense physical activity.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Sports massage focuses on treating soft tissue aches, pain and injuries associated with physical activity. Designed to prevent and relieve injuries and conditions that are associated with exercise."
  },
  {
    title: "Reflexology",
    description: "Pressure applied to specific points on the feet corresponding to organs and systems throughout the body.",
    image: "https://images.unsplash.com/photo-1554057009-8da6250031a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Reflexology involves applying pressure to specific points on the feet that correspond to organs and systems throughout the body. This therapy aims to promote relaxation, improve circulation, and encourage healing."
  },
  {
    title: "Aromatherapy",
    description: "Essential oils enhance the benefits of massage while promoting emotional and physical well-being.",
    image: "https://images.unsplash.com/photo-1545620831-7cb0cc28ec80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Aromatherapy combines the gentle touch of Swedish massage while using essential oils to promote relaxation and balance. These oils are extracted from flowers, bark, stems, leaves, roots or other parts of a plant."
  },
];

const TreatmentItem = ({ treatment }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex flex-col md:flex-row gap-6">
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
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger className="flex items-center text-wellness-600 hover:text-wellness-800 font-medium underline-offset-4 text-sm">
            {isOpen ? "Show less" : "Learn more"}
            {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 text-wellness-800">
            {treatment.details}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

const TreatmentsSection = () => {
  const [showAllTreatments, setShowAllTreatments] = useState(false);
  
  const toggleAllTreatments = () => {
    setShowAllTreatments(!showAllTreatments);
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
            <TreatmentItem key={index} treatment={treatment} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-wellness-600 text-wellness-600 hover:bg-wellness-50"
            onClick={toggleAllTreatments}
          >
            {showAllTreatments ? "Hide All Treatments" : "View All Treatments"} 
            {showAllTreatments ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
          
          {showAllTreatments && (
            <div className="mt-8 overflow-x-auto bg-white rounded-lg shadow-md">
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
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Lymphatic Drainage
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      90 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £150
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Head Massage
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      30 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £50
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Head Massage
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      45 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £75
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Facial Scar Tissue
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      30 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £50
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Upper Body (Neck, Shoulders, Back & Scalp)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      60 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £100
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Full Body
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      75 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £125
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Lower Body (Legs, Hamstrings, Glutei, IT Band, Calves, Achilles, Soles & Quads/hips)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      60 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £100
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Lower Body
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      75 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £125
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      Full Body Massage (Strong)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      90 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £150
                    </td>
                  </tr>
                  <tr className="hover:bg-wellness-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-wellness-900">
                      From Head To Toes
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-800">
                      120 min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-wellness-900 text-right">
                      £200
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
