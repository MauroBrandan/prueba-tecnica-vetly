import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useLocation } from 'wouter'
import { CategoriesSideBarLoader } from './Loaders'
import { useCategories } from '../hooks/useCategories'
import { MenuIcon } from './Icons.jsx'

export function CategoriesSideBar () {
  const [show, setShow] = useState(false)
  const { isLoading } = useAuth0()
  const [location] = useLocation()
  const { categories } = useCategories()

  useEffect(() => {
    setShow(false)
  }, [location])

  if (isLoading) {
    return <CategoriesSideBarLoader />
  }

  return (
    <>
      <button onClick={() => setShow(!show)} className='hidden sm:block w-52 my-3 text-base font-bold border-b-2'>
        Categorías
      </button>

      <span onClick={() => setShow(!show)}>
        <MenuIcon className='sm:hidden w-5 py-5' />
      </span>

      <aside className={`${!show && 'hidden'} absolute top-24 left-0 sm:left-auto w-52 h-auto bg-white`}>
        <div className='h-full px-3 py-4 rounded-lg shadow-lg'>
          <ul className='flex items-center flex-wrap space-y-2 font-medium md:block'>
            {categories.map((category) => {
              const normalizedCategoryName = category.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
              const formattedCategoryName = normalizedCategoryName.split(' ').join('-')

              return (
                <li key={category.id} className='w-full'>
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
    </>
  )
}
