<template>
  <main id="app" class="relative w-full h-full min-h-screen" :class="this.moodChecker ? 'bg-green-700 text-white' : 'bg-grey text-white'">

    <div class="w-5/6 md:w-4/5 lg:w-3/5 mx-auto py-8 sm:py-16" style="min-height: calc(100vh - 6rem)">

      <header class="text-center text-white relative z-20">
        <h1 class="text-shadow font-base leading-none capitalize tracking-widest font-eerie">XMAS IPSUM</h1>
          <p class="text-white mt-4">Because you'll want to put some holiday spirit in your lorem ipsum.</p>
      </header>

      <transition name="fade-in">
        <transition name="santa-sleigh">
          <div v-show="showSleighAnimation" class="absolute left-0 right-0 -mt-10">
            <div class="w-full relative" style="transform: translateX(100%)">
              <div id="santa-sleigh" class="w-64"></div>
              <div class="absolute left-0 right-0 text-center text-green-700" style="top: 100%">christmas egg<br><br><a class="text-green-700" href="https://thinktomorrow.be">www.thinktomorrow.be</a></div>
            </div>
          </div>
        </transition>
      </transition>

      <!-- <hr class="w-1/2 mx-auto my-6 opacity-50"> -->

      <div class="w-full lg:w-3/4 mx-auto mt-16 text-center relative z-20">

        <div v-show="sentences">
          <div class="result-content text-lg leading-relaxed" v-html="sentencesHtml"></div>
          <div class="mt-8">
            <button @click="copyToClipBoard" class="btn mb-2 focus:outline-none" data-event="copytoclipboard" :data-label="this.moodChecker ? 'merry' : 'eerie'" :class="this.moodChecker ? 'bg-red-600 hover:bg-red-500' : ' bg-red-400 hover:bg-red-500'">Copy to your clipboard 📋</button>
            <a @click="tryAgain" class="block cursor-pointer text-white">or try again</a>
          </div>
        </div>

        <div v-show="!sentences">
          <div class="text-center relative z-20">
            <h2 class="text-white text-4xl sm:text-5xl font-eerie leading-tight">Which Christmas do you prefer?</h2>
          </div>

          <div class="z-20 relative h-96 -mt-10">
            <div id="merry-animation" class="h-full"></div>
            <div id="eerie-animation" class="h-full hidden"></div>
          </div>

          <div class="flex justify-center text-center relative z-20 -mt-20">
            <div class="flex">
              <p class="text-white text-center font-eerie text-3xl sm:w-32">Eerie</p>
              <div class="checkbox-container">
                <input v-model="moodChecker" data-event="switch" :data-label="this.moodChecker ? 'merry' : 'eerie'" id="christmas-switch" type="checkbox" class="checkbox">
                <div class="checkbox-circle bg-red-100"></div>
              </div>
              <p class="text-white text-center font-merry text-3xl sm:w-32">Merry</p>
            </div>
          </div>

          <div class="mt-8">
            <button @click="letsGenerate" class="btn relative -with-element bg-red-600 hover:bg-red-500 focus:outline-none" data-event="btn-generate" :data-label="this.moodChecker ? 'merry' : 'eerie'" :class="this.moodChecker ? '-merry' : '-eerie'">
              {{ buttonLabel }}
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
        buttonLabelText: 'Generate some jibberish',
        showSleighAnimation: false,
    }
  },
  mounted: function() {
      Animation.loadAnimation('merry-animation');
      Animation.loadAnimation('eerie-animation');
      Animation.loadAnimation('santa-sleigh');
      Animation.loadSwitch();
  },
  computed:{
    moodMerry(){
      return !!this.moodChecker;
    },
    buttonLabel(){
      return this.buttonLabelText;
    },
    sentencesHtml(){
      return '<p>'+ this.sentences.replace(/\n\n/g, '</p><p>')  + '</p>';
    }
  },
  methods:{
    letsGenerate(){

      this.buttonLabelText = 'Ho ho hold on...';

      this.showSleighAnimation = true;

      setTimeout(() =>{
        this.sentences = SentenceGenerator.generate(20, this.moodChecker ? 'positive' : 'negative');
        this.buttonLabelText = 'Generate some jibberish';
      }, 1500);

    },
    tryAgain(){
      this.sentences = '';
      this.showSleighAnimation = false;
    },
    copyToClipBoard(e){
      copy(this.sentences);

      var oldText = e.target.innerHTML;
      e.target.innerHTML = 'Copied!'
      setTimeout(() => {
        e.target.innerHTML = oldText;
      }, 2000);
    }
  }
}
</script>

<style src="./assets/main.css" />