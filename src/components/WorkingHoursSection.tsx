
const WorkingHoursSection = () => {
  return (
    <section id="hours" className="section-padding bg-gradient-to-r from-medical-600 to-navy-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/15 rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full animate-pulse-scale" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl font-bold mb-6 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>أوقات العمل</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8 opacity-0 animate-slide-in-right hover:animate-glow" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
          
            <div className="max-w-4xl mx-auto">
              <div className="bg-navy-800/60 backdrop-blur-lg rounded-2xl p-12 border border-medical-500/30 opacity-0 animate-scale-in group hover:animate-pulse-scale transition-all duration-500" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 bg-medical-500/30 rounded-full flex items-center justify-center border border-medical-500/50 group-hover:animate-bounce-gentle transition-all duration-300">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🕐</span>
                  </div>
                </div>
              
              <h3 className="text-3xl font-bold mb-6">
                المصحة تعمل على مدار الساعة طوال أيام الأسبوع
              </h3>
              
              <div className="text-6xl font-bold mb-4 text-medical-200">
                24/7
              </div>
              
              <p className="text-xl text-slate-200 mb-8">
                نحن هنا لخدمتكم في أي وقت تحتاجون فيه للرعاية الطبية
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center opacity-0 animate-slide-in-right group" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                  <div className="text-2xl mb-2 group-hover:animate-bounce-gentle group-hover:scale-110 transition-transform duration-300">🌅</div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-medical-200 transition-colors duration-300">الصباح</h4>
                  <p className="text-slate-200 group-hover:text-white transition-colors duration-300">خدمة كاملة</p>
                </div>
                
                <div className="text-center opacity-0 animate-slide-in-right group" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                  <div className="text-2xl mb-2 group-hover:animate-bounce-gentle group-hover:scale-110 transition-transform duration-300">🌙</div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-medical-200 transition-colors duration-300">المساء</h4>
                  <p className="text-slate-200 group-hover:text-white transition-colors duration-300">خدمة كاملة</p>
                </div>
                
                <div className="text-center opacity-0 animate-slide-in-right group" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
                  <div className="text-2xl mb-2 group-hover:animate-bounce-gentle group-hover:scale-110 transition-transform duration-300">🚨</div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-medical-200 transition-colors duration-300">الطوارئ</h4>
                  <p className="text-slate-200 group-hover:text-white transition-colors duration-300">متاح دائماً</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-navy-800/60 backdrop-blur-lg rounded-xl p-6 border border-medical-500/30 opacity-0 animate-slide-in-left group hover:animate-pulse-scale transition-all duration-300" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-medical-200 transition-colors duration-300">خدمات عامة</h4>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">جميع التخصصات والعيادات متاحة على مدار الساعة</p>
            </div>
            
            <div className="bg-navy-800/60 backdrop-blur-lg rounded-xl p-6 border border-medical-500/30 opacity-0 animate-slide-in-right group hover:animate-pulse-scale transition-all duration-300" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-medical-200 transition-colors duration-300">خدمات طوارئ</h4>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">فريق طوارئ مختص متاح في جميع الأوقات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
