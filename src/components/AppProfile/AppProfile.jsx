import Profile from "../Profile/Profile";
import css from "./AppProfile.module.css";
export default function AppProfile() {
  const users = [
    {
      name: "Sasha",
      phone: "+380594783340",
      email: "sasha@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446518/avatar-portrait.svg", // мужчина с бородой :contentReference[oaicite:1]{index=1}
    },
    {
      name: "Anna",
      phone: "+380931234567",
      email: "anna@example.com",
      status: "offline",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446491/avatar.svg", // мужчина в очках :contentReference[oaicite:2]{index=2}
    },
    {
      name: "Maksym",
      phone: "+380671234568",
      email: "maksym@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446525/avatar.svg", // яркий мужчина, похож на первого :contentReference[oaicite:3]{index=3}
    },
    {
      name: "Olena",
      phone: "+380501112233",
      email: "olena@example.com",
      status: "offline",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446496/avatar.svg", // стилизованный портрет :contentReference[oaicite:4]{index=4}
    },
    {
      name: "Viktor",
      phone: "+380662223344",
      email: "viktor@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446508/avatar.svg", // ещё один портрет из той же коллекции :contentReference[oaicite:5]{index=5}
    },
    {
      name: "Iryna",
      phone: "+380931112233",
      email: "iryna@example.com",
      status: "online",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446502/avatar.svg", // допустим, ещё одна доступная иконка (гипотетически)
    },
    {
      name: "Andrii",
      phone: "+380671119988",
      email: "andrii@example.com",
      status: "offline",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446518/avatar-portrait.svg", // повторяем мужчину с бородой
    },
    {
      name: "Kateryna",
      phone: "+380503456789",
      email: "kateryna@example.com",
      status: "online",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446491/avatar.svg", // повторяем мужчину в очках
    },
    {
      name: "Roman",
      phone: "+380631234567",
      email: "roman@example.com",
      status: "offline",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446525/avatar.svg", // повторяем яркого мужчину
    },
    {
      name: "Natalia",
      phone: "+380991234567",
      email: "natalia@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446496/avatar.svg", // повторяем стилизованный портрет
    },
  ];

  return (
    <div>
      <h1>Модуль 1</h1>
      <h2>Створення проєкту</h2>
      <code>npm create vite@latest</code>
      <p>
        Додаємо опцію генерування Source Maps у файл налаштувань Vite, який
        розташований у кореневій папці проєкту. Відкрий файл
        <code>vite.config.js</code> та заміни його вміст на наступний код.
      </p>
      <pre>
        <code>
          {`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  }
});`}
        </code>
      </pre>
      <h2>Умовний рендеринг</h2>
      <p>Оператор &&</p>
      <code>умова ? вміст_якщо_умова_true : вміст_якщо_умова_false</code>
      <p>
        У JSX вираз обгортається у фігурні дужки, щоб відобразити його
        результат.
      </p>
      <code>{`<div>
	{умова ? вміст_якщо_умова_true : вміст_якщо_умова_false}
</div>
`}</code>
      <p>
        У прикладі нижче можна буде використати один з двох варіантів умовного
        рендерингу
      </p>
      <ol>
        <li>
          <code> {` Name:{name} {hasPhisicalAdress && "🏠"} `}</code>
        </li>
        <li>
          <code>{`  {hasPhisicalAdress ? "🏠" : ""} `}</code>
        </li>
      </ol>
      <h2>Заняття 1 - користувачі соціальної морежі</h2>
      <p>
        Для того щоб відрендерити колекцію елементів, використовується масив
        даних і метод <code>map()</code>. Callback-функція map() для кожного
        елемента колекції повертає розмітку.
      </p>
      <code>{`[1, 2, 3].map((item) => {
        return <p>{item}</p>;
      });`}</code>
      <p>
        Створимо компонент Profile та додамо до нього необхідну розмітку та
        передамо пропси
      </p>
      <pre>
        {" "}
        <code>{`export default function Profile({
        name,
        phone,
        email,
        status = "offline",
        hasPhisicalAdress,
        imgUrl,
      }) {
        return (
          <div className={css.userCard}>
            <h3>
              <img className={css.profileImg} src={imgUrl} alt={name} />
              {/* Name:{name} {hasPhisicalAdress && "🏠"} */}
              Name: {name}
              {hasPhisicalAdress ? "🏠" : ""}
            </h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>
              Status: {status}
              {status === "online" ? "🟢" : "🔴"}
            </p>
          </div>
        );
      }`}</code>
      </pre>
      <p>Створимо змінну та передамо у неї об`єкт з данними профілів</p>
      <pre>
        <code>{`const users = [
    {
      name: "Sasha",
      phone: "+380594783340",
      email: "sasha@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446518/avatar-portrait.svg", // мужчина с бородой :contentReference[oaicite:1]{index=1}
    },
    {
      name: "Anna",
      phone: "+380931234567",
      email: "anna@example.com",
      status: "offline",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446491/avatar.svg", // мужчина в очках :contentReference[oaicite:2]{index=2}
    },
    {
      name: "Maksym",
      phone: "+380671234568",
      email: "maksym@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446525/avatar.svg", // яркий мужчина, похож на первого :contentReference[oaicite:3]{index=3}
    },
    {
      name: "Olena",
      phone: "+380501112233",
      email: "olena@example.com",
      status: "offline",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446496/avatar.svg", // стилизованный портрет :contentReference[oaicite:4]{index=4}
    },
    {
      name: "Viktor",
      phone: "+380662223344",
      email: "viktor@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446508/avatar.svg", // ещё один портрет из той же коллекции :contentReference[oaicite:5]{index=5}
    },
    {
      name: "Iryna",
      phone: "+380931112233",
      email: "iryna@example.com",
      status: "online",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446502/avatar.svg", // допустим, ещё одна доступная иконка (гипотетически)
    },
    {
      name: "Andrii",
      phone: "+380671119988",
      email: "andrii@example.com",
      status: "offline",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446518/avatar-portrait.svg", // повторяем мужчину с бородой
    },
    {
      name: "Kateryna",
      phone: "+380503456789",
      email: "kateryna@example.com",
      status: "online",
      hasPhisicalAdress: false,
      avatar: "https://www.svgrepo.com/show/446491/avatar.svg", // повторяем мужчину в очках
    },
    {
      name: "Roman",
      phone: "+380631234567",
      email: "roman@example.com",
      status: "offline",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446525/avatar.svg", // повторяем яркого мужчину
    },
    {
      name: "Natalia",
      phone: "+380991234567",
      email: "natalia@example.com",
      status: "online",
      hasPhisicalAdress: true,
      avatar: "https://www.svgrepo.com/show/446496/avatar.svg", // повторяем стилизованный портрет
    },
  ];`}</code>
      </pre>
      <p>Виводимо наш компонент в App</p>
      <pre>
        <code>{` {users.map((user) => {
          return (
            <Profile
              key={user.email}
              name={user.name}
              phone={user.phone}
              email={user.email}
              status={user.status}
              hasPhisicalAdress={user.hasPhisicalAdress}
              imgUrl={user.avatar}
            />
          );
        })}`}</code>
      </pre>
      <h3>Результат коду</h3>
      <div className={css.usersFlex}>
        {users.map((user) => {
          return (
            <Profile
              key={user.email}
              name={user.name}
              phone={user.phone}
              email={user.email}
              status={user.status}
              hasPhisicalAdress={user.hasPhisicalAdress}
              imgUrl={user.avatar}
            />
          );
        })}
      </div>
    </div>
  );
}
