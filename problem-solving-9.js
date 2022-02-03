function findLargest(first,second){
    if (first > second){
        return first;
    }
    else {
         return second ;
    }

}


const larger = findLargest(351, 241);
console.log('largest is', larger)