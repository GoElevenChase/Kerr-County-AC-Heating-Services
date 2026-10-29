import { Arrow, Logo, TiltEffects } from "@/components/shared";

const concepts = [
  {
    id: "design-1",
    tone: "Bright · Clean · Neighborly",
    title: "The Neighborhood Standard",
    description: "Bright, airy, and neighborly. A sunlit Hill Country hero, a clear service list beside the VIP program, and a straight path from an everyday comfort problem to a conversation with Kerr County.",
    tags: "Sky blue & white · Manrope display · Soft, welcoming motion",
    alt: "Opening screen of Design 1: a bright page with the headline Kerrville’s Trusted Family AC Repair Service beside a photo of a technician at an outdoor unit",
  },
  {
    id: "design-2",
    tone: "Bold · Cinematic · Precise",
    title: "Comfort, Handled",
    description: "Confident and cinematic. Full-bleed video, bold uppercase display type, and a technical rhythm built for getting the right help fast.",
    tags: "Deep navy · Montserrat display · Cinematic motion",
    alt: "Opening screen of Design 2: a dark navy hero with the uppercase headline Comfort, built around your family over video of a Kerr County technician at work",
  },
] as const;

export function DesignChooser() {
  return <>
    <div className="page-curtain" aria-hidden="true"><i /><span /></div>
    <main className="chooser" id="main-content">
      <header className="chooser-header wrap"><Logo /><span className="chooser-prepared">Prepared by ElevenChase</span><span className="chooser-tag">Kerr County A/C &amp; Heating · Website directions</span></header>
      <div className="wrap">
        <section className="chooser-intro" aria-labelledby="chooser-title">
          <p className="chooser-eyebrow"><i aria-hidden="true" />A fresh perspective</p>
          <h1 id="chooser-title">Two fresh directions<br />for <em>Kerr County.</em></h1>
          <div className="chooser-intro-bottom"><p>The same local care, expressed two ways. Explore each complete homepage and choose the direction that feels right.</p><span>One family business. Two possibilities. <Arrow /></span></div>
        </section>
        <section className="chooser-grid" aria-label="Explore the two homepage concepts">
          {concepts.map((concept, index) => <article key={concept.id} className="concept-card" data-tilt="true">
            <div className="concept-preview">
              <div className="preview-window" aria-hidden="true"><i /><i /><i /><small>Kerr County A/C &amp; Heating — Design {index + 1}</small></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/previews/${concept.id}-desktop.webp`} width="1440" height="900" alt={concept.alt} loading="eager" />
              <span className="preview-open" aria-hidden="true"><Arrow direction="up" /></span>
            </div>
            <div className="concept-info">
              <div className="concept-topline"><span>Design 0{index + 1}</span><span>{concept.tone}</span></div>
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
              <p className="concept-tags">{concept.tags}</p>
              <a className="concept-action" href={`/${concept.id}/`}>Explore Design {index + 1}<Arrow direction="up" /></a>
            </div>
          </article>)}
        </section>
        <section className="chooser-footnote" aria-label="About this presentation">
          <p>Different first impressions. <em>The same Kerr County care.</em></p>
          <p>Each direction is a complete, responsive homepage. Use the floating bar to switch designs or return here. Online booking and call links lead to the existing Kerr County service channels.</p>
        </section>
        <footer className="chooser-footer"><span>Thoughtfully prepared for Kerr County A/C &amp; Heating Services.</span><span>Two homepage concepts · October 2026</span><span>Presentation only · Excluded from search</span></footer>
      </div>
    </main>
    <TiltEffects />
  </>;
}
