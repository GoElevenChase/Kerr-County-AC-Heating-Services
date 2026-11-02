import Image from "next/image";
import type { Photo } from "@/lib/site";

export default function Pic({ p, sizes, className = "", priority = false, alt }: { p: Photo; sizes: string; className?: string; priority?: boolean; alt?: string }) {
  return <Image src={p.src} width={p.w} height={p.h} alt={alt ?? p.alt} sizes={sizes} quality={90} priority={priority} className={`h-full w-full object-cover ${className}`} />;
}
