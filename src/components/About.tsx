import Image from 'next/image'

const stats = [
  { icon: '/assets/briefcase office.png', value: '5+', label: 'Years of experience' },
  { icon: '/assets/Group 4224.png', value: '18+', label: 'Projects completed' },
  { icon: '/assets/Group 4225.png', value: '7+', label: 'Happy clients' },
]

const tools = [
  { src: '/assets/image 392.png', alt: 'Firebase' },
  { src: '/assets/image 393.png', alt: 'MongoDB' },
  { src: '/assets/image 396.png', alt: 'Git' },
  { src: '/assets/image 397.png', alt: 'Figma' },
  { src: '/assets/Group 4226.png', alt: 'VS Code' },
]

export default function About() {
  return (
    <section id="about" style={{ width: '100%', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', textAlign: 'center', marginBottom: 48 }}>
          About me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Portrait */}
          <div style={{ maxWidth: 320, margin: '0 auto', width: '100%' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
              <Image
                src="/assets/Mask group.png"
                alt="Portrait"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Content */}
          <div style={{ minWidth: 0 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--foreground)', marginBottom: 16 }}>
              About me
            </h2>

            <p style={{ color: 'var(--fg-60)', lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
              I&apos;m a frontend web developer based in London with over 5 years of
              experience building modern, performant web applications. I love
              turning complex problems into simple, beautiful interfaces. When
              I&apos;m not coding, you&apos;ll find me exploring design trends or hiking
              somewhere scenic.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 28 }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Image src={stat.icon} alt={stat.label} width={20} height={20} style={{ objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 20, fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>{stat.value}</p>
                    <p style={{ fontSize: 12, color: 'var(--fg-50)', marginTop: 2 }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {tools.map((tool) => (
                <div
                  key={tool.alt}
                  title={tool.alt}
                  style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image src={tool.src} alt={tool.alt} width={24} height={24} style={{ objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
