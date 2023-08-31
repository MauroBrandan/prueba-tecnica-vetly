import { useRoute } from 'wouter'

export default function CategoryPage () {
  const [, params] = useRoute('/categories/:category')
  const category = params ? params.category : ''

  return (
    <section className='w-full'>
      <h2 className='text-center text-3xl font-bold py-10'>
        {(category).split('-').join(' ')}
      </h2>
    </section>
  )
}
