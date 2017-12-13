<template>
  <div class="login-container">
    <div class="header">
      <div class="arrow">
        <img src="static/images/10copy4.png" alt="">
      </div>
      <div class="connect-btn">
        <button>Connect with facebook</button>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span>SIGN IN</span>
      </div>
      <div class="form">
        <login-input labelText="Email" inputType="email"/>
        <login-input labelText="Password" inputType="password" />
      </div>
      <div class="forget">
        <p>Forgot your password?</p>
      </div>
      <div class="sign-btn" @click="sign">
        <button>Sign In</button>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginInput from '@/base/login-input/login-input'
  export default {
    name: 'Login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      sign () {
        this.$router.push({
          path: `/favorite`
        })
      }
    },
    components: {
      LoginInput
    }
  }
</script>

<style scoped lang="scss">
  .login-container {
    .connect-btn {
      margin-top: 39px;
      button {
        height: 88px;
        background-image: linear-gradient(to right, #6A409F, #901EB1);
        width: 80%;
        color: #FFF;
        border-radius: 100px;
        border: none;
      }
    }
    .content {
      padding-top: 53px;
      .title {
        span {
          font-size: 36px;
          color: #363636;
          border-bottom: 2px solid #363636;
        }
      }
      .form {
        margin: 56px auto;
        width: 630px;
        .form-item {
          height: 100px;
          /*border-bottom: 1px solid #D0D8E0;*/
          position: relative;
          margin-bottom: 5px;
        }
      }
      .forget {
        margin: 106px auto 46px;
        font-size: 24px;
        color: #6F6F6F;
      }
      .sign-btn {
        button {
          width: 100%;
          background-color: #FD4C9D;
          color: #FFF;
          height: 100px;
          border: none;
        }
      }
    }

  }
</style>
