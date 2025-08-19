
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "عبدالله الصيد",
      rating: 5,
      review: "عيادة ممتازة، خدمة سريعة ومعاملة محترمة. الدكاترة شاطرين والمكان نظيف. أنصح بيها بشدة."
    },
    {
      name: "خالد عزيز",
      rating: 5,
      review: "مصحة أحلام بالنسبة لي أنا."
    },
    {
      name: "إسلام السوكني",
      rating: 5,
      review: "مصحة بها العديد من التخصصات."
    }
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-navy-800 to-navy-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">آراء العملاء</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
          <p className="text-xl text-white">
            ما يقوله مرضانا عن خدماتنا وجودة الرعاية الطبية التي نقدمها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-elevated p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Simple icon instead of profile picture */}
              <div className="w-16 h-16 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">👤</span>
              </div>

              <h4 className="text-xl font-semibold text-white mb-3">
                {testimonial.name}
              </h4>

              <div className="text-2xl text-yellow-400 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-white leading-relaxed italic text-lg">
                "{testimonial.review}"
              </p>

              {/* Decorative quote */}
              <div className="mt-4 text-medical-300 text-4xl opacity-50">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonial stats */}
        <div className="mt-16 bg-navy-800/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-medical-500/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-300 mb-2">500+</div>
              <div className="text-slate-400">مريض راضٍ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-300 mb-2">4.9</div>
              <div className="text-slate-400">تقييم عام</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-300 mb-2">24/7</div>
              <div className="text-slate-400">خدمة مستمرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-300 mb-2">15+</div>
              <div className="text-slate-400">تخصص طبي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
