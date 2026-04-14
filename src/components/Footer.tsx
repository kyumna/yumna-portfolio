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
    <footer style={{ width: '100%', backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" style={{ marginBottom: 32 }}>

          <a href="#home">
            <Image src="/assets/Group 4228.png" alt="William." width={130} height={34} className="h-8 w-auto" />
          </a>

          <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} style={{ fontSize: 13, color: 'var(--fg-60)', textDecoration: 'none' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 10 }}>
            {socials.map((s) => (
              <a key={s.alt} href={s.href} aria-label={s.alt}
                style={{ width: 40, height: 40, borderRadius: 12, overflow: 'hidden', display: 'block' }}>
                <Image src={s.icon} alt={s.alt} width={40} height={40} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', marginBottom: 20 }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ fontSize: 12, color: 'var(--fg-40)' }}>
          <p>© {new Date().getFullYear()} William. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
