let APIKey = "a855332de88e2807d74d20b390983564"
let today = moment().format("M/D/YYYY")


let citySearchedInput = document.getElementById("cityInput")
let citySearched = ""
let searchButton = document.getElementById("searchButton")
let sameDayURL = ""


searchButton.addEventListener("click", function () {

   citySearched = citySearchedInput.value

   sameDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearched + "&appid=" + APIKey + "&units=imperial"

   console.log(citySearched)

   //when a new city is searched, set it to local storage
   let history= JSON.parse(localStorage.getItem("cities"))
   history.push(citySearched)
   localStorage.setItem("cities", JSON.stringify(history))

   setWeather()
   displaySearches()
})

function setWeather() {
   //get same day  forcast information

   fetch(sameDayURL)
      .then(function (response2) {
         return response2.json()
      })
      .then(function (dailyWeather) {

         let todayTemp = dailyWeather.main.temp
         let todayWind = dailyWeather.wind.speed
         let todayHumidity = dailyWeather.main.humidity
         let todayIconCode = dailyWeather.weather[0].icon
         let todayIcon = "http://openweathermap.org/img/w/" + todayIconCode + ".png"

         //display same day forcast

         let chosenCity = document.getElementById("chosenCity")
         let currentTemp = document.getElementById("currentTemp")
         let currentWind = document.getElementById("currentWind")
         let currentHumidity = document.getElementById("currentHumidity")

         chosenCity.textContent = citySearched + " " + today
         currentTemp.textContent = todayTemp
         currentWind.textContent = todayWind
         currentHumidity.textContent = todayHumidity

         let icon = document.getElementById("currentIcon")
         icon.setAttribute("src", todayIcon)


      })

   //get city lat and long
   //get 5 day forcast

   let getLatLongURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit=1&appid=" + APIKey

   fetch(getLatLongURL)
      .then(function (response) {
         return response.json()
      })
      .then(function (latLong) {

         let cityLat = latLong[0].lat
         let cityLong = latLong[0].lon
         let FiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLong + "&appid=" + APIKey + "&units=imperial"

         fetch(FiveDayURL)
            .then(function (response3) {
               return response3.json()
            })
            .then(function (fiveDay) {
               console.log(fiveDay)

               //day one
               let dayOne = moment().add(1, "d").format("M/D/YYYY")
               let dayOneTemp = fiveDay.list[5].main.temp
               let dayOneWind = fiveDay.list[5].wind.speed
               let dayOneHumidity = fiveDay.list[5].main.humidity
               let dayOneIconCode = fiveDay.list[5].weather[0].icon
               let dayOneIcon = "http://openweathermap.org/img/w/" + dayOneIconCode + ".png"

               //day two
               let dayTwo = moment().add(2, "d").format("M/D/YYYY")
               let dayTwoTemp = fiveDay.list[13].main.temp
               let dayTwoWind = fiveDay.list[13].wind.speed
               let dayTwoHumidity = fiveDay.list[13].main.humidity
               let dayTwoIconCode = fiveDay.list[13].weather[0].icon
               let dayTwoIcon = "http://openweathermap.org/img/w/" + dayTwoIconCode + ".png"

               //day three
               let dayThree = moment().add(3, "d").format("M/D/YYYY")
               let dayThreeTemp = fiveDay.list[21].main.temp
               let dayThreeWind = fiveDay.list[21].wind.speed
               let dayThreeHumidity = fiveDay.list[21].main.humidity
               let dayThreeIconCode = fiveDay.list[21].weather[0].icon
               let dayThreeIcon = "http://openweathermap.org/img/w/" + dayThreeIconCode + ".png"

               //day four
               let dayFour = moment().add(4, "d").format("M/D/YYYY")
               let dayFourTemp = fiveDay.list[29].main.temp
               let dayFourWind = fiveDay.list[29].wind.speed
               let dayFourHumidity = fiveDay.list[29].main.humidity
               let dayFourIconCode = fiveDay.list[29].weather[0].icon
               let dayFourIcon = "http://openweathermap.org/img/w/" + dayFourIconCode + ".png"

               //day five
               let dayFive = moment().add(5, "d").format("M/D/YYYY")
               let dayFiveTemp = fiveDay.list[37].main.temp
               let dayFiveWind = fiveDay.list[37].wind.speed
               let dayFiveHumidity = fiveDay.list[37].main.humidity
               let dayFiveIconCode = fiveDay.list[37].weather[0].icon
               let dayFiveIcon = "http://openweathermap.org/img/w/" + dayFiveIconCode + ".png"

               //display five day forcast

               //day one
               let forcastDayOne = document.getElementById("date1")
               let OneDayTemp = document.getElementById("temp1")
               let OneDayWind = document.getElementById("wind1")
               let OneDayHumidity = document.getElementById("humidity1")

               forcastDayOne.textContent = dayOne
               OneDayTemp.textContent = dayOneTemp
               OneDayWind.textContent = dayOneWind
               OneDayHumidity.textContent = dayOneHumidity

               let icon1 = document.getElementById("icon1")
               icon1.setAttribute("src", dayOneIcon)

               //day two
               let forcastDayTwo = document.getElementById("date2")
               let TwoDayTemp = document.getElementById("temp2")
               let TwoDayWind = document.getElementById("wind2")
               let TwoDayHumidity = document.getElementById("humidity2")

               forcastDayTwo.textContent = dayTwo
               TwoDayTemp.textContent = dayTwoTemp
               TwoDayWind.textContent = dayTwoWind
               TwoDayHumidity.textContent = dayTwoHumidity

               let icon2 = document.getElementById("icon2")
               icon2.setAttribute("src", dayTwoIcon)

               //day three
               let forcastDayThree = document.getElementById("date3")
               let ThreeDayTemp = document.getElementById("temp3")
               let ThreeDayWind = document.getElementById("wind3")
               let ThreeDayHumidity = document.getElementById("humidity3")

               forcastDayThree.textContent = dayThree
               ThreeDayTemp.textContent = dayThreeTemp
               ThreeDayWind.textContent = dayThreeWind
               ThreeDayHumidity.textContent = dayThreeHumidity

               let icon3 = document.getElementById("icon3")
               icon3.setAttribute("src", dayThreeIcon)

               //day four
               let forcastDayFour = document.getElementById("date4")
               let fourDayTemp = document.getElementById("temp4")
               let fourDayWind = document.getElementById("wind4")
               let fourDayHumidity = document.getElementById("humidity4")

               forcastDayFour.textContent = dayFour
               fourDayTemp.textContent = dayFourTemp
               fourDayWind.textContent = dayFourWind
               fourDayHumidity.textContent = dayFourHumidity

               let icon4 = document.getElementById("icon4")
               icon4.setAttribute("src", dayFourIcon)

               //day five
               let forcastDayFive = document.getElementById("date5")
               let fiveDayTemp = document.getElementById("temp5")
               let fiveDayWind = document.getElementById("wind5")
               let fiveDayHumidity = document.getElementById("humidity5")

               forcastDayFive.textContent = dayFive
               fiveDayTemp.textContent = dayFiveTemp
               fiveDayWind.textContent = dayFiveWind
               fiveDayHumidity.textContent = dayFiveHumidity

               let icon5 = document.getElementById("icon5")
               icon5.setAttribute("src", dayFiveIcon)

            })
      })
}


//when page loads display search history
function onLoad(){
 
   let history = JSON.parse(localStorage.getItem("cities"))
   if (history === null){
      history=[]
      localStorage.setItem("cities", JSON.stringify(history))
   }else {  
      displaySearches()
   }}

onLoad()

function displaySearches(){

   let history = JSON.parse(localStorage.getItem("cities"))
   console.log(history)

   let historyDiv = document.getElementById("recentSearches")

   //clears our all recent history 
   while (historyDiv.firstChild) {
      historyDiv.removeChild(historyDiv.firstChild);
  }
  
  //loads all history to page
   for(let i=history.length-1; i>=0; i--){
      let button = document.createElement("button")
      button.innerHTML=history[i]
      historyDiv.appendChild(button)

      button.addEventListener("click", function(e) {
         citySearched=e.target.innerHTML

         sameDayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearched + "&appid=" + APIKey + "&units=imperial"

         console.log(citySearched)
         setWeather()
      } )
   }
}




