import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './Auth'
import { AvatarIcon } from './Icons'
import { Link, useLocation } from 'wouter'

export function UserNav () {
  const [isShow, setIsShow] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [location] = useLocation()

  const handleClick = () => {
    setIsShow(!isShow)
  }

  useEffect(() => {
    setIsShow(false)
  }, [location])

  return (
    <div>
      {isAuthenticated && !isLoading
        ? <img onClick={handleClick} className='w-7 h-7 rounded-full cursor-pointer bg-gray-500' src={user.picture} alt={`${user.name} picture`} />
        : <AvatarIcon onClick={handleClick} className='w-5 h-5 cursor-pointer' />}
      <div className={`${isShow ? '' : 'hidden'} absolute right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}>
        <div className='flex flex-col justify-center items-center p-4'>
          <Link href='/user' className='w-52 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            Mi cuenta
          </Link>
          {!(location === '/login') && <LoginButton />}
        </div>
      </div>
    </div>
  )
}
