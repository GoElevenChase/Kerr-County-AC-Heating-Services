import Link from "next/link";
import { Logo } from "@/components/shared";
import { siteContent } from "@/content/site";

export default function NotFound() {
  return <main id="main-content" className="not-found"><Logo /><span>404 / Page not found</span><h1>Let’s get you<br />back to comfort.</h1><p>The page you’re looking for isn’t here. Call us at <a href={siteContent.business.phoneHref}>{siteContent.business.phone}</a> or head back home.</p><Link className="btn" href="/">Back to the homepage</Link></main>;
}
