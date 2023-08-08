import { useState } from 'react'
import { useLocation } from 'wouter'
import { PetsIcon, HospitalIcon, VetIcon } from './Icons.jsx'

const userTypes = [
  { label: 'Cliente', icon: <PetsIcon /> },
  { label: 'Profesional', icon: <VetIcon /> },
  { label: 'Veterinaria', icon: <HospitalIcon /> }
]

export function PickTypeUser () {
  const [selectedType, setSelectedType] = useState(null)
  const [, setLocation] = useLocation()

  const handelSubmit = (event) => {
    event.preventDefault()
    console.log('Submit!', selectedType)
    // ToDo: Guardar el tipo elegido el objeto del usuario
    setLocation('/')
  }

  return (
    <form onSubmit={handelSubmit}>
      <h3 className='mb-5 text-lg font-medium'>Seleccione el tipo de usuario:</h3>
      <ul className='grid w-full gap-6 md:grid-cols-3'>
        {userTypes.map((userType, index) => {
          const Icon = () => userType.icon
          return (
            <li key={index} className='inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
              <input type='radio' id={userType.label} name='userType' onChange={() => setSelectedType(userType.label)} className='hidden peer' />
              <label htmlFor={userType.label} className='flex flex-col items-center justify-between w-full p-5 bg-white border-gray-200 rounded-md cursor-pointer transition-all ease-in duration-75 group-hover:bg-opacity-0 group-hover:fill-white peer-checked:bg-opacity-0 peer-checked:fill-white peer-checked:text-white'>
                <span className='w-28 h-28'>
                  <Icon />
                </span>
                <div className='w-full text-lg text-center font-semibold'>{userType.label}</div>
              </label>
            </li>
          )
        })}
      </ul>
      <button type='submit' className='w-full mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>¡Unirme a Vetly!</button>
    </form>
  )
}
