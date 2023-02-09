import React, { Component } from 'react'

class Users extends Component {
    constructor(props){
        super(props);
        //this.userName= ["A","B","c",]
        this.userName=[
            {
                name:"AA",
                id:8
            },
            {
                name:"BB",
                id:6
            },
            {
                name:"CC",
                id:10
            },
        ]
        
    }
  render() {
    return (
      <div> 
        <button>Sort Ascending</button>
        <table>
            <tr>
                <th>Name</th>
                <th>Id</th>
            </tr>
            {this.userName.map((user,index)=>(
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

