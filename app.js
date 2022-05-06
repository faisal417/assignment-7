



// Total Admnission fees

console.log(`Total Admnission fees`);


let totalFees = 0;

students.sort().map( (data, index) => {

    console.log(`${index+1}. Name: ${data.Name}----------- Admission Fees : ${data.AdmnissionFees}`);

    totalFees += +data.AdmnissionFees
});
console.log(`------------------------------------------
    Total Fees =    ${totalFees} 
`); 

// Find All Female Students

console.log(`Find All Female Students`);
students.sort().map((data, index)=>{
    if (data.Gender==='Female') {
        console.log(`
        ${index+1}. Name : ${data.Name}---------- Gender : ${data.Gender}
        `);
    }
}); 

// Find class wise student result for Class 7

console.log(`Class wise student result for Class 7`);
students.sort().map((data, index)=>{
    if (data.Class===7) {
        console.log(`
        ${index+1}. Name : ${data.Name}---------- Class : ${data.Class}
        `);
    }
}); 
// Location wise student result for Dhaka
console.log(`Location wise student result for Dhaka`);
students.sort().map((data, index)=>{
    if (data.Location==='Dhaka') {
        console.log(`
        ${index+1}. Name : ${data.Name}---------- Location : ${data.Location}
        `);
    }
}); 
// find student between 10 - 25 age
console.log(`student between 10 - 25 age`);
students.sort().map((data, index)=>{
    if (data.Age>=10 && data.Age<=25) {
        console.log(`
        ${index+1}. Name : ${data.Name}---------- Age : ${data.Age}
        `);
    }
}); 
