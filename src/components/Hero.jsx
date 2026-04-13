import { useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Sanatana Dharma sacred symbols
const sacredSymbols = ['ॐ', '🙏', '🪔', '☸', '🔱', '🐚', '📿', '🌸'];
const navagrahaNames = ['సూర్యుడు', 'చంద్రుడు', 'కుజుడు', 'బుధుడు', 'గురుడు', 'శుక్రుడు', 'శని', 'రాహు', 'కేతు'];
const sacredTexts = ['ॐ नमः शिवाय', 'श्री गणेशाय नमः', 'ॐ गुरवे नमः', 'ॐ नमो नारायणाय', 'सर्वे भवन्तु सुखिनः'];

// Floating sacred symbol component
function FloatingSacred({ symbol, style }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 6}s`,
      }}
    >
      <span style={{ fontSize: style.fontSize || '2rem', opacity: style.opacity || 0.12 }}>
        {symbol}
      </span>
    </div>
  );
}

// Floating Om symbol with glow
function FloatingOm({ style }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
      }}
    >
      <span
        className="font-decorative"
        style={{
          fontSize: style.fontSize || '3rem',
          color: 'rgba(255, 197, 38, 0.08)',
          textShadow: '0 0 20px rgba(255, 197, 38, 0.15)',
        }}
      >
        ॐ
      </span>
    </div>
  );
}

// Animated Diya flame
function Diya({ style }) {
  return (
    <div
      className="absolute select-none pointer-events-none"
      style={style}
    >
      <div className="relative flex flex-col items-center" style={{ opacity: 0.15 }}>
        {/* Flame */}
        <div
          className="w-3 h-5 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(ellipse at bottom, #FF9800, #FFC526, transparent)',
            filter: 'blur(1px)',
            animationDuration: `${1 + Math.random() * 1.5}s`,
          }}
        />
        {/* Diya base */}
        <div
          className="w-5 h-2 rounded-b-full mt-[-2px]"
          style={{ background: 'rgba(255, 152, 0, 0.4)' }}
        />
      </div>
    </div>
  );
}

// Lotus SVG component
function Lotus({ style, size = 60 }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${10 + Math.random() * 8}s`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity: 0.06 }}>
        {/* Lotus petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="35"
            rx="12"
            ry="28"
            fill="none"
            stroke="#FFC526"
            strokeWidth="1"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
        {/* Center circle */}
        <circle cx="50" cy="50" r="8" fill="none" stroke="#FF9800" strokeWidth="1" />
        <circle cx="50" cy="50" r="4" fill="rgba(255, 197, 38, 0.3)" />
      </svg>
    </div>
  );
}

