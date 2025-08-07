// src/Product.jsx

// export default function Product() {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }
// Зверніть увагу, що ім'я файлу компонента Product.jsx збігається з назвою самого компонента Product. Це неофіційний стандарт, якого ми будемо дотримуватися.

// src/components/Product.jsx

// export default function Product() {
//   const price = 999;

//   return (
//     <>
//       <h2>Tacos</h2>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="640"
//       />
//       <p>Price: {price} credits</p>
//     </>
//   );
// }

// export default function Product() {
//   const price = 29;

//   return (
//     <>
//       <h2>Tacos</h2>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="440"
//       />
//       <p>Price: {price} credits</p>
//     </>
//   );
// }

// Значення атрибутів вказуються в подвійних лапках, якщо це звичайний рядок, та у фігурних дужках, якщо значення відрізняється від рядка або знаходиться в змінній.

// export default function Product() {
//   const price = 9;
//   const imgUrl =
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

//   return (
//     <>
//       <h2>Tacos</h2>
//       <img src={imgUrl} alt="Tacos With Lime" width="240" />
//       <p>Price: {price} credits</p>
//     </>
//   );
// }

// props
// props
// props

// export default function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="480"
//       />
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }
//  Пропси використовуються для передачі динамічних значень для компонента, наприклад, для використання в JSX-розмітці, використовуючи синтаксис {}.

//

// export default function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.imgUrl} alt={props.name} />
//       <p> Price:{props.price} credits</p>
//     </div>
//   );
// }

// Відразу будемо використовувати простий патерн під час роботи з props. Оскільки props - це об'єкт, ми можемо деструктуризувати його у підписі функції. Це робить код чистішим і читабельнішим.

// export default function Product({ name, imgUrl, price }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="300" />
//       <p>Price: {price}</p>
//     </div>
//   );
// }

// Значення пропсів за замовчуванням

// Що, якщо компонент очікує яке-небудь значення, а його не передали? Під час звернення до властивості об'єкта props отримаємо undefined. Для того щоб вказати значення властивостей за замовчуванням, використовується синтаксис значень за замовчуванням під час деструктуризації пропсів.

// Значення за замовчуванням не потрібно задавати всім пропсам; абсолютна більшість це обов'язкові значення для правильної роботи компонента. Проте, наприклад, значення зображення за замовчуванням може бути корисним.

// export default function Product({
//   name,
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   price,
// }) {
//   return (
//     <div>
//       <h2> {name}</h2>
//       <img src={imgUrl} alt={name} />
//       <p> Price:{price}</p>
//     </div>
//   );
// }

// ВИСНОВОК - Ми створили компонент, який налаштовується і який можна використовувати для відображення товарів. Ми передаємо йому дані як пропси, а відповідь - отримуємо дерево React-елементів із підставленими значеннями.
// Пропси використовуються для передачі даних від батька до дитини.
// Пропси передаються лише вниз по дереву від батьківського компонента.
// Пропси доступні лише для читання, їх не можна змінити
