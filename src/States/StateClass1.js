
import React, { Component } from "react";
class StateClass1 extends Component{
    constructor(props){
        super(props);
        this.state={
            user:'shaima'
        }
        
    }
    revName=()=>{
        let reversedName=this.state.user.split("").reverse().join("");
        //console.log(this.user);
        this.setState({user:reversedName})
    }
    render(){
        return(
            <div>
                <h2>{this.state.user}</h2>
                <button onClick={this.revName}>reverse</button>
            </div>
        );
    }
}

export default StateClass1