import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { UserCard } from '../components/UserCard'
import { PickTypeUser } from '../components/PickTypeUser.jsx'
import { AdminForm } from '../components/AdminForm'

export default function UserPage () {
  const [showEditor, setShowEditor] = useState(false)
  const [showAdminForm, setShowAdminForm] = useState(false)

  const { user, updateType } = useUser()

  const handleEdit = (type) => {
    updateType(user, type)
    setShowEditor(false)
    window.location.reload()
  }

  return (
    <section className='h-full flex flex-col'>
      <h2 className='text-3xl font-bold py-5'>Mi Cuenta</h2>
      <UserCard user={user} buttonAction={() => setShowEditor(!showEditor)} />

      <form>
        {showEditor && <PickTypeUser onPick={handleEdit} />}
      </form>

      <div className='text-center mt-8'>
        <button onClick={() => setShowAdminForm(!showAdminForm)} className='bg-white border border-gray-300 hover:bg-gray-100 text-sm rounded-lg px-5 py-2.5'>Entrar como administrador</button>
      </div>

      {showAdminForm && <AdminForm closeModal={() => setShowAdminForm(false)} />}
    </section>
  )
}
