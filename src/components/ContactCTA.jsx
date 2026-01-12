import React from 'react'

export default function ContactCTA({ id = 'contato', phone = '5561996810504', defaultText, propertyTitle }){
  const base = defaultText || 'Olá, tenho interesse nos empreendimentos. Poderia me ajudar?'
  const text = propertyTitle ? `${base}\nInteresse: ${propertyTitle}` : base
  const url = `https://wa.me/${phone}?text=` + encodeURIComponent(text)

  return (
    <section id={id} className="contact-cta">
      <h2>Contato</h2>
      <p>Quer saber mais? Clique no botão abaixo e fale diretamente comigo pelo WhatsApp — será um prazer ajudar você.</p>

      <div className="form-actions">
        <a className="btn btn-whatsapp" href={url} target="_blank" rel="noreferrer">
          <span>Falar pelo WhatsApp</span>
        </a>
      </div>
    </section>
  )
}
