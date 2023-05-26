//number数字
let num1:number = 123;
let num2:number = NaN;
let num3:number = Infinity;
let num4:number = 1.2;
let num5:number = 1e10;

//string字符
let str:string = "123";

//boolean布尔
let bool:boolean = true;
bool = false;

//symbol符号
let sym:symbol = Symbol(123);

//bigint大整数
let big:bigint = BigInt(123);

//undefined
let und1:undefined = undefined;
let und2 = undefined;
und2 = 123;
//在非严格模式下 undefined和null是所有类型的子类型
let a = 1;
// a = undefined;

//null
let nul:null = null;

//object对象
let obj1:object = {};
let obj2:object = new Object();
let obj3:object = [];
let obj4:object = /\s/g//正则表达式

//void 空
/* 
  void类型目前只有一种使用场景,那就是如果函数没有返回值,则返回值类型是void
*/
function fn():void{
  alert("123");
}

//any
let any:any = 123;
any = "123";
any = true;