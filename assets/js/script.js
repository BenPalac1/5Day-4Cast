let city = "";
var searchButton = document.getElementById("search");
var APIkey= "d9b4f68d798be0a14075fd03f0135394";
let lat = "";
let lon = "";
var searchHistory = [];



// user searches for a city
function search() {
    document.getElementById("forecastBlocks").innerHTML = '';  // clears forecast blocks upon a new search
    var cityInput = document.getElementById("citySearch").value;
    var city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1); //upercasses first letter of user search
    var geoQuery = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIkey; // geoQuery pulls lat and lon

    fetch(geoQuery).then((response) => {
        return(response.json());

    }).then(function(json) {
        lat = json[0].lat;
        lon = json[0].lon;
 
        var currentQuery = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

        fetch(currentQuery).then((response) => {
            return(response.json());

        }).then(function(json) {
            console.log(json);

            let currentDate = new Date(json.dt * 1000).toDateString();
            console.log(currentDate); // "coord" in log

            // Current weather nested here
            document.getElementById("currentWeather").innerHTML = '<h2 id="city"> ' + city + ' ' + currentDate + '</h2><h4><article class="card-column"><figure class="card-block"><img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png" alt="' + json.weather[0].description + '"><p>Temperature: ' + json.main.temp + '&#x2109;</p><p>Humidity: ' + json.main.humidity + '&percnt;</p><p>Wind: ' + json.wind.speed + ' mph</p></figure></article></h4>'


            // forecast query nested inside of current query
            var forecastQuery = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

            

            fetch(forecastQuery).then((response) => {
                return(response.json());
    
            }).then(function(json) {
                console.log(json);

                for (var i=0; i < json.list.length; i+=8) {
                    console.log(i); // "cod" in log list of 40 objects 

                    var date = new Date(json.list[i].dt_txt); //date is pulled as a timestamp

                    // Get the components of the date (month, day, year)
                    var month = date.getMonth() + 1; 
                    var day = date.getDate();
                    var year = date.getFullYear();

                    // Format the date as "M/DD/YYYY"
                    var formattedDate = month + '/' + day + '/' + year;
                    
                    document.getElementById("forecastBlocks").innerHTML += '<article class="card-col-2"><figure id="day1" class="border p-3"><h3 class="header-block">' + formattedDate + '</h3><aside class="weather-block"><img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png" alt="' + json.list[i].weather[0].description + '"><p>Temperature: ' + json.list[i].main.temp + '&#x2109;</p><p id="humid1">Humidity: ' + json.list[i].main.humidity + '&percnt;</p><p id="wind1">Wind: ' + json.list[i].wind.speed + ' mph</p></aside></figure></article>';
                }

                if (!searchHistory.includes(city)) {
                    searchHistory.push(city);
                    updateSearchHistory();
                }

            });
        }); 
   });
};

function updateSearchHistory() {
    var searchHistoryList = document.getElementById("searchHistoryList");
    searchHistoryList.innerHTML = '';  // Clear the previous list

    // Update the list with search history
    searchHistory.forEach(function(searchItem) {
        var listItem = document.createElement("li");
        listItem.textContent = searchItem;

        listItem.addEventListener("click", function() {
            // Set the search input to the clicked history item
            document.getElementById("citySearch").value = searchItem;
            // Perform the search again
            search();
        });

        searchHistoryList.appendChild(listItem);
    });
}





