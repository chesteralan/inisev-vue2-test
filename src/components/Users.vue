<template>
  <div class="users">
    <Sidebar />
    <UsersList />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import UsersList from './UsersList.vue'

export default {
  components: { Sidebar, UsersList },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  display:flex;
}
</style>
