let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    console.log(x);
}
console.log('----------')
for(x in contact) {
    console.log(contact[x]);
}
console.log('----------')
for(x in contact) {
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}