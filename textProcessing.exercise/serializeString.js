function serializeString(input) {

    let string = input[0];
    let char = {};
    
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];

        if (char.hasOwnProperty(currentChar)) {
            char[currentChar].push(i);
        } else {
            char[currentChar] = [i];
        }
    }

    let entries = Object.entries(char);
    
    let result = '';
    for (let entry of entries) {
        let key = entry[0];
        let value = entry[1].join('/')
        console.log(`${key}: ${value}`);
    }
    

}
// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);