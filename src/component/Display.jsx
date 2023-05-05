import React, {Component} from "react";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return(
      <div className="inc-exp-container">
        <div>
          <h4 className="plus">Income</h4>
          <p className="money plus">+ &#8377; { this.props.income }</p>
        </div>

        <div>
          <h4 className="minus">Expenses</h4>
          <p className="money minus">- &#8377; { this.props.expense }</p>
        </div>
      </div>
    )
  }
}

export default Display