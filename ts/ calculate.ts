export class Calculate {
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
