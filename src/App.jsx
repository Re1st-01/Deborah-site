import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Properties from './pages/Properties'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/empreendimentos" element={<Properties/>} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat phone="5561996810504" />
    </div>
  )
}
