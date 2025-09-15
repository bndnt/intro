import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.friendsFlex}>
        {friends.map((friend) => (
          <li key={friend.id} className={css.friendsItem}>
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
}
