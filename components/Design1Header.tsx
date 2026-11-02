"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { BIZ, NAV, SERVICES } from "@/lib/site";

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function Design1Header() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [stuck, setStuck] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setDd(false); } };
    const onDown = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); window.removeEventListener("resize", onResize); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => { setOpen(false); setDd(false); };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${stuck || open ? "shadow-[0_6px_24px_-12px_rgba(23,46,53,.35)]" : ""}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[84px]">
        <a href="#top" onClick={close} aria-label="Kerr County A/C & Heating Services, back to top" className="shrink-0">
          <Logo className="h-11 w-auto sm:h-12 lg:h-14" priority />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div ref={ddRef} className="relative">
            <button type="button" aria-expanded={dd} aria-controls="d1-services" onClick={() => setDd((v) => !v)} className="flex items-center gap-1.5 whitespace-nowrap py-2 text-[15px] font-semibold text-deep hover:text-teal">
              Services
              <svg viewBox="0 0 12 8" className={`h-2 w-3 transition-transform ${dd ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M1 1l5 5 5-5" /></svg>
            </button>
            {dd && (
              <ul id="d1-services" className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 border border-grey bg-white p-2 shadow-xl">
                {SERVICES.map((s) => (
                  <li key={s.id}><a href="#services" onClick={close} className="block px-4 py-2.5 text-[15px] text-ink hover:bg-warm hover:text-teal">{s.title}</a></li>
                ))}
              </ul>
            )}
          </div>
          {NAV.filter((n) => n.href !== "#services" && n.href !== "#contact").map((n) => (
            <a key={n.href} href={n.href} className="ulink whitespace-nowrap py-2 text-[15px] font-semibold text-deep hover:text-teal">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={BIZ.tel} className="hidden items-center gap-2 text-[15px] font-bold text-deep hover:text-teal xl:flex"><PhoneIcon className="h-4 w-4 text-rose" />{BIZ.phone}</a>
          <a href="#contact" className="btn hidden bg-teal text-white hover:bg-teal-dark sm:inline-flex lg:min-h-12">Schedule Service</a>
          <a href={BIZ.tel} aria-label={`Call ${BIZ.phone}`} className="flex h-11 w-11 items-center justify-center bg-rose-dark text-white transition-colors hover:bg-rose lg:hidden"><PhoneIcon /></a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="d1-mobile" onClick={() => setOpen((v) => !v)} className="relative flex h-11 w-11 items-center justify-center border-2 border-deep text-deep lg:hidden">
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div id="d1-mobile" hidden={!open} className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-white lg:hidden">
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 pb-28 pt-4 sm:px-8">
          <ul className="divide-y divide-grey">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} onClick={close} className="flex items-center justify-between py-4 font-heading text-2xl uppercase tracking-wide text-deep">{n.label}<span aria-hidden="true" className="text-rose">→</span></a></li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a href="#contact" onClick={close} className="btn bg-teal text-white">Schedule Service</a>
            <a href={BIZ.tel} className="btn border-2 border-deep text-deep"><PhoneIcon className="h-4 w-4" />Call {BIZ.phone}</a>
          </div>
          <p className="mt-8 text-sm text-ink/70">{BIZ.address.join(", ")}<br />Mon–Fri 8 AM–5 PM · Sat 8 AM–12 PM · Emergency service available</p>
        </nav>
      </div>
    </header>
  );
}
