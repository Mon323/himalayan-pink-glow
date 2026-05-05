import { createFileRoute } from "@tanstack/react-router";
import heroLamp from "@/assets/hero-lamp.jpg";
import saltCrystals from "@/assets/salt-crystals.jpg";
import teaLights from "@/assets/tea-lights.jpg";
import saltDecor from "@/assets/salt-decor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bullseye Trading LLC — Authentic Himalayan Pink Salt Decor" },
      {
        name: "description",
        content:
          "Premium Himalayan pink salt lamps, candle holders & decor. Hand-crafted from authentic Himalayan salt by Bullseye Trading LLC.",
      },
      { property: "og:title", content: "Bullseye Trading LLC — Himalayan Pink Salt Decor" },
      { property: "og:description", content: "Hand-crafted Himalayan pink salt lamps & decor." },
      { property: "og:image", content: heroLamp },
    ],
  }),
});

function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[var(--salt-glow)] animate-glow" />
        <span className="font-display text-xl text-[var(--cream)] tracking-wide">
          Bullseye<span className="text-[var(--salt-glow)]">.</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm text-[var(--cream)]/80">
        <a href="#collection" className="hover:text-[var(--salt-glow)] transition-colors">Collection</a>
        <a href="#story" className="hover:text-[var(--salt-glow)] transition-colors">Our Story</a>
        <a href="#benefits" className="hover:text-[var(--salt-glow)] transition-colors">Benefits</a>
        <a href="#contact" className="hover:text-[var(--salt-glow)] transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="text-sm px-5 py-2.5 rounded-full border border-[var(--cream)]/20 text-[var(--cream)] hover:bg-[var(--salt-glow)] hover:border-[var(--salt-glow)] hover:text-[var(--charcoal)] transition-all"
      >
        Inquire
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <Nav />
      {/* glow halo */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none animate-glow"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-32 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="animate-fade-up">
          <p className="text-[var(--salt-glow)] tracking-[0.3em] text-xs uppercase mb-6">
            Bullseye Trading LLC
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--cream)] leading-[0.95] mb-8 text-balance">
            Light carved
            <br />
            from the
            <br />
            <em className="text-[var(--salt-glow)] not-italic font-light">Himalayas.</em>
          </h1>
          <p className="text-[var(--cream)]/70 text-lg max-w-md mb-10 leading-relaxed">
            Authentic pink salt lamps and decor — sculpted from 250-million-year-old crystals,
            glowing softly into your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collection"
              className="px-8 py-4 rounded-full bg-[var(--salt-glow)] text-[var(--charcoal)] font-medium hover:shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02]"
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="px-8 py-4 rounded-full border border-[var(--cream)]/30 text-[var(--cream)] hover:bg-[var(--cream)]/10 transition-all"
            >
              Our Story
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroLamp}
            alt="Glowing Himalayan pink salt lamp"
            width={1536}
            height={1536}
            className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_30px_80px_rgba(255,140,60,0.4)]"
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--cream)]/40 text-xs tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Hand-Carved", "Authentic Khewra Salt", "Wellness · Decor · Ambiance", "Worldwide Shipping", "Est. Bullseye Trading LLC"];
  return (
    <div className="bg-[var(--charcoal)] text-[var(--cream)]/60 py-6 overflow-hidden border-y border-[var(--cream)]/10">
      <div className="flex gap-16 whitespace-nowrap font-display text-2xl italic">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t} <span className="text-[var(--salt-glow)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Collection() {
  const products = [
    { img: heroLamp, name: "Natural Salt Lamp", tag: "Signature", desc: "Raw, hand-chipped crystal on a teak base." },
    { img: teaLights, name: "Tea Light Holders", tag: "Ambiance", desc: "Set of carved candle vessels for warm evenings." },
    { img: saltDecor, name: "Sculpted Decor", tag: "Editorial", desc: "Geometric pieces — pyramid, bowl, obelisk." },
  ];
  return (
    <section id="collection" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[var(--salt-deep)] tracking-[0.3em] text-xs uppercase mb-4">The Collection</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground max-w-2xl text-balance">
              A quiet luxury, lit from within.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Each piece is unique — shaped by hand, glowing in soft amber, no two ever alike.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--charcoal)]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--salt-deep)] mb-2">{p.tag}</p>
                <h3 className="font-display text-2xl mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--charcoal)] text-[var(--cream)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={saltCrystals}
            alt="Raw pink Himalayan salt crystals"
            loading="lazy"
            className="rounded-2xl w-full shadow-[var(--shadow-glow)]"
          />
          <div className="absolute -bottom-6 -right-6 bg-[var(--salt-glow)] text-[var(--charcoal)] p-6 rounded-2xl max-w-[200px] hidden md:block">
            <p className="font-display text-4xl">250M</p>
            <p className="text-xs tracking-wider uppercase mt-1">Years in the making</p>
          </div>
        </div>
        <div>
          <p className="text-[var(--salt-glow)] tracking-[0.3em] text-xs uppercase mb-4">Our Story</p>
          <h2 className="font-display text-5xl md:text-6xl mb-8 text-balance leading-[1.05]">
            From ancient seas to your <em className="text-[var(--salt-glow)]">living room.</em>
          </h2>
          <p className="text-[var(--cream)]/70 leading-relaxed mb-6">
            Bullseye Trading LLC sources directly from the Khewra Salt Mine in Pakistan — the
            world's second-largest, where prehistoric oceans crystallized into pink stone beneath
            the Himalayas.
          </p>
          <p className="text-[var(--cream)]/70 leading-relaxed mb-10">
            Every lamp, holder, and sculpture is hand-shaped by master artisans, then quality
            checked, packaged, and shipped to homes worldwide. No mass production. No shortcuts.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--cream)]/10">
            <div>
              <p className="font-display text-3xl text-[var(--salt-glow)]">100%</p>
              <p className="text-xs tracking-wider uppercase text-[var(--cream)]/60 mt-1">Authentic</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[var(--salt-glow)]">40+</p>
              <p className="text-xs tracking-wider uppercase text-[var(--cream)]/60 mt-1">Countries</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[var(--salt-glow)]">Hand</p>
              <p className="text-xs tracking-wider uppercase text-[var(--cream)]/60 mt-1">Crafted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { n: "01", t: "Warm Ambient Glow", d: "A soft amber light that softens any room and soothes the eye." },
    { n: "02", t: "Air Purifying", d: "Salt crystals are believed to attract moisture and refresh indoor air." },
    { n: "03", t: "Calming Atmosphere", d: "Ideal for meditation corners, bedrooms, and quiet evenings." },
    { n: "04", t: "Statement Decor", d: "Sculptural by nature — every piece is a one-of-a-kind centerpiece." },
  ];
  return (
    <section id="benefits" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[var(--salt-deep)] tracking-[0.3em] text-xs uppercase mb-4">Why Pink Salt</p>
          <h2 className="font-display text-5xl md:text-6xl text-balance">
            More than decor — a quiet ritual.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div
              key={i.n}
              className="p-8 rounded-2xl border border-border bg-card hover:bg-[var(--charcoal)] hover:text-[var(--cream)] transition-all duration-500 group"
            >
              <p className="font-display text-5xl text-[var(--salt-deep)] group-hover:text-[var(--salt-glow)] transition-colors mb-6">
                {i.n}
              </p>
              <h3 className="font-display text-2xl mb-3">{i.t}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-[var(--cream)]/70 transition-colors">
                {i.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-[var(--salt-glow)] tracking-[0.3em] text-xs uppercase mb-6">Get in touch</p>
        <h2 className="font-display text-5xl md:text-7xl text-[var(--cream)] mb-8 text-balance leading-[1.05]">
          Bring the glow of the <em className="text-[var(--salt-glow)]">Himalayas</em> home.
        </h2>
        <p className="text-[var(--cream)]/70 text-lg mb-10 max-w-xl mx-auto">
          Wholesale, retail, or custom orders — we ship our hand-crafted pink salt collection worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@bullseyetrading.com"
            className="px-8 py-4 rounded-full bg-[var(--salt-glow)] text-[var(--charcoal)] font-medium hover:shadow-[var(--shadow-glow)] transition-all"
          >
            hello@bullseyetrading.com
          </a>
          <a
            href="#collection"
            className="px-8 py-4 rounded-full border border-[var(--cream)]/30 text-[var(--cream)] hover:bg-[var(--cream)]/10 transition-all"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--cream)]/60 px-6 md:px-12 py-12 border-t border-[var(--cream)]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--salt-glow)]" />
          <span className="font-display text-lg text-[var(--cream)]">Bullseye Trading LLC</span>
        </div>
        <p className="text-xs tracking-wider">© {new Date().getFullYear()} — Crafted with care.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Collection />
      <Story />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}
