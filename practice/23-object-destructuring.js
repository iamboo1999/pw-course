// const person = {
//     name: 'tuong',
//     age: '26',
//     address: 'HN',
//     job_title :'QC'
// };

// // const name1 = person.name;
// // const age1 = person.age;
// // console.log(name1, age1);

// const { name, age, address, job_title = 'QA' } = person;
// console.log(name, age, address, job_title);

const person = {
    name: 'tuong',
    age: '26',
    hometown: {
        city: 'HY',
    },
    company: {
        city: 'HN'
    },
    job_title :'QC',
};

// const { hometown: { city }, company: { city } } = person; // sai

const { hometown: { city: address_hometown }, company: { city: addrest_company } } = person; 
console.log(address_hometown, addrest_company);

