import React, { Component } from "react";
import { readAll, removeTransaction } from "../utility/transaction";

class History extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            transactions : []
        }
    }

    // react lifecycle method
    componentDidMount() {
        const data = readAll()
        //console.log("transactions =", data)
        this.setState({
            transactions: data
        })
    }


    render() {
        return (
           <div>
            <h3>History</h3>
            <ul className="list">
                {
                    this.state.transactions.map((item,index) => {
                        const css = item.amount < 0 ? 'minus' : 'plus'
                        const sign = item.amount < 0 ? '-' : ' +'
                        return (
                            <li key={index} className={css}>
                                <strong className="text-secondary"> {item.txt} </strong>
                                <div className="float-end">
                                    <span> {sign} {Math.abs(item.amount)} </span>
                                    <button onClick={() => removeTransaction(item.id)} 
                                    className="del-btn"> &times;</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
           </div>
        )
    }
}
export default History