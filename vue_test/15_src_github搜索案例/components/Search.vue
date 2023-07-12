<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div><input type="text" placeholder="enter the name you search" v-model="kw" />&nbsp;<button @click="searchUser">Search</button></div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      kw: ''
    }
  },
  methods: {
    searchUser() {
      //请求前更新List的数据
      this.$bus.$emit('updateUserList', { isFirst: false, isLoading: true, users: [], errMag: '' })
      axios.get(`https://api.github.com/search/users?q=${this.kw}`).then(
        response => {
          //请求成功后更新List的数据
          this.$bus.$emit('updateUserList', { isLoading: false, errMsg: '', users: response.data.items })
        },
        error => {
          //请求后更新List的数据
          this.$bus.$emit('updateListData', { isLoading: false, errMsg: error.message, users: [] })
        }
      )
    },
    mounted() {}
  }
}
</script>

<style></style>
