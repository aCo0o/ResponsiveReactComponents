import React, { Component } from 'react';

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            text : "Resize the browser window to see how the content respond to the resizing."
        }
    }
    render(){
        return(
            <p>{ this.props.text ? this.props.text : this.state.text }</p>
        )
    }
}
export default Footer;