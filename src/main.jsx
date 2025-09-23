import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
// Імпорт стилів нормалізації
import "modern-normalize";
import "./index.css";
import App from "./components/App";
import AppContext from "./components/FourthModule/AppContext";
import { UserContextProvider } from "./components/context/UserContext";
//     Метод createRoot приймає посилання на існуючий DOM-елемент,
// у нашому випадку це div#root з index.html, і створює корінь, в який буде рендеритися додаток.
//     Метод render приймає посилання на компонент, який потрібно відрендерити.
// Ми завжди рендеримо App - кореневий компонент додатка.

// Достатньо використовувати лише один виклик render для того,
// щоб відрендерити найвищий компонент в ієрархії (App), що призведе до рендеру всіх інших компонентів додатка.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  // <UserContextProvider>
  //   <AppContext />
  // </UserContextProvider>
);

// Суворий режим
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Це вбудований компонент, який дозволяє виявляти потенційні проблеми в компонентах додатка
// та попереджати про них під час розробки. Він не впливає на виконання додатка у продакшені,
// але допомагає знаходити та виправляти проблеми під час розробки.
// Основні функції StrictMode:

//     Сповіщення про використання застарілих методів і функцій в React, які можуть бути вилучені в майбутніх версіях.
//     Виявлення побічних ефектів під час рендерингу компонентів, що може призвести до непередбачуваної поведінки.
//     Сповіщення про потенційні проблеми в render-методах, такі як виклик нечистих функцій під час рендерингу.
//     Виявлення помилок у функціях обробки подій та їх інших частинах життєвого циклу компонентів.
