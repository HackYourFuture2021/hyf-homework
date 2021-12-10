console.log("HelloWorld");
// Age-ify (A future age calculator)

let yearOfBirth = 1985;
let yearFuture = 2080;
let age = yearFuture - yearOfBirth;


console.log("You will be " + age + " years old in " + yearFuture)

// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 1985;
let dogYearFuture = 2060;
let dogYear;
let shouldShowResultInDogYears = true;
let resultInHumanYears;
if (dogYear) {
    shouldShowResultInDogYears = (dogYearFuture - dogYearOfBirth) * 7;
    console.log(
        "Your dog will be " + shouldShowResultInDogYears + " dog years old in 2027"
    );