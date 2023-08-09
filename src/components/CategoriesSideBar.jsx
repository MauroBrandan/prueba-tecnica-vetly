import { useAuth0 } from '@auth0/auth0-react'
import { CategoriesSideBarLoader } from './Loaders'

export function CategoriesSideBar ({ categories, selectCategory }) {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <CategoriesSideBarLoader />
  }

  return (
    <aside className='w-64 h-full'>
      <div className='h-full px-3 py-4 bg-gray-50'>
        <h3 className='text-xl font-bold border-b-2'>Categorías</h3>
        <ul className='space-y-2 font-medium'>
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={() => selectCategory(category)} className='w-full flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'>
                {category.icon}
                <span className='ml-3'>{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
