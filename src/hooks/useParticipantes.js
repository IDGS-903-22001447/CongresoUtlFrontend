import { useState, useEffect } from 'react'
import { apiService } from '../services/apiService'

export const useParticipantes = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAll = async () => {
    try {
      setLoading(true)
      const data = await apiService.getAll()
      setList(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAll()
  }, [])

  return { list, loading, error, refetch: fetchAll, setList }
}
