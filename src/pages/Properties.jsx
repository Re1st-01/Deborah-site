import React from 'react'
import properties from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import ContactCTA from '../components/ContactCTA'

const MAX_SHOW = 10

export default function Properties(){
  const items = properties.slice(0, MAX_SHOW)
  return (
    <>
      <section className="properties-page">
        <div className="container">
          <div className="page-header">
            <h1>Empreendimentos</h1>
            <p className="page-subtitle">Explore nossa seleção de imóveis de qualidade, com localização privilegiada e condições especiais.</p>
          </div>
          
          <div className="grid properties-grid">
            {items.map(p=> (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA phone={'5561996810504'} />
    </>
  )
}
