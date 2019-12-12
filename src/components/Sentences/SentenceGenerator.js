const translations = require('./languages/english.json');

const sentenceFormats = [
    ['adjective', 'noun', 'adverb', 'verb', 'noun', 'adverb', 'verb'],
    ['adjective', 'noun', 'verb'],
    ['adjective', 'noun', 'adverb', 'verb', 'noun'],
    ['noun', 'verb', 'adverb', 'noun'],
    ['noun', 'verb', 'adjective', 'noun'],
    ['noun', 'verb', 'noun'],
    ['adjective', 'noun', 'adverb', 'verb', 'preposition', 'adjective', 'noun'],
]

export default{

    generate(numberOfSentences = 20, mood = "neutral"){
        console.log(numberOfSentences);
        let sentence = '';
        sentenceFormats[0].forEach((item)=>{
            sentence += ' ' + this.findRandomWord(item, mood);
        })

        console.log(sentence);
        // nouns
        // verbs
        // adjectives
        // adverbs

        // random
    },

    findRandomWord(typeOfWord, mood){

        const words = translations[mood][typeOfWord];

        if(!words) {
            throw new Error('Invalid language file setup for ' + mood + ', ' + typeOfWord);
        }

        const randomKey = Math.floor(Math.random() * words.length);

        return words[randomKey];
    },

}