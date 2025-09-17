import FriendList from "../FriendList/FriendList";
import friendsData from "../../../friends.json";

import css from "./HomeworkFriends.module.css";
export default function HomeworkFriends() {
  return (
    <div>
      <h2>Домашне завдання 1.2 - Список друзів</h2>
      <p>
        Необхідно створити компонент <code>{`<FriendList>`}</code>, за допомогою
        якого ми могли б відображати інформацію про друзів користувача.
      </p>
      <p>
        Компонент <code>{`<FriendList>`}</code> повинен приймати один проп
        friends - масив об'єктів друзів та створювати DOM розмітку наступної
        структури.
      </p>
      <pre>
        <code className="language-jsx">{`import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code>
      </pre>
      <p>
        Компонент <code>{`<FriendListItem>`}</code> - це картка одного друга,
        яка повинна приймати кілька пропсів:{" "}
      </p>
      <ul>
        <li>avatar - посилання на аватар</li>
        <li>name - ім'я друга</li>
        <li>isOnline - буль, що сигналізує про стан друга: в мережі або ні.</li>
      </ul>
      <p>
        Компонент <code>{`<FriendListItem>`}</code> повинен створювати DOM
        розмітку наступної структури.
      </p>
      <pre>
        <code className="language-jsx">{`export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}`}</code>
      </pre>
      <p>
        Залежно від пропа isOnline, текст в p.status повинен змінюватися, а його
        колір тексту - також. Якщо значення true, то текст Online і колір тексту
        зелений, в іншому випадку текст Offline і червоний колір тексту. Це
        можна зробити за допомогою різних CSS-класів.
      </p>
      <pre>
        <code className="language-jsx">{`npm install --save clsx`}</code>
      </pre>
      <pre>
        <code className="language-jsx">
          {` <p className={clsx(css.friendStatus, {
            [css.isOnline]: isOnline,
            [css.isOffline]: !isOnline,
          })}>
            {isOnline ? <span>Online</span> : <span>Offline</span>}
</p>`}
        </code>
      </pre>
      <p>
        Треба винести дані про друзів в JSON-файл, щоб не ускладнювати компонент
        App. Наприклад, створіть у папці src файл friends.json, перемістіть туди
        масив друзів, форматуючи дані під формат JSON, і потім імпортуйте його в
        App, щоб передати ці дані пропсами.
      </p>
      <pre>
        <code className="language-jsx">{`import userData from "../userData.json";
import friends from "../friends.json";

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
      <FriendList friends={friends} />
    </>
  );
};`}</code>
      </pre>
      <h2>Результат виконання завдання</h2>
      <FriendList friends={friendsData} />
    </div>
  );
}
