import axios from 'axios'
import api from './api'//
const api = axios.create({

    baseURL: 'http://localhost:3000'

})

export default api