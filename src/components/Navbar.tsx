"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "How It Works", href: "#workflow" },
  { label: "Live Demo", href: "#demo" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Integration", href: "#integration" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-medidata-blue/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 rounded-lg bg-medidata-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span
                className={`text-lg font-semibold tracking-tight transition-colors ${
                  scrolled ? "text-medidata-dark" : "text-white"
                }`}
              >
                Medidata
              </span>
            </div>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
                scrolled
                  ? "bg-medidata-light text-medidata-blue"
                  : "bg-white/15 text-white/80"
              }`}
            >
              × Devin
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-medidata-accent ${
                  scrolled ? "text-medidata-slate" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-medidata-blue px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-medidata-dark hover:shadow-lg hover:shadow-medidata-blue/25"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={scrolled ? "text-medidata-dark" : "text-white"} size={24} />
            ) : (
              <Menu className={scrolled ? "text-medidata-dark" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-medidata-blue/10 shadow-xl">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-medidata-slate hover:text-medidata-blue transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block rounded-full bg-medidata-blue px-5 py-2.5 text-sm font-semibold text-white text-center mt-3"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
