import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUser'
import { UserCard } from '../components/UserCard'
import { PickTypeUser } from '../components/PickTypeUser.jsx'
import { AdminForm } from '../components/AdminForm'

export default function UserPage () {
  const [showEditor, setShowEditor] = useState(false)
  const [showAdminForm, setShowAdminForm] = useState(false)
  const { user } = useAuth0()
  const { updateType } = useUser()

  const handleEdit = (type) => {
    updateType(user.email, type)
    setShowEditor(false)
  }

  return (
    <section className='h-full flex flex-col'>
      <h2 className='text-3xl font-bold py-5'>Mi Cuenta</h2>
      <UserCard buttonAction={() => setShowEditor(!showEditor)} />

      <form>
        {showEditor && <PickTypeUser onPick={handleEdit} />}
      </form>

      {user && (
        <div className='text-center mt-8'>
          <button onClick={() => setShowAdminForm(!showAdminForm)} className='bg-white border border-gray-300 hover:bg-gray-100 text-sm rounded-lg px-5 py-2.5'>Entrar como administrador</button>
        </div>
      )}

      {showAdminForm && <AdminForm closeModal={() => setShowAdminForm(false)} />}
    </section>
  )
}
