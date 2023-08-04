import {Transaction} from "./Tramsaction"
export default function TransactionHistory ({items}) {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
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
  </tbody>
</table>
)}