import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header(){
  const location = useLocation()
  const hash = typeof window !== 'undefined' ? window.location.hash : ''
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1 className="logo">Deborah — Consultora Imobiliária</h1>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navegação"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Principais seções">
          <Link to="/" className={location.pathname === '/' && !hash ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/empreendimentos" className={location.pathname === '/empreendimentos' ? 'active' : ''} onClick={closeMenu}>Empreendimentos</Link>
          {location.pathname === '/' && (
            <a href="#destaques" className={hash === '#destaques' ? 'active' : ''} onClick={closeMenu}>Destaques</a>
          )}
          <a href="#contato" className={hash === '#contato' ? 'active' : ''} onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    </header>
  )
}
