"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "All designs", short: "Home" },
  { href: "/design-1", label: "Design 1", short: "Design 1" },
  { href: "/design-2", label: "Design 2", short: "Design 2" },
];

export default function SwitchBar() {
  const path = usePathname().replace(/\/$/, "") || "/";
  return (
    <nav aria-label="Switch design" className="on-dark fixed bottom-3 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-deep/95 p-1 shadow-xl ring-1 ring-white/10 sm:bottom-5">
      <ul className="flex items-center gap-1 text-[13px] font-semibold sm:text-sm">
        {items.map((i) => {
          const on = path === i.href;
          return (
            <li key={i.href}>
              <Link href={i.href} aria-current={on ? "page" : undefined} className={`block whitespace-nowrap rounded-full px-3.5 py-2 transition-colors sm:px-4 ${on ? "bg-white text-deep" : "text-white/85 hover:bg-white/15 hover:text-white"}`}>
                <span className="sm:hidden">{i.short}</span><span className="hidden sm:inline">{i.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
