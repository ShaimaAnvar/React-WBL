import React, { Component } from "react";
class ClassComp extends Component{
    constructor(){
        super();
        this.name="class";
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