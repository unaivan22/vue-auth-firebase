<template>
    <div class="login">
        <h3>signin</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signIn">Connect</button>
        <p>Kamu tak memiliki akun?? Kamu bisa membuat <router-link to="/signup">satu</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'

    export default {
        name: 'login',
        data: function(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            signIn: function(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('hello')
                    },
                    (err) => {
                        alert('Oopes. ' + err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p {
      margin-top: 40px;
      font-size: 13px;  
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>