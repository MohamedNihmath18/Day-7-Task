
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);

    result.filter((country) => country.population < 200000)
    .forEach((country) => {
        var population = country.population;
        console.log("Population: " + population);
    });

}
  