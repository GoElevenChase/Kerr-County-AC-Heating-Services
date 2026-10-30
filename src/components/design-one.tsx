import { siteContent } from "@/content/site";
import { Arrow, ExternalLink, Icon, Logo, Reveal, ScheduleButton, Stars, type NavItem } from "@/components/shared";
import { OpenStatus, OneHeader } from "@/components/one-parts";

const { business, vip, links, footer } = siteContent;
const service = (id: string) => siteContent.services.find(item => item.id === id)!;

const nav: readonly NavItem[] = [
  { label: "The Year", href: "#year" },
  { label: "Services", href: "#services" },
  { label: "Maintenance Plan", href: "#vip" },
  { label: "Our Crew", href: "#crew" },
  { label: "Service Area", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Seasonal timing comes straight from the business's FAQ: reminders in March, A/C checks in April, heat checks October to early November. */
const calendar = [
  { id: "remind", start: 3, span: 1, label: "Reminder", title: "March", text: "We send reminders to schedule your spring A/C check." },
  { id: "cool", start: 4, span: 1, label: "A/C check", title: "April", text: "Your cooling system, checked before the Texas summer heat arrives." },
  { id: "heat", start: 10, span: 2, label: "Heat check", title: "October – early November", text: "Your heating system, checked before the first freeze." },
] as const;

const groups = [
  { name: "Cooling", note: "For the long Hill Country summer", ids: ["ac-repair", "ac-installation"] },
  { name: "Heating", note: "For the nights that surprise you", ids: ["furnace-repair", "furnace-installation", "heat-pump"] },
  { name: "Ductless & air", note: "For rooms and the air in them", ids: ["mini-split", "air-quality"] },
] as const;

const stats = [
  { big: business.googleReviews, label: "Google reviews", href: links.reviews },
  { big: String(footer.since), label: "In business since" },
  { big: "2024", label: business.awards[0] },
  { big: "2025", label: business.awards[1] },
] as const;

const areaSizes = ["xl", "m", "l", "s", "l", "m", "xl", "s", "m", "l", "s", "m"] as const;

export function DesignOne() {
  const vipService = service("vip");
  return <div className="design-one" id="top">
    <OneHeader nav={nav} />
    <main id="main-content">
      {/* HERO — oversized type that the photograph slides underneath */}
      <section className="d1-hero" aria-labelledby="d1-hero-title">
        <div className="d1-hero-grid">
          <div className="d1-hero-type">
            <p className="d1-kicker"><span>Vol. 1</span>{business.tagline}</p>
            <h1 id="d1-hero-title">
              <span className="d1-line"><span>Cool in</span></span>
              <span className="d1-line"><span>July<em>.</em></span></span>
              <span className="d1-line is-warm"><span>Warm in</span></span>
              <span className="d1-line is-warm"><span>January<em>.</em></span></span>
            </h1>
          </div>
          <figure className="d1-hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/frame-tech-outdoor-unit-hd.jpg" alt="A Kerr County A/C & Heating technician kneeling beside an outdoor condenser and mini-split unit" width="1920" height="1080" fetchPriority="high" />
            <figcaption>Field note 01 — outdoor unit service, Kerr County</figcaption>
          </figure>
          <svg className="d1-stamp" viewBox="0 0 200 200" aria-hidden="true">
            <defs><path id="d1-circle" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" /></defs>
            <circle cx="100" cy="100" r="96" fill="currentColor" />
            <text><textPath href="#d1-circle" startOffset="0">FAMILY OWNED · KERRVILLE, TEXAS · FAMILY OWNED · KERRVILLE, TEXAS ·</textPath></text>
            <path d="M100 66v68M70.5 83l59 34M70.5 117l59-34" stroke="#f4efe3" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <div className="d1-hero-copy">
            <p className="d1-lede">Family taking care of families. AC repair and installation, furnaces, heat pumps, mini-splits, and cleaner indoor air, handled by a family-owned crew in Kerrville.</p>
            <div className="d1-hero-actions"><ScheduleButton className="d1-cta">Schedule service</ScheduleButton><a className="d1-callout" href={business.phoneHref}><small>Call or text</small><strong>{business.phone}</strong></a></div>
          </div>
        </div>
      </section>

      {/* THE YEAR — a ruler of the twelve months with the two checkups marked */}
      <section className="d1-year" id="year" aria-labelledby="d1-year-title">
        <div className="d1-wrap">
          <Reveal className="d1-section-head">
            <p className="d1-kicker"><span>01</span>The Kerrville year</p>
            <h2 id="d1-year-title">Two checkups. One comfortable year.</h2>
            <p>A spring cooling check and a fall heating check put the work in before the weather arrives.</p>
          </Reveal>
          <Reveal className="d1-ruler" delay={80}>
            <div className="d1-ruler-track" role="img" aria-label="A twelve-month calendar: reminders in March, A/C checks in April, and heat checks from October to early November.">
              {months.map((month, index) => <span key={index} className="d1-month" style={{ gridColumn: index + 1 }}><b>{month}</b><small aria-hidden="true">{monthNames[index].slice(0, 3)}</small></span>)}
              {calendar.map(item => <span key={item.id} className={`d1-mark d1-mark-${item.id}`} style={{ gridColumn: `${item.start} / span ${item.span}` }}><i>{item.label}</i></span>)}
            </div>
            <ol className="d1-ruler-notes">{calendar.map(item => <li key={item.id}><span>{item.title}</span><strong>{item.label}</strong><p>{item.text}</p></li>)}</ol>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — an index, not a card grid */}
      <section className="d1-services" id="services" aria-labelledby="d1-services-title">
        <div className="d1-wrap">
          <Reveal className="d1-section-head">
            <p className="d1-kicker"><span>02</span>Services</p>
            <h2 id="d1-services-title">The full index of what we fix, fit, and keep running.</h2>
          </Reveal>
          {groups.map((group, groupIndex) => <div className="d1-group" key={group.name}>
            <Reveal className="d1-group-head"><h3>{group.name}</h3><p>{group.note}</p></Reveal>
            <ul className="d1-rows">{group.ids.map((id, index) => {
              const item = service(id);
              return <Reveal as="li" key={id} delay={index * 60}><ExternalLink href={item.href} className="d1-row">
                <span className="d1-row-num">{String(groupIndex * 3 + index + 1).padStart(2, "0")}</span>
                <span className="d1-row-title">{item.title}</span>
                <span className="d1-row-text">{item.summary}</span>
                <Arrow className="d1-row-arrow" direction="up" />
              </ExternalLink></Reveal>;
            })}</ul>
          </div>)}
        </div>
      </section>

      {/* HEAT — a dark interlude with the attic photograph */}
      <section className="d1-heat" aria-labelledby="d1-heat-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/furnace-attic-hd.jpg" alt="Two Kerr County technicians servicing a furnace in an attic by headlamp and work light" width="2280" height="1000" loading="lazy" />
        <div className="d1-heat-copy">
          <p className="d1-kicker"><span>03</span>Heating</p>
          <h2 id="d1-heat-title">Heat, checked before the first freeze.</h2>
          <p>Flame control, venting, heat exchanger, thermostat, and gas-leak checks keep your furnace safe and steady, from the October tune-up to the cold snap that tests it.</p>
          <ExternalLink href={links.furnaceRepair} className="d1-link">Furnace repair <Arrow /></ExternalLink>
        </div>
      </section>

      {/* VIP — a membership ticket */}
      <section className="d1-vip" id="vip" aria-labelledby="d1-vip-title">
        <div className="d1-vip-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/condenser-wall-hd.jpg" alt="A newly installed outdoor AC condenser against the exterior wall of a home" width="2280" height="1000" loading="lazy" />
        </div>
        <div className="d1-wrap">
          <Reveal className="d1-ticket">
            <div className="d1-ticket-main">
              <p className="d1-kicker"><span>04</span>Maintenance plan</p>
              <h2 id="d1-vip-title">VIP Maintenance Program</h2>
              <p>{vipService.summary}</p>
              <ul className="d1-benefits">{vip.benefits.map(benefit => <li key={benefit}><Icon name="check" size={18} />{benefit}</li>)}</ul>
              <ExternalLink href={vip.href} className="d1-link">See how the program works <Arrow /></ExternalLink>
            </div>
            <div className="d1-ticket-stub">
              <p className="d1-stub-label">Yearly rate</p>
              {vip.pricing.map((line, index) => {
                const [price, rest] = line.split(" - ");
                const [amount, unit] = price.split(" per ");
                return <p key={line} className={index === 0 ? "d1-price is-lead" : "d1-price"}><strong>{amount}</strong><span>per {unit}</span><small>{rest ?? ""}</small></p>;
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREW — the real team photograph beside typographic proof */}
      <section className="d1-crew" id="crew" aria-labelledby="d1-crew-title">
        <div className="d1-wrap d1-crew-grid">
          <Reveal className="d1-crew-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team-shop.jpg" alt="The Kerr County A/C & Heating team standing together in front of their shop and sign" width="1920" height="1440" loading="lazy" />
          </Reveal>
          <div className="d1-crew-copy">
            <Reveal><p className="d1-kicker"><span>05</span>Our crew</p><h2 id="d1-crew-title">A family business, in the neighborhood and on your street.</h2></Reveal>
            <ul className="d1-stats">{stats.map((stat, index) => <Reveal as="li" key={stat.label} delay={index * 70}>
              <strong>{stat.big}</strong>
              <span>{"href" in stat ? <ExternalLink href={stat.href}>{stat.label}<Arrow direction="up" /></ExternalLink> : stat.label}</span>
              {"href" in stat && <Stars />}
            </Reveal>)}</ul>
          </div>
        </div>
      </section>

      {/* AREAS — a typographic map of towns */}
      <section className="d1-areas" id="areas" aria-labelledby="d1-areas-title">
        <div className="d1-wrap">
          <Reveal className="d1-section-head"><p className="d1-kicker"><span>06</span>Service area</p><h2 id="d1-areas-title">From Kerrville out to the county line.</h2></Reveal>
          <ul className="d1-towns">{siteContent.serviceAreas.map((town, index) => <li key={town} data-size={areaSizes[index % areaSizes.length]}>{town}</li>)}</ul>
          <ExternalLink href={links.serviceArea} className="d1-link">Full service area <Arrow /></ExternalLink>
        </div>
      </section>

      {/* FAQ */}
      <section className="d1-faq" aria-labelledby="d1-faq-title">
        <div className="d1-wrap d1-faq-grid">
          <Reveal className="d1-faq-head"><p className="d1-kicker"><span>07</span>Questions</p><h2 id="d1-faq-title">Asked at the front door.</h2><ExternalLink href={links.faq} className="d1-link">All FAQs <Arrow /></ExternalLink></Reveal>
          <Reveal delay={80}><div className="d1-faq-list">{siteContent.faqs.map((faq, index) => <details key={faq.id}>
            <summary><small>{String(index + 1).padStart(2, "0")}</small><span>{faq.question}</span><Icon name="plus" size={18} className="d1-plus" /></summary>
            <p>{faq.answer}</p>
          </details>)}</div></Reveal>
        </div>
      </section>

      {/* CONTACT — the phone number is the design */}
      <section className="d1-contact" id="contact" aria-labelledby="d1-contact-title">
        <div className="d1-wrap">
          <p className="d1-kicker"><span>08</span>Call or text</p>
          <h2 id="d1-contact-title" className="d1-sr">Contact Kerr County A/C &amp; Heating Services</h2>
          <a className="d1-bignumber" href={business.phoneHref} aria-label={`Call ${business.phone}`}>{business.phone}</a>
          <div className="d1-contact-grid">
            <div><h3>Hours</h3><ul>{business.hours.map(row => <li key={row.days}><span>{row.days}</span>{row.time}</li>)}</ul><p className="d1-emergency"><Icon name="warning" size={16} />{business.emergency}</p><OpenStatus className="on-dark" /></div>
            <div><h3>Shop</h3><p><ExternalLink href={business.address.mapUrl}>{business.address.street}<br />{business.address.locality}</ExternalLink></p></div>
            <div><h3>Book online</h3><p>Pick a time that suits you through our Housecall Pro scheduler.</p><ScheduleButton className="d1-cta is-gold">Schedule service</ScheduleButton></div>
          </div>
        </div>
      </section>
    </main>

    <footer className="d1-footer">
      <div className="d1-wrap">
        <div className="d1-footer-top">
          <a href="#top" aria-label="Back to top"><Logo plate /></a>
          <nav aria-label="Footer navigation"><ul>{footer.quickLinks.map(link => <li key={link.label}><ExternalLink href={link.href}>{link.label}</ExternalLink></li>)}</ul></nav>
          <div className="d1-footer-social">{footer.social.map(item => <ExternalLink key={item.label} href={item.href} label={item.label === "Google" ? "Review us on Google" : `${business.shortName} on ${item.label}`}><Icon name={item.label.toLowerCase()} size={20} /></ExternalLink>)}</div>
        </div>
        <div className="d1-chambers">{footer.chambers.map(chamber => {
          // eslint-disable-next-line @next/next/no-img-element
          const image = <img src={chamber.image} alt={chamber.name} width={chamber.width} height={chamber.height} loading="lazy" />;
          return chamber.href ? <ExternalLink key={chamber.name} href={chamber.href}>{image}</ExternalLink> : <span key={chamber.name}>{image}</span>;
        })}</div>
        <div className="d1-footer-bottom">
          <span>Copyright © {footer.since}–{new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span className="d1-legal">{footer.legal.map(link => <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>)}</span>
          <span>Family taking care of families.</span>
        </div>
      </div>
    </footer>
  </div>;
}
