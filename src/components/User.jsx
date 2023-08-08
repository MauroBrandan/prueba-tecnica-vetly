import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { AuthButton } from './Auth'

export function User () {
  const [isShow, setIsShow] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth0()

  const handleClick = () => {
    setIsShow(!isShow)
  }

  if (isLoading) {
    return <div>Loading ...</div> // ToDo: Skeleton
  }

  return (
    isAuthenticated && (
      <div>
        <img onClick={handleClick} className='w-7 h-7 rounded-full cursor-pointer' src={user.picture} alt={`${user.name} picture`} />
        <div className={`${isShow ? '' : 'hidden'} absolute right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}>
          <div className='px-4 py-3'>
            <span className='block text-sm  text-gray-500 truncate'>{user.email}</span>
          </div>
          <ul className='px-4 py-3'>
            <li>
              <AuthButton />
            </li>
          </ul>
        </div>
      </div>
    )
  )
}
