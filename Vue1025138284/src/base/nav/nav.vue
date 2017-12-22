<template>
   <div class="nav">
     <h1>{{title}}</h1>
     <slot></slot>
   </div>
</template>

<script>
    export default {
      name: 'header-nav',
      props: {
        title: {
          type: String,
          default: ''
        }
      }
    }
</script>

<style scoped lang="scss">
  .nav {
    height: 95px;
    background: #FFF;
    line-height: 95px;
    h1 {
      font-size: 34px;
    }
  }
</style>
