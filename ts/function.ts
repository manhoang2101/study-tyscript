// if, else

let x: number = 10, y: number = 20;
if(x>y){
    console.log('x lon hon y');
}else{
    console.log('x nhỏ hon y');
}



// for
for (let i = 0; i < 10; i++) {
  console.log(""+ i);
}

//for
var numm: number[] = new Array(1,2,3,4,5);
for (var i =0;i<numm.length; i++ ){
    console.log(numm[i]);
}


// Ham tinh tong so le trong mang
var mang = [1,2,3,4,5,6,7,8,9];
function tong_so_le(mang){
    var tong = 0;
    for (var i = 0; i < mang.length; i++ ){
        if (mang[i] % 2 !=0){
            tong += mang[i];
        }
    }
    return tong;
}
console.log("tong so le la " + tong_so_le(mang));


// tìm số lớn nhất và nhỏ nhất trong mảng

var mang:number[] = [1,2,3,4,5,6,7,8,9];
function max(mang){
    var n = mang.length;
    var max = mang[0];
    for (var i = 1; i < n; i++)
        if (max < mang[i])
            max = mang[i];
    return max;
    
}
function min(mang){
    var n = mang.length;
    var min = mang[0];
    for (var i = 1; i < n; i++)
        if (min > mang[i])
            min = mang[i];
    return min;
}
console.log("so lon nhat trong mang la: " + max(mang));
console.log("so nho nhat trong mang la: " + min(mang));

