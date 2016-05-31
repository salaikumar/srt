import React, {Component} from 'react';
import Australia from './versus/Australia';
import Bangladesh from './versus/Bangladesh';
import Bermuda from './versus/Bermuda';
import England from './versus/England';
import Ireland from './versus/Ireland';
import Kenya from './versus/Kenya';
import Namibia from './versus/Namibia';
import Netherland from './versus/Netherland';
import NewZealand from './versus/NewZealand';
import Pakistan from './versus/Pakistan';
import SouthAfrica from './versus/SouthAfrica';
import SriLanka from './versus/SriLanka';
import UAE from './versus/UAE';
import WestIndies from './versus/WestIndies';
import Zimbabwe from './versus/Zimbabwe';
class RenderBatting extends Component{

  constructor(props){
    super(props);
    this.state = {
      renderState : ""
    }
  }

  renderCountry(country){
    this.setState({
      renderState: country
    });
  }
  render(){
    if(!this.state.renderState == ""){
      var versus = "Sachin vs " + this.state.renderState;
    }
    var componentLookup = {
      'Australia': <Australia />,
      'Bangladesh': <Bangladesh />,
      'Bermuda': <Bermuda />,
      'England': <England />,
      'Ireland': <Ireland />,
      'Kenya': <Kenya />,
      'Namibia': <Namibia />,
      'Netherland': <Netherland />,
      'NewZealand': <NewZealand />,
      'Pakistan': <Pakistan />,
      'SouthAfrica': <SouthAfrica />,
      'SriLanka': <SriLanka />,
      'UAE': <UAE />,
      'WestIndies': <WestIndies />,
      'Zimbabwe': <Zimbabwe />
    }
    console.log(this.state.renderState);
    var Country = this.state.renderState;
    console.log('Country', Country);
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
                  <img src="/images/Bangladesh-Flag-256.png" alt="Bangladesh" onClick={this.renderCountry.bind(this,"Australia")} className="img-responsive"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Bermuda" >
                  <img src="/images/Bermuda.png" alt="Bermuda" onClick={this.renderCountry.bind(this,"Bermuda")} className="img-responsive against"/>
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
                  <img src="/images/Namibia.png" alt="Namibia" onClick={this.renderCountry.bind(this,"Namibia")} className="img-responsive against"/>
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
          <div className="col-xs-8 text-center" id="renderChart">
            <h3>
            {
              versus
            }
            </h3>
            {componentLookup[this.state.renderState]}
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
                <img src="/images/UAE.png" alt="UAE" onClick={this.renderCountry.bind(this,"UAE")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="WestIndies">
                <img src="/images/WestIndies.png" alt="WestIndies" onClick={this.renderCountry.bind(this,"WestIndies")} className="img-responsive"/>
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
}
export default RenderBatting;
