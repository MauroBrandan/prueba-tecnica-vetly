import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useLocation, Redirect } from 'wouter'
import { useUser } from '../hooks/useUser'
import { PickTypeUser } from './PickTypeUser'
import { AuthButton } from './Auth'

export function Form () {
  const { user: authUser, isAuthenticated } = useAuth0()
  const { user, loginUser } = useUser()
  const [, setLocation] = useLocation()
  const [userType, setUserType] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newUser = {
      email: authUser.email,
      name: authUser.name,
      picture: authUser.picture,
      type: userType
    }

    loginUser(newUser)
    setLocation('/')
  }

  if (isAuthenticated && user.type) {
    return <Redirect to='/' />
  }

  if (isAuthenticated && !user.type) {
    return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
        <PickTypeUser onPick={setUserType} />
      </form>
    )
  }

  return (
    <div className='flex flex-col items-center gap-5'>
      <AuthButton />
      <button>
        <Link href='/'>Continuar como Invitado</Link>
      </button>
    </div>
  )
}
