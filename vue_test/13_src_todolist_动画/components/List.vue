<template>
  <div>
    <ul class="todo-main">
      <transition-group name="todoAni" appear>
        <Item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></Item>
      </transition-group>
      <!-- <Item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></Item> -->
    </ul>
  </div>
</template>
<script>
import Item from './Item.vue'
export default {
  name: 'List',
  components: { Item },
  // props: ['todos', 'checkTodo', 'deleteTodo'],
  props: ['todos']

}
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todoAni-enter-active{
  animation: todoA 0.5s linear;
}
.todoAni-leave-active{
  animation: todoA 0.5s linear reverse;
}

@keyframes todoA {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
