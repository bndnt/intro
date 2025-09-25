import css from "../components/ThirdModule/ThirdModule.module.css";
import TMUsers from "../components/ThirdModuleComponents/TMUsers/TMUsers";
import FormikComponent from "../components/ThirdModuleComponents/FormikComponent/FormikComponent";
import screenForm1 from "../assets/img/screenForm1.png";
import screenFilter from "../assets/img/filterEx.png";
import ThirdHomework from "../components/HWT/ThirdHomework/ThirdHomework";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
import { useEffect } from "react";
const ThirdModule = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <h1>Модуль 3</h1>
      <h2>Форми</h2>
      <p>
        <b>Неконтрольована форма - </b>форма, дані з якою необхідні лише в
        момент сабміту - відправки форми.
      </p>
      <p>
        <b>Контрольована форма - </b>форма, дані з якою мають значення у
        будь-який момент часу, що до того ж впливає на інтерфейс користувача.
      </p>
      <p>
        Для <b>контрольованих </b>форм -форм, в яких на основі введених
        користувачем даних відбуваються якісь розрахунки чи логіка -
        <b>Formik</b>
      </p>
      <p>
        Для <b>неконтрольованих</b> форм - форм, в яких збираються дані та
        відбувається <a href="#validationLink">валідація</a> виключно під час
        події Сабміту -<b>React hook form</b>
      </p>
      <h3>Редагування списку друзів за допомогою форми</h3>
      <p> За основу візьмемо компонент Profile з першого модуля</p>
      <p>Створимо форму для збору інформації</p>
      <pre>
        <code className="language-jsx">{`<form className={css.form}>
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
      <h4>Додавання нового користувача</h4>
      <p>
        Тепер можна переходити до написання логіки під час сабміту по кнопці
      </p>
      <ol>
        <li>
          Напишемо функцію для сабміту форми та повісимо її на форму onSubmit
        </li>
        <pre>
          <code className="language-jsx">
            {`const handleSubmit = (e) => {e.preventDefault();};`}
          </code>
        </pre>
        <li>
          За допомогою currentTarget.elements нам необхідно пітягти назви полів,
          щоб у пожальшому працювати з ними
          <img src={screenForm1} alt="img" style={{ width: "300px" }} />
        </li>
        <li>Створимо змінні та занесемо до них значення полів.</li>
        <pre>
          <code className="language-jsx">{`const formElements = e.currentTarget.elements;
  const name = formElements.profileName.value;
  const phone = formElements.profilePhone.value;
  const email = formElements.profileEmail.value;
  const status = formElements.profileStatus.value;
  const hasPhisicalAdress = formElements.profileHome.checked;
  console.log({ name, phone, email, status, hasPhisicalAdress });`}</code>
        </pre>
        <li>Наступним кроком необхідно створити обєкт профілю</li>
        <pre>
          <code className="language-jsx">{`const profileObject = {
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
          <code className="language-jsx">{`const addProfile = (profile) => {
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
              <code className="language-jsx">{`const finalProfile = {
...profile,
id: nanoid(),
};`}</code>
            </pre>
          </ol>
        </li>
        <li>Додаємо новий профіль до загального списку користувачів</li>
        <pre>
          <code>{`setUsers([finalProfile, ...users]);`}</code>
        </pre>

        <pre>
          <code className="language-jsx">{`const TMUsers = () => {
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
          <code className="language-jsx">{`const TMAddProfile = ({ addProfile }) => {
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
      </ol>
      <h4>Функція видалення </h4>
      <p>Приклад логіки filter для видалення профілю з допомогою filter</p>
      <img src={screenFilter} alt="img" style={{ width: "300px" }} />
      <p>Функція видалення</p>
      <pre>
        <code className="language-jsx">{`const onDeleteProfile = (profileId) => {
    setUsers(users.filter((item) => item.id !== profileId));};`}</code>
      </pre>
      <p>
        По пропсам передаємо функцію до компонента Профілю та викликаємо
        колл-бек функцію у кнопці з аргументом і дентифікатора
      </p>
      <pre>
        <code className="language-jsx">{`<button type="button" className={css.profileDeleteBtn} onClick={() => onDeleteProfile(id)} >❌ </button>`}</code>
      </pre>
      <h4>Функція пошуку </h4>
      <p>
        Реалізуємо пошук по імени серед користувачів - пошук підстроки у строці
      </p>
      <ol>
        <li>Створимо стан для фильтрації</li>
        <pre>
          <code>{`const [filter, setFilter] = useState("");`}</code>
        </pre>
        <pre>
          <code>{`<input type="text" placeholder="Search by name" value={filter} />`}</code>
        </pre>
        <p>
          Даний підхід називається контрольованим - поки не буде прописана
          логіка зміни стану, у поле неможливо буде щось ввести
        </p>
        <li>Напишемо функцію зміни стану</li>
        <pre>
          <code className="language-jsx">{`  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };`}</code>
        </pre>
        <li>Реалізуємо пошук підстроки у строці</li>
        <pre>
          <code className="language-jsx">{`const filteredProfile = users.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );`}</code>
        </pre>
        <li>Відтепер вивід map необхідно робити з відфільтрованного масиву</li>
        <pre>
          <code>{`{filteredProfile.map((user) => {
`}</code>
        </pre>
      </ol>
      <TMUsers />
      <h2>Заняття 2. Бібліотека Formik</h2>
      <p>Додаємо Formik до проекту як пакет NPM:</p>
      <code>{`npm install formik`}</code>
      <h4>Контейнер форми</h4>
      <p>
        Формік - це набір готових компонентів, які спрощують створення форм.
        Побудова форми починається з компонента-контейнера Formik.
      </p>
      <pre>
        <code className="language-jsx">{`import { Formik } from 'formik';

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
    <Form className={css.form}>
			<button type="submit" classname={css.btn}>Submit</button>
	</Form>
    </Formik>
  );
};`}</code>
      </pre>
      <p>Йому потрібно передати два пропси:</p>
      <ol>
        <li>
          <code>initialValues</code> - об'єкт початкових значень полів, наразі
          передамо порожній об'єкт.
        </li>
        <li>
          <code>onSubmit</code> - функція, яка буде викликана при сабміті форми.
        </li>
      </ol>
      <p>
        Усередині компонента <code>Formik</code> вкладаємо елементи форми, але
        не вбудовані теги, такі як form чи input, а ті, що надає бібліотека.
      </p>
      <ul>
        <li>
          <code>Field</code> - компонент додавання полів форми використовується,
          який за замовчуванням рендерить тег <code>input</code>. Кожному полю
          обов'язково потрібно вказати атрибут name, так само, як і при роботі з
          звичайним тегом <code>input</code>.
        </li>
      </ul>
      <h4>Початкове значення полів</h4>
      <p>
        Форми, створені за допомогою бібліотеки <code>Formik</code>, є
        контрольованими формами, де значення кожного поля зберігається в стані.
        Проте нам не потрібно оголошувати та змінювати стан, це виконає
        компонент <code>Formik</code> за нас. Саме він зберігає в собі стан і
        логіку його зміни.
      </p>
      <p>
        Пропсу <code>initialValues</code> необхідно передати об'єкт з
        початковими значеннями полів. Усередині <code>Formik</code> зберігає
        стан у вигляді об'єкта, де імена полів - це імена властивостей у стані,
        а значення полів - це значення властивостей.
      </p>
      <pre>
        <code className="language-jsx">{`import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: ""
};

const FeedbackForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
	      <Field type="text" name="username" />
				<Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};`}</code>
      </pre>
      <h4>Відправка форми</h4>
      <p>
        При відправці форми викликається колбек-функція, яку ми передали пропсом
        onSubmit компоненту Formik. Зручною є ідея зробити її іменованою
        функцією handleSubmit і передати посилання на неї в onSubmit.
      </p>
      <pre>
        <code className="language-jsx">{`import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: ""
};

const FeedbackForm = () => {

  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
	      <Field type="text" name="username" />
				<Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
`}</code>
      </pre>
      <p>Функція відправки форми має два параметри:</p>
      <ol>
        <li>
          <code>values</code> - об'єкт значень полів форми в момент її
          відправки.
        </li>
        <li>
          <code>actions</code>- об'єкт з допоміжними методами. Наприклад, метод
          resetForm використовується для очищення полів форми після відправки.
        </li>
      </ol>
      <p>
        Функція відправки форми не отримує об'єкт події, що є зайвим. Formik в
        момент відправки форми:
      </p>
      <ul>
        <li>
          викликає метод preventDefault, щоб уникнути перезавантаження сторінки;
        </li>
        <li>
          збирає значення полів форми в один зручний об'єкт, де ім'я властивості
          - це ім'я поля, а значення поля - це значення властивості.
        </li>
      </ul>
      <h4>Типи полів</h4>
      <p>
        За замовчуванням компонент Field рендерить тег input. Щоб змінити тип
        поля, необхідно передати компоненту Field пропс as значенням якого є
        рядок - тип тега.
      </p>
      <pre>
        <code>{` <Field as="textarea" name="message" id={msgFieldId} rows="5" />`}</code>
      </pre>
      <h4>Селект</h4>
      <p>
        Для додавання select так само використовується компонент Field, якому
        передається пропс as="select". Список опцій вказується тегами option між
        відкриваючим та закриваючим тегами Field.
      </p>
      <pre>
        <code className="language-jsx">{`<Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>`}</code>
      </pre>
      <h4 id="validationLink">Валідація</h4>
      <pre>
        <code className="language-jsx">{`npm install yup`}</code>
      </pre>
      <pre>
        <code className="language-jsx">{`import * as Yup from "yup";`}</code>
      </pre>
      <p>
        Валідатор Yup використовує схеми валідації для перевірки значень.
        Об'являємо схему валідації об'єкта, оскільки значення форми зберігаються
        в стані Formik у вигляді об'єкта з властивостями.
      </p>
      <pre>
        <code className="language-jsx">{`const FeedbackSchema = Yup.object().shape({});`}</code>
      </pre>
      <p>
        У цьому об'єкті описуємо валідацію для кожної властивості об'єкта
        initialValues.
      </p>
      <p>Почнемо з імені користувача.</p>
      <pre>
        <code className="language-jsx">{`const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
});
`}</code>
      </pre>
      <p>У цьому коді для поля username ми валідуємо наступне:</p>
      <ul>
        <li>Це рядок</li>
        <li>Рядок повинен бути принаймні 2 символи</li>
        <li>Рядок повинен бути максимум 50 символів</li>
        <li>Властивість обов'язкова для заповнення</li>
      </ul>
      <p>
        Додаємо валідацію для інших полів форми. Розгляньте критерії валідації.
      </p>
      <pre>
        <code className="language-jsx">{`const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
	level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});`}</code>
      </pre>
      <p>Приклад валіжації мобільного телефону</p>
      <pre>
        <code className="language-jsx">{`const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')`}</code>
      </pre>
      <p>
        Зверніть увагу на валідатори властивості level. Значенням текстового
        поля може бути будь-який рядок, а в разі з селектом - лише заздалегідь
        визначене значення з набору опцій, тому використовуємо інший валідатор
        oneOf(), якому передається масив всіх можливих значень.
      </p>
      <p>
        Схема валідації готова, залишилося пов'язати її з формою. У компонента
        Formik є третій пропс validationSchema, в який треба передати схему
        валідації Yup.
      </p>
      <pre>
        <code className="language-jsx">{`const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good"
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />

        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} rows="5" />

        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
`}</code>
      </pre>
      <h4>Помилки валідації</h4>

      <p>
        Для того щоб відобразити користувачу помилки валідації, використовується
        компонент <code>ErrorMessage</code>.
      </p>
      <pre>
        <code className="language-jsx">{`import { ErrorMessage } from "formik";`}</code>
      </pre>
      <p>
        Додамо його до розмітки форми поруч із кожним полем, наприклад, створимо
        таку групу.
      </p>
      <pre>
        <code className="language-jsx">{`<div>
  <label htmlFor={nameFieldId}>Username</label>
  <Field type="text" name="username" id={nameFieldId} />
  <ErrorMessage name="username" component="span" />
</div>`}</code>
      </pre>
      <p>Є два момента:</p>
      <ul>
        <li>
          Значення атрибута <code>name</code> компонентів{" "}
          <code>ErrorMessage</code> та <code>Field</code> повинно співпадати. Це
          потрібно для того, щоб ErrorMessage виводиво повідомлення про помилку
          валідації для пов'язаного поля.
        </li>
        <li>
          За замовчуванням ErrorMessage відображає текст без тега, це не зручно,
          оскільки текст неможливо стилізувати. Проп component вказує, в якому
          тезі рендерити текст помилки.
        </li>
      </ul>
      <p>
        Додамо виведення помилок валідації для всіх полів форми фідбеку. На
        цьому все, форма готова, розмітка набрана, поля валідуються,
        користувачеві виводяться повідомлення про помилки валідації, при
        відправці форми маємо об'єкт значень всіх її полів.
      </p>
      <pre>
        <code className="language-jsx">{`import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});
const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};
const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema} >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" /> </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" /> </div>
        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" />
          <ErrorMessage name="message" component="span" /></div>
        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" component="span" />
        </div>
        <button type="submit">Submit</button> </Form> </Formik>);};`}</code>
      </pre>
      <h3 id="formik">Приклад використання Formik</h3>
      <FormikComponent />
      <h3>Домашнє завдання 3 - Книга контактів</h3>
      <ThirdHomework />
    </div>
    //  <pre>
    //     <code className="language-jsx">{``}</code>
    //   </pre>
  );
};

export default ThirdModule;
