import axios from 'axios'

const API = axios.create({
  baseURL: 'https://raynott-ecom.onrender.com/api',
})

API.interceptors.request.use(config => {
  const token = localStorage.getItem('raynott_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default API
