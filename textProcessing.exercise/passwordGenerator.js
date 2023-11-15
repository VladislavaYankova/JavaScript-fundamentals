function passwordGenerator(input) {

    let concatString = input[0] + input[1];
    let word = input[2];
    let result = '';
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of concatString) {
        if (vowels.includes(char)) {
            if (word == '') {
                word = input[2];
            }
            let wordAsArray = word.split('');
            let charToReplace = wordAsArray.shift();
            word = wordAsArray.join('');
            result += charToReplace.toUpperCase();
        } else {
            result += char;
        }
    }

    let reversedResult = result.split('').reverse().join('');

    console.log(`Your generated password is ${reversedResult}`);

}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange' ]);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);