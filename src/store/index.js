import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'
import movies from './movies'

export default createStore({
    plugins:[
        createPersistedState()
    ],
    modules: {
        auth,
        movies,
    }    
})