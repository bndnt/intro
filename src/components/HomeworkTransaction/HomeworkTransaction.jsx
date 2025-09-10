import css from "./HomeworkTransaction.module.css";
import TransactionData from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
export default function HomeworkTransaction() {
  return (
    <div>
      <h2>Домашне завдання 1.3 - Історія транзакцій</h2>
      <p>
        Дані для списку доступні у форматі массива об'єктів, де кожен об'єкт
        описує одну транзакцію з наступними властивостями:
      </p>
      <ul>
        <li>id — унікальний ідентифікатор транзакції</li>
        <li>type — тип транзакції</li>
        <li>amount - сума транзакції</li>
        <li>currency - тип валюти</li>
      </ul>
      <p>
        Необхідно створити компонент <code>{`<TransactionHistory>`}</code>, який
        приймає один проп items - масив об'єктів транзакцій. Компонент створює
        розмітку таблиці. Кожна транзакція - це рядок таблиці. У прикладі
        наведена розмітка двох транзакцій.
      </p>
      <pre>
        <code>
          {`export default function TransactionHistory({ items }) {
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
              `}
        </code>
      </pre>
      <p>
        Треба винести дані про транзакції у JSON-файл, щоб не захламлювати
        компонент App. Наприклад, створіть файл із назвою transactions.json у
        папці src, перемістіть туди масив транзакцій, відформатуйте дані у
        формат JSON, а потім імпортуйте його в компонент App, щоб передати ці
        дані як пропси.
      </p>
      <h2>Результат виконання завдання</h2>
      <TransactionHistory items={TransactionData} />
    </div>
  );
}
