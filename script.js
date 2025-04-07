//1
function processAddress(){
    if(address.value== '') {
        alert ("input cannot be empty")
    } else{
        var letter = (address.value).toLowerCase()
        newAddress.innerHTML =letter
    }
}

//2
var bookTitles = [ "the great developer", "the flower girl", "the lion king", "creamy and yummy ice cream", "the upper room"]
function detectTitles(){
    var userInput = titles.value.toLowerCase()
    if(bookTitles.includes(userInput)){
        myTitles.innerHTML = "Book already exist"
    }
    else{
        myTitles.innerHTML = "Welcome"
    }
}

//6
function checkTemperature(){
    var temperature = temperatureInn.value;
    if (temperature <= 19){
        deeTemperature.innerHTML = "Cold"
    }
    else if (temperature >=20 && temperature<=30) {
        deeTemperature.innerHTML = "Warm"
    }
    else{
        deeTemperature.innerHTML = "Hot"
    }
}

//8
function checkBmi(){
    var weight = (weightOne.value);     
    var height = (heightOne.value);  
    var bmi = weight / (height * height);
    if (bmi <= 18.5){
        yourWeight.innerHTML = "you're underweight"
    }
    else if ( bmi >=18.5 && bmi <=24.9) {
        yourWeight.innerHTML = "your weight is normal"
    }
    else if ( bmi >=25 && bmi <=29.9) {
        yourWeight.innerHTML = "you're overweight"
    }
    else{
        yourWeight.innerHTML = "you're obese"
    }
} 

//10
function checkLuggage(){
    var weight = (weightLug.value);     
    var height = (heightLug.value);  
    var luggage = weight / (height * height);
    if (luggage <= 20){
        yourLuggage.innerHTML = "Underweight"
    }
    else if ( luggage >=20 && luggage<=30) {
        yourLuggage.innerHTML = "Allowed"
    }
    else{
        yourLuggage.innerHTML = "Overweight"
    }
}