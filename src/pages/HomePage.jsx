import { useAuth0 } from '@auth0/auth0-react'

export default function HomePage () {
  const { user, isAuthenticated } = useAuth0()
  const welcomeText = isAuthenticated ? `¡Bienvenido ${user?.name}! 👋` : '¡Bienvenido a Vetly! 👋'

  return (
    <section className='flex flex-col gap-5 h-full md:flex-row'>
      <h2 className='w-full text-center text-xl font-bold py-10 md:text-3xl'>
        {welcomeText}
      </h2>
    </section>
  )
}
