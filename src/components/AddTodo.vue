<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add todo..">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
//import {uuid} from 'vue-uuid'
export default {
  name: "AddTodo",
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      }
      //Posalji roditeljima
      this.$emit('add-todo',newTodo);
      this.title = '';
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
    flex: 2;
}
</style>


