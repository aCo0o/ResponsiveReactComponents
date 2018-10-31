import React, { Component } from 'react';
import Drivers from './struct/Body.json';
//import Debug from './Debug';

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : Drivers
        }
    }

    render(){
        const { title, bodyHTML, style } = this.state.data;
        return(
            <div>
                <h1 style={ style }>{ this.props.title ? this.props.title : title }</h1>
                <div dangerouslySetInnerHTML={ {__html: bodyHTML} } />
                {
                    /*
                    <Debug sender={'Body'} p={ this.props } s={ this.state } /> 
                     */
                }
            </div>
        )
    }
}
export default Body;