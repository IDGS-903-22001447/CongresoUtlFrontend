import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { apiService } from '../services/apiService'

export default function Gafete() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [p, setP] = useState(null)
  const [loading, setLoading] = useState(true)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiService.getById(id)
        setP(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (!p) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">Participante no encontrado</div>
        <button className="btn btn-primary" onClick={() => navigate('/participantes')}>
          Volver
        </button>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div
            className="card shadow-lg"
            style={{
              minHeight: 500,
              cursor: 'pointer',
              perspective: '1000px',
              transition: 'transform 0.6s'
            }}
            onClick={() => setFlipped(!flipped)}
          >
            {!flipped ? (
              // Frente del gafete
              <div
                className="card-body text-white d-flex flex-column justify-content-between"
                style={{
                  background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)',
                  borderRadius: '12px',
                  minHeight: 500,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="position-absolute top-0 end-0 p-3 opacity-25" style={{ fontSize: '80px' }}>
                  🎓
                </div>

                <div className="text-center mb-4">
                  <img
                    src={p.avatarUrl || '/vite.svg'}
                    alt={p.nombre}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      border: '4px solid white',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div className="text-center flex-grow-1">
                  <h2 className="fw-bold mb-2">{p.nombre}</h2>
                  <h3 className="fw-bold">{p.apellidos}</h3>
                  <p className="lead mt-3 mb-0">{p.ocupacion}</p>
                </div>

                <div className="text-center mt-4 pt-3 border-top border-light border-2">
                  <small>Congreso UTL 2025</small>
                </div>
              </div>
            ) : (
              // Reverso del gafete
              <div
                className="card-body text-dark d-flex flex-column justify-content-between"
                style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderRadius: '12px',
                  minHeight: 500
                }}
              >
                <div>
                  <h5 className="fw-bold mb-3">📋 INFORMACIÓN</h5>

                  <div className="mb-3">
                    <small className="text-muted">EMAIL</small>
                    <p className="mb-1">{p.email}</p>
                  </div>

                  {p.twitter && (
                    <div className="mb-3">
                      <small className="text-muted">TWITTER</small>
                      <p className="mb-1">
                        <a
                          href={p.twitter.startsWith('http') ? p.twitter : `https://twitter.com/${p.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary text-decoration-none"
                        >
                          {p.twitter}
                        </a>
                      </p>
                    </div>
                  )}

                  <div className="mb-3">
                    <small className="text-muted">OCUPACIÓN</small>
                    <p className="mb-0">{p.ocupacion}</p>
                  </div>
                </div>

                <div className="text-center pt-3 border-top border-2 border-primary">
                  <small className="text-muted">
                    Registrado: {p.fechaRegistro ? new Date(p.fechaRegistro).toLocaleDateString('es-ES') : '—'}
                  </small>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <small className="text-muted">👆 Haz clic para voltear el gafete</small>
          </div>

          <button
            className="btn btn-secondary w-100 mt-3"
            onClick={() => navigate('/participantes')}
          >
            ← Volver al listado
          </button>
        </div>
      </div>
    </div>
  )
}
