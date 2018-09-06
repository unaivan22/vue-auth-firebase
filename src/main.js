// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
var config = {
  apiKey: "AIzaSyBstqPABypPqxH8kbYugvVgBUMx-d8aLlU",
  authDomain: "vue-auth-36ffa.firebaseapp.com",
  databaseURL: "https://vue-auth-36ffa.firebaseio.com",
  projectId: "vue-auth-36ffa",
  storageBucket: "vue-auth-36ffa.appspot.com",
  messagingSenderId: "72279956937"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if (!app){
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
