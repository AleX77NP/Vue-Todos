<template>
    <div>
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
</template> 

<script>
import Todos from './Todos'
import axios from 'axios'

export default {
    name: "Home",
    components: {
        Todos
    },
    data() {
    return  {
      todos : []
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>{
      this.todos = this.todos.filter(todo => todo.id !== id)
      console.log(res);
      }
     ).catch(err => 
     console.log(err));
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      const {title, completed} = todo;
      axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed}).then(res =>
      this.todos = [...this.todos, res.data]
     ).catch(err => 
     console.log(err));
  },
 },
  created() {
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => {
     this.todos = res.data
     console.log(res.data);
     }).catch(err => 
     console.log(err));
   }
}
</script>

<style scoped>
.title {
    color: #fff;
}
</style>