import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
            <Navigation>
                <NavLink to="/profile" activeClassName='is-active'>Profile</NavLink>
                <Link to="/portofolio">Portofolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/messageme">Message Me</Link> 
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
            <Navigation>
              <Link to="/profile">Profile</Link>
              <Link to="/portofolio">Portofolio</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/messageme">Message Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
