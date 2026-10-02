import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navigation = [
  { href: "/estudio", label: "El estudio" },
  { href: "/areas", label: "Áreas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={"Inicio — " + siteConfig.name}>
          <Image
            className="brand-logo"
            src="/logo-martinez.svg"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span className="brand-name">{siteConfig.name}</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="header-contact" href="/contacto" prefetch={false}>
          Hablemos <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