// Floating Sanskrit text
function FloatingShloka({ text, style }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 12}s`,
        animationDuration: `${12 + Math.random() * 8}s`,
      }}
    >
      <span
        className="font-decorative italic whitespace-nowrap"
        style={{
          fontSize: '0.75rem',
          color: 'rgba(255, 197, 38, 0.06)',
          letterSpacing: '0.15em',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  // Sacred symbol positions (memoized for stable render)
  const sacredPositions = useMemo(() => 
    sacredSymbols.map((symbol, i) => ({
      symbol,
      style: {
        left: `${3 + (i % 4) * 24 + Math.random() * 12}%`,
        top: `${8 + Math.floor(i / 4) * 40 + Math.random() * 20}%`,
        fontSize: `${1.5 + Math.random() * 1.5}rem`,
        opacity: 0.08 + Math.random() * 0.08,
      },
    })),
  []);

  // Om positions
  const omPositions = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      style: {
        left: `${10 + i * 20 + Math.random() * 10}%`,
        top: `${15 + Math.random() * 65}%`,
        fontSize: `${2 + Math.random() * 2.5}rem`,
      },
    })),
  []);

  // Diya positions
  const diyaPositions = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 85}%`,
    })),
  []);

  // Lotus positions
  const lotusPositions = useMemo(() => [
    { left: '5%', top: '15%' },
    { left: '85%', top: '10%' },
    { left: '15%', top: '75%' },
    { left: '75%', top: '70%' },
    { left: '45%', top: '5%' },
  ], []);

  // Shloka positions
  const shlokaPositions = useMemo(() => 
    sacredTexts.map((text, i) => ({
      text,
      style: {
        left: `${5 + Math.random() * 60}%`,
        top: `${10 + i * 18 + Math.random() * 8}%`,
      },
    })),
  []);

  // Small twinkling lights (like diya lights in distance)
  const lights = useMemo(() => 
    Array.from({ length: 40 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0.15 + Math.random() * 0.4,
      width: `${1 + Math.random() * 2}px`,
      height: `${1 + Math.random() * 2}px`,
    })),
  []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Sanatana Dharma Background */}
      <div className="absolute inset-0">
        {/* Base gradient - warm saffron-dark tones */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0A0A1A 0%, #0D0820 25%, #120D1E 50%, #0D0A18 75%, #0A0A1A 100%)'
        }} />
        
        {/* Sacred warm radial glows */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-saffron-500/6 via-gold-500/3 to-transparent rounded-full -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-gold-500/5 via-saffron-500/3 to-transparent rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-sacred-red/3 via-transparent to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Sri Yantra sacred geometry in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.025] animate-spin-slow" style={{ animationDuration: '120s' }}>
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Outer circle (Bhupura) */}
            <circle cx="200" cy="200" r="195" fill="none" stroke="#FFC526" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="#FFC526" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="165" fill="none" stroke="#FF9800" strokeWidth="0.3" />
            {/* Lotus petals outer ring - 16 petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <ellipse key={`outer-${i}`} cx="200" cy="60" rx="18" ry="45" fill="none" stroke="#FFC526" strokeWidth="0.3" transform={`rotate(${i * 22.5} 200 200)`} />
            ))}
            {/* Inner lotus - 8 petals */}
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse key={`inner-${i}`} cx="200" cy="100" rx="14" ry="35" fill="none" stroke="#FF9800" strokeWidth="0.3" transform={`rotate(${i * 45} 200 200)`} />
            ))}
            {/* Upward triangles (Shiva) */}
            <polygon points="200,50 320,310 80,310" fill="none" stroke="#FFC526" strokeWidth="0.4" />
            <polygon points="200,70 300,290 100,290" fill="none" stroke="#FFC526" strokeWidth="0.3" />
            <polygon points="200,90 280,270 120,270" fill="none" stroke="#FFC526" strokeWidth="0.3" />
            <polygon points="200,110 260,250 140,250" fill="none" stroke="#FFC526" strokeWidth="0.3" />
            {/* Downward triangles (Shakti) */}
            <polygon points="200,350 80,90 320,90" fill="none" stroke="#FF9800" strokeWidth="0.4" />
            <polygon points="200,330 100,110 300,110" fill="none" stroke="#FF9800" strokeWidth="0.3" />
            <polygon points="200,310 120,130 280,130" fill="none" stroke="#FF9800" strokeWidth="0.3" />
            <polygon points="200,290 140,150 260,150" fill="none" stroke="#FF9800" strokeWidth="0.3" />
            {/* Bindu (center point) */}
            <circle cx="200" cy="200" r="5" fill="rgba(255, 197, 38, 0.3)" />
            <circle cx="200" cy="200" r="2" fill="rgba(255, 197, 38, 0.5)" />
          </svg>
        </div>

        {/* Twinkling golden lights (like distant diyas) */}
        {lights.map((light, i) => (
          <div
            key={`light-${i}`}
            className="star"
            style={{
              ...light,
              background: i % 3 === 0 ? '#FFC526' : i % 3 === 1 ? '#FF9800' : '#FFE082',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Floating Om symbols */}
        {omPositions.map((item, i) => (
          <FloatingOm key={`om-${i}`} {...item} />
        ))}

        {/* Floating sacred symbols */}
        {sacredPositions.map((item, i) => (
          <FloatingSacred key={`sacred-${i}`} {...item} />
        ))}

        {/* Animated Diyas */}
        {diyaPositions.map((pos, i) => (
          <Diya key={`diya-${i}`} style={pos} />
        ))}

        {/* Lotus patterns */}
        {lotusPositions.map((pos, i) => (
          <Lotus key={`lotus-${i}`} style={pos} size={50 + Math.random() * 40} />
        ))}

        {/* Floating Sanskrit shlokas */}
        {shlokaPositions.map((item, i) => (
          <FloatingShloka key={`shloka-${i}`} {...item} />
        ))}

        {/* Navagraha names floating subtly */}
        {navagrahaNames.map((name, i) => (
          <div
            key={`graha-${i}`}
            className="absolute select-none pointer-events-none animate-float"
            style={{
              left: `${5 + (i % 3) * 35 + Math.random() * 10}%`,
              top: `${10 + Math.floor(i / 3) * 28 + Math.random() * 10}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            <span style={{ fontSize: '0.65rem', color: 'rgba(255, 197, 38, 0.05)', letterSpacing: '0.1em' }}>
              {name}
            </span>
          </div>
        ))}

        {/* Decorative sacred rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/[0.03] rounded-full animate-spin-slow" style={{ animationDuration: '60s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-saffron-500/[0.02] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '80s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in">
              {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((badge, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold border border-gold-500/30 text-gold-400 bg-gold-500/5 backdrop-blur-sm"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  ✦ {badge}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6 animate-slide-up">
              <span className="text-sacred-white block mb-3">{t.hero.title}</span>
              <span className="gradient-text-shimmer block mt-4">{t.hero.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#contact"
                id="hero-book-consultation"
                className="glow-button text-center text-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t.hero.cta1}
                </span>
              </a>
              <a
                href="https://wa.me/917799099069"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp"
                className="relative px-8 py-4 rounded-full font-semibold text-center text-lg border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ isolation: 'auto', mixBlendMode: 'normal' }}>
            <div className="relative" style={{ isolation: 'auto' }}>
              {/* Outer sacred geometry mandala */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[550px] sm:h-[550px] lg:w-[600px] lg:h-[600px] opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow" style={{ animationDuration: '40s' }}>
                  {/* Outer circles */}
                  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#goldGrad)" strokeWidth="0.4" />
                  <circle cx="100" cy="100" r="85" fill="none" stroke="url(#goldGrad)" strokeWidth="0.3" strokeDasharray="4 6" />
                  <circle cx="100" cy="100" r="75" fill="none" stroke="url(#goldGrad)" strokeWidth="0.3" />
                  {/* Sacred lines */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line key={i} x1="100" y1="5" x2="100" y2="195" stroke="url(#goldGrad)" strokeWidth="0.15" transform={`rotate(${i * 30} 100 100)`} />
                  ))}
                  {/* Inner flower of life pattern */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <circle key={`flower-${i}`} cx={100 + 25 * Math.cos((i * 60 * Math.PI) / 180)} cy={100 + 25 * Math.sin((i * 60 * Math.PI) / 180)} r="25" fill="none" stroke="url(#goldGrad)" strokeWidth="0.2" />
                  ))}
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFC526" />
                      <stop offset="50%" stopColor="#FF9800" />
                      <stop offset="100%" stopColor="#FFC526" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Pulsing glow layers */}
              <div className="absolute inset-0 -m-16 bg-gradient-radial from-gold-500/15 via-saffron-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute inset-0 -m-8 bg-gradient-radial from-saffron-500/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

              {/* Animated glow ring */}
              <div className="absolute inset-0 -m-4 rounded-full animate-spin-slow" style={{ animationDuration: '8s', background: 'conic-gradient(from 0deg, transparent, rgba(255,197,38,0.3), transparent, rgba(255,152,0,0.3), transparent)' }} />

              {/* Decorative dotted rings */}
              <div className="absolute inset-0 -m-10 border border-dashed border-gold-500/15 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }} />
              <div className="absolute inset-0 -m-16 border border-dotted border-saffron-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />
              
              {/* Layered zodiac wheel: outer ring rotates, symbols and center stay static */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[520px] lg:h-[520px]"
                role="img"
                aria-label="Astrologer Venkateswarlu zodiac wheel"
              >
                <img
                  src="/images/zodiac-wheel/outer-ring.png"
                  alt=""
                  aria-hidden="true"
                  className="zodiac-wheel-layer zodiac-wheel-layer-outer"
                />
                <img
                  src="/images/zodiac-wheel/center-image.png"
                  alt=""
                  aria-hidden="true"
                  className="zodiac-wheel-layer zodiac-wheel-layer-center"
                />
                <img
                  src="/images/zodiac-wheel/symbols-ring.png"
                  alt=""
                  aria-hidden="true"
                  className="zodiac-wheel-layer zodiac-wheel-layer-symbols"
                />
              </div>

              {/* Corner accent glows */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold-400 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-saffron-500 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-3 bg-saffron-500 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />

              {/* Orbiting celestial bodies */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDuration: '10s' }}>
                <span className="text-2xl drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 6px rgba(255,197,38,0.6))' }}>☉</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDuration: '16s', animationDelay: '-4s' }}>
                <span className="text-xl text-gold-300" style={{ filter: 'drop-shadow(0 0 6px rgba(255,197,38,0.5))' }}>☽</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDuration: '22s', animationDelay: '-10s' }}>
                <span className="text-lg text-saffron-400" style={{ filter: 'drop-shadow(0 0 4px rgba(255,152,0,0.5))' }}>✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold-500/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
