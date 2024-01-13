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
 
        var forecastQuery = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

        fetch(forecastQuery).then((response) => {
            return(response.json());

        }).then(function(json) {
            console.log(json);

            for (var i=0; i < 6; i++) {
                document.getElementById("forecast").innerHTML += 
                "<p>" + json.list[i].dt_txt + "</p><br><p>" + json.list[i].main.temp + " degrees</p><br><p>" + json.list[i].wind.speed + " mph</p><br><p>" + json.list[i].main.humidity + "%</p>"
                // 0, 7, 15, 23, 31, 39 where 7n+(n-1)
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





