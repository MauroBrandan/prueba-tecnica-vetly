import { Link } from 'wouter'
import { useAuth0 } from '@auth0/auth0-react'
import { UserNav } from './UserNav'

export function Navbar () {
  const { isAuthenticated } = useAuth0()

  return (
    <nav className='relative flex flex-wrap items-center justify-between gap-5 mx-auto p-4 border-b-[1px] border-gray-200 container'>
      <h1 className='self-center text-purple-600 text-2xl md:text-4xl font-bold whitespace-nowrap '>
        <Link href='/'>Vetly</Link>
      </h1>
      <div className='hidden md:block'>
        <input type='search' placeholder='Buscar...' className='w-80 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50' />
      </div>
      <div>
        <ul className='flex gap-5 [&>li:hover]:underline '>
          <li>
            <Link href='/'>Home</Link>
          </li>
          {!isAuthenticated && <li><Link href='/login'>Login</Link></li>}
          <li>
            <UserNav />
          </li>
        </ul>
      </div>
    </nav>
  )
}
