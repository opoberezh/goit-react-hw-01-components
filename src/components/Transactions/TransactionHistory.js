import {Table, TableHead, TransactionRow, HeadTitles, TableBody,} from './Transactions.styled';

import {Transaction} from "./Tramsaction"
export default function TransactionHistory ({items}) {
    return (
        <Table>
  <TableHead>
    <TransactionRow>
      <HeadTitles>Amount</HeadTitles>
      <HeadTitles>Currency</HeadTitles>
      <HeadTitles>Type</HeadTitles>
      </TransactionRow>
  </TableHead>

  <TableBody>
    {items.map(({id, type, amount, currency}) =>{
      return ( 
      <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
      )
    }) 
   
}
  </TableBody>
</Table>
)}