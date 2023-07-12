<template>
  <div>
    <button @click="getStus">获取学生信息</button>
    <br><br>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStus() {
      axios.get('http://localhost:8080/pro1/students').then(
        response => {
          console.log('Request Success', response.data)
        },
        error => {
          console.log('Request Fail', error.message)
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/pro2/cars').then(
        response => {
          console.log('Request Success', response.data)
        },
        error => {
          console.log('Request Fail', error.message)
        }
      )
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(77, 135, 158);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
