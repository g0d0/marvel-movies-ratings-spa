<template>
    <tr
        :class="{'movie-vote-starred': input.starred}"
        @click="toggleStarred"
    >
        <td v-if="showFavoriteColumn">
            <movie-star v-model="input"/>
        </td>
            <td>{{ formatRating(input.rating) }}</td>
        <td>{{ input.name }}</td>
    </tr>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieItemMixin from './Mixins/MovieItem.js'
import MovieStar from './MovieStar'

export default {
    name: 'MovieItem',

    components: {
        MovieStar,
    },
    
    mixins: [MovieItemMixin],

    computed: {
        ...mapGetters({
            showFavoriteColumn: 'auth/authenticated',
            isAuthenticated: 'auth/authenticated',
        })
    },

    methods: {
        ...mapActions('movies', [
            'saveFavorite',
            'deleteFavorite',
        ]),
        async toggleStarred () {
            if (this.processingToggle)
            {
                return
            }

            if(!this.isAuthenticated)
            {
                this.$router.push('login')
                return
            }

            if(this.input.starred)
            {
                this.processingToggle = true
                await this.deleteFavorite(this.input)
                this.processingToggle = false
                return
            }

            this.processingToggle = true
            await this.saveFavorite(this.input)
            this.processingToggle = false
            this.input.starred = true
        },
        formatRating (rating) {
            return rating > 0 && rating || '';
        }
    },
}
</script>

<style lang="scss" scoped>
    .movie-vote-starred
    {
        background-color: #6f42c1;
        color: whitesmoke;
    }

    tr:hover
    {
        background-color: #6610f2;
        color: whitesmoke;
    }
</style>