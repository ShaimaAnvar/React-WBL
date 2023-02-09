import React,{Component} from 'react'


// class Class1 extends Component{
//     constructor(props){
//         super(props); 
//     }
//     render(){
//         return(
//             <div>
//                 <h2> {this.props.user}</h2> 
//             </div>
//         )
//     }
// }
// export default Class1
import Class2 from './Class2';
class Class1 extends Component{
    constructor(){
        super(); 
        this.name="abcd"
    }
    render(){
        return(
            <div>
                <Class2 user={this.name} />
            </div>
        )
    }
}
export default Class1