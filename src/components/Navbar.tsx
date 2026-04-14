'use client'

import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggleTheme, setTheme } from '@/store/themeSlice'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Hire Me', href: '#contact' },
]

export default function Navbar() {
  const dispatch = useAppDispatch()
  const isDark = useAppSelector((s) => s.theme.isDark)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') dispatch(setTheme(true))
  }, [dispatch])

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: scrolled ? 'var(--bg-90)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav
        style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}
        className="px-6 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Image
            src="/assets/Group 4228.png"
            alt="William."
            width={120}
            height={32}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{ color: 'var(--foreground)', fontSize: 14, fontWeight: 500 }}
                className="hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle dark mode"
            style={{ backgroundColor: 'var(--muted)', borderRadius: '50%', padding: 8 }}
          >
            {isDark
              ? <Sun size={16} style={{ color: 'var(--foreground)' }} />
              : <Moon size={16} style={{ color: 'var(--foreground)' }} />
            }
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center"
            style={{
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
              fontSize: 13,
              fontWeight: 600,
              padding: '8px 20px',
              borderRadius: 999,
            }}
          >
            Contact Me
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen
              ? <X size={20} style={{ color: 'var(--foreground)' }} />
              : <Menu size={20} style={{ color: 'var(--foreground)' }} />
            }
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--foreground)', fontSize: 14, fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center rounded-full py-2"
            style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)', fontSize: 13, fontWeight: 600 }}
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  )
}
