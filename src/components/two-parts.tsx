"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";
import { Arrow, ExternalLink, Icon, Logo, ScheduleButton, type NavItem } from "@/components/shared";

const { business, links, vip } = siteContent;

export function TwoHeader({ nav }: { nav: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Scroll-spy: the dot rail marks whichever section currently crosses the middle of the viewport.
  useEffect(() => {
    const targets = nav.map(item => document.querySelector<HTMLElement>(item.href)).filter((node): node is HTMLElement => node !== null);
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [nav]);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);
  return <>
    <header className={`d2-header ${solid || open ? "is-solid" : ""}`}>
      <a className="d2-brand" href="#top" aria-label={`${business.name}, back to top`}><Logo plate /></a>
      <div className="d2-header-actions">
        <a className="d2-call" href={business.phoneHref}><Icon name="phone" size={16} /><span>{business.phone}</span></a>
        <ScheduleButton className="d2-book" arrow={false}>Schedule</ScheduleButton>
        <button ref={trigger} type="button" className="d2-burger" aria-expanded={open} aria-controls="d2-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={22} /></button>
      </div>
      {open && <div id="d2-menu" ref={panel} className="d2-menu">
        <nav aria-label="Mobile navigation">{nav.map((item, index) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}><small>{String(index + 1).padStart(2, "0")}</small>{item.label}<Arrow /></a>)}</nav>
        <a className="d2-menu-call" href={business.phoneHref}><Icon name="phone" size={18} />Call or text {business.phone}</a>
      </div>}
    </header>
    <nav className="d2-rail" aria-label="Page sections">{nav.map(item => <a key={item.label} href={item.href} aria-current={active === item.href ? "true" : undefined}><span>{item.label}</span><i aria-hidden="true" /></a>)}</nav>
  </>;
}

const dial = { min: 55, max: 105, start: 72 };

/** A working thermostat: the reading picks the service that matters at that temperature. */
export function Thermostat() {
  const [temp, setTemp] = useState(dial.start);
  const pct = ((temp - dial.min) / (dial.max - dial.min)) * 100;
  const mode = temp <= 66 ? "cold" : temp >= 80 ? "hot" : "mild";
  const copy = {
    cold: { label: "Cold snap", text: "Heat checks are best before the first freeze, in October to early November. Furnaces, heat pumps and mini-splits, serviced.", href: links.furnaceRepair, action: "Furnace repair" },
    mild: { label: "Right where you want it", text: "Two maintenance visits a year, scheduled for you, help keep a home here when the weather doesn’t.", href: vip.href, action: "VIP Maintenance Program" },
    hot: { label: "Heat wave", text: "AC not keeping up? Emergency service is available. Call or text and we’ll talk it through.", href: links.acRepair, action: "AC repair" },
  }[mode];
  return <div className="d2-thermo" data-mode={mode} style={{ "--mix": `${pct}%` } as React.CSSProperties}>
    <div className="d2-dial">
      <svg viewBox="10 15 280 235" aria-hidden="true">
        <path className="d2-dial-track" d="M65.15 234.85A120 120 0 1 1 234.85 234.85" pathLength="100" />
        <path className="d2-dial-value" d="M65.15 234.85A120 120 0 1 1 234.85 234.85" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - pct} />
      </svg>
      <output className="d2-reading" htmlFor="d2-temp" aria-live="polite"><b>{temp}<sup>°F</sup></b><small>{copy.label}</small></output>
    </div>
    <label className="d2-slider" htmlFor="d2-temp"><span>Set the room</span>
      <input id="d2-temp" type="range" min={dial.min} max={dial.max} step={1} value={temp} onChange={event => setTemp(Number(event.target.value))} aria-valuetext={`${temp} degrees Fahrenheit, ${copy.label}`} />
      <span className="d2-slider-ends" aria-hidden="true"><i>{dial.min}°</i><i>{dial.max}°</i></span>
    </label>
    <p className="d2-thermo-text">{copy.text}</p>
    <ExternalLink href={copy.href} className="d2-thermo-link">{copy.action} <Arrow /></ExternalLink>
  </div>;
}

export interface SystemItem { readonly id: string; readonly title: string; readonly summary: string; readonly href: string; readonly image: string; readonly alt: string }

/** Service selector: a list of systems on the left and a working display on the right. */
export function SystemSelector({ items }: { items: readonly SystemItem[] }) {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = items[index];
  function onKey(event: React.KeyboardEvent, i: number) {
    const next = event.key === "ArrowDown" ? (i + 1) % items.length : event.key === "ArrowUp" ? (i - 1 + items.length) % items.length : -1;
    if (next < 0) return;
    event.preventDefault();
    setIndex(next);
    refs.current[next]?.focus();
  }
  return <div className="d2-systems">
    <div className="d2-tabs" role="tablist" aria-label="HVAC services" aria-orientation="vertical">
      {items.map((item, i) => <button key={item.id} ref={node => { refs.current[i] = node; }} type="button" role="tab" id={`d2-tab-${item.id}`} aria-selected={i === index} aria-controls="d2-panel" tabIndex={i === index ? 0 : -1} onClick={() => setIndex(i)} onKeyDown={event => onKey(event, i)}>
        <small>S-{String(i + 1).padStart(2, "0")}</small><span>{item.title}</span><Arrow />
      </button>)}
    </div>
    <div className="d2-display" role="tabpanel" id="d2-panel" aria-labelledby={`d2-tab-${current.id}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img key={current.image + current.id} src={current.image} alt={current.alt} width="1600" height="900" loading="lazy" />
      <div className="d2-display-copy">
        <p className="d2-code">S-{String(index + 1).padStart(2, "0")} / {items.length.toString().padStart(2, "0")}</p>
        <h3>{current.title}</h3>
        <p>{current.summary}</p>
        <ExternalLink href={current.href} className="d2-thermo-link">Service details <Arrow /></ExternalLink>
      </div>
    </div>
  </div>;
}

/** Counts up once when scrolled into view. The final value is always in the markup. */
export function CountUp({ value }: { value: number }) {
  const node = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = node.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        el.textContent = String(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={node}>{value}</span>;
}
