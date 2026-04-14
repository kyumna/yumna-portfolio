import Image from 'next/image'

const projects = [
  { image: '/assets/Rectangle 41969.png', title: 'Payment App', category: 'Mobile Design' },
  { image: '/assets/Rectangle 41971.png', title: 'Maps Navigation', category: 'Mobile Design' },
  { image: '/assets/Rectangle 41973.png', title: 'Web Portfolio', category: 'Web Design' },
  { image: '/assets/Rectangle 41975.png', title: 'UX Research', category: 'UI/UX Design' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ width: '100%', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', textAlign: 'center', marginBottom: 12 }}>
          My portfolio
        </p>

        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--foreground)', textAlign: 'center', marginBottom: 12 }}>
          My latest work
        </h2>

        <p style={{ fontSize: 14, color: 'var(--fg-50)', textAlign: 'center', maxWidth: 420, margin: '0 auto 56px' }}>
          A selection of projects I&apos;ve designed and built — from mobile apps to full web experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group"
              style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5', cursor: 'pointer' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                className="group-hover:scale-105"
              />
              <div
                className="group-hover:opacity-100"
                style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.3s' }}
              />
              <div
                className="group-hover:opacity-100 group-hover:translate-y-0"
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, opacity: 0, transform: 'translateY(8px)', transition: 'all 0.3s', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
              >
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>{project.category}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{project.title}</h3>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Image src="/assets/Vector.png" alt="open" width={12} height={12} style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <button
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid var(--border)', color: 'var(--foreground)', fontSize: 13, fontWeight: 500, padding: '10px 28px', borderRadius: 999, backgroundColor: 'transparent', cursor: 'pointer' }}
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  )
}
