import { useEffect, useState } from "react";
import css from "./ScrollToTopButton.module.css";
export default function ScrollToTopButton() {
  // 1. Состояние видимости кнопки
  const [isVisible, setIsVisible] = useState(false);
  // 2. Функция для отслеживания скролла
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // 3. Функция для прокрутки вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // 4. Используем useEffect для подписки на событие scroll
  // React отслеживает состояние и пропсы компонентов, а не глобальные события браузера, такие как scroll, resize или keydown.
  // React «следит» только за изменениями состояния или пропсов, но не за событиями окна по умолчанию.
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // Чистим слушатель при размонтировании
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  //     Каждый раз, когда пользователь прокручивает страницу, вызывается toggleVisibility.
  // Она проверяет window.scrollY и обновляет состояние через setIsVisible.
  // Когда состояние меняется, React перерисовывает компонент.
  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={css.ScrollToTopBtn}>
          🔝
        </button>
      )}
    </>
  );
}
// [Компонент ScrollToTop монтируется]
//           │
//           ▼
//    useEffect запускается
//           │
//           ▼
//   window.addEventListener('scroll', toggleVisibility)
//           │
//           ▼
// [Пользователь скроллит страницу] ──► toggleVisibility вызывается
//           │
//           ▼
//     Проверяем window.scrollY
//           │
//           ▼
//   setIsVisible(true/false) вызывается
//           │
//           ▼
//   React перерисовывает компонент
//           │
//           ▼
// [Кнопка видна/скрыта в зависимости от isVisible]
//           │
//           ▼
// [Компонент размонтируется]
//           │
//           ▼
//  useEffect возвращает функцию очистки:
//  window.removeEventListener('scroll', toggleVisibility)
//           │
//           ▼
// [Слушатель удалён, утечек нет]
