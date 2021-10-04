/* class User{
    name : string;
    constructor(_name:string){
          
        this.name = _name;
    }
}
const tom : User = new User("Том");
const header = this.document.getElementById("header");
header.innerHTML = "Привет " + tom.name; */

/* const create: number=123
console.log(create) */

function sum (x: number, y: number): number {
    return x + y;
};
function multiply (a: number, b: number): number {
    return a * b;
};
  
function mathOp(x: number, y: number, op: (a: number, b: number) => number): number{
  
    return op(x, y);
}
console.log(mathOp(10, 20, sum)); // 30 
console.log(mathOp(10, 20, multiply)); // 200 