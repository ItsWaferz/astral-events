import React, { useEffect, useState } from 'react';
import { Star, Sparkles, Users, Heart, Gift, Phone, Mail, MapPin, Calendar, Crown, Zap, Menu, X, Orbit, Moon, Camera } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hostess Evenimente",
      description: "Profesioniste elegante care vor face ziua voastră specială să fie perfectă, cu atenție la detalii și servicii impecabile."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Animație Copii",
      description: "Animatoare talentate care transformă petrecerile copiilor în aventuri magice pline de râsete și distracție."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Foto & Video",
      description: "Cadre pline de emoție și naturalețe, păstrate cu grijă pentru a spune povestea fiecărui eveniment."
    }
  ];

  const packages = [
    {
      name: "Stardust Kids",
      icon: <Sparkles className="w-8 h-8" />,
      price: "300 RON",
      duration: "2 ore",
      features: [
        "1 animator",
        "Costum tematic inclus",
        "Jocuri interactive",
        "Baloane si facepainting"
      ],
      color: "from-blue-600 to-purple-600",
      popular: false
    },
    {
      name: "Moon",
      icon: <Moon className="w-8 h-8" />,
      price: "300 RON",
      duration: "2 ore",
      features: [
        "1 hostess",
        "Ținută elegantă inclusă",
        "Prezență caldă și rafinată",
        "Ideal pentru evenimente medii"
      ],
      color: "from-blue-600 to-purple-600",
      popular: false
    },
    {
      name: "Foto & Video",
      icon: <Camera className="w-8 h-8" />,
      price: "175 RON",
      duration: "2+ ore",
      features: [
        "1 fotograf", 
        "Editare potrivită evenimentului",
        "Retuș imperfecțiuni",
        "Livrare digitală rapidă",
      ],
      color: "from-purple-600 to-pink-600",
      popular: false
    },
    {
      name: "Galaxy",
      icon: <Orbit className="w-8 h-8 animate-spin" style={{ animationDuration: "2.2s" }}/>,
      price: "La cerere",
      duration: "Personalizat",
      features: [
        "Număr personalizat de hostess/animatori",
        "Servicii adaptate evenimentului",
        "Pachete combinate disponibile",
        "Ofertă personalizată"
      ],
      color: "from-pink-600 to-orange-600",
      popular: true,
      isCustom: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Astral Events
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">Acasă</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">Servicii</button>
              <button onClick={() => scrollToSection('packages')} className="hover:text-purple-400 transition-colors">Pachete</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors w-full text-left"
                >
                  Acasă
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors w-full text-left"
                >
                  Servicii
                </button>
                <button 
                  onClick={() => scrollToSection('packages')} 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors w-full text-left"
                >
                  Pachete
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-spin-slow" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Astral Events
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transformăm momentele voastre speciale în experiențe<br />
              <span className="text-purple-400 font-semibold">magice și de neuitat</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Descoperă Serviciile
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Contactează-ne
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Oferim profesionalisme și eleganță pentru orice tip de eveniment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-purple-400 mb-6 group-hover:text-pink-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="relative z-10 py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pachetele Noastre
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Alege pachetul care se potrivește perfect evenimentului tău
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 ${pkg.popular ? 'ring-2 ring-purple-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Cel mai popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${pkg.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                <div className="mb-6">
                  {/* <span className="text-3xl font-bold text-purple-400">{pkg.price}</span>
                  <span className="text-slate-400 ml-2">/ {pkg.duration}</span> */}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {pkg.isCustom && (
                  <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                  onClick={() => scrollToSection('contact')}
                  >
                    Contactează-ne
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Să ne cunoaștem
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Suntem gata să facem evenimentul vostru cu adevărat special
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <div className="text-slate-300 space-y-1">
                <a href="tel:+40765817405" className="block hover:text-purple-400 transition-colors">
                  +40 765 817 405
                </a>
                <a href="tel:+40770616529" className="block hover:text-purple-400 transition-colors">
                  +40 770 616 529
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:aastralevents@gmail.com" className="text-slate-300 hover:text-purple-400 transition-colors">
                aastralevents@gmail.com
              </a>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Locație</h3>
              <p className="text-slate-300">Cluj-Napoca, România</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-semibold">Astral Events</span>
          </div>
          
          {/* ANPC Buttons */}
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
              <img 
                style={{width: '250px', margin: '5px'}} 
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png" 
                alt="Solutionarea Alternativa a Litigiilor"
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow">
              <img 
                style={{width: '250px', margin: '5px'}} 
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png" 
                alt="Solutionarea Online a Litigiilor"
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <p className="text-slate-400">
            © 2025 Astral Events. Toate drepturile rezervate. Transformăm visele în realitate.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
