import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
        <Link href="/">Volver al inicio ↑</Link>
      </div>
    </footer>
  );
}
