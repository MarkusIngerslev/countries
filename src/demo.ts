let n: number;

n =2;

const numbers:number[] = [];
const numbers2:Array<number> = [];

numbers2.push(2);

interface Person {
    id?: string;
    name: string;
    age: number;

}

const persons: Person[] = [];
// const person2s:Array<Person> = [];

persons.push({ name: 'John', age: 25});

function createPerson(name: string, age: number): Person {
    return { name, age };
}

persons.push(createPerson('Jane', 24));