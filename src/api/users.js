export function getAllUsers () {
  const users = JSON.parse(localStorage.getItem('users')) || []
  return users
}

export function saveUserToLocalStorage (NewUser) {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const userExists = users.some(user => user.email === NewUser.email)

  if (userExists) {
    return
  }

  users.push(NewUser)
  localStorage.setItem('users', JSON.stringify(users))
}

export async function getUserByEmail (email) {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(u => u.email === email)
    if (user) {
      resolve(user)
    } else {
      reject(new Error('Usuario no encontrado'))
    }
  })
}

export function updateUserType (user, newType) {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const existingUserIndex = users.findIndex(existingUser => existingUser.email === user.email)

  if (existingUserIndex === -1) return // Doesn't exists

  users[existingUserIndex].type = newType
  localStorage.setItem('users', JSON.stringify(users))
  return users[existingUserIndex]
}
