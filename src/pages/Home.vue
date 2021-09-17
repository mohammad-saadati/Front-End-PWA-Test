<template>
  <div style="margin-bottom:125px;">
    <users-list/>
    <bottom-navigation/>
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
  }
}
</script>