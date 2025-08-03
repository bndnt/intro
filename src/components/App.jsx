import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Product from "./Product";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Ты дрочил столько раз</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           вот столько {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

// КОМПОНЕНТИ
// КОМПОНЕНТИ
// КОМПОНЕНТИ
// КОМПОНЕНТИ
// КОМПОНЕНТИ

// ex1
// function Product() {
//   return (
//     <div>
//             <h2>Cookies</h2>
//       <p>Price: 999 credits</p>   {" "}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//     <Product />
//      <Product />
//     </div>
//   );
// }

// // Ім'я компонента обов'язково повинно починатися з великої літери. Назви компонентів з маленької літери зарезервовані для HTML-елементів. Якщо ви спробуєте назвати компонент product, а не Product, під час рендеру React проігнорує його та відрендерить тег <product></product>.

// ex2

// export default function App() {
//   return (
//     <div>
//       <h1>Best sellings</h1>
//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }
// У модулях можна використовувати експорт за замовчуванням (export default) або іменований експорт (export const). Так як компонент це головна сутність модуля, то давайте домовимось використовувати для нього експорт за замовчуванням (export default).

// На практиці всі компоненти, а в майбутньому і файли стилів для них, будемо зберігати у папці components, яку створимо всередині папки src. Це буде наш перший крок до структуризації файлів та папок React-проєкту.

// JSX - опис UI
// JSX - опис UI
// JSX - опис UI
// JSX - опис UI
// JSX - опис UI
// JSX - опис UI
// JSX - опис UI
// JSX - опис UI

// Насправді замість "порожнього" тега <></>, React вставляє вбудований компонент Fragment. Цей вбудований компонент при рендері розкривається, підставляючи свій вміст.

// У межах JSX можна використовувати будь-який валідний вираз, заключаючи його у фігурні дужки. Все інше буде розглядатися як текст. Винесемо значення ціни в змінну price і використаємо її для того, щоб підставити значення змінної в JSX.

// props
// props
// props

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>
//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </div>
//   );
// }
//  Пропси використовуються для передачі динамічних значень для компонента, наприклад, для використання в JSX-розмітці, використовуючи синтаксис {}.

// ex2

export default function App() {
  return (
    <div>
      <h1>Best </h1>
      <Product name="Tacos De Chef" price={20} />
      <Product
        name="Tacos With Chicken"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={21}
      />
      <Product
        name="Tacos With Mushrooms"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_p1wJErdpiCNk5NeVNfq7oyl5iGULb3ukw&s"
        price={26}
      />
    </div>
  );
}
// ВИСНОВОК - Ми створили компонент, який налаштовується і який можна використовувати для відображення товарів. Ми передаємо йому дані як пропси, а відповідь - отримуємо дерево React-елементів із підставленими значеннями.
// Пропси використовуються для передачі даних від батька до дитини.
// Пропси передаються лише вниз по дереву від батьківського компонента.
// Пропси доступні лише для читання, їх не можна змінити
