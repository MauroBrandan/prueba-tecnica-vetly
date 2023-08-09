import { useState, useEffect, createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { saveUserToLocalStorage, getUser } from '../api/users'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const { user: authUser, isAuthenticated } = useAuth0()
  const [user, setUser] = useState({})

  useEffect(() => {
    if (isAuthenticated) {
      // Aqui deberiamos llamar a una API para que devuelve el usuario con los permisos
      getUser(authUser?.email)
        .then(user => setUser(user))
    }
  }, [authUser?.email, isAuthenticated])

  const loginUser = (user) => {
    saveUserToLocalStorage(user) // Aqui deberiamos llamar a una API para que registre en BD
    setUser(user)
  }

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      {children}
    </UserContext.Provider>
  )
}