//支持字符串遍历
for(let word of 'abc') {
  console.log(word) //a,b,c
}

//字符串匹配，只返回布尔值
let s = 'Hello world!';

s.startsWith('Hello', 0) // true 从第一个开始
s.endsWith('!', 0) // true 从结束开始
s.includes('o', 1) // true 包括

//repeat，重复
'x'.repeat(3) //xxx

//重头戏：模板字符串,是``不是''
let a = 'e'
let b = 'w'
let something = `H${a}llo
 ${b}orld`
 //Hello
 //world