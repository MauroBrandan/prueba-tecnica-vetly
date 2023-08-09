import { useState, useEffect, createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { USERS_TYPES } from '../utils/consts'
import { PetsIcon, VetIcon, HospitalIcon, AdminIcon } from '../components/Icons.jsx'
import { saveUserToLocalStorage, getUserByEmail, updateUserType } from '../api/users'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const { user: authUser, isAuthenticated } = useAuth0()
  const [user, setUser] = useState({})

  const userTypes = [
    { id: USERS_TYPES.ADMIN, label: 'Administrador', icon: <AdminIcon /> },
    { id: USERS_TYPES.CLIENT, label: 'Cliente', icon: <PetsIcon /> },
    { id: USERS_TYPES.PROFESSIONAL, label: 'Profesional', icon: <VetIcon /> },
    { id: USERS_TYPES.VET, label: 'Veterinaria', icon: <HospitalIcon /> }
  ]

  useEffect(() => {
    if (isAuthenticated) {
      // Aqui deberiamos llamar a una API para que devuelve el usuario con los permisos
      getUserByEmail(authUser?.email)
        .then(user => setUser(user))
    }
  }, [authUser?.email, isAuthenticated])

  const loginUser = (user) => {
    saveUserToLocalStorage(user) // Aqui deberiamos llamar a una API para que registre en BD
    setUser(user)
  }

  const updateType = (user, type) => {
    updateUserType(user, type) // Aqui deberiamos llamar a una API actualizar el registro en BD
  }

  const loginAsAdmin = (user, password) => {
    // Aqui se deberia hacer una validacion a una API para poder ingresar como admin
    if (password === 'admin12345' && isAuthenticated) {
      updateType(user, USERS_TYPES.ADMIN)
    }
  }

  return (
    <UserContext.Provider value={{ user, userTypes, loginUser, updateType, loginAsAdmin }}>
      {children}
    </UserContext.Provider>
  )
}
