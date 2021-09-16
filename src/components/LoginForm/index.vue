<template>
  <form @submit.prevent="onSubmit">
    <div>
      <div class="login-header"></div>
      <img class="logo" src="@/assets/icons/image 3.png" alt="">
      <img class="snake-badge" src="@/assets/icons/04 (2).png" alt="">
    </div>
    
    <p class="login-guide">برای وارد شدن نام کاربری و رمز عبورت را بنویس</p>

    <div class="inputs-wrapper">
      <!-- can't use v-model cause the api only accepts it's own predefined users. -->
      <input type="text" placeholder="نام کاربریت رو اینجا بنویس">
      <input type="password" placeholder="رمز عبورت رو اینجا بنویس">
    </div>

    <div class="login-related-CTA">
      <span class="title">رمز عبورت را فراموش کردی؟</span>
      <span class="action">بازیابی رمز عبور</span>
    </div>
    <div class="login-related-CTA">
      <span class="title">رمز عبورت را فراموش کردی؟</span>
      <span class="action">بازیابی رمز عبور</span>
    </div>
    
    <div style="display:flex; flex-direction:column;">
      <button type="submit">
        <span v-if="loading" class="loader"><span class="loader-inner"></span></span>
        <span v-else>ورود</span>
      </button>
    </div>
  </form>
</template>
<script>
import TokenService from '@/services/token';

export default {
  name: "LoginForm",
  data() {
    return {
      loading: false,
      username: "eve.holt@reqres.in",
      password: "pistol"
    }
  },
  methods: {
    async onSubmit() {
      if(this.loading) return;
      this.loading = true;

      try {
        const res = await this.request('api/login', "post", {username: this.username, password: this.password})
        const {data} = res;
        
        TokenService.saveToken(data.token)
        this.$router.push('/')

        // if (error) {
        //   this.$toast.open({
        //     message: 'حطای API/n' + error,
        //     type: 'error',
        //   })
        //   return;
        // }
        // this.$toast.open({
        //   message: 'ابلاغیه با موفقیت ایجاد شد.',
        //   type: 'success',
        // })
      } 
      catch(error) {
        console.log(error)
        // this.$toast.open({
        //   message: 'حطای شبکه' + error,
        //   type: 'error',
        // })
      } 
      finally {
        this.loading = false;
      }
    }
  }
}
</script>
<style scoped>
@import "./index.css";
</style>