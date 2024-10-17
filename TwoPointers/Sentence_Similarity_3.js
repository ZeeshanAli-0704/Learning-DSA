/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    let biggerSentence = sentence1.length > sentence2.length ? sentence1 : sentence2
    let smallerSentence = biggerSentence === sentence1 ? sentence2 : sentence1;
    let smallStrMap = new Map();
    


};
areSentencesSimilar(sentence1 = "My name is Haley", sentence2 = "My Haley");
areSentencesSimilar("of", sentence2 = "A lot of words");