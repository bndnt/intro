import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
const TypeScript = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>TypeScript</h1>
      <p>
        TypeScript - це мова програмування від Microsoft, яка розширює
        JavaScript, додаючи статичну типізацію. Це суперсет JavaScript, тобто
        будь-який коректний код JS є коректним у TS. Головна перевага TypeScript
        - можливість знаходити помилки ще до запуску коду, що робить розробку
        надійнішою.
      </p>
      <div className="topicBlock">
        <h2>Прості типи</h2>
        <p>
          У TypeScript, як і в JavaScript, є набір простих типів, які називають
          скалярними. Вони зберігають лише одне значення і є основою для роботи
          з даними.
        </p>
        <p>
          <b>Логічний</b> тип (boolean) використовується для зберігання значень
          true або false, що часто застосовується в умовних операціях.
        </p>
        <pre>
          <code className="language-jsx">{`const isOnline: boolean = false;`}</code>
        </pre>
        <p>
          <b>Числовий</b> тип (number) використовується для типізації будь-яких
          чисел.
        </p>
        <pre>
          <code className="language-jsx">{`const age: number = 26;     
const weight: number = 3.14;
`}</code>
        </pre>
        <p>
          <b>Текстовий</b> тип (string) використовується для рядків.
        </p>
        <pre>
          <code className="language-jsx">{`const username: string = "Jacob";`}</code>
        </pre>
        <p>
          Існують два спеціальні типи - null i undefined, які використовуються
          для <b>позначення відсутності значення.</b>
        </p>
        <pre>
          <code className="language-jsx">{`// Даних про користувача ще немає
let user: null = null;

// Налаштування ще не ініціалізовані
let config: undefined;`}</code>
        </pre>
        <h3>Виведення типів</h3>
        <p>
          Якщо змінній при оголошенні присвоєно значення, TypeScript автоматично
          визначає її тип. Тому в багатьох випадках вказувати тип вручну немає
          необхідності. Це називається виведенням типів (type inference) і
          працює не тільки для примітивних значень, а й для масивів, об'єктів та
          функцій.
        </p>
        <pre>
          <code className="language-jsx">{`let age = 26;         // TypeScript виводить тип як number
let weight = 3.14;   // TypeScript виводить тип як number
let username = "Jacob"; // TypeScript виводить тип як string
let isOnline = false;  // TypeScript виводить тип як boolean
let user = null;       // TypeScript виводить тип як null
let config = undefined; // TypeScript виводить тип як undefined`}</code>
        </pre>
        <p>
          Якщо після оголошення змінної спробувати присвоїти значення іншого
          типу, TypeScript видасть помилку:
        </p>
        <pre>
          <code className="language-jsx">{`let age = 26; // TypeScript виводить тип як number
age = "Jacob"; 
// ❌ Error: Type 'string' is not assignable to type 'number'

let isOnline = false; // TypeScript виводить тип як boolean
isOnline = 5; 
// ❌ Error: Type 'number' is not assignable to type 'boolean'
`}</code>
        </pre>
      </div>
      <div className="topicBlock">
        <h2>Типізація об'єктів</h2>
        <p>
          Об'єкти у TypeScript працюють так само як і в JavaScript. Різниця в
          тому, що в TypeScript ми можемо описувати структуру об'єкта за
          допомогою типізації.
        </p>
        <pre>
          <code className="language-jsx">{`const user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};`}</code>
        </pre>
        <p>
          TypeScript не дозволить записати в ці поля значення іншого типу або
          пропустити обов'язкове поле при оголошенні.
        </p>
        <p>
          Якщо при оголошенні об'єкта пропустити обов'язкове поле, TypeScript
          також видасть помилку через те, що відсутня властивість.
        </p>
        <pre>
          <code className="language-jsx">{`const user: { name: string; age: number } = {
  name: "Alice"
};
// ❌ Error: Property 'age' is missing in type '{ name: string; }' 
// but required in type '{ name: string; age: number; }'.`}</code>
        </pre>
        <p>
          А якщо для властивості вказати значення неправильного типу при
          оголошенні отримаємо наступну помилку.
        </p>
        <p>
          Якщо спробувати звернутися до неіснуючого поля, TypeScript також
          видасть помилку:
        </p>
        <h3>Використання інтерфейсів</h3>
        <p>
          Якщо є декілька об`єктів з однаковим типом, незручно дублювати їх опис
          перед кожним оголошенням.Для цього можна використовувати інтерфейси
          (interface):
        </p>
        <pre>
          <code className="language-jsx">{`// Оголошуємо інтерфейс користувача
