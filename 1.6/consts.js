// const x = 10;
// x = 20;    // TypeError: Assignment to constant variable.

const contact = {};
// contact = { email: "RonaldSMurphy@freepost.org"}; // TypeError: Assignment to constant variable.
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);
delete contact.email;
console.log(contact.email);