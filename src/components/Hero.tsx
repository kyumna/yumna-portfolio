'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Soft gradient blob background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/assets/image 400.png"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Profile avatar */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--border)] mb-5">
        <Image
          src="/assets/profile_img.png"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hi label */}
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/assets/👋🏻.png"
          alt="Wave"
          width={22}
          height={22}
        />
        <span className="text-sm font-medium text-[var(--foreground)]/70">
          Hi I&apos;m William
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--foreground)] max-w-2xl mb-5">
        frontend web developer <br className="hidden sm:block" />
        based in london.
      </h1>

      {/* Sub-description */}
      <p className="text-sm sm:text-base text-[var(--foreground)]/60 max-w-md mb-8 leading-relaxed">
        I design and build beautiful, responsive web experiences.
        Passionate about clean code, great UI, and making ideas come to life.
      </p>

      {/* CTA buttons */}
      <div className="flex items-center gap-5 flex-wrap justify-center">
        <a
          href="/assets/William.png"
          download
          className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
        >
          <Image
            src="/assets/Group 3997.png"
            alt="Download"
            width={16}
            height={16}
            className="invert dark:invert-0"
          />
          Download CV
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        >
          Contact me
          <Image
            src="/assets/Group 4229.png"
            alt="arrow"
            width={16}
            height={16}
            className="opacity-60"
          />
        </a>
      </div>
    </section>
  )
}
