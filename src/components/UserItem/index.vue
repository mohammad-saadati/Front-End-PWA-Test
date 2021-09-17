<template>
  <div>
    <div :class="['avatar-box' ,activate ? 'slide-right' : '']" v-longpress="slide" @click="incrementPlusOne">
      <div :class="['delete', activate ? 'activate' : '']" @click="showModal = true"><img src="@/assets/icons/trash-alt.png" alt=""></div>
      <div class="content">
        <span class="name">{{ user.first_name }} {{ user.last_name }}</span>
        <span class="some-text">this is a placeholder text</span>
      </div>
      <img class="avatar" :src="user.avatar">
    </div>
    <div v-if="showModal" class="modal">
      <span>Are you sure about removing user:{{ user.first_name }} {{ user.last_name }}</span>
      <div style="margin-top:2rem;">
        <span class="confirm" @click="remove">yes</span>
        <span class="cancel" @click="cancel">cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {type:Object, required: true}
  },
  data() {
    return {
      activate:false,
      showModal: false
    }
  },
  methods: {
    slide() {
      this.activate = true;
    },
    incrementPlusOne() {
      console.log("yes")
    },
    remove() {
      this.activate = false;
    },
    cancel() {
      this.showModal = false;
      this.activate = false;
    }
  }
}
</script>

<style>
@import "./index.css";
</style>