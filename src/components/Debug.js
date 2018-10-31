import { Component } from 'react';

class Debug extends Component{
    constructor(props){

        super(props);
        this.state = {
            now : new Date()
        }
    }
    Debug = () => {
        return console.log( this.props.sender ? 'Component: ' +  this.props.sender : '' , {s: this.props.s, p  :this.props.p});
    }
    render(){
        this.Debug();
        return null
    }
}
export default Debug;