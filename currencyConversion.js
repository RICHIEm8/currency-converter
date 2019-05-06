function conversion() {
    const rates = { //creating an object called rates and setting values instead of making a seperate variable for each currency rate
        usd: 1.2793188994,
        eur: 1.1276499774,
        jpy: 143.3581416328
    }
    //const usdRate = 1.2793188994
    //const eurRate = 1.1276499774
    //const jpyRate = 143.3581416328
    //const amount = process.argv[2]
    //const initialCurrency = process.argv[3]
    //const to = process.argv[4]
    //const resultCurrency = process.argv[5]
    const [_, __, amount, initialCurrency, ___, resultCurrency] = process.argv //array destructuring to simplify the code
    //const desiredConversion = initialCurrency + ' to ' + resultCurrency
    const desiredConversion = `${initialCurrency} to ${resultCurrency}` //interpolating instead of concatenating. the (to) variable is redundant

    /*if (desiredConversion === 'GBP to USD') {
        return amount * rates.usd;
    }
    else if (desiredConversion === 'GBP to EUR') {
        return amount * rates.eur;
    }
    else if (desiredConversion === 'GBP to JPY') {
        return amount * rates.jpy;
    }
    else {
        return 'Error, invalid input. Input must follow the exact structure as shown; # GBP to USD/EUR/JPY.';
    }*/

    switch (desiredConversion) { //switch statement to simplify the code further
        case 'GBP to USD':
        return amount * rates.usd;
        case 'GBP to EUR':
        return amount * rates.eur;
        case 'GBP to JPY':
        return amount * rates.jpy;
        default:
        return 'Error, invalid input. Input must follow the exact structure as shown; # GBP to USD/EUR/JPY.';
    }
}
const output = conversion()
console.log(output);