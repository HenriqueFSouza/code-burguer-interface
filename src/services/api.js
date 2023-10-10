import axios from 'axios'

const apiCordeBurguer = axios.create({
  baseURL: 'https://code-burguer-api-production.up.railway.app'
})

apiCordeBurguer.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default apiCordeBurguer
