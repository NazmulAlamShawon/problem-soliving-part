function largestElement(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length;i++ ){
        
        const element = numbers[i];

        if(element > largest){
            largest = element;
        }
    }
    return largest;
 
}

const ages = [12,13,34,51,80,60,];
const oldest = largestElement(ages);
console.log('oldest age', oldest)