import React, { Component } from 'react';
import axios from 'axios';

import '../config'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'sydney',
          city: '',
          weather: '',
          lastUpdateTime: '',
          wind:'',
          temperature: ''
        };
        this.handleChange = this.handleChange.bind(this);
    
        let city = 'sydney'
        this.setState({value: city})
        let url = global.constants.serverUrl + city
        axios.get(url).then(
          (response) => {
            this.setState({city: response.data.data.cityName,
              temperature: response.data.data.temperature,
              updateTime: response.data.data.updateTime,
              weather: response.data.data.weather,
              wind: response.data.data.wind,
             });
          })
    }

    handleChange(event) {
        let city = event.target.value;
        this.setState({value: city})
        let url = global.constants.serverUrl + city
        axios.get(url).then(
          (response) => {
            this.setState({city: response.data.data.cityName,
              temperature: response.data.data.temperature,
              updateTime: response.data.data.updateTime,
              weather: response.data.data.weather,
              wind: response.data.data.wind,
             });
          })
      }

    render() {
        return (
          <form>
            <label>
              <select value={this.state.value} onChange={this.handleChange} class="form-control form-control-lg">
                <option value="sydney">Sydney</option>
                <option value="melbourne">Melbourne</option>
                <option value="hobart">Hobart</option>
              </select>
            </label>
    
            <table class="table table-hover">
              <tbody>
                <tr>
                  <td>City</td>
                  <td>{this.state.city}</td>
                </tr>          
                
                <tr>
                  <td>Updated Time</td>
                  <td>{this.state.updateTime}</td>
                </tr>          
                
                <tr>
                  <td>Weather</td>
                  <td>{this.state.weather}</td>
                </tr>          
                
                <tr>
                  <td>Temperature</td>
                  <td>{this.state.temperature}</td>
                </tr>          
                
                <tr>
                  <td>Wind</td>
                  <td>{this.state.wind}</td>
                </tr>
              </tbody>
            </table>
          </form>
        );
    }
}

export default Weather;