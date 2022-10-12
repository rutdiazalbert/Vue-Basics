import axios from 'axios'

export const usersService = () => {
  const dataURL = 'https://jsonplaceholder.typicode.com/users'
  return axios.get(dataURL)
}
export const userService = (userId) => {
  const dataURL = `https://jsonplaceholder.typicode.com/users/${userId}`
  return axios.get(dataURL)
}
