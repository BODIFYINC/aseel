
const WorkingHoursSection = () => {
  return (
    <section id="hours" className="section-padding bg-gradient-to-r from-medical-600 to-navy-700 text-white">
      <div className="container-custom">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">أوقات العمل</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy-800/60 backdrop-blur-lg rounded-2xl p-12 border border-medical-500/30">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-medical-500/30 rounded-full flex items-center justify-center border border-medical-500/50">
                  <span className="text-4xl">🕐</span>
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
                <div className="text-center">
                  <div className="text-2xl mb-2">🌅</div>
                  <h4 className="text-lg font-semibold mb-2">الصباح</h4>
                  <p className="text-slate-200">خدمة كاملة</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🌙</div>
                  <h4 className="text-lg font-semibold mb-2">المساء</h4>
                  <p className="text-slate-200">خدمة كاملة</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🚨</div>
                  <h4 className="text-lg font-semibold mb-2">الطوارئ</h4>
                  <p className="text-slate-200">متاح دائماً</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-navy-800/60 backdrop-blur-lg rounded-xl p-6 border border-medical-500/30">
              <h4 className="text-lg font-semibold mb-3">خدمات عامة</h4>
              <p className="text-slate-200">جميع التخصصات والعيادات متاحة على مدار الساعة</p>
            </div>
            
            <div className="bg-navy-800/60 backdrop-blur-lg rounded-xl p-6 border border-medical-500/30">
              <h4 className="text-lg font-semibold mb-3">خدمات طوارئ</h4>
              <p className="text-slate-200">فريق طوارئ مختص متاح في جميع الأوقات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
