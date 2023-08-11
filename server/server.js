import express from 'express'
import { getAllItems, saveItem } from './db/index.js'

const USER_TYPES = ['ADMIN', 'CLIENTE', 'PROFESIONAL', 'VETERINARIA']

const app = express()
const port = 5555

app.use(express.json())

// Endpoint to get all users
app.get('/api/Usuarios', (req, res) => {
  const users = getAllItems()

  res.status(200).json(users)
})

// Endpoint to signup user
app.post('/api/Usuario/RegistrarUsuario', (req, res) => {
  const { id_tipo_usuario: idUserType, email } = req.body
  const users = getAllItems()
  const userType = USER_TYPES[idUserType] || USER_TYPES[1]
  const lastUserId = users[users.length - 1]?.id || 0

  const newUser = {
    id: lastUserId + 1,
    email,
    tipo_usuario: userType,
    familias_asignadas: null,
    patentes_individuales_asignadas: null,
    patentes_por_familia_asignadas: null
  }

  users.push(newUser)
  saveItem(users)

  res.status(201).json({
    message: 'Usuario insertado exitosamente',
    newUser
  })
})

// Endpoint to login user
app.post('/api/Usuario/LoginPerfilByEmail', (req, res) => {
  const { email } = req.body
  const users = getAllItems()
  const user = users.find(u => u.email === email)

  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' })
  }

  res.send()
})

// Endpoint to get all categories
app.get('/api/CategoriasProducto/getCategoriasProducto', (req, res) => {
  const categoriesJSON = getAllItems('categories')

  res.status(200).json(categoriesJSON.categories)
})

// Endpoint to get categories by user type
app.get('/api/CategoriasProducto/getCategoriasProducto/:type', (req, res) => {
  const { type } = req.params
  const categoriesJSON = getAllItems('categories')
  const categoriesByType = categoriesJSON.userTypes[type.toLocaleLowerCase()]

  if (categoriesByType) {
    const categories = categoriesByType.map(id => {
      return categoriesJSON.categories.find(cat => cat.id === id)
    })

    res.json(categories)
  } else {
    res.status(404).json({ error: 'Tipo de usuario no encontrado' })
  }
})

app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`)
})
