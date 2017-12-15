//Symbol 可以设置一个独一无二的值
let a = Symbol('ss');
let b = Symbol('ss');
console.log(a===b) //false

//利用set方法消除数组中的重复成员(类似于数组，但是成员的值都是唯一的，没有重复的值。)
let arr = [1,1,1,3,1,65,13,84,32,154,135];
let clearRepeat = arr => Array.from(new Set(arr));
console.log(clearRepeat(arr)); //[ 1, 3, 65, 13, 84, 32, 154, 135 ]

//map是一个可以使用对象等作为键的对象
//.set(key,value)设置键与键值
//.get(key)获取键值
//.size获取总长度
//.delete(key)删除
//.has(key)判断是否存在
//.clear()清除所有
//这些属性set方法也有()
let obj = new Map();
obj.set({a:1},2)
   .set(['b','c'],3);

console.log(obj.size); //2

obj.forEach(function(value,key,map){
	console.log(value,key,map) //2 { a: 1 } Map { { a: 1 } => 2, [ 'b', 'c' ] => 3 }
							   //3 [ 'b', 'c' ] Map { { a: 1 } => 2, [ 'b', 'c' ] => 3 }
})

//map转数组
console.log([...obj.keys()]) //[ { a: 1 }, [ 'b', 'c' ] ]
console.log([...obj.values()]) //[ 2, 3 ]

//还有只接受键为对象的WeakMap和WeakSet


//还有用于拦截的Proxy，因暂用不到，不做解释