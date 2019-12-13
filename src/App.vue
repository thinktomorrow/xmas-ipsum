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
        <div class="result-content text-lg" v-html="sentencesHtml"></div>

        <div class="mt-8">
          <button @click="copyToClipBoard" class="p-4 mr-2 bg-red-400 text-white rounded">Copy to your clipboard</button>
          <a @click="tryAgain" class="block text-red-400 cursor-pointer">or try again</a>
        </div>
      </div>
      <div v-else>
        <div class="mt-8">
          <button @click="letsGenerate" class="p-4 bg-red-400 text-white rounded" :style="this.moodChecker ? 'background-color:#124718;' : 'background-color:#562e25;'">
            Let's make some <template v-if="this.moodChecker">jolly</template><template v-else>hollow</template> jibberish
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SentenceGenerator from "./components/Sentences/SentenceGenerator.js";
import Animation from "./components/Animation";
const copy = require('copy-text-to-clipboard');

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
  computed:{
    sentencesHtml(){
      return '<p>'+ this.sentences.replace(/\n\n/g, '</p><p>')  + '</p>';
    }
  },
  methods:{
    letsGenerate(){
      this.sentences = SentenceGenerator.generate(20, this.moodChecker ? 'positive' : 'negative');
    },
    tryAgain(){
      this.sentences = '';
    },
    copyToClipBoard(){
      copy(this.sentences);
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
