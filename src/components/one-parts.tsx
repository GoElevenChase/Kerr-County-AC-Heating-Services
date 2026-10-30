"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";
import { Arrow, Icon, Logo, ScheduleButton, type NavItem } from "@/components/shared";

const { business } = siteContent;

/** Business hours in Kerrville's time zone: Mon–Fri 8am–5pm, Sat 8am–12pm. */
function isOpenNow(date: Date): boolean {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", weekday: "short", hour: "numeric", hourCycle: "h23" }).formatToParts(date);
  const day = parts.find(part => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find(part => part.type === "hour")?.value ?? "0");
  if (["Mon", "Tue", "Wed", "Thu", "Fri"].includes(day)) return hour >= 8 && hour < 17;
  if (day === "Sat") return hour >= 8 && hour < 12;
  return false;
}

/** Shows the posted hours on the server; adds a live status only after hydration. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => setOpen(isOpenNow(new Date())), []);
  return <span className={`d1-status ${className}`} data-open={open === null ? undefined : String(open)}>
    <i aria-hidden="true" />
    {open === null ? "Mon–Fri 8–5 · Sat 8–12" : open ? "Open now · Mon–Fri 8–5 · Sat 8–12" : "Closed now · Mon–Fri 8–5 · Sat 8–12"}
  </span>;
}

export function OneHeader({ nav }: { nav: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    if (panel.current && header.current) panel.current.style.top = `${header.current.getBoundingClientRect().bottom}px`;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);
  return <header ref={header} className={`d1-header ${stuck ? "is-stuck" : ""}`}>
    <div className="d1-ticker"><span>{business.emergency}</span><OpenStatus /></div>
    <div className="d1-bar">
      <a className="d1-brand" href="#top" aria-label={`${business.name}, back to top`}><Logo /></a>
      <nav className="d1-nav" aria-label="Main navigation">{nav.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      <div className="d1-bar-actions">
        <a className="d1-phone" href={business.phoneHref}><Icon name="phone" size={16} /><span>{business.phone}</span></a>
        <ScheduleButton className="d1-book" arrow={false}>Book a visit</ScheduleButton>
        <button ref={trigger} type="button" className="d1-burger" aria-expanded={open} aria-controls="d1-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={24} /></button>
      </div>
    </div>
    {open && <div id="d1-menu" ref={panel} className="d1-menu">
      <nav aria-label="Mobile navigation">{nav.map((item, index) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}<Arrow /></a>)}</nav>
      <div className="d1-menu-foot"><a href={business.phoneHref}><Icon name="phone" size={18} />Call or text {business.phone}</a><ScheduleButton>Book a visit</ScheduleButton></div>
    </div>}
  </header>;
}
