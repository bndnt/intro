import { useState } from "react";
import Bar from "../Bar/Bar";
import SecondModuleModal from "../SecondModuleModal/SecondModuleModal";

export default function SecondModule() {
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
        <code>{`import { useState } from 'react';

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
        <code>{`setIsLoremOpen((actualState) => !actualState);
`}</code>
      </pre>
      <pre>
        <code>{`setIsLoremOpen(!isLoremOpen);`}</code>
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
        <code>{`const updateX = () => {
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
        <code>{` const handleBarAdd = (wineName) => {
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
        <code>{`const handleBarAdd = (wineName) => {
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
        <code>{` const handleBarAdd = (wineName) => {
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
        <code>{`import { useState, useEffect } from "react";

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
        <code>
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
        <code>{`useEffect(() => {
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
          Для видалення глобальних слухачів подій{" "}
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
      <pre>
        <code>{``}</code>
      </pre>
      <p>
        <b>Для чого використовується?</b>
      </p>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <h3>Розглянемо ЖЦ на прикладі модального вікна</h3>
      <p>Створимо компонент Modal та додамо базову розмітку</p>
      <pre>
        <code>{`<div className={css.backdrop}>
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
            <code>{`<div className={css.backdrop}>`}</code>
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
        <code>{`import svgr from "vite-plugin-svgr";

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
        <code>{`  const openModal = () => {
    setIsModalOpen(true);
  };`}</code>
      </pre>
      <pre>
        <code>{`const closeModal = () => {
    setIsModalOpen(false);
  };`}</code>
      </pre>
      <p>По пропсам передамо функцыю закриття на кнопку в компонент Modal</p>
      <h3>На прикладі створення Modal розглянемо життєві цикли у React</h3>
      <p>
        <b>1 - Монтування</b>
      </p>
      <pre>
        <code>{`const SecondModuleModal = ({ closeModal }) => {
        useEffect(() => {
          console.log("Modal is mounted!");
        }, []);`}</code>
      </pre>
      <p>Console:</p>
      <code>{` Modal is mounted!`}</code>
      <p>
        <b>1 - Розмонтування</b>
      </p>
      <pre>
        <code>{`useEffect(() => {
            console.log("Modal is mounted!");
            return () => {
              console.log("Modal is unmounted");
            };
          }, []);`}</code>
      </pre>
      <p>Console:</p>
      <code>{`Modal is unmounted`}</code>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      {isModalOpen && <SecondModuleModal closeModal={closeModal} />}
    </div>
  );
}
