const key = '54cefe8b494b046b41b67b379507fc7e'
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&exclude=alerts,minutely&lang=ru&units=metric&appid=2cfda1f27f8f18422038c85cc30073ad'
const api = 'api.openweathermap.org/data/2.5/weather?q=&appid=54cefe8b494b046b41b67b379507fc7e'



const $data=document.querySelector('.data')
const $daily=document.querySelector('.daily')
const $weekdays=document.querySelector('.weekdays')




let days = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',

]

let $hours=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
]

fetch(url)
    .then(response => response.json())
    
    .then(data =>{
        console.log(data)
    

        $data.insertAdjacentHTML('beforeend',`<h1> Сегодня</h1>    <p>Июнь, ${new Date().getDate()}</p>`)
        data.hourly.forEach((element,item)=>{
         $daily.insertAdjacentHTML('beforeend',`
         <div class='day'>
         <p>${Math.floor(Number(element.temp ))}°C</p>
         <span>
            <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
            </span>
             <p>${$hours[new Date().getHours()-1+item]}:00</p>
            
         </div>`)
        

        })
        data.daily.forEach((elem,item)=>{
           $weekdays.insertAdjacentHTML('beforeend',`
           <div class='days'>
           <span>${days[new Date().getDay()-1+item]}, ${new Date().getDate()+item} </span>
           <img src="http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png">
           <span>${Math.floor(Number(elem.temp.day))}°</span>
           
           </div>`)
        })

    })
