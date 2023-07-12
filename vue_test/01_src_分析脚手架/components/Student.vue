<template>
  <div class="stu">
    <h2>学生姓名：{{ stuName }}</h2>
    <h2>学生性别：{{ stuGender }}</h2>
    <h2>学生年龄：{{ stuAge }}</h2>
    <h2>出生地：{{ from }}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      stuName: '卢卢',
      stuAge: 18,
      stuGender: '男',
      from: '福建省'
    }
  }
}
</script>

<style scoped>
.stu {
  background-color: palegoldenrod;
  color:#000;
}
</style>
