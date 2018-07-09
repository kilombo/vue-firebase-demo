<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input class="form-control" type="text" v-model="email" placeholder="Email"><br>
    <input class="form-control" type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp" class="btn btn-primary">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.$router.replace('products')
      } else {
        // No user is signed in.
      }
    })
  },
    methods: {
      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('products')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .sign-up {
    margin-top: 40px;
  }
  span{
    font-size: 13px;
  }
</style>
