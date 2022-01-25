import React from "react";
import Info from "./components/info";
import Weather from "./components/Weather";


const API_KEY = "7f9f86e0b94462c5e99509f3eecec459";

class App extends React.Component {

  state = {
    weekDay: undefined,
    temp_day: undefined,
    temp_night: undefined,
    date: undefined,
    img: undefined,
    description: undefined,
    error: undefined
  }

gettingWeather = async () => {
  const api_url = await
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=53,1&lon=49,95&&exclude=minutely,hourly,alerts,current&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();
  console.log(data)

var season = new Date(data.daily.[0].dt * 1000);
var weekDays = season.getDay();
switch (weekDays) {
  case 0:
  weekDays = "Воскресенье"
  break;
    case 1:
    weekDays = "Понедельник"
    break;
    case 2:
    weekDays = "Вторник"
    break;
    case 3:
    weekDays = "Среда"
    break;
    case 4:
    weekDays = "Четверг"
    break;
    case 5:
    weekDays = "Пятница"
    break;
    case 6:
    weekDays = "Суббота"
    break;
}
var dataAndMonth = season.getDate() + "." + (season.getMonth() + 1) + "." + season.getFullYear();
let Img = data.daily.[0].weather.[0].main;
let Desc = data.daily.[0].weather.[0].main;
var descript;
switch (Desc) {
  case "Clouds":
  descript = "Облачно, без осадков"
  break;
  case "Сlear":
  descript = "Ясно"
  break;
  case "Rain":
  descript = "Дождь"
  break;
  case "Thunderstorm":
  descript = "Гроза"
  break;
  case "Drizzle":
    descript = "Ливень"
    break;
    case "Snow":
    descript = "Снег"
    break;
}
var Image;
  switch(Img){
  case "Clouds":
        Image = "https://openweathermap.org/img/wn/04n@2x.png"
          break;
          case "Сlear":
          Image = "https://openweathermap.org/img/wn/01d@2x.png"
          break;
          case "Rain":
          Image = "http://openweathermap.org/img/wn/09d@2x.png"
          break;
          case "Thunderstorm":
          Image = "http://openweathermap.org/img/wn/11d@2x.png"
            break;
            case "Drizzle":
            Image = "http://openweathermap.org/img/wn/09d@2x.png"
            break;
            case "Snow":
            Image = "http://openweathermap.org/img/wn/13d@2x.png"
            break;
}
this.setState({
  weekDay: weekDays,
  temp_day: data.daily.[0].temp.day,
  temp_night: data.daily.[0].temp.night,
  date: dataAndMonth,
  img: Image,
  description: descript
});
}
componentDidMount() {
   this.gettingWeather();
 }
 render(){
   return (
<div>
<div className="info">
      <Info />
      </div>
            <div align="center" className = "main">
            <Weather
            weekDay={this.state.weekDay}
            date={this.state.date}
            img={this.state.img}
               temp_day={this.state.temp_day}
               temp_night = {this.state.temp_night}
              description = {this.state.description}
               error={this.state.error}
             />
              </div>
              </div>
   );
 }
}

export default App;
