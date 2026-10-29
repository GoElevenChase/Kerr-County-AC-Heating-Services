import { siteContent } from "@/content/site";
import { Arrow, ExternalLink, FaqList, HeroVideo, Icon, Reveal, ScheduleButton, SiteFooter, SiteHeader, Stars, type NavItem } from "@/components/shared";

const { business, links } = siteContent;

const nav: readonly NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#directory", services: true },
  { label: "About Us", href: "#process" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Reviews", href: "#reputation" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  { icon: "snowflake", label: "AC & Cooling", href: "#cooling" },
  { icon: "flame", label: "Heating", href: "#heating" },
  { icon: "wind", label: "Air Quality", href: "#directory" },
  { icon: "minisplit", label: "Mini-Splits", href: "#directory" },
];

const steps = [
  { title: "Diagnose", text: "We find the real issue with a thorough inspection and honest assessment." },
  { title: "Recommend", text: "We give you clear options and recommend the best solution for your home." },
  { title: "Restore Comfort", text: "Our expert team gets to work so you can enjoy reliable comfort, fast." },
];

function AwardBadge({ year }: { year: string }) {
  return <svg className="two-badge" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      {[0, 1, 2, 3, 4, 5].map(i => <g key={i}><path d={`M${14 - i * 0.6} ${46 - i * 6}c-3-1-5-3-5.5-6 3 .3 5 2 5.5 6z`} /><path d={`M${50 + i * 0.6} ${46 - i * 6}c3-1 5-3 5.5-6-3 .3-5 2-5.5 6z`} /></g>)}
      <path d="M14 50c6 6 30 6 36 0" />
    </g>
    <circle cx="32" cy="31" r="17" fill="currentColor" />
    <path d="m32 20 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" fill="#fff" />
    <text x="32" y="44" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#fff" fontFamily="Montserrat, sans-serif">{year}</text>
  </svg>;
}

