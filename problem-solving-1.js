function randomNumberFind(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;     
  }
// console.log(randomNumberFind( 1,6));

/////

function randomFind(min,max,){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// console.log(randomFind(10,20));
///////
function randomFindsJump(min,max,){
    return Math.floor(Math.random() * (max - min + 10) ) + min;
}

console.log(randomFindsJump(5,100));
function randomFindsJump(min,max,){
    return Math.floor(Math.random() * (max - min + 20) ) + min;
}
