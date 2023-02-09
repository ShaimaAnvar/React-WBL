import React, { Component } from 'react'

class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:[
                {
                    name:"CC",
                    id:8
                },
                {
                    name:"BB",
                    id:6
                },
                {
                    name:"AA",
                    id:10
                },
            ],  
        } 
    }
    handleSort=()=>{
        let sorted=this.state.userName.sort((user1,user2)=>user1.id-user2.id);
        console.log(sorted);
        this.setState(
            {userName:sorted}
        )
    }
  render() {
    return (
      <div> 
        <button onClick={this.handleSort}>Sort Ascending</button>
        <table>
            <tr>
                <th>Name</th>
                <th>Id</th>
            </tr>
            {this.state.userName.map((user,index)=>(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.id}</td>
                </tr>
            ))}
        </table>
      </div>
    )
  }
}
export default Users;

