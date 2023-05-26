"use strict";
{
    //配置可选参数
    function fn1(a, b, c) {
        if (b && c) {
            return a + b + c;
        }
        else {
            return a;
        }
    }
    //函数配置默认值
    (a = 1, b, c) => {
        if (b && c) {
            return a + b + c;
        }
        else {
            return a;
        }
    };
}
