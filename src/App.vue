<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <router-view />
  </div>
</template>

<script>
//import Home from './components/Home';
import Header from './components/layout/Header.vue'
import AddTodo from './components/AddTodo'

export default {
  name: 'App',
  components: {
  // Home,
    Header,
    AddTodo
  }
}

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  body {
   font-family: Arial, Helvetica, sans-serif;
   line-height: 1.4;
  }
  .btn {
   display: inline-block;
   border: none;
   background: #555;
   color: #fff;
   padding: 7px 20px;
   cursor: pointer;
  }
  .btn:hover {
    background: #667;
  }
</style>
