<template>
  <div class="login">
    <h3>Sign in to your account</h3>
    <div v-if="error" class="error">Login error</div>
    <div><input type="text" v-model="username" /></div>
    <div><input type="password" v-model="password" /></div>
    <button v-on:click="triggerLogin">Sign In</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    triggerLogin: function () {
      if (this.username === 'admin' && this.password === '1234') {
        return this.$router.push({ name: 'Users' })
      }
      this.error = true
      setTimeout(function () {
        this.error = false
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
  font-size: 10px;
}
</style>
