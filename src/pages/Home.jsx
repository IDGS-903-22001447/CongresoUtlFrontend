import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decoración de fondo */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      <div className="container position-relative">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Ícono animado */}
            <div style={{
              fontSize: '120px',
              marginBottom: '2rem',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              🚀
            </div>

            {/* Título principal */}
            <h1 style={{
              fontFamily: 'Poppins',
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 800,
              color: '#1e3a8a',
              marginBottom: '0.5rem',
              letterSpacing: '-1px',
              lineHeight: 1.2
            }}>
              Congreso UTL 2025
            </h1>

            {/* Subtítulo */}
            <h2 style={{
              fontFamily: 'Inter',
              fontSize: '1.3rem',
              fontWeight: 500,
              color: '#34d399',
              marginBottom: '2rem',
              letterSpacing: '0.5px'
            }}>
              Tecnologías de la Información
            </h2>

            {/* Descripción */}
            <p style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              marginBottom: '3rem',
              lineHeight: 1.8,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: 400
            }}>
              Únete a nosotros en este evento tecnológico donde conocerás profesionales,
              explorarás las últimas tendencias y ampliarás tu red de contactos en el sector
              de las tecnologías de la información.
            </p>

            {/* Botones */}
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button
                className="btn"
                onClick={() => navigate('/participantes')}
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 12px 32px rgba(30, 58, 138, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                👥 Ver Participantes
              </button>

              <button
                className="btn"
                onClick={() => navigate('/registro')}
                style={{
                  background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                  color: 'white',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 12px 32px rgba(52, 211, 153, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                📝 Registrarme
              </button>
            </div>

            {/* Información adicional */}
            <div className="row g-4 mt-5">
              <div className="col-md-4">
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</div>
                  <h3 style={{ color: '#1e3a8a', fontFamily: 'Poppins', marginBottom: '0.5rem' }}>Innovación</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                    Descubre las últimas tecnologías y tendencias del sector
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                  <h3 style={{ color: '#1e3a8a', fontFamily: 'Poppins', marginBottom: '0.5rem' }}>Networking</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                    Conecta con profesionales y expande tu red de contactos
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
                  <h3 style={{ color: '#1e3a8a', fontFamily: 'Poppins', marginBottom: '0.5rem' }}>Aprendizaje</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                    Aprende de expertos en la industria de la tecnología
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
