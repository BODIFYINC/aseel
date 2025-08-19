import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 15000, label: 'مريض سعيد', suffix: '+', icon: '👥' },
    { number: 50, label: 'طبيب متخصص', suffix: '+', icon: '👨‍⚕️' },
    { number: 24, label: 'ساعة خدمة', suffix: '/7', icon: '🕒' },
    { number: 99, label: 'نسبة الرضا', suffix: '%', icon: '⭐' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-medical-400">
        {displayValue.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-medical-900 to-navy-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-medical-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-medical-400/15 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-medical-300/20 rounded-full animate-pulse-scale" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            إنجازاتنا بالأرقام
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            نفخر بخدمة مجتمعنا وتقديم أفضل رعاية طبية على مدار السنوات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-110 transition-all duration-500 hover:animate-pulse-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-slate-800/60 backdrop-blur-lg border border-medical-500/30 rounded-2xl p-8 hover:border-medical-400/50 hover:shadow-2xl hover:shadow-medical-500/20 transition-all duration-500">
                <div className="text-5xl mb-4 group-hover:animate-bounce-gentle">
                  {stat.icon}
                </div>
                <div className="mb-2">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-slate-300 text-lg font-medium group-hover:text-medical-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;