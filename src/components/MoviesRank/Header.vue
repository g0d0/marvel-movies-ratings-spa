<template>
    <div class="header">
        <h5>
            Choose your favorite movies
        </h5>
        <a 
            v-if="isLogged" 
            class="waves-effect waves-light btn"
            @click="onAlreadyButtonClick"
        >
            Already!
        </a>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'MoviesListHeader',

    computed: mapGetters({
        isLogged: 'auth/authenticated'
    }),

    methods: {
        ...mapActions({
            logout: 'auth/logout',
            getMovies: 'movies/getMovies'
        }),
        onAlreadyButtonClick () {
            this.logout()
            this.getMovies()
        }
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>