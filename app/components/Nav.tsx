"use client";

import { useEffect, useState } from "react";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";

const LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Agencia" },
  { href: "#consultoria", label: "Consultoría" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : undefined}>
      <a href="#top" className="logo-nav" aria-label="Mandinga Comunicación — inicio">
        {/* Logo served directly (images.unoptimized) — fixed height, auto width */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Mandinga Comunicación" className="logo-img" />
      </a>

      <button
        className="nav-toggle"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <Cancel01Icon size={26} /> : <Menu01Icon size={26} />}
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
