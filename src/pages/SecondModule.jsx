import { useEffect, useState } from "react";
import Bar from "../components/Bar/Bar";
import SecondModuleModal from "../components/SecondModuleModal/SecondModuleModal";
import SipHappensCafe from "../components/HWS/SipHappensCafe/SipHappensCafe";
import screen1 from "../assets/img/screen1.jpg";
import screen2 from "../assets/img/screen2.png";
import css from "../components/SecondModule/SecondModule.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
export default function SecondModule() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const [counter, setCounter] = useState(0);
  const [isLoremOpen, setIsLoremOpen] = useState(false);
  const [bar, setBar] = useState({
    red: 3,
    white: 4,
    rose: 5,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const handleToggleList = () => {
    // if (isLoremOpen === false) {
    //   setIsLoremOpen(true);
    // } else {
    //   setIsLoremOpen(false);
    // }
    setIsLoremOpen((actualState) => !actualState);
    // setIsLoremOpen(!isLoremOpen);
  };

  const handleBarAdd = (wineName) => {
    setBar({ ...bar, [wineName]: bar[wineName] + 1 });
  };
  const total = bar.red + bar.white + bar.rose;

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>Модуль 2</h1>
      <h2>2.1 - Події. Стан компонента</h2>
      <h3>Реактивність</h3>
      <p>
        Давайте розглянемо приклад використання звичайної змінної для
        відображення кількості кліків по кнопці. Кожне натискання на кнопку
        повинно змінити значення змінної і відобразити нове значення в
        інтерфейсі. Проте це не працюватиме, ви можете спробувати!
      </p>
      <pre>
        <code className="language-jsx">{`import { useState } from 'react';

const App = () => {
	const [ clicks, setClicks ] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
		setClicks(clicks + 1);
  };

	return <button onClick={handleClick}>Current: {clicks}</button>
};
`}</code>
      </pre>
      <h3>Результат виконання завдання</h3>
      <button type="button" onClick={handleCounter}>
        Countn:{counter}
      </button>
      <h3>Приклад приховання списку друзів</h3>
      <p>Дану задачу ми вирішуємо двома способами:</p>
      <pre>
        <code className="language-jsx">{`setIsLoremOpen((actualState) => !actualState);
`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`setIsLoremOpen(!isLoremOpen);`}</code>
      </pre>
      <h3>Результат виконання завдання</h3>
      {isLoremOpen && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          tempora explicabo at, cum praesentium suscipit, saepe deleniti iste
          vitae perspiciatis assumenda. Minima magni excepturi eius quos,
          dolorem suscipit at! In.
        </p>
      )}
      <button type="button" onClick={handleToggleList}>
        {isLoremOpen ? `Close` : `Open`}
      </button>
      <h2>Оновлення об'єктів</h2>
      <h3>Створимо облік алкоголю на барі</h3>
      <p>
        Важливим э етап зміни лише одного поля. Проте є одна особливість: якщо
        ви спробуєте оновити стан таким чином, ви втратите властивість
      </p>
      <pre>
        <code className="language-jsx">{`const updateX = () => {
	setValues({
		x: values.x + 1
	});
};
❌ Tак не можна робити!
`}</code>
      </pre>
      <code>
        <b>
          Іншими словами, слід розглядати будь-який об'єкт в стані лише для
          читання. Змінювати його не можна!
        </b>
      </code>
      <p>
        Отже, коли потрібно оновити об'єкт, слід зробити копію існуючого.Перебір
        стану та додавання одиниці відповідно до імені
      </p>
      <pre>
        <code className="language-jsx">{` const handleBarAdd = (wineName) => {
    if (wineName === "red") {
      setBar({ ...bar, red: bar["red"] + 1 });
    }
  };`}</code>
      </pre>
      <ul>
        <li>
          <code>{`["red"]`}</code> пишемо у лапках, бо в противному випадку js
          буде вважати, що red - це змінна. А ми шукаємо значення по ключу, тому
          і в лапках.
        </li>
      </ul>
      <p>
        у цьому коді ми перебираємо увесь масив і лише після цього вносимо зміни
        до червоного вина.
      </p>
      <p>
        Тобто ми можемо продублювати дії для кожної категорії і наш код почне
        працювати:
      </p>
      <pre>
        <code className="language-jsx">{`const handleBarAdd = (wineName) => {
    if (wineName === "red") {
      setBar({ ...bar, red: bar["red"] + 1 });
    } else if (wineName === "white") {
      setBar({ ...bar, white: bar["white"] + 1 });
    } else {
      setBar({ ...bar, rose: bar["rose"] + 1 });
    }
  };
          `}</code>
      </pre>
      <p>
        А якщо в нас буде 200 різних алко-напоїв? А якщо 1000? Звичайно дану
        функцію можна та треба оптимізувати
      </p>
      <pre>
        <code className="language-jsx">{` const handleBarAdd = (wineName) => {
    setBar({ ...bar, [wineName]: bar[wineName] + 1 });
  };`}</code>
      </pre>
      <ul>
        <li>
          <code>{`wineName`}</code> - це змінна, що по пропсу передается до
          компонента, де викликається функція handleBarAdd, тобто на усіх трьох
          кнопках. Так як вона повертаеться по пропсам назад її і називають{" "}
          <b>колл-бек</b> функцією.
        </li>
      </ul>
      <p>
        Тепер функція виглядяє не болюче для ока. <br />
        Зауважте:
      </p>
      <ul>
        <li>
          <code>{`[wineName]`}</code> написаний у квадратних дужках, щоб
          перебирати саме серез вже існуючих параметрів, якщо ж прибрати дужки,
          при рендерингу ви просто додасте нове поле до стану bar
        </li>
        <li>
          <code>{`bar[wineName]`}</code> тут ви порівнюєте вже з існуючими
          полями у пошуках відповідного
        </li>
      </ul>
      <h3>Результат виконання завдання</h3>

      <Bar
        red={bar.red}
        white={bar.white}
        rose={bar.rose}
        total={total}
        handleBarAdd={handleBarAdd}
      />
      <h2>2.2 - Життєвий цикл компонента</h2>
      <h3>Хук useEffect</h3>
      <p>
        Кожен живий організм народжується, постійно оновлюється і, нарешті, при
        завершенні життя вмирає. Це життєвий цикл організму. Подібно до цього у
        компонентів також є життєвий цикл, який складається з кількох етапів -
        монтування, оновлення та розмонтування.
      </p>
      <p>Візьмемо, наприклад, компонент модального вікна.</p>
      <ul>
        <li>
          Етап <b>монтування</b> - це той момент, коли компонент вперше
          з'являється на екрані. Іншими словами, модальне вікно відкривається, і
          його HTML поміщається в DOM.
        </li>
        <li>
          <b>Оновлення</b> може бути викликано зміною стану state самого
          компонента або props, які йому передаються.
        </li>
        <li>
          Коли модальне вікно закривається, відбувається етап{" "}
          <b>розмонтування</b>, і його HTML видаляється з DOM.
        </li>
      </ul>
      <p>
        Напишемо компонент, який буде зберігати кількість кліків по кнопці у
        своєму стані.
      </p>
      <pre>
        <code className="language-jsx">{`import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};`}</code>
      </pre>
      <p>
        Кожен раз, коли змінюється стан clicks, компонент оновлюється. Це
        означає, що ми можемо використовувати хук useEffect, який буде,
        наприклад, змінювати заголовок HTML-документа.
      </p>
      <pre>
        <code className="language-jsx">
          {`import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  // Оголошуємо ефект
  useEffect(() => {`}
          <code>{`useEffect(() => {
  document.title = "You clicked \${clicks} times";
});`}</code>
          {`  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};`}
        </code>
      </pre>
      <p>
        Хук <code>{`useEffect(callback, deps)`}</code> оголошує ефект, який
        приймає два аргументи:
      </p>
      <ul>
        <li>
          Перший аргумент {`(callback)`} завжди є анонімною функцією, всередині
          якої виконується вся логіка ефекту. Наприклад, запити на сервер, запис
          у локальне сховище і т.п.
        </li>
        <li>
          Другий аргумент {`(deps)`} - це масив залежностей ефекту. Коли
          будь-яка з цих залежностей змінюється, ефект буде викликаний і
          виконувати callback. Це може бути стан, пропси або будь-яке локальне
          значення всередині компонента.
        </li>
      </ul>
      <h3>Етап монтування</h3>
      <p>Функція, яка виконується кожен раз, після рендеру компонента</p>
      <pre>
        <code>{` useEffect(() => {
            console.log("Modal is mounted!");
          }, []);
`}</code>
      </pre>
      <p>
        <b>Для чого використовується?</b>
      </p>
      <ol>
        <li>Надсилаються мережеві запити за даними після монтування.</li>
        <li>
          Для встановлення глобальних слухачів подій{" "}
          <code>window.addEventListener</code>
        </li>
        <li>
          Встановлюються таймери та інтервали
          <code>{`setInterval, setTimeout`}</code>
        </li>
        <li>
          Виконуються якісь додаткові функції ефекти напр. відключення скролу у
          користувача при відкритті модального вікна.
        </li>
      </ol>
      <p>
        Якщо другим аргументом хука useEffect передати порожній масив, то такий
        ефект виконається лише один раз - на етапі монтування компонента, і
        більше ніколи.
      </p>
      <h3>Етап розмонтування</h3>
      <p>
        Функція, що виконується перед тим, як компонент буде повністю видалений
        з розмітки.
      </p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
            console.log("Modal is mounted!");
            return () => {
              console.log("Modal is unmounted");
            };
          }, []);`}</code>
      </pre>
      <p>
        Тобто ми виконуємо колл-бек функцію у return перед тим, як модальне
        вікно буде повністю видалено з розмітки.
      </p>
      <p>
        <b>Для чого використовується?</b>
      </p>
      <ol>
        <li>
          Відхиляти мережеві запити за даними після монтування post, get...
        </li>
        <li>
          Для видалення глобальних слухачів подій
          <code>window.removeEventListener</code>.У випадку невиконання даного
          етапу це призведе до витоку пам`яті та додаток закрашиться.
        </li>
        <li>
          Прибираються таймери та інтервали
          <code>{`clearInterval, clearTimeout`}</code>
        </li>
        <li>
          Виконуються якісь додаткові функції ефекти напр. увімкнути скролу у
          користувача при видаленні модального вікна з розмітки.
        </li>
      </ol>
      <h3>Етап оновлення</h3>
      <p>
        Функція, яка виконується кожен раз, після зміни пропсів, або стейту
        компонента
      </p>
      <pre>
        <code className="language-jsx">{`  useEffect(() => {
            console.log(counter);
          }, [counter]);`}</code>
      </pre>
      <p>
        <b>Для чого використовується?</b>
      </p>
      <ol>
        <li>Надсилатися мережеві запити за даними після оновлення.</li>
        <li>Синхронізація данних з localStorage.</li>
      </ol>
      <h3>Розглянемо ЖЦ на прикладі модального вікна</h3>
      <p>Створимо компонент Modal та додамо базову розмітку</p>
      <pre>
        <code className="language-jsx">{`<div className={css.backdrop}>
            <div className={css.modal}>
              <button
                type="button"
                aria-label="close-modal-button"
                className={css.modalBtn}
              >
                ╳
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis
                cupiditate culpa iure eaque minima. Error molestias sunt minus, quos
                voluptatem dolorem quo, modi eius voluptas, corrupti facilis sed
                recusandae.
              </p>
            </div>
          </div>`}</code>
      </pre>
      <ul>
        <li>
          <b>
            <code className="language-jsx">{`<div className={css.backdrop}>`}</code>
          </b>
          буде слугувати фоном, що буде з`являтися з модальним вікном`
        </li>
        <li>
          <b>
            <code>{`aria-label="close-modal-button"`}</code>
          </b>
          Так як кнопка не містить тексту, бажано додавати до неї{" "}
          <code>aria-label</code>, щоб у непередбачуваних ситуація користувач
          знав, для чого цей елемент
        </li>
      </ul>
      <p>
        Для роботи з свг встановимо плгін <code>vite-plugin-svgr</code> та
        підключимо його у <code>vite.config.js</code>
      </p>
      <pre>
        <code className="language-jsx">{`import svgr from "vite-plugin-svgr";
export default {
  plugins: [svgr()],
};`}</code>
      </pre>
      <p>По-перше створимо стан, для модального вікна</p>
      <p>
        наступник кроком створимо функцію відкриття та закриття модального
        відкна
      </p>
      <pre>
        <code className="language-jsx">{`  const openModal = () => {
    setIsModalOpen(true);
  };`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`const closeModal = () => {
    setIsModalOpen(false);
  };`}</code>
      </pre>
      <p>По пропсам передамо функцыю закриття на кнопку в компонент Modal</p>
      <h3>На прикладі створення Modal розглянемо життєві цикли у React</h3>
      <p>
        <b>1 - Монтування</b>
      </p>
      <pre>
        <code className="language-jsx">{`const SecondModuleModal = ({ closeModal }) => {
        useEffect(() => {
          console.log("Modal is mounted!");
        }, []);`}</code>
      </pre>
      <p>Console:</p>
      <code>{` Modal is mounted!`}</code>
      <p>
        <b>2 - Розмонтування</b>
      </p>
      <pre>
        <code className="language-jsx">
          {`useEffect(() => {
            console.log("Modal is mounted!");
            return () => {
              console.log("Modal is unmounted");
            };
          }, []);`}
        </code>
      </pre>
      <p>Console:</p>
      <code>{`Modal is unmounted`}</code>
      <p>Створимо лічильник всередині модального вікна</p>
      <pre>
        <code className="language-jsx">{`
          const [counter, setCounter] = useState(0);

       <p>Counter state: {counter}</p>
        {/* <button type="button" onClick={() => setCounter(counter + 1)}> */}
        <button
          type="button"
          onClick={() => setCounter((prevState) => prevState + 1)}
        >
          Change counters state
        </button>
      `}</code>
      </pre>
      <p>За допомогою useEffect підпишимося на актуальне значення лічилька</p>
      <pre>
        <code className="language-jsx">{`  useEffect(() => {
            console.log(counter);
          }, [counter]);`}</code>
      </pre>
      <p>
        <b>3 - Оновлення</b>
      </p>
      <pre>
        <code className="language-jsx">
          {` useEffect(() => {
            // console.log(counter);
          }, [counter]);`}
        </code>
      </pre>
      <p>
        <b>
          Створимо ефект на закриття модального вікна по кліку на кнопку Escape
        </b>
      </p>
      <pre>
        <code className="language-jsx">{`useEffect(() => {
          // console.log("Modal is mounted!");
          const handleKeyDown = (e) => {
            // console.log("keydown");
            // console.log(e);
            if (e.code === "Escape") {
              closeModal();
            }
          };
          window.addEventListener("keydown", handleKeyDown);
      
          return () => {
            window.removeEventListener("keydown", handleKeyDown);
          };
        }, []);`}</code>
      </pre>
      <p>
        проте у такому записі юзефект починає скаржитися та просить додати
        посилання на відстеження функції
      </p>
      <img src={screen1} alt="img" />
      <p>Тому додамо відстеження функції у масив залежностей ефекту</p>
      <p>
        <b>
          Тепер додамо можливість закриття модального вікна по кліку на бекдроп
        </b>
      </p>
      <p>
        Щоб можальне вікно закривалося по кліку тільки на бекдроб необхідно
        виконати перевірку по таргерту елемента, на який відбувається клік
      </p>
      <pre>
        <code className="language-jsx">{`if (e.target === e.currentTarget) {}`}</code>
      </pre>
      <ul>
        <li>
          <code>{`e.target`}</code> - елемент, на який відбулося натискання
        </li>
        <li>
          <code>{`e.currentTarget`}</code> - елемент, на якому висить слухач
          події{" "}
          <code className="language-jsx">{`<div className={css.backdrop} onClick={handleBackdropClose}></div>`}</code>
        </li>
      </ul>
      <button type="button" onClick={openModal} className={css.openModalBtn}>
        OPEN MODAL BUTTON
      </button>
      <p>
        <b>Робота з LocalStorage</b>
      </p>
      <p>
        У виществореному лічильнику модального вікна зробимо можливість
        зберігати дані лічильника у LocalStorage
      </p>
      <ol>
        <li>
          Необхідно слідкувати за актуальним значенням лічильника і кожен раз
          при його зміні оновлювати значення у LocalStorage. Тобто
          синхронізувати стейт з локальним сховищем. Для цього у локальному
          сховищі створимо змінну та підпишимося на стейт лічильника
        </li>
        <pre>
          <code className="language-jsx">{`useEffect(() => {
              localStorage.setItem("modal-counter", counter);
            }, [counter]);`}</code>
        </pre>
        <p>
          <b>
            Якщо ви працюєте із складними типами даних, такими як об'єкт чи
            масив, не забувайте перетворити збережене значення у рядок за
            допомогою JSON.stringify.
          </b>
        </p>
        <pre>
          <code className="language-jsx">{`window.localStorage.setItem("key", JSON.stringify());
`}</code>
        </pre>
        <p>
          При першому ж монтуванні модального вікна з лічильником ми бачимо
          наступній варіант
        </p>
        <img src={screen2} alt="" style={{ width: "400px" }} />
        <li>
          Наступним етапом необхідно реалізувати витягання з локального сховища
          значення лічильника, адже при демонтуванні модального вікна занчення
          лічильника прийде до поаткового значення стану - нулю. Саме тому
          необхідно змінити стартове значення стану лічильника.
        </li>
        <pre>
          <code className="language-jsx">{`const [counter, setCounter] = useState(() => {
    return parseInt(localStorage.getItem("modal-counter"));
  });`}</code>
        </pre>
        <li>
          Останнім підводним каменем у вирішенні цієї задачі є кейс, коли
          користувач вперше відкрив модальне вікно. У цьому випадку початкове
          значення за ключем у локальному сховищі буде null. Тому за допомогою
          оператора ?? необхідно перевірити чи не рівний ключ null, якщо так,
          змінити значення стану на 0.
        </li>
        <pre>
          <code className="language-jsx">{`return parseInt(localStorage.getItem("modal-counter") ?? 0);
`}</code>
        </pre>
      </ol>
      {isModalOpen && <SecondModuleModal closeModal={closeModal} />}
      <h2>
        Домашне завдання 2.1 - Віджет відгуків про кав'ярню Sip Happens Café.
      </h2>
      <p>Приклад збереження до локального сховища обєкт елементів</p>
      <pre>
        <code className="language-jsx">{` useEffect(() => {
            localStorage.setItem("cafe-review", JSON.stringify(review));
          }, [review]);`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`const [review, setReview] = useState(() => {
    const storedReview = localStorage.getItem("cafe-review");
    return storedReview
      ? JSON.parse(storedReview)
      : { good: 0, neutral: 0, bad: 0 };
  });`}</code>
      </pre>
      <SipHappensCafe />
    </div>
  );
}
