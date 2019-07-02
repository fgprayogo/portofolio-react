import React, { Component } from 'react';
import './css/aboutme.css'
import Form from './form/Form'
import Komentar from './form/Komentar'
import { withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { Tabs, Tab, Cell} from 'react-mdl';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div><Komentar/>
        </div>
        
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div style={{textAlign:'center'}}>
         <Form/>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      
      <div style={{textAlign:'center'}}>
         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Comments</Tab>
          <Tab>Write Comment</Tab>
        </Tabs>

      <Cell col={12} phone={4}>
            <Fade duration={1000}>
              <div className="content" style={{marginTop:'10px', textAlign:'center'}}>{this.toggleCategories()}</div>
            </Fade>
      </Cell>
      </div>

    )
  }
}

export default withRouter(About);
