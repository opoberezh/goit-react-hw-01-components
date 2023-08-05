import {TransactionRow, TransactionType,  TableCells} from './Transactions.styled';

export const Transaction = (({type, amount, currency}) => {
    return (
        <TransactionRow>
         <TransactionType>{type}</TransactionType>
      <TableCells>{amount}</TableCells>
      <TableCells>{currency}</TableCells>
        </TransactionRow>
    )
})