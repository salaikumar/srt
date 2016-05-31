import React, {Component} from 'react';
import AppStore from '../../store/AppStore';

class Zimbabwe extends Component{
  constructor(props){
    super(props);
    this.state = {
      sachinData : AppStore.getSachinData(),
      againstZim : [],
      stadium: []
    }
  }

  componentWillMount(){
    this.renderZimChart();
  }

  render(){
    return(
      <div className="text-center">
        <div className="row">
          <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Matches</h3>
              <p>{this.state.againstZim.matchPlayed}</p>
              <h3>TotalRuns</h3>
              <p>{this.state.againstZim.totalRuns}</p>
            </div>
          </div>
          </div>
          <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Wickets</h3>
              <p>{this.state.againstZim.wickets}</p>
              <h3>Catches</h3>
              <p>{this.state.againstZim.catches}</p>
            </div>
          </div>
          </div>
          <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>50s</h3>
              <p>{this.state.againstZim.fifties}</p>
              <h3>100s</h3>
              <p>{this.state.againstZim.hundreds}</p>
            </div>
          </div>
          </div>
        </div>
        {this.renderChart()}
      </div>
    )
  }
  renderChart(){
    var chartData = {
      "type":"pie",
      "plotarea":{
        "adjust-layout": true
      },
      "series":[
        {"values":[59,55,30,28,15]},
        {"values":[55]},
        {"values":[30]},
        {"values":[28]},
        {"values":[15]}
      ]
    };
    //setTimeout(function(){
      zingchart.render({
        id: 'versusChart',
        data: chartData,
        height: '500px',
        width: '500px'
      });
    //},1)

  }
  renderZimChart(){
    var matchPlayed = 0,
        runs = 0,
        wickets = 0,
        catches = 0,
        fifties = 0,
        hundreds = 0,
        highest = 0;
    var values = new Array();
    this.state.sachinData.data.map((data,index)=>{
      if(data.opposition == "v Zimbabwe"){
        matchPlayed += 1;
        if(!isNaN(data.batting_score)){
          runs += parseInt(data.batting_score);
        }
        if(!isNaN(parseInt(data.catches))){
            catches += parseInt(data.catches);
        }
        if(!isNaN(parseInt(data.wickets))){
            wickets += parseInt(data.wickets);
        }
        if(parseInt(data.batting_score) >= 50 && parseInt(data.batting_score) <100 ){
          fifties += 1;
        }
        if(parseInt(data.batting_score) >= 100 ){
          hundreds += 1;
        }
        values.push(data.ground);
      }

      this.state.againstZim = {
        matchPlayed: matchPlayed,
        totalRuns: runs,
        catches: catches,
        wickets: wickets,
        fifties: fifties,
        hundreds: hundreds
      }
    });
  }
}
export default Zimbabwe;
