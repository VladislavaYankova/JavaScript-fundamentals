function jeweler(input) {

    let whiteGold = input[0].split(' ');
    let yellowGold = input[1].split(' ');
    let leftoverGold = 0;
    let pairOfEarings = 0;

    // console.log(whiteGold);
    // console.log(yellowGold);

    for (let i = 0; i < whiteGold.length; i++) {
        let currWhiteGold = Number(whiteGold[i]);
        let currYellowGold = Number(yellowGold[i]);

       if (currWhiteGold + currYellowGold == 10) {
        pairOfEarings += 1;
       } else if (currWhiteGold + currYellowGold > 10) {
        let rotations = 0;
        while (rotations <= 5) {
            currYellowGold -= 2;

            if (currWhiteGold + currYellowGold == 10) {
                pairOfEarings += 1;
                break;
            } else if (currWhiteGold + currYellowGold < 10) {
                leftoverGold += currWhiteGold + currYellowGold;
                break;
            }

            rotations++
        }
       } else if (currWhiteGold + currYellowGold < 10) {
        leftoverGold += currWhiteGold + currYellowGold;
       }
    }

    let additionalEaring = Math.floor(leftoverGold / 10);
    pairOfEarings += additionalEaring;

    if (pairOfEarings >= 7) {
        console.log(`Great success, you created ${pairOfEarings} earrings.`);
    } else {
        let neededEarings = 7 - pairOfEarings;
        console.log(`Keep trying, you need ${neededEarings} more earrings.`);
    }

}
// jeweler(['2 7 8 5 1 6 1 7 5', 
//          '8 3 2 7 9 4 9 2 3']);
jeweler(['5 3 2 2 4',
         '5 5 8 2 6']);
