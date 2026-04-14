'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px 40px', overflow: 'hidden', width: '100%' }}
    >
      {/* Background blob */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Image src="/assets/image 400.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.5 }} priority />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Profile avatar */}
        <div style={{ width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border)', marginBottom: 20, position: 'relative', flexShrink: 0 }}>
          <Image src="/assets/profile_img.png" alt="Profile" fill style={{ objectFit: 'cover' }} priority />
        </div>

        {/* Hi label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <Image src="/assets/👋🏻.png" alt="Wave" width={22} height={22} />
          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-60)' }}>Hi I&apos;m William</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.15, color: 'var(--foreground)', maxWidth: 740, marginBottom: 20 }}>
          frontend web developer <br />
          based in london.
        </h1>

        {/* Description */}
        <p style={{ fontSize: 15, color: 'var(--fg-60)', maxWidth: 420, marginBottom: 36, lineHeight: 1.7 }}>
          I design and build beautiful, responsive web experiences.
          Passionate about clean code, great UI, and making ideas come to life.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#"
            download
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: 'var(--foreground)', color: 'var(--background)', fontSize: 14, fontWeight: 600, padding: '12px 24px', borderRadius: 999, textDecoration: 'none' }}
          >
            <Image src="/assets/Group 3997.png" alt="Download" width={16} height={16} style={{ filter: 'invert(1)' }} />
            Download CV
          </a>

          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 500, color: 'var(--foreground)', textDecoration: 'none' }}
          >
            Contact me
            <Image src="/assets/Group 4229.png" alt="arrow" width={16} height={16} style={{ opacity: 0.6 }} />
          </a>
        </div>
      </div>
    </section>
  )
}
