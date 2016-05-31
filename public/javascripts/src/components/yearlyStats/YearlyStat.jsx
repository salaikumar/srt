import React, {Component} from 'react';
import AppStore from '../../store/AppStore';
import YearConstants from '../../constants/YearConstants';
import appUtils from '../../utils/appUtils';
var arrayOfYears = new Array();
var matches = [];
class YearlyStat extends Component{
  constructor(props){
    super(props);
    this.state = {
      sachinData: AppStore.getSachinData(),
      arrayOfYears: []
    };
  }

  render(){

    return(
      <div>
      {
        this.renderCharts()
      }
      </div>
    )
  }

  componentWillMount(){
    this.getYearlyMatches();
  }
  getYearlyMatches(){
    YearConstants.years.map((year,index)=>{
      var matches = 0,runs = 0, catches = 0,hundreds = 0,fifties = 0;
      this.state.sachinData.data.map((data,index)=>{
        var date = new Date(data.date);
        if(date.getFullYear() === year){
          matches +=1;
          if(!isNaN(parseInt(data.batting_score))){
              runs += parseInt(data.batting_score);
          }
          if(!isNaN(parseInt(data.catches))){
              catches += parseInt(data.catches);
          }
          if(parseInt(data.batting_score)>= 50 && parseInt(data.batting_score)<100){
            fifties += 1;
          }
          if(parseInt(data.batting_score)>= 100){
            hundreds += 1;
          }
        }
      });
      this.state.arrayOfYears[year] = {
        matches: matches,
        runs: runs,
        catches: catches,
        fifties: fifties,
        hundreds: hundreds
      };
    });
  }
  renderCharts(){
    var chartData = {
      "type":"bar",
      "plotarea":{
        "adjust-layout": true
      },
      "scale-x":{
        "labels": YearConstants.years
      },
      "series":[
        {
          "values": appUtils.getMatchperyear(this.state.arrayOfYears)
        }
      ]
    };
    setTimeout(function(){
      zingchart.render({
        id: 'yearChart',
        data: chartData,
        height: '100%'
      });
    },1)

  }
}
export default YearlyStat;
