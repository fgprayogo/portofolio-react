import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './img/profile.svg';
import Fade from 'react-reveal/Fade'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12} phone={4}>
            <Fade bottom>
            <img
              src={profile}
              alt="avatar"
              className="avatar-img"
              />
              </Fade>

            <div className="banner-text">
              <Fade bottom>
        
                <h1>Fitroh Galih Prayogo</h1>
  
              </Fade>

              <Fade bottom delay={500}>
                  <hr/>
              </Fade>
            <Fade bottom delay={1000}>
          <p>HTML/CSS | Bootstrap | JavaScript | ReactJS | React MDL| NodeJS | ExpressJS | MongoDB</p>
            </Fade>
          <Fade bottom delay={1500}>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com/in/fgprayogo" rel="noopener noreferrer" target="_blank" aria-label="linked-in">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/fgprayogo/" rel="noopener noreferrer" target="_blank" aria-label="linked-in">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/fgprayogo" rel="noopener noreferrer" target="_blank" aria-label="linked-in">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/fgprayogo/" rel="noopener noreferrer" target="_blank" aria-label="linked-in">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
        </Fade>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
