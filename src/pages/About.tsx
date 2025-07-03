
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ArrowLeft } from 'lucide-react';

const About = () => {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        brands: 'Nos Marques',
        about: 'À Propos',
        contact: 'Contact',
        back: 'Retour à l\'accueil'
      },
      hero: {
        title: 'À Propos de STA',
        subtitle: 'Notre histoire, notre mission, nos valeurs'
      },
      history: {
        title: 'Notre Histoire',
        text: 'Fondée il y a plusieurs décennies, la Société de Transformation Alimentaire (STA) s\'est imposée comme un acteur majeur dans le secteur de la transformation et de l\'emballage alimentaire. Depuis nos débuts, nous nous sommes engagés à offrir des produits de la plus haute qualité, en respectant les traditions tout en innovant constamment pour répondre aux attentes de nos consommateurs.'
      },
      mission: {
        title: 'Notre Mission',
        text: 'Notre mission est de transformer des matières premières naturelles en produits alimentaires d\'exception, en préservant leur qualité nutritionnelle et leur saveur authentique. Nous nous engageons à respecter les normes les plus strictes en matière de sécurité alimentaire et de durabilité environnementale.'
      },
      vision: {
        title: 'Notre Vision',
        text: 'Devenir le leader régional de la transformation alimentaire en offrant des produits innovants, naturels et respectueux de l\'environnement. Nous aspirons à créer un avenir où l\'alimentation saine et savoureuse est accessible à tous.'
      },
      values: {
        title: 'Nos Valeurs Fondamentales',
        quality: {
          title: 'Excellence Qualité',
          text: 'Nous sélectionnons rigoureusement nos matières premières et appliquons les standards de qualité les plus élevés à chaque étape de production.'
        },
        innovation: {
          title: 'Innovation Continue',
          text: 'Nous investissons constamment dans la recherche et le développement pour améliorer nos procédés et créer de nouveaux produits.'
        },
        sustainability: {
          title: 'Durabilité',
          text: 'Nous nous engageons à minimiser notre impact environnemental et à adopter des pratiques durables dans tous nos processus.'
        },
        integrity: {
          title: 'Intégrité',
          text: 'Nous agissons avec transparence et honnêteté envers nos clients, partenaires et employés.'
        },
        tradition: {
          title: 'Respect des Traditions',
          text: 'Nous honorons les méthodes traditionnelles tout en les adaptant aux exigences modernes de qualité et de sécurité.'
        },
        team: {
          title: 'Esprit d\'Équipe',
          text: 'Notre succès repose sur la collaboration et le dévouement de notre équipe passionnée et expérimentée.'
        }
      },
      differentiators: {
        title: 'Ce qui nous distingue',
        points: [
          'Plus de 20 ans d\'expérience dans la transformation alimentaire',
          'Certification ISO et respect des normes internationales de qualité',
          'Traçabilité complète de nos produits de la source au consommateur',
          'Investissement continu dans les technologies de pointe',
          'Partenariats avec des producteurs locaux de confiance',
          'Équipe de recherche et développement dédiée à l\'innovation'
        ]
      }
    },
    en: {
      nav: {
        home: 'Home',
        brands: 'Our Brands',
        about: 'About Us',
        contact: 'Contact',
        back: 'Back to home'
      },
      hero: {
        title: 'About STA',
        subtitle: 'Our history, our mission, our values'
      },
      history: {
        title: 'Our History',
        text: 'Founded several decades ago, Food Processing Company (STA) has established itself as a major player in the food processing and packaging sector. Since our beginnings, we have committed to offering the highest quality products, respecting traditions while constantly innovating to meet our consumers\' expectations.'
      },
      mission: {
        title: 'Our Mission',
        text: 'Our mission is to transform natural raw materials into exceptional food products, preserving their nutritional quality and authentic flavor. We are committed to meeting the strictest standards in food safety and environmental sustainability.'
      },
      vision: {
        title: 'Our Vision',
        text: 'To become the regional leader in food processing by offering innovative, natural and environmentally friendly products. We aspire to create a future where healthy and tasty food is accessible to all.'
      },
      values: {
        title: 'Our Core Values',
        quality: {
          title: 'Quality Excellence',
          text: 'We rigorously select our raw materials and apply the highest quality standards at every stage of production.'
        },
        innovation: {
          title: 'Continuous Innovation',
          text: 'We constantly invest in research and development to improve our processes and create new products.'
        },
        sustainability: {
          title: 'Sustainability',
          text: 'We are committed to minimizing our environmental impact and adopting sustainable practices in all our processes.'
        },
        integrity: {
          title: 'Integrity',
          text: 'We act with transparency and honesty towards our customers, partners and employees.'
        },
        tradition: {
          title: 'Respect for Traditions',
          text: 'We honor traditional methods while adapting them to modern quality and safety requirements.'
        },
        team: {
          title: 'Team Spirit',
          text: 'Our success is based on the collaboration and dedication of our passionate and experienced team.'
        }
      },
      differentiators: {
        title: 'What sets us apart',
        points: [
          'Over 20 years of experience in food processing',
          'ISO certification and compliance with international quality standards',
          'Complete traceability of our products from source to consumer',
          'Continuous investment in cutting-edge technologies',
          'Partnerships with trusted local producers',
          'Research and development team dedicated to innovation'
        ]
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
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold text-lg">LOGO</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">STA</h1>
              <p className="text-sm text-gray-600">{language === 'fr' ? 'Transformation Alimentaire' : 'Food Processing'}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.brands}
            </Link>
            <Link to="/about" className="text-orange-600 font-medium">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

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
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t.nav.back}
          </Link>
          <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl opacity-90">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.history.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">{t.history.text}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.mission.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{t.mission.text}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.vision.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{t.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">{t.values.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">Q</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.quality.title}</h4>
              <p className="text-gray-600">{t.values.quality.text}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">I</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.innovation.title}</h4>
              <p className="text-gray-600">{t.values.innovation.text}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">D</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.sustainability.title}</h4>
              <p className="text-gray-600">{t.values.sustainability.text}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">I</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.integrity.title}</h4>
              <p className="text-gray-600">{t.values.integrity.text}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">T</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.tradition.title}</h4>
              <p className="text-gray-600">{t.values.tradition.text}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">E</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.team.title}</h4>
              <p className="text-gray-600">{t.values.team.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t.differentiators.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.differentiators.points.map((point, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === 'fr' ? 'Prêt à découvrir nos produits ?' : 'Ready to discover our products?'}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/brands"
              className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {language === 'fr' ? 'Découvrir nos marques' : 'Discover our brands'}
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
