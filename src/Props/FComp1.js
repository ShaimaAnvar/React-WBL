import React from 'react'
import Class1 from './Class1'
import FComp2 from './FComp2'
function FComp1() {
    let name= "shaima"
  return (
    <div>
        <h2>FComp1</h2>
        {/* <FComp2 user = {name}></FComp2>  */}
        <Class1 user={name}></Class1>
    </div>
  )
}
/*
 props are passed in the form of objects
 ie,
 user:shaima
*/
export default FComp1