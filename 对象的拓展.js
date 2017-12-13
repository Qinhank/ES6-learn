//简化书写
let obj = (a,b) => {return{a,b}};
console.log(obj('a','b'))  //{ a: 'a', b: 'b' }

let func = {
	init() {
		console.log('yep!')
	}
}
func.init(); //yep!

//Generator
const obj2 = {
  * m() {
    yield 'hello world';
  }
};
console.log(obj2.m().next()) //{ value: 'hello world', done: false }

//属性名表达式
let str = 'hi'
let str2 = 'func2' 

let obj3 = {
	[str] : 'hello',
	[str2]() {
		return 'world'
	}
}
console.log(obj3[str]+obj3.func2()) //helloworld

//判断是否严格相等:Object.is()
console.log(Object.is(NaN,NaN)) //true
console.log(Object.is(+0,-0)) //false

//对象合并:Object.assign();
//该方法属于浅拷贝:如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
let target = {a:1,c:{d:'no cool',e:'cool!'}}
let source1 = {a:2}
let source2 = {c:{d:'yep!'}}
let source3 = 'cool'

Object.assign(target,source1,source2,source3)
console.dir(target) //{ '0': 'c', '1': 'o', '2': 'o', '3': 'l', a: 2, c: { d: 'yep!' } }

//深拷贝，需用到递归
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } 
    else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } 
    else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};

//用途
//克隆对象
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}

//合并多个对象
const merge = (target, ...sources) => Object.assign(target, ...sources);
//or
const {...newObj} = Object.assign(target,source1,source2,source3);

