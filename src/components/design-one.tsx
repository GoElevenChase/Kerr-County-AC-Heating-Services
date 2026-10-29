import { siteContent } from "@/content/site";
import { Arrow, ExternalLink, FaqList, Icon, Reveal, ScheduleButton, SiteFooter, SiteHeader, Stars, type NavItem } from "@/components/shared";

const { business, vip, links } = siteContent;
const service = (id: string) => siteContent.services.find(item => item.id === id)!.href;

const nav: readonly NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", services: true },
  { label: "Maintenance Plan", href: "#vip" },
  { label: "Reviews", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

const serviceList = [
  { label: "AC Repair", href: service("ac-repair") },
  { label: "AC Installation", href: service("ac-installation") },
  { label: "Furnace Repair & Installation", href: service("furnace-repair") },
  { label: "Heat Pump Repair & Installation", href: service("heat-pump") },
  { label: "Mini-Split Installation & Repair", href: service("mini-split") },
  { label: "HVAC & Indoor Air Quality Solutions (including UV light)", href: service("air-quality") },
];

const trust = [
  { icon: "family", title: <>Family Owned<br />&amp; Operated</> },
  { icon: "shield", title: <>Unmatched<br />Warranty</> },
  { icon: "trophy", title: <>Award-Winning<br />Service</> },
  { icon: "google", title: <>{business.googleReviews} Google<br />Reviews</>, stars: true, href: links.reviews },
  { icon: "award", title: <>Best Heating &amp; Cooling<br />Company 2024</>, note: "& One of the Best 2025" },
];

export function DesignOne() {
  return <div className="design-one" id="top">
    <SiteHeader variant="one" nav={nav} />
    <main id="main-content">
      <section className="one-hero" aria-labelledby="one-hero-title">
        <div className="one-hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/frame-tech-outdoor-unit-hd.jpg" alt="A Kerr County A/C & Heating technician kneeling beside an outdoor condenser and mini-split unit" width="1920" height="1080" fetchPriority="high" />
        </div>
        <div className="wrap one-hero-inner">
          <div className="one-hero-copy">
            <p className="eyebrow">Family Owned <span aria-hidden="true">/</span> Kerrville, TX</p>
            <h1 id="one-hero-title">Kerrville’s Trusted Family AC Repair Service</h1>
            <p className="one-hero-lead">Family taking care of families.</p>
            <p className="one-hero-text">We provide reliable HVAC services for your home and business, including AC repair, installation, furnace repair, heat pump services, mini-split systems, and indoor-air-quality solutions (including UV light).</p>
            <div className="one-hero-actions"><ScheduleButton /><a className="phone-link" href={business.phoneHref}><Icon name="phone" size={17} />{business.phone}</a></div>
          </div>
        </div>
      </section>

      <section className="one-services" id="services" aria-labelledby="one-services-title">
        <div className="wrap one-services-grid">
          <Reveal className="one-services-main">
            <p className="eyebrow">Our Services</p>
            <h2 id="one-services-title">Complete HVAC Solutions<br />for Your Home</h2>
            <ol className="one-service-list">{serviceList.map((item, index) => <li key={item.label}><ExternalLink href={item.href}><span className="one-num">0{index + 1}</span><span>{item.label}</span></ExternalLink></li>)}</ol>
          </Reveal>
          <Reveal className="one-vip" delay={120}>
            <div id="vip" className="one-vip-card">
              <Icon name="shield" size={40} className="one-vip-icon" />
              <div>
                <h2>VIP Maintenance Programs</h2>
                <ul>{vip.benefits.map(item => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul>
                <ExternalLink href={vip.href} className="btn btn-light btn-small">Learn More <Arrow /></ExternalLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="one-trust" id="trust" aria-label="Why families choose Kerr County A/C & Heating">
        <ul className="wrap one-trust-list">{trust.map((item, index) => {
          const body = <><Icon name={item.icon} size={36} className="one-trust-icon" /><span className="one-trust-text"><strong>{item.title}</strong>{item.stars && <Stars />}{item.note && <small>{item.note}</small>}</span></>;
          return <Reveal as="li" key={index} delay={index * 70}>{item.href ? <ExternalLink href={item.href}>{body}</ExternalLink> : <div>{body}</div>}</Reveal>;
        })}</ul>
      </section>

      <section className="one-feature" aria-labelledby="one-feature-title">
        <div className="one-feature-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/condenser-mini-split-hd.jpg" alt="An outdoor condenser beside a ductless mini-split unit installed by Kerr County A/C & Heating" width="2280" height="1000" loading="lazy" />
        </div>
        <Reveal className="one-feature-copy">
          <p className="eyebrow">Featured Service</p>
          <h2 id="one-feature-title">Mini-Split Systems</h2>
          <p className="one-feature-lead">Efficient comfort. Flexible installation.</p>
          <p>Mini-split systems are a great solution for homes, additions, garages, and spaces without existing ductwork. We provide expert installation and repair for reliable, efficient comfort year-round.</p>
          <ExternalLink href={links.miniSplit} className="text-link">Learn More <Arrow /></ExternalLink>
        </Reveal>
      </section>

      <section className="one-about" id="about" aria-labelledby="one-about-title">
        <Reveal className="one-about-copy">
          <p className="eyebrow">About Kerr County A/C &amp; Heating</p>
          <h2 id="one-about-title">More Than HVAC —<br />We’re Your Neighbors</h2>
          <p>As a family-owned and operated business, we’re committed to providing honest recommendations, quality work, and dependable service. We treat every customer like family because this community is our home too.</p>
          <ExternalLink href={links.about} className="btn btn-small">Our Story <Arrow /></ExternalLink>
        </Reveal>
        <div className="one-about-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/team-shop.jpg" alt="The Kerr County A/C & Heating team standing together in front of their shop" width="1920" height="1440" loading="lazy" />
        </div>
      </section>

      <section className="one-help" id="contact" aria-label="Questions and contact">
        <div className="wrap one-help-grid">
          <Reveal className="one-faq">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>Quick Answers to Common Questions</h2>
            <FaqList ids={["service-often", "brands", "emergency", "vip"]} />
          </Reveal>
          <Reveal className="one-contact" delay={100}>
            <p className="eyebrow">Get In Touch</p>
            <h2>We’re Here to Help</h2>
            <p className="one-contact-intro">Call us, schedule online, or stop by our office. We’re ready to keep your home comfortable, no matter the season.</p>
            <ul className="one-contact-list">
              <li><Icon name="phone" size={18} /><a href={business.phoneHref}>{business.phone}</a></li>
              <li><Icon name="pin" size={18} /><ExternalLink href={business.address.mapUrl}>{business.address.street}<br />{business.address.locality}</ExternalLink></li>
              <li><Icon name="clock" size={18} /><span>{business.hours.map(row => <span key={row.days} className="line">{row.days} {row.time}</span>)}</span></li>
              <li><Icon name="warning" size={18} /><strong>{business.emergency}</strong></li>
            </ul>
          </Reveal>
          <div className="one-help-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/service-van-hd.jpg" alt="A Kerr County A/C & Heating service van parked on a Hill Country road" width="2200" height="1000" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
    <SiteFooter variant="one" nav={nav} />
  </div>;
}
