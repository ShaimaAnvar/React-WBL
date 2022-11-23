import React,{Component} from 'react'
class Class2 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2> data passed by {this.props.user} from class1 to class2 </h2> 
            </div>
        )
    }
}
export default Class2