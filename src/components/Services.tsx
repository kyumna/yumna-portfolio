import Image from 'next/image'

const services = [
  {
    icon: '/assets/Group 4250.png',
    title: 'Web Design',
    description: 'Clean, modern websites crafted with attention to detail, usability, and brand identity.',
  },
  {
    icon: '/assets/Group 4251.png',
    title: 'Mobile App',
    description: 'Cross-platform mobile experiences that feel native, fast, and intuitive on any device.',
  },
  {
    icon: '/assets/Group 4252.png',
    title: 'UI/UX Design',
    description: 'User-centered design that balances aesthetics with seamless, delightful interactions.',
  },
  {
    icon: '/assets/Group 4253.png',
    title: 'Graphics Design',
    description: 'Eye-catching visuals, brand assets, and illustrations that communicate your story.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ width: '100%', padding: '96px 24px', backgroundColor: 'var(--muted)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', textAlign: 'center', marginBottom: 12 }}>
          What I do
        </p>

        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--foreground)', textAlign: 'center', marginBottom: 12 }}>
          My services
        </h2>

        <p style={{ fontSize: 14, color: 'var(--fg-50)', textAlign: 'center', maxWidth: 420, margin: '0 auto 56px' }}>
          I offer a range of creative and technical services to help bring your digital vision to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              style={{ backgroundColor: 'var(--card)', borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, overflow: 'hidden', flexShrink: 0 }}>
                <Image src={service.icon} alt={service.title} width={56} height={56} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)' }}>{service.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--fg-50)', lineHeight: 1.7 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
