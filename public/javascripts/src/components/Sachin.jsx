import React, {Component} from 'react';
import RenderOverview from './RenderOverview';
import AppStore from '../store/AppStore';
import RenderYears from './RenderYears';
import RenderBatting from './RenderBatting';
class Sachin extends Component{
  constructor(props){
    super(props);
    this.state = {
      renderTab : "overview",
      sachinData : "",
      tabStatus : {
        "overview": "active",
        "versus": "inactive",
        "years":"inactive"
      }
    };
  }

  renderTabs(tabName){
    this.setState({renderTab: tabName});
  }
  componentDidMount(){
    this.setState({
      sachinData : AppStore.getSachinData()
    })
  }
  render(){
    console.log(this.state.renderTab);
    var renderView = "";
    if(this.state.renderTab == "overview"){
      this.state.tabStatus = {
        "overview": "active",
        "versus": "inactive",
        "years": "inactive"
      };
      renderView = <RenderOverview />;
    }else if(this.state.renderTab == "batting"){
      this.state.tabStatus = {
        "overview": "inactive",
        "versus": "active",
        "years": "inactive"
      };
      renderView = <RenderBatting />;
    }else if(this.state.renderTab == "years"){
      this.state.tabStatus = {
        "overview": "inactive",
        "versus": "inactive",
        "years": "active"
      };
      renderView = <RenderYears sachinData={this.state.sachinData} />;
    }
    return(
      <div className="container-fluid">
        <header>
          <div className="nav navbar-default">
            <p className="text-center">
              <span className="tagline">“Enjoy the game, chase your dreams because dreams do come true”</span>
            </p>
            <p className="sign">- Sachin Tendulkar</p>
            <img src="/images/background/sachin3.png" alt="SachinTendulkar" className="img-responsive img-rounded sachinImage"/>
          </div>
        </header><br />
        <br />
        <section>
          <ul className="nav nav-tabs">
            <li role="presentation" className={this.state.tabStatus.overview} onClick={this.renderTabs.bind(this,"overview")}><a href="#">Overview</a></li>
            <li role="presentation" className={this.state.tabStatus.versus} onClick={this.renderTabs.bind(this,"batting")}><a href="#">Versus</a></li>
            <li role="presentation" className={this.state.tabStatus.years} onClick={this.renderTabs.bind(this,"years")}><a href="#">Over the years</a></li>
          </ul>
        </section>
        <section style={{marginTop: '10px'}}>
          {
            renderView
          }
        </section>
      </div>
    )
  }
}

export default Sachin;
