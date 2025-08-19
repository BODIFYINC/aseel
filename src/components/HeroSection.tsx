import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="مصحة أسيل الغد - مبنى المصحة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-medical-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            مرحبًا بكم في 
            <span className="block text-medical-300 mt-2">مصحة أسيل الغد</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            نقدم رعاية طبية شاملة على مدار الساعة بأحدث التقنيات وأفضل الخدمات في سبها
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4"
            >
              تواصل معنا الآن
            </Button>
            <a 
              href="https://wa.me/2180925142211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              واتساب
            </a>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in-right">
          <div className="text-center">
            <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">خدمة 24/7</h3>
            <p className="text-slate-300">نعمل على مدار الساعة لخدمتكم</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">أطباء متخصصون</h3>
            <p className="text-slate-300">نخبة من أفضل الأطباء</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">تقنيات حديثة</h3>
            <p className="text-slate-300">أحدث الأجهزة والتقنيات الطبية</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
