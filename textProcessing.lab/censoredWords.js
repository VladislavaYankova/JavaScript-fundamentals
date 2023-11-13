function censoredWords(sentence, word) { 

    let cencor = '*'.repeat(word.length);
    let result = sentence;

    while(result.includes(word)) {
        result = result.replace(word, cencor);
    }

    console.log(result);
}
censoredWords('A small sentence with some words', 'small');