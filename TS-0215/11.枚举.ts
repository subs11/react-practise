/* 
  enum light {
    red = 1,
    green = 2,
    yellow = 3,
  }

  // console.log(light.red);
  console.log(light["red"]);
  console.log(light["green"]);
  // console.log(light.yellow);
  console.log(light["yellow"]);
   */
  enum light {
    red = 4,
    green = 8,
    yellow,
  }
  
  /* var light2 = {
    red:0,
    green:1,
    yellow:2
  } */
  
  console.log(light["red"]); //0
  console.log(light["green"]); //1
  console.log(light["yellow"]); //2
  
  console.log(light[0]); //red
  console.log(light[1]); //green
  console.log(light[2]); //yellow


