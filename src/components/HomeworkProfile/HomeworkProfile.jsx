import css from "./HomeworkProfile.module.css";
import HomeworkProfileComponent from "../HomeworkProfileComponent/HomeworkProfileComponent";
import userData from "../../userData.json";
export default function HomeworkProfile() {
  return (
    <div>
      <h2>Домашне завдання 1 - Профіль соціальної мережі</h2>
      <p>
        Необхідно створити компонент <code>{`<Profile>`}</code>, за допомогою
        якого ми могли б відображати інформацію про користувача соціальної
        мережі.
      </p>
      <p>
        Компонент повинен приймати кілька пропсів з інформацією про користувача:
      </p>
      <ul>
        <li>name — ім'я користувача</li>
        <li>tag — тег в соціальній мережі без @</li>
        <li>location — місто і країна</li>
        <li>image — посилання на зображення</li>
        <li>stats — об'єкт з інформацією про активності</li>
      </ul>
      <p>
        Компонент повинен створювати розмітку наступної структури, але з
        динамічними даними, що надходять у вигляді описаних раніше пропсів.
      </p>
      <pre>
        <code>
          {`<div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
`}
        </code>
      </pre>
      <p>
        Приведений нижче є приклад використання компонента Profile у компоненті
        App:
      </p>
      <ul>
        <li>Рендеримо компонент Profile всередині App</li>
        <li>Передаємо компоненту Profile дані у вигляді пропсів</li>
      </ul>
      <pre>
        <code>
          {`const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
`}
        </code>
      </pre>
      <p>
        Треба винести дані користувача в JSON-файл, щоб не завантажувати
        компонент App. Наприклад, створіть у папці src файл userData.json,
        перенесіть туди дані користувача, відформатуйте їх у формат JSON, а
        потім імпортуйте його в App, щоб передати ці дані через пропси.
      </p>
      <pre>
        <code>
          {`import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
`}
        </code>
      </pre>
      <h3>Результат виконання завдання</h3>
      <HomeworkProfileComponent
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
