import React, { Component } from "react";
class ClassComp extends Component{
    constructor(){
        this.name="class";
        super();
    }
    render(){
        return(
            <div>
                <h2>This is a {this.name} component</h2>
            </div>
        )
    }
}

export default ClassComp