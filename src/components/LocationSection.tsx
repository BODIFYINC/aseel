
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">موقعنا</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300">
            نحن في قلب مدينة سبها لخدمتكم بسهولة ويسر
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="bg-navy-800/50 backdrop-blur-lg rounded-2xl p-8 border border-medical-500/30">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">مصحة أسيل الغد</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-medical-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">العنوان</h4>
                    <p className="text-slate-300">سبها، ليبيا</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-medical-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">مواقف السيارات</h4>
                    <p className="text-slate-300">متوفرة ومجانية</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-medical-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">♿</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">إمكانية الوصول</h4>
                    <p className="text-slate-300">مجهز لذوي الاحتياجات الخاصة</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/i37AgXFR7veCzjq18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full text-center"
              >
                افتح في الخرائط
              </a>
            </div>
          </div>

          <div className="animate-slide-in-right">
            {/* Map placeholder - will be replaced with actual map */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-navy-700 to-navy-800 border border-medical-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🗺️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">خريطة الموقع</h4>
                  <p className="text-slate-300 mb-4">اضغط على الزر أعلاه لفتح الموقع في خرائط جوجل</p>
                  <a
                    href="https://maps.app.goo.gl/i37AgXFR7veCzjq18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medical-300 hover:text-medical-200 font-medium underline"
                  >
                    عرض على الخريطة
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional location info */}
        <div className="mt-16 bg-navy-800/50 backdrop-blur-lg rounded-2xl p-8 border border-medical-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏥</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2">موقع متميز</h4>
              <p className="text-slate-300">في قلب مدينة سبها</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🚌</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2">سهولة الوصول</h4>
              <p className="text-slate-300">قريب من وسائل النقل العام</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2">متاح دائماً</h4>
              <p className="text-slate-300">خدمة 24 ساعة، 7 أيام</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
