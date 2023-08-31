export function Footer () {
  return (
    <footer className='container mx-auto h-30 grid grid-cols-3 gap-3 place-items-center p-5 text-xs border-t border-gray-200'>
      <div>
        <ul>
          <li>Trabajá con nosotros</li>
          <li>Términos y condiciones</li>
          <li>Cómo cuidamos tu privacidad</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Accesibilidad</li>
          <li>Información al usuario financiero</li>
          <li>Ayuda</li>
          <li>Defensa del Consumidor</li>
        </ul>
      </div>
      <div>
        <span>Code by </span>
        <a className='font-bold' href='https://maurobrandan.com/' target='_blank' rel='noopener noreferrer'>Mauro Brandan</a>
      </div>
    </footer>
  )
}
