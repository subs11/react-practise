{
  type ns=string|number;
  let a:ns = '123';
  a = "123";

  const b:ns[] = [1,2,"3"];

  type shopListType = ns[];
  const c:shopListType = [1,2,"3"];
}