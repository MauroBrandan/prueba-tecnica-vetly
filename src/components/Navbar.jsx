import { Link } from 'wouter'
import { useAuth0 } from '@auth0/auth0-react'
import { User } from './User'

export function Navbar () {
  const { isAuthenticated } = useAuth0()

  return (
    <nav className='relative flex flex-wrap items-center justify-between gap-5 mx-auto p-4 border-b-[1px] border-gray-200 container'>
      <h1 className='self-center text-2xl font-semibold whitespace-nowrap '>
        <Link href='/'>Vetly</Link>
      </h1>
      <div>
        <input type='search' placeholder='Buscar...' className='w-80 p-2 text-sm border border-gray-300 rounded-lg bg-gray-50' />
      </div>
      <div>
        <ul className='flex gap-5'>
          <li className='hover:underline'>
            <Link href='/'>Home</Link>
          </li>
          {!isAuthenticated
            ? (
              <li className='hover:underline'>
                <Link href='/login'>Login</Link>
              </li>
              )
            : <User />}
        </ul>
      </div>
    </nav>
  )
}
