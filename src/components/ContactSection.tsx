
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Appointment Request Received",
      description: "We'll contact you shortly to confirm your booking.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="section-padding bg-wellness-50" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Book your appointment</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            Take the first step toward relaxation and wellness by scheduling your session today
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-wellness-800 mb-1">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-500 focus:ring-wellness-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-wellness-800 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-500 focus:ring-wellness-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-wellness-800 mb-1">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-500 focus:ring-wellness-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-wellness-800 mb-1">
                  Treatment *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border-wellness-200 focus:border-wellness-500 focus:ring-wellness-500"
                >
                  <option value="">Select a treatment</option>
                  <option value="swedish">Swedish Massage</option>
                  <option value="deep-tissue">Deep Tissue</option>
                  <option value="hot-stone">Hot Stone</option>
                  <option value="sports">Sports Massage</option>
                  <option value="aromatherapy">Aromatherapy</option>
                  <option value="thai">Thai Massage</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-wellness-800 mb-1">
                Special Requests (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about any specific concerns or preferences"
                rows={4}
                className="w-full border-wellness-200 focus:border-wellness-500 focus:ring-wellness-500"
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="bg-wellness-600 hover:bg-wellness-700 px-8 py-6"
              >
                Book Appointment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
