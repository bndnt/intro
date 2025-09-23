import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
import AppContext from "../components/FourthModule/AppContext";
import AppWithHTTPS from "../components/FourthModule/AppWithHTTPS";
import css from "../components/FourthModule/FourthModule.module.css";
import FMModal from "../components/FourthModule/FMModal/FMModal";
import { useEffect } from "react";

const FourthModule = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <h1>Модуль 4</h1>
      <h2>HTTP-запити</h2>
      <p>
        У React немає вбудованого модуля для роботи з HTTP-запитами, тому ми
        можемо використовувати звичайні інструменти, наприклад бібліотеку Axios.
      </p>
      <pre>
        <code className="language-jsx">{`npm install axios`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`const App = () => {
  
  useEffect(() => {
	// 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      // Тут будемо виконувати HTTP-запит
    }

	// 2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
`}</code>
      </pre>
      <p>Додамо код HTTP-запиту всередину асинхронної функції.</p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
	  console.log(response);
    }

    fetchArticles();
  }, []);
`}</code>
      </pre>
      <h3>Обробка даних запиту</h3>
      <p>
        Щоб відобразити результат HTTP-запиту, його необхідно зберегти в стані
        компонента, іншого способу немає. Оголосимо стан <code>articles</code> і
        збережемо в ньому результат HTTP-запиту. Оскільки з бекенда буде
        приходити масив даних, початковим значенням стану буде порожній масив.
      </p>
      <pre>
        <code className="language-jsx">{`import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
	// 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
			// 2. Записуємо дані в стан
      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
`}</code>
      </pre>
      <h3>Відображення даних</h3>
      <p>
        При зміні стану компонент оновиться, тому можна використовувати стан для
        відображення JSX-розмітки. Використовуємо відображення за умовою і
        додаємо розмітку списку посилань на статті у випадку, якщо у масиві є
        хоча б один елемент.
      </p>
      <pre>
        <code className="language-jsx">{`const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setArticles(response.data.hits);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>);};
`}</code>
      </pre>
      <h3>Індикатор завантаження</h3>
      <p>
        Індикатор завантаження є реактивним значенням, тому воно зберігається в
        стані компонента. У нього всього два значення:
      </p>
      <ul>
        <li>
          <code>false</code> - запит ще не розпочався або вже завершився.
        </li>
        <li>
          <code>true</code> - запит виконується.
        </li>
      </ul>
      <p>
        Додамо стан loading для зберігання індикатора завантаження статей і
        використовуватимемо його в JSX для умовного відображення абзацу з
        текстом.
      </p>
      <pre>
        <code className="language-jsx">{`const [loading, setLoading] = useState(false);`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`{loading && <p>Loading data, please wait...</p>}`}</code>
      </pre>
      <p>
        Далі потрібно перед HTTP-запитом встановити значення стану loading в
        true, а після запиту повернутися в false. Для цього у асинхронній
        функції використовуємо try...catch.
      </p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
    async function fetchArticles() {
      try {
		// 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
        // Тут будемо обробляти помилку
      } finally {
		// 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);`}</code>
      </pre>
      <p>
        Індикатор завантаження може бути будь-чим: від простого тексту до
        векторної іконки або прев'ю цілого компонента. Ось кілька бібліотек, які
        надають готові компоненти для індикатора завантаження:
      </p>
      <ul>
        <li>React Spinners</li>
        <li>React Loader</li>
        <li>React Content Loader</li>
      </ul>
      <h3>Обробка помилок</h3>
      <p>
        HTTP-запит не завжди виконується без помилок, тому користувачеві
        обов'язково потрібно дати зрозуміти, якщо щось пішло не так. По-перше,
        додамо ще один стан <code>error</code> для зберігання помилки.
      </p>
      <pre>
        <code className="language-jsx">{`const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
	/* Решта коду */
};`}</code>
      </pre>
      <p>
        У конструкції try...catch для обробки помилок використовується блок
        catch. Якщо він виконається, це означає, що проміс (HTTP-запит) був
        виконаний з помилкою.
      </p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
				// Встановлюємо стан error в true
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);`}</code>
      </pre>
      <p>
        Тепер у JSX можна використовувати стан error, щоб відобразити
        користувачеві повідомлення про помилку.
      </p>
      <pre>
        <code className="language-jsx">{`const App = () => {
  /* Решта коду */
	return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};`}</code>
      </pre>
      <h3>Поділ відповідальності</h3>
      <p>
        Щоб розтягнути файли компонентів і спростити майбутній рефакторинг,
        створимо додатковий файл articles-api.js всередині папки src. У цьому
        файлі будемо зберігати функції для HTTP-запитів до бекенду із статтями.
      </p>
      <pre>
        <code className="language-jsx">{`// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async topic => {
  const response = await axios.get(\`/search?query=\${topic}\`);
  return response.data.hits;
};
`}</code>
      </pre>
      <p>
        Імпортуємо функцію fetchArticlesWithTopic із файлу api.js в компонент і
        використовуємо її в ефекті.
      </p>
      <pre>
        <code className="language-jsx">{`// 1. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "../articles-api.js";
`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
		// 2. Використовуємо HTTP-функцію
		const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);`}</code>
      </pre>
      <h3>Пошук через форму</h3>
      <p>Створимо компонент форми пошуку:</p>
      <pre>
        <code className="language-jsx">{`// src/components/SearchForm.jsx

