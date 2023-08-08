import { Link } from 'wouter'
import { AuthButton } from '../components/Auth'

export default function LoginPage () {
  return (
    <section className='grid grid-cols-2 items-center gap-5 h-full'>
      <div>
        <p>!Estás a un paso!</p>
        <h2 className='text-5xl'>Inicia sesión o crea una nueva cuenta para poder iniciar tu consulta</h2>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <AuthButton />
        <button>
          <Link href='/'>Continuar como Invitado</Link>
        </button>
      </div>
    </section>
  )
}
