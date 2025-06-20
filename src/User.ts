import { useEffect, useState } from 'react'
export const loadImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfM615QbY86zRUSKdxwIvuX3t_KW6g2Dsgw&s'
export interface Address {
  street: string
  suite: string
  city: string
}
export interface Company {
  name: string
}
export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  address: Address
  company: Company
}
const API_URL = 'https://jsonplaceholder.typicode.com'
function getUserApiUrl(userId?: string | number): string {
  return userId ? `${API_URL}/users/${userId}` : `${API_URL}/users`
}
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    fetchUser(url)
  }, [])
  const fetchUser = (url: string) => {
    setLoading(true)
    fetch(url)
      .then((res): Promise<T> => {
        if (!res.ok) throw new Error('ユーザー取得失敗')
        return res.json()
      })
      .then((json) => {
        setData(json)
        setError('')
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return { data, loading, error }
}
export const useUsers = () => {
  const { data, loading, error } = useFetch<User[]>(getUserApiUrl())
  return { users: data ?? [], loading, error }
}
export const useUser = (userId: string) => {
  const url = getUserApiUrl(userId)
  const { data, loading, error } = useFetch<User>(url)
  return { user: data, loading, error }
}
