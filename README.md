# 5Day-4Cast
Server-Side APIs Challenge: Weather Dashboard

## Description

This assignment I was tasked with retrieving data from another application's API and using it in myown context.
My challenge was to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
The API used to retreive waetehr data for cities is `5 Day Weather Forecast` 
Link: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`

I completed this challenge much later in my bootcamp than anticipated and I really enjoyed coming back to it with a little 
more experience under my belt.  I challenged myself to minimize my code as much as possible by nesting a lot of my dynamic elements 
in my javascript instead of keeping them in my html.  The payoff was a lot less html and a concise js file that I'm very proud of.
<br>
<br>

## User Story

AS A traveler

I WANT to see the weather outlook for multiple cities

SO THAT I can plan a trip accordingly
<br>
<br>

## Acceptance Criteria

GIVEN a weather dashboard with form inputs

WHEN I search for a city

THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

WHEN I view future weather conditions for that city

THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history

THEN I am again presented with current and future conditions for that city
<br>
<br>

## Link to Deployed App:

https://benpalac1.github.io/5Day-4Cast/
<br>
<br>

## Instructions for Use:
    1.) Click the link to the deployed app.
    2.) Type a city into the search bar and click the `search` button.
    3.) the current weather is displayed in the large box and the next 5 boxes are the forecast for that city.
    4.) Search for a few more cites.  As you search a list populates under the Search History title and buttons
        are created to then return to those searched cities.
    5.) All searches are saved to local storage so refreshing the page keeps the list populated.

## Screen-Shot of My Application:

![5dayforecast](https://github.com/BenPalac1/5Day-4Cast/assets/139652929/d07e6b52-78e9-4265-b540-7e77e3bb24b0)
<br>
<br>

## Built and Tested with:
    -Html
    -Javascript
    -Css
    -Bootstrap
    -Google Chrome

## Other Resources Used:
    -Google
    -w3schools.com
    -stackoverflow.com
    -Module 6 Activities
    -API used is api.openweathermap.org

## License

MIT License

Copyright (c) 2023 Ben Palacpac

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
