import React,{Component} from 'react'
import Class2 from './Class2';

class Class1 extends Component{
    constructor(props){
        super(props);
        this.name='Anvar'
    }
    render(){
        return(
            <div>
                <h2> data passed by {this.props.user}from func comp to class comp </h2> 
                <Class2 user={this.name}></Class2>
            </div>
        )
    }
}
export default Class1