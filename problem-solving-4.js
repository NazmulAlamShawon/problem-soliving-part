const friendsAge = [
    {name:  'nazmul', age: 32},
    {name:  'rubel',  age: 31},
    {name:  'sumon',  age: 29},
    {name:  'romel',  age: 26}
    
];
let lowestAge = friendsAge[0];
for (const age of friendsAge){
 
    if(age.age < lowestAge.age){
        lowestAge = age;
    }

}
console.log(lowestAge);