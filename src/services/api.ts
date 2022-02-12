import axios from 'axios'

export const api = axios.create({
    baseURL: "https://flow3r-api-master-2eqj3fl3la-ue.a.run.app/v2/"
})