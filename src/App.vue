<template>
  <main id="app" class="w-full h-full min-h-screen" :class="this.moodChecker ? 'bg-green-700 text-white' : 'bg-grey text-white'">

    <div class="w-5/6 md:w-4/5 lg:w-3/5 mx-auto py-16">

      <header class="text-center text-white relative z-20">
        <h1 class="text-shadow font-base leading-none capitalize tracking-widest font-eerie">XMAS IPSUM</h1>
          <p class="text-white mt-4">Because you'll want to put some holiday spirit in your lorem ipsum.</p>
      </header>

      <hr class="w-1/2 mx-auto my-6 opacity-50">

      <div class="text-center relative z-20">
        <h2 class="text-white text-5xl font-eerie">Which Christmas do you prefer?</h2>
      </div>

      <div style="height: 450px" class="z-20 relative -mt-10">
        <div id="merry-animation" class="h-full"></div>
        <div id="eerie-animation" class="h-full hidden"></div>
      </div>

      <div class="flex justify-center text-center relative z-20 -mt-20">
        <div class="flex">
          <p class="text-white text-center font-eerie text-3xl">Eerie</p>
          <div class="checkbox-container">
            <input v-model="moodChecker" id="christmas-switch" type="checkbox" class="checkbox">
            <div class="checkbox-circle bg-red-100"></div>
          </div>
          <p class="text-white text-center font-merry text-3xl">Merry</p>
        </div>
      </div>

      <div class="w-full md:w-2/3 mx-auto text-center mt-16 relative z-20">

        <div v-if="sentences">
          <div class="result-content text-lg leading-relaxed" v-html="sentencesHtml"></div>
          <div class="mt-8">
            <button @click="copyToClipBoard" class="btn mb-2" :class="this.moodChecker ? 'bg-red-600 hover:bg-red-500' : ' bg-red-400 hover:bg-red-500'">Copy to your clipboard 📋</button>
            <a @click="tryAgain" class="block cursor-pointer text-white">or try again</a>
          </div>
        </div>

        <div v-else>
          <div class="mt-8">
            <button @click="letsGenerate" class="btn -with-element bg-red-600 hover:bg-red-500" :class="this.moodChecker ? '-merry' : '-eerie'">
              Generate some
                <template v-if="this.moodChecker">jolly</template>
                <template v-else >hollow</template>
              text
            </button>
          </div>

        </div>

      </div>

    </div>

    <footer class="w-full h-24 z-50 bg-snowpile flex items-end justify-center bg-bottom bg-cover bg-repeat-x" style="background-image:url('assets/snowpile.svg')">

    <a href="https://thinktomorrow.be" target="_blank" class="text-gray-500 mb-4 font-normal hover:text-primary hover:underline">Made with &#9825; by Think Tomorrow.</a></footer>

  </main>
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
    moodMerry(){
      return !!this.moodChecker;
    },
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