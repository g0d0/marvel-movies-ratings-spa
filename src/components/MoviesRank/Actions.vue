<template>
    <div id="movies-list-actions" class="row">
        <a 
            v-if="isConfirmed"
            class="waves-effect waves-light btn-large"
        >
            Choose your favorite movies
        </a>

        <a 
            v-else
            class="waves-effect waves-light btn-large"
        >
            Confirm choices
        </a>
    </div>
</template>

<script>
export default {
    name: 'MoviesListActions',

    props: {
        value: {
            type: [],
            required: true,
        },
    },

    data: () => ({
        isConfirmed: true, 
    }),

    computed: {
        showActions () {
            return !!this.value.length;
        }
    },
}
</script>

<style lang="scss" scoped>
    #movies-list-actions
    {
        a
        {
            background-color: purple;
        }
    }
</style>
