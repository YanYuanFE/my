<template>
  <div class="form-item">
    <label :style="labelStyle">{{labelText}}</label>
    <input :type="inputType" v-model="value" @focus="handleFoucs" @blur="handleBlur" autocomplete="off">
  </div>
</template>

<script>
  export default {
    name: 'login-input',
    props: {
      labelText: {
        type: String,
        default: ''
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },
    data () {
      return {
        value: '',
        focus: false
      }
    },
    methods: {
      handleFoucs () {
        this.focus = true
      },
      handleBlur () {
        this.focus = false
      }
    },
    computed: {
      labelStyle () {
        return this.focus || this.value ? { transform: 'scale(0.75) translate(0px, -18px)' } : { width: '100%' }
      }
    }
  }
</script>

<style scoped lang="scss">
  label {
    position: absolute;
    font-size: 20px;
    top: 35px;
    text-align: left;
    left: 0;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    z-index: 1;
    transform: scale(1) translate(0px, 0px);
    transform-origin: left top 0px;
    pointer-events: none;
    user-select: none;
    color: #6F6F6F;
  }

  input {
    height: 103px;
    width: 100%;
    border: none;
    background-color: #FFF;
    /*position: absolute;*/
    bottom: 0;
    line-height: 42px;
    font-size: 30px;
    color: #363636;
    border-bottom: 1px solid #EBEBEB;
    outline: none;
  }
</style>
