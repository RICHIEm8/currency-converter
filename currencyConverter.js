const request = require('request-promise');

function getRatesFromApi() {
  return request({
    uri: 'https://api.exchangeratesapi.io/latest',
    json: true
  })
}

function conversion(rates) {
  /*const rates = { //creating an object called rates and setting values instead of making a seperate variable for each currency rate
    usd: 1.2793188994,
    eur: 1.1276499774,
    jpy: 143.3581416328
  }*/
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
    case 'EUR to USD':
      return amount * rates.USD;
    case 'EUR to GBP':
      return amount * rates.GBP;
    case 'EUR to JPY':
      return amount * rates.JPY;
    default:
      return 'Error, invalid input. Input must follow the exact structure as shown; # EUR to USD/GBP/JPY. We only support EUR as a base currency.';
  }
}
getRatesFromApi()
.then((res) => {
  const output = conversion(res.rates)
  console.log(output);
})
.catch((err) => {
  console.log('Something went wrong, please try again.', err)
})
