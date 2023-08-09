import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useLocation, Redirect } from 'wouter'
import { useUser } from '../hooks/useUser'
import { PickTypeUser } from './PickTypeUser'
import { LoginButton, SignUpButton } from './Auth'

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

  if (user.type) {
    return <Redirect to='/' />
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
      {isAuthenticated && <PickTypeUser onPick={setUserType} />}

      {!isAuthenticated && (
        <>
          <LoginButton />
          <SignUpButton />
          <button>
            <Link href='/'>Continuar como Invitado</Link>
          </button>
        </>
      )}

    </form>
  )
}
