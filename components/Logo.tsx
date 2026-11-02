import Image from "next/image";

export default function Logo({ className = "h-12 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src="/img/logo.png" width={437} height={102} alt="Kerr County A/C & Heating Services" className={className} priority={priority} unoptimized />;
}
