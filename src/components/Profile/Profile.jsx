import css from "./Profile.module.css";
export default function Profile({
  id,
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAdress,
  imgUrl,
  onDeleteProfile,
}) {
  return (
    <div className={css.userCard}>
      <button
        type="button"
        className={css.profileDeleteBtn}
        onClick={() => onDeleteProfile(id)}
      >
        ❌
      </button>
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
