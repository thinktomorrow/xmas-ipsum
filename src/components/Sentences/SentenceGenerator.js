const translations = require('./languages/english.json');

export let sentenceFormats = [
    "The %ADJECTIVE% %ADJECTIVE% %NOUN% %VERB% %PREPOSITION% the %NOUN%.",
    "The %ADJECTIVE% %ADJECTIVE% %NOUN% %VERB% the %ADJECTIVE% %ADJECTIVE% %NOUN%.",
    "%NOUN% %VERB% and %VERB% and %ADVERB% %VERB%.",
    "What if %NOUN% %VERB% like a %ADJECTIVE% %NOUN%, do you feel %ADVERB%?",
    "Nothing beats a %ADJECTIVE% %NOUN% with a %ADJECTIVE% %NOUN%.",
    "%NOUN% is soooooooo %ADJECTIVE%.",
    "%NOUN% %VERB% %ADVERB%!",
    "%ADVERB% %VERB% %NOUN%.",
    "%ADJECTIVE% %ADJECTIVE% %ADJECTIVE% %NOUN% is warm as %NOUN%.",
]

export default{

    generate(numberOfSentences = 20, mood = "neutral"){
        console.log(this.generateParagraph(mood, numberOfSentences));
    },

    generateParagraph(mood, numberOfSentences) {
        let paragraph = "";

        for (var i = 0; i < numberOfSentences; i++) {
            paragraph += this.generateSentence(mood);
        }

        return paragraph;
    },

    generateSentence(mood){
        return this._findRandomSentenceFormat().replace(/%\w+%/g, (placeholder)=>{
            return this._findRandomWord(placeholder.replace(/%/g,'').toLowerCase(), mood);
        });
    },

    _findRandomSentenceFormat(){

        const randomKey = Math.floor(Math.random() * sentenceFormats.length);

        return sentenceFormats[randomKey];
    },

    _findRandomWord(typeOfWord, mood){

        const words = translations[mood][typeOfWord];

        if(!words) {
            throw new Error('Invalid language file setup for ' + mood + ', ' + typeOfWord);
        }

        const randomKey = Math.floor(Math.random() * words.length);

        return words[randomKey];
    },

}