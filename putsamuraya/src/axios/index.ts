
import axios from 'axios'
import process from 'process'
export default axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})
