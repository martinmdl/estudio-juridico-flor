import Link from "next/link";
import { siteConfig } from "@/config/site";

const navigation = [
  { href: "#estudio", label: "El estudio" },
  { href: "#areas", label: "Áreas" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={siteConfig.name}>
          <span className="brand-mark" aria-hidden="true">F</span>
          <span className="brand-name">{siteConfig.name}</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="header-contact" href="#contacto">Hablemos <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
