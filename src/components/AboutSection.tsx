const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-navy-800 to-navy-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-100 mb-6">من نحن</h2>
            <div className="w-20 h-1 bg-medical-500 mb-8"></div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              مصحة أسيل الغد هي منشأة طبية متكاملة في مدينة سبها، تقدم خدمات طبية متخصصة على يد نخبة من الأطباء المتميزين، وبتقنيات حديثة ومرافق مجهزة على أعلى مستوى.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              هدفنا هو توفير أفضل رعاية صحية للمجتمع من خلال تقديم خدمات طبية شاملة ومتميزة تلبي احتياجات جميع أفراد العائلة في بيئة آمنة ومريحة.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-medical-500/20 rounded-lg border border-medical-500/30">
                <div className="text-3xl font-bold text-medical-300 mb-2">24/7</div>
                <div className="text-sm text-slate-400">خدمة مستمرة</div>
              </div>
              <div className="text-center p-4 bg-medical-500/20 rounded-lg border border-medical-500/30">
                <div className="text-3xl font-bold text-medical-300 mb-2">15+</div>
                <div className="text-sm text-slate-400">تخصص طبي</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            {/* Placeholder for clinic image - user will upload */}
            <div className="relative">
              <img 
                src="/images/clinic-about.jpg"
                alt="مصحة أسيل الغد - داخل المصحة"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-900/20 to-transparent rounded-2xl"></div>
              
              {/* Upload placeholder indicator */}
              <div className="absolute top-4 right-4 bg-navy-900/90 text-medical-300 px-3 py-1 rounded-full text-sm font-medium border border-medical-500/30">
                صورة المصحة - يمكن رفعها
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
