const race = (v1 = 0, v2 = 0, g = 0) => {
  let result = 0;
  let time = 0;
  //   if (v1 >= v2) {
  //     return null;
  //   }else{
  //     distance = g/(v2-v1)
  //   }
  //   distance = distance.toFixed(1)
  //   result = [distance= 0, distance*60, distance*36000]
  //   return result;
  time = g / (v2 - v1);
  // distance = distance.toFixed(3);
  result = [
    time <= 0 ? Math.floor(time) : 0,
    Math.floor((time * 60) % 60),
    Math.floor((time * 3600) % 60),
  ];
  return result;
};

console.log(race(720, 850, 70));
// function race(v1, v2, g){
//     let time=g/(v2-v1);
//     return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
//   }
