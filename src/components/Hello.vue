<template>
    <div class="hello">
        <h1>Hello</h1>
        <h1>{{ msg }}</h1>
        <button v-on:click="logout">logout</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name : 'hello',
    data () {
        return {
            msg: 'Welcoom'
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        }
    }
}

</script>