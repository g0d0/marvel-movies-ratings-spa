import axios from "axios"

const makeAuthorizationHeader = () => {
    let token = ''

    try{
        const vuex = JSON.parse(localStorage.getItem('vuex'))
        token = vuex['auth']['token']
    }catch{
        console.error('Error to get vuex data from localStorage. Are you logged in?')
    }

    return `Bearer ${token}`
}

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost",
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

const get = async (url) => {
    return api.get(url, {
        headers: {
            'Authorization': makeAuthorizationHeader()
        }
    }) 
}

const post = async (url, data) => {
    return api.post(url, data, {
        headers: {
            'Authorization': makeAuthorizationHeader()
        }
    }) 
}

const destroy = async (url) => {
    console.info('xablau', makeAuthorizationHeader())
    return api.delete(url, {
        headers: {
            'Authorization': makeAuthorizationHeader()
        }
    }) 
}

export default api

export {
    post,
    get,
    destroy,
}