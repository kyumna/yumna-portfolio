'use client'

import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggleTheme } from '@/store/themeSlice'

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

  // Apply dark class + persist to localStorage
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

  // Read persisted preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') dispatch({ type: 'theme/setTheme', payload: true })
  }, [dispatch])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors"
          >
            {isDark ? (
              <Sun size={18} className="text-[var(--foreground)]" />
            ) : (
              <Moon size={18} className="text-[var(--foreground)]" />
            )}
          </button>

          {/* Contact Me button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
          >
            Contact Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} className="text-[var(--foreground)]" />
            ) : (
              <Menu size={20} className="text-[var(--foreground)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center bg-[var(--foreground)] text-[var(--background)] text-sm font-medium px-5 py-2 rounded-full"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  )
}
