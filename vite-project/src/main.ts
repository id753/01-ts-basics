import "./style.css";

// Задача 1. Типізація скалярних значень (файл task-1.ts)

// У цьому фрагменті коду оголошені три змінні з різними типами значень: текст, число і булеве значення.

const name: string = "Alice";
const age: number = 30;
const isOnline: boolean = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);

// Завдання:

//     Додай до кожної змінної явну типізацію.
//     Переконайся, що TypeScript правильно визначає тип, і не видає помилку.
//     Залиш назви змінних і їх значення без змін.

// Задача 2. Інтерфейси (файл task-2.ts)

// У цьому фрагменті коду є об'єкт product, який описує товар.
interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};
console.log(`Product: ${JSON.stringify(product)}`);

// Завдання:

//     Створи інтерфейс Product, який описує структуру цього об’єкта.
//     Зроби поле id тільки для читання – воно не повинно змінюватись після створення об’єкта.
//     Зроби поле description необов’язковим – не всі товари можуть його мати.
//     Типізуй змінну product за допомогою створеного інтерфейсу.
//     Залиш властивості обʼєкта product і їх значення без змін.

// Задача 3. Типізація масивів (файл task-3.ts)

// У цьому коді є три масиви з різними типами даних: рядки, числа та об’єкти.

const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product2 {
  id: number;
  title: string;
}
const products2: Product2[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products2)}`);

// Завдання:

//     Додай тип для масиву рядків usernames, використовуючи синтаксис [].
//     Додай тип для масиву чисел ratings, використовуючи синтаксис [].
//     Для масиву products:

//     Створи окремий інтерфейс Product для елементів масиву.
//     Типізуй сам масив за допомогою цього інтерфейсу.

// 4. Залиш елементи масиву products без змін.

// Задача 4. Функції (файл task-4.ts)

// Функція printUserInfo виводить інформацію про користувача, включаючи ім’я, вік і (опціонально) email.

function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");

// Завдання:

//     Додай явну типізацію до параметрів функції: name, age та email.
//     Зроби параметр email опціональним – щоб функція могла працювати як з ним, так і без нього.
//     Типізуй повернення функції, зауваж що вона нічого явно не повертає.
//     Залиш реалізацію функції без змін.

// Задача 5. Union Type (файл task-5.ts)

// Функція logStatus приймає рядок status і виводить відповідне повідомлення.

function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
// Завдання:
//     Типізуй параметр status так, щоб дозволити тільки три конкретні рядкові значення: "loading", "success", "error"
//     Переконайся, що TypeScript не дозволяє передати будь-яке інше значення.
//     Типізуй повернення функції, зауваж що вона нічого явно не повертає.
//     Залиш реалізацію функції без змін.

// Задача 6. Узагальнені типи (файл task-6.ts)

// Функція getFirstElement приймає масив і повертає його перший елемент.

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

// Завдання:

//     Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
//     Додай явну типізацію дженериків у виклики функцій.
//     Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
//     Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

// Задача 7. Типізація Promise (файл task-7.ts)

// Функція getMessage повертає проміс, який через затримку повертає рядок.

function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));

// Завдання:

//     Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
//     Переконайся, що значення, з яким виконається проміс, – це рядок (string).

// Завдання 8. HTTP-запити (файл task-8.ts)

// Функція fetchPosts робить GET-запит до API та повертає список постів.

import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

// Завдання:

//     Інсталюй бібліотеку axios командою npm i axios
//     Створи інтерфейс Post, який описує об'єкт поста з такими полями:

//     id: число
//     title: рядок
//     body: рядок

// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.
