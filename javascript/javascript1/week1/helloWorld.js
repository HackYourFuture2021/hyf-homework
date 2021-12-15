console.log("HelloWorld");
// Age-ify (A future age calculator)

const yearOfBirth = 1985;
let yearFuture = 2080;
let age = yearFuture - yearOfBirth;


console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 1985;
let dogYearFuture = 2027;
let dogYear;
let shouldShowResultInDogYears = true;
let resultInHumanYears;
if (dogYear) {
    shouldShowResultInDogYears = (dogYearFuture - dogYearOfBirth) * 7;
    console.log(
        "Your dog will be " + shouldShowResultInDogYears + " dog years old in 2027"
    );
 }
    //The code is different, but the same as the code above نفس الكود الي فوق بس بصياغة مختلفة
    
    /* let dogYearOfBirth = 1985;
    let dogYearFuture = 2027;
    
   
    const dogAge = dogYearFuture - dogYearOfBirth;
    const dogYear = dogAge * 7;
    
    let shouldShowResultInDogYears = true;
    
    if (shouldShowResultInDogYears === true) {
    
      console.log(
        "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "."
      );
    } else {
      console.log(
        "Your dog will be " + dogAge + " human years old in " + dogYearFuture + "."
      );
    }
*/


   
//Housey pricey (A house price estimator)

// Peters hous:

const volumeInMeters = 8 * 10 * 10;
const gardenSizeInM2 = 100;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const houseCost = 2500000


if (housePrice>houseCost) {
    
    console.log ("This house is " + (housePrice - houseCost) + "underpriced")
}
else {
    console.log ("This house is " + (houseCost - housePrice) + " overpriced")
}

// Julias hous:

const volumeInMeters2 = 5 * 11 * 8;
const gardenSizeInM22 = 70;
const housePrice2 = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const houseCost2 = 1000000


if (housePrice>houseCost) {
    
    console.log ("This house is " + (housePrice2 - houseCost2) + " underpriced")
}
else {
    console.log ("This house is " + (housePrice2 - houseCost2) + " overpriced")
}

 //Another solution I liked from a classmate

 function housePriceEvaluator(name, width, height, depths, garden, agentPrice) {
  let houseRealPrice = width * height * depths * 2.5 * 1000 + garden * 300;
  let priceDifference = agentPrice - houseRealPrice;
  if (priceDifference > 0) {
    console.log(
      name +
        ", you are going to pay " +
        priceDifference +
        " more than you actually should!"
    );
  } else {
    console.log(name + ", congrats! You got a great deal!");
  }
}

//Calling on a function
housePriceEvaluator("Peter", 8, 10, 10, 100, 2500000);
housePriceEvaluator("Julia", 5, 8, 11, 70, 1000000);

//Ez Namey (Startup name generator) Optional

const firstWords = ["Cool ", "Calculated ", "Poor ", "Sexy ", "Mother of ", "Shame of ", "Amazing ", "Solary ", "First ", "The "]
const secondWord = ["Slugfest", "Chaos", "Rich", "Success", "Companies", "Corporate", "Steel", "Factory", "Shop", "Startup"]

const randomNumber = Math.floor(Math.random() * 10);


const startupName = firstWords [randomNumber] + secondWord [randomNumber]

console.log ( `The startup: ${startupName} contains ${startupName.length} characters` )

// End of the code :) 
