import { siteContent } from "@/content/site";
import { Arrow, ExternalLink, HeroVideo, Icon, Logo, Reveal, ScheduleButton, Stars, type NavItem } from "@/components/shared";
import { CountUp, SystemSelector, Thermostat, TwoHeader, type SystemItem } from "@/components/two-parts";

const { business, vip, links, footer } = siteContent;

const nav: readonly NavItem[] = [
  { label: "Control", href: "#top" },
  { label: "Systems", href: "#systems" },
  { label: "Plan", href: "#plan" },
  { label: "Proof", href: "#proof" },
  { label: "Answers", href: "#answers" },
  { label: "Contact", href: "#contact" },
];

const media: Record<string, { image: string; alt: string }> = {
  "ac-repair": { image: "/images/frame-tech-gauges-hd.jpg", alt: "A Kerr County technician holding refrigerant gauges beside a limestone wall" },
  "ac-installation": { image: "/images/condenser-wall-hd.jpg", alt: "A newly installed outdoor AC condenser against a home’s exterior wall" },
  "furnace-repair": { image: "/images/furnace-attic-hd.jpg", alt: "Two Kerr County technicians servicing a furnace in an attic by headlamp and work light" },
  "furnace-installation": { image: "/images/frame-tech-stone-wall.jpg", alt: "A technician kneeling at an air handler in an insulated attic, with ductwork and a filter box beside it" },
  "heat-pump": { image: "/images/condenser-stone.webp", alt: "An outdoor condenser unit on a pad against a limestone wall" },
  "mini-split": { image: "/images/condenser-mini-split-hd.jpg", alt: "A central AC condenser beside an LG mini-split outdoor unit with gauges attached" },
  "air-quality": { image: "/images/frame-tech-stone-wall.jpg", alt: "A technician working on an air handler and filter in an insulated attic" },
  vip: { image: "/images/frame-homeowners.jpg", alt: "A Kerr County technician greeting two homeowners at the door of their home" },
};

const systems: readonly SystemItem[] = siteContent.services.map(service => ({ ...service, ...media[service.id] }));

const towns = siteContent.serviceAreas;

