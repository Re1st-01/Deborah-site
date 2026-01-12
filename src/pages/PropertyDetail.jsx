import React from 'react'
import { useParams } from 'react-router-dom'
import properties from '../data/properties'

export default function PropertyDetail(){
  const { id } = useParams()
  const prop = properties.find(p=> String(p.id) === id)
  if(!prop) return <div className="container">Imóvel não encontrado.</div>
  return (
    <section className="container">
      <h2>{prop.title}</h2>
      <div className="gallery">
        <img src={prop.images[0]} alt={prop.title} />
      </div>
      <p>{prop.description}</p>
      <p><strong>Valor:</strong> R$ {prop.price.toLocaleString()}</p>
    </section>
  )
}
