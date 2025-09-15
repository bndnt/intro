import css from "./TMAddProfile.module.css";
//  "name": "Iryna",
//     "phone": "+380931112233",
//     "email": "iryna@example.com",
//     "status": "online",
//     "hasPhisicalAdress": false,
//     "avatar": "https://www.svgrepo.com/show/446502/avatar.svg"

const TMAddProfile = ({ addProfile }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const name = formElements.profileName.value;
    const phone = formElements.profilePhone.value;
    const email = formElements.profileEmail.value;
    const avatar = formElements.profileAvatar.value;
    const status = formElements.profileStatus.value;
    const hasPhisicalAdress = formElements.profileHome.checked;
    const profileObject = {
      name,
      phone,
      email,
      avatar,
      status,
      hasPhisicalAdress,
    };
    addProfile(profileObject);
    //   console.log({ name, phone, email, avatar, status, hasPhisicalAdress });
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          <span>Username: </span>
          <input name="profileName" type="text" placeholder="Name" required />
        </label>
        <label className={css.label}>
          <span>Phone number: </span>
          <input name="profilePhone" type="tel" placeholder="Phone" required />
        </label>
        <label className={css.label}>
          <span>Email: </span>
          <input
            name="profileEmail"
            type="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={css.label}>
          <span>Avatar link: </span>
          <input
            name="profileAvatar"
            type="text"
            placeholder="Avatar link"
            required
          />
        </label>
        <p>Status: </p>
        <div className={css.radioBox}>
          <label>
            Online {``}
            <input
              name="profileStatus"
              type="radio"
              placeholder="Status"
              value="online"
              required
            />
          </label>
          <br />
          <label>
            Offline {``}
            <input
              name="profileStatus"
              type="radio"
              placeholder="Status"
              value="offline"
              required
            />
          </label>
        </div>
        <label className={css.labelCheckbox}>
          <input name="profileHome" type="checkbox" placeholder="Home" />
          <span> Has phisical adress </span>
        </label>
        <button type="submit">Add New Profile</button>
      </form>
    </div>
  );
};

export default TMAddProfile;
