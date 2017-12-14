//Symbol 可以设置一个独一无二的值
let a = Symbol('ss');
let b = Symbol('ss');
console.log(a===b) //false

//利用set方法消除数组中的重复成员(类似于数组，但是成员的值都是唯一的，没有重复的值。)
let arr = [1,1,1,3,1,65,13,84,32,154,135];
let clearRepeat = arr => Array.from(new Set(arr));
console.log(clearRepeat(arr)); //[ 1, 3, 65, 13, 84, 32, 154, 135 ]