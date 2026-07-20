import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { href: "#about", label: "Über uns" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Salon" },
  { href: "#contact", label: "Öffnungszeiten" },
];

const services = [
  { icon: "✂️", title: "Herrenhaarschnitt", desc: "Moderne und klassische Schnitte, perfekt auf Ihren Stil und Ihre Kopfform abgestimmt." },
  { icon: "🔥", title: "Skin Fade", desc: "Makellose Übergänge mit höchster Präzision – von Low Fade bis High Fade." },
  { icon: "🧔", title: "Bartdesign & Bartpflege", desc: "Exakte Konturen, individuelle Bartformen und professionelle Pflege." },
  { icon: "🪒", title: "Hot Towel Shave", desc: "Traditionelle Nassrasur mit warmem Handtuch für maximale Entspannung." },
  { icon: "✨", title: "Hautpflege", desc: "Pflegende Gesichtsbehandlungen für einen frischen, gepflegten Look." },
  { icon: "💈", title: "Komplettes Herren-Grooming", desc: "Rundum-Paket für den modernen Gentleman – Haare, Bart und Pflege." },
];

const galleryImages = [
  { src: "/images/barber-stations.jpg", alt: "Barber Arbeitsplätze mit Spiegel", label: "Barber Stationen", position: "object-[center_40%]" },
  { src: "/images/products.jpg", alt: "Produktregal mit Pflegeprodukten", label: "Produkte" },
  { src: "/images/exterior.jpg", alt: "Ladenfassade von aussen", label: "Aussenansicht" },
];

const testimonials = [
  { stars: "★★★★★", text: "„Mein Haarschnitt ist genau so geworden, wie ich ihn wollte. Sehr professionell und unglaublich freundlich.\"", author: "Flavia Figueiredo" },
  { stars: "★★★★★", text: "„Wenn es um Bartdesign geht, kann ich Coiffeur Saleh Herren nur empfehlen.\"", author: "Google Rezension" },
  { stars: "★★★★★", text: "„Hasan macht seinen Job super. Ich lasse meine Haare seit Jahren nur noch hier schneiden.\"", author: "M. Liechti" },
];

