import React, {Component} from 'react';
import AppStore from '../store/AppStore';
import jsonQuery from 'json-query';

class RenderYears extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    console.log(this.props.sachinData.data[date=2004].batting_score);
    this.props.sachinData.data.map((data,index)=>{
      var date = new Date(data.date);
      if(date.getFullYear() === 2012){
        console.log(date);
      }

    })
    return(
      <div className="container">
        Over the years of Sachin
        {this.renderCharts()}
      </div>
    )
  }
  renderCharts(){
    var data = {
      "type":"bar",
      "series":[
        { "values": [35, 42, 67, 125]}
      ]
    };
    zingchart.render({
      id: 'chart',
      data: data,
      height: 400,
      width: 400
    })
  }
}
export default RenderYears;
