import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profile from './img/profile.svg'
import Fade from 'react-reveal/Fade'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
    
          <Cell col={6}>
          <Fade bottom >
            <h2>Fitroh Galih Prayogo</h2>
            </Fade>
            <Fade bottom delay={200}>
            <img
              src={profile}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>>>></p>
             </Fade>
          </Cell>

          <Cell col={6}>
            <Fade bottom delay={400}>
            <h2>Contact Me</h2>
            </Fade>
            <Fade bottom delay={600}>
                <hr/>
            </Fade>

            <div className="contact-list">
              <List>
                <Fade bottom delay={800}>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+62) 85789757664
                  </ListItemContent>
                </ListItem>
                </Fade>
                <Fade bottom delay={1000}>
                <ListItem >
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <a href="https://api.whatsapp.com/send?phone=6285789757664" style={{color:'black', textDecoration:'none'}} target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-whatsapp" aria-hidden="true"/>
                     (+62) 85789757664
                     </a>
                  </ListItemContent>
                </ListItem>
                </Fade>
                <Fade bottom delay={1200}>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    fitrohgalih@gmail.com
                  </ListItemContent>
                </ListItem>
                </Fade>
                <Fade bottom delay={1400}>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-instagram" aria-hidden="true"/>
                   @fgprayogo
                  </ListItemContent>
                </ListItem>
                </Fade>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
