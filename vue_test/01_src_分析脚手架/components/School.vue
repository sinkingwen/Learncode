<template>
  <div>
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>校龄：{{ schoolAge }}</h2>
    <button @click="showMotto">点击弹出校训</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  data() {
    return {
      schoolName: 'NKU',
      schoolAge: 104,
      schoolMotto: '允公允能，日新月异'
    }
  },
  methods: {
    showMotto() {
      alert(this.schoolMotto)
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: serif;
  color: blueviolet;
}
button {
  background-color: #fff;
  font-size: 16px;
  font-family: serif;
}
</style>
