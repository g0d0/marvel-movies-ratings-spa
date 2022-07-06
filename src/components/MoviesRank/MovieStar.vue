<template>
    <div>
        <span
            v-if="input.starred"
            class="material-symbols-sharp movie-vote-starred"
        >
            star
        </span>

        <span
            v-else
            class="material-symbols-sharp movie-vote"
            @click="setStarred(true)"
        >
            grade
        </span>
    </div>
</template>

<script>
import MovieItemMixin from './Mixins/MovieItem.js'

export default {
    name: 'MovieStar',
    
    mixins: [MovieItemMixin],
}
</script>

<style scoped>
    .movie-vote-starred
    {
        color: white;
    }

    .movie-vote
    {
        color: grey;
    }
</style>