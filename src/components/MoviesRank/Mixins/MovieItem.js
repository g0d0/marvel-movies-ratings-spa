export default {
    props: {
        modelValue: {
            type: Object,
            required: true,
        },
    },

    data: () => ({
        input: {
            id: 0,
            starred: false,
            name: '',
        },
    }),

    watch: {
        input () {
            this.$emit('input', this.input)
        },
        modelValue () {
            this.input = this.modelValue
        }
    },

    beforeMount () {
        this.input = this.modelValue;
    }
}