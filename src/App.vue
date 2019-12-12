<template>
  <div id="app">
    <div class="text-center m-16">
      <svg class="inline-block h-12 w-12">
        <path fill="currentColor" d="M25.4,6C13.7,6,4.2,14.5,4.2,25c0,3.4,1,6.6,2.8,9.4l-3.5,8.9l8.4-3.6c3.6,2.7,8.3,4.3,13.4,4.3c11.7,0,21.1-8.5,21.1-19S37.1,6,25.4,6L25.4,6z"></path>
        <path fill="#FFFFFF" d="M36.9,21.5v-2h-4v-4h-5v4h-7v-4h-5v4h-3v2h3v8.9c0,1.4,0.4,2.4,1.1,3.1c0.7,0.7,1.8,1.1,3.3,1.1c1,0,1.9-0.1,2.6-0.3c0.7-0.2,1-0.5,2-0.7v-1.2c0,0-0.5,0.1-1,0.1s-0.8,0.1-1.1,0.1c-0.8,0-1.3-0.2-1.6-0.7s-0.3-1.3-0.3-2.4v-8h7v8.9c0,1.4,0.2,2.4,1,3.1c0.7,0.7,1.8,1.1,3.3,1.1c1,0,2-0.1,2.7-0.3s1.1-0.5,2.1-0.7v-1.2c0,0-0.6,0.1-1.1,0.1s-0.9,0.1-1.2,0.1c-0.8,0-1.2-0.2-1.5-0.7s-0.3-1.3-0.3-2.4v-8H36.9z"></path>
      </svg>
    </div>
    <page-generate v-if="page == 'generate'"></page-generate>
    <page-result v-if="page == 'result'"></page-result>
  </div>
</template>

<script>
import PageGenerate from "./components/Pages/Generate";
import PageResult from "./components/Pages/Result";

export default {
  name: 'app',
  components: {
    PageGenerate,
    PageResult,
  },
  data(){
    return {
      page: 'result',
    }
  }
}
</script>

<style src="./assets/main.css" />
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
