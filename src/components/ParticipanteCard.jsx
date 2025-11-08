import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiService } from '../services/apiService'
import Swal from 'sweetalert2'

export default function ParticipanteCard({ p, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState({
    nombre: p.nombre,
    apellidos: p.apellidos,
    email: p.email,
    twitter: p.twitter,
    ocupacion: p.ocupacion,
    avatarUrl: p.avatarUrl
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async () => {
    try {
      await apiService.update(p.id, form)
      Swal.fire({
        icon: 'success',
        title: '✅ Actualizado',
        text: 'Participante actualizado exitosamente',
        timer: 2000,
        showConfirmButton: false
      })
      setIsEditing(false)
      onUpdate()
    } catch (err) {
      Swal.fire('❌ Error', err.message, 'error')
    }
  }

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#9ca3af',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    })

    if (result.isConfirmed) {
      try {
        await apiService.delete(p.id)
        Swal.fire({
          icon: 'success',
          title: ' Eliminado',
          text: 'Participante eliminado correctamente',
          timer: 2000,
          showConfirmButton: false
        })
        onDelete()
      } catch (err) {
        Swal.fire('❌ Error', err.message, 'error')
      }
    }
  }

  if (isEditing) {
    return (
      <div className="card border-0 shadow-lg" style={{ borderLeft: '4px solid #7c3aed' }}>
        <div className="card-body">
          <h5 className="card-title mb-4" style={{ fontFamily: 'Poppins' }}> Editar Participante</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold" style={{ color: '#1e3a8a' }}>Nombre</label>
              <input
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold" style={{ color: '#1e3a8a' }}>Apellidos</label>
              <input
                className="form-control"
                name="apellidos"
                value={form.apellidos}
                onChange={handleChange}
                placeholder="Apellidos"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold" style={{ color: '#1e3a8a' }}>Email</label>
              <input
                className="form-control"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold" style={{ color: '#1e3a8a' }}>Twitter</label>
              <input
                className="form-control"
                name="twitter"
                value={form.twitter}
                onChange={handleChange}
                placeholder="Twitter"
              />
            </div>
            <div className="col-md-12">
              <label className="form-label fw-semibold" style={{ color: '#1e3a8a' }}>Ocupación</label>
              <input
                className="form-control"
                name="ocupacion"
                value={form.ocupacion}
                onChange={handleChange}
                placeholder="Ocupación"
              />
            </div>
            <div className="col-md-12">
              <label className="form-label fw-semibold" style={{ color: '#1e3a8a' }}>URL del Avatar</label>
              <input
                className="form-control"
                name="avatarUrl"
                value={form.avatarUrl}
                onChange={handleChange}
                placeholder="URL del Avatar"
              />
            </div>
          </div>
          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-success" onClick={handleUpdate}>
              ✅ Guardar
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              ❌ Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card border-0 shadow h-100 overflow-hidden" style={{
      borderTop: '4px solid #34d399',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <Link to={`/gafete/${p.id}`} className="text-decoration-none">
          <img
            src={p.avatarUrl || '/vite.svg'}
            className="rounded-circle border border-4"
            alt={p.nombre}
            style={{
              width: 120,
              height: 120,
              objectFit: 'cover',
              borderColor: '#34d399',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </Link>
        
        <div className="flex-grow-1">
          <h5 className="mb-1" style={{ fontFamily: 'Poppins', color: '#1e3a8a' }}>
            {p.nombre} {p.apellidos}
          </h5>
          <p className="mb-2" style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.95rem' }}>
            {p.ocupacion}
          </p>
          <p className="mb-0" style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
             {p.email}
          </p>
          {p.twitter && (
            <p className="mb-0" style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
               <a href={p.twitter.startsWith('http') ? p.twitter : `https://twitter.com/${p.twitter.replace('@', '')}`}
                   target="_blank" rel="noreferrer" style={{ color: '#3b82f6' }}>
                @{p.twitter.replace('@', '')}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="card-body pt-0">
        <div className="d-flex gap-2">
          <button
            className="btn btn-info flex-grow-1"
            onClick={() => setIsEditing(true)}
            style={{ fontWeight: 600 }}
          >
             Editar
          </button>
          <button
            className="btn btn-danger flex-grow-1"
            onClick={handleDelete}
            style={{ fontWeight: 600 }}
          >
             Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
