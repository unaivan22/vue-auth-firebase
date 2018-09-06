<template>
    <div class="sign-up">

       <div class="row">
    <div class="col offset-m3 m6">
      <div class="card">
    <div class="card-content">
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><router-link to="/signIn">Login</router-link><a href="#test4">LOGIn</a></li>
        <li class="tab"><router-link to="/signup">SignUP</router-link><a href="#test6">SignUP</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
            <div class="card-action">
                <div class="card-action">
                        <input class="validate" type="text" v-model="email" placeholder="Email">
                        <input type="password" v-model="password" placeholder="Password">
                        <a class="col m12 s12 center waves-effect waves-light btn" v-on:click="signIn">DAFTAR</a>
                </div>
            </div>
    </div>
  </div>
    </div>
  </div>


        <!-- <p>ayo buat satu akun</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span><router-link to="/login">kembali</router-link></span> -->
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
    .card {
        margin-top: 20%;
    }
    a {
        margin-top: 10px;
    }
    p {
        display: inline;
    }
    /* .signUp{
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
    } */
</style>