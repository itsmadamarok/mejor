'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control body scroll when mobile drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Automatically collapse menu upon route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Planes', href: '/planes' },
    { name: 'Instalación', href: '/instalacion' },
    { name: 'Soporte', href: '/soporte' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#111113]/95 backdrop-blur-md border-b-2 border-[#CA1421] py-2 shadow-2xl' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group" aria-label={`${CONSTANTS.BRAND_NAME} Inicio`}>
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/img/iptv-logo.webp"
                    alt={`${CONSTANTS.BRAND_NAME} - Mejor IPTV Provider España Logo`}
                    width={160}
                    height={40}
                    className="object-contain h-full w-auto"
                    loading="eager"
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Navegación principal">
              <ul className="flex items-center gap-2 bg-[#111113] px-5 py-2 rounded-full border-2 border-white/10 shadow-inner">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`font-black uppercase tracking-widest text-xs transition-all px-4 py-2 rounded-full inline-block ${
                          active 
                            ? 'bg-[#CA1421] text-white shadow-md' 
                            : 'text-white/80 hover:text-[#FFC400] hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <Link 
                href="/planes" 
                className="px-6 py-2.5 rounded-full border-2 border-[#FFC400] bg-[#CA1421] text-white font-black tracking-widest uppercase text-xs hover:bg-[#FFC400] hover:text-[#111113] transition-all shadow-lg"
              >
                Empezar Ya
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2 focus:outline-none z-50 relative bg-[#111113]/80 rounded-xl border border-white/10"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-[#FFC400]" /> : <Menu className="w-6 h-6 text-[#FFC400]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[#111113] transition-all duration-300 md:hidden flex flex-col justify-center px-6 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        <div className="space-y-4 w-full max-w-sm mx-auto pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-center px-6 py-4 rounded-2xl text-lg font-black tracking-wider uppercase transition-all ${
                isActive(link.href) 
                  ? 'text-white bg-[#CA1421] shadow-lg' 
                  : 'text-white/90 bg-white/5 hover:bg-white/10 hover:text-[#FFC400]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full flex pt-4">
            <Link 
              href="/planes"
              onClick={() => setIsOpen(false)}
              className="w-full text-center whitespace-nowrap px-6 py-4 rounded-2xl bg-[#CA1421] text-white border-2 border-[#FFC400] font-black text-lg tracking-widest uppercase shadow-2xl transition-transform hover:scale-105"
            >
              Empezar Ya
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}