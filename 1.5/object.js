let contact = {
    "phone":"9999999"
}

console.log(contact.notes); // -> undefined


if(!contact.notes) { 
    contact.notes = "something really important";
}

console.log(contact.notes);

// console.log(contact.email.private); exception! Por conta que é procurado uma propriedade em algo inexistente 

if(contact && contact.email) {
    console.log(contact.email.private);
}