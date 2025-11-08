import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span style={{ fontSize: '1.8rem', marginRight: '8px' }}>🚀</span>
          <strong>Congreso UTL</strong>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ filter: 'invert(1)' }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                🏠 Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/participantes' ? 'active' : ''}`}
                to="/participantes"
              >
                👥 Participantes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/registro' ? 'active' : ''}`}
                to="/registro"
              >
                📝 Registro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
