let APIKey = "a855332de88e2807d74d20b390983564"
let today = moment().format("M/D/YYYY")

console.log(today)

let citySearched = "Minneapolis"

let getLatLong = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit={1}&appid=" + APIKey