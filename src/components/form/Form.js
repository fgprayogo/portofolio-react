import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       comment: ''
    }
  }

  onChange =(e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, comment } = this.state;

    axios.post('https://comment-portofolio.herokuapp.com/api/', { email, comment})
      .then( (result)=> {
      }).catch( (err) => {
        console.log(err)
      })
      
      if(!email || !comment){
        alert('Lengkapi Dulu Dong Gaes!')
      }else{
        alert('Komentar Berhasil Ditambah! Silahkan Cek Tab Show Comment!')
      }
      
      
  }

    render() {
      const { email, comment } = this.state;
        return (
            <div style={{paddingTop:'0px'}}>
                <form className="awesome-form" style={{marginTop:'100px'}} onSubmit={this.onSubmit}>
                  <div className="input-group">
                    <input type="email"
                      name="email" 
                      value={email} 
                      onChange={this.onChange}
                     
                    />
                    <label>Your Email</label>
                  </div>
                  <div className="input-group">
                    <input type="text" 
                     name="comment" 
                     value={comment} 
                     onChange={this.onChange}
                  
                    />
                    <label>Your Message</label>
                  </div>
                  <input type="submit" style={{color:'#2C5364'}} ></input>
                </form>
            </div>
        )
    }
}

export default withRouter(Form);