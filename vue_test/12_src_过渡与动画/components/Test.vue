<template>
  <div>
    <button @click="display = !display">显示或隐藏</button>
    <transition name="nku" appear>
      <h1 v-show="display">Hello NKU</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      display: true
    }
  }
}
</script>
<style scoped>
h1 {
  background-color: orange;
  transition: testAnn 1s linear;
}
/* .come {
  animation: testAnn 1s linear;
}
.go {
  animation: testAnn 1s reverse;
} */

.nku-enter-active,
.nku-leave-active {
  animation: testAnn 1s linear;
}

@keyframes testAnn {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
