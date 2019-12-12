const translations = require('./languages/english.json');

export let sentenceFormats = [
    "%ADJECTIVE% %NOUN% totally %VERB% %NOUN%"
    // ['adjective', 'noun', 'adverb', 'verb', 'noun', 'adverb', 'verb'],
    // ['adjective', 'noun', 'verb'],
    // ['adjective', 'noun', 'adverb', 'verb', 'noun'],
    // ['noun', 'verb', 'adverb', 'noun'],
    // ['noun', 'verb', 'adjective', 'noun'],
    // ['noun', 'verb', 'noun'],
    // ['adjective', 'noun', 'adverb', 'verb', 'preposition', 'adjective', 'noun'],
]

export default{

    generate(numberOfSentences = 20, mood = "neutral"){
        console.log(this.generateSentence(mood));
console.log(numberOfSentences, mood);
        // nouns
        // verbs
        // adjectives
        // adverbs

        // random
    },

    generateSentence(mood){
        let format = sentenceFormats[0];

        return format.replace(/%\w+%/g, (placeholder)=>{
            return this._findRandomWord(placeholder.replace(/%/g,'').toLowerCase(), mood);
        })
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