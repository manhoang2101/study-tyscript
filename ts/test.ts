// boolean
let free : boolean = true;
free = false;
console.log(free);

// number
let score : number = 10;
console.log(score);

// string
let elm : string = "ABC";
elm = "ABCDEM";
console.log(elm);

// array
let arrNumber : Array<number> = [1,2,3];
console.log(arrNumber);
let arrString : string[] = ["a", "b", "c"];
console.log(arrString.push("d"));
console.log(arrString);


function cong(so1, so2):number{
    return so1 + so2;
}
function tru(so1, so2): number{
    return so1 - so2;
}
function nhan(so1, so2): number{
    return so1 * so2;
}
function chia(so1, so2): number{
    return so1 / so2;
}
console.log(cong(20,10));
console.log(tru(20,10));
console.log(nhan(20,10));
console.log(chia(10, 5));



class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());




class Task {
    id: number;
    name: string;
    state: string;

    constructor(id:number, name: string, state: string){
        this.id = id;
        this.name = name;
        this.state = state;
    }
    showTaskInfo(){
        console.log(`${this.id}-${this.name}-${this.state}`);
    }
}
let taskObj = new Task(1, "man", "dsd");
console.log(taskObj);
taskObj.showTaskInfo();





class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);