interface User {
  name: string;
  age: number;
}

// Використовуємо інтерфейс для типізації
const poly: User = {
  name: "Poly",
  age: 25
};

const jacob: User = {
  name: "Jacob",
  age: 36
};
`}</code>
        </pre>
        <h4>Опціональні (?) та readonly поля</h4>
        <p>
          TypeScript дозволяє позначати деякі поля як опціональні, тобто такі,
          які можуть бути відсутні в об'єкті. Для цього після імені властивості
          додається ? при описі типу.
        </p>
        <pre>
          <code className="language-jsx">{`
interface User {
  name: string;
  age?: number; // Це поле може бути відсутнім
}

const poly: User = {
  name: "Poly"
}; 

console.log(poly.age); // ✅ Не буде помилки, оскільки age може бути відсутнім

const jacob: User = {
  name: "Jacob",
  age: 36
};

console.log(jacob.age);
`}</code>
        </pre>
        <p>
          Також можна позначити поле як readonly, щоб його не можна було
          змінювати після ініціалізації.
        </p>{" "}
        <pre>
          <code className="language-jsx">{`interface User {
  readonly id: number; // Це поле тільки для читання
  name: string;
}

const user: User = {
  id: 123,
  name: "Alice"
};

user.id = 456; // ❌ Помилка: Cannot assign to 'id' because it is a read-only property.`}</code>
        </pre>
      </div>

      <div className="topicBlock">
        <h2>Типізація масивів</h2>
        <p>
          Масиви в TypeScript - це списки значень, так само як і в JavaScript.
          Завдяки статичній типізації вони допомагають уникати помилок при
          роботі з даними.
        </p>
        <pre>
          <code className="language-jsx">{`const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];`}</code>
        </pre>
        <pre>
          <code className="language-jsx">{`const numbers: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];`}</code>
        </pre>
        <p>{`Обидва варіанти є еквівалентними, проте у стандартних сценаріях рекомендується використовувати тип[], оскільки він коротший і зрозуміліший. Синтаксис Array <T> частіше застосовується у випадках, коли працюємо з узагальненнями (generics), про які ми поговоримо пізніше.`}</p>
        <p>
          TypeScript також автоматично виводить типи для масивів, тому в простих
          випадках тип можна не задавати:
        </p>
        <pre>
          <code className="language-jsx">{`// TypeScript виведе тип як number[]
const numbers = [1, 2, 3]; 

// TypeScript виведе тип як string[]
const names = ["Alice", "Bob"]; `}</code>
        </pre>
      </div>

      <div className="topicBlock">
        <h2>Власні типи</h2>
        <p>
          TypeScript дозволяє комбінувати типи за допомогою операторів Union
          Type (|) та Intersection Type (&). Це корисно, коли змінна може мати
          кілька можливих типів або коли потрібно об'єднати кілька типів в один.
        </p>
        <h3>Об'єднання</h3>
        <p>
          <b>Union</b> дозволяє змінній мати один із кількох типів. Це дуже
          зручно, коли хочемо визначити змінну, яка може приймати різні типи
          даних. Тобто це буквально перелічення можливих типів, які
          перераховуються через вертикальну риску |.
        </p>{" "}
        <pre>
          <code className="language-jsx">{`// Union для ідентифікаторів, які можуть бути рядком або числом
let userId: string | number = 123; // ✅
userId = "user-456"; // ✅
userId = false; // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.`}</code>
        </pre>
        <p>
          Це корисно, коли значення може мати кілька варіантів, наприклад,
          вхідні дані у формах або дані з API, які можуть бути різних форматів.
        </p>
        <p>
          Об'єднання також можна використовувати для типізації властивостей
          об'єкта:
        </p>
        <pre>
          <code className="language-jsx">{`interface User {
  id: number;
  role: "admin" | "user";
}

const poly: User = {
  id: 1,
  role: "admin"
};

const jacob: User = {
  id: 2,
  role: "user"
};`}</code>
        </pre>
      </div>

      <div className="topicBlock">
        <h2>Власні та літеральні типи</h2>
        <p>
          Для зручності та повторного використання можна створювати власні типи
          за допомогою type.
        </p>
        <pre>
          <code className="language-jsx">{`type Id = string | number;

let productId: Id = "45gkw8"; // ✅
productId = 856; // ✅
productId = false; // ❌ Error: Type 'boolean' is not assignable to type 'Id'.
`}</code>
        </pre>
        <p>
          <b>Літеральні</b> типи дозволяють обмежити можливі значення змінної
          конкретними значеннями.
        </p>
        <pre>
          <code className="language-jsx">{`type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

let status: OrderStatus = "pending"; // ✅
status = "shipped"; // ✅
status = "returned"; // ❌ Error: Type '"returned"' is not assignable to type 'OrderStatus'.`}</code>
        </pre>
        <h3>Intersection (&)</h3>
        <p>
          Intersection дозволяє створювати новий тип, який поєднує властивості
          двох або більше існуючих типів.
        </p>{" "}
        <pre>
          <code className="language-jsx">{`// Базова структура HTTP-відповіді
interface HttpResponse {
  status: number;
  message: string;
}

// Специфічна відповідь для користувача
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Поєднання базової відповіді з даними користувача
type UserResponse = HttpResponse & { data: UserData };

const response: UserResponse = {
  status: 200,
  message: "Success",
  data: {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
  }
};

console.log(response.data.name); // Alice
`}</code>
        </pre>
      </div>

      <div className="topicBlock">
        <h2>Типізація функцій</h2>
        <p>
          TypeScript дозволяє вказувати типи аргументів і значення, яке повертає
          функція. Це допомагає уникнути помилок і зробити код більш
          передбачуваним.
        </p>
        <h3>Типізація аргументів</h3>
        <p>
          Аргументи функції можна типізувати так само, як і звичайні змінні:
        </p>
        <pre>
          <code className="language-jsx">{`function greet(name: string, age: number): void {
  console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);
}

greet("Alice", 30); // ✅
greet(25, "Alice"); 
// ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
`}</code>
        </pre>
        <h3>Тип значення, яке повертає функція</h3>
        <p>Якщо функція повертає значення, його тип теж можна вказати:</p>
        <pre>
          <code className="language-jsx">{`function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(5, 10); // ✅ result матиме тип number`}</code>
        </pre>
        <p>
          Якщо реальний тип значення, яке повертає функція, не збігається з
          оголошеним, TypeScript видасть помилку:
        </p>
        <pre>
          <code className="language-jsx">{`function sum(a: number, b: number): number {
  return "I'm a string"; // ❌ Error: Type 'string' is not assignable to type 'number'
}`}</code>
        </pre>
        <p>
          TypeScript також може автоматично вивести тип значення що
          повертається, якщо він явно не вказаний:
        </p>
        <pre>
          <code className="language-jsx">{`function sum(a: number, b: number) {
  return a + b; 
}

const result = sum(5, 10); // ✅ TypeScript виведе тип як number`}</code>
        </pre>
        <p>
          Розглянемо задачу, де необхідно написати функцію, що отримує список
          користувачів та повертає імена цих користувачів у вигляді масиву
          рядків. Ось як ми можемо типізувати таку функцію:
        </p>
        <pre>
          <code className="language-jsx">{`interface User {
  id: number;
  name: string;
}

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']
`}</code>
        </pre>
        <p>
          У цьому прикладі функція getUserNames приймає масив об'єктів типу User
          та повертає масив рядків.
        </p>
        <h3>Опціональні параметри</h3>
        <pre>
          <code className="language-jsx">{`function greet(name: string, age?: number) {
  if (age !== undefined) {
    console.log(\`Hello, my name is ${name} and I am ${age} years old.\`);
  } else {
    console.log(\`Hello, my name is ${name}.\`);
  }
}

greet("Alice", 30); // ✅
greet("Bob"); // ✅
greet("Jacob", true); // ❌`}</code>
        </pre>
        <p>
          Якщо параметр позначений ?, його можна не передавати, але якщо він
          буде переданий, то має відповідати зазначеному типу.
        </p>
      </div>

      <div className="topicBlock">
        <p>
          Перелічення дозволяє створювати набір іменованих констант. Це корисно,
          коли потрібно описати перелік можливих значень у вигляді констант.
        </p>
        <h2>Перелічення (enum)</h2>
        <pre>
          <code className="language-jsx">{`enum Status {
  Loading = 1,
  Success = 200,
  Error = 500
}
console.log(Status.Success); // 200`}</code>
        </pre>
        <h3>Рядкові значення</h3>
        <pre>
          <code className="language-jsx">{`enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"`}</code>
        </pre>
        <h3>Enum чи Union Type?</h3>
        <p>
          <b>Enum</b> - це список іменованих констант, які можна використовувати
          як змінні.
        </p>
        <p>
          <b>Union Type</b> - це просто список допустимих значень, які можна
          присвоювати змінним.
        </p>
        <p>Використовуй enum, якщо:</p>
        <ul>
          <li>
            Потрібен конкретний набір значень, який можна перераховувати
            (наприклад, Object.values(Status)).
          </li>
          <li>
            Значення можуть мати чіткі асоціації (наприклад, Success = 200,
            Error = 500).
          </li>
          <li>
            Використовується у великому проєкті з інтеграцією у сторонні API або
            з константними значеннями (наприклад, ролі користувачів, статуси
            замовлення).
          </li>
        </ul>
        <p></p>
        <ul>
          <li>
            Значення ніколи не змінюються і не потребують додаткових
            властивостей.
          </li>
          <li>
            Використовується у простих ситуаціях, де потрібен обмежений набір
            значень (наприклад, статуси запитів).
          </li>
        </ul>
      </div>
      <div className="topicBlock">
        <h2>Узагальнені типи (generics)</h2>
        <p>
          Generics (узагальнені типи) у TypeScript дозволяють створювати гнучкі
          функції та структури, що можуть працювати з будь-якими типами даних.
          Основна ідея полягає в тому, що вони дозволяють визначити
          "узагальнений" тип, який потім може бути спеціалізований для роботи з
          різними іншими типами. Замість того, щоб визначати окремі функції для
          кожного можливого типу даних, ви можете визначити одну функцію, яка
          працює з "будь-яким" типом даних.
        </p>
        <ul>
          Generics допомагають:
          <li>
            уникати дублювання коду, дозволяючи функціям та структурам працювати
            з різними типами;
          </li>
          <li>
            забезпечувати гнучкість, не прив`язуючи код до конкретного типу
            даних.
          </li>
        </ul>
        <h3>Generics у функціях</h3>
        <pre>
          <code className="language-jsx">{`function myFunction<T>(value: T): T {
  return value;
}

