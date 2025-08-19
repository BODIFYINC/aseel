const GallerySection = () => {
  const clinicImages = [
    {
      src: "/images/clinic-exterior.jpg",
      alt: "مصحة أسيل الغد - المبنى الخارجي",
      title: "المبنى الخارجي"
    },
    {
      src: "/images/clinic-reception.jpg",
      alt: "مصحة أسيل الغد - الاستقبال",
      title: "منطقة الاستقبال"
    },
    {
      src: "/images/clinic-interior.jpg",
      alt: "مصحة أسيل الغد - العيادات",
      title: "العيادات الداخلية"
    }
  ];

  const certificates = [
    {
      src: "/images/certificate-1.jpg",
      alt: "شهادة اعتماد 1",
      title: "شهادة الاعتماد الأولى"
    },
    {
      src: "/images/certificate-2.jpg",
      alt: "شهادة اعتماد 2",
      title: "شهادة الاعتماد الثانية"
    },
    {
      src: "/images/certificate-3.jpg",
      alt: "شهادة اعتماد 3",
      title: "شهادة الاعتماد الثالثة"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">صور</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300">
            اطلع على مرافقنا الحديثة وشهادات الاعتماد التي حصلنا عليها
          </p>
        </div>

        {/* Clinic Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">مرافق المصحة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicImages.map((image, index) => (
              <div 
                key={index}
                className="card-elevated overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">شهادات الاعتماد</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="card-elevated overflow-hidden animate-slide-in-right"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="relative">
                  <img 
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">{cert.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
