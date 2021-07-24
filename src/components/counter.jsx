import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return <div>
                    <span className = "badge m-2 badge-light">{this.formatName()}</span>
                    <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick = {() => this.props.onIncrement(this.props.counter)} className = "btn btn-success btn-sm">Increment</button>
                    <button onClick = {() => this.props.onDecrement(this.props.counter)} className="btn btn-danger btn-sm m-2">Decrement</button>
                    <br />
                </div>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count }  = this.props.counter;
        return count === 0 ? "Zero" : count;
    }

    formatName(){
        return this.props.counter.name;
    }

}
 
export default Counter;