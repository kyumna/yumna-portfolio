'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{ position: 'relative', width: '100%', padding: '96px 24px', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Image src="/assets/image 400.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.4 }} />
      </div>

      <div style={{ maxWidth: 560, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', textAlign: 'center', marginBottom: 12 }}>
          Contact me
        </p>

        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--foreground)', textAlign: 'center', marginBottom: 12 }}>
          Get in touch
        </h2>

        <p style={{ fontSize: 14, color: 'var(--fg-50)', textAlign: 'center', marginBottom: 32 }}>
          Have a project in mind or just want to say hello? Fill in the form and I&apos;ll get back to you.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/assets/mail_icon.png" alt="Mail" width={24} height={24} style={{ objectFit: 'contain' }} />
          </div>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>Message sent!</p>
            <p style={{ fontSize: 14, color: 'var(--fg-50)' }}>Thanks for reaching out. I&apos;ll reply soon.</p>
            <button onClick={() => setSent(false)} style={{ marginTop: 24, fontSize: 13, color: 'var(--accent)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input
              type="text" name="name" placeholder="Your name" required
              value={form.name} onChange={handleChange}
              style={{ width: '100%', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '12px 16px', fontSize: 14, color: 'var(--foreground)', outline: 'none' }}
            />
            <input
              type="email" name="email" placeholder="Your email" required
              value={form.email} onChange={handleChange}
              style={{ width: '100%', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '12px 16px', fontSize: 14, color: 'var(--foreground)', outline: 'none' }}
            />
            <textarea
              name="message" placeholder="Your message" required rows={5}
              value={form.message} onChange={handleChange}
              style={{ width: '100%', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '12px 16px', fontSize: 14, color: 'var(--foreground)', outline: 'none', resize: 'none' }}
            />
            <button
              type="submit"
              style={{ width: '100%', backgroundColor: 'var(--foreground)', color: 'var(--background)', fontSize: 14, fontWeight: 600, padding: '14px', borderRadius: 999, border: 'none', cursor: 'pointer', marginTop: 4 }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
