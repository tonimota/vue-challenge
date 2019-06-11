import axios from 'axios'

const products = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 2000
})

export default products
