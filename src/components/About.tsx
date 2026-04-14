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
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] text-center mb-3">
          About me
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left — portrait */}
          <div className="flex-shrink-0 w-64 md:w-72">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/Mask group.png"
                alt="William portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              About me
            </h2>

            <p className="text-[var(--foreground)]/60 leading-relaxed mb-8 max-w-lg">
              I&apos;m a frontend web developer based in London with over 5 years of
              experience building modern, performant web applications. I love
              turning complex problems into simple, beautiful interfaces. When
              I&apos;m not coding, you&apos;ll find me exploring design trends or hiking
              somewhere scenic.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[var(--foreground)] leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[var(--foreground)]/50 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="flex items-center gap-4 flex-wrap">
              {tools.map((tool) => (
                <div
                  key={tool.alt}
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center hover:scale-110 transition-transform"
                  title={tool.alt}
                >
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
