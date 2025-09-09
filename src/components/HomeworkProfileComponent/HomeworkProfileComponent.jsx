import css from "./HomeworkProfileComponent.module.css";
export default function HomeworkProfileComponent({
  name,
  tag,
  location,
  image,
  stats,
}) {
  return (
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
