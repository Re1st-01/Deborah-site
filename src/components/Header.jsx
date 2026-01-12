import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header(){
  const location = useLocation()
  const hash = typeof window !== 'undefined' ? window.location.hash : ''
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1 className="logo">Deborah — Consultora Imobiliária</h1>
        </div>

        <nav className="main-nav" aria-label="Principais seções">
          <Link to="/" className={location.pathname === '/' && !hash ? 'active' : ''}>Home</Link>
          <Link to="/empreendimentos" className={location.pathname === '/empreendimentos' ? 'active' : ''}>Empreendimentos</Link>
          {location.pathname === '/' && (
            <a href="#destaques" className={hash === '#destaques' ? 'active' : ''}>Destaques</a>
          )}
          <a href="#contato" className={hash === '#contato' ? 'active' : ''}>Contato</a>
        </nav>
      </div>
    </header>
  )
}
