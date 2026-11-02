"use client";
import { useState } from "react";

export default function QuoteSlider({ quotes }: { quotes: { name: string; text: string }[] }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + quotes.length) % quotes.length);
  const q = quotes[i];
  const long = q.text.length > 220;
  return (
    <div>
      <figure key={i} aria-live="polite" className="fade-up min-h-[20rem] sm:min-h-[18rem]">
        <blockquote className={`font-heading uppercase leading-[1.12] tracking-wide ${long ? "text-2xl sm:text-4xl lg:text-5xl" : "text-3xl sm:text-5xl lg:text-7xl"}`}>“{q.text}”</blockquote>
        <figcaption className="mt-8 flex items-center gap-4 text-lg"><span className="h-0.5 w-12 bg-rose" aria-hidden="true" /><strong>{q.name}</strong><span className="text-current/60">Google review</span></figcaption>
      </figure>
      <div className="mt-10 flex items-center gap-4">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="flex h-14 w-14 items-center justify-center border-2 border-current text-xl transition-colors hover:bg-rose-dark hover:text-white hover:border-rose-dark">←</button>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className="flex h-14 w-14 items-center justify-center border-2 border-current text-xl transition-colors hover:bg-rose-dark hover:text-white hover:border-rose-dark">→</button>
        <p className="ml-2 font-heading text-lg tracking-widest" aria-hidden="true">{String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</p>
      </div>
    </div>
  );
}
