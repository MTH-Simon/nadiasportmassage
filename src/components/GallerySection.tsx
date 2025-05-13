
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Massage therapist working on client's back",
    title: "Back & Shoulder Relief",
    description: "Targeted techniques to release tension in the upper body"
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Hot stone treatment",
    title: "Hot Stone Therapy",
    description: "Heated basalt stones to melt away tension"
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Facial massage",
    title: "Facial Rejuvenation",
    description: "Stimulating facial massage to promote radiant skin"
  }
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Helping You Perform at Your Best</h2>
          <p className="text-wellness-700 max-w-2xl mx-auto">
            Experience the healing power of therapeutic massage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-xl mb-2">{image.title}</h3>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
