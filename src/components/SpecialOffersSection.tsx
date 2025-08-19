import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SpecialOffersSection = () => {
  const offers = [
    {
      id: 1,
      title: 'فحص شامل مع خصم 30%',
      description: 'فحص طبي شامل يشمل جميع التحاليل والأشعة المطلوبة للاطمئنان على صحتك',
      originalPrice: '300',
      discountedPrice: '210',
      discount: '30%',
      validity: 'ساري حتى نهاية الشهر',
      features: ['فحص إكلينيكي شامل', 'تحاليل دم كاملة', 'أشعة صدر', 'تخطيط قلب']
    },
    {
      id: 2,
      title: 'برنامج متابعة السكري',
      description: 'برنامج متكامل لمتابعة مرضى السكري مع استشارات دورية وتحاليل منتظمة',
      originalPrice: '500',
      discountedPrice: '350',
      discount: '30%',
      validity: 'برنامج لمدة 3 أشهر',
      features: ['استشارات شهرية', 'تحاليل السكر التراكمي', 'متابعة الوزن', 'نصائح غذائية']
    },
    {
      id: 3,
      title: 'باقة العائلة الصحية',
      description: 'رعاية طبية شاملة لجميع أفراد العائلة مع خصومات خاصة',
      originalPrice: '800',
      discountedPrice: '600',
      discount: '25%',
      validity: 'صالحة لمدة 6 أشهر',
      features: ['فحص لـ 4 أفراد', 'تطعيمات الأطفال', 'استشارات مجانية', 'خصم على الأدوية']
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-navy-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-medical-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-medical-400/15 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            عروض خاصة
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            استفد من عروضنا المميزة للحصول على أفضل رعاية طبية بأسعار مناسبة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={offer.id} className="bg-slate-800/60 border-medical-500/30 hover:border-medical-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-medical-500/20 opacity-0 animate-slide-in-right relative overflow-hidden" style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}>
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse-glow">
                خصم {offer.discount}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-slate-100 group-hover:text-medical-300 transition-colors duration-300 text-xl">
                  {offer.title}
                </CardTitle>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {offer.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price Section */}
                <div className="text-center py-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-medical-400">
                      {offer.discountedPrice} د.ل
                    </span>
                    <span className="text-lg text-slate-400 line-through">
                      {offer.originalPrice} د.ل
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{offer.validity}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-medical-300 font-semibold text-sm">يشمل العرض:</h4>
                  <ul className="space-y-1">
                    {offer.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-medical-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-medical-600 to-medical-500 hover:from-medical-500 hover:to-medical-400 text-white border-0 group-hover:animate-pulse-scale transition-all duration-300">
                  احجز الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm opacity-0 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            * العروض سارية لفترة محدودة وقابلة للتغيير دون إشعار مسبق
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;