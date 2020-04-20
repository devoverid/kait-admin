import Axios from 'axios'

export default Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API
})
