import React, { useState, useRef, useEffect } from 'react'
import PropertyCard from './PropertyCard'

export default function FeaturedCarousel({ featured = [], externalIndex = 0, onIndexChange = null }){
  const [localIndex, setLocalIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const draggingRef = useRef(false)
  const viewportRef = useRef(null)

  const index = onIndexChange ? externalIndex : localIndex
  const setIndex = onIndexChange ? onIndexChange : setLocalIndex

  if(!featured || featured.length === 0) return null

  function prev(){
    setIndex(i => (i - 1 + featured.length) % featured.length)
  }
  function next(){
    setIndex(i => (i + 1) % featured.length)
  }

  useEffect(()=>{
    const vp = viewportRef.current
    if(!vp) return
    function onKey(e){
      if(e.key === 'ArrowLeft') prev()
      if(e.key === 'ArrowRight') next()
    }
    vp.addEventListener('keydown', onKey)
    return ()=> vp.removeEventListener('keydown', onKey)
  },[viewportRef, featured.length])

  function handleTouchStart(e){
    const t = e.touches[0]
    startXRef.current = t.clientX
    startYRef.current = t.clientY
    draggingRef.current = true
    setDragX(0)
  }

  function handleTouchMove(e){
    if(!draggingRef.current) return
    const t = e.touches[0]
    const deltaX = t.clientX - startXRef.current
    const deltaY = t.clientY - startYRef.current
    if(Math.abs(deltaY) > Math.abs(deltaX)) return
    e.preventDefault()
    setDragX(deltaX)
  }

  function handleTouchEnd(){
    if(!draggingRef.current) return
    draggingRef.current = false
    const viewportWidth = viewportRef.current?.clientWidth || window.innerWidth
    const threshold = Math.max(50, viewportWidth * 0.12)
    if(dragX <= -threshold){
      next()
    }else if(dragX >= threshold){
      prev()
    }
    setDragX(0)
  }

  const transform = `translateX(calc(-${index * 100}% + ${dragX}px))`

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel-viewport" ref={viewportRef}
        tabIndex={0}
        role="group"
        aria-label="Destaques" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-slides" style={{ transform }}>
          {featured.map((p)=> (
            <div key={p.id} className="carousel-slide">
              <PropertyCard property={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators" role="tablist" aria-label="Indicadores do carrossel">
        {featured.map((f,i)=> (
          <button key={f.id}
            className={`indicator ${i===index? 'active':''}`}
            onClick={()=>setIndex(i)}
            role="tab"
            aria-selected={i===index}
            aria-controls={`slide-${f.id}`}
            aria-label={`Ir para ${f.title}`}
          />
        ))}
      </div>
    </div>
  )
}
