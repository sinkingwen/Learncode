<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <School ref="sch"></School>
    <button ref="btn" @click="showDom">点击弹出DOM元素</button>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: { School },
  data() {
    return {
      msg: 'Welcome to NKU'
    }
  },
  methods: {
    showDom() {
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style></style>
