import { Link } from 'wouter'
import { UserNav } from './UserNav'
import { CategoriesSideBar } from './CategoriesSideBar'

export function Navbar () {
  return (
    <nav className='relative flex items-center justify-between gap-5 mx-auto p-4 border-b-[1px] border-gray-200 container'>
      <div className='flex flex-col'>
        <h1 className='self-center text-purple-600 text-2xl md:text-4xl font-bold whitespace-nowrap '>
          <Link href='/'>Vetly</Link>
        </h1>
        <CategoriesSideBar />
      </div>
      <div className='hidden md:block'>
        <input type='search' placeholder='Buscar...' className='w-80 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50' />
      </div>
      <div>
        <ul className='flex gap-5 [&>li:hover]:underline '>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li><Link href='/login'>Login</Link></li>
          <li>
            <UserNav />
          </li>
        </ul>
      </div>
    </nav>
  )
}
