<template>
    <div class="hello">
        <!-- menampilkan NAVBAR -->
        <Navbar />
        <!-- END menampilkan NAVBAR -->

        <!-- menampilkan Sidenav -->
        <Sidenav />
        <!-- END menampilkan Sidenav -->
        <Home />

        <nav>
            <div class="">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo"><i class="large material-icons">view_column</i> Materialize</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        
                        <li><a v-on:click="logout">Keluar</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row">
            <div class="col m2 s12">
                <article>
                <div class="card">
                    <div class="card-image">
                        <img src="../../img/download.jpeg">
                        <span class="card-title">Card Title</span>
                    </div>
                <div class="card-content">
                    <div class="collection demo-navigation mdl-navigation mdl-color--blue-grey-800">
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
                       <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
                    </div>
                </div>
                <div class="card-action">
                      <a href="#">This is a link</a>
                </div>
                    </div>
                </article>
            </div>

            <div class="col m3 s12">
                <div class="card red darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <!-- <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p> -->
                    </div>
                </div>
            </div>
            <div class="col m3 s12">
                <div class="card blue darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <!-- <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p> -->
                    </div>
                </div>
            </div>
            <div class="col m4">
                <div class="card pink darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <!-- <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p> -->
                    </div>
                </div>
            </div>
            <div class="col m4 s12">
                <div class="card">
                    <div class="card-content white-text blue-grey darken-1">
                        <span class="card-title">Tugas ku</span>
                        <span>26 desember</span>
                    </div>
                    <div class="card-content">
                        <form action="">
                            <p> 
                                <input type="checkbox" class="filled-in" checked="checked"/>
                                <span>Mandi</span>
                            </p>
                            <p>
                                <input type="checkbox" class="filled-in" checked="checked"/>
                                <span>Makan</span>
                            </p>
                            <p>
                                <input type="checkbox" class="filled-in" checked="checked"/>
                                <span>Repeat</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col m3 s12">
                <div class="card">
                    <div class="card-content white-text orange darken-1">
                        <span class="card-title">Penerbangan</span>
                        <span>28 desember</span>
                    </div>
                    <div class="card-content latar">
                       
                    </div>
                </div>
            </div>
                <div class="col m3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
            <div class="col m5">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
            <div class="col m5">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>



            
        </div>
        


        



        
        <!-- <button v-on:click="logout">logout</button> -->
    </div>
</template>

<script>
// import Navbar from './Navbar'
// import Sidenav from './Sidenav'
// import Home from './Home'
import firebase from 'firebase';

export default {
    name : 'hello',
    components: {
        // Navbar,
        // Sidenav,
        // Home
    },
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

<style>
.hello {
    display: inline;
}

.latar {
    background-image: url(../../img/download.jpeg);
    min-height: 200px;
}
</style>