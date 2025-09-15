import css from "./ThirdModule.module.css";
import TMUsers from "../ThirdModuleComponents/TMUsers/TMUsers";
import screenForm1 from "../../assets/img/screenForm1.png";
import screenFilter from "../../assets/img/filterEx.png";

const ThirdModule = () => {
  return (
    <div>
      <h1>Модуль 3</h1>
      <h2>Форми</h2>
      <h3>Редагування списку друзів за допомогою форми</h3>
      <p> За основу візьмемо компонент Profile з першого модуля</p>
      <p>Створимо форму для збору інформації</p>
      <pre>
        <code>{`<form className={css.form}>
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
                <p>Status: </p>
                <div className={css.radioBox}>
                  <label>
                    Online 
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
                    Offline 
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
              </form> `}</code>
      </pre>
      <ol>
        <li>
          Для неконтрольованих форм у input завжди необхідно додавати атрибут
          name
        </li>
        <li>
          Важливо додати поля, що будуть обов`язковими при надсиланні форми
        </li>
      </ol>
      <p>
        Тепер можна переходити до написання логіки під час сабміту по кнопці
      </p>
      <ol>
        <li>
          Напишемо функцію для сабміту форми та повісимо її на форму onSubmit
        </li>
        <pre>
          <code>
            {`const handleSubmit = (e) => {
  e.preventDefault();
};`}
          </code>
        </pre>
        <li>
          За допомогою currentTarget.elements нам необхідно пітягти назви полів,
          щоб у пожальшому працювати з ними
          <img src={screenForm1} alt="img" style={{ width: "300px" }} />
        </li>
        <li>Створимо змінні та занесемо до них значення полів.</li>
        <pre>
          <code>{`const formElements = e.currentTarget.elements;
  const name = formElements.profileName.value;
  const phone = formElements.profilePhone.value;
  const email = formElements.profileEmail.value;
  const status = formElements.profileStatus.value;
  const hasPhisicalAdress = formElements.profileHome.checked;
  console.log({ name, phone, email, status, hasPhisicalAdress });`}</code>
        </pre>
        <li>Наступним кроком необхідно створити обєкт профілю</li>
        <pre>
          <code>{`const profileObject = {
    name,
    phone,
    email,
    avatar,
    status,
    hasPhisicalAdress,
  };`}</code>
        </pre>
        <li>
          Далі необхідно реалізувати обнулення усіх полів форми після відправки
          по сабміту
        </li>
        <code>{`e.currentTarget.reset();`}</code>
        <li>
          Тепер необхідно в App створити функцію та по пропсам передати її до
          компонента AddProfile
        </li>
        <pre>
          <code>{`const addProfile = (profile) => {
    console.log(profile);
  };`}</code>
        </pre>
        <pre>
          <code>{`const TMAddProfile = ({ addProfile }) => {`}</code>
        </pre>
        <pre>
          <code>{`addProfile(profileObject);
`}</code>
        </pre>
        <li>
          Генерація ідентифікатора для нового елементу списку
          <ol>
            <li>Створюємо копію обєкту </li>
            <li>Додати додаткове поле + nanoid</li>
            <pre>
              <code>{`const finalProfile = {
...profile,
id: nanoid(),
};`}</code>
            </pre>
          </ol>
        </li>
        <li>Додаємо новий профіль до загального списку користувачів</li>
        <pre>
          <code>{`setUsers([finalProfile, ...users]);
`}</code>
        </pre>

        <pre>
          <code>{`const TMUsers = () => {
            const [users, setUsers] = useState(userData);
            const addProfile = (profile) => {
              const finalProfile = {
                ...profile,
                id: nanoid(),
              };
              setUsers([finalProfile, ...users]);
            };
            return (
              <div>
                <TMAddProfile addProfile={addProfile} />
                <div className="usersFlex">
                  {users.map((user) => {
                    return (
                      <Profile
                        key={user.email}
                        name={user.name}
                        phone={user.phone}
                        email={user.email}
                        status={user.status}
                        hasPhisicalAdress={user.hasPhisicalAdress}
                        imgUrl={user.avatar}
                      />
                    );
                  })}
                </div>
              </div>
            );
          };
          export default TMUsers;`}</code>
        </pre>
        <pre>
          <code>{`const TMAddProfile = ({ addProfile }) => {
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
                      Online
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
                      Offline 
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
          
          export default TMAddProfile;`}</code>
        </pre>
        <li>Напишемо функцію видалення профілю з допомогою filter</li>
        <p>Приклад логіки filter</p>
        <img src={screenFilter} alt="img" style={{ width: "300px" }} />
        <pre>
          <code>{`const onDeleteProfile = (profileId) => {
    setUsers(users.filter((item) => item.id !== profileId));
    // console.log("profileId", profileId);
  };`}</code>
        </pre>
      </ol>
      <TMUsers />
    </div>
  );
};

export default ThirdModule;
