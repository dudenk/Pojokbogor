import axios from 'axios'

export default axios.create({
  baseURL: 'http://jabar.pojoksatu.id/wp-json/wp/'
})
