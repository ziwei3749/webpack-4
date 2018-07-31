<!-- App -->
<template>
  <div class="app">
    <div class="text">App vue is resolved</div>
    <img src="@src/assets/images/me.jpg"
         alt="">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted () {
    console.log(1)
    console.log(process.env.NODE_ENV)
  },

  methods: {}
}
</script>
<style lang="stylus">
.app
  width: 100%
  height: 100%
  appearance: none
  .text
    width: 100px
    height: 100px
    color: red
    background: url('~@src/assets/images/1.png') no-repeat
  img
    width: 100px
    height: 100px
</style>
