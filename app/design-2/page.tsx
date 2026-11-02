import type { Metadata } from "next";
import Link from "next/link";
import Design2Header from "@/components/Design2Header";
import { PhoneIcon } from "@/components/Design1Header";
import Logo from "@/components/Logo";
import Pic from "@/components/Pic";
import Words from "@/components/Words";
import ContactForm from "@/components/ContactForm";
import QuoteSlider from "@/components/QuoteSlider";
import { AREAS, BIZ, IMG, NAV, REVIEWS, SERVICES, TEAM, VIP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Design 2 — Bold & Editorial",
  description: "Kerr County A/C & Heating Services: a family HVAC company with 30+ years of combined technician experience, serving Kerrville and the Texas Hill Country.",
};

const Marquee = ({ items, className = "" }: { items: string[]; className?: string }) => (
  <div className={`marquee-wrap overflow-hidden ${className}`} aria-hidden="true">
    <div className="marquee">
      {[0, 1].map((k) => (
        <ul key={k} className="flex shrink-0 items-center">
          {items.map((t) => <li key={t + k} className="flex items-center whitespace-nowrap font-heading text-3xl uppercase tracking-wider sm:text-5xl">{t}<span className="mx-6 text-rose sm:mx-10">✦</span></li>)}
        </ul>
      ))}
    </div>
  </div>
);