export function DesignTwo() {
  return <div className="design-two" id="top">
    <SiteHeader variant="two" nav={nav} />
    <main id="main-content">
      <section className="two-hero" aria-labelledby="two-hero-title">
        <HeroVideo src="/video/kerr-county-hero.mp4" poster="/images/frame-tech-gauges-hd.jpg" />
        <div className="wrap two-hero-inner">
          <p className="eyebrow">Family Owned <span aria-hidden="true">•</span> Kerrville TX</p>
          <h1 id="two-hero-title">Comfort, built<br />around your<br />family.</h1>
          <p className="two-hero-text">Reliable HVAC service, expert technicians,<br className="desktop-break" /> and lasting comfort for your home.</p>
          <ScheduleButton className="btn-caps" />
        </div>
      </section>

      <section className="two-categories" aria-label="Service categories">
        <ul className="wrap">{categories.map((item, index) => <Reveal as="li" key={item.label} delay={index * 70}><a href={item.href}><span className="two-cat-num">0{index + 1}</span><span className="two-cat-body"><Icon name={item.icon} size={30} /><strong>{item.label}</strong><Arrow /></span></a></Reveal>)}</ul>
      </section>

      <section className="two-split" id="cooling" aria-labelledby="two-cooling-title">
        <div className="two-split-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/condenser-wall-hd.jpg" alt="A newly installed outdoor AC condenser against a home’s exterior wall" width="2280" height="1000" loading="lazy" />
        </div>
        <Reveal className="two-split-copy">
          <p className="eyebrow">Keep Your Home Cool</p>
          <h2 id="two-cooling-title">AC &amp; Cooling<br />Services</h2>
          <p>Whether you need a quick repair or a new system, we keep your home cool and comfortable throughout the hottest days in Kerrville.</p>
          <ExternalLink href={links.acRepair} className="text-link">Learn More <Arrow /></ExternalLink>
        </Reveal>
      </section>

      <section className="two-heating" id="heating" aria-labelledby="two-heating-title">
        <div className="two-heating-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/furnace-attic-hd.jpg" alt="A Kerr County technician servicing a furnace in an attic" width="2280" height="1000" loading="lazy" />
        </div>
        <Reveal className="wrap two-heating-copy">
          <p className="eyebrow">Stay Warm All Season</p>
          <h2 id="two-heating-title">Heating Services</h2>
          <p>From furnace repairs to full system installations, we make sure your home stays warm and efficient when it matters most.</p>
          <ExternalLink href={links.furnaceRepair} className="text-link">Learn More <Arrow /></ExternalLink>
        </Reveal>
      </section>

      <section className="two-directory" id="directory" aria-labelledby="two-directory-title">
        <div className="wrap two-directory-grid">
          <Reveal className="two-directory-intro">
            <p className="eyebrow">Our Capabilities</p>
            <h2 id="two-directory-title">Complete HVAC<br />Service Directory</h2>
            <p>From repairs to installations, we handle all your heating and cooling needs with expert care.</p>
            <ExternalLink href={business.url} className="btn btn-small btn-caps">View All Services <Arrow /></ExternalLink>
          </Reveal>
          <Reveal className="two-directory-list" delay={100}>
            {siteContent.services.map((service, index) => <details key={service.id}>
              <summary><span className="two-dir-num">0{index + 1}</span><span>{service.title}</span><Icon name="plus" size={15} className="faq-plus" /></summary>
              <p>{service.summary} <ExternalLink href={service.href} className="two-dir-link">Details <Arrow /></ExternalLink></p>
            </details>)}
          </Reveal>
        </div>
      </section>

      <section className="two-process" id="process" aria-labelledby="two-process-title">
        <div className="wrap">
          <Reveal className="two-process-head">
            <div><p className="eyebrow">Our Process</p><h2 id="two-process-title">Simple steps. Lasting comfort.</h2></div>
            <p>We make it easy to get the service you need,<br className="desktop-break" /> with a process designed around you.</p>
          </Reveal>
          <ol className="two-steps">{steps.map((step, index) => <Reveal as="li" key={step.title} delay={index * 90}><span className="two-step-num">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}</ol>
        </div>
      </section>

      <section className="two-reputation" id="reputation" aria-labelledby="two-reviews-title">
        <div className="two-reviews">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/team-wide.webp" alt="" width="1920" height="800" loading="lazy" />
          <Reveal className="two-reviews-copy">
            <p className="eyebrow">Our Reputation</p>
            <h2 id="two-reviews-title">{business.googleReviews} Google Reviews</h2>
            <Stars />
            <p>Our customers trust us for honest service, quality workmanship, and dependable comfort.</p>
            <ExternalLink href={links.reviews} className="btn btn-small btn-caps">Read Reviews <Arrow /></ExternalLink>
          </Reveal>
        </div>
        <div className="two-awards">
          <Reveal className="two-award"><AwardBadge year="2024" /><p><strong>Best Heating &amp; Cooling</strong><span>Company 2024</span></p></Reveal>
          <Reveal className="two-award" delay={100}><AwardBadge year="2025" /><p><strong>One of the Best</strong><span>2025</span></p></Reveal>
        </div>
      </section>

      <section className="two-faq" aria-labelledby="two-faq-title">
        <div className="wrap two-faq-grid">
          <Reveal className="two-faq-intro">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 id="two-faq-title">HVAC FAQ</h2>
            <p>Get answers to the most common questions<br className="desktop-break" /> about our heating and cooling services.</p>
            <ExternalLink href={links.faq} className="text-link">View All FAQs <Arrow /></ExternalLink>
          </Reveal>
          <Reveal delay={100}><FaqList ids={["areas", "service-often", "brands", "emergency"]} /></Reveal>
        </div>
      </section>

      <section className="two-cta" id="contact" aria-labelledby="two-cta-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/shop-dusk.jpg" alt="" width="1920" height="1114" loading="lazy" />
        <div className="wrap two-cta-grid">
          <Reveal className="two-cta-copy">
            <p className="eyebrow">Get In Touch</p>
            <h2 id="two-cta-title">Ready for Reliable Comfort?</h2>
            <p>Contact us today to schedule service or ask a question.<br className="desktop-break" /> We’re here to help.</p>
          </Reveal>
          <ul className="two-cta-list">
            <li><span className="two-cta-icon"><Icon name="phone" size={16} /></span><span><a href={business.phoneHref}><strong>{business.phone}</strong></a><small>Call or text us today</small></span></li>
            <li><span className="two-cta-icon"><Icon name="pin" size={16} /></span><span><ExternalLink href={business.address.mapUrl}><strong>Kerrville, TX</strong></ExternalLink><small>{business.address.street} · Proudly serving Kerrville and surrounding areas</small></span></li>
            <li><span className="two-cta-icon"><Icon name="clock" size={16} /></span><span><strong>Hours</strong><small>Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 12:00 PM · {business.emergency}</small></span></li>
          </ul>
          <ScheduleButton className="btn-caps two-cta-btn" />
        </div>
      </section>

      <section className="two-areas" id="service-areas" aria-labelledby="two-areas-title">
        <div className="wrap two-areas-inner">
          <h2 id="two-areas-title"><Icon name="pin" size={18} />Service Areas</h2>
          <ul>{siteContent.serviceAreas.map(area => <li key={area}>{area}</li>)}</ul>
        </div>
      </section>
    </main>
    <SiteFooter variant="two" nav={nav} />
  </div>;
}
