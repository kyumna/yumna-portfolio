'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">

      {/* Soft background blob */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/assets/image 400.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="max-w-xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] text-center mb-3">
          Contact me
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] text-center mb-4">
          Get in touch
        </h2>

        <p className="text-sm text-[var(--foreground)]/50 text-center max-w-sm mx-auto mb-10">
          Have a project in mind or just want to say hello? Fill in the form
          and I&apos;ll get back to you as soon as possible.
        </p>

        {/* Mail icon */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[var(--muted)] flex items-center justify-center">
            <Image
              src="/assets/mail_icon.png"
              alt="Mail"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </div>

        {sent ? (
          <div className="text-center py-10">
            <p className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Message sent!
            </p>
            <p className="text-sm text-[var(--foreground)]/50">
              Thanks for reaching out. I&apos;ll reply soon.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm text-[var(--accent)] underline underline-offset-2"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--foreground)]/30 outline-none focus:border-[var(--foreground)] transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--foreground)]/30 outline-none focus:border-[var(--foreground)] transition-colors"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--foreground)]/30 outline-none focus:border-[var(--foreground)] transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold py-3.5 rounded-full hover:opacity-80 transition-opacity mt-1"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
