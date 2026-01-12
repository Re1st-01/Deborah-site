import React from 'react'

export default function PropertyCard({property}){
  const phone = '5561996810504'
  const text = `Olá, tenho interesse no ${property.title}. Poderia me ajudar?`
  const url = `https://wa.me/${phone}?text=` + encodeURIComponent(text)

  return (
    <article className="card">
      <img src={property.images[0]} alt={property.title} />
      <div className="card-body">
        <h4>{property.title}</h4>
        {property.description && (
          <p className="card-desc">{property.description}</p>
        )}
        <a className="btn-sm btn-whatsapp-sm" href={url} target="_blank" rel="noreferrer" aria-label={`Tenho interesse no ${property.title}`}>
          <span>Tenho interesse</span>
        </a>
      </div>
    </article>
  )
}
