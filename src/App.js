import React, { Component } from "react"

import { ToastContainer } from "react-toastify"

import Display  from "./component/Display"
import History from "./component/History"
import AddExpense from "./component/AddExpense"
import AddIncome from "./component/AddIncome"

import "./App.css"

import { readAll } from "./utility/transaction"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab : "income",
      transactions: [],
      income: 0,
      expense: 0,
      balance: 0
    }
  }

  componentDidMount() {
    let data = readAll();

    this.setState({
      transactions: data
    })
    this.updateValues();
  }


  toggle(val) {
    this.setState({
      activeTab : val
    })
  }
  // this.setState({
   // state: value
  //})

  updateValues() {
    const amount = readAll().map(item => item.amount)
    //console.log('amount = ',amount)

    const total = amount.reduce((acc,item) => (acc += Number(item)),0).toFixed(2);

    const inc = amount.filter(item => item > 0).reduce((acc,item) => (acc += Number(item)),0).toFixed(2);
    const exp = (amount.filter(item => item < 0).reduce((acc,item) => (acc += Number(item)),0) * -1).toFixed(2);

    this.setState({
      balance: total,
      income: inc,
      expense: exp
    })
  }

  render() {
    const { activeTab } = this.state;  //here,we destructure the this.state and we can declare the state-name as activeTab
    return (
      <div className="container">
        <h1>Expense Manager</h1>
        <h3>Your Balance</h3>
        <h1>  &#8377; { this.state.balance } </h1>
        <ToastContainer autoClose={4000} position={'bottom-right'}/>
        <Display income={ this.state.income} expense={this.state.expense}/>
        <History/>
         <div className="transaction">
            <div className="tabs">
                <ul className="nav">
                  <li onClick={ this.toggle.bind(this,"income")} className= { activeTab === "income"? "active":"" }>Income</li>
                  <li onClick={ this.toggle.bind(this,"expense")} className= { activeTab === "expense"? "active":"" }>Expense</li>
                </ul>
            
                <div className="outlet">
                  {
                    activeTab === "income"? <AddIncome/> : <AddExpense/>
                  }
                </div>
            </div>
          </div>

      </div>
    )
  }
}
export default App;