export const SearchForm = ({ onSearch }) => {
  
	const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
	const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};
`}</code>
      </pre>
      <ul>
        <li>
          Це неконтрольована форма з одним текстовим полем, значення якого
          потрібно лише при поданні форми.
        </li>
        <li>
          Форма очікує один пропс onSearch - колбек-функцію, якій передасть
          значення поля при сабміті форми.
        </li>
      </ul>
      <p>
        Якщо <b>користувач нічого не ввів</b> у текстове поле і намагається
        відправити форму, потрібно повідомити його про це, оскільки виконувати
        HTTP-запит без слова для пошуку не потрібно. Для цього в компоненті
        форми, в момент її відправлення, перевірте вміст текстового поля, і
        тільки в тому випадку, якщо введено щось, викличте пропс{" "}
        <code>onSearch</code>.
      </p>
      <pre>
        <code className="language-jsx">{` const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(topic);
    form.reset();
  };`}</code>
      </pre>
      <p>
        Оскільки тепер користувач сам вводить рядок для пошуку статей, нам не
        потрібний ефект. Таким чином, будемо писати код всередині функції
        handleSearch, яка виконується при сабміті форми. Робимо її асинхронною і
        додаємо всередину код, пов'язаний з HTTP-запитом.
      </p>
      <pre>
        <code className="language-jsx">{` const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };`}</code>
      </pre>
      <h3>Контекст</h3>
      <p>Найчастіше його використовують для зміни тем та мов у додатках</p>
      <p>Створимо компонент AppContext</p>
      <pre>
        <code className="language-jsx">{`const AppContext = () => {
  return <div>{true ? <Loader /> : <UserMenu />}</div>;
};`}</code>
      </pre>
      <p>
        Напишемо контекст. Для цього створимо окремій папці context компонен
        UserContext
      </p>
      <pre>
        <code className="language-jsx">{`import { useEffect } from "react";
        import { createContext, useState } from "react";
        // створюємо ліфт
        
        export const UserContext = createContext();
        // створюємо провайдер
        export const UserContextProvider = ({ children }) => {
          const [userName, setUserName] = useState(null);
          const [isLoading, setIsLoading] = useState(false);
          useEffect(() => {
            setIsLoading(true);
            setTimeout(() => {
              setUserName("Mango");
              setIsLoading(false);
            }, 3000);
          }, []);
          const onlogOut = () => {
            setUserName(null);
          };
          return (
            <UserContext.Provider value={{ isLoading, userName, onlogOut }}>
              {children}
            </UserContext.Provider>
          );
        };
        `}</code>
      </pre>
      <p>В main.jsx огорнемо апп в провайдер</p>
      <pre>
        <code className="language-jsx">{`  <UserContextProvider>
    <AppContext />
  </UserContextProvider>`}</code>
      </pre>
      <p>Опишемо логіку та передамо пропси в UserMenu</p>
      <pre>
        <code className="language-jsx">{`import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Loader from "../../Loader/Loader";

