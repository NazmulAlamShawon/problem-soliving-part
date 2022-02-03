

const employesLowestSalary = [
    {name: 'nazmul', possition: 'web Developer', salary: 30000},
    {name: 'rubel', possition: 'web Deginer', salary:    15000},
    {name: 'sumon', possition: 'Full stack', salary:     50000},
    {name: 'jibon', possition: 'mern Stack', salary:     40000},
    {name: 'alam', possition: 'wordpress Designer', salary: 20000}

];

let loestSalary = employesLowestSalary[0];

for (const salary of employesLowestSalary){
   
    if(salary.salary < loestSalary.salary){
        loestSalary = salary;
    }

}
console.log(loestSalary)