import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      color: '#f3f4f6',
      marginTop: 'auto',
      borderTop: '1px solid rgba(59, 130, 246, 0.1)',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 style={{ color: '#34d399', marginBottom: '1rem', fontFamily: 'Poppins' }}>
              🚀 Congreso UTL
            </h5>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#d1d5db' }}>
              Plataforma de registro y participación en el Congreso de Tecnologías de la Información.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 style={{ color: '#34d399', marginBottom: '1rem', fontFamily: 'Poppins' }}>
              📞 Contacto
            </h5>
            <p style={{ fontSize: '0.95rem', color: '#d1d5db', marginBottom: '0.5rem' }}>
              📧 info@congresoticutl.mx
            </p>
            <p style={{ fontSize: '0.95rem', color: '#d1d5db' }}>
              📱 +52 (477) XXX-XXXX
            </p>
          </div>
          <div className="col-md-4">
            <h5 style={{ color: '#34d399', marginBottom: '1rem', fontFamily: 'Poppins' }}>
              🔗 Enlaces
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }}>Términos y Condiciones</a></li>
              <li><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }}>Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(59, 130, 246, 0.2)', margin: '2rem 0' }} />
        <div className="text-center">
          <p style={{ marginBottom: '0.5rem', color: '#d1d5db' }}>
            © {currentYear} Universidad Tecnológica de León
          </p>
          <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#9ca3af' }}>
            Congreso de Tecnologías de la Información • Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
