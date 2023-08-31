import { useAuth0 } from '@auth0/auth0-react'
import { useCategories } from '../hooks/useCategories'
import { CategoriesSideBar } from '../components/CategoriesSideBar'

export default function HomePage () {
  const { user, isAuthenticated } = useAuth0()
  const { categories } = useCategories()
  const welcomeText = isAuthenticated ? `¡Bienvenido ${user?.name}! 👋` : '¡Bienvenido a Vetly! 👋'

  return (
    <section className='flex flex-col gap-5 h-full md:flex-row'>
      <CategoriesSideBar categories={categories} />

      <h2 className='w-full text-center text-xl font-bold py-10 md:text-3xl'>
        {welcomeText}
      </h2>
    </section>
  )
}
