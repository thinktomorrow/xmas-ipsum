const translations = require('./languages/dutch.json');

export let sentenceFormats = [
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

        // nouns
        // verbs
        // adjectives
        // adverbs

        // random
    },

    findRandomWord(typeOfWord, mood){
        console.dir(translations[mood]);
    },

}