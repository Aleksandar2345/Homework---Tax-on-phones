//Calculate tax on mobile phones

var numberOfMobilePhone = 30
var priceOfMobilePhone = 119.95
var taxOfMobilePhone = 5
var priceOf30 = numberOfMobilePhone * (priceOfMobilePhone * (1+(taxOfMobilePhone / 100)))
console.log(`The price of 30 mobile phones, tax included is ${priceOf30}`)

