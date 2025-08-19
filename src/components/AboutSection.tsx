const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-medical-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-medical-400/15 rounded-full animate-bounce-gentle" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl font-bold text-slate-100 mb-6 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>من نحن</h2>
            <div className="w-20 h-1 bg-medical-500 mb-8 opacity-0 animate-slide-in-right hover:animate-glow" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              مصحة أسيل الغد هي منشأة طبية متكاملة في مدينة سبها، تقدم خدمات طبية متخصصة على يد نخبة من الأطباء المتميزين، وبتقنيات حديثة ومرافق مجهزة على أعلى مستوى.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              هدفنا هو توفير أفضل رعاية صحية للمجتمع من خلال تقديم خدمات طبية شاملة ومتميزة تلبي احتياجات جميع أفراد العائلة في بيئة آمنة ومريحة.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-medical-500/20 rounded-lg border border-medical-500/30 opacity-0 animate-scale-in group hover:animate-pulse-scale transition-all duration-300" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <div className="text-3xl font-bold text-medical-300 mb-2 group-hover:animate-bounce-gentle">24/7</div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">خدمة مستمرة</div>
              </div>
              <div className="text-center p-4 bg-medical-500/20 rounded-lg border border-medical-500/30 opacity-0 animate-scale-in group hover:animate-pulse-scale transition-all duration-300" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                <div className="text-3xl font-bold text-medical-300 mb-2 group-hover:animate-bounce-gentle">15+</div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">تخصص طبي</div>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {/* Placeholder for clinic image - user will upload */}
            <div className="relative group">
              <img 
                src="/images/clinic-about.jpg"
                alt="مصحة أسيل الغد - داخل المصحة"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-900/20 to-transparent rounded-2xl group-hover:from-medical-900/30 transition-all duration-500"></div>
              
              {/* Upload placeholder indicator */}
              <div className="absolute top-4 right-4 bg-navy-900/90 text-medical-300 px-3 py-1 rounded-full text-sm font-medium border border-medical-500/30 group-hover:animate-pulse-scale transition-all duration-300">
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
