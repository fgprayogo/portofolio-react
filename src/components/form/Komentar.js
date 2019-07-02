import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, CardMenu} from 'react-mdl';
import axios from 'axios'

export default class Komentar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             komen:[],
             loading:true
        }
    }
    componentDidMount(){
  
        axios.get('https://comment-portofolio.herokuapp.com/api/')
            .then( (res) => {
                this.setState({komen:res.data,loading:false})
                console.log(res)
            })

    }
    renderLoading() {
        return <h3 className="mt-5 text-center">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true" />
        </h3>
      }
    
    render() {
        const { loading } = this.state
        return (
            <div>
            {loading ? this.renderLoading() :         
                <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
                {this.state.komen.map( (komens,data) => 
                    <div key={data} style={{}}>
                        <Card shadow={5} style={{minWidth: '450', margin: '70px'}}>
                            <CardTitle style={{}} ><p>{komens.comment}</p></CardTitle>
                                <CardText style={{}}>
                                    {komens.email}
                                </CardText>
                            <CardActions border>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            </CardMenu>
                        </Card>
                    </div>
                 )}
                </div>}
            </div>
        )
    }
}
