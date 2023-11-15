function stringSubstring(word, text) {

    text = text.toLowerCase().split(' ');
    let isFound = false;
    
    for (let words of text) {
        if (words == word) {
            isFound = true;
            console.log(word);
            break;
        }
    }

    if (!isFound) {
        console.log(`${word} not found!`);
    }
    
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language')