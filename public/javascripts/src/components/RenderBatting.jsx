import React, {Component} from 'react';
import battingUtils from '../utils/battingUtils';
class RenderBatting extends Component{

  constructor(props){
    super(props);
    this.state = {
      renderState : "Australia"
    }
  }

  renderCountry(country,event){
    console.log(event.currentTarget);
    this.setState({
      renderState: country
    });
  }
  componentDidMount(){
    console.log(document.getElementById('versusChart'));
    this.renderAusChart(this.refs['australia'].state.againstAUS);
  }
  render(){
    if(!this.state.renderState == ""){
      var versus = "Sachin vs " + this.state.renderState;
    }
    var Country = this.state.renderState;
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Australia" >
                  <img src="/images/Australia-256.png" alt="Australia" onClick={this.renderCountry.bind(this,"Australia")} className="img-responsive"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Bangladesh" >
                  <img src="/images/Bangladesh-Flag-256.png" alt="Bangladesh" onClick={this.renderCountry.bind(this,"Bangladesh")} className="img-responsive"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Bermuda" >
                  <img src="/images/Bermuda-256.png" alt="Bermuda" onClick={this.renderCountry.bind(this,"Bermuda")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="England" >
                  <img src="/images/England-256.png" alt="England" onClick={this.renderCountry.bind(this,"England")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Ireland" >
                  <img src="/images/Ireland-256.png" alt="Ireland" onClick={this.renderCountry.bind(this,"Ireland")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Kenya" >
                  <img src="/images/Kenya-256.png" alt="Kenya" onClick={this.renderCountry.bind(this,"Kenya")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Namibia" >
                  <img src="/images/Namibia-256.png" alt="Namibia" onClick={this.renderCountry.bind(this,"Namibia")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Netherland">
                  <img src="/images/Netherlands-256.png" alt="Netherland"  onClick={this.renderCountry.bind(this,"Netherland")} className="img-responsive against"/>
                </a>
              </div>
            </div>
          </div>
              <div className="col-xs-10 text-center">
              <div className="panel panel-default">
                <div className="panel-body" id="versusChart">
                <h3 className="versus">
                {
                  versus
                }
                </h3>
                {battingUtils.getComponentName(this.state.renderState)}
                </div>
              </div>
              </div>

          <div className="col-xs-1 pull-right">
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="NewZealand">
                <img src="/images/New-Zealand-256.png" alt="NewZealand"  onClick={this.renderCountry.bind(this,"NewZealand")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="Pakistan">
                <img src="/images/Pakistan-256.png" alt="Pakistan" onClick={this.renderCountry.bind(this,"Pakistan")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="SouthAfrica">
                <img src="/images/South-Africa-256.png" alt="SouthAfrica" onClick={this.renderCountry.bind(this,"SouthAfrica")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="SriLanka">
                <img src="/images/Sri-Lanka-256.png" alt="SriLanka" onClick={this.renderCountry.bind(this,"SriLanka")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="UAE">
                <img src="/images/uae-256.png" alt="UAE" onClick={this.renderCountry.bind(this,"UAE")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="WestIndies">
                <img src="/images/westindies-256.png" alt="WestIndies" onClick={this.renderCountry.bind(this,"WestIndies")} className="img-responsive west"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="Zimbabwe">
                <img src="/images/Zimbabwe-128.png" alt="Zimbabwe" onClick={this.renderCountry.bind(this,"Zimbabwe")} className="img-responsive"/>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
  renderAusChart(againstAUS){
    var config = {
      "type": "pie",
      "legend":{
        "margin-right": "25px"
      },
      "series": [
        {
        "values": [againstAUS.won],
        "text": "Won " + [againstAUS.won]
      },
      {
        "values": [againstAUS.lost],
        "text": "Lost " + [againstAUS.lost]
      },
      {
          "values": [againstAUS.nr],
          "text": "No result " + [againstAUS.nr]
      }
    ]
    };
    zingchart.render({
      id: "versusChart",
      data: config,
      height: "400px"
    })
  }
}
export default RenderBatting;
