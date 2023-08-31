import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout ({ children }) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto h-[calc(100vh-75px)]'>
        {children}
      </main>
      <Footer />
    </>
  )
}
