<template>
    <div>
        
        <router-view></router-view>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
    name: 'DefaultLayout',

    data () {
        return {
            user: this.$store.state.user
        }
    },
    methods:{
        ...mapActions({
            signOut:"logout"
        }),
        async logout(){
            await axios.post('/logout').then(()=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>