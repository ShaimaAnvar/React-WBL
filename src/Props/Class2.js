import React,{Component} from 'react'
class Class2 extends Component{
    constructor(props){
        super(props); 
        console.log(props);
    }
    render(){
        return(
            <div>
                <h2> {this.props.user}</h2> 
            </div>
        )
    }
}
export default Class2