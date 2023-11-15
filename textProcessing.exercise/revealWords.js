function revealWords(word, text) {

    let words = word.split(', ');

    for (let word of words) {
        let tamplate = '*'.repeat(word.length);

        if (text.includes(tamplate)) {
            text = text.replace(tamplate, word);
        }
    }

    console.log(text);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');