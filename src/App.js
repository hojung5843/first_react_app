import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/counters';
class App extends Component {
    state = { 
        counters: [ 
            {id: 1, value: 0},
            {id: 2, value: 2},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
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
    handleDelete = (counterId) =>{
        console.log(counterId)
        const counters =  this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar></NavBar>
                <main className="container">
                    <Counters 
                        counters = {this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}>
                    </Counters>
                </main>
                
            </React.Fragment>
         );
    }
}
 
export default App;