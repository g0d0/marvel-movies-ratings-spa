import {get, post, destroy} from '../api'

const errorMonitor = error => {
    console.info('@TODO: exibir erro ao usuário de forma mais amigável')
    console.error(error)
};

export default {
    namespaced: true,
    state: {
        movies: []
    },
    getters:{
        favorites(state){
            return state
                .movies
                .sort((movieA, movieB) => movieA.rank - movieB)
        },
    },
    mutations:{
        SET_MOVIES (state, movies) {
            state.movies = movies
        },
        SAVE_FAVORITE (state, data) {
            const index = state.movies.findIndex(movie => movie.id == data.movie_id)
            state.movies[index].starred = true
            state.movies[index].rating += 1
            state.movies[index].favorite_movie_id = data.id
        },
        DELETE_FAVORITE (state, movieId) {
            const index = state.movies.findIndex(movie => movie.id == movieId)
            state.movies[index].starred = false
            state.movies[index].rating -= 1
            state.movies[index].favorite_movie_id = null
        }
    },
    actions: {
        async saveFavorite ({commit}, {id}) {
            try{
                const { data } = await post('/api/favorite-movies', {
                    'movie_id': id
                })
                commit('SAVE_FAVORITE', data)
            }catch (error) {
                errorMonitor(error)
            }
        },
        async deleteFavorite ({commit}, {id, favorite_movie_id}) {
            try{
                await destroy(`/api/favorite-movies/${favorite_movie_id}`)
                commit('DELETE_FAVORITE', id)
            }catch (error) {
                errorMonitor(error)
            }
        },
        async getMovies({commit}) {
            try{
                const {data} = await get('/api/favorite-movies')
                commit('SET_MOVIES', data)
            }catch (error) {
                commit('SET_MOVIES', [])
            }
        },
    }
}