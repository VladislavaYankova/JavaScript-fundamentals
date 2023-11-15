function replaceRepeatingChars(string) {

    let result = '';
    let previousChar = '';

    for (let currentChar of string) {
        if (currentChar != previousChar) {
            result += currentChar;
            previousChar = currentChar;
        }
    }

    console.log(result);


}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');