import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import bookdb from './img/bookdb.png'
import portofolio from './img/portofolio.png'
import restapi1 from './img/restapi1.png'
import restapi2 from './img/restapi2.png'
import Fade from 'react-reveal/Fade'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <Fade bottom>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${bookdb})`}} ></CardTitle>
            <CardText>
              Proyek ui dengan ReactJS menampilkan data dari REST API dan bisa mengolahnya.
            </CardText>
            <CardActions border>
              <Button colored href="https://interoperabilitas-energen.web.app/admin" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            </Fade>
          </Card>
          
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <Fade bottom>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${portofolio})`}} ></CardTitle>
            <CardText>
              Proyek ini menampilkan site portofolio saya pribadi menggunakan ReactJS.
            </CardText>
            <CardActions border >
              <Button colored href="https://fgprayogo.web.app/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            </Fade>
          </Card>


        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <Fade>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${restapi1})`}} ></CardTitle>
            <CardText>
              Proyek ini membuat server dengan framework ExpressJS dan melayani request REST API data buku.
            </CardText>
            <CardActions border>
              <Button colored href="http://test1-energen.herokuapp.com/api/book" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            </Fade>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <Fade>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${restapi2})`}} ></CardTitle>
            <CardText>
              Proyek ini membuat server dengan framework ExpressJS dan melayani request REST API data email dan komentar blog.
            </CardText>
            <CardActions border>
              <Button colored href="https://comment-portofolio.herokuapp.com/api/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            </Fade>
          </Card>
          
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
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React JS</Tab>
          <Tab>Express JS</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content" style={{marginTop:'150px'}}>{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
