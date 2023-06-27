export {}
//Primitives
let age: number;
age = 12;

let username: string | string[];
username = "Max";

let isTeacher: boolean;
isTeacher = true;

//More complex types: arrays, objects
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: "Max",
    age: 32
};

let people: Person[];

//Type inference

let course: string | number = "React - The Complete guide";
course = 12341;

//Functions and types

function add(a: number, b: number) {
    return a + b;
};

function print(value: any) {
    console.log(value); //undefined
    
};

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");