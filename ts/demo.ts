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