myFunction<string>("Hello"); // "Hello"
myFunction<number>(42); // 42`}</code>
        </pre>
        <ul>
          У цій функції T є узагальненим типом. Це означає, що:
          <li>T є певним типом, який буде вказаний при виклику функції.</li>
          <li>
            Функція приймає аргумент типу value: T і повертає значення того ж
            типу T.
          </li>
          <li>
            Ми можемо передати будь-який тип, і TypeScript автоматично його
            підставить як T.
          </li>
        </ul>
        <p>
          Generics корисні для роботи з масивами. Наприклад, напишемо функцію,
          яка приймає масив та повертає його перший елемент.
        </p>
        <pre>
          <code className="language-jsx">{`function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]); // 10
getFirstElement<string>(["Alice", "Bob"]); // "Alice"`}</code>
        </pre>
        <p>
          TypeScript може автоматично виводити тип під час використання
          узагальнених функцій.
        </p>
        <pre>
          <code className="language-jsx">{`function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3, 4, 5]);
// TypeScript виводить як
// function getFirstElement<number>(arr: number[]): number

getFirstElement(['a', 'b', 'c', 'd']);
// TypeScript виводить як
// function getFirstElement<string>(arr: string[]): string`}</code>
        </pre>
        <h3>Generics у структурах даних</h3>
        <p>
          Generics можна використовувати не тільки у функціях, а й в інтерфейсах
          та об'єктах.
        </p>{" "}
        <pre>
          <code className="language-jsx">{`interface List<T> {
  items: T[];
  getItem: (index: number) => T;
}

const numberList: List<number> = {
  items: [1, 2, 3],
  getItem(index) {
    return this.items[index];
  },
};

const stringList: List<string> = {
  items: ['Alice', 'Bob'],
  getItem(index) {
    return this.items[index];
  },
};`}</code>
        </pre>
        <ul>
          Тут:
          <li>
            List{`<T>`} - це узагальнений інтерфейс для будь-якого типу T.
          </li>
          <li>items: {`T[]`} - масив елементів типу T.</li>
          <li>
            getItem(index: number): T - метод, який повертає значення того ж
            типу T.
          </li>
        </ul>
        <p>Цей підхід дозволяє створювати багаторазові інтерфейси.</p>
      </div>

      <div className="topicBlock">
        <h2></h2>
      </div>

      <pre>
        <code className="language-jsx">{``}</code>
      </pre>
    </div>
  );
};

export default TypeScript;
