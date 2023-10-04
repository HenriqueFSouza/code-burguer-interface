import axios from 'axios'

const apiCordeBurguer = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCordeBurguer.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default apiCordeBurguer
