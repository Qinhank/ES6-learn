//6 种声明变量的方法（var、function、let、const、import、class）

/******let******/

/*let声明变量只在代码块中有效,一个块级作用域只能存在一个相同名称的let，否则报错*/
{
	var a = 1;
	let b = 2;
}
a //1
b //not defined

/*let声明不存在变量提升（变量可以在声明之前使用，值为undefined）*/
console.log(foo); // 输出undefined
var foo = 2;

console.log(bar); // 报错ReferenceError
let bar = 2;

/*let声明的暂时性死区*/
var a = 0;
{
	console.log(a) // 报错ReferenceError
	let a = 1;
	console.log(a) //1
}

//---------------------------------------------------------

/******const********/

/*const声明一个只读的常量*/
const a = 1234;
a = 456; //TypeError: Assignment to constant variable.

/*const同let，拥有块级作用域*/
{
	const a = 0;
}
a //Uncaught ReferenceError: MAX is not defined

/*不可改变const本身，但是可以通过地址改变值*/
const arr = [1,2,3,4];
arr = [2,2,2,2] //Assignment to constant variable.
arr[0] = 2;
arr //[2,2,3,4]

/*变量解构赋值*/
//1.---------
//old
let a = 0;
let b = 1;
let c = 2;
//now
let [a,b,c] = [0,1,2]

//2.-----------
let index = 0;
index++;
function test(index){
	if(index<=10){return undefined}
}
let [x=1] = [test(10)];

//3.------------
let arr = [1, 2, 3, 4, 5, 6, 7];
let {0 : first, [arr.length-1] : last} = arr;
first //1
last //7

//4.-----------
const [length : len] = 'hello';
len //5