<template>
  <div class="favorite">
    <header-nav title="Favorite">
    </header-nav>
    <div class="title">You liked</div>
    <div class="favorite-content">
      <div v-for="(favorite, index) in favoriteList" class="item" @click="profile">
        <img :src="favorite.img" alt="">
        <h3>{{favorite.name}}</h3>
        <span class="mark" v-if="favorite.mark"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '@/base/nav/nav'
  export default {
    name: 'favorite',
    data () {
      return {
        favoriteList: [{
          name: 'Maybell Dynes',
          img: 'static/images/Layer1189.png',
          mark: true
        }, {
          name: 'Christy Weinstein',
          img: 'static/images/Layer1190.png',
          mark: false
        }, {
          name: 'Kaley Hirano',
          img: 'static/images/Layer1191.png',
          mark: false
        }, {
          name: 'Armanda Febus',
          img: 'static/images/Layer1192.png',
          mark: true
        }, {
          name: 'Nila Hebel',
          img: 'static/images/Layer1193.png',
          mark: true
        }, {
          name: 'Clara Hensen',
          img: 'static/images/Layer1194.png',
          mark: true
        }]
      }
    },
    methods: {
      profile () {
        this.$router.push({
          path: `/profile`
        })
      }
    },
    components: {
      HeaderNav
    }
  }
</script>

<style scoped lang="scss">
  .favorite {
    height: 100%;
    .title {
      height: 50px;
      line-height: 50px;
      font-size: 30px;
      color: #363636;
      border-bottom: 1px solid #363636;
      font-weight: 600;

    }
    .favorite-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 40px 60px;
      background: #ECECEC;
      height: 100%;
      .item {
        margin-top: 60px;
        position: relative;
      }
      img {
        width: 226px;
        height: 226px;
      }
      .mark {
        width: 35px;
        height: 35px;
        background: #4cd964;
        display: inline-block;
        border-radius: 100%;
        position: absolute;
        bottom: 170px;
        right: 20px;
      }

    }
  }

</style>
