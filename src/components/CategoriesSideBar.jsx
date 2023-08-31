import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'wouter'
import { CategoriesSideBarLoader } from './Loaders'

export function CategoriesSideBar ({ categories }) {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <CategoriesSideBarLoader />
  }

  return (
    <aside className='w-full h-auto md:w-80 md:h-full'>
      <div className='h-full px-3 py-4 rounded-lg shadow-lg'>
        <h3 className='text-xl font-bold border-b-2'>
          Categorías
        </h3>
        <ul className='flex items-center flex-wrap space-y-2 font-medium md:block'>
          {categories.map((category) => {
            const normalizedCategoryName = category.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
            const formattedCategoryName = normalizedCategoryName.split(' ').join('-')

            return (
              <li key={category.id}>
                <Link href={`/categories/${encodeURIComponent(formattedCategoryName).split(' ').join('-')}`} className='w-full flex items-center p-2 text-gray-900 rounded-lg hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white'>
                  {category.icon}
                  <span className='ml-3'>{category.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
