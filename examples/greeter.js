function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'huocs',
    lastName: 'changsheng'
};
console.log(greeter(user));
