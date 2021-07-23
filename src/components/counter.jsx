import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 })
    }

    render() { 
        console.log('props', this.props)
        return <React.Fragment>
                    <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm">Increment</button>
                    <br />
                </React.Fragment>;
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count }  = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;