import React, { useState, useEffect } from "react";
import './index.css'

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulăm trimiterea mailului
    const mailtoLink = `mailto:aastralevents@gmail.com?subject=Solicitare Contact&body=Nume: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMesaj:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;

    alert("Vei deschide clientul de email implicit cu acest mesaj precompletat.");
    setFormData({ name: "", email: "", message: "" });
    setMenuOpen(false);
  };

  // Gestionăm vizibilitatea butonului de "înapoi sus"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Derulare lină către o secțiune + închidere meniu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-indigo-950 via-purple-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-md sticky top-0 z-50 shadow-md" style={{ height: "70px" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Astral Events</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("despre")} className="hover:text-pink-400 transition duration-300 font-semibold">Despre</button>
            <button onClick={() => scrollToSection("servicii")} className="hover:text-pink-400 transition duration-300 font-semibold">Servicii</button>
            <button onClick={() => scrollToSection("galerie")} className="hover:text-pink-400 transition duration-300 font-semibold">Galerie</button>
            <button onClick={() => scrollToSection("testimoniale")} className="hover:text-pink-400 transition duration-300 font-semibold">Testimoniale</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-pink-400 transition duration-300 font-semibold">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </header>

      {/* Meniul Mobil Fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-indigo-950 via-purple-900 to-black flex items-center justify-center animate-fadeIn">
          <div className="text-center space-y-8">
            <button
              onClick={() => scrollToSection("despre")}
              className="block w-full text-2xl font-extrabold text-white hover:text-pink-400 transition"
            >
              Despre
            </button>
            <button
              onClick={() => scrollToSection("servicii")}
              className="block w-full text-2xl font-extrabold text-white hover:text-pink-400 transition"
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="block w-full text-2xl font-extrabold text-white hover:text-pink-400 transition"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("testimoniale")}
              className="block w-full text-2xl font-extrabold text-white hover:text-pink-400 transition"
            >
              Testimoniale
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-2xl font-extrabold text-white hover:text-pink-400 transition"
            >
              Contact
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-8 inline-block text-xl text-pink-400 hover:text-white transition"
            >
              Închide ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 text-center">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Evenimente Magice. Atmosferă Astrală.
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Organizăm servicii premium de hostess pentru nunți, botezuri și animație la petreceri de copii.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105"
          >
            Solicită ofertă
          </a>
        </div>
      </section>

      {/* Despre Noi */}
      <section id="despre" className="py-16 px-4 bg-black/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Despre Noi</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
            La Astral Events credem că fiecare eveniment merită să strălucească ca o stea. Oferim servicii de hostess și animație pentru evenimente memorabile – nunți elegante, botezuri emoționante și petreceri colorate pentru copii.
          </p>
        </div>
      </section>

      {/* Servicii */}
      <section id="servicii" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Serviciile Noastre</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hostess pentru Nunți",
                desc: "Echipa noastră de hostess profesionale adaugă o notă de eleganță evenimentului tău nupțial.",
              },
              {
                title: "Hostess pentru Botezuri",
                desc: "Cu răbdare și empatie, organizăm prezența la evenimentele sacre cu discreție și respect.",
              },
              {
                title: "Animație Copii",
                desc: "Jocuri interactive, spectacole și personaje îndrăgite pentru copiii tăi.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-black/40 p-6 rounded-xl border border-purple-800 hover:border-pink-500 transition">
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Foto */}
      <section id="galerie" className="py-16 px-4 bg-black/30 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Galerie Foto</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/ ${i}/400/300`}
                alt={`Poza ${i + 1}`}
                className="rounded-lg object-cover h-48 w-full hover:opacity-90 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <section id="testimoniale" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Ce spun clienții noștri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Hostess-ul a fost minunat! A fost mereu amabilă și atentă. Invitații au fost impresionați!",
                author: "Cristina L., Mireasă",
              },
              {
                text: "Copiii s-au distrat fantastic! Animatoarea a fost energică și foarte simpatică.",
                author: "Daniel T., Tată",
              },
            ].map((t, i) => (
              <div key={i} className="bg-black/40 p-6 rounded-lg border border-purple-800">
                <p className="italic text-gray-300 mb-4">"{t.text}"</p>
                <p className="font-semibold text-gray-200">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-black/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Contactează-ne</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Numele tău"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Mesajul tău"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition"
            >
              Trimite Mesaj
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/70 text-gray-400 py-8 px-4 text-center">
        <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Astral Events</h4>
        <p className="text-sm">© {new Date().getFullYear()} Toate drepturile rezervate.</p>
        <p className="text-sm mt-1">Termeni și condiții | GDPR</p>

        {/* Legături ANPC și UE */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://anpc.ro/ce-este-sal/ " target="_blank" rel="nofollow noreferrer">
            <img style={{ width: '250px', margin: '5px' }} src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png " alt="Solutionarea Alternativa a Litigiilor" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr " target="_blank" rel="nofollow noreferrer">
            <img style={{ width: '250px', margin: '5px' }} src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png " alt="Solutionarea Online a Litigiilor" />
          </a>
        </div>
      </footer>

      {/* Buton Înapoi sus */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:from-pink-600 hover:to-purple-700 transition-transform transform hover:scale-110 z-40"
          aria-label="Înapoi sus"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* CSS pentru animații */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}