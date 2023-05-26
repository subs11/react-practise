//函数声明 定义函数
function fn1 (a:number,b:number): number{
  return a+b;
}
//函数表达式
const fn2 = function (a:number,b:number):number{
  return a+b;
}
//函数表达式箭头函数
const fn3 = (a:number,b:number):number=>{
  return a+b;
}
//可以把函数类型提前声明出来,然后注释给函数
type fn4Type = (a:number,b:number)=>number;
const fn4:fn4Type= (a,b)=>{
  return a+b;
}
const fn5:(a:number,b:number)=>number= (a,b)=>{
  return a+b;
}
