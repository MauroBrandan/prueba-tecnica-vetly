import { USERS_TYPES } from '../utils/consts'

// Estas categorias deberian estar guardadas en una BD
export const categories = {
  [USERS_TYPES.GUEST]: [
    { name: 'Literas', icon: '🛏️' },
    { name: 'Comida de perro', icon: '🦴' },
    { name: 'Comida de gato', icon: '🐱' },
    { name: 'Transportadoras', icon: '🐾' },
    { name: 'Juguetes', icon: '🎾' },
    { name: 'Peluquería', icon: '💇‍♂️' },
    { name: 'Vacunas', icon: '💉' }
  ],
  [USERS_TYPES.ADMIN]: [
    { name: 'Usuarios', icon: '👥' },
    { name: 'Bitácoras', icon: '📜' },
    { name: 'Errores de usuario', icon: '❗' },
    { name: 'Permisos de usuario', icon: '🔒' },
    { name: 'Backup', icon: '🔐' }
  ],
  [USERS_TYPES.PROFESSIONAL]: [
    { name: 'Agenda', icon: '📅' },
    { name: 'Veterinarias', icon: '🏥' },
    { name: 'Mascotas', icon: '🐾' },
    { name: 'Reportes de pago', icon: '💰' }
  ],
  [USERS_TYPES.VET]: [
    { name: 'Profesionales', icon: '👩‍⚕️' },
    { name: 'Mascotas', icon: '🐾' },
    { name: 'Cobros', icon: '💳' },
    { name: 'Pagos', icon: '💰' }
  ],
  [USERS_TYPES.CLIENT]: [
    { name: 'Mascotas', icon: '🐾' },
    { name: 'Agenda', icon: '📅' },
    { name: 'Turno médico', icon: '⏰' },
    { name: 'Pagos', icon: '💰' },
    { name: 'Historia clínica', icon: '📋' }
  ]
}

// Fake API para obtener las categorias
export function getAllCategories () {
  const allCategories = Object.values(categories).flat()
  return allCategories
}

export function getCategories (userType) {
  return categories[userType] || categories[USERS_TYPES.GUEST]
}
