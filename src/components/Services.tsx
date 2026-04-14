import Image from 'next/image'

const services = [
  {
    icon: '/assets/Group 4250.png',
    title: 'Web Design',
    description:
      'Clean, modern websites crafted with attention to detail, usability, and brand identity.',
  },
  {
    icon: '/assets/Group 4251.png',
    title: 'Mobile App',
    description:
      'Cross-platform mobile experiences that feel native, fast, and intuitive on any device.',
  },
  {
    icon: '/assets/Group 4252.png',
    title: 'UI/UX Design',
    description:
      'User-centered design that balances aesthetics with seamless, delightful interactions.',
  },
  {
    icon: '/assets/Group 4253.png',
    title: 'Graphics Design',
    description:
      'Eye-catching visuals, brand assets, and illustrations that communicate your story.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] text-center mb-3">
          What I do
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center mb-4">
          My services
        </h2>

        <p className="text-sm text-[var(--foreground)]/50 text-center max-w-md mx-auto mb-14">
          I offer a range of creative and technical services to help bring your
          digital vision to life.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[var(--card)] rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--foreground)]/55 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
