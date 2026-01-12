import React from 'react'

export default function Contact(){
  const PHONE_NUMBER = '+5561996810504'
  const phrase = 'Quer saber mais? Clique no botão abaixo e fale diretamente comigo pelo WhatsApp — será um prazer ajudar você.'
  const defaultText = 'Olá, tenho interesse nos empreendimentos. Poderia me ajudar?'
  const url = `https://wa.me/${PHONE_NUMBER}?text=` + encodeURIComponent(defaultText)

  return (
    <section className="container contact-page">
      <h2>Contato</h2>
      <p>{phrase}</p>

      <div className="form-actions">
        <a className="btn" href={url} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
      </div>
    </section>
  )
}