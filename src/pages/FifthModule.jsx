import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
const FifthModule = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <h1>Модуль 5</h1>
      <h2>Router</h2>
      <pre>
        <code className="language-jsx">{`npm install react-router-dom`}</code>
      </pre>
      <div className="topicBlock">
        <h3> Компонент BrowserRouter</h3>
        <p>
          Командний центр управління маршрутизацією, який приховує в собі всю
          логіку взаємодії із історією браузера. Створює маршуртизатор та об'єкт
          історії навігації, щоб синхронізувати інтерфейс із URL-адресою.
          Використовуючи React контекст передає інформацію про поточний стан
          історії навігації всім нащадкам. Все, що необхідно зробити, це
          обернути компонентом <code>{`<BrowserRouter>`}</code> всі програми.
        </p>
        <pre>
          <code className="language-jsx">{`index.js
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);`}</code>
        </pre>
      </div>
      <div className="topicBlock">
        <h3>Компоненти Route та Routes</h3>
        <p>
          Компонент <code>{`Route`}</code> дозволяє пов'язати певний URL з
          деяким компонентом. Наприклад, якщо ми хочемо відображати компонент
          <code>{`<About/>`}</code> коли користувач переходить шляхом
          <code>{`/about`}</code>, необхідно буде описати такий маршрут.
        </p>
        <pre>
          <code className="language-jsx">{`<Route path="/about" element={<About />} />`}</code>
        </pre>
        <p>
          Значенням пропсу <code>element</code> може бути будь-який валідний
          JSX, але на практиці використовують лише компоненти.
        </p>
        <p>
          Маршрутів може бути довільна кількість, як мінімум по одному на кожну
          сторінку програми. Припустимо ми створюємо додаток магазину одягу,
          тому опишемо маршрути трьох сторінок.
        </p>
        <pre>
          <code className="language-jsx">{`// src/components/App.jsx

import { Routes, Route } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
`}</code>
        </pre>
        <p>
          Групу маршрутів обов'язково має обертати компонент
          <code>{`<Routes>`}</code>, навіть якщо маршрут лише один. Тобто
          <code>{`<Route>`}</code> не може використовуватися без
          <code>{`<Routes>`}</code>. Цей компонент виконує логіку підбору
          найбільш відповідного <code>{`<Route>`}</code> для поточного значення
          URL в адресному рядку браузера.
        </p>
        <p>
          Ви вже знаєте, що конвенція структури файлів програми передбачає
          зберігання всіх компонентів у папці {``}
          <span className="inlineSpan">src/components</span>. Компонент сторінки
          це звичайнісінький React-компонент, який містить у собі розмітку цілої
          сторінки вашої програми. Для зручності та структурованості такі
          компоненти зберігаються окремо від усіх, у папці {``}
          <span className="inlineSpan">src/pages</span>.
        </p>
      </div>
      <div className="topicBlock">
        <h3>Сторінка помилки навігації</h3>
        <p>
          Що буде, якщо користувач перейде за посиланням /non-existing-route або
          будь-якому іншому, якого немає в нашому додатку? Він побачить порожню
          вкладку браузера, без будь-якого контенту, оскільки жоден з описаних
          нами <code>{`<Route>`}</code> не підійде. Для цього до кінця списку
          маршрутів додамо ще один <code>{`<Route>`}</code>, який збігатиметься
          з будь-яким URL, але він буде обраний тільки в тому випадку, якщо
          жоден інший маршрут не підійде.
        </p>
        <pre>
          <code className="language-jsx">{`import { Routes, Route } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};`}</code>
        </pre>
        <p>
          Символ * у пропсі path буквально вказує на те, що цей маршрут може
          збігатися з будь-яким значенням URL. Тому якщо жоден попередній{" "}
          <code>{`<Route>`}</code> не підійде, останній точно відобразить
          користувачеві сторінку з якимось повідомленням про те, що маршруту
          яким він перейшов, не існує.
        </p>
      </div>
      <div className="topicBlock">
        <h3>Компоненти Link та NavLink</h3>
        <p>
          Тепер розглянемо, як створювати посилання на різні сторінки нашої
          програми. Для створення навігації не можна використовувати звичайний
          тег <code>{`<a href="/about">`}</code>. При кліку, замість того щоб
          змінити URL на поточній сторінці, і дозволити маршрутизатору виконати
          навігацію на стороні клієнта, браузер перезавантажить сторінку.
        </p>
        <p>
          Для створення посилань використовуються компоненти{" "}
          <code>{`<Link>`}</code> та <code>{`<NavLink>`}</code>. Вони рендерять
          тег <code>{`<a>`}</code>, але стандартна поведінка посилання змінена
          так, що при натисканні просто оновлюється URL в адресному рядку
          браузера, без перезавантаження сторінки.
        </p>
        <pre>
          <code className="language-jsx">{`<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/products">Products</Link>
</nav>`}</code>
        </pre>
        <p>
          Компонент <code>{`<NavLink>`}</code> відрізняється тільки тим, що може
          мати додаткові стилі, якщо поточний URL збігається зі значенням пропcа
          to. За замовчуванням елементу активного посилання додається клас
          active. Це можна використовувати для її стилізації.
        </p>
        <pre>
          <code className="language-jsx">{`// src/components/App.jsx

import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from 'path/to/pages/NotFound';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
  		<Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};`}</code>
        </pre>
      </div>
      <div className="topicBlock">
        <h3>URL-параметри</h3>
        <p>
          Динамічні параметри схожі на параметри функції - у них завжди одна
          назва, але можуть бути різні значення. Вони дозволяють оголосити
          шаблон адреси, частини якого можуть мати довільне значення. Наприклад,
          немає сенсу визначати окремий маршрут для кожного посту у блозі, їх
          можуть бути тисячі. За структурою контенту такі сторінки будуть
          ідентичні, а відрізнятиметься лише назва, зображення, автор, текст
          тощо. Замість того, щоб визначати маршрут для кожної статті, ми можемо
          оголосити один маршрут з динамічним параметром по якому визначатимемо
          яку посаду необхідно відображати саме зараз. Для того, щоб вказати, що
          якась частина адреси це URL-параметр, використовується двокрапка (:)
          перед іменем параметра.
        </p>
        <pre>
          <code className="language-jsx">{`<Route path="/blog/:postId" element={<BlogPost />} />`}</code>
        </pre>
        <p>
          Кожного разу, коли користувач буде відвідувати адресу, що відповідає
          шаблону /blog/:postId, наприклад /blog/react-fundamentals або
          /blog/top-5-css-tricks, йому відображатиметься сторінка цього поста.
        </p>
        <p>
          <b>
            Ім'я URL-параметра може бути довільним, але воно має значення і має
            бути зрозумілим та описовим. Далі ми розглянемо, як отримувати
            значення URL-параметра. Спойлер - по його імені.
          </b>
        </p>
        <p>
          Додамо до нашої програми маршрут сторінки одного продукту з адресою
          /products/:productId. Це окрема сторінка, ніяк не прив'язана до
          /products - сторінці відображення всіх продуктів.
        </p>
        <pre>
          <code className="language-jsx">{`import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";
import ProductDetails from "path/to/pages/ProductDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};`}</code>
        </pre>
        <p>
          <b>
            Значення URL-параметра має бути унікальним всередині колекції, тому
            частіше всього використовують ідентифікатори об'єктів, які
            встановлює база даних (числа або рядки). Тому адреса може виглядати,
            наприклад, як /products/1, /proudcts/2 і так далі.
          </b>
        </p>
      </div>
      <div className="topicBlock">
        <h3>Хук useParams</h3>
        <p>
          Повертає об'єкт з усіма динамічними параметрами, які є в поточному
          URL. Ім'я параметра буде ім'ям властивості в об'єкті, а його поточне
          значення в адресі - значенням властивості. Наприклад, якщо оголошено
          наступний маршрут /books/:genreId/:authorName, та користувач
          знаходиться за адресою /books/adventure/herman-melville.
        </p>
        <pre>
          <code className="language-jsx">{`const { genreId, authorName } = useParams();
console.log(genreId, authorName);// adventure, herman-melville
`}</code>
        </pre>
        <p>
          Для того, щоб отримати значення динамічної частини URL, у нашому
          випадку ідентифікатор продукту, використовуємо хук useParams у
          компоненті сторінки продукту.
        </p>
        <pre>
          <code className="language-jsx">{`// src/pages/ProductDetails.jsx

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};`}</code>
        </pre>
        <p>
          <b>
            Маючи значення параметра можна, наприклад, зробити запит на бекенд
            та отримати повну інформацію про продукт за його ідентифікатором,
            після чого відрендерити розмітку сторінки.
          </b>
        </p>
        <a
          target="_blank"
          href="https://stackblitz.com/edit/vitejs-vite-aawttpcw?file=src%2Fcomponents%2FProductList.jsx"
        >
          Demo
        </a>
      </div>
      <div className="topicBlock">
        <h3>Вкладені маршрути</h3>
        <p>
          Вкладені маршрути дозволяють описувати логіку «підсторінок», тобто
          якийсь URL по якому крім батьківського компонента цілої сторінки буде
          відображатися ще якийсь дочірній, вкладений компонент.
        </p>
        <p>
          Наприклад, нам необхідно щоб на /about/mission, /about/team та
          /about/reviews крім контенту сторінки «Про нас» відображалася ще якась
          додаткова, більш специфічна інформація. Нехай це буде кілька
          різноманітних компонентів: стаття про місію нашої компанії, галерея з
          інформацією про співробітників та відгуки користувачів.
        </p>
        <pre>
          <code className="language-jsx">{`// ✅ Правильно
<Route path="/about" element={<About />}>
  <Route path="mission" element={<Mission />} />
  <Route path="team" element={<Team />} />
  <Route path="reviews" element={<Reviews />} />
</Route>`}</code>
        </pre>
        <p>Повна конфігурація маршрутів нашої програми виглядатиме так.</p>
        <pre>
          <code className="language-jsx">{`// src/components/App.jsx

import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";
import ProductDetails from "path/to/pages/ProductDetails";
import Mission from "path/to/components/Mission";
import Team from "path/to/components/Team";
import Reviews from "path/to/components/Reviews";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};`}</code>
        </pre>
        <p>
          Останнє, що обов'язково необхідно зробити, це вказати де саме в
          компоненті батьківського маршруту About ми хочемо рендерувати дочірні
          маршрути. Для цього у React Router є компонент Outlet.
        </p>{" "}
        <pre>
          <code className="language-jsx">{`import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
`}</code>
        </pre>
        <a
          target="_blank"
          href="https://stackblitz.com/edit/vitejs-vite-84t3qwvr?file=src%2Fpages%2FAbout.jsx"
        >
          Demo
        </a>
      </div>

      <div className="topicBlock">
        <h3>Деплой на Vercel</h3>
        <p>
          Для правильної роботи додатка з маршрутизацією після розгортання на
          Vercel, слід додати файл налаштувань vercel.json в кореневу папку
          проекту.
        </p>
        <p>Вміст файлу vercel.json має виглядати наступним чином.</p>
        <pre>
          <code className="language-jsx">{`{
  "rewrites":  [
    {"source": "/(.*)", "destination": "/"}
  ]
}`}</code>
        </pre>
      </div>

      <div className="topicBlock">
        <h3>Заняття 2 - Програмна навігація</h3>
        <h4>Імперативний підхід – useNavigate</h4>
        <p>
          Хук useNavigate() повертає функцію navigate(), яка виконує перехід на
          вказаний маршрут.
        </p>
        <h4>Автоматичний редірект через певний час</h4>
        <p>
          Наприклад, після 3 секунд очікування на сторінці 404 користувача
          поверне на головну.
        </p>
        <pre>
          <code className="language-jsx">{`import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <h1>Сторінку не знайдено. Повертаємо на головну...</h1>;
};
`}</code>
        </pre>
        <p>
          <code>replace: true</code> перезаписує поточну URL-сторінку в історії
          браузера, щоб користувач не міг повернутися назад.
        </p>
        <h4>Редірект після натискання на кнопку</h4>
        <pre>
          <code className="language-jsx">{`import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Вітаємо на головній сторінці</h1>
      <button onClick={() => navigate("/about")}>Перейти на сторінку "Про нас"</button>
    </div>
  );
};`}</code>
        </pre>
        <h4>Декларативний підхід – Navigate</h4>
        <p>
          Другий спосіб це компонент Navigate - обгортка над хуком useNavigate.
          Він виконує навігацію у момент рендеру. Шлях для навігації та
          необов'язкові параметри передаються окремими пропсами.
        </p>
        <h4>Редірект при відсутності доступу</h4>
        <p>
          Наприклад, якщо користувач заходить на /dashboard, але не має доступу,
          ми перенаправимо його на /login.
        </p>
        <pre>
          <code className="language-jsx">{`import { use } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Використовуємо контекст

export const Dashboard = () => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Ласкаво просимо в особистий кабінет</h1>;
};`}</code>
        </pre>
        <h5>useNavigate() чи {`<Navigate>`}?</h5>
        <ul>
          <li>
            <code>{`useNavigate()`}</code>– для редіректу після дії (натискання
            кнопки, відправки форми, запиту).
          </li>
          <li>
            <code>{`<Navigate>`}</code> – для редіректу під час рендеру (захист
            сторінок, автоматичний перехід).
          </li>
        </ul>
        <p>Те саме з useEffect() + useNavigate()</p>
        <pre>
          <code className="language-jsx">{`import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Dashboard = () => {
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <h1>Ласкаво просимо в особистий кабінет</h1>;
};
`}</code>
        </pre>
        <h4>Рядок запиту</h4>
        <pre>
          <code className="language-jsx">{`const [searchParams, setSearchParams] = useSearchParams();`}</code>
        </pre>
        <p>Створимо змінну</p>{" "}
        <pre>
          <code className="language-jsx">{`  const query = searchParams.get("query");
`}</code>
        </pre>
        <p>Змінемо функцію пошуку </p>
        <pre>
          <code className="language-jsx">{` const onSearch = (searchTerm) => {
    // setSearchValue(searchTerm);
    setSearchParams({ query: searchTerm });
  };`}</code>
        </pre>
        <p>
          Змінемо пошукове значення у юзефекті - при наявності пошукового слова
          - виводимо лише статті, що відповідають пошуковому запиту. В іншому ж
          випадку будемо виводити усі статті
        </p>
        <pre>
          <code className="language-jsx">{`  useEffect(() => {
              
              const fetchPostsBySearchValue = async () => {
                try {
                  setLoading(true);
                  if (query) {
                    const data = await RequestPostsBySearchValue(query);
                    setPosts(data.posts);
                  } else {
                    const data = await RequestAllPosts();
                    setPosts(data.posts);
                  }
                } catch (err) {
                  setError(err.message);
                } finally {
                  setLoading(false);
                }
              };
              fetchPostsBySearchValue();
            }, [query]);`}</code>
        </pre>
      </div>
      <div className="topicBlock">
        <h3>Об'єкт місцезнаходження</h3>
        <p>
          Кожен запис у стеку історії навігації описаний об'єктом розташування
          (location) зі стандартним набором властивостей, які зберігають повну
          інформацію про URL. Коли користувач натискає на посилання та
          переміщається за програмою, поточне місце розташування змінюється і
          додається новий запис історії.
        </p>
        <p>
          Наприклад, для такого URL об'єкт розташування буде виглядати наступним
          чином.
        </p>
        <pre>
          <code className="language-jsx">{`// https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500#agreement
{
  "pathname": "/products",
  "search": "?name=hoodie&color=orange&maxPrice=500",
  "hash": "#agreement",
  "state": null,
  "key": "random-browser-generated-id"
}
`}</code>
        </pre>
        <h3>Хук useLocation</h3>
        <p>
          Повертає об'єкт розташування, що представляє поточний URL, щоразу коли
          ми переходимо новим маршрутом або оновлюємо частину поточного URL.
          Одним із застосувань може бути завдання, де необхідно виконати якийсь
          ефект при зміні поточного розташування. Наприклад, надіслати дані на
          сервіс аналітики.
        </p>
        <pre>
          <code className="language-jsx">{`import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Analytics from "path/to/analytics-service";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.send(location);
  }, [location]);

  return <div>...</div>;
};`}</code>
        </pre>
        <h4>Приклад створення кнопки назад</h4>
        <ol>
          <li>
            <span>
              Створимо стейт у посиланні на пост на сторінці з усіма постами
            </span>
            <pre>
              <code className="language-jsx">{`const location = useLocation();
`}</code>
            </pre>
            <pre>
              <code className="language-jsx">{`<Link state={{ from: location }}
to={\`/posts/\${post.id}\`}
key={post.id}>
<h5>{post.title}</h5>
<p>{post.body}</p>
<p>{JSON.stringify(post.reactions)}</p>
<p>Tags: {post.tags.join(", ")}</p>
</Link>`}</code>
            </pre>
          </li>
          <li>
            На сторінці Product Details створимо також змінну location.
            Припереході зі сторінкі з усіма статтями ми потрапляємо на сторінку
            деталів статті, в неї в локації вже буде збережено стан from -
            звідки ми потрапили сюда.
          </li>
          <li>
            Наступним кроком збережемо стан, щоб не згубити у нереактивну (не
            буде провокувати ререндеринг додатку) змінну
            <pre>
              <code className="language-jsx">{`const backLinkRef = useRef(location.state?.from ?? "/posts");`}</code>
            </pre>
          </li>
          <li>
            На цій же сторінці дітейлс додаємо посилання назад
            <pre>
              <code className="language-jsx">{`<Link to={backLinkRef.current}>Go back</Link>`}</code>
            </pre>
          </li>
        </ol>
        <h3>Розділення коду</h3>
        <h4>Динамічні імпорти</h4>
        <ol>
          <li>В компоненті App замінемо імпорти на динамічні.</li>
          <p>Замість</p>
          <pre>
            <code className="language-jsx">{`import MNOne from "../pages/MNOne";`}</code>
          </pre>
          <p>Завантажемо сторінку у динамічному форматі</p>
          <pre>
            <code className="language-jsx">{`const MNOne = lazy(() => import("../pages/MNOne"));`}</code>
          </pre>
          <li>
            Наступним кроком треба змусити Routes почекати, перед тим, як
            показувати компоненти. Адже поки що вони завантажуються моментально.
            Щоб уникнути, що додаток крашиться при наявності помилки у хочаб
            одному компоненті. Якщо додаток буде доволі великий, то він може
            дати помилку, не завантажитися зовсім. Тому Routes необхідно огонути
            у Suspense та надати йому єдиний пропс fallback у який передаємо
            зазвичай компонент Loader
          </li>
        </ol>
        <pre>
          <code className="language-jsx">{`<Suspense fallback={<Loader />}>`}</code>
        </pre>
      </div>

      <div className="topicBlock"></div>

      <pre>
        <code className="language-jsx">{``}</code>
      </pre>
    </div>
  );
};

export default FifthModule;
