<template>
    <div class="movies-list">
        <movies-list-header></movies-list-header>
        <table class="responsive-table">
            <thead>
                <tr>
                    <th v-if="showFavoriteColumn">Star</th>
                    <th>Rank</th>
                    <th>Movie</th>
                </tr>
            </thead>

            <tbody>
                <movie-item
                    v-for="(_, index) in movies"
                    :key="index"
                    v-model="movies[index]"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
import MovieItem from './MovieItem';
import MoviesListHeader from './Header'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MoviesList',

    components: {
        MovieItem,
        MoviesListHeader
    },

    computed: {
        ...mapGetters({
            showFavoriteColumn: 'auth/authenticated',
            movies: 'movies/favorites'
        })
    },

    methods: mapActions('movies', [
        'getMovies'
    ]),

    created () {
        this.getMovies()
    }
}
</script>

<style lang="scss" scoped>
    .movies-list {
        h5 {
            font-family: "Bungee", sans-serif;
        }
    }
</style>