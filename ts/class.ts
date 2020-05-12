var mang:number[] = [1,2,3,4,5,6,7,8,9,10];
class Car{
    numbe1:number;
    
    constructor(numbe1:number){
        this.numbe1 = numbe1;
    }
    
    max(mang):void{
        var n = mang.length;
        var max = mang[0];
        for (var i = 1; i < n; i++)
            if (max < mang[i])
            max = mang[i];
        return max;
    }
    min(mang):void{
        var n = mang.length;
        var min = mang[0];
        for (var i = 1; i < n; i++)
            if (min > mang[i])
            min = mang[i];
        return min;
    }
}

let e = new Car(1);
console.log("so lon nhat: " + e.max(mang));
console.log("so nho nhat: " + e.min(mang));