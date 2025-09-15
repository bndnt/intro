import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(css.friendStatus, {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      >
        {isOnline ? <span>Online</span> : <span>Offline</span>}
      </p>
    </>
  );
}
