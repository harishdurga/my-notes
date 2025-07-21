let myName: string = "John"
let myAge: number;
myAge = 21

function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName
}

let myCompany = "NA" //Type inferance

//flexible types

let userInput: any

userInput = "Hey there"
userInput = 32
userInput = [1, 2, 3]

//Union types

let userPhoneNumber: string | number;

//Arrays

let hobbies = ["Badminton", "Writing"]
hobbies.push("coding")

let flags: number[];
flags = [1, 2, 3]

//Advanced Arrays
let userInputs: (string | number)[];
userInputs = []
userInputs.push(3)
userInputs.push("Hey")

//Another way of writing array types

let userInputs2: Array<(string | number)>;
userInputs2 = []
userInputs2.push(3)
userInputs2.push("Hey")

//Tuple

let possibleResults: [number, number]
possibleResults = [1, 2]
possibleResults.push(3)
possibleResults.push(4)
possibleResults.push(5)


//Object Types
//Inferred object type
let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        name: string;
        id: number;
    }
} = {
    name: "John",
    age: 21,
    hobbies: ["Badminton", "Writing"],
    role: {
        name: "admin",
        id: 1
    }
}

//Must not be null
let val: {} = "Hey there"
val = null
val = undefined


let data: Record<string, any>; //Record is a generic type. A flexible object type
data = {
    name: "John",
    age: 21,
    hobbies: ["Badminton", "Writing"],
    role: {
        name: "admin",
        id: 1
    }
}

//Enums
enum Role {
    ADMIN, //0
    EDITOR, //1
    GUEST //2
}

enum Role2 {
    ADMIN = "Admin",
    EDITOR = "Editor",
    GUEST = "Guest"
}



let myRole: Role = "Admin"; //Error
myRole = Role.ADMIN; //No error
let myRole2: Role2 = Role2.ADMIN; //No error


//Literal Types

let allowedRoles: "admin" | "editor" | "guest"; // this is more popular than enum in TS comm
allowedRoles = "admin";
allowedRoles = "custom";//a custom value is not acceptable


let allowedFlags: [1 | -1, 2 | -2]
allowedFlags = [-1, 2] //Not allowed
allowedFlags = [1, 2] //Allowed
allowedFlags = [-1, -2]
allowedFlags = [-2, 1]

//Type Aliases
type UserRole = "admin" | "editor" | "guest";
let allowedRoles2: UserRole;
allowedRoles2 = "editor"

type User = {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        name: string;
        id: number;
    }
};
let user2: User;
user2 = {
    name: "John",
    age: 21,
    hobbies: ["Badminton", "Writing"],
    role: {
        name: "admin",
        id: 1
    }

}

//Function return values type
function add(a: number | string, b: number | string): (number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    }
    return `${a}` + `${b}`
}

//Void type
function printMsg(msg: string): void {
    console.log(msg)
}

//Never type
function throwError(msg: string): never {
    throw new Error(msg) //Not TS specific. JS provided. This means this function will never return/finish
}

//Function Types
//IN JS functions are values
type AddFn = (a: number, b: number) => number;
let addFn: AddFn;
addFn = (a: number, b: number) => {
    return a + b
}

console.log(addFn(1, 2));

const subFn = (a: number, b: number) => a - b

console.log(subFn(1, 2))

function performJob(callback: (num: number) => void) {
    callback(10)
}

performJob((num) => console.log(num));

//null and undefined types
let nullableVar: string | null;
nullableVar = null;
nullableVar = "Hey"

let undefinedVar: string | undefined;
undefinedVar = undefined;
undefinedVar = "Hey"

//Inferred null and Type Narrowing
const inputEl = document.getElementById("input");
console.log(inputEl?.innerText) //Not TS specific but JS features. It tell to perform the next action only if not null. It is called optional chaining

//forcing not null
const inputEl2 = document.getElementById("input")!; //telling TS this will not yeild null
console.log(inputEl2.innerText)// runtime error will occur if this yields null

//Type Casting
//as operator
const inputEl3 = document.getElementById("input") as HTMLInputElement; //telling TS this is HTML text input element
console.log(inputEl3.value)
//Runtime error will be thrown if the document.getElementById("input") doesn't turn out to be Input element

//Unknown type
//This type forces the developer to perform type checks
function process(val: unknown) {
    if (typeof val === "string") {
        console.log(val.toUpperCase())
    }
    else if (typeof val === "number") {
        console.log(val.toFixed(2))
    }
    else {
        console.log("Unknown type")
    }
}


//Optional Values
//The ? beside b tells the TS b is optional
function add2(a: number, b?: number) {
    if (b) {
        return a + b
    }
    return a
}
console.log(add2(1))
console.log(add2(1, 2))

//Optional Properties
type User2 = {
    name: string;
    age?: number; //This is an optional property
}
let user3: User2;
user3 = {
    name: "John",
    age: 21
}
let user4: User2;
user4 = {
    name: "John"
}


//Nullish Coalescing (??)
//Not TS specific
//provide a default value when a variable is either null or undefined
const didUserProvidedInput = user4 ?? false;





