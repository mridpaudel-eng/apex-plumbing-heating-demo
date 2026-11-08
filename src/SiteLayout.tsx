import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Droplets, MapPin, Menu, Phone, X } from 'lucide-react'

export type PageName = 'home' | 'services' | 'about' | 'contact'

export function SiteHeader({ activePage }: { activePage: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="topline">
        <div className="page-shell topline-inner">
          <span className="topline-location"><MapPin size={13} /> Nuneaton, Warwickshire</span>
          <span className="topline-message"><span className="topline-dot" /> Plumbing &amp; heating for the place you call home</span>
          <a href="/contact" className="topline-link">Get in touch <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="page-shell header-inner">
          <a className="brand" href="/" aria-label="Apex Plumbing and Heating home" onClick={closeMenu}>
            <span className="brand-mark"><span className="brand-mark-a">A</span><Droplets className="brand-mark-drop" size={12} /></span>
            <span className="brand-name">APEX<span>PLUMBING <i>&amp;</i> HEATING</span></span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a className={activePage === 'home' ? 'nav-current' : undefined} href="/" aria-current={activePage === 'home' ? 'page' : undefined} onClick={closeMenu}>Home</a>
            <a className={activePage === 'services' ? 'nav-current' : undefined} href="/services" aria-current={activePage === 'services' ? 'page' : undefined} onClick={closeMenu}>Services <ChevronDown size={13} /></a>
            <a className={activePage === 'about' ? 'nav-current' : undefined} href="/about" aria-current={activePage === 'about' ? 'page' : undefined} onClick={closeMenu}>About</a>
            <a className={activePage === 'contact' ? 'nav-current' : undefined} href="/contact" aria-current={activePage === 'contact' ? 'page' : undefined} onClick={closeMenu}>Contact</a>
            <a className="nav-call" href="/contact" onClick={closeMenu}><Phone size={15} /> Call now <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="brand brand-footer" href="/">
          <span className="brand-mark"><span className="brand-mark-a">A</span><Droplets className="brand-mark-drop" size={12} /></span>
          <span className="brand-name">APEX<span>PLUMBING <i>&amp;</i> HEATING</span></span>
        </a>
        <span>Local plumbing &amp; heating in Nuneaton, UK</span>
        <span>© {new Date().getFullYear()} Apex Plumbing &amp; Heating · Demonstration website</span>
      </div>
    </footer>
  )
}
