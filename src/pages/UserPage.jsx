import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { UserCard } from '../components/UserCard'
import { PickTypeUser } from '../components/PickTypeUser.jsx'

export default function UserPage () {
  const [showEditor, setShowEditor] = useState(false)
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
    </section>
  )
}
