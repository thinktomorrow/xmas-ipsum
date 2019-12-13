<template>
  <div id="app" class="w-3/5 mx-auto py-16">

  <h1 class="text-center">Don't know what to write on your Xmas card?</h1>

    <div style="height: 360px" class="my-8">
      <div id="merry-animation" class="h-full"></div>
      <div id="eerie-animation" class="h-full hidden"></div>
    </div>

    <div class="my-8 flex justify-center">
      <div class="flex">
        <p class="w-32 text-center">merry</p>
        <div class="checkbox-container">
            <input id="christmas-switch" type="checkbox" class="checkbox">
            <div class="checkbox-circle bg-red-100"></div>
        </div>
        <p class="w-32 text-center">not merry</p>
      </div>
    </div>

    <div v-if="sentences">
      <h1>Results</h1>
      <p class="text-lg m-20" v-html="sentences"></p>

      <div class="mt-8">
        <button @click="tryAgain" class="p-4 bg-red-400 text-white">Try again</button>
      </div>
    </div>
    <div v-else>
      <h1>Results</h1>
      <div class="mt-8">
        <button @click="letsGenerate" class="p-4 bg-red-400 text-white">Let's make some jolly jibberish</button>
      </div>
    </div>


  </div>
</template>

<script>
import SentenceGenerator from "./components/Sentences/SentenceGenerator.js";
import Animation from "./components/Animation";

export default {
  name: 'app',
  components: {

  },
  data(){
    return {
        sentences: '',
    }
  },
  mounted: function() {

      Animation.loadAnimation('merry-animation');
      Animation.loadAnimation('eerie-animation');
      Animation.loadSwitch();
  },
  methods:{
    letsGenerate(){
      // Generate sentences
      this.sentences = SentenceGenerator.generate(20, 'positive');
    },
    tryAgain(){
      this.sentences = '';
    }
  }
}
</script>

<style src="./assets/main.css" />
