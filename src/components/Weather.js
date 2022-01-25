import React from 'react'

class Weather extends React.Component{
  render(){
    return(
      <div>
      <p>Новокуйбышевск</p>
      <p>День недели: {this.props.weekDay}</p>
      <p>Дата: {this.props.date}</p>
      <p><img src={this.props.img}/></p>
      <p>Температура днем: {this.props.temp_day}</p>
      <p>Температура ночью: {this.props.temp_night}</p>
      <p>{this.props.description}</p>

      </div>
    );
  }
};
export default Weather;
