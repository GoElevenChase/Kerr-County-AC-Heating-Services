import type { Metadata } from "next";
import Link from "next/link";
import Design1Header, { PhoneIcon } from "@/components/Design1Header";
import Logo from "@/components/Logo";
import Pic from "@/components/Pic";
import Words from "@/components/Words";
import ContactForm from "@/components/ContactForm";
import { AREAS, BIZ, IMG, NAV, REVIEWS, SERVICES, VIP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Design 1 — Modern & Professional",
  description: "Kerr County A/C & Heating Services: family-owned HVAC repair, installation and maintenance in Kerrville and the Texas Hill Country.",
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[.18em] text-teal"><span className="h-0.5 w-8 bg-rose" aria-hidden="true" />{children}</p>
);
const H2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`font-heading text-4xl uppercase leading-[1.05] tracking-wide text-deep sm:text-5xl lg:text-[3.4rem] ${className}`}>{children}</h2>
);

export default function Design1() {
  const feature = [SERVICES[0], SERVICES[4], SERVICES[5]];
  const small = [SERVICES[1], SERVICES[2], SERVICES[3]];
  return (
    <>
      <Design1Header />
      <main id="main">
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-warm">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:py-28">
            <div>
              <p className="fade-up mb-5 inline-flex items-center gap-2 bg-white px-4 py-2 text-sm font-bold text-teal shadow-sm"><span className="h-2 w-2 rounded-full bg-rose" aria-hidden="true" />Voted Kerrville&apos;s Best Heating &amp; Cooling Company, 2024</p>
              <h1 className="font-heading text-[2.6rem] font-semibold uppercase leading-[1.02] tracking-wide text-deep sm:text-6xl lg:text-7xl">
                <Words text="Family-owned comfort for the Hill Country." />
              </h1>
              <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink" style={{ ["--d" as string]: "700ms" }}>
                Honest recommendations, personal service and expert repair, installation and maintenance from a local team that treats your home like their own. Serving Kerrville since {BIZ.established}.
              </p>
              <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "850ms" }}>
                <a href={BIZ.tel} className="btn bg-rose-dark text-white hover:bg-rose"><PhoneIcon className="h-4 w-4" />Call Now {BIZ.phone}</a>
                <a href="#contact" className="btn border-2 border-teal text-teal hover:bg-teal hover:text-white">Schedule Service<span className="arr" aria-hidden="true">→</span></a>
              </div>
              <p className="fade-up mt-5 text-sm text-ink/75" style={{ ["--d" as string]: "1000ms" }}>Emergency service available · Mon–Fri 8–5 · Sat 8–12</p>
            </div>
            <div className="relative">
              <div className="mask-in kenburns relative aspect-[4/3] overflow-hidden shadow-[0_30px_60px_-30px_rgba(23,46,53,.5)] sm:aspect-[16/11]">
                <Pic p={IMG.team2025} sizes="(min-width:1024px) 600px, 100vw" priority />
              </div>
              <div style={{ ["--d" as string]: "1100ms" }} className="fade-up absolute -bottom-6 left-4 flex items-center gap-4 bg-white p-4 pr-6 shadow-xl sm:-left-6">
                <div className="h-16 w-20 shrink-0"><Pic p={IMG.badge2025} sizes="80px" className="!object-contain" /></div>
                <p className="text-sm leading-snug text-deep"><strong className="block font-heading text-lg uppercase">One of the Best</strong>in Kerrville, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section aria-label="Why homeowners trust us" className="bg-deep text-white">
          <ul className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {[
              ["Local, family-owned", "JR and Melissa Barroso, since 2014"],
              ["Licensed & insured", "Licensed by the Texas Dept. of Licensing and Regulation"],
              ["Award-winning service", "Best Heating & Cooling 2024 · One of the best 2025"],
              ["30+ years of expertise", "Our technicians bring it to every job"],
            ].map(([t, d], i) => (
              <li key={t} data-reveal style={{ ["--rd" as string]: `${i * 90}ms` }} className="border-white/15 py-7 sm:px-6 lg:border-l first:lg:border-l-0">
                <p className="font-heading text-xl uppercase tracking-wide">{t}</p>
                <p className="mt-1 text-sm text-white/75">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-end gap-6 lg:grid-cols-2">
              <div data-reveal><Eyebrow>Our services</Eyebrow><H2>Heating &amp; cooling, handled by neighbors</H2></div>
              <p data-reveal style={{ ["--rd" as string]: "120ms" }} className="max-w-xl text-lg leading-relaxed lg:justify-self-end">Repairs and diagnostics, new installations, indoor air quality and preventative maintenance for homes and businesses across Kerr County.</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              <article data-reveal className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden bg-deep lg:col-span-5 lg:row-span-2">
                <div className="zoom absolute inset-0 -z-10"><Pic p={feature[0].img} sizes="(min-width:1024px) 520px, 100vw" /></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />
                <div className="p-7 text-white sm:p-9"><h3 className="font-heading text-3xl uppercase tracking-wide">{feature[0].title}</h3><p className="mt-2 max-w-sm text-white/85">{feature[0].text}</p></div>
              </article>
              {feature.slice(1).map((s, i) => (
                <article key={s.id} data-reveal style={{ ["--rd" as string]: `${(i + 1) * 120}ms` }} className="relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden bg-deep lg:col-span-7">
                  <div className="zoom absolute inset-0 -z-10"><Pic p={s.img} sizes="(min-width:1024px) 720px, 100vw" /></div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/90 via-deep/25 to-transparent" />
                  <div className="p-6 text-white sm:p-8"><h3 className="font-heading text-2xl uppercase tracking-wide">{s.title}</h3><p className="mt-1.5 max-w-lg text-white/85">{s.text}</p></div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {small.map((s, i) => (
                <article key={s.id} data-reveal style={{ ["--rd" as string]: `${i * 100}ms` }} className="lift flex flex-col border border-grey bg-white">
                  <div className="zoom aspect-[6/5] w-full"><Pic p={s.img} sizes="(min-width:1024px) 300px, 50vw" /></div>
                  <div className="p-6"><h3 className="font-heading text-xl uppercase tracking-wide text-deep">{s.title}</h3><p className="mt-2 text-[15px] leading-relaxed">{s.text}</p></div>
                </article>
              ))}
              <article data-reveal style={{ ["--rd" as string]: "300ms" }} className="flex flex-col justify-between bg-teal p-7 text-white">
                <div>
                  <h3 className="font-heading text-xl uppercase tracking-wide">Maintenance &amp; inspections</h3>
                  <ul className="mt-4 space-y-2 text-[15px]">{["Spring and fall check-ups", "Efficiency inspections", "Appointment reminders"].map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true">✓</span>{t}</li>)}</ul>
                </div>
                <a href="#vip" className="btn mt-6 bg-white text-teal hover:bg-warm">See VIP Program<span className="arr" aria-hidden="true">→</span></a>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-warm py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div data-reveal="mask-x" className="aspect-[4/3] overflow-hidden"><Pic p={IMG.award2024} sizes="(min-width:1024px) 600px, 100vw" /></div>
              <div data-reveal="scale" style={{ ["--rd" as string]: "400ms" }} className="absolute -bottom-6 right-4 hidden w-56 border-8 border-warm bg-white shadow-xl sm:block"><div className="aspect-[4/5]"><Pic p={IMG.family} sizes="224px" /></div></div>
            </div>
            <div data-reveal>
              <Eyebrow>Our story</Eyebrow>
              <H2>Where comfort meets community</H2>
              <p className="mt-6 text-lg leading-relaxed">Our story began in {BIZ.established} when JR and Melissa Barroso decided to bring their passion for exceptional HVAC service to the Texas Hill Country. As proud residents of Kerr County, they built the business on integrity, honesty and the belief that neighbors deserve nothing but the best.</p>
              <p className="mt-4 text-lg leading-relaxed">From the friendly voices answering our phones to the experienced hands in the field, we deliver top-notch service with a personal touch. We support the Kerrville Area, West Kerr and Kerr County Women&apos;s Chambers of Commerce and the Hunt Garden Club.</p>
              <div className="mt-8 flex items-center gap-4 border-l-4 border-rose pl-5">
                <p className="font-heading text-xl uppercase tracking-wide text-deep">JR &amp; Melissa Barroso<span className="block font-body text-sm normal-case tracking-normal text-ink/75">Owners, Kerr County A/C &amp; Heating</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal className="max-w-2xl"><Eyebrow>Why choose us</Eyebrow><H2>Experience you can feel, service you can trust</H2></div>
            <div className="mt-14 grid gap-px bg-grey md:grid-cols-3">
              {[
                { n: 30, s: "+", t: "Years of technician experience", d: "Our team brings more than 30 years of combined expertise to every inspection, repair and installation." },
                { n: 0, s: "", big: "Fair", t: "Honest, affordable pricing", d: "Straightforward recommendations with no pressure. Flexible financing options are available for larger projects." },
                { n: 0, s: "", big: "1:1", t: "Personal, family service", d: "Real people answer the phone, and a family that lives in Kerr County takes care of yours." },
              ].map((c, i) => (
                <div key={c.t} data-reveal style={{ ["--rd" as string]: `${i * 120}ms` }} className="bg-white p-8 md:p-10">
                  <p className="font-heading text-7xl text-teal">{c.big ? c.big : <span data-count={c.n} data-suffix={c.s}>{c.n}{c.s}</span>}</p>
                  <h3 className="mt-4 font-heading text-2xl uppercase tracking-wide text-deep">{c.t}</h3>
                  <p className="mt-3 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIP */}
        <section id="vip" className="relative overflow-hidden bg-teal py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div data-reveal>
              <p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-white/85">VIP Maintenance Program</p>
              <h2 className="font-heading text-4xl uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-[3.4rem]">Save 10% on every job we book</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">Take one thing off your to-remember list with automatic scheduling of your two yearly system checks and year-round peace of mind.</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">{VIP.perks.map((p) => <li key={p} className="flex gap-3"><span className="mt-0.5 text-rose-100" aria-hidden="true">✓</span>{p}</li>)}</ul>
              <a href={BIZ.tel} className="btn mt-9 bg-white text-teal hover:bg-warm"><PhoneIcon className="h-4 w-4" />Call to join · {BIZ.phone}</a>
            </div>
            <div data-reveal="right" className="bg-white p-8 text-deep shadow-2xl sm:p-10">
              <h3 className="font-heading text-2xl uppercase tracking-wide">Membership pricing</h3>
              <dl className="mt-5 divide-y divide-grey">
                {VIP.prices.map(([price, what]) => (
                  <div key={what} className="flex items-baseline justify-between gap-4 py-4"><dt className="capitalize text-ink">{what}</dt><dd className="font-heading text-3xl text-teal">{price}</dd></div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-ink/70">Pricing as listed on our current website. Please confirm when you call.</p>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-warm py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal className="max-w-2xl"><Eyebrow>Customer reviews</Eyebrow><H2>Kind words from our neighbors</H2></div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {REVIEWS.slice(0, 3).map((r, i) => (
                <figure key={r.name + i} data-reveal style={{ ["--rd" as string]: `${i * 120}ms` }} className={`lift flex flex-col bg-white p-8 ${i === 0 ? "lg:row-span-1" : ""}`}>
                  <span className="font-heading text-6xl leading-none text-rose" aria-hidden="true">“</span>
                  <blockquote className="mt-2 flex-1 text-[17px] leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-6 border-t border-grey pt-4 text-sm"><strong className="text-deep">{r.name}</strong><span className="text-ink/70"> · Google review</span></figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {REVIEWS.slice(3).map((r, i) => (
                <figure key={r.name} data-reveal style={{ ["--rd" as string]: `${i * 100}ms` }} className="border-l-4 border-teal bg-white p-6">
                  <blockquote className="leading-relaxed">“{r.text}”</blockquote>
                  <figcaption className="mt-3 text-sm"><strong className="text-deep">{r.name}</strong><span className="text-ink/70"> · Google review</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section id="areas" className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div data-reveal>
              <Eyebrow>Service area</Eyebrow>
              <H2>Serving Kerrville and the surrounding Hill Country</H2>
              <p className="mt-5 text-lg leading-relaxed">From our shop on Goat Creek Rd Cutoff, our trucks head out to homes and businesses across Kerr County and neighboring communities.</p>
              <div className="mt-8"><Pic p={IMG.team} sizes="(min-width:1024px) 560px, 100vw" className="aspect-[2/1] !h-auto" /></div>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {AREAS.map((a, i) => (
                <li key={a} data-reveal style={{ ["--rd" as string]: `${i * 50}ms` }} className="flex items-center justify-between border border-grey bg-warm px-5 py-4 font-heading text-xl uppercase tracking-wide text-deep transition-colors hover:border-teal hover:bg-white">{a}<span className="h-2.5 w-2.5 rounded-full bg-rose" aria-hidden="true" /></li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-deep py-20 text-white md:py-28">
          <div className="on-dark mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div data-reveal>
              <p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-soft">Schedule service</p>
              <h2 className="font-heading text-4xl uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-[3.4rem]">Ready for a comfortable home?</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">Call us or prepare a request below. Emergency service is available.</p>
              <a href={BIZ.tel} className="mt-8 inline-flex items-center gap-3 font-heading text-4xl tracking-wide hover:text-rose sm:text-5xl"><PhoneIcon className="h-8 w-8 text-rose" />{BIZ.phone}</a>
              <dl className="mt-8 space-y-1 text-white/85">{BIZ.hours.map(([d, h]) => <div key={d} className="flex max-w-xs justify-between gap-4"><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
            </div>
            <div data-reveal style={{ ["--rd" as string]: "150ms" }}><ContactForm tone="dark" /></div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white pb-24 pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <div><Logo className="h-14 w-auto" /><p className="mt-4 max-w-xs text-[15px] leading-relaxed">Family-owned, locally operated HVAC serving Kerrville and the Texas Hill Country since {BIZ.established}.</p></div>
          <div><h3 className="font-heading text-lg uppercase tracking-wide text-deep">Explore</h3><ul className="mt-4 space-y-2">{NAV.map((n) => <li key={n.href}><a href={n.href} className="ulink">{n.label}</a></li>)}</ul></div>
          <div><h3 className="font-heading text-lg uppercase tracking-wide text-deep">Contact</h3><address className="mt-4 space-y-2 not-italic"><p><a href={BIZ.tel} className="font-bold text-teal">{BIZ.phone}</a></p><p>{BIZ.address[0]}<br />{BIZ.address[1]}</p></address></div>
          <div><h3 className="font-heading text-lg uppercase tracking-wide text-deep">Hours</h3><ul className="mt-4 space-y-1">{BIZ.hours.map(([d, h]) => <li key={d}>{d}: {h}</li>)}</ul><p className="mt-2 text-sm">Emergency service available</p></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-grey px-5 pt-6 text-sm text-ink/75 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {BIZ.name}</p>
          <Link href="/" className="ulink w-fit">← Back to all designs</Link>
        </div>
      </footer>
    </>
  );
}
