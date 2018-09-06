<template>
    <div class="login">
      
       <div class="row">
    <div class="col offset-m3 m6">
      <div class="card">
    <div class="card-content">
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><a href="#test4">LOGIn</a></li>
        <li class="tab"><router-link to="/signup">SignUP</router-link><a href="#test6">SignUP</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
            <div class="card-action ">
                <div class="input-field">
                    <input class="validate" type="text" v-model="email" placeholder="Email">
                <input type="password" v-model="password" placeholder="Password">
                <a class="col m12 s12 center waves-effect waves-light btn" v-on:click="signIn">Connect</a>
                </div>
                
            </div>
    </div>
  </div>
    </div>
  </div>
            

<!-- 

        <h3 class="center">signin</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signIn">Connect</button>
        <p>Kamu tak memiliki akun?? Kamu bisa membuat <router-link to="/signup">satu</router-link></p>
    </div> -->
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
    .card {
        margin-top: 20%;
    }
    a {
        margin-top: 10px;
    }
    /* .login {
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
    } */
</style>