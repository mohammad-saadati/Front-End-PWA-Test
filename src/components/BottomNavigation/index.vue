<template>
  <div class="bottom-navigation">
    <router-link to="#" class="home-navigation-item">
      <img src="@/assets/icons/inbox.png" alt="">
    </router-link>

    <div class="icons">
      <router-link to="#">
        <img class="navigation-item" src="@/assets/icons/inbox.png" alt="">
      </router-link>
      <router-link to="#">
        <img class="navigation-item" src="@/assets/icons/edit.png"  alt="">
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomNavigation"
}
</script>
<style>
@import "./index.css";
</style>