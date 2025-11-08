import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../services/apiService'
import Swal from 'sweetalert2'

export default function Registro() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    twitter: '',
    ocupacion: '',
    avatarUrl: ''
  })
  const [acepto, setAcepto] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState(null)

  // 🔹 Lista de avatares disponibles
  const avatarOptions = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6',
    'https://i.pravatar.cc/150?img=7',
    'https://i.pravatar.cc/150?img=8',
    'https://i.pravatar.cc/150?img=9',
    'https://i.pravatar.cc/150?img=10'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleAvatarSelect = (url) => {
    setSelectedAvatar(url)
    setForm(prev => ({ ...prev, avatarUrl: url }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!acepto) {
      Swal.fire('⚠️ Validación', 'Debes aceptar los términos y condiciones', 'warning')
      return
    }

    if (!form.nombre || !form.apellidos || !form.email) {
      Swal.fire('⚠️ Validación', 'Por favor completa los campos obligatorios', 'warning')
      return
    }

    try {
      setLoading(true)
      // Convertir a formato esperado por la API (con mayúsculas)
      const dataToSend = {
        Nombre: form.nombre,
        Apellidos: form.apellidos,
        Email: form.email,
        Twitter: form.twitter,
        Ocupacion: form.ocupacion,
        AvatarUrl: form.avatarUrl
      }
      await apiService.create(dataToSend)
      Swal.fire('✅ Éxito', 'Participante registrado correctamente', 'success')
      navigate('/participantes')
    } catch (err) {
      Swal.fire('❌ Error', err.message || 'No se pudo guardar el participante', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">📝 Registro de Participante</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Nombre *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Apellidos *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apellidos"
                      value={form.apellidos}
                      onChange={handleChange}
                      required
                      placeholder="Tus apellidos"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      name="twitter"
                      value={form.twitter}
                      onChange={handleChange}
                      placeholder="@usuario o URL"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Ocupación</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ocupacion"
                      value={form.ocupacion}
                      onChange={handleChange}
                      placeholder="Ej: Ingeniero de Software"
                    />
                  </div>

                  {/* 🔹 Selector de Avatares */}
                  <div className="col-md-12 mt-3">
                    <label className="form-label fw-bold">Selecciona un Avatar</label>
                    <div className="d-flex flex-wrap gap-3 mt-2">
                      {avatarOptions.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`Avatar ${index + 1}`}
                          onClick={() => handleAvatarSelect(url)}
                          className={`rounded-circle border p-1 ${selectedAvatar === url ? 'border-primary border-3' : 'border-secondary'}`}
                          style={{
                            width: '70px',
                            height: '70px',
                            cursor: 'pointer',
                            transition: '0.3s'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-check mt-4 mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="acepto"
                    checked={acepto}
                    onChange={e => setAcepto(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="acepto">
                    Acepto los términos y condiciones del Congreso UTL *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? '⏳ Guardando...' : '💾 Guardar Registro'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
