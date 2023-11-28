 
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
 
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);

    result.forEach((country) => {
        var name = country.name.common;
        var capital = country.capital;
        var flag = country.flags.svg; 
    
        console.log("CountryName: " + name);
        console.log("Capital: " + capital);
        console.log("Flag: " + flag);
    });
    
}
