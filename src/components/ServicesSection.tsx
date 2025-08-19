
const ServicesSection = () => {
  const services = [
    'جميع العيادات',
    'تشخيص طبي',
    'أسنان',
    'عظام',
    'مساك',
    'عيادة طبيب',
    'جميع العمليات',
    'جراحات عمود فقري',
    'جراحة مفاصل',
    'ولادة',
    'مركز للتدريب',
    'قسم نساء خاص',
    'عيادة جلدية',
    'مركز جلدية وتجميل',
    'والمزيد...'
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-medical-500/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-medical-400/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl font-bold text-slate-100 mb-6 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>خدماتنا</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mb-6 opacity-0 animate-slide-in-right hover:animate-glow" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية المتخصصة لتلبية جميع احتياجاتكم الصحية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated p-6 text-center group opacity-0 animate-scale-in hover:animate-pulse-scale transition-all duration-300"
              style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-bounce-gentle transition-all duration-300">
                <span className="text-white text-xl group-hover:scale-125 transition-transform duration-300">✚</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-medical-300 transition-colors duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-navy-800/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-medical-500/30 opacity-0 animate-fade-in-up group hover:animate-pulse-scale transition-all duration-500" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-medical-300 transition-colors duration-300">خدمات متكاملة تحت سقف واحد</h3>
            <p className="text-slate-300 mb-6 group-hover:text-slate-200 transition-colors duration-300">
              نوفر لك جميع الخدمات الطبية التي تحتاجها في مكان واحد مع أعلى معايير الجودة والسلامة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-medical-500/20 text-medical-300 px-4 py-2 rounded-full text-sm font-medium border border-medical-500/30 hover:animate-bounce-gentle hover:bg-medical-500/30 transition-all duration-300 cursor-pointer">
                أطباء معتمدون
              </span>
              <span className="bg-medical-500/20 text-medical-300 px-4 py-2 rounded-full text-sm font-medium border border-medical-500/30 hover:animate-bounce-gentle hover:bg-medical-500/30 transition-all duration-300 cursor-pointer">
                معدات حديثة
              </span>
              <span className="bg-medical-500/20 text-medical-300 px-4 py-2 rounded-full text-sm font-medium border border-medical-500/30 hover:animate-bounce-gentle hover:bg-medical-500/30 transition-all duration-300 cursor-pointer">
                خدمة سريعة
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
