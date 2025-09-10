import { useState } from "react";
import Bar from "../Bar/Bar";

export default function SecondModule() {
  const [counter, setCounter] = useState(0);
  const [isLoremOpen, setIsLoremOpen] = useState(false);
  const [bar, setBar] = useState({
    red: 3,
    white: 4,
    rose: 5,
  });

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
      <p>Тепер функція виглядяє не болюче для ока. Зауважте:</p>
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
    </div>
  );
}
