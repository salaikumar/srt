import React, {Component} from 'react';
import AppStore from '../../store/AppStore';

class SouthAfrica extends Component{
  constructor(props){
    super(props);
    this.state = {
      sachinData : AppStore.getSachinData(),
      againstSA : [],
      stadium: []
    }
  }

  componentWillMount(){
    this.renderSAChart();
  }

  render(){
    return(
      <div className="text-center">
        <div className="row">
          <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-body panelBackground">
              <h3>Matches</h3>
              <p>{this.state.againstSA.matchPlayed}</p>
              <h3>TotalRuns</h3>
              <p>{this.state.againstSA.totalRuns}</p>
            </div>
          </div>
          </div>
          <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-body panelBackground">
              <h3>Wickets</h3>
              <p>{this.state.againstSA.wickets}</p>
              <h3>Catches</h3>
              <p>{this.state.againstSA.catches}</p>
            </div>
          </div>
          </div>
          <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-body panelBackground">
              <h3>50s</h3>
              <p>{this.state.againstSA.fifties}</p>
              <h3>100s</h3>
              <p>{this.state.againstSA.hundreds}</p>
            </div>
          </div>
          </div>
        </div>
        {this.renderChart()}
      </div>
    )
  }
  renderChart(){
    var config = {
      "type": "pie",
      "legend":{
        "margin-right": "25px"
      },
      "series": [
        {
        "values": [this.state.againstSA.won],
        "text": "Won " + [this.state.againstSA.won]
      },
      {
        "values": [this.state.againstSA.lost],
        "text": "Lost " + [this.state.againstSA.lost]
      },
      {
          "values": [this.state.againstSA.nr],
          "text": "No result " + [this.state.againstSA.nr]
      }
    ]
    };
    zingchart.render({
      id: "versusChart",
      data: config,
      height: "400px"
    })
  }
  renderSAChart(){
    var matchPlayed = 0,
        runs = 0,
        wickets = 0,
        catches = 0,
        fifties = 0,
        hundreds = 0,
        highest = 0,
        won = 0,
        lost = 0,
        nr = 0;
    var values = new Array();
    this.state.sachinData.data.map((data,index)=>{
      if(data.opposition == "v South Africa"){
        matchPlayed += 1;
        if(!isNaN(parseInt(data.batting_score))){
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
        if(data.match_result == 'won'){
          won += 1;
        }else if(data.match_result == 'lost'){
          lost += 1;
        }else{
          nr += 1;
        }
        values.push(data.ground);
      }

      this.state.againstSA = {
        matchPlayed: matchPlayed,
        totalRuns: runs,
        catches: catches,
        wickets: wickets,
        fifties: fifties,
        hundreds: hundreds,
        won: won,
        lost: lost,
        nr: nr
      }
    });
  }
}
export default SouthAfrica;
