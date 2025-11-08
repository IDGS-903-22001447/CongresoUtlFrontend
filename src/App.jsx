import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Participantes from './pages/Participantes'
import Registro from './pages/Registro'
import Gafete from './pages/Gafete'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participantes" element={<Participantes />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/gafete/:id" element={<Gafete />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
