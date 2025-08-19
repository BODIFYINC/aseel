import { Card, CardContent } from '@/components/ui/card';

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: 'د. أحمد محمد الطاهر',
      specialty: 'طبيب باطنة',
      experience: '15 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['دكتوراه في الطب الباطني', 'عضو الجمعية الطبية الليبية']
    },
    {
      id: 2,
      name: 'د. فاطمة علي السنوسي',
      specialty: 'طبيبة أطفال',
      experience: '12 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1594824732609-4d8dfe42e0b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['ماجستير في طب الأطفال', 'شهادة في العناية المركزة للأطفال']
    },
    {
      id: 3,
      name: 'د. عمر حسن الزروق',
      specialty: 'طبيب جراحة عامة',
      experience: '18 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['دكتوراه في الجراحة العامة', 'زمالة في جراحة المناظير']
    },
    {
      id: 4,
      name: 'د. مريم سالم القذافي',
      specialty: 'طبيبة نساء وولادة',
      experience: '10 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      qualifications: ['ماجستير في النساء والولادة', 'دبلوم في طب الجنين']
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22.5H18V25h2v-2.5H22.5V20.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            فريقنا الطبي المتميز
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            نخبة من أفضل الأطباء المتخصصين لتقديم أعلى مستويات الرعاية الطبية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={doctor.id} className="bg-slate-800/60 border-medical-500/30 hover:border-medical-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-medical-500/20 opacity-0 animate-slide-in-right" style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}>
              <CardContent className="p-6 text-center">
                <div className="relative mb-6 group-hover:animate-pulse-scale">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-medical-500/30 group-hover:border-medical-400/50 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-medical-900/20 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-medical-300 transition-colors duration-300">
                  {doctor.name}
                </h3>
                
                <p className="text-medical-400 font-semibold mb-2">
                  {doctor.specialty}
                </p>
                
                <p className="text-slate-400 text-sm mb-4">
                  {doctor.experience}
                </p>
                
                <div className="space-y-1">
                  {doctor.qualifications.map((qualification, qIndex) => (
                    <p key={qIndex} className="text-slate-300 text-xs leading-relaxed">
                      {qualification}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-300 text-lg mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            جميع أطبائنا حاصلون على شهادات معتمدة ولديهم خبرة واسعة في مجالاتهم
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;