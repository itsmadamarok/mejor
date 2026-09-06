'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center bg-[#111113] text-white">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt={`${CONSTANTS.BRAND_NAME} - Página No Encontrada Fondo`}
          className="w-full h-full object-cover opacity-60 brightness-[0.35]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113]/10 via-[#111113]/75 to-[#111113]/95" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EAB308]/10 rounded-full blur-[140px] animate-pulse pointer-events-none" />

      {/* Main Container Perfectly Centered Vertically & Horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* 404 Number Layout Container */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none flex items-center justify-center">
              <span className="text-[#CA1421] drop-shadow-[0_0_35px_rgba(202,20,33,0.4)]">4</span>
              <span className="text-[#EAB308] drop-shadow-[0_0_35px_rgba(234,179,8,0.4)]">0</span>
              <span className="text-[#CA1421] drop-shadow-[0_0_35px_rgba(202,20,33,0.4)]">4</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Página No Encontrada
          </h1>
          
          <div className="w-24 h-1.5 bg-[#EAB308] mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
          
          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#18181b] border border-white/10 hover:border-[#EAB308] hover:bg-[#202024] transition-all duration-300 shadow-xl"
            >
              <Home className="w-5 h-5 text-[#EAB308] group-hover:scale-110 transition-transform" />
              <span className="text-white/90 text-xs font-black uppercase tracking-wider">Inicio</span>
            </Link>
            
            <Link
              href="/pricing"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#18181b] border border-white/10 hover:border-[#EAB308] hover:bg-[#202024] transition-all duration-300 shadow-xl"
            >
              <Tv className="w-5 h-5 text-[#EAB308] group-hover:scale-110 transition-transform" />
              <span className="text-white/90 text-xs font-black uppercase tracking-wider">Tarifas</span>
            </Link>
            
            <Link
              href="/instalacion"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#18181b] border border-white/10 hover:border-[#EAB308] hover:bg-[#202024] transition-all duration-300 shadow-xl"
            >
              <Film className="w-5 h-5 text-[#EAB308] group-hover:scale-110 transition-transform" />
              <span className="text-white/90 text-xs font-black uppercase tracking-wider">Instalación</span>
            </Link>
            
            <Link
              href="/soporte"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#18181b] border border-white/10 hover:border-[#EAB308] hover:bg-[#202024] transition-all duration-300 shadow-xl"
            >
              <Search className="w-5 h-5 text-[#EAB308] group-hover:scale-110 transition-transform" />
              <span className="text-white/90 text-xs font-black uppercase tracking-wider">Blog</span>
            </Link>
          </div>

          {/* Main Action Control Elements */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#EAB308] text-black font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#ca9a06] hover:scale-105 shrink-0 shadow-[0_10px_25px_rgba(234,179,8,0.3)]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Volver al Inicio
            </Link>
            
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#18181b] border-2 border-white/20 text-white font-black uppercase tracking-widest text-sm transition-all duration-300 hover:border-[#EAB308] hover:bg-[#202024] hover:scale-105 shrink-0 shadow-xl"
            >
              Ver Planes
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}