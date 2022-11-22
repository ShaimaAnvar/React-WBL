import React,{Component} from 'react'
class Classvvv extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2> data passed by {this.props.user}from func comp to class comp </h2> 
            </div>
        )
    }
}
export default Classvvv