export function DesignTwo() {
  return <div className="design-two" id="top-wrap">
    <TwoHeader nav={nav} />
    <main id="main-content">
      {/* CONTROL — video behind a working thermostat */}
      <section className="d2-hero" id="top" aria-labelledby="d2-hero-title">
        <HeroVideo src="/video/kerr-county-hero.mp4" poster="/images/frame-tech-gauges-hd.jpg" />
        <div className="d2-hero-inner">
          <div className="d2-hero-copy">
            <p className="d2-code"><i aria-hidden="true" />Family owned · Kerrville, TX · Since {footer.since}</p>
            <h1 id="d2-hero-title">Comfort,<br />under<br /><em>control.</em></h1>
            <p className="d2-hero-lede">HVAC repair, installation and maintenance for homes across Kerr County. Move the dial to see where we come in.</p>
            <div className="d2-hero-actions"><ScheduleButton className="d2-primary">Schedule service</ScheduleButton><a className="d2-ghost" href={business.phoneHref}>Call or text {business.phone}</a></div>
          </div>
          <Thermostat />
        </div>
      </section>

      {/* TOWNS — slow marquee */}
      <section className="d2-marquee" aria-label="Service areas">
        <div className="d2-marquee-track" aria-hidden="true">{[0, 1].map(copy => <ul key={copy}>{towns.map(town => <li key={`${copy}-${town}`}>{town}</li>)}</ul>)}</div>
        <p className="d2-sr">Serving {towns.join(", ")}.</p>
      </section>

      {/* SYSTEMS — a selector panel, not a grid */}
      <section className="d2-systems-section" id="systems" aria-labelledby="d2-systems-title">
        <div className="d2-wrap">
          <Reveal className="d2-head"><p className="d2-code"><i aria-hidden="true" />01 / Systems</p><h2 id="d2-systems-title">Every system in the house, one crew.</h2></Reveal>
          <Reveal delay={80}><SystemSelector items={systems} /></Reveal>
        </div>
      </section>

      {/* BAND — the van, full bleed */}
      <section className="d2-band" aria-label="Family taking care of families">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/service-van-hd.jpg" alt="A Kerr County A/C & Heating service van parked on a street beside the Guadalupe River" width="2200" height="1000" loading="lazy" />
        <p aria-hidden="true">Family taking<br />care of families.</p>
        <span className="d2-sr">Family taking care of families.</span>
      </section>

      {/* PLAN — the one light section */}
      <section className="d2-plan" id="plan" aria-labelledby="d2-plan-title">
        <div className="d2-wrap d2-plan-grid">
          <Reveal className="d2-plan-copy">
            <p className="d2-code"><i aria-hidden="true" />02 / Maintenance plan</p>
            <h2 id="d2-plan-title">VIP Maintenance Program</h2>
            <p>Two yearly system checks scheduled for you, 10% off repairs, and a $49 diagnostic.</p>
            <ul className="d2-checks">{vip.benefits.map(benefit => <li key={benefit}><Icon name="check" size={16} />{benefit}</li>)}</ul>
            <ExternalLink href={vip.href} className="d2-plan-link">How the program works <Arrow /></ExternalLink>
          </Reveal>
          <Reveal className="d2-rates" delay={100}>
            {vip.pricing.map(line => {
              const [price, rest] = line.split(" - ");
              const [amount, unit] = price.split(" per ");
              return <div key={line} className="d2-rate"><strong>{amount}</strong><span>per {unit}</span><small>{rest}</small></div>;
            })}
          </Reveal>
        </div>
      </section>

      {/* PROOF — readouts over the team photograph */}
      <section className="d2-proof" id="proof" aria-labelledby="d2-proof-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/team-wide.webp" alt="The Kerr County A/C & Heating team gathered in front of their shop" width="1920" height="800" loading="lazy" />
        <div className="d2-wrap d2-proof-inner">
          <Reveal className="d2-head"><p className="d2-code"><i aria-hidden="true" />03 / Proof</p><h2 id="d2-proof-title">Kerrville keeps score.</h2></Reveal>
          <dl className="d2-readouts">
            <Reveal className="d2-readout"><dt>Google reviews</dt><dd><CountUp value={Number(business.googleReviews)} /><Stars /></dd></Reveal>
            <Reveal className="d2-readout" delay={80}><dt>{business.awards[0]}</dt><dd>2024</dd></Reveal>
            <Reveal className="d2-readout" delay={160}><dt>{business.awards[1]}</dt><dd>2025</dd></Reveal>
          </dl>
          <ExternalLink href={links.reviews} className="d2-thermo-link">Read the reviews <Arrow /></ExternalLink>
        </div>
      </section>

      {/* ANSWERS */}
      <section className="d2-answers" id="answers" aria-labelledby="d2-answers-title">
        <div className="d2-wrap">
          <Reveal className="d2-head"><p className="d2-code"><i aria-hidden="true" />04 / Answers</p><h2 id="d2-answers-title">Straight answers.</h2></Reveal>
          <div className="d2-faq">{siteContent.faqs.map((faq, index) => <details key={faq.id}>
            <summary><small>Q{index + 1}</small><span>{faq.question}</span><Icon name="plus" size={18} className="d2-plus" /></summary>
            <p>{faq.answer}</p>
          </details>)}</div>
          <ExternalLink href={links.faq} className="d2-thermo-link">All FAQs <Arrow /></ExternalLink>
        </div>
      </section>

      {/* CONTACT — dispatch console */}
      <section className="d2-contact" id="contact" aria-labelledby="d2-contact-title">
        <div className="d2-wrap d2-contact-grid">
          <Reveal className="d2-contact-lead">
            <p className="d2-code"><i aria-hidden="true" />05 / Contact</p>
            <h2 id="d2-contact-title">Ready when you are.</h2>
            <p>{business.emergency}. Call or text, or pick a time online.</p>
            <div className="d2-hero-actions"><ScheduleButton className="d2-primary">Schedule service</ScheduleButton></div>
          </Reveal>
          <Reveal className="d2-console" delay={100}>
            <a className="d2-console-phone" href={business.phoneHref}><small>Call or text</small>{business.phone}</a>
            <div className="d2-console-row"><span>Shop</span><ExternalLink href={business.address.mapUrl}>{business.address.street}, {business.address.locality}</ExternalLink></div>
            {business.hours.map(row => <div className="d2-console-row" key={row.days}><span>{row.days}</span><b>{row.time}</b></div>)}
          </Reveal>
        </div>
      </section>
    </main>

    <footer className="d2-footer">
      <div className="d2-wrap">
        <div className="d2-footer-top">
          <a href="#top-wrap" aria-label="Back to top"><Logo plate /></a>
          <nav aria-label="Footer navigation"><ul>{footer.quickLinks.map(link => <li key={link.label}><ExternalLink href={link.href}>{link.label}</ExternalLink></li>)}</ul></nav>
          <div className="d2-social">{footer.social.map(item => <ExternalLink key={item.label} href={item.href} label={item.label === "Google" ? "Review us on Google" : `${business.shortName} on ${item.label}`}><Icon name={item.label.toLowerCase()} size={20} /></ExternalLink>)}</div>
        </div>
        <div className="d2-chambers">{footer.chambers.map(chamber => {
          // eslint-disable-next-line @next/next/no-img-element
          const image = <img src={chamber.image} alt={chamber.name} width={chamber.width} height={chamber.height} loading="lazy" />;
          return chamber.href ? <ExternalLink key={chamber.name} href={chamber.href}>{image}</ExternalLink> : <span key={chamber.name}>{image}</span>;
        })}</div>
        <div className="d2-footer-bottom">
          <span>Copyright © {footer.since}–{new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span className="d2-legal">{footer.legal.map(link => <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>)}</span>
        </div>
      </div>
    </footer>
  </div>;
}
