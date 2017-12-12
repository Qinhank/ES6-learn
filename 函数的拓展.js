//支持直接在参数上指定默认值了(已结声明过的不可再用let、const声明)
function test (a=0, b=1) {
  console.log(a,b)
}
test();//0 1


//与解构赋值一起使用写插件
  function Method ({
  	ele = 'body',
  	color = 'red'
  } = {}){
  	$(ele).css('background',color);
  }
  let test = new Method({
  	ele: 'document',
  	color: 'yellow'
  });

  // or
  function Method2 (a, {
  	b = 0,
  	c = {},
  	f = 3} = {}){
  	console.log(a,b,c.d,c.e,f);
  }


//rest参数，可以将函数中的参数变成任意个
function rest(arr,...items) {
  items.forEach(function (item) {
  	arr.push(item)
  })
  return arr
}
rest([],1,2,3,4,5,6) //[1,2,3,4,5,6]


//重头戏：箭头函数
//下面将上面的代码全都改为箭头函数
var test = (a=0, b=1) => {console.log(a,b)}

let rest = (arr,...items) => {
	items.forEach(function (item) {
	  arr.push(item)
	});
	return arr
}

//箭头函数的this指向的是它外部的this
const num = 1
let getNum = num =>{console.log(this)};
getNum() //Window{}


//报错，构造函数不能用箭头函数写,因为箭头函数没有自己的this
var Method = ({ele='body',color='red'}={}) =>{$(ele).css('background',color);}
new Method()

//尾调用优化
function tail () {
  const a = 1;
  const b = 2;
  return c(a+b)
}
//当在方法tail中，最后一句返回执行的是一个函数时（在不需要外层函数的情况下），会将调用过的数据删除（删除调用帧），最终保留一个c的方法从而达到优化