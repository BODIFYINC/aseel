
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'doctors', label: 'أطبائنا' },
    { id: 'gallery', label: 'صور' },
    { id: 'testimonials', label: 'آراء العملاء' },
    { id: 'news', label: 'أخبار' },
    { id: 'hours', label: 'أوقات العمل' },
    { id: 'location', label: 'الموقع' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <header className="bg-navy-900/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-medical-500/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Clinic Name */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-medical-500/20 rounded-full flex items-center justify-center group-hover:animate-pulse-scale transition-all duration-300">
              {/* Placeholder for logo - user will upload */}
              <div className="w-10 h-10 bg-medical-500 rounded-full flex items-center justify-center group-hover:bg-medical-400 transition-colors duration-300">
                <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">أ</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100 group-hover:text-medical-300 transition-colors duration-300">مصحة أسيل الغد</h1>
              <p className="text-sm text-medical-300 group-hover:text-medical-200 transition-colors duration-300">رعاية طبية شاملة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-100 hover:text-medical-300 font-medium transition-all duration-300 relative group hover:scale-105"
              >
                <span className="group-hover:animate-bounce-gentle">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-600 to-medical-400 transition-all duration-500 group-hover:w-full group-hover:animate-glow"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-medical-500/20 text-medical-300 hover:bg-medical-500/30 hover:animate-pulse-scale transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-medical-500/30 animate-fade-in-up">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-right py-3 px-4 text-slate-100 hover:text-medical-300 hover:bg-medical-500/20 rounded-lg transition-all duration-300 hover:scale-105 hover:animate-slide-in-right opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
