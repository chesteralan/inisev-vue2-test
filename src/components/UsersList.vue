<template>
    <div class="users-list">
        <h2>Users</h2>
        <div class="users-container">
          <UserItem v-for="user in getUsers" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserItem from './UserItem.vue'

export default {
  name: 'users-list',
  components: { UserItem },
  computed: mapGetters([
    'getUsers'
  ]),
  methods: mapActions([
    'loadUsers'
  ]),
  mounted () {
    this.loadUsers()
  }
}
</script>

<style scoped>
  .users-list {
    width: calc(100% - 250px);
    min-height: calc(100vh - 100px);
    padding: 50px;
  }
  h2 {
    padding: 0;
    margin: 0 0 20px 0;
    text-align: right;
  }
  .users-container {
    display: grid;
    row-gap: 50px;
    grid-template-columns: auto auto auto auto;
    column-gap: 100px;
  }
</style>
