import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transactions from './Transactions';

const TransactionLists = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transaction-list">
        <h4>History</h4>
        {
          transactions.length > 0 ? (
            <ul>
            {
              transactions.map((transaction) => (<Transactions key={transaction.id} transaction={transaction}/>))
            }
        </ul>
          ) :
          (
            <div className="empty-history">
              <small>No history yet</small>
              </div>
          )
        }
        
    </div>
  )
}

export default TransactionLists
