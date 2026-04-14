import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Hire Me', href: '#contact' },
]

const socials = [
  { icon: '/assets/Group 4250.png', alt: 'Behance', href: '#' },
  { icon: '/assets/Group 4251.png', alt: 'Android', href: '#' },
  { icon: '/assets/Group 4252.png', alt: 'Web', href: '#' },
  { icon: '/assets/Group 4253.png', alt: 'Gallery', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--muted)] border-t border-[var(--border)] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          {/* Logo */}
          <a href="#home">
            <Image
              src="/assets/Group 4228.png"
              alt="William."
              width={130}
              height={34}
              className="h-8 w-auto"
            />
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                aria-label={s.alt}
                className="w-10 h-10 rounded-xl overflow-hidden hover:scale-110 transition-transform"
              >
                <Image
                  src={s.icon}
                  alt={s.alt}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--foreground)]/40">
          <p>© {new Date().getFullYear()} William. All rights reserved.</p>
          <p>Designed &amp; built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
