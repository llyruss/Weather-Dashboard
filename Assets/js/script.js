let APIKey = "a855332de88e2807d74d20b390983564"
let today = moment().format("M/D/YYYY")

console.log(today)

let citySearched = "minneapolis"

//get city lat and long
let getLatLongURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit=1&appid=" + APIKey

console.log(getLatLongURL)

fetch(getLatLongURL)
    .then(function(response){
        return response.json()
    })
    .then(function (latLong){
        console.log(latLong)

        let cityLat = latLong[0].lat
        let cityLong =latLong[0].lon

        console.log(cityLong)
    })


    //get same day  forcast information

    let sameDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" +citySearched+"&appid=" + APIKey
    console.log(sameDayURL)
    