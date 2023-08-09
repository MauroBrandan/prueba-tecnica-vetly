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

export async function getUser (email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users')) || []
      const user = users.find(u => u.email === email)
      if (user) {
        resolve(user)
      } else {
        reject(new Error('Usuario no encontrado'))
      }
    }, 1000)
  })
}
