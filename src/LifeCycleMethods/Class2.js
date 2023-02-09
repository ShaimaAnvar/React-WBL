import React from 'react';
import ClassCompMethod from './ClassCompMethod';
//import PropTypes from 'prop-types';


class Class2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:5,
        flag:"true"};
    }
    incrementer=()=>{
        this.setState({count:this.state.count+1})
    }
    hadleUnmount=()=>{
        this.setState({flag:!this.state.flag})
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.incrementer}>increment count</button>
                {this.state.flag?<ClassCompMethod count={this.state.count}/>:null}
                <button onClick={this.hadleUnmount}>comp unmount</button>
            </div>
        );
    }
}


export default Class2;
