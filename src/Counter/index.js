import React, {Component} from 'react';

import './counter.scss';
import Delta from './Delta';

class Counter extends Component {

    state={
        value : 0,
        first : 0,
        second : 0
    };

    render() {
        let {value, first, second} = this.state;
        return (
            <div className="counter-style">
                <div>{value}</div>
                <Delta delta={first} id={"first"} handleChange={this.handleChange}/>
                <Delta delta={second} id={"second"} handleChange={this.handleChange}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMultiple}>*</button>
                <button onClick={this.handleDivide}>/</button>
            </div>
        );
    }

    handlePlus=()=>this.setState({
        value : this.state.first + this.state.second
    });

    handleMinus=()=>this.setState({
        value : this.state.first - this.state.second
    });

    handleMultiple=()=>this.setState({
        value : this.state.first * this.state.second
    });

    handleDivide=()=>this.setState({
        value : this.state.first / this.state.second
    });

    handleChange = (event) => {
        if(event.target.id == "first")
            this.setState({first : parseInt(event.target.value)});
        if(event.target.id == "second")
            this.setState({second : parseInt(event.target.value)});
    };
}

export default Counter;