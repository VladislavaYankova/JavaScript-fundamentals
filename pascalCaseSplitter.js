function pascalCaseSplitter(text) {

    let word = text.slice(0, 1);
    let result = [];

    for (let i = 1; i < text.length; i++) {
        let currentChar = text[i];
       
        if (/[a-z]/.test(currentChar)) {
            word += currentChar;
        } else {
            result.push(word);
            word = '';
            word += currentChar;
        }

    }

    result.push(word);

    console.log(result.join(', '));

}
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');