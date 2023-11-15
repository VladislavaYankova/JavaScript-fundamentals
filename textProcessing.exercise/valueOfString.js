function valueOfString(input) {

    let letters = input[0];
    let lowOrUp = input[1];
    let sum = 0;
    

    if (lowOrUp == 'LOWERCASE') {
        for (let char of letters) {
            if (/[a-z]/.test(char)) {
                sum += char.charCodeAt();
            }
        }
    } else if (lowOrUp == 'UPPERCASE'){
        for (let char of letters) {
            if (/[A-Z]/.test(char)) {
                sum += char.charCodeAt();
            }
        }
    }

    console.log(`The total sum is: ${sum}`)
}
// valueOfString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfString(['AC/DC', 'UPPERCASE']);