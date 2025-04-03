const inputbox = document.querySelector('.input-box'); //used for class
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img'); 
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity'); //used for id
const wind_speed = document.getElementById('wind_speed');
const location_not_found = document.querySelector('.location-not-found');  //to error display on html 
const weather_body = document.querySelector('.weather-body');  //to error display on html 


 async function checkWeather(city){

    //api key and openweather url are stored in variables
    const api_key = "728367988aed74d6e15c865472e68b7d" ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` ;


    //data coming from site is stored into local variable in json format
    const weather_data = await fetch(`${url}`).then(response => response.json()) ;


    if(weather_data.cod == `404`){ //error handling
        
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("Error");
        return ;

    }
    else{
        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
    }


    //data writing in html file to display
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    console.log(weather_data);


    //image switch

    switch(weather_data.weather[0].main){
        case 'Clouds' :
            weather_img.src = "/img/cloud.png";
            break;
        case 'Clear' :
            weather_img.src = "/img/clear.png";
            break;
        case 'Rain' :
            weather_img.src = "/img/rain.png";
            break;
        case 'Mist' :
             weather_img.src = "/img/mist.png";
             break;
        case 'Snow' :
            weather_img.src = "/img/snow.png";
            break;
        case 'Haze' :
            weather_img.src = "/img/haze.png";
            break;
        case 'Smoke' :
             weather_img.src = "/img/smoke.png";
             break;
    }

}


searchbtn.addEventListener('click' , ()=>{
    checkWeather(inputbox.value); //input passed to checkWeather function
})

inputbox.addEventListener( 'keypress' , (event) => {
    if(event.key === 'Enter'){
       checkWeather(inputbox.value);  
    }
})


document.getElementById("start-btn").addEventListener("click", () => {
    
    document.querySelector(".landing-page").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".landing-page").style.opacity = "0";
    document.querySelector(".landing-page").style.visibility = "hidden";

    document.querySelector(".white-flash").style.opacity = "1";
    document.querySelector(".white-flash").style.visibility = "visible";


    setTimeout(() => {

        document.querySelector(".white-flash").style.opacity = "0";
        document.querySelector(".white-flash").style.visibility = "hidden";

        document.querySelector(".container").style.opacity = "1";
        document.querySelector(".container").style.visibility = "visible";
    }, 400); 
});






