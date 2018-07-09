<template>
  <div class="login col-xs-12 col-md-6">
    <h3>Login</h3>
    <input class="form-control" type="text" v-model="email" placeholder="Email"><br>
    <input class="form-control" type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn" class="btn btn-primary">Connection</button>
    <p>You don't have an account ? You can
      <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
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
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('products')
          },
          err => {
            alert('Oops. ' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
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
