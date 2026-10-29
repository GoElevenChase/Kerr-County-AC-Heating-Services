"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { siteContent, type LinkItem } from "@/content/site";
import { siteSettings } from "@/lib/site-settings";

type Variant = "one" | "two";
const { business } = siteContent;

export function Arrow({ className = "", direction = "right" }: { className?: string; direction?: "right" | "up" }) {
  return <svg className={`arrow-icon ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={direction === "up" ? { transform: "rotate(-45deg)" } : undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const paths: Record<string, ReactNode> = {
  phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="currentColor" stroke="none" />,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" fill="currentColor" stroke="none" /><circle cx="12" cy="9.5" r="2.6" fill="#fff" stroke="none" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></>,
  warning: <><path d="M12 3.5 2.5 20h19z" /><path d="M12 10v4.5M12 17.2v.1" /></>,
  shield: <><path d="M12 3 5 6v5.5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6z" /><path d="m8.8 12.2 2.2 2.2 4.4-4.6" /></>,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  family: <><circle cx="7" cy="5" r="2.2" /><circle cx="17" cy="5" r="2.2" /><circle cx="12" cy="9.6" r="1.7" /><path d="M4.2 21v-6.5H3.4V10a2.3 2.3 0 0 1 2.3-2.3h2.6A2.3 2.3 0 0 1 10.6 10M19.8 21v-6.5h.8V10a2.3 2.3 0 0 0-2.3-2.3h-2.6A2.3 2.3 0 0 0 13.4 10M9.6 21v-4.5h-.8v-2.8a1.6 1.6 0 0 1 1.6-1.6h3.2a1.6 1.6 0 0 1 1.6 1.6v2.8h-.8V21M7 14.5V21M17 14.5V21" /></>,
  trophy: <><path d="M7.5 4h9v5.5a4.5 4.5 0 0 1-9 0z" /><path d="M7.5 6H4.5v1.5a3 3 0 0 0 3 3M16.5 6h3v1.5a3 3 0 0 1-3 3M12 14v3.5M8.5 20.5h7M9.5 17.5h5v3h-5z" /></>,
  award: <><circle cx="12" cy="9" r="5.8" /><circle cx="12" cy="9" r="3.4" /><path d="m8.3 13.6-2 7 3.2-1.4 1.6 2.6 1-4.6M15.7 13.6l2 7-3.2-1.4-1.6 2.6-1-4.6" /></>,
  snowflake: <><path d="M12 2.5v19M3.8 7.25l16.4 9.5M3.8 16.75l16.4-9.5" /><path d="m9.5 4 2.5 2 2.5-2M9.5 20l2.5-2 2.5 2M4.3 10.6l3.1-.5-1.1-3M19.7 13.4l-3.1.5 1.1 3M4.3 13.4l3.1.5-1.1 3M19.7 10.6l-3.1-.5 1.1-3" /></>,
  flame: <path d="M12 21.5c-3.9 0-6.5-2.6-6.5-6.2 0-3.9 3.3-6.2 4-10.8 2.8 1.8 4.4 4.6 4.4 7.2 1-.6 1.7-1.8 1.9-3 1.6 1.7 2.7 4 2.7 6.6 0 3.6-2.6 6.2-6.5 6.2zm0 0c-1.7 0-2.8-1.2-2.8-2.8 0-1.8 1.6-2.7 2.1-4.6 1.9 1.1 3.5 2.6 3.5 4.6 0 1.6-1.1 2.8-2.8 2.8z" />,
  wind: <path d="M3 8.5h10.5a2.7 2.7 0 1 0-2.7-2.7M3 12.5h15.5a2.7 2.7 0 1 1-2.7 2.7M3 16.5h7.5a2.4 2.4 0 1 1-2.4 2.4" />,
  minisplit: <><rect x="2.5" y="6" width="19" height="9" rx="2" /><path d="M5.5 12h13M8 18.5v1M12 18.5v1.5M16 18.5v1" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  grid: <><rect x="4" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  facebook: <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" fill="currentColor" stroke="none" />,
  google: <path d="M20.6 12.2c0-.6-.05-1.2-.16-1.8H12v3.4h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.5zM12 21c2.4 0 4.5-.8 5.9-2.2l-2.9-2.2c-.8.5-1.8.9-3 .9-2.3 0-4.3-1.6-5-3.7H4v2.3A9 9 0 0 0 12 21zm-5-7.3a5.4 5.4 0 0 1 0-3.4V8H4a9 9 0 0 0 0 8zM12 6.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 4 8l3 2.3c.7-2.1 2.7-3.7 5-3.7z" fill="currentColor" stroke="none" />,
  yelp: <path d="M10.6 3.1c.3-.1 2.6.6 3 1 .3.2.3.5.3.8l-.4 7.4c-.1.9-1.2 1.2-1.7.4L8.2 6.6c-.3-.5-.1-1 .3-1.3.6-.5 1.4-1.8 2.1-2.2zM19 13.6c.2.4.1 2.6-.3 3-.2.2-.5.3-.8.2l-3.6-1.2c-.8-.3-.8-1.4 0-1.8l3.5-1.5c.4-.2.9 0 1.2.3zM15.2 17.6l2.3 3c.3.4.2.9-.2 1.1-.6.3-2.4.9-3.1.8-.4 0-.7-.3-.7-.7l-.1-3.7c0-.9 1.1-1.3 1.8-.5zM5.4 12.2l3.6 1.2c.8.3.8 1.5 0 1.8l-3.5 1.3c-.5.2-1-.1-1.1-.6-.2-.8-.2-2.6.1-3.2.2-.4.5-.6.9-.5zM9 17.4l-2.4 2.9c-.3.4-.9.4-1.2.1-.5-.5-1.4-1.9-1.4-2.6 0-.3.2-.6.6-.8l3.4-1.4c.8-.4 1.6.5 1 1.8z" fill="currentColor" stroke="none" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" fill="currentColor" stroke="none" />,
};

export function Icon({ name, size = 22, className = "" }: { name: keyof typeof paths | string; size?: number; className?: string }) {
  return <svg className={`ui-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function Stars({ className = "" }: { className?: string }) {
  return <span className={`stars ${className}`} role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" size={14} />)}</span>;
}

/** The client's actual logo artwork. On dark surfaces it sits on a light plate for contrast. */
export function Logo({ plate = false, className = "" }: { plate?: boolean; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <span className={`logo ${plate ? "logo-plate" : ""} ${className}`}><img src="/images/kerr-county-logo.png" alt={business.name} width="1028" height="208" /></span>;
}

export function ExternalLink({ href, className, children, label }: { href: string; className?: string; children: ReactNode; label?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a>;
}

export function ScheduleButton({ className = "", children = "Schedule Service", arrow = true }: { className?: string; children?: ReactNode; arrow?: boolean }) {
  return <ExternalLink href={business.bookingUrl} className={`btn ${className}`}>{children}{arrow && <Arrow />}</ExternalLink>;
}

export interface NavItem { readonly label: string; readonly href: string; readonly services?: boolean }

export function SiteHeader({ variant, nav }: { variant: Variant; nav: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const close = () => setOpen(false);
  return <header className={`site-header header-${variant} ${scrolled ? "is-scrolled" : ""}`}>
    <div className="wrap header-inner">
      <a className="brand-link" href="#top" aria-label={`${business.name}, back to top`}><Logo /></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((item, index) => item.services
          ? <div key={item.label} className="nav-dropdown"><a href={item.href} className={index === 0 ? "is-current" : undefined}>{item.label}<Icon name="chevron" size={13} /></a><div className="nav-menu">{siteContent.services.map(service => <ExternalLink key={service.id} href={service.href}>{service.title}</ExternalLink>)}</div></div>
          : <a key={item.label} href={item.href} className={index === 0 ? "is-current" : undefined} aria-current={index === 0 ? "location" : undefined}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={business.phoneHref}><Icon name="phone" size={17} /><span>{business.phone}</span></a>
        <ScheduleButton className="header-book" arrow={false} />
        <button ref={trigger} type="button" className="mobile-toggle" aria-expanded={open} aria-controls={`mobile-navigation-${variant}`} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={22} /></button>
      </div>
    </div>
    {open && <div id={`mobile-navigation-${variant}`} ref={panel} className="mobile-navigation"><nav aria-label="Mobile navigation">{nav.map(item => <a key={item.label} href={item.href} onClick={close}>{item.label}<Arrow /></a>)}</nav><div className="mobile-actions"><a className="btn btn-outline" href={business.phoneHref}><Icon name="phone" size={16} /> Call {business.phone}</a><ScheduleButton /></div></div>}
  </header>;
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "li" }) {
  const el = useRef<HTMLDivElement & HTMLLIElement>(null);
  useEffect(() => {
    const node = el.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    // Content starts visible in the HTML. Only animate elements below the first fold.
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.dataset.reveal = "waiting";
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { node.dataset.reveal = "visible"; observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={el} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>{children}</Tag>;
}

/** Muted background loop with a visible pause control; reduced-motion visitors see the poster frame. */
export function HeroVideo({ src, poster, className = "" }: { src: string; poster: string; className?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const node = video.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.play().then(() => setPlaying(true), () => setPlaying(false));
  }, []);
  function toggle() {
    const node = video.current;
    if (!node) return;
    if (node.paused) node.play().then(() => setPlaying(true), () => undefined);
    else { node.pause(); setPlaying(false); }
  }
  return <div className={`hero-video ${className}`} style={{ backgroundImage: `url(${poster})` }}>
    <video ref={video} className={playing ? "is-playing" : undefined} src={src} poster={poster} muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
    <button type="button" className="video-toggle" onClick={toggle} aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" /></svg> : <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>}</button>
  </div>;
}

export function FaqList({ ids, className = "" }: { ids: readonly string[]; className?: string }) {
  const items = ids.map(id => siteContent.faqs.find(faq => faq.id === id)).filter(faq => faq !== undefined);
  return <div className={`faq-list ${className}`}>{items.map(faq => <details key={faq.id}><summary><span>{faq.question}</span><Icon name="plus" size={16} className="faq-plus" /></summary><p>{faq.answer}</p></details>)}</div>;
}

function FooterColumn({ title, links }: { title: string; links: readonly LinkItem[] }) {
  return <div className="footer-column"><h2>{title}</h2><ul>{links.map(link => <li key={link.label}><ExternalLink href={link.href}>{link.label}</ExternalLink></li>)}</ul></div>;
}

/** Footer content mirrors kerrcountyac.com: quick links, service areas, contact, and community. */
export function SiteFooter({ variant, nav }: { variant: Variant; nav: readonly NavItem[] }) {
  const { footer } = siteContent;
  const year = new Date().getFullYear();
  return <footer className={`site-footer footer-${variant}`}>
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-brand"><a href="#top" aria-label="Back to top"><Logo plate /></a>{variant === "two" && <span className="footer-sub">Family Owned · Kerrville TX</span>}</div>
        <nav className="footer-nav" aria-label="Footer navigation">{nav.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
        <div className="footer-actions">
          <a className="footer-phone" href={business.phoneHref}><Icon name="phone" size={17} />{business.phone}</a>
          {variant === "one"
            ? <><span className="footer-rule" aria-hidden="true" /><div className="footer-social">{footer.social.slice(0, 2).map(item => <ExternalLink key={item.label} href={item.href} label={`${business.shortName} on ${item.label}`}><Icon name={item.label.toLowerCase()} size={20} /></ExternalLink>)}</div></>
            : <ScheduleButton className="footer-book" arrow={false} />}
        </div>
      </div>
      <div className="footer-main">
        <FooterColumn title="Quick Links" links={footer.quickLinks} />
        <div className="footer-column"><h2>Service Areas</h2><ul>{footer.serviceAreaLinks.map(link => <li key={link.label}><ExternalLink href={link.href}>{link.label}</ExternalLink></li>)}<li><ExternalLink href={siteContent.links.serviceArea} className="footer-more">See Complete Service Area <Arrow /></ExternalLink></li></ul></div>
        <div className="footer-column footer-contact"><h2>Contact Us</h2>
          <p className="footer-name">{business.name}</p>
          <p><span>Phone:</span> <a href={business.phoneHref}>(830) 988-4710</a></p>
          <p><span>Address:</span> <ExternalLink href={business.address.mapUrl}>{business.address.street}, {business.address.locality}</ExternalLink></p>
          <p className="footer-hours-title">Hours of Operation</p>
          <ul className="footer-hours">{business.hours.map(row => <li key={row.days}><span>{row.days}:</span> {row.time}</li>)}</ul>
          <p className="footer-emergency"><Icon name="warning" size={16} />{business.emergency}</p>
        </div>
        <div className="footer-column footer-connect"><h2>Connect With Us</h2>
          <div className="footer-social is-large">{footer.social.map(item => <ExternalLink key={item.label} href={item.href} label={item.label === "Google" ? "Review us on Google" : `${business.shortName} on ${item.label}`}><Icon name={item.label.toLowerCase()} size={20} /></ExternalLink>)}</div>
          <div className="footer-chambers">{footer.chambers.map(chamber => {
            // eslint-disable-next-line @next/next/no-img-element
            const image = <img src={chamber.image} alt={chamber.name} width={chamber.width} height={chamber.height} loading="lazy" />;
            return chamber.href ? <ExternalLink key={chamber.name} href={chamber.href}>{image}</ExternalLink> : <span key={chamber.name}>{image}</span>;
          })}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright © {footer.since}–{year} {business.name}. All rights reserved.</span>
        <span className="footer-legal">{footer.legal.map(link => <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>)}</span>
        <span className="footer-tagline">Family taking care of families.</span>
      </div>
    </div>
  </footer>;
}

/** Subtle pointer tilt for the chooser cards; skipped for touch and reduced motion. */
export function TiltEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const cleanups = cards.map(card => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--tx", String((event.clientX - rect.left) / rect.width - 0.5));
        card.style.setProperty("--ty", String((event.clientY - rect.top) / rect.height - 0.5));
      };
      const leave = () => { card.style.setProperty("--tx", "0"); card.style.setProperty("--ty", "0"); };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
  return null;
}

const designNames = { "design-1": "The Neighborhood Standard", "design-2": "Comfort, Handled" } as const;

export function DesignSwitcher({ active }: { active: "design-1" | "design-2" }) {
  if (siteSettings.isProduction) return null;
  return <nav className="design-switcher" aria-label="Design review navigation"><div className="switcher-inner">
    <Link className="switcher-all" href="/"><Icon name="grid" size={18} /><span>All designs</span></Link>
    <span className="switcher-rule" aria-hidden="true" />
    {(["design-1", "design-2"] as const).map((id, index) => <Link key={id} href={`/${id}/`} aria-current={active === id ? "page" : undefined} aria-label={`${active === id ? "" : "View "}Design ${index + 1}: ${designNames[id]}`}><b>{index + 1}</b><span className="switcher-name">{designNames[id]}</span></Link>)}
  </div></nav>;
}
