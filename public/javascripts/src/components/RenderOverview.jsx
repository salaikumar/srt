import React, {Component} from 'react';
import AppStore from '../store/AppStore';
class RenderOverview extends Component{
  constructor(props){
    super(props);
    this.state = {
      sachinData: AppStore.getSachinData()
    };
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 roundBox">
            <p>Runs</p>
            <p>{this.getTotalRuns()}</p>
          </div>
          <div className="col-md-4 roundBox">
            <p>Matches</p>
            <p>{this.state.sachinData.data.length-1}</p>
          </div>
          <div className="col-md-4 roundBox">
            <p>Wickets</p>
            <p>{this.getTotalWickets()}</p>
            <p>Catches</p>
            <p>{this.getTotalCatches()}</p>
          </div>
        </div>
      </div>
    )
  }
  getTotalRuns(){
    let runs = 0;
    this.state.sachinData.data.map(function(data,index){
      if(!isNaN(parseInt(data.batting_score))){
        runs += parseInt(data.batting_score);
      }
    });
    return runs;
  }
  getTotalWickets(){
    let wickets = 0;
    this.state.sachinData.data.map(function(data,index){
      if(!isNaN(parseInt(data.wickets))){
        wickets += parseInt(data.wickets);
      }
    });
    return wickets;
  }
  getTotalCatches(){
    let catches = 0;

    this.state.sachinData.data.map(function(data,index){
      if(!isNaN(parseInt(data.catches))){
        catches += parseInt(data.catches);
      }
    });
    return catches;
  }
}
export default RenderOverview;
