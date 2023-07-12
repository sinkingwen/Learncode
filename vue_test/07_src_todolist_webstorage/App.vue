<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"></Header>
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></List>
        <Footer :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { Header, List, Footer },
  data() {
    return {
      // 从本地存储中读取
      todos: JSON.parse(localStorage.getItem('todos'))||[]
    }
  },
  methods: {
    // 添加一个待办任务todo到todos对象数组中
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    // 勾选或取消勾选todo
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    checkAllTodo(checked) {
      this.todos.forEach(todo => {
        todo.done = checked
      })
    },
    clearAllTodo() {
      this.todos = this.todos.filter(todo => {
        return !todo.done
      })
    }
  },
  // 监听器，监听todos对象数组的数据变化，有变化就把新值写入本地存储中，开启深度监视
  watch: {
    todos: {
      deep: true,
      handler(todosValue) {
        localStorage.setItem('todos', JSON.stringify(todosValue))
      }
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
