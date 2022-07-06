<template>
    <div class="row">
        <div class="col s6 center-align">
            <form action="javascript:void(0)" class="row" method="post">
                <div class="row">
                    <div class="input-field col s12">
                        <input 
                            id="email" 
                            type="email" 
                            class="validate" 
                            v-model="credentials.email"
                        />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input 
                            id="password" 
                            type="password" 
                            class="validate" 
                            v-model="credentials.password"
                        />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <button 
                        type="submit" 
                        :disabled="processing" 
                        @click="login" 
                        class="btn btn-primary btn-block"
                    >
                        {{ processing ? "Please wait" : "Login" }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { AxiosError } from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'LoginPage',

    data: () => ({
        credentials: {
            email: "",
            password: ""
        },
        processing: false
    }),

    methods: {
        ...mapActions('auth', {
            signIn: 'login'
        }),
        async login() {
            this.processing = true

            try{
                console.info('LoginPage:before')
                await this.signIn(this.credentials)
                this.processing = true
            }catch(error){
                if(error instanceof AxiosError && error.response.status === 422){
                    window.M.toast({html: error.response.data.message})
                }
                this.processing = false
            }
        },
    }
}
</script>