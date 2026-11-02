"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFx() {
  const path = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement; cio.unobserve(el);
      const to = Number(el.dataset.count), suffix = el.dataset.suffix ?? "", start = performance.now();
      if (reduce) { el.textContent = to + suffix; return; }
      const tick = (t: number) => {
        const k = Math.min((t - start) / 1600, 1), eased = 1 - Math.pow(1 - k, 4);
        el.textContent = Math.round(to * eased) + suffix;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: 0.5 });
    counters.forEach((c) => cio.observe(c));

    const bar = document.querySelector<HTMLElement>(".scroll-bar");
    const par = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar && max > 0) bar.style.transform = `scaleX(${Math.min(window.scrollY / max, 1)})`;
      if (reduce) return;
      const vh = window.innerHeight;
      par.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const k = Number(el.dataset.parallax) || 0.1;
        el.style.transform = `translate3d(0, ${((r.top + r.height / 2) - vh / 2) * -k}px, 0)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { io.disconnect(); cio.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [path]);

  return <div className="scroll-bar" aria-hidden="true" />;
}
