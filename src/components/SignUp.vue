<template>
    <div class="sign-up">
        <p>ayo buat satu akun</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span><router-link to="/login">kembali</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signUp',
    data: function(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (user) {
                    alert('Berhasil membuat akun');
                },
                function (err) {
                    alert('Wow ' + err.message);
                }
            );
        }
    }
}
</script>




<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>