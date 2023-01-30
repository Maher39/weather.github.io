
const leftBoard = document.querySelector('.left-Board')
const middleBoard = document.querySelector('.middle-Board')
const rightBoard = document.querySelector('.right-Board')
const modeDark = document.querySelector('.modeDark')
const modeLight = document.querySelector('.modeLight')
const cards = document.querySelectorAll('.card')
const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', () => {

  leftBoard.classList.toggle('light-mode');
  middleBoard.classList.toggle('light-mode-center');
  rightBoard.classList.toggle('light-mode');
  
  modeLight.classList.toggle("active");
  modeDark.classList.toggle("active");

  cards.forEach(function(card){
    card.classList.toggle('light-mode-center-cards');
  })

});

const profileHover = document.getElementById('profile')
const profile = document.querySelector('.profile-container img')

profileHover.addEventListener('mouseover',function(){
  profile.classList.add('active')
})

profileHover.addEventListener('mouseout',function(){
  profile.classList.remove('active')
})

const menu = document.querySelector('.menu')

menu.addEventListener('click',function(){
  leftBoard.classList.toggle('active')
})


// Weather

let weather = {
  "apiKey" : "7210fc549942020b090474617bef46db",
  fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city
    +"&units=metric&appid=" 
    +this.apiKey
    ).then((response) => response.json())
    .then((data) => this.showWeather(data))
  },
  showWeather: function(data){
    const {name} = data;
    const {icon , description} = data.weather[0];
    const {main} = data.weather[0]
    const {temp , humidity,temp_max} = data.main;
    const {pressure} = data.main;
    const {speed} = data.wind;

    document.getElementById("locationCity").innerText = name;
    document.getElementById("description").innerText = description;
    document.getElementById("temp").innerText = temp+"° C";
    document.getElementById("windSpeed").innerText = speed + " m/s";
    document.getElementById("humidity").innerText = humidity + "%";
    document.getElementById("pressure").innerText = pressure + " hpa";
    document.getElementById("max_temp").innerText = temp_max + "° C" 

  const lastLetter = icon.substr(-1);

  if (lastLetter === 'n') {
    document.getElementById("svgIcon").src = "./Weather Icons/night/"+main+".svg"
} else {
  document.getElementById("svgIcon").src = "./Weather Icons/"+main+".svg"
}
    
  },
  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value)
  },
};

const btn = document.querySelector(".searchIn")

btn.addEventListener('click',function(){
  weather.search();
})

const searchBar = document.querySelector(".search-bar")

searchBar.addEventListener('keyup', function(event){
  if (event.key === "Enter"){
    weather.search();
  }
})

// Current Weather

weather.fetchWeather("Germany")

// Current Time

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dezember"
] 

const days = [
"nothing",
"Monday", 
"Tuesday", 
"Wednesday", 
"Thursday", 
"Friday", 
"Saturday", 
"Sunday"];

 const yearMonth = document.querySelector(".date-container h1")
 const dayMonth = document.querySelector(".date-container p")
 const time = document.querySelector(".date-container h2")

 var currentTime = new Date();

time.innerText = currentTime.getHours() + ":" + (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
yearMonth.innerText = month[currentTime.getMonth()] + " " + currentTime.getFullYear();
dayMonth.innerText = days[currentTime.getDay()] + " " + currentTime.getDate();


