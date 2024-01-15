let city = "";
var searchButton = document.getElementById("search");
var APIkey= "d9b4f68d798be0a14075fd03f0135394";
let lat = "";
let lon = "";



// user searches for a city
function search() {
    city = document.getElementById("citySearch").value;
    var geoQuery = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIkey;

    fetch(geoQuery).then((response) => {
        return(response.json());

    }).then(function(json) {
        lat = json[0].lat;
        lon = json[0].lon;
        console.log(lat, lon);
        console.log(json);
 
        var forecastQuery = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

        fetch(forecastQuery).then((response) => {
            return(response.json());

        }).then(function(json) {
            console.log(json);
            console.log(json.list.length)

            // // City
            // document.getElementById("city").innerHTML = city + " (" + json.list[0].dt_txt + ")";

            // // Current Temp
            // document.getElementById("temp0").innerHTML = json.list[0].main.temp + "&#x2109;";

            // // Humidity
            // document.getElementById("humid0").innerHTML = json.list[0].main.humidity + "&percnt;";

            // //Wind Speed
            // document.getElementById("wind0").innerHTML = json.list[0].wind.speed + "mph";
 
            for (var i=0; i < json.list.length + 1; i+=8) {
                console.log(i);
                document.getElementById("temp" + i).innerHTML = json.list[i].main.temp + "&#x2109;";            
            }
        });

   });

};

// get lat and lon of that city
// call geocoding API
// use those two variables to get current weather
// call forcast API
// and to get the 5-day forecast

// add city to search history


// append the name, date, icon, temp, humidity, and wind speed to the page

// get the 5-day forecast
// append date, icon, temp, wind speed, and humidity to one box per day

//  make each search history entry clickable




