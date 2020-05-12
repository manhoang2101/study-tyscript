class Course{
    id : string;
    name: string;
    price : number;

    constructor(id: string, name:string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showCourceInfo():void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}

class CourseMobie extends Course{
    auth : string;
    constructor(id: string, name:string, price: number, auth: string){
        super(id, name, price);
        this.auth = auth;
    }
    showCourceInfo(){
        super.showCourceInfo();
        console.log(this.auth);
    }
}

var courseObj = new Course("Man01", "hoang man", 21);
courseObj.showCourceInfo();

var courseMobieObj  = new CourseMobie("Man02", "Khong", 22,"Nono");
courseMobieObj.showCourceInfo();


class showInfo<A, B,C>{
    id:A;
    name: B;
    price: C;

    constructor(id:A, name:B, price:C){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo(){
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }

}
let product1 = new showInfo<string, string, number>("1", "shoo", 2);
let product2 = new showInfo(2, 2, 2);
let product3 = new showInfo(3, 2, true);



product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();



class Cacu {
    numb1: number;
    numb2: number;

    constructor(numb1:number, numb2: number){
        this.numb1 = numb1;
        this.numb2 = numb2;
    }

    public tongg(){
      return  this.numb1 + this.numb2;
    }
    public truu(){
        return  this.numb1 - this.numb2;
    }
    public nhann(){
        return  this.numb1 * this.numb2;
    }
    public chiaa(){
        return this.numb1 / this.numb2;
    }

}
let a = new Cacu(20,10);
console.log("tong la" + a.tongg());
console.log("tru la" + a.truu());
console.log("nhan la" + a.nhann());
console.log("chia la" + a.chiaa());