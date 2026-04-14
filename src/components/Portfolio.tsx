import Image from 'next/image'

const projects = [
  {
    image: '/assets/Rectangle 41969.png',
    title: 'Payment App',
    category: 'Mobile Design',
  },
  {
    image: '/assets/Rectangle 41971.png',
    title: 'Maps Navigation',
    category: 'Mobile Design',
  },
  {
    image: '/assets/Rectangle 41973.png',
    title: 'Web Portfolio',
    category: 'Web Design',
  },
  {
    image: '/assets/Rectangle 41975.png',
    title: 'UX Research',
    category: 'UI/UX Design',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] text-center mb-3">
          My portfolio
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center mb-4">
          My latest work
        </h2>

        <p className="text-sm text-[var(--foreground)]/50 text-center max-w-md mx-auto mb-14">
          A selection of projects I&apos;ve designed and built — from mobile apps
          to full web experiences.
        </p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* Project image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

              {/* Info + arrow — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-white/70 mb-1">{project.category}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/assets/Vector.png"
                      alt="open"
                      width={12}
                      height={12}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)] text-sm font-medium px-7 py-3 rounded-full hover:bg-[var(--muted)] transition-colors">
            Show more
            <Image
              src="/assets/Group 4229.png"
              alt="arrow"
              width={14}
              height={14}
              className="opacity-60"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
