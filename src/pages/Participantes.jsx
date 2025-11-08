import React, { useState } from 'react'
import { useParticipantes } from '../hooks/useParticipantes'
import ParticipanteCard from '../components/ParticipanteCard'

export default function Participantes() {
  const { list, loading, error, refetch } = useParticipantes()
  const [query, setQuery] = useState('')

  const filtered = list.filter(p => {
    const term = query.toLowerCase()
    return `${p.nombre} ${p.apellidos}`.toLowerCase().includes(term)
  })

  return (
    <div className="container py-5">
      {/* Encabezado */}
      <div className="mb-5">
        <div className="row align-items-center mb-4">
          <div className="col">
            <h1 style={{
              fontFamily: 'Poppins',
              fontSize: 'clamp(2rem, 6vw, 2.5rem)',
              color: '#1e3a8a',
              marginBottom: 0
            }}>
              👥 Participantes
            </h1>
            <p style={{ color: '#9ca3af', marginBottom: 0, marginTop: '0.5rem' }}>
              Total: <strong style={{ color: '#1e3a8a' }}>{list.length}</strong> inscritos
            </p>
          </div>
        </div>

        {/* Barra de búsqueda mejorada */}
        <div style={{
          position: 'relative',
          maxWidth: '500px'
        }}>
          <div className="input-group" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <span className="input-group-text" style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              border: 'none',
              color: 'white',
              padding: '0.75rem 1.25rem'
            }}>
              🔍
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre o apellidos..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                border: '1px solid rgba(59, 130, 246, 0.2)',
                padding: '0.75rem 1rem'
              }}
            />
          </div>
        </div>
      </div>

      {/* Estados de carga y error */}
      {loading ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          gap: '1rem'
        }}>
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>Cargando participantes...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger" style={{
          borderRadius: '12px',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#7f1d1d',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '1.5rem' }}>❌</div>
            <div style={{ flex: 1 }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#1f2937' }}>Error al cargar participantes</h4>
              <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>{error}</p>
              <button
                className="btn btn-danger"
                onClick={refetch}
                style={{ fontWeight: 600 }}
              >
                🔄 Reintentar
              </button>
            </div>
          </div>
        </div>
      ) : list.length === 0 ? (
        <div className="alert alert-info" style={{
          borderRadius: '12px',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          background: 'rgba(6, 182, 212, 0.1)',
          color: '#164e63',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
          <h4 style={{ marginBottom: '0.5rem' }}>No hay participantes aún</h4>
          <p style={{ marginBottom: '1rem' }}>Sé el primero en registrarte al Congreso UTL</p>
          <a href="/registro" className="btn btn-primary" style={{ fontWeight: 600 }}>
            📝 Registrarme ahora
          </a>
        </div>
      ) : filtered.length === 0 ? (
        <div className="alert alert-warning" style={{
          borderRadius: '12px',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          background: 'rgba(245, 158, 11, 0.1)',
          color: '#78350f',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔎</div>
          <h4>No se encontraron resultados</h4>
          <p style={{ marginBottom: 0 }}>No hay participantes con "{query}"</p>
        </div>
      ) : (
        <div className="row g-4">
          {filtered.map(p => (
            <div key={p.id} className="col-lg-6 col-xl-6">
              <ParticipanteCard p={p} onDelete={refetch} onUpdate={refetch} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
