<template>
    <div class="modal">
        <div class="wrapper" v-on:click="toggleModal"></div>
        <div class="container">
            <div class="close-button" v-on:click="toggleModal">&times;</div>
            <img :src="user.image" :alt="user.name" />
            <div class="details">
                <div class="name">{{ user.name }}</div>
                <div class="email">{{ user.email }}</div>
                <div class="phone">{{ user.phone }}</div>
                <div class="address">{{ user.address.street }}, {{ user.address.city }}</div>
                <div class="website"><a :href="`https://${user.website}`" target="_blank">{{ user.website }}</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    user: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    toggleModal () {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
  .modal {
    position: fixed;
    z-index: 1;
  }
  .wrapper {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 50%;
  }
  .container {
    position: fixed;
    z-index: 2;
    width: 500px;
    height: 200px;
    display: flex;
    background-color: #FFF;
    top: calc(50% - 100px);
    left: calc(50% - 250px);
    box-shadow: 0 0 10px #000;
  }
  .details {
    padding: 40px 20px 20px 20px;
    width: 100%;
  }
  .details > div {
    text-align: left;
    padding-bottom: 7px;
    padding-left: 40px;
  }
  .name {
    font-weight: bold;
  }
  .close-button {
    position: absolute;
    font-size: 40px;
    right: 20px;
    top: 20px;
    width: 25px;
    height: 25px;
    line-height: 20px;
    cursor: pointer;
  }
</style>