export default function Design2() {
  const gallery = [
    { p: IMG.team, cls: "w-[85vw] sm:w-[640px] aspect-[12/5]", s: "640px" },
    { p: IMG.kyle, cls: "w-[62vw] sm:w-[340px] aspect-[9/10]", s: "340px" },
    { p: IMG.miniSplit, cls: "w-[85vw] sm:w-[620px] aspect-[2/1]", s: "620px" },
    { p: IMG.mike, cls: "w-[62vw] sm:w-[340px] aspect-[9/11]", s: "340px" },
    { p: IMG.award2024, cls: "w-[80vw] sm:w-[560px] aspect-[4/3]", s: "560px" },
    { p: IMG.alex, cls: "w-[62vw] sm:w-[340px] aspect-[9/10]", s: "340px" },
    { p: IMG.iaq, cls: "w-[85vw] sm:w-[700px] aspect-[16/6]", s: "700px" },
  ];
  return (
    <div className="bg-ivory text-deep">
      <Design2Header />
      <main id="main">
        {/* HERO */}
        <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
            <p className="fade-up flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold uppercase tracking-[.2em] text-teal"><span>Kerrville, Texas</span><span className="h-px w-10 bg-rose" aria-hidden="true" /><span>HVAC since {BIZ.established}</span></p>
            <h1 className="mt-5 font-heading font-bold uppercase leading-[.92] tracking-tight text-[clamp(3rem,11vw,10rem)]">
              <span className="block"><Words text="Hill Country" /></span>
              <span className="block text-teal"><Words text="comfort," start={2} /></span>
              <span className="block"><Words text="family run." start={3} /></span>
            </h1>
          </div>
          <div className="relative mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1fr_380px]">
            <div className="mask-in-x relative h-[46vh] min-h-[300px] overflow-hidden lg:h-[62vh] lg:min-h-[480px]">
              <div data-parallax="0.08" className="absolute -inset-y-[8%] inset-x-0"><Pic p={IMG.team2025} sizes="(min-width:1024px) 1100px, 100vw" priority className="object-[50%_30%]" /></div>
            </div>
            <div className="fade-up flex flex-col justify-end px-5 pb-2 sm:px-10 lg:px-0 lg:pr-10" style={{ ["--d" as string]: "900ms" }}>
              <p className="text-lg leading-relaxed">Repair, installation and maintenance from the Barroso family and a team of neighbors who&apos;ve been keeping Kerr County comfortable for more than a decade.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={BIZ.tel} className="btn bg-deep text-white hover:bg-rose-dark"><PhoneIcon className="h-4 w-4" />Call {BIZ.phone}</a>
                <a href="#contact" className="btn border-2 border-deep hover:bg-deep hover:text-white">Schedule service<span className="arr" aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </section>

        <Marquee items={AREAS} className="mt-16 border-y border-deep/20 py-5 lg:mt-24" />

        {/* INTRO */}
        <section id="about" className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-10 md:py-28 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-3"><p className="text-sm font-bold uppercase tracking-[.2em] text-teal">01 — Our story</p></div>
          <div className="lg:col-span-6">
            <h2 data-reveal className="font-heading text-4xl font-semibold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">Two Texans, one truck, a whole lot of neighbors.</h2>
            <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">In {BIZ.established}, JR and Melissa Barroso brought their passion for exceptional HVAC service to the Texas Hill Country. They built Kerr County A/C &amp; Heating on integrity, honesty and the belief that neighbors deserve nothing less than the best.</p>
            <p data-reveal className="mt-5 max-w-2xl text-lg leading-relaxed">From the friendly voice on the phone to the experienced hands in the field, every job gets a personal touch. We&apos;re licensed by the Texas Department of Licensing and Regulation, fully insured, and proud to be a family taking care of families.</p>
          </div>
          <div className="lg:col-span-3 lg:pt-24">
            <div data-reveal="mask" className="aspect-[4/5] overflow-hidden"><Pic p={IMG.family} sizes="(min-width:1024px) 360px, 70vw" /></div>
            <p data-reveal className="mt-3 text-sm text-ink/80">JR &amp; Melissa Barroso, founders</p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-deep py-20 text-white md:py-28">
          <div className="on-dark mx-auto max-w-[1500px] px-5 sm:px-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <h2 data-reveal className="font-heading text-5xl font-bold uppercase leading-none sm:text-7xl lg:text-8xl">What we do</h2>
              <p data-reveal className="text-sm font-bold uppercase tracking-[.2em] text-soft">02 — Eight services</p>
            </div>
            <ol className="mt-12 border-t border-white/25">
              {SERVICES.map((s, i) => (
                <li key={s.id} data-reveal style={{ ["--rd" as string]: `${(i % 3) * 60}ms` }} className="group border-b border-white/25">
                  <div className="grid items-center gap-4 py-7 transition-colors duration-300 hover:bg-white/[.04] sm:py-9 md:grid-cols-[90px_1.2fr_1.4fr_160px] md:gap-8">
                    <span className="font-heading text-3xl text-rose sm:text-4xl">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-heading text-3xl font-semibold uppercase leading-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">{s.title}</h3>
                    <p className="text-white/80 md:text-[17px]">{s.text}</p>
                    <div className="hidden h-24 overflow-hidden md:block"><div className="zoom h-full"><Pic p={s.img} sizes="160px" /></div></div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="relative overflow-hidden bg-teal py-20 text-white md:py-32">
          <div className="mx-auto grid max-w-[1500px] items-end gap-8 px-5 sm:px-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            <p data-reveal="scale" className="font-heading font-bold leading-[.8] text-[clamp(9rem,30vw,26rem)]"><span data-count="30" data-suffix="+">30+</span></p>
            <div data-reveal className="pb-4">
              <p className="font-heading text-3xl font-semibold uppercase leading-tight sm:text-5xl">Years of combined technician experience in every truck we send.</p>
              <p className="mt-5 max-w-xl text-lg text-white/90">JR started as a helper and worked up to installer, lead installer, service technician and owner. Today he and his team bring that depth to every repair, install and inspection.</p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section aria-label="Photo gallery" className="py-20 md:py-28">
          <div className="mx-auto mb-10 flex max-w-[1500px] items-end justify-between gap-4 px-5 sm:px-10">
            <h2 data-reveal className="font-heading text-5xl font-bold uppercase leading-none sm:text-7xl">The crew</h2>
            <p data-reveal className="hidden text-sm font-bold uppercase tracking-[.2em] text-teal sm:block">03 — Scroll →</p>
          </div>
          <div tabIndex={0} aria-label="Photo gallery, scrollable" className="flex snap-x gap-4 overflow-x-auto px-5 pb-6 sm:gap-6 sm:px-10" style={{ scrollbarWidth: "thin" }}>
            {gallery.map((g, i) => (
              <figure key={i} data-reveal="mask" style={{ ["--rd" as string]: `${i * 80}ms` }} className={`${g.cls} zoom shrink-0 snap-start self-end`}>
                <Pic p={g.p} sizes={g.s} />
              </figure>
            ))}
          </div>
          <ul className="mx-auto mt-10 grid max-w-[1500px] grid-cols-2 gap-x-6 gap-y-3 px-5 text-sm sm:px-10 md:grid-cols-3 lg:grid-cols-6">
            {TEAM.map((t) => <li key={t.name} className="border-t border-deep/25 pt-2"><strong className="font-heading text-xl uppercase">{t.name}</strong><br />{t.role}</li>)}
          </ul>
        </section>

        {/* COMMUNITY & AWARDS */}
        <section className="bg-warm py-20 md:py-28">
          <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-12">
            <div data-reveal="mask-x" className="aspect-[4/3] overflow-hidden lg:col-span-6"><Pic p={IMG.award2024} sizes="(min-width:1024px) 720px, 100vw" /></div>
            <div className="lg:col-span-6 lg:pl-8">
              <p data-reveal className="text-sm font-bold uppercase tracking-[.2em] text-teal">04 — Recognition</p>
              <h2 data-reveal className="mt-4 font-heading text-4xl font-bold uppercase leading-[1.02] sm:text-6xl">Voted Kerrville&apos;s best. Twice noticed.</h2>
              <ul className="mt-8 divide-y divide-deep/20 border-y border-deep/20 text-lg">
                <li data-reveal className="flex items-center justify-between gap-4 py-4"><span>Kerrville&apos;s Best Heating &amp; Cooling Company</span><strong className="font-heading text-3xl text-rose-dark">2024</strong></li>
                <li data-reveal className="flex items-center justify-between gap-4 py-4"><span>One of the Best in Kerrville</span><strong className="font-heading text-3xl text-rose-dark">2025</strong></li>
              </ul>
              <p data-reveal className="mt-6 leading-relaxed">We&apos;re active in the Kerrville Area Chamber of Commerce, West Kerr Chamber of Commerce, Kerr County Women&apos;s Chamber and the Hunt Garden Club, because a strong local business shows up for its community.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="bg-ivory py-20 md:py-32">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
            <p data-reveal className="mb-8 text-sm font-bold uppercase tracking-[.2em] text-teal">05 — In their words</p>
            <div data-reveal><QuoteSlider quotes={REVIEWS} /></div>
          </div>
        </section>

        {/* VIP + FINANCING */}
        <section id="vip" className="bg-deep text-white">
          <div className="on-dark mx-auto grid max-w-[1500px] lg:grid-cols-2">
            <div className="border-white/20 px-5 py-20 sm:px-10 md:py-28 lg:border-r">
              <p data-reveal className="text-sm font-bold uppercase tracking-[.2em] text-soft">06 — VIP Maintenance Program</p>
              <h2 data-reveal className="mt-4 font-heading text-5xl font-bold uppercase leading-[.98] sm:text-7xl">10% off. Every job.</h2>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">{VIP.perks.map((p) => <li key={p} data-reveal className="flex gap-3 border-t border-white/20 py-3"><span className="text-rose" aria-hidden="true">✦</span>{p}</li>)}</ul>
              <dl className="mt-6">{VIP.prices.map(([pr, w]) => <div key={w} data-reveal className="flex items-baseline justify-between gap-4 border-t border-white/20 py-3"><dt className="capitalize text-white/80">{w}</dt><dd className="font-heading text-3xl text-white">{pr}</dd></div>)}</dl>
              <p className="mt-2 text-sm text-white/60">Pricing as listed on our current website. Please confirm when you call.</p>
            </div>
            <div className="bg-rose-dark px-5 py-20 sm:px-10 md:py-28">
              <p data-reveal className="text-sm font-bold uppercase tracking-[.2em] text-white/85">07 — Financing</p>
              <h2 data-reveal className="mt-4 font-heading text-5xl font-bold uppercase leading-[.98] sm:text-7xl">Comfort now. Pay over time.</h2>
              <p data-reveal className="mt-6 max-w-lg text-lg leading-relaxed">We offer flexible financing options designed with your family in mind, with honest terms and no surprises. Ask us about your options when you schedule.</p>
              <a data-reveal href="#contact" className="btn mt-8 bg-white text-deep hover:bg-ivory">Ask about financing<span className="arr" aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section id="areas" className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 md:py-28">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 data-reveal className="font-heading text-4xl font-bold uppercase leading-[1.02] sm:text-6xl lg:col-span-5">Where we work</h2>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {AREAS.map((a, i) => <li key={a} data-reveal style={{ ["--rd" as string]: `${i * 40}ms` }} className="border-t border-deep/25 py-3 font-heading text-2xl uppercase">{a}</li>)}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-teal py-20 text-white md:py-32">
          <div className="on-dark mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-white/85">08 — Let&apos;s talk</p>
              <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[.95] sm:text-7xl lg:text-8xl">Need us? Call us.</h2>
              <a href={BIZ.tel} className="mt-8 inline-block font-heading text-4xl underline decoration-rose decoration-4 underline-offset-8 sm:text-6xl">{BIZ.phone}</a>
              <p className="mt-8 text-lg">{BIZ.address[0]}, {BIZ.address[1]}<br />Mon–Fri 8 AM–5 PM · Sat 8 AM–12 PM · Emergency service available</p>
            </div>
            <div data-reveal style={{ ["--rd" as string]: "150ms" }}><ContactForm tone="dark" /></div>
          </div>
        </section>
      </main>

      <footer className="on-dark bg-deep pb-28 pt-12 text-white">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-5 sm:px-10 md:grid-cols-[auto_1fr_1fr_1fr] md:gap-14">
          <div className="w-fit bg-ivory p-3"><Logo className="h-10 w-auto" /></div>
          <address className="text-sm not-italic leading-relaxed text-white/80"><a href={BIZ.tel} className="font-heading text-2xl text-white">{BIZ.phone}</a><br />{BIZ.address[0]}<br />{BIZ.address[1]}</address>
          <ul className="text-sm text-white/80">{BIZ.hours.map(([d, h]) => <li key={d}>{d}: {h}</li>)}<li>Emergency service available</li></ul>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">{NAV.map((n) => <li key={n.href}><a href={n.href} className="ulink">{n.label}</a></li>)}</ul>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1500px] flex-col justify-between gap-2 border-t border-white/20 px-5 pt-5 text-sm text-white/70 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} {BIZ.name}</p>
          <Link href="/" className="ulink w-fit">← Back to all designs</Link>
        </div>
      </footer>
    </div>
  );
}
