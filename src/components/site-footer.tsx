import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
