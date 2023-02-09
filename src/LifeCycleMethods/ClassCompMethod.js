import React,{Component} from 'react';


class ClassCompMethod extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count:0
        };
    }
    static getDerivedStateFromProps(props,state){
        // console.log('props',props);
        // console.log('state',state);
        if(props.count%2==0){
            return {count:state.count+1};
        }
        console.log('get derived states');
        return null;
    }
    shouldComponentUpdate(props,state){
        console.log('should comp update');
        if(props.count==7){
            return false;
        }
        return true;
    }
    handleInc=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        console.log('render');
        return (
            <div>
                <h2>class comp methods</h2>
                <button onClick={this.handleInc}>Counter:{this.state.count}</button>
            </div>
        );
    }
    componentDidMount(){
        console.log('comp didmount');
    }
    componentDidUpdate(){
        console.log('comp did update');
    }
    componentWillUnmount(){
        console.log('comp unmout');
    }
}

export default ClassCompMethod;
