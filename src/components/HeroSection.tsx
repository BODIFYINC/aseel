import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="مصحة أسيل الغد - مبنى المصحة" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-medical-900/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-medical-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-medical-400/15 rounded-full animate-bounce-gentle" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-medical-300/20 rounded-full animate-pulse-scale" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block opacity-0 animate-slide-in-right" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}>
              مرحبًا بكم في
            </span>
            <span className="block text-medical-300 mt-2 opacity-0 animate-slide-in-left" style={{
            animationDelay: '0.5s',
            animationFillMode: 'forwards'
          }}>
              مصحة أسيل الغد
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{
          animationDelay: '0.8s',
          animationFillMode: 'forwards'
        }}>
            نقدم رعاية طبية شاملة على مدار الساعة بأحدث التقنيات وأفضل الخدمات في سبها
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{
          animationDelay: '1.1s',
          animationFillMode: 'forwards'
        }}>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4 group hover:animate-pulse-scale transition-all duration-300">
              <span className="group-hover:scale-110 transition-transform duration-300">remreتواصل معنا الآن</span>
            </Button>
            <a href="https://wa.me/2180925142211" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4 inline-block group hover:animate-glow transition-all duration-300">
              <span className="group-hover:scale-110 transition-transform duration-300">واتساب</span>
            </a>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center opacity-0 animate-slide-in-right group" style={{
          animationDelay: '1.4s',
          animationFillMode: 'forwards'
        }}>
            <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:bg-medical-400">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-medical-300 transition-colors duration-300">خدمة 24/7</h3>
            <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">نعمل على مدار الساعة لخدمتكم</p>
          </div>
          
          <div className="text-center opacity-0 animate-slide-in-right group" style={{
          animationDelay: '1.7s',
          animationFillMode: 'forwards'
        }}>
            <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:bg-medical-400">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">👨‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-medical-300 transition-colors duration-300">أطباء متخصصون</h3>
            <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">نخبة من أفضل الأطباء</p>
          </div>
          
          <div className="text-center opacity-0 animate-slide-in-right group" style={{
          animationDelay: '2s',
          animationFillMode: 'forwards'
        }}>
            <div className="w-16 h-16 bg-medical-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:bg-medical-400">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🔬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-medical-300 transition-colors duration-300">تقنيات حديثة</h3>
            <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">أحدث الأجهزة والتقنيات الطبية</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;