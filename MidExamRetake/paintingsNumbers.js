function paintingsNumbers(input) {

    let numbers = input.shift().split(' ');
    // console.log(numbers);

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        let tokens = command.split(' ');
    

        if (tokens[0] == 'Change') {
            let paintingNumber = tokens[1];
            let newNumber = tokens[2];

            if (numbers.includes(paintingNumber)) {
                let indexOfPainting = numbers.indexOf(paintingNumber);
                numbers.splice(indexOfPainting, 1, newNumber);
            } else {
                continue;
            }
        } else if (tokens[0] == 'Hide') {
            let paintingNumber = tokens[1];

            if (numbers.includes(paintingNumber)) {
                let indexOfPainting = numbers.indexOf(paintingNumber);
                numbers.splice(indexOfPainting, 1);
            } else {
                continue;
            }
        } else if (tokens[0] == 'Switch') {
            let firstPainting = tokens[1];
            let secondPainting = tokens[2];

            if (numbers.includes(firstPainting) && numbers.includes(secondPainting)) {
                let indexOfFirst = numbers.indexOf(firstPainting);
                let indexOfSecond = numbers.indexOf(secondPainting);

               if (indexOfSecond !== -1 && indexOfFirst !== -1) {
                [numbers[indexOfFirst], numbers[indexOfSecond]] = [numbers[indexOfSecond], numbers[indexOfFirst]]
               }


            }
        } else if (tokens[0] == 'Insert') {
            let index = Number(tokens[1]);
            let paintingNumber = tokens[2];

           if (index <= numbers.length-1) {
            numbers.splice(index + 1, 0, paintingNumber);

           } else {
            continue;
           }
        } else if (tokens[0] == 'Reverse') {
            numbers.reverse();

        } else if (tokens[0] == 'END') {
            break;
        }
    }

    console.log(numbers.join(' '));


}
paintingsNumbers(["115 101 114 73 111 116 75",
"Insert 5 114",
"Switch 116 73",
"Hide 76",
"END"]);

// paintingsNumbers(["77 120 115 101 97 78 88 112 111 108 110",
// "Switch 97 98",
// "Hide 88",
// "Change 120 117",
// "END"]);

// paintingsNumbers(["65 304 97 79 12 659",
// "Reverse",
// "Change 73 70",
// "Insert 10 85",
// "END"]);