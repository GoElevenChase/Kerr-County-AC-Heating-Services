import { Arrow, Logo } from "@/components/shared";

const concepts = [
  {
    id: "design-1",
    title: "Hill Country Field Notes",
    tone: "Editorial · Warm · Regional",
    description: "An almanac for the Kerrville year. Limestone paper, oversized condensed type, and a calendar that puts the spring A/C check and the fall heat check where they belong: before the weather.",
    tags: ["Limestone, cedar & granite", "Archivo + Newsreader", "Editorial motion"],
    alt: "Opening screen of Design 1: a limestone-colored page with the huge condensed headline Cool in July, Warm in January beside a photo of a technician servicing an outdoor unit",
  },
  {
    id: "design-2",
    title: "Comfort Control",
    tone: "Technical · Dark · Interactive",
    description: "A control room for your home. Full-bleed video behind a working thermostat that points visitors to the right service, then a service selector, live readouts, and a dispatch-style contact panel.",
    tags: ["Charcoal, ice & ember", "Bricolage Grotesque + Plex Mono", "Interactive dial"],
    alt: "Opening screen of Design 2: a dark page with the headline Comfort, under control beside a thermostat dial reading 72 degrees",
  },
] as const;

export function DesignChooser() {
  return <main className="chooser" id="main-content">
    <header className="ch-header">
      <Logo />
      <span>Prepared by ElevenChase</span>
      <span className="ch-header-date">October 2026 · Website directions</span>
    </header>
    <section className="ch-intro" aria-labelledby="ch-title">
      <p className="ch-label">Kerr County A/C &amp; Heating Services</p>
      <h1 id="ch-title">Two ways to say <em>we’ll keep you comfortable.</em></h1>
      <p className="ch-note">Each direction is a complete, responsive homepage with the same business facts and the same booking and call links. Hover a panel to open it up, then choose one to explore.</p>
    </section>
    <section className="ch-panels" aria-label="Homepage directions">
      {concepts.map((concept, index) => <article key={concept.id} className="ch-panel" data-design={concept.id}>
        <div className="ch-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/previews/${concept.id}-desktop.jpg`} width="1440" height="900" alt={concept.alt} loading="eager" />
        </div>
        <div className="ch-caption">
          <p className="ch-index">0{index + 1}<span>{concept.tone}</span></p>
          <h2>{concept.title}</h2>
          <p className="ch-desc">{concept.description}</p>
          <ul className="ch-tags">{concept.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <a className="ch-open" href={`/${concept.id}/`}>Explore direction {index + 1}<Arrow direction="up" /></a>
        </div>
      </article>)}
    </section>
    <footer className="ch-footer"><span>Presentation only · excluded from search</span><span>Use the floating bar on each page to switch directions or return here.</span></footer>
  </main>;
}
