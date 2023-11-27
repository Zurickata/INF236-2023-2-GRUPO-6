import axios from 'axios'

const API = 'http://localhost:5000/be'

export const loginReq = (user) => axios.post(`${API}/login`, user)
