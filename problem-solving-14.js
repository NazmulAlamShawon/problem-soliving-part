// mils to keelometer

function mileToKilometere(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometere(40.2);
console.log('marathon in km:', marathon);