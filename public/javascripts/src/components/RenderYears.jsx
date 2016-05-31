import React, {Component} from 'react';
import AppStore from '../store/AppStore';
import jsonQuery from 'json-query';
import YearlyStat from './yearlyStats/YearlyStat';

class RenderYears extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className="container-fluid">
        Over the years of Sachin
        <div id="yearChart">
          <YearlyStat />
        </div>
      </div>
    )
  }
}
export default RenderYears;
