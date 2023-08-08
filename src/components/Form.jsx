import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'wouter'
import { PickTypeUser } from './PickTypeUser'
import { AuthButton } from './Auth'

export function Form () {
  const { isAuthenticated } = useAuth0()

  // ToDo Agregar validacion, cuando tambien no tenga la propiedad "tipo_de_usuario" o los permisos
  if (isAuthenticated) {
    return (
      <div className='flex flex-col items-center gap-5'>
        <PickTypeUser />
      </div>
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
