/*交换变量值*/
let x = 0;
let y = 1;
[x, y] = [y, x];

/*取函数值更方便*/
function test(){
	return {
		a: 0,
		b: 1,
		c: 2
	}
}
let {a , b , c} = test;

/*该方法用在json上有奇效*/
let data = {};
$.ajax({
	url:'',
	dataType:'json',
	success:function(){
		let {param1, param2, param3} = callback.data;
	}
})

/*将数据放到全局或对象里*/
let data = {};
let aaa = {
	a: 0,
	b: 1,
	c: 2
}
({a:data.a, b:data.b, c:data.c} = aaa);
//传统写法：
//data.a = aaa.a;
//data.b = aaa.b;
//data.c = aaa.c;
data //{a:0,b:1,c:2}