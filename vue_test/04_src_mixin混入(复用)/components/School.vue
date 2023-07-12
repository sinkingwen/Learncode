<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
  </div>
</template>

<script>
import { mixinHunru } from '@/mixin';
export default {
  name: 'School',
  data() {
    return {
      name: 'NKU'
    }
  },
  mixins:[mixinHunru]
}
</script>

<style scoped></style>
