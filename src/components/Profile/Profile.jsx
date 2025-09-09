import css from "./Profile.module.css";
export default function Profile({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAdress,
  imgUrl,
}) {
  return (
    <div className={css.userCard}>
      <h3>
        <img className={css.profileImg} src={imgUrl} alt={name} />
        {/* Name:{name} {hasPhisicalAdress && "🏠"} */}
        Name: {name}
        {hasPhisicalAdress ? "🏠" : ""}
      </h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>
        Status: {status}
        {status === "online" ? "🟢" : "🔴"}
      </p>
    </div>
  );
}
