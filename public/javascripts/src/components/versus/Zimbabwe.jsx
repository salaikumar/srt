import React, {Component} from 'react';
import RadioButton from 'react-radio-group';
import AppStore from '../../store/AppStore';
class Zimbabwe extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedValue: 'matches',
      sachinData : AppStore.getSachinData()
    }
  }
  componentWillMount(){

  }

  handleChange(value){
    console.log('radio button value', value)
    this.setState({
      selectedValue: value
    })
  }

  render(){
    return(
      <div className="text-center">
      <div className="row">
        <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-body">
            Matches
            <p>1000</p>
          </div>
        </div>
        </div>
        <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-body">
            TotalRuns
            <p>1000</p>
          </div>
        </div>
        </div>
        <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-body">
            Wickets
            <p>1000</p>
          </div>
        </div>
        </div>
        <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-body">
            Wickets
            <p>1000</p>
          </div>
        </div>
        </div>
      </div>

        {
          this.renderZimChart()
        }
      </div>
    )
  }
  renderZimChart(){
    var matchPlayed = 0,
        runs = 0,
        wickets = 0,
        catches = 0,
        fifties = 0,
        hundreds = 0,
        highest = 0;

    this.state.sachinData.data.map((data,index)=>{
      if(data.opposition == "v Zimbabwe"){
        matchPlayed += 1;
        if(!isNaN(data.batting_score)){
          runs += parseInt(data.batting_score);

        }
        //wickets += wickets;
        catches += parseInt(data.catches);
        if(parseInt(data.batting_score) >= 50 && parseInt(data.batting_score) <100 ){
          fifties += 1;
        }
        if(parseInt(data.batting_score) >= 100 ){
          hundreds += 1;
        }
        console.log(data.ground);
      }
    });
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
  </div>
  }
}
export default Zimbabwe;
