<template>
  <div class="wraper">
    <!-- <button class="pwa" :style="{'display':'block'}" @click="installer()">install pwa</button> -->
    <div style="margin-bottom:125px;">
      <users-list/>
      <bottom-navigation/>
    </div>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList";
import BottomNavigation from "@/components/BottomNavigation";

export default {
  name: "Home",
  components: {
    UsersList,
    BottomNavigation
  },
  data() {
    return {
      installBtn: "none",
      installer: undefined
    }
  },
  craeted() {
    let installPrompt;
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = "block";
    });
    this.installer = () => {
      this.installBtn = "none";

      installPrompt.prompt();

      installPrompt.userChoice.then(result => {
        if(result.outcome === "accepted") {
          console.log("User accepted");
        } else {
          console.log("User denied");
        }
        installPrompt = null;
      });
    }
  }
}
</script>
<style>
.wraper {
  position: relative;
}
.pwa {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
}
</style>