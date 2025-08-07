export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>{stats.followers}</span>
          <span>1000</span>
        </li>
        <li>
          <span>{stats.views}</span>
          <span>2000</span>
        </li>
        <li>
          <span>{stats.likes}</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
}
