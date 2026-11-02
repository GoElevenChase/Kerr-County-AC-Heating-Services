"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { PhoneIcon } from "./Design1Header";
import { BIZ, NAV } from "@/lib/site";

export default function Design2Header() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHide(y > last && y > 240);
      last = y;
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);
  const show = !hide || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${show ? "" : "-translate-y-full"}`}>
      <div className={`flex h-16 items-stretch justify-between border-b ${open ? "border-white/15 bg-deep text-white" : "border-deep/15 bg-ivory/95 text-deep"} transition-colors duration-300 sm:h-[72px]`}>
        <a href="#top" onClick={close} aria-label="Kerr County A/C & Heating Services, back to top" className={`flex items-center bg-white px-4 sm:px-8`}>
          <Logo className="h-9 w-auto sm:h-11" priority />
        </a>
        <div className="flex items-stretch">
          <a href={BIZ.tel} className="hidden items-center gap-3 border-l border-current/20 px-8 font-heading text-2xl tracking-wide transition-colors hover:bg-rose-dark hover:text-white md:flex"><PhoneIcon className="h-5 w-5" />{BIZ.phone}</a>
          <a href={BIZ.tel} aria-label={`Call ${BIZ.phone}`} className="flex w-16 items-center justify-center border-l border-current/20 bg-rose-dark text-white md:hidden"><PhoneIcon /></a>
          <button ref={btn} type="button" aria-expanded={open} aria-controls="d2-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)} className="flex w-16 items-center justify-center gap-3 border-l border-current/20 font-heading text-lg uppercase tracking-widest sm:w-auto sm:px-7">
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
            <span aria-hidden="true" className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div id="d2-menu" hidden={!open} className="on-dark fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-deep text-white sm:top-[72px]">
        <nav aria-label="Primary" className="mx-auto grid min-h-full max-w-[1500px] content-between gap-10 px-5 pb-28 pt-8 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:py-14">
          <ol>
            {NAV.map((n, i) => (
              <li key={n.href} className="border-b border-white/15">
                <a href={n.href} onClick={close} className="group flex items-baseline gap-5 py-3.5 sm:py-5">
                  <span className="w-8 font-heading text-sm text-rose">0{i + 1}</span>
                  <span className="font-heading text-4xl uppercase tracking-wide transition-transform duration-300 group-hover:translate-x-3 group-hover:text-rose sm:text-6xl lg:text-7xl">{n.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className="space-y-6 self-end">
            <a href={BIZ.tel} className="block font-heading text-4xl tracking-wide hover:text-rose sm:text-5xl">{BIZ.phone}</a>
            <p className="text-white/80">{BIZ.address[0]}<br />{BIZ.address[1]}</p>
            <p className="text-white/80">Mon–Fri 8 AM–5 PM · Sat 8 AM–12 PM<br />Emergency service available</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
