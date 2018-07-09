<template>
  <div class="login col-xs-12 col-md-6">
    <h3>Login</h3>
    <input class="form-control" type="text" v-model="email" placeholder="Email"><br>
    <input class="form-control" type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn" class="btn btn-primary">Connection</button>
    <p>
    <button class="btn btn-secondary" @click="googleLogin">Google Login</button>
    </p>
    <p>You don't have an account ? You can
      <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
const googleProvider = new firebase.auth.GoogleAuthProvider()
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
    },
    googleLogin() {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken
          // The signed-in user info.
          let user = result.user
          // ...
          this.$router.replace('products')
        })
        .catch((error) => {
          // Handle Errors here.
          let errorCode = error.code
          let errorMessage = error.message
          // The email of the user's account used.
          let email = error.email
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential
          // ...
          console.error(error);
        })
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
