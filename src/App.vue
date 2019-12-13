<template>
  <div id="app" class="w-3/5 mx-auto py-16">

    <h1 class="text-center">Don't know what to write on your Xmas card?</h1>

    <div style="height: 320px" class="my-8">
      <div id="merry-animation" class="h-full"></div>
      <div id="eerie-animation" class="h-full hidden"></div>
    </div>

    <div class="flex justify-center relative -mt-20 z-10">
      <div class="flex">
        <p class="text-center">EERIE</p>
        <div class="checkbox-container">
          <input v-model="moodChecker" id="christmas-switch" type="checkbox" class="checkbox">
          <div class="checkbox-circle bg-red-100"></div>
        </div>
        <p class="text-center">MERRY</p>
      </div>
    </div>


    <div class="text-center mt-16">
      <div v-if="sentences">
        <div class="result-content text-lg" v-html="sentences"></div>

        <div class="mt-8">
          <button @click="tryAgain" class="p-4 bg-red-400 text-white rounded">Try again</button>
        </div>
      </div>
      <div v-else>
        <div class="mt-8">
          <button @click="letsGenerate" class="p-4 bg-red-400 text-white rounded">Let's make some jolly jibberish</button>
        </div>
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
        moodChecker: true,
    }
  },
  mounted: function() {
      Animation.loadAnimation('merry-animation');
      Animation.loadAnimation('eerie-animation');
      Animation.loadSwitch();
  },
  methods:{
    letsGenerate(){
      console.log(this.moodChecker);
      this.sentences = SentenceGenerator.generate(20, 'positive');
    },
    tryAgain(){
      this.sentences = '';
    }
  }
}
</script>

<style src="./assets/main.css" />
<style>
  .result-content p{
    margin-bottom:1rem;
  }
</style>
