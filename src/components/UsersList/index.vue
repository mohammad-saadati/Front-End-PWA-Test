<template>
  <div>
    <div class="logo-image"><img src="@/assets/icons/image 2.png" alt=""></div>

    <ul class="filters">
      <li 
        :class="['filter', currentFilter == filter ? 'active' : '']" 
        v-for="(filter, index) in filters" 
        :key="index"
        @click="setFilter(filter)"
      >{{ filter }}</li>
    </ul>

    <template v-if="userList">
      <user-item v-for="(user, index) in filteredUser" :key="index" :user="user"/>
    </template>
  </div>
</template>
<script>
import UserItem from "@/components/UserItem";

export default {
  name: "UsersList",
  components: {
    UserItem
  },
  data() {
    return {
      page:1,
      userList: null,
      loading: false,
      currentFilter: 'All',
      filteredUser: null,
      filters: ["Archived", "From users", "from Hoopa", "All"]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      if(this.loading) return;
      this.loading = true;

      try {
        const res = await this.request('api/users', "get", {}, {page:this.page})
        const {data} = res;
        this.userList = data.data;
        this.filteredUser = this.userList;
      } 
      catch(error) {
        console.log(error)
      } 
      finally {
        this.loading = false;
      }
    },
    setFilter(filter) {
      switch (filter) {
        case "All":
          this.filteredUser = this.userList;
          this.currentFilter = filter;
          break;
        case "from Hoopa":
          this.filteredUser = this.userList.filter(item => item.id % 2 == 0 );
          this.currentFilter = filter;
          break;
        case "From users":
          this.filteredUser = this.userList.filter(item => item.id % 3 == 0 );
          this.currentFilter = filter;
          break;
        case "Archived":
          this.filteredUser = this.userList.filter(item => item.id % 5 == 0 );
          this.currentFilter = filter;
          break;
      }
    }
  },
}
</script>
<style scoped>
@import "./index.css";
</style>