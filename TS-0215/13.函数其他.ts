{
  //配置可选参数
  function fn1(a:number,b?:number,c?:number):number{
    if(b&&c){
      return a+b+c;
    }
    else{
      return a;
    }
  }

  //函数配置默认值
  (a:number=1,b?:number,c?:number)=>{
    if(b&&c){
      return a+b+c;
    }
    else{
      return a;
    }
  }
}