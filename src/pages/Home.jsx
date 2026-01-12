import React from 'react'
import { Link } from 'react-router-dom'
import properties from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import ContactCTA from '../components/ContactCTA'

export default function Home(){
  const featuredTitles = [
    'Total Ville Planaltina',
    'Total Ville Ikeda',
    'Total Ville Conviver',
    'Recanto dos Pássaros',
    'Singulare Home Riva',
    'Total Ville Ipes'
  ]

  const featured = featuredTitles.map(t => properties.find(p => p.title === t)).filter(Boolean)
  const [currentPage, setCurrentPage] = React.useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(featured.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const displayedFeatured = featured.slice(startIndex, startIndex + itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const PHONE_NUMBER = '5561996810504'
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-inner">
            <div className="hero-text">
              <h1>Encontre o imóvel ideal com a Deborah</h1>
              <p className="lead">Consultoria personalizada, empreendimentos selecionados e atendimento de confiança — agende uma visita ou solicite mais informações.</p>
              <div className="hero-ctas">
                <Link to="/empreendimentos" className="btn btn-lg">Ver empreendimentos</Link>
                <a href="#contato" className="btn btn-outline">Fale com a Deborah</a>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-section" id="destaques">
          <div className="featured-header">
            <div className="featured-title-group">
              <h2>Destaques</h2>
              <p>Conheça nossos melhores empreendimentos</p>
            </div>
          </div>
          <div className="featured-grid">
            {displayedFeatured.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="featured-navigation">
              <button 
                className="btn-nav"
                onClick={prevPage}
                aria-label="Anterior"
              >
                ‹
              </button>
              <div className="nav-indicators">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`nav-indicator ${i === currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Ir para página ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                className="btn-nav"
                onClick={nextPage}
                aria-label="Próximo"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      <ContactCTA phone={PHONE_NUMBER} />
    </>
  )
}
