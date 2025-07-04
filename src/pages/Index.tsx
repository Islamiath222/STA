
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('fr');

  
 const heroImages = [
  "/images/fruits.png",
  "/images/PP6.jpg",
  "/images/PP4.png"
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        brands: 'Nos Marques',
        about: 'À Propos',
        contact: 'Contact'
      },
      hero: {
        title: 'Société de Transformation Alimentaire',
        subtitle: 'Excellence dans la transformation et l\'emballage de produits alimentaires de qualité',
        tagline: 'Fraîcheur • Qualité • Confiance',
        cta: 'Découvrir Nos Produits'
      },
      welcome: {
        title: 'Bienvenue chez STA',
        text: 'STA s\'engage à transformer et emballer des produits alimentaires de la plus haute qualité sous nos marques Fruitel et Petit Plaisir. Notre mission est de vous offrir des produits naturels, frais et savoureux.'
      },
      brands: {
        title: 'Nos Marques',
        fruitel: {
          title: 'Fruitel',
          description: '100% naturel, sans conservateurs. Des fruits transformés avec soin pour préserver toute leur saveur authentique.'
        },
        petitPlaisir: {
          title: 'Petit Plaisir',
          description: 'Des délices gourmands qui font le bonheur des petits et grands, préparés avec amour et tradition.'
        }
      },
      values: {
        title: 'Nos Valeurs',
        quality: {
          title: 'Qualité Premium',
          text: 'Sélection rigoureuse des meilleures matières premières'
        },
        natural: {
          title: '100% Naturel',
          text: 'Sans conservateurs ni additifs artificiels'
        },
        trust: {
          title: 'Transparence',
          text: 'Transparence et traçabilité à chaque étape'
        }
      },
      footer: {
        text: '© 2024 Société de Transformation Alimentaire. Tous droits réservés.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        brands: 'Our Brands',
        about: 'About Us',
        contact: 'Contact'
      },
      hero: {
        title: 'Food Processing Company',
        subtitle: 'Excellence in processing and packaging high-quality food products',
        tagline: 'Freshness • Quality • Trust',
        cta: 'Discover Our Products'
      },
      welcome: {
        title: 'Welcome to STA',
        text: 'For years, STA has been committed to processing and packaging the highest quality food products under our Fruitel and Petit Plaisir brands. Our mission is to offer you natural, fresh and tasty products.'
      },
      brands: {
        title: 'Our Brands',
        fruitel: {
          title: 'Fruitel',
          description: '100% natural, no preservatives. Carefully processed fruits to preserve all their authentic flavor.'
        },
        petitPlaisir: {
          title: 'Petit Plaisir',
          description: 'Gourmet delights that bring joy to young and old, prepared with love and tradition.'
        }
      },
      values: {
        title: 'Our Values',
        quality: {
          title: 'Premium Quality',
          text: 'Rigorous selection of the best raw materials'
        },
        natural: {
          title: '100% Natural',
          text: 'No preservatives or artificial additives'
        },
        trust: {
          title: 'Trust',
          text: 'Transparency and traceability at every step'
        }
      },
      footer: {
        text: '© 2024 Food Processing Company. All rights reserved.'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Social Media Icons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Facebook size={20} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Linkedin size={20} />
        </a>
      </div>

      {/* Header */}
     <header className="bg-white shadow-md fixed w-full top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
         <div className="h-full flex items-center mr-4">
  <img
    src="/images/Logo.png"
    alt="STA Logo"
    className="h-full max-h-14 w-auto object-contain"
  />
</div>



           
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.brands}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded ${language === 'fr' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden mt-20">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">{t.hero.subtitle}</p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-0.5 bg-orange-400"></span>
              <p className="text-lg font-medium">{t.hero.tagline}</p>
              <span className="w-12 h-0.5 bg-orange-400"></span>
            </div>
            <Link
              to="/brands"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">{t.welcome.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t.welcome.text}</p>
          </div>
        </div>
      </section>

      {/* Brands Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">{t.brands.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Fruitel */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">FRUITEL</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.brands.fruitel.title}</h3>
                <p className="text-gray-600">{t.brands.fruitel.description}</p>
              </div>
            </div>

            {/* Petit Plaisir */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold text-center">PETIT<br/>PLAISIR</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.brands.petitPlaisir.title}</h3>
                <p className="text-gray-600">{t.brands.petitPlaisir.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">{t.values.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.values.quality.title}</h3>
              <p className="text-gray-600">{t.values.quality.text}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">N</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.values.natural.title}</h3>
              <p className="text-gray-600">{t.values.natural.text}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.values.trust.title}</h3>
              <p className="text-gray-600">{t.values.trust.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">STA</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">STA</h3>
                  <p className="text-gray-400 text-sm">{language === 'fr' ? 'Société de Transformation Alimentaire' : 'Food Processing Company'}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                {language === 'fr' 
                  ? 'Excellence dans la transformation et l\'emballage de produits alimentaires de qualité.' 
                  : 'Excellence in processing and packaging high-quality food products.'
                }
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{language === 'fr' ? 'Navigation' : 'Navigation'}</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-orange-400 transition-colors">{t.nav.home}</Link>
                <Link to="/brands" className="block text-gray-400 hover:text-orange-400 transition-colors">{t.nav.brands}</Link>
                <Link to="/about" className="block text-gray-400 hover:text-orange-400 transition-colors">{t.nav.about}</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-orange-400 transition-colors">{t.nav.contact}</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{language === 'fr' ? 'Suivez-nous' : 'Follow Us'}</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t.footer.text}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
