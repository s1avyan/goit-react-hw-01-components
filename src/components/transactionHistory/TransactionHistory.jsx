import TransactionHistoryHead from '../transactionHistoryHead/TransactionHistoryHead';
import TransactionHistoryBody from '../transactionHistoryBody/TransactionHistoryBody';
import transactions from '../DB/transactions';
const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <TransactionHistoryHead />
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TransactionHistoryBody
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
