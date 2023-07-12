<template>
  <div>
    <button @click="display = !display">显示或隐藏</button>
    <transition-group appear class="animate__animated animate__bounce" enter-active-class="animate__lightSpeedInRight animate__slow" leave-active-class="animate__lightSpeedOutLeft animate__slow">
      <h1 v-show="!display" key="1">Hello TJU</h1>
      <h1 v-show="display" key="2">Hello NKU</h1>
    </transition-group>
  </div>
</template>
<!-- 多个元素过渡 -->
<script>
export default {
  name: 'Test3',
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
}

/* .nku-enter,
.nku-leave-to {
  transform: translateX(-100%);
}

.nku-leave,
.nku-enter-to {
  transform: translateX(0px);
}
.nku-enter-active,
.nku-leave-active {
  transition: 1s linear;
} */

/* 不用CSS3的动画 */
/* @keyframes testAnn {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
} */
</style>
