import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      breakpoints: 5,
      values: 10,
      classes: 10
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    });
  }
  resetCalculator() {
    this.setState({
      breakpoints: 5,
      values: 10,
      classes: 10
    });
  }

  render() {
    return (
      <div className={`calculator p-2 md--p-4 ${this.props.className}`}>
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
        
        <h4 className="m-t-2 md--m-t-4 m-b-2 md--m-b-4">
          Total CSS classes:{" "}
          <strong>
            {this.state.values * this.state.classes * this.state.breakpoints}
          </strong>
        </h4>
        <button className="m-b-0" onClick={() => this.resetCalculator()}>Reset</button>
      </div>
    );
  }
}
export default Calculator;
