let APIKey = "a855332de88e2807d74d20b390983564"
let today = moment().format("M/D/YYYY")


let citySearched = "Minneapolis"

//get city lat and long
// let getLatLongURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit=1&appid=" + APIKey


// fetch(getLatLongURL)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function (latLong){

//         let cityLat = latLong[0].lat
//         let cityLong =latLong[0].lon

//     })


//get same day  forcast information

let sameDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" +citySearched+"&appid=" + APIKey+"&units=imperial"

 fetch(sameDayURL)
     .then(function(response2){
        return response2.json()
     })
     .then(function(dailyWeather){

        let todayTemp = dailyWeather.main.temp
        let todayWind = dailyWeather.wind.speed
        let todayHumidity = dailyWeather.main.humidity
        let todayIconCode = dailyWeather.weather[0].icon
        let todayIcon = "http://openweathermap.org/img/w/"+todayIconCode+".png"

         //display same day forcast

         let chosenCity = document.getElementById("chosenCity")
         let currentTemp=document.getElementById("currentTemp")
         let currentWind=document.getElementById("currentWind")
         let currentHumidity=document.getElementById("currentHumidity")

         chosenCity.textContent = citySearched +" "+today
         currentTemp.textContent = todayTemp
         currentWind.textContent = todayWind
         currentHumidity.textContent = todayHumidity


        })




//get 5 day forcast