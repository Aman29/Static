<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Challenge3/>
  </div>
</template>

<script>
import Challenge3 from './components/Challenge3'

export default {
  name: 'App',
  components: {
    Challenge3
  },
  data () {
    return {
      msg: '2048 Game'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: "Clear Sans", sans-serif;
  font-size: 21px;
}
</style>
