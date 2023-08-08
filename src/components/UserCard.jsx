import { useAuth0 } from '@auth0/auth0-react'
import { AuthButton } from './Auth'
import { AvatarIcon } from './Icons'

export function UserCard ({ buttonAction }) {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <h2>Loading...</h2> // ToDo: PlaceHolder de UserCard
  }

  if (isAuthenticated) {
    return (
      <article className='w-full max-w-lg h-96 self-center bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center pb-10'>
        <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src={user.picture} alt='Bonnie image' />
        <h5 className='mb-1 text-xl font-medium'>{user.name}</h5>
        <span className='text-sm text-gray-500'>Visual Designer</span>
        <div className='flex flex-col gap-5 mt-4 md:mt-6'>
          <button onClick={buttonAction} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            Editar
          </button>
          <AuthButton />
        </div>
      </article>
    )
  }

  return (
    <article className='w-full max-w-lg h-96 self-center bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center pb-10'>
      <AvatarIcon className='w-10 h-10 mb-3 rounded-full shadow-lg' />
      <h5 className='mb-1 text-xl font-medium'>Invitado</h5>
      <div className='flex flex-col gap-5 mt-4 md:mt-6'>
        <AuthButton />
      </div>
    </article>
  )
}
