import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useLocation } from 'wouter'
import { useUser } from '../hooks/useUser'
import { PickTypeUser } from './PickTypeUser'
import { LoginButton, SignUpButton } from './Auth'

export function Form () {
  const { user: authUser, isAuthenticated } = useAuth0()
  const { user, signupUser } = useUser()
  const [, setLocation] = useLocation()
  const [userType, setUserType] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newUser = {
      email: authUser.email,
      type: userType
    }

    signupUser(newUser)
    setLocation('/login')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
      {(isAuthenticated && !user.type) && <PickTypeUser onPick={setUserType} />}

      <LoginButton />

      {!isAuthenticated && (
        <>
          <SignUpButton />
          <button>
            <Link href='/'>Continuar como Invitado</Link>
          </button>
        </>
      )}

    </form>
  )
}
