const key = '54cefe8b494b046b41b67b379507fc7e'
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&exclude=alerts,minutely&lang=ru&units=metric&appid=2cfda1f27f8f18422038c85cc30073ad'
const api = 'api.openweathermap.org/data/2.5/weather?q=&appid=54cefe8b494b046b41b67b379507fc7e'


const $weather=document.querySelector('.weather')
const $content=document.querySelector('.content')
const $daytoday=document.querySelector('.daytoday')
const $temp=document.querySelector('.temp')
const $description=document.querySelector('.description')
const $gust=document.querySelector('.gust')
const $wind=document.querySelector('.wind')
const $city=document.querySelector('#city')

let month=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']



fetch(url)
    .then(response => response.json())
    
    .then(data =>{
        console.log(data)
    
$weather.insertAdjacentHTML('afterbegin',`<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`)

$temp.textContent=data.current.temp+'°'
$daytoday.innerHTML=`Сегодня, ${new Date().toLocaleDateString('ru-RU',{day:'2-digit',month:'long'})}`
$description.textContent=data.current.weather[0].description
$gust.innerHTML=`<img src="./vector2.svg"><p>Ветер</p> | <span>${data.current.wind_speed} km/h</span>`
$wind.innerHTML=`<img src="./rain.svg"><p>Дождь</p>| <span>${data.current.humidity}%</span>`
$wind.innerHTML=`<img src="./rain.svg"><p>Дождь</p>| <span>${data.current.humidity}%</span>`
 

    // $content.insertAdjacentHTML('beforeend',`<h1 style="font-weight:400;color:white;font-size:18px;font-family:overpass"> Сегодня, ${new Date().getDate()}  июнь</h1>
    //      <h1 style="font-wight:400;color:white;font-size:100px;font-family:overpass">${data.current.temp + '°'}</h1>
    //      <span style="font-wight:700;color:white;font-size:23px;font-family:overpass">${data.current.weather[0].description}</span>`)
      
})


