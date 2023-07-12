<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input type="text" :value="todo.title" v-show="todo.isEdit" @blur="handleBlur(todo, $event)" ref="inputTitle" />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
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
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty.call('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      // 在Vue更新完整个模板之后，让input输入框自动获得焦点
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
