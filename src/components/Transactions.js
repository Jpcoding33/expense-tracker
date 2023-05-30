import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transactions = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li>
            <p>{transaction.text}</p>
            <p>{sign}${Math.abs(transaction.amount)}</p>
            <span className={transaction.amount > 0 ? "income-span" : "expense-span"}></span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transactions
