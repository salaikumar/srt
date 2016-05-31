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
        Sachin vs Zimbabwe
        <RadioButton name="versus" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
            {
              Radio=>(
                <div>
                  <label className="radio-inline">
                    <Radio value="matches" />Matches
                  </label>
                  <label className="radio-inline">
                    <Radio value="runs" />Runs
                  </label>
                  <label className="radio-inline">
                    <Radio value="highest" />Highest
                  </label>
                  <label className="radio-inline">
                    <Radio value="100" />100s
                  </label>
                  <label className="radio-inline">
                    <Radio value="50" />50s
                  </label>
                  <label className="radio-inline">
                    <Radio value="wickets" />Wickets
                  </label>
                  <label className="radio-inline">
                    <Radio value="catches" />Catches
                  </label>
                </div>
              )
            }
        </RadioButton>
        {
          this.renderZimChart()
        }
      </div>
    )
  }
  renderZimChart(){
    console.log(document.getElementById('sachin').children);
    console.log(document.getElementById('renderChart'));
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
        runs += parseInt(data.batting_score);
        //wickets += wickets;
        catches += parseInt(data.catches);
        if(parseInt(data.batting_score) >= 50 && parseInt(data.batting_score) <100 ){
          console.log('fifties',data.batting_score);
          fifties += 1;
        }
        if(parseInt(data.batting_score) >= 100 ){
          hundreds += 1;
        }
      }
    });

    var myConfig = {
      type: 'bar',
      series: [
        {
          values: [matchPlayed]
        }
      ]
    };
    zingchart.render({
      id: 'renderChart',
      data: myConfig,
      height: '30%',
      width: '50%'
    });
  }
}
export default Zimbabwe;
