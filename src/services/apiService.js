// En desarrollo usa proxy, en producción usa URL completa
const API_BASE = import.meta.env.DEV 
  ? '/api/participantes'
  : 'https://congresoutl.onrender.com/api/participantes'

export const apiService = {
  // GET all participantes
  getAll: async () => {
    try {
      const res = await fetch(API_BASE, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (error) {
      console.error('Error fetching participantes:', error)
      throw error
    }
  },

  // GET one participante by ID
  getById: async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (error) {
      console.error('Error fetching participante:', error)
      throw error
    }
  },

  // POST new participante
  create: async (data) => {
    try {
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (error) {
      console.error('Error creating participante:', error)
      throw error
    }
  },

  // PUT update participante
  update: async (id, data) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (error) {
      console.error('Error updating participante:', error)
      throw error
    }
  },

  // DELETE participante
  delete: async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (error) {
      console.error('Error deleting participante:', error)
      throw error
    }
  }
}
