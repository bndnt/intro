import clsx from "clsx";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css.transactionTable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr
                className={clsx(css.transactionTr, {
                  [css.Odd]: items.indexOf(item) % 2 !== 0,
                })}
                key={item.id}
              >
                <td>
                  {item.type.charAt(0).toUpperCase() +
                    item.type.slice(1).toLowerCase()}
                </td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
