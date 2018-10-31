import React, { Component } from 'react';
import Drivers from './struct/Header.json';

class Header extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title : 'Hello World!',
            data : Drivers
        }
    }
    render(){
        
        const baseStyle = {
            backgroundColor :  this.props.color || 'black',
            color: "#ffffff",
            padding: "15px"
        };
        
        const { styles, headerHTML } = this.state.data;
        return(
            <div style={ this.props.style || (styles ? styles : baseStyle) }>
                <h1>{ this.props.title ? this.props.title : this.state.title }</h1>
                {<p dangerouslySetInnerHTML={{__html : headerHTML}}></p>}
            </div>
        )
    }
}
export default Header;