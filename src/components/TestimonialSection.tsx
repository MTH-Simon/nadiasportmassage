
const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-wellness-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-lg">
              <span className="text-wellness-600 text-4xl font-serif">"</span>
              <p className="text-lg md:text-xl italic text-wellness-900 mb-8">
                I believe in the transformative power of touch. My mission is to provide a sanctuary where you can disconnect from the stresses of daily life and reconnect with your body's natural ability to heal itself. Every treatment is personally customized to your unique needs, and I take pride in offering a caring, professional service.
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-medium text-wellness-900">Nadia Martin</p>
                  <p className="text-sm text-wellness-700">Professional and Expert Therapist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/f0771a4c-2223-4158-a6ac-cdbf4338ad44.png"
              alt="Nadia Martin, Professional and Expert Therapist"
              className="rounded-lg shadow-lg object-cover w-full max-w-md mx-auto h-[400px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-wellness-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif text-lg">10+ Years</p>
              <p className="text-sm">of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
