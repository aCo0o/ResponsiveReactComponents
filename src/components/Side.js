import React, { Component } from 'react';

class Side extends Component{
    constructor(props){
        super(props);
        this.state = {
            side : []
        }
    }
    render(){
        return(
            <div className="aside">

              <h2>Responsive</h2>
              <p>Scalable and fit all screen sizes<br/>Responsive CSS</p>

              <h2>Flexible</h2>
              <p>Simple 2-way page editing<br/>(Code or JSON)</p>

              <h2>React</h2>
              <p>Easy React Boilerplate component's<br/>(Header, Body, Meny, Side and Footer)</p>
              
            </div>
        )
    }
}
export default Side;