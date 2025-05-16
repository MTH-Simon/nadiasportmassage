
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const initialTreatments = [
  {
    title: "Thai Massage",
    description: "Ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Thai massage is an ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. Traditional Thai massage uses no oils or lotions and the recipient remains clothed during treatment.",
    duration: "60 min",
    price: "£95"
  },
  {
    title: "Sports Massage",
    description: "Targeted therapy to help athletes prepare for and recover from intense physical activity.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Sports massage focuses on treating soft tissue aches, pain and injuries associated with physical activity. Designed to prevent and relieve injuries and conditions that are associated with exercise.",
    duration: "45 min",
    price: "£85"
  },
  {
    title: "Reflexology",
    description: "Pressure applied to specific points on the feet corresponding to organs and systems throughout the body.",
    image: "https://images.unsplash.com/photo-1554057009-8da6250031a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Reflexology involves applying pressure to specific points on the feet that correspond to organs and systems throughout the body. This therapy aims to promote relaxation, improve circulation, and encourage healing.",
    duration: "45 min",
    price: "£65"
  },
  {
    title: "Aromatherapy",
    description: "Essential oils enhance the benefits of massage while promoting emotional and physical well-being.",
    image: "https://images.unsplash.com/photo-1545620831-7cb0cc28ec80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Aromatherapy combines the gentle touch of Swedish massage while using essential oils to promote relaxation and balance. These oils are extracted from flowers, bark, stems, leaves, roots or other parts of a plant.",
    duration: "60 min",
    price: "£95"
  },
];

const additionalTreatments = [
  {
    title: "Lymphatic Drainage",
    description: "Gentle massage technique that promotes the movement of lymph fluids around the body.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Lymphatic drainage massage aims to gently and rhythmically move the lymph through the lymphatic system, particularly beneficial after surgery, for lymphedema, or for detoxification.",
    duration: "90 min",
    price: "£150"
  },
  {
    title: "Head Massage",
    description: "Relaxing massage focusing on pressure points on the head to relieve tension.",
    image: "https://images.unsplash.com/photo-1582680833577-ac9e2c3dea9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Head massage can provide relief from headaches, eyestrain, and sinus congestion. It may also help reduce stress and improve sleep quality.",
    duration: "30 min",
    price: "£50"
  },
  {
    title: "Facial Scar Tissue",
    description: "Specialized massage technique to improve the appearance of facial scars.",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "This treatment focuses on reducing the appearance of scars by breaking down scar tissue and promoting healthy skin regeneration.",
    duration: "30 min",
    price: "£50"
  },
  {
    title: "Upper Body",
    description: "Focused massage for neck, shoulders, back, and scalp to relieve tension.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "This treatment targets the neck, shoulders, back, and scalp, areas where many people hold tension, particularly those who work at desks.",
    duration: "60 min",
    price: "£100"
  },
  {
    title: "Full Body",
    description: "Complete massage therapy treating the entire body for overall relaxation and wellness.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "Full body massage combines various techniques to address the entire body, promoting relaxation and wellness throughout.",
    duration: "75 min",
    price: "£125"
  },
  {
    title: "Lower Body",
    description: "Focused massage for legs, hamstrings, glutei, and more to ease muscle tension.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    details: "This treatment focuses on the legs, hamstrings, glutei, IT band, calves, Achilles, soles, and quads/hips to relieve tension and improve mobility.",
    duration: "60 min",
    price: "£100"
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
          <CollapsibleTrigger className="flex items-center text-wellness-600 hover:text-wellness-800 font-medium underline-offset-4 text-sm bg-transparent">
            {isOpen ? "Show less" : "Learn more"}
            {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 text-wellness-800">
            {treatment.details}
          </CollapsibleContent>
        </Collapsible>
        
        <div className="mt-4 flex flex-col space-y-1">
          <div className="text-wellness-800 text-sm font-medium flex items-center justify-between">
            <span>Duration:</span>
            <span>{treatment.duration}</span>
          </div>
          <div className="text-wellness-800 text-sm font-medium flex items-center justify-between">
            <span>Price:</span>
            <span className="font-semibold">{treatment.price}</span>
          </div>
        </div>
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
          {initialTreatments.map((treatment, index) => (
            <TreatmentItem key={index} treatment={treatment} />
          ))}
        </div>

        <div className="text-center mb-12">
          <Button 
            variant="outline" 
            className="border-wellness-600 text-wellness-600 hover:bg-wellness-50"
            onClick={toggleAllTreatments}
          >
            {showAllTreatments ? "Hide Additional Treatments" : "View All Treatments"} 
            {showAllTreatments ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
        </div>
        
        {showAllTreatments && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {additionalTreatments.map((treatment, index) => (
              <TreatmentItem key={`additional-${index}`} treatment={treatment} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentsSection;