const hours = [
  { day: "Montag", time: "09:00–19:00" },
  { day: "Dienstag", time: "09:00–19:00" },
  { day: "Mittwoch", time: "09:00–19:00" },
  { day: "Donnerstag", time: "09:00–19:00" },
  { day: "Freitag", time: "09:00–20:00" },
  { day: "Samstag", time: "09:00–18:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) header.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="rounded-full px-6 py-2 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/images/saleh-logo.png" alt="Coiffeur Saleh Herren" className="h-20 w-auto -mt-2" />
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-white/80">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="#video" className="btn rounded-full bg-yellow-500 text-black px-6 py-2.5 font-bold text-sm">Termin buchen</a>
          </div>
          <button className="md:hidden text-white/80 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2 mx-6 glass rounded-3xl px-6 py-6 flex flex-col gap-4 text-sm text-white/80">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2 hover:text-yellow-400 transition">{l.label}</a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a href="#video" onClick={() => setMenuOpen(false)} className="block w-full text-center bg-yellow-500 text-black font-bold rounded-full py-3">
              📞 Termin buchen – 076 540 45 14
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[160px] bg-yellow-600/10 -top-40 -left-40" />
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[180px] bg-white/5 bottom-0 right-0" />
      </div>

      <Header />

      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex rounded-full px-4 py-2 text-sm text-white/80 mb-6 glass">💈 Premium Barber Shop · Chur</div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
                Präzision.<br />
                <span className="gold">Charakter.</span><br />
                Stil.
              </h1>
              <p className="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
                Willkommen bei <strong>Coiffeur Saleh</strong> – Ihrem modernen Herrenfriseur in Chur. Von klassischen Schnitten bis zu perfekten Fades, präzisem Bartdesign und exklusivem Grooming – echte Handwerkskunst auf höchstem Niveau.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#video" className="btn rounded-full px-8 py-4 bg-yellow-500 text-black font-bold">Termin vereinbaren →</a>
                <a href="#services" className="btn rounded-full px-8 py-4 border border-white/15 glass">Services ansehen</a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div><div className="text-4xl font-black gold">5★</div><div className="text-white/60 text-sm">Top Bewertungen</div></div>
                <div><div className="text-4xl font-black gold">100%</div><div className="text-white/60 text-sm">Leidenschaft</div></div>
                <div><div className="text-4xl font-black gold">VIP</div><div className="text-white/60 text-sm">Entspannte Atmosphäre</div></div>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              <img src="/images/entrance.jpg" className="w-full max-w-md h-auto object-cover rounded-3xl shadow-glow" alt="Eingangsbereich Coiffeur Saleh Herren" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-6 fade" style={{ background: "radial-gradient(circle at 30% 50%, rgba(199,168,107,0.10) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(32,32,32,0.3) 0%, transparent 50%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">Über uns</div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight">Mehr als ein<br /><span className="gold">Haarschnitt.</span></h2>
              <div className="mt-8 rounded-3xl overflow-hidden shadow-glow">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="metadata">
                  <source src="/images/salon-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="text-white/70 text-lg leading-9 lg:pt-32">
              Bei <strong>Coiffeur Saleh Herren</strong> in Chur stehen Präzision, Persönlichkeit und echte Gastfreundschaft im Mittelpunkt. Ob moderner Fade, klassischer Herrenhaarschnitt oder perfektes Bartstyling – jedes Detail wird mit höchster Sorgfalt umgesetzt. Neben professionellen Haarschnitten bieten wir Bartpflege, Hot Towel Shave, Hautpflege sowie Maniküre an – für Männer, die Wert auf ein gepflegtes Erscheinungsbild legen.
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 fade">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-10">Unsere <span className="gold">Services</span></h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass rounded-3xl p-8 card">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-white/60 mt-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-12 fade" style={{ background: "radial-gradient(circle at 50% 0%, rgba(199,168,107,0.12) 0%, transparent 50%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[40px] p-10">
            <div className="grid lg:grid-cols-4 gap-6">
              <div><div className="text-4xl mb-3">🎯</div><h3 className="font-bold text-xl mb-2">Präzision</h3><p className="text-white/60">Perfektion bis ins kleinste Detail – jeder Schnitt sitzt.</p></div>
              <div><div className="text-4xl mb-3">🥃</div><h3 className="font-bold text-xl mb-2">VIP Atmosphäre</h3><p className="text-white/60">Entspanntes Ambiente mit Getränkeservice und echter Wertschätzung.</p></div>
              <div><div className="text-4xl mb-3">⭐</div><h3 className="font-bold text-xl mb-2">Top Bewertungen</h3><p className="text-white/60">Viele zufriedene Stammkunden in Chur und Umgebung.</p></div>
              <div><div className="text-4xl mb-3">🇨🇭</div><h3 className="font-bold text-xl mb-2">Swiss Quality</h3><p className="text-white/60">Sauberkeit, Präzision und Qualität ohne Kompromisse.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black">Unser <span className="gold">Salon</span></h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto">Ein Blick in die Räumlichkeiten von Coiffeur Saleh Herren in Chur</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden bg-neutral-900 shadow-glow transition-all duration-500" style={{ aspectRatio: "4 / 3" }}>
                <img src={img.src} alt={img.alt} className={`w-full h-full object-cover ${img.position || "object-center"} transition duration-700 group-hover:scale-110`} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-semibold text-sm bg-black/60 backdrop-blur-md px-4 py-2 rounded-full inline-block">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video CTA */}
      <section id="video" className="py-12 fade">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-glow isolate">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/entrance.jpg"
              aria-hidden="true"
            >
              <source src="/images/barber-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-black/10" />
            <div className="relative flex flex-col justify-center px-6 py-14 sm:px-10 md:px-16 md:py-24 md:min-h-[520px] max-w-2xl">
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">Bereit für deinen nächsten Look?</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Dein perfekter<br /><span className="gold">Haarschnitt</span><br />beginnt mit einem Termin.
              </h2>
              <p className="text-white/70 mt-5 text-base md:text-lg leading-relaxed">
                Egal ob klassischer Schnitt, perfekter Fade oder präzise Bartpflege – wir nehmen uns Zeit für jedes Detail. Vereinbare jetzt deinen Termin und erlebe echte Barber-Qualität in Chur.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
                <a href="tel:+41765404514" className="btn inline-flex items-center justify-center gap-2 bg-yellow-500 text-black font-bold rounded-full px-6 py-3.5 text-sm sm:text-base">📞 Termin buchen – 076 540 45 14</a>
                <a href="https://wa.me/41765404514" target="_blank" rel="noreferrer" className="btn inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-full px-6 py-3.5 text-sm sm:text-base">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-12 fade" style={{ background: "radial-gradient(circle at 20% 30%, rgba(199,168,107,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(32,32,32,0.2) 0%, transparent 45%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-10">Was unsere Kunden sagen</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="text-yellow-400 text-xl">{t.stars}</div>
                <p className="mt-4 text-white/70 text-sm">{t.text}</p>
                <div className="mt-4 font-semibold">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 fade" style={{ background: "radial-gradient(circle at 70% 80%, rgba(199,168,107,0.12) 0%, transparent 45%), radial-gradient(circle at 30% 20%, rgba(32,32,32,0.2) 0%, transparent 45%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[40px] p-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-black">Besuche <span className="gold">Coiffeur Saleh</span></h2>
                <div className="mt-6 space-y-4 text-lg mb-8">
                  <div><strong>📍 Adresse</strong><br />Wagnergasse 7<br />7000 Chur, Schweiz</div>
                  <div><strong>📞 Telefon</strong><br /><a href="tel:+41765404514" className="hover:text-yellow-300 transition">+41 76 540 45 14</a></div>
                  <div><strong>📷 Instagram</strong><br /><a href="https://www.instagram.com/coiffeursaleh.chur/" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">@coiffeursaleh.chur</a></div>
                  <div className="pt-4"><strong>🕒 Öffnungszeiten</strong></div>
                  <div className="space-y-2 text-base">
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between max-w-xs">
                        <span className="text-white/80">{h.day}</span>
                        <span className="text-white/60">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Wagnergasse+7+7000+Chur" target="_blank" rel="noreferrer" className="btn block w-full text-center bg-yellow-500 text-black font-bold rounded-full py-4">Route planen</a>
              </div>
              <div className="flex items-center justify-center">
                <div className="glass rounded-3xl p-8 w-full text-center">
                  <div className="text-6xl mb-4">💈</div>
                  <h3 className="text-2xl font-bold">Coiffeur Saleh Herren</h3>
                  <p className="text-white/60 mt-2">Premium Barber Shop · Chur</p>
                  <p className="text-white/50 mt-4 text-sm">Wagnergasse 7, 7000 Chur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10" style={{ background: "radial-gradient(circle at 50% 0%, rgba(199,168,107,0.08) 0%, transparent 50%)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-black text-2xl gold">COIFFEUR SALEH</div>
            <div className="text-white/50 mt-2">Premium Barber Shop · Chur</div>
          </div>
          <div className="text-white/40 text-sm text-center">© 2026 Coiffeur Saleh Herren · Präzision. Stil. Qualität.</div>
          <a href="https://www.instagram.com/coiffeursaleh.chur/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-yellow-300 transition text-sm flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
