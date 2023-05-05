import React, { Component } from "react";
import { toast } from "react-toastify"
import { addTransaction } from "../utility/transaction";

class AddIncome extends Component  {
    constructor(props) {  
        //to read the data,we have two possibilities.. => 1.state and onChange method & 2.Reference method
        super(props);
        this.state = {
            txt : "",
            amount : 0
        }
    }

    getText(e) {
        //console.log(e.target)  //it targets whole input tag
        this.setState({
            txt: e.target.value  //targets value attribute
        })
    }

    getAmount(e) {
        this.setState({
            amount: e.target.value  //targets value attribute
        })
    }

    submitHandler(e) {
        e.preventDefault();
        try {
            const data = {
                txt : this.state.txt,
                amount: this.state.amount
            };
            console.log("income = ", data);
            addTransaction(data);
            toast.success("Income added successfully");
            window.location.href = "/"
        } catch(err) {
            toast.error(err.message);
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)} autoComplete={"off"}>
                    <fieldset>
                        <legend className="plus">Add Income</legend>
                        <div className="form-control">
                            <label htmlFor="txt">Text</label>
                            <input type="text"name="txt" id="txt" value={this.state.txt} 
                            onChange= {(e) => this.getText(e)} className="form-input"
                             placeholder="Enter Text.." required />
                        </div>

                        <div className="form-control">
                            <label htmlFor="amount">+ Amount</label>
                            <input type="number"name="amount" id="amount" value={this.state.amount}
                            
                             onChange= {this.getAmount.bind(this)} className="form-input"
                              placeholder="Enter Amount.." required />
                        </div>

                        <div className="form-control">
                            <input type="submit" value="Add Income" className="btn btn-income"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default AddIncome;