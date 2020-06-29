<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import './components/Todos'

export default {
  name: 'App',
  components: {
  },
  data() {
    return  {
      todos : [
        {
          id:1,
          title: "Todo Number One",
          completed: false
        },
        {
          id:2,
          title: "Todo Number Two",
          completed: false
        },
        {
          id:3,
          title: "Todo Number Three",
          completed: false
        }
      ]
    }
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
</style>
