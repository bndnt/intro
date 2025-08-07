import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  function isOdd(b) {
    return !(b % 2 === 0);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={clsx(css.td, { [css.grey]: isOdd(index) })}
            >
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