const UserMenu = () => {
  const { isLoading, userName, onlogOut } = useContext(UserContext);
  if (isLoading) return <Loader />;

  return (
    <div>
      {userName === null ? (
        <div>
          <button>Sign In</button>
        </div>
      ) : (
        <div>
          <p>Hello, {userName}</p>
          <button onClick={onlogOut} type="button">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
`}</code>
      </pre>
      <h4>Приклад з модальним вікном</h4>
      <FMModal />
      <h4>Приклад роботи з мережевими запитами</h4>
      <p>У цьому прикладі ми будемо використовувати DummyJSON</p>
      <pre>
        <code className="language-jsx">{`npm install axios`}</code>
      </pre>
      <p>
        <b>Усі мережеві запити необхідно надсилати в App</b>
      </p>
      <pre>
        <code className="language-jsx">{` axios
    .get("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(console.log);`}</code>
      </pre>
      <p>Для виведення результату мережевих запитів використовуємо юзефект</p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {}, []);
  axios
    .get("https://dummyjson.com/posts")
    .then(({ data }) => console.log(data));`}</code>
      </pre>
      <p>
        Наступним кроком необхідно створити стан та записати до нього результат
        мережевого запиту
      </p>
      <pre>
        <code className="language-jsx">{`const [posts, setPosts] = useState(null); `}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
            axios.get("https://dummyjson.com/posts").then(({ data }) => {
              setPosts(data.posts);
            });
          }, []);`}</code>
      </pre>
      <p>Залишилося вивести розмітку</p>
      <pre>
        <code className="language-jsx">{`{posts.map((post) => {
        return (
          <article key={post.id}>
            <h5>{post.title}</h5>
          </article>
        );
      })}`}</code>
      </pre>
      <p>Console:</p>
      <pre>
        <code className="language-jsx">{`Uncaught TypeError: can't access property "map", posts is null
    AppWithHTTPS AppWithHTTPS.jsx:33
    React 13
    performReactRefresh @react-refresh:208
    performReactRefresh`}</code>
      </pre>
      <p>
        Саме тому необхідно виконувати перевірку перед виводом масиву, адже його
        початковий стан - null
      </p>
      <pre>
        <code className="language-jsx">{`const [posts, setPosts] = useState([]);`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`{Array.isArray(posts) && posts.length === 0 && <p>За вашим запитом нічого не знайдено</p>}`}</code>
      </pre>
      <p>
        Наведений метод виклику функції є досить застарілим, тому оновимо вигляд
        функції
      </p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("https://dummyjson.com/posts");
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);`}</code>
      </pre>
      <p>Замінемо then...catch yf async...await try...catch</p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/posts");
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);`}</code>
      </pre>
      <h3>Пошук серед постів</h3>

      <p>Створимо форму</p>
      <pre>
        <code className="language-jsx">{`const INITIAL_VALUES = {
          searchTerm: "",
        };
        const FormSchema = Yup.object().shape({
          searchTerm: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long")
            .required("required"),
        });
        const SearchPost = ({ onSearch }) => {
          const handleSubmit = (values, actions) => {
            onSearch(values.searchTerm);
            actions.resetForm();
          };
        
          return (
            <div>
              <Formik
                initialValues={INITIAL_VALUES}
                onSubmit={handleSubmit}
                validationSchema={FormSchema}
              >
                <Form>
                  <label>
                    <Field name="searchTerm" type="text" placeholder="Search " />
                    <ErrorMessage name="searchTerm" component="span" />
                  </label>
        
                  <button type="submit">Search</button>
                </Form>
              </Formik>
            </div>
          );
        };
        
        export default SearchPost;
        `}</code>
      </pre>
      <p>Напишемо функцію в Апп</p>
      <pre>
        <code className="language-jsx">{` const onSearch = (searchTerm) => {
    console.log(searchTerm);
  };`}</code>
      </pre>
      <p>Створемо стан</p>
      <pre>
        <code className="language-jsx">{`const [searchValue, setSearchValue] = useState(null);
        `}</code>
      </pre>
      <p>Додаємо другий запит </p>
      <pre>
        <code className="language-jsx">{`export const RequestPostsBySearchValue = async (searchValue) => {
  const { data } = await axios.get(
    \`https://dummyjson.com/posts/search?q=\${searchValue}\`);
  return data;
};`}</code>
      </pre>
      <p>Відслідкуємо змінну</p>
      <pre>
        <code className="language-jsx">{` useEffect(() => {
            if (searchValue === null) return;
            const fetchPostsBySearchValue = async () => {
              try {
                setLoading(true);
                const data = await RequestPostsBySearchValue(searchValue);
                setPosts(data.posts);
              } catch (err) {
                setError(err.message);
              } finally {
                setLoading(false);
              }
            };
            fetchPostsBySearchValue();
          }, [searchValue]);`}</code>
      </pre>
      <h3>Результат виконання коду</h3>
      <AppWithHTTPS />
    </div>
  );
};

export default FourthModule;
