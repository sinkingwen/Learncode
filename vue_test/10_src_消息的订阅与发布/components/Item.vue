<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Item',
  // 使用全局事件总线$bus实现组件间通信，因此这里的父传子的方法不需要了
  // props: ['todo', 'checkTodo', 'deleteTodo'],
  props: ['todo'],
  methods: {
    // 勾选或者取消勾选
    handleCheck(id) {
      // 通知App组件去将对应的todo对象的done值修改
      // this.checkTodo(id)

      // 使用全局事件总线触发checkTodo事件，并向App组件传递ID数据
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      // 通知App组件去将对应的todo对象删除
      if (confirm('确定删除此项吗？')) {
        // this.deleteTodo(id)
        // 使用全局事件总线触发deleteTodo事件，并向App组件传递ID数据
        // this.$bus.$emit('deleteTodo', id)

        //消息的发布
        pubsub.publish('deleteTodo', id)
      }
    }
  }
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>
