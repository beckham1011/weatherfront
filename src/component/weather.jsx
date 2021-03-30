import React from 'react';
import axios from 'axios';

import '../config'

class Weather extends React.Component {
    constructor(props) {
        super(props);
    
        let url = global.constants.serverUrl
        axios.get(url).then(
          (response) => {
            var petsMap = {}
            for(var i =0; i<response.data.length; i++){
              var element = response.data[i]
              if(petsMap.hasOwnProperty(element.gender)){
                petsMap[element.gender].push(element.name)
                petsMap[element.gender] = pets
              }else{
                var pets = new Array()
                pets.push(element.name)
                petsMap[element.gender] = pets
              }
            }

            var allHtml  = '<div class="list-group">';
            var html = '';
            for(element in petsMap){
              html = '<a href="#" class="list-group-item list-group-item-action active" aria-current="true">'+ element +'</a>'
              petsMap[element].forEach(petsElement => {
                html += '<a href="#" class="list-group-item list-group-item-action">' + petsElement +'</a>'
              });
              allHtml += html;
              console.log(html)
            }
            allHtml += '</div>'
            this.setState = {allHtml: allHtml}
          }).catch(err => console.log(err))
    }

    render() {  
      let html = this.state.allHtml;
      console.log(html)
      console.log("this.props")
      return (
        <form>
          <label>
            <select class="form-control form-control-lg">
              <option value="sydney">Sydney</option>
              <option value="melbourne">Melbourne</option>
              <option value="hobart">Hobart</option>
            </select>
          </label>
        </form>
      );
    }
}

export default Weather;