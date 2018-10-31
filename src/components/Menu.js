import React, { Component } from 'react';
//import Debug from './Debug';
import logo from '../logo.svg';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    
    render(){    
        return(
            <div>
                { <img alt={'logo'} src={this.props.logo ? this.props.logo : logo} /> }
                <ul>
                    {
                        this.props.menu.map((page,i)=>{
                            return (
                                <li onClick={() => { document.location.href = '/'+ page  }} key={'key--'+ i } className={'key--'+i} > { page }.html </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Menu;