import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import Words from "@/components/Words";

export const metadata: Metadata = {
  title: "Explore Our Website Designs",
  description: "Two complete homepage directions for Kerr County A/C & Heating Services. Explore each and choose the one that feels right.",
};

const designs = [
  {
    n: "01", href: "/design-1", tag: "Clean · Modern · Professional", title: "The Trusted Neighbor",
    text: "Bright, welcoming and conversion-focused. A split hero with the real team, image-led service tiles, and a clear path from an everyday comfort problem to a call with the Barroso family.",
    tokens: "Warm white · Teal · Oswald &amp; Inter · Clean, steady motion",
    img: "/previews/design-1.webp", alt: "Preview of the Design 1 homepage",
  },
  {
    n: "02", href: "/design-2", tag: "Bold · Distinctive · Editorial", title: "The Hill Country Edition",
    text: "Expressive and confident. Oversized condensed type, wide team photography, numbered services and a large experience statement, art-directed like a local magazine.",
    tokens: "Deep teal · Warm ivory · Oswald &amp; Inter · Cinematic motion",
    img: "/previews/design-2.webp", alt: "Preview of the Design 2 homepage",
  },
];

export default function Select() {
  return (
    <>
      <main id="main" className="bg-warm pb-32">
        <section className="relative overflow-hidden bg-deep text-white">
          <div className="on-dark mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 md:pb-24">
            <div className="fade-up flex items-center justify-between gap-4">
              <div className="bg-ivory p-2.5"><Logo className="h-10 w-auto sm:h-12" priority /></div>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-soft sm:text-sm">Website directions</p>
            </div>
            <p className="fade-up mt-14 text-sm font-bold uppercase tracking-[.2em] text-rose" style={{ ["--d" as string]: "200ms" }}>A fresh perspective</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[2.6rem] font-bold uppercase leading-[1.02] tracking-wide sm:text-6xl lg:text-7xl">
              <Words text="Two fresh directions for Kerr County A/C & Heating." />
            </h1>
            <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/85" style={{ ["--d" as string]: "800ms" }}>
              The same local care, expressed two ways. Explore each complete homepage and choose the direction that feels right. Family-owned, locally operated HVAC serving Kerrville and the Texas Hill Country since 2014.
            </p>
          </div>
        </section>

        <section aria-labelledby="explore" className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 md:pt-24">
          <div data-reveal className="max-w-2xl">
            <h2 id="explore" className="font-heading text-4xl font-bold uppercase tracking-wide text-deep sm:text-5xl">Explore Our Website Designs</h2>
            <p className="mt-3 text-lg">One family business. Two possibilities.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {designs.map((d, i) => (
              <article key={d.href} data-reveal style={{ ["--rd" as string]: `${i * 150}ms` }} className="lift group flex flex-col bg-white">
                <Link href={d.href} tabIndex={-1} aria-hidden="true" className="zoom relative block aspect-[16/10] overflow-hidden bg-grey">
                  <Image src={d.img} alt={d.alt} fill sizes="(min-width:1024px) 600px, 100vw" quality={90} className="object-cover object-top" />
                </Link>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="font-heading text-sm uppercase tracking-[.2em] text-rose-dark">Design {d.n}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-teal">{d.tag}</p>
                  <h3 className="mt-3 font-heading text-3xl uppercase tracking-wide text-deep sm:text-4xl">{d.title}</h3>
                  <p className="mt-4 leading-relaxed">{d.text}</p>
                  <p className="mt-4 text-sm text-ink/70" dangerouslySetInnerHTML={{ __html: d.tokens }} />
                  <Link href={d.href} className="btn mt-8 w-full self-start bg-teal text-white hover:bg-teal-dark sm:w-auto">Explore Design {d.n.slice(1)}<span className="arr" aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl px-5 text-center sm:px-8">
          <h2 data-reveal className="font-heading text-3xl uppercase tracking-wide text-deep sm:text-4xl">Different first impressions. The same Kerr County care.</h2>
          <p data-reveal className="mt-4 leading-relaxed">Each direction is a complete, responsive homepage. Use the floating bar to switch designs or return here. Enquiry forms do not send data online, and the call links dial (830) 988-4710.</p>
        </section>
      </main>
      <footer className="bg-deep px-5 py-8 pb-28 text-center text-sm text-white/75">
        <p>Thoughtfully prepared for Kerr County A/C &amp; Heating Services.</p>
        <p className="mt-1">Two homepage concepts · November 2026</p>
      </footer>
    </>
  );
}
