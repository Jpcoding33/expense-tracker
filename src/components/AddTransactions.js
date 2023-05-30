import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {
    const { addTransaction } = useContext(GlobalContext);

    const[text, setText] = useState("");
    const[amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);

        setText("");
        setAmount(0);
    }

    return (
        <div className="add-transaction">
            <h4>Add new transaction</h4>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Text</label>
                    <input type="text" value={text} onChange={(e) =>  setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div>
                    <label>
                        Amount
                        <small>(negative - expense, positive - income)</small>
                    </label>
                    <input type="number" value={amount} onChange={(e) =>  setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div>
                    <button className="add-transaction-btn">
                        Add Transaction
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTransactions
