import api from '../api'
import router from 'Router'

export default {
    namespaced: true,
    state: {
        token: '',
        user: {}
    },
    getters:{
        authenticated(state){
            return state.token != ''
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        AUTHENTICATE (state, {user, token}) {
            state.user = user
            state.token = token
        },
    },
    actions: {
        async login({commit}, credentials){
            const {data} = await api.post('/api/sanctum/token', {
                    device_name: 'spa',
                    ...credentials
                })
            console.info('auth:login:after:post')
            
            commit('AUTHENTICATE', data)
            console.info('auth:login:after:commit')

            router.push({name:'movies-ratings'})
        },
        logout({commit}){
            commit('AUTHENTICATE', {user:{}, token:''})
        }
    }
}