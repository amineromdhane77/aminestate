import React, { Component } from 'react'

import Counterr from './component/Counterr'
import 'bootstrap/dist/css/bootstrap.min.css';






export default class app extends Component {
  constructor(){
    super()
     this.state={
     
     show:false
     
      

     }
  }
  
  toggle=()=>{
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>amine romdhane devlopper </h1>


  
        
       
        <button onClick={this.toggle}>show/hide</button>
        {this.state.show && <Counterr/>}
        

      </div>
    )
  }
}
