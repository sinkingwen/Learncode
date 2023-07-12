<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
// import axios from 'axios'
export default {
  components: { Search, List },
  name: 'App'
}
</script>

<style></style>
