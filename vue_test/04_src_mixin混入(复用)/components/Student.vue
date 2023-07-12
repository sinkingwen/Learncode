<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
  </div>
</template>

<script>
import { mixinHunru } from '@/mixin'
export default {
  name: 'Student',
  data() {
    return {
      name: 'Lulu',
      x: 123
    }
  },
  mixins: [mixinHunru]
}
</script>

<style scoped></style>
