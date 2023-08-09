import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUser'
import { useCategories } from '../hooks/useCategories'
import { CategoriesSideBar } from '../components/CategoriesSideBar'

export default function HomePage () {
  const { isAuthenticated } = useAuth0()
  const { user } = useUser()
  const { categories, guestCategories } = useCategories()
  const [currentCategory, setCurrentCategory] = useState(null)
  const welcomeText = isAuthenticated ? `¡Bienvenido ${user?.name}! 👋` : '¡Bienvenido a Vetly! 👋'

  const selectCategory = (newCategory) => {
    setCurrentCategory(prevCategory => {
      if (prevCategory === newCategory) {
        setCurrentCategory(null)
        return
      }

      setCurrentCategory(newCategory)
    })
  }

  return (
    <section className='flex gap-5 h-full'>
      <CategoriesSideBar categories={isAuthenticated ? categories : guestCategories} selectCategory={selectCategory} />
      <h2 className='w-full text-center text-3xl font-bold py-10'>
        {currentCategory?.name ?? welcomeText}
      </h2>
    </section>
  )
}
