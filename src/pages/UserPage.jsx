import { UserCard } from '../components/UserCard'

export default function UserPage () {
  const onEdit = () => {
    console.log('edit')
  }

  return (
    <section className='h-full flex flex-col'>
      <h2 className='text-3xl font-bold py-5'>Mi Cuenta</h2>
      <UserCard buttonAction={onEdit} />
    </section>
  )
}
