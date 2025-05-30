import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      title: "Message Sent",
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="section-padding bg-wellness-50" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Find Me & Contact Me</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            Get in touch to book your appointment or ask any questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-serif mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-wellness-800 mb-1">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name here"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-700 focus:ring-wellness-700"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-wellness-800 mb-1">
                  Your Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-700 focus:ring-wellness-700"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-wellness-800 mb-1">
                  Your Telephone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-700 focus:ring-wellness-700"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-wellness-800 mb-1">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full border-wellness-200 focus:border-wellness-700 focus:ring-wellness-700"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-wellness-800 mb-1">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  required
                  className="w-full border-wellness-200 focus:border-wellness-700 focus:ring-wellness-700"
                />
              </div>
              
              <div className="flex justify-start">
                <Button 
                  type="submit" 
                  className="bg-wellness-700 hover:bg-wellness-800 px-8 py-3"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-wellness-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-wellness-900">Address</p>
                    <p className="text-wellness-700">60 Park Road</p>
                    <p className="text-wellness-700">Sittingbourne</p>
                    <p className="text-wellness-700">ME10 1DY</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-wellness-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-wellness-900">Telephone</p>
                    <p className="text-wellness-700">07502 255463</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-wellness-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-wellness-900">Email</p>
                    <p className="text-wellness-700">nadia@nadiasportmassage.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-wellness-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-wellness-900">Hours</p>
                    <p className="text-wellness-700">Monday - Friday: 9:30am - 8:30pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-serif mb-4">Cancellation & No Show Up Policies</h3>
              <Separator className="mb-4" />
              <div className="space-y-4 text-wellness-700">
                <p>• Please give 6 hours Prior to your Appointment for cancellation. Failing to do so will be charged 50% of your treatment Session.</p>
                <p>• No Show Up will be Charged Full Treatment Session.</p>
                <p>• Payment will be made via Bank Transfer.</p>
                <p>• To cancel please Call, Message or email me.</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.497576790751!2d0.72866191580432!3d51.338760379607834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df2ab663b39c3f%3A0x5ee97c17f4d2bc6a!2s60+Park+Rd%2C+Sittingbourne+ME10+1DY!5e0!3m2!1sen!2suk!4v1550268222994"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Nadia Sport Massage"
                aria-label="Google Maps showing 60 Park Rd, Sittingbourne ME10 1DY"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
