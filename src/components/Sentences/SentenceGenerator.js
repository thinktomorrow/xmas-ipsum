const translations = require('./languages/english.json');

export let sentenceFormats = [
    "The %ADJECTIVE% %ADJECTIVE% %NOUN% %VERB% %PREPOSITION% the %NOUN%. %EMOJI%",
    "The %ADJECTIVE% %ADJECTIVE% %NOUN% %VERB% the %ADJECTIVE% %ADJECTIVE% %NOUN%.",
    "The %ADJECTIVE% %NOUN% %ADVERB% %VERB%. %EMOJI%",
    "While my %ADJECTIVE% %NOUN% gently %VERB%.",
    "%NOUN% %VERB% and %VERB% and %ADVERB% %VERB%. %EMOJI%",
    "What if %NOUN% %VERB% like a %ADJECTIVE% %NOUN%, do you feel %ADVERB%?",
    "Nothing beats a %ADJECTIVE% %NOUN% with a %ADJECTIVE% %NOUN%. %EMOJI%",
    "%NOUN% is soooooooo %ADJECTIVE%.",
    "%NOUN% %VERB% %ADVERB%! %EMOJI%",
    "%ADVERB% %VERB% %NOUN%.",
    "%ADJECTIVE% %ADJECTIVE% %ADJECTIVE% %NOUN% is warm as %NOUN%. %EMOJI%",
    "Ever so %ADVERB%, ever so %ADVERB%.",
    "On Christmas eve, every %NOUN% %VERB% %ADVERB%. %EMOJI%",
    "%NOUN% %VERB% and %VERB%. %ADVERB%!",
    "%VERB% and %VERB%, yes it's the %NOUN%. %EMOJI%",
    "I love %ADJECTIVE% %NOUN% in the morning.",
]

export default{

    generate(numberOfSentences = 20, mood = "neutral"){
        return this.generateParagraph(numberOfSentences, mood);
    },

    generateParagraph(numberOfSentences, mood) {
        let paragraphs = "";

        for (let i = 0; i < numberOfSentences; i++) {
            paragraphs += ' ' + this.generateSentence(mood);
            if(i > 0 && 0 === i % 5) paragraphs += '\n\n';
        }

        return paragraphs;
    },

    generateSentence(mood){
        const sentence = this._findRandomSentenceFormat().replace(/%\w+%/g, (placeholder)=>{
            return this._findRandomWord(placeholder.replace(/%/g,'').toLowerCase(), mood);
        });

        return this._capitalize(sentence);
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

    _capitalize: function(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}