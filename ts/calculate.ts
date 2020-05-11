 class Calculate {
  number1: number;
  number2: number;
  constructor(number1: number, number2: number) {
    this.number1 = number1;
    this.number2 = number2;
  }
  public tong() {
    return this.number1 + this.number2;
  }
  public hieu() {
    return this.number1 - this.number2;
  }
  public tich() {
    return this.number1 * this.number2;
  }
  public thuong() {
    return this.number1 / this.number2;
  }
}

const c = new Calculate(100, 20);
console.log(`Tong: `, c.tong());
console.log(`Hieu: `, c.hieu());
console.log(`Tich: `, c.tich());
console.log(`Thuong: `, c.thuong());


class Caculate1 {
  num1 :number;
  num2: number;

  constructor(num1:number, num2:number){
    this.num1 = num1;
    this.num2 = num2;
  }

  public cong(){
    return this.num1 + this.num2;
  }
  public tru(){
    return this.num1 - this.num2;
  }
  public nhan(){
    return this.num1 * this.num2;
  }
  public chia(){
    return this.num1 / this.num2;
  }

}
var d = new Caculate1(10,20);
console.log("tong la : " + d.cong());
console.log("hieu la : " + d.tru());
console.log("nhan la : " + d.nhan());
console.log("chia la : " + d.chia());
