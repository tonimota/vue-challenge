import axios from 'axios'

const products = axios.create({
  baseURL: 'https://api-list-simple.herokuapp.com',
  timeout: 2000
})

export default products
