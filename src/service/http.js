import axios from 'axios'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api-list-simple.herokuapp.com'

const products = axios.create({
  baseURL: url,
  timeout: 3000
})

export default products
