let contact = {
    "first name": "gustavo"
}

contact["first name"] = "Tim";
// contact.first name = "Tim";    // SyntaxError: Unexpected identifier
// contact."first name" = "Tim";    // SyntaxError: Unexpected string

let contactTwo = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};

for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contactTwo[key]);
}
