
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
    <section id="services" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">خدماتنا</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية المتخصصة لتلبية جميع احتياجاتكم الصحية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated p-6 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">✚</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-medical-300 transition-colors duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-navy-800/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-medical-500/30">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">خدمات متكاملة تحت سقف واحد</h3>
            <p className="text-slate-300 mb-6">
              نوفر لك جميع الخدمات الطبية التي تحتاجها في مكان واحد مع أعلى معايير الجودة والسلامة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-medical-500/20 text-medical-300 px-4 py-2 rounded-full text-sm font-medium border border-medical-500/30">
                أطباء معتمدون
              </span>
              <span className="bg-medical-500/20 text-medical-300 px-4 py-2 rounded-full text-sm font-medium border border-medical-500/30">
                معدات حديثة
              </span>
              <span className="bg-medical-500/20 text-medical-300 px-4 py-2 rounded-full text-sm font-medium border border-medical-500/30">
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
