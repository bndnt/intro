import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
const SixthModule = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>Модуль 6</h1>
      <h2>Redux та Redux Toolkit</h2>
      <div className="topicBlock">
        <h3>Управління станом</h3>
        <p>
          Функціональні вимоги до додатків зростають, збільшуючи кількість
          станів інтерфейсу: асинхронне завантаження даних, індикатори
          завантаження, значення фільтрів під час сортування тощо. Бібліотеки
          управління станом стандартизують зберігання та роботу зі станом
          програми, спрощуючи розробку.
        </p>
        <img
          src="https://s3.eu-north-1.amazonaws.com/lms.goit.files/5c98eaf1-8683-4e0e-a3d0-a6a7dbc374b4image.png"
          alt="img"
        />
        <p>
          Redux - одна з найпопулярніших бібліотек керування станом програми.
        </p>
        <ul>
          <li>
            <b>Передбачуваність результату</b>: Одне джерело правди (store)
            зберігає стан програми та методи для роботи з ним.
          </li>
          <li>
            <b>Підтримуваність</b>: Набір правил і практик для структуризації
            коду робить його одноманітним та зрозумілим.
          </li>
          <li>
            <b>Інструменти розробника</b>: Зручне розширення браузера з
            інформацією про стан програми в режимі реального часу.
          </li>
        </ul>
        <h4>Потік даних</h4>
        <img
          src="https://s3.eu-north-1.amazonaws.com/lms.goit.files/5244a197-3c1e-4e1d-8bd8-55c32ec95a8dimage.png"
          alt="img"
        />
      </div>

      <pre>
        <code className="language-jsx">{``}</code>
      </pre>
    </div>
  );
};

export default SixthModule;
