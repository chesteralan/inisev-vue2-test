<template>
    <div class="item">
        <img :src="user.image" :alt="user.name" v-on:click="toggleModal" />
        <div class="details">
            <div class="name">{{ user.name }}</div>
            <div class="city">{{ user.address.city }}</div>
        </div>
        <Modal :user="user" v-if="showModal" v-on:toggle="toggleModal" />
    </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'UserItem',
  components: { Modal },
  data () {
    return {
      showModal: false,
      showDetails: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleDetails () {
      this.showDetails = !this.showDetails
    }
  },
  props: {
    user: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .item {
    width: 100%;
    position: relative;
  }
  .item:hover > .details {
    display: block;
  }
  img {
    width: 100%;
    border-radius: 10px;
    opacity: 80%;
    cursor: pointer;
  }

  .item:hover > img {
    opacity: 1;
  }
  .details {
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    display:none;
    cursor: pointer;
  }
  .details > .name {
    color: #FFF;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  .details > .city {
    color: #FFF;
    text-align: center;
    cursor: pointer;
  }
</style>
