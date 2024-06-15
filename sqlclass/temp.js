const { faker } = require("@faker-js/faker");
const fs = require("fs");

let roll = 11111111;

let getRandomStudentObj = () =>{
    roll++;
    return { 
        role: "student",
        id: faker.string.uuid(), 
        name: faker.person.fullName(),
        email: faker.internet.email(), 
        phoneNo: faker.string.numeric({length: 11, allowLeadingZeros: true}),
        dateOfBirth: faker.date.birthdate({min:18, max:60, mode: 'age'}),
        address: faker.location.streetAddress({useFullAddress: true}),
        designation: faker.person.jobTitle(),
        mastersInfo: `University of ${faker.location.city()}`,
        bachelorInfo: `${faker.location.city()} Science & Technology University` ,
        joinDate: faker.date.past({years:10}),
        rollNo: roll,
        registrationNo: roll,
        session: faker.date.year,
        impactScore: (Math.floor(Math.random()*10000+1))/1000,
        username: faker.internet.userName(), 
        password: faker.internet.password() 
    };
};

let getRandomTeacherObj = () =>{
    roll++;
    return { 
        role: "faculty",
        id: faker.string.uuid(), 
        name: faker.person.fullName(),
        email: faker.internet.email(), 
        phoneNo: faker.string.numeric({length: 11, allowLeadingZeros: true}),
        dateOfBirth: faker.date.birthdate({min:18, max:60, mode: 'age'}),
        address: faker.location.streetAddress({useFullAddress: true}),
        designation: faker.person.jobTitle(),
        mastersInfo: `University of ${faker.location.city()}`,
        bachelorInfo: `${faker.location.city()} Science & Technology University` ,
        joinDate: faker.date.past({years:10}),
        rollNo: roll,
        registrationNo: roll,
        session: faker.date.year,
        impactScore: (Math.floor(Math.random()*10000+1))/1000,
        username: faker.internet.userName(), 
        password: faker.internet.password() 
    };
};
const data = [];
for(let i=1; i<251; i++){
    data.push(getRandomStudentObj());
}
for(let i=1; i<150; i++){
    data.push(getRandomTeacherObj());
}


fs.writeFileSync("data.json", JSON.stringify(data, null, 3));
