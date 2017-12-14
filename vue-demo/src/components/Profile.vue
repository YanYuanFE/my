<template>
  <div class="profile">
    <header-nav title="Profile">
      <div class="header-right">
        1.5k
        <img src="static/images/zuanshi_icon.png" alt="">
      </div>
    </header-nav>
    <div class="img-list">
      <div class="left">
        <img src="static/images/12102692943_7542dbf918_b.png" alt="">
      </div>
      <div class="right">
        <img src="static/images/8260117875_5ab9373bce_o.png" alt="">
        <img src="static/images/6689741705_168a8fb882_o.png" alt="">
        <img src="static/images/shutterstock_119695912-uai-387x516.png" alt="">
      </div>
    </div>
    <div class="info">
      <div class="item">
        <h1>134</h1>
        <p>Liked you</p>
      </div>
      <div class="item">
        <h1>112 </h1>
        <p>You liked</p>
      </div>
      <div class="item">
        <h1>15</h1>
        <p>Matched</p>
      </div>
    </div>
    <div class="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco laboris...      </p>
      <div class="contact">
        <div v-for="item in contacts">
          <img :src="item.src" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '@/base/nav/nav'
  export default {
    name: 'profile',
    data () {
      return {
        contacts: [{
          src: 'static/images/facebook.png'
        }, {
          src: 'static/images/twitter.png'
        }, {
          src: 'static/images/googleplus.png'
        }, {
          src: 'static/images/linkedin.png'
        }]
      }
    },
    components: {
      HeaderNav
    }
  }
</script>

<style scoped lang="scss">
  .profile {
    background: #ECECEC;
    height: 100%;
    .header-right {
      position: absolute;
      right: 27px;
      top: 0;
      img {
        width: 38px;
        height: 34px;
      }
    }
    .img-list {
      display: flex;
      height: 564px;
      .left {
        flex: 1;
        img {
          width: 564px;
          height: 564px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        img {
          width: 188px;
          height: 188px;
          border: 1px solid #FFF;
          flex: 1;
        }
      }
    }
    .info {
      display: flex;
      height: 119px;
      padding: 34px 0 26px 0;
      background: #FFF;
      .item {
        flex: 1;
      }
      .item:not(last-child) {
        border-right: 1px solid #D7D7D7;
      }
    }
    .about {
      background: #FFF;
      margin-top: 30px;
      padding: 35px 37px 0;
      h1 {
        text-align: left;
      }
      p {
        padding-bottom: 41px;
        text-align: left;
      }
      .contact {
        display: flex;
        height: 90px;
        align-items: center;
        border-top: 1px solid #EBEBEB;
        div {
          flex: 1;
          img {
            max-width: 44px;
            height: 40px;
          }
        }
      }
    }

  }
</style>
