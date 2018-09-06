<template>
    <div id="Navbar">
        <nav>
            <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo"><i class="large material-icons">view_column</i> Materialize</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a v-on:click="logout">Keluar</a></li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase';        
export default {
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
                })
            }
        }
    }
</script>