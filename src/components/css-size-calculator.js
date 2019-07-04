import React from 'react'

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            breakpoints: 4,
            values: 10,
            classes: 10,    
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }
    resetCalculator(){
        this.setState({
            breakpoints: 4,
            values: 10,
            classes: 10,    
        })
    } 
    
    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>
                        <label htmlFor="breakpoints">Breakpoints:</label>
                        <input 
                            name="breakpoints"
                            type="number"
                            min="1"
                            max="10"
                            value={this.state.breakpoints} 
                            onChange={this.handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="values">Values:</label>
                        <input 
                            name="values"
                            type="number"
                            min="1"
                            max="20"
                            value={this.state.values} 
                            onChange={this.handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="classes">Classes:</label>
                        <input 
                            name="classes"
                            type="number"
                            min="1"
                            max="20"
                            value={this.state.classes} 
                            onChange={this.handleChange}
                        />
                    </li>
                </ol>
                <button onClick={()=>this.resetCalculator()}>Reset</button>
                <h4>Total CSS classes: {this.state.values*this.state.classes*this.state.breakpoints}</h4>

            </React.Fragment>
            )
    }
}
export default Calculator