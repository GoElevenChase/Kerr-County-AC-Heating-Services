"use client";
import { useState } from "react";
import { BIZ } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "service", string>>;
const SERVICES = ["AC repair", "AC installation or replacement", "Furnace repair or installation", "Heat pump", "Ductless mini-split", "Indoor air quality / UV light", "Maintenance / VIP program", "Financing question", "Something else"];

export default function ContactForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "preparing" | "ready">("idle");
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState<"" | "yes" | "no">("");
  const dark = tone === "dark";

  const field = `w-full border px-4 py-3.5 text-base outline-none transition-colors focus:border-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose ${dark ? "border-white/30 bg-white/5 text-white placeholder:text-white/50" : "border-soft bg-white text-ink"}`;
  const label = `mb-1.5 block text-sm font-semibold ${dark ? "text-white" : "text-deep"}`;
  const err = `mt-1.5 text-sm font-medium ${dark ? "text-rose" : "text-rose-dark"}`;

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    const service = String(f.get("service") ?? "");
    const message = String(f.get("message") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Please enter a 10-digit phone number.";
    if (!service) next.service = "Please choose a service.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setState("preparing");
    setTimeout(() => {
      setSummary(`Service request for ${BIZ.name}\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${message || "(none)"}`);
      setState("ready");
    }, 500);
  }

  async function copy() {
    try { await navigator.clipboard.writeText(summary); setCopied("yes"); } catch { setCopied("no"); }
  }

  if (state === "ready") {
    return (
      <div role="status" className={`border p-6 sm:p-8 ${dark ? "border-white/25 bg-white/5 text-white" : "border-soft bg-warm text-ink"}`}>
        <h3 className="font-heading text-2xl uppercase">Your request is ready, but not sent</h3>
        <p className="mt-3 text-base leading-relaxed">This website does not have a form-submission service connected, so nothing has been delivered to our team. Please call us to schedule, or copy your details below to share when you reach us.</p>
        <pre className={`mt-4 overflow-x-auto whitespace-pre-wrap p-4 text-sm ${dark ? "bg-black/30" : "bg-white"}`}>{summary}</pre>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a href={BIZ.tel} className="btn bg-rose-dark text-white hover:bg-rose">Call {BIZ.phone}</a>
          <button type="button" onClick={copy} className={`btn border-2 ${dark ? "border-white text-white hover:bg-white hover:text-deep" : "border-teal text-teal hover:bg-teal hover:text-white"}`}>Copy request</button>
          <button type="button" onClick={() => { setState("idle"); setCopied(""); }} className="btn underline">Edit</button>
        </div>
        <p aria-live="polite" className="mt-3 text-sm">{copied === "yes" && "Copied to your clipboard."}{copied === "no" && "Copying is not available in this browser. Select the text above instead."}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2" aria-busy={state === "preparing"}>
      <div>
        <label htmlFor="cf-name" className={label}>Name</label>
        <input id="cf-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-e" : undefined} />
        {errors.name && <p id="cf-name-e" className={err}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="cf-phone" className={label}>Phone</label>
        <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "cf-phone-e" : undefined} />
        {errors.phone && <p id="cf-phone-e" className={err}>{errors.phone}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-service" className={label}>How can we help?</label>
        <select id="cf-service" name="service" defaultValue="" className={field} aria-invalid={!!errors.service} aria-describedby={errors.service ? "cf-service-e" : undefined}>
          <option value="" disabled className="text-ink">Choose a service</option>
          {SERVICES.map((s) => <option key={s} className="text-ink">{s}</option>)}
        </select>
        {errors.service && <p id="cf-service-e" className={err}>{errors.service}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={label}>Details (optional)</label>
        <textarea id="cf-message" name="message" rows={4} className={field} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "preparing"} className="btn w-full bg-rose-dark text-white hover:bg-rose disabled:opacity-60 sm:w-auto">
          {state === "preparing" ? "Preparing…" : "Prepare my request"}<span className="arr" aria-hidden="true">→</span>
        </button>
        <p className={`mt-3 text-sm ${dark ? "text-white/70" : "text-ink/70"}`}>This form does not send data online. It prepares your details so you can call us at {BIZ.phone}.</p>
      </div>
    </form>
  );
}
