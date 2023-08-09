import { useState, useEffect } from 'react'
import { getCategories } from '../api/categories'
import { useUser } from './useUser'

export function useCategories () {
  const { user } = useUser()
  const [categories, setCategories] = useState([])
  const guestCategories = getCategories() // Aqui deberia ser el llamado a una API. Sin argumentos, para obtener las categorias por default

  useEffect(() => {
    if (user) {
      const categories = getCategories(user.type) // Aqui deberia ser el llamado a una API. Con argumentos, para obtener la categoria especifica
      setCategories(categories)
    }
  }, [user])

  return { categories, guestCategories }
}
