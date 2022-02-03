const business = 450;
const  minster = 350;
const army = 600;

// if(business>ministar){
//     console.log('bussinesman is er pola bigger');
// }
// else {
//     console.log('minister er [pola bigger');
// }

if(business > minster && business > army ){
    console.log('businessis bigger');
}
else if (minster > business && minster > army){
    console.log('minister is a bigger')
}
else {
    console.log('army is bigger')
}
