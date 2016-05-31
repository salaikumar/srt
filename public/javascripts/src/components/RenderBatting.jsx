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
                  <img src="/images/Australia-256.png" alt="Australia" onClick={this.renderCountry.bind(this,"Australia")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Bangladesh" >
                  <img src="/images/Bangladesh-Flag-256.png" alt="Bangladesh" onClick={this.renderCountry.bind(this,"Australia")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Zimbabwe">
                  <img src="/images/Zimbabwe-128.png" alt="Zimbabwe" onClick={this.renderCountry.bind(this,"Zimbabwe")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">

              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">

              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">

              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">

              </div>
            </div>
          </div>
          <div className="col-xs-10" id="renderChart">
            {componentLookup[this.state.renderState]}
          </div>
          <div className="col-xs-1">
            1
          </div>
        </div>
      </div>
    )
  }
}
export default RenderBatting;
