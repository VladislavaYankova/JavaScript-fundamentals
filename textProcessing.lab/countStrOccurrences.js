function countStrOccurrences(sentence, searchedWord) {

    let words = sentence.split(' ');
    let count = 0;
    
    for (let word of words) {
        if (word == searchedWord) {
            count++
        }
    }

    console.log(count);

}
// countStrOccurrences('This is a word and it also is a sentence', 'is');
countStrOccurrences('softuni is great place for learning new programming languages', 'softuni')