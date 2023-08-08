import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { CategoriesSideBar } from '../components/CategoriesSideBar'
import { guestCategories } from '../data/categories'

export default function HomePage () {
  const { user, isAuthenticated } = useAuth0()
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
      <CategoriesSideBar categories={guestCategories} selectCategory={selectCategory} />
      <h2 className='w-full text-center text-3xl font-bold py-10'>
        {currentCategory?.name ?? welcomeText}
      </h2>
    </section>
  )
}
