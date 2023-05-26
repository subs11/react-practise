"use strict";
//number数字
let num1 = 123;
let num2 = NaN;
let num3 = Infinity;
let num4 = 1.2;
let num5 = 1e10;
//string字符
let str = "123";
//boolean布尔
let bool = true;
bool = false;
//symbol符号
let sym = Symbol(123);
//bigint大整数
let big = BigInt(123);
//undefined
let und1 = undefined;
let und2 = undefined;
und2 = 123;
//在非严格模式下 undefined和null是所有类型的子类型
let a = 1;
// a = undefined;
//null
let nul = null;
//object对象
let obj1 = {};
let obj2 = new Object();
let obj3 = [];
let obj4 = /\s/g; //正则表达式
//void 空
/*
  void类型目前只有一种使用场景,那就是如果函数没有返回值,则返回值类型是void
*/
function fn() {
    alert("123");
}
//any
let any = 123;
any = "123";
any = true;
