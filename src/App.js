import React, { Component } from 'react';
import Total from './components/total';
import Counters from './components/counters';
class App extends Component {
    state = { 
        counters: [ 
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }
    constructor() {
        super();
        console.log('App - Constructor');
    }
    
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters });
    }

    handleDecrement = (counter) =>{
        const counters =  this.state.counters.filter(c => c.id !== counter.id);
        const index = this.state.counters.indexOf(counter);
        console.log(index);
        if(this.state.counters[index].value === 0){
            return;
        } else {
            this.state.counters[index].value--; 
        }
        this.setState( this.state.counters )
    }

    handleTotal = () => {
        let total = 0;
        for(var i = 0; i < this.state.counters.length; i++){
            total += this.state.counters[i].value;
        }
        return total;
    }

    render() { 
        return ( 
            <React.Fragment>
                <Total totalCounters = { this.handleTotal() }></Total>
                <main className="container">
                    <Counters 
                        counters = {this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}>
                    </Counters>
                </main>
                
            </React.Fragment>
         );
    }
}
 
export default App;