function googleSearches(input) {

    let incomeSingleUser = Number(input.shift());
    let usersCount = Number(input.shift());
    let totalIncome = 0;

    for (let i = 0; i < input.length; i++) {
        let searchesPerUser = Number(input[i]);
       
        if ((i+1) % 3 == 0) {
           let newIncomePerUser = incomeSingleUser * 3;

           if (searchesPerUser > 5) {
            newIncomePerUser *= 2;
           } else if (searchesPerUser == 1) {
            newIncomePerUser = 0;
           }

           totalIncome += newIncomePerUser * searchesPerUser;

        } else if (searchesPerUser > 5) {
            totalIncome += incomeSingleUser * searchesPerUser * 2;
        } else if (searchesPerUser == 1) {
            totalIncome += 0;
        } else {
            totalIncome += incomeSingleUser * searchesPerUser;
        }
    }

    console.log(`Total money earned: ${totalIncome.toFixed(2)}`);


}
// googleSearches(["5.5", "3", "1", "10", "5"]);
// googleSearches(["0.5", "6", "3", "5", "16", "0", "6", "1"]);
googleSearches(["3.0", "7", "0", "1", "2", "3", "4", "6", "15"]);