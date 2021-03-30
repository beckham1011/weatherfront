import React from 'react';
import axios from 'axios';

import '../config'

class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    let petsServerUrl = global.constants.petsServerUrl
    axios.get(petsServerUrl).then(
      (response) => {
        this.setState({data : response.data});
        var petsMap = {}
        for(var i =0; i<response.data.length; i++){
          var element = response.data[i]
          if(petsMap.hasOwnProperty(element.gender)){
            var petsNameArray = petsMap[element.gender]
            petsNameArray.push(element.name)
            petsMap[element.gender] = petsNameArray
          }else{
            var pets = new Array()
            pets.push(element.name)
            petsMap[element.gender] = pets
          }
        }
        
        //Sort
        for(var key in petsMap){
          petsMap[key].sort();
        }

        this.setState({petsMap: petsMap})
      }
    )
  }

  render() {
    let petsMap = this.state.petsMap
    return (
      <div>
        <div class="list-group">
          {
            (() => {
              let domArr = [];
              for(const key in petsMap) {
                if(petsMap.hasOwnProperty(key)) {
                  const value = petsMap[key]
                  domArr.push(<a href="#" class="list-group-item list-group-item-action active" aria-current="true">{key}</a>)
                  for(const val in value) {
                    domArr.push(<a href="#" class="list-group-item list-group-item-action">{value[val]}</a>)
                  }
                }
              }
              return domArr;
            })()
          }
        </div>
      </div>
    );
  }
}

export default Pets;
