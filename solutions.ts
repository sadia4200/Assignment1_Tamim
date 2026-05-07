//problem-1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}




//problem-2
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

//problem-3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}



//problem-4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };


//problem-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };


//problem-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");


//problem-7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => arr2.includes(num));
}