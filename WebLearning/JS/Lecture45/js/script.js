// Object creation
// let company: Object = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
//
// console.log(company);
// console.log(company.name);
// console.log(`Company CEO name is: ${company.ceo.firstName}`);
//
// console.log(company["name"]);
// const stockPropName: string = "stock of company"
// company[stockPropName] = 110;
//
// console.log(`Stock price is: ${company[stockPropName]}`);
var facebook = {
    name: 'facebook',
    ceo: {
        firstName: 'Mark',
        favColor: 'blue'
    },
    "stock of company": 110
};
console.log(facebook);
console.log(facebook["stock of company"]);
