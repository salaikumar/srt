import React, {Component} from 'react';
import RenderOverview from './RenderOverview';
import AppStore from '../store/AppStore';
import RenderYears from './RenderYears';
import RenderBatting from './RenderBatting';
class Sachin extends Component{
  constructor(props){
    super(props);
    this.state = {
      renderTab : "",
      sachinData : ""
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
      renderView = <RenderOverview />;
    }else if(this.state.renderTab == "batting"){
      renderView = <RenderBatting />;
    }else if(this.state.renderTab == "years"){
      renderView = <RenderYears sachinData={this.state.sachinData} />;
    }
    return(
      <div className="container-fluid">
        <header>
          <div className="nav navbar-fixed-top">
            <p>SachinRameshTendulkar</p>
          </div>
        </header><br />
        <br />
        <section>
          <ul className="nav nav-tabs">
            <li role="presentation" onClick={this.renderTabs.bind(this,"overview")}><a href="#">Overview</a></li>
            <li role="presentation" onClick={this.renderTabs.bind(this,"batting")}><a href="#">Batting</a></li>
            <li role="presentation" onClick={this.renderTabs.bind(this,"years")}><a href="#">Over the years</a></li>
          </ul>
        </section>
        <section>
          {
            renderView
          }
        </section>
      </div>
    )
  }
}

export default Sachin;
