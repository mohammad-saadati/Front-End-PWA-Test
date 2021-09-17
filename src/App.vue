<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TokenService from '@/services/token';

export default {
  name: "App",
   created() 
  {
    this.setCurrentUser();
  },
  methods: 
  {
    setCurrentUser() {	
      const currRoute = this.$route.name;
      
      try {
        if(!TokenService.getToken()) {
          if(currRoute != 'login') this.$router.push('/login')
          return;
        }
        if(currRoute != 'home') this.$router.push('/');
      } catch (error) 
      {
        console.error(error)
      }
    }
  }
};
</script>

<style>
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: url("./assets/fonts/IRANSans/IRANSansWeb.woff2") format('woff2');
}
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: 500;
  font-display: auto;
  src: url("./assets/fonts/IRANSans/IRANSansWeb_Medium.woff2") format('woff2');
}
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: bold;
  font-display: auto;
  src: url("./assets/fonts/IRANSans/IRANSansWeb_Bold.woff2") format('woff2');
}
body {
  margin: 0;
}
#app {
  font-family: IRANSans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
  font-weight: normal;
}
/* // loading */
.loader {
  display: inline-block;
  width: 15px;
  height: 15px;
  position: relative;
  border: 4px solid #Fff;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  25% {
    height: 0%;
  }
  50% {
    height: 100%;
  }
  75% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
</style>
