let point = {
    x: 0,
    y: 0,
    moveHorizontally: function (distance) {
        this.x = this.x + distance
    },
    moveVertically: function (distance) {
        this.y = this.y + distance
    }
}

console.log(point.x)

point.moveHorizontally(30)

console.log(point.x)


let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);   // -> 207-662-5412
console.log(contact.firstName);     // -> Ronald
console.log(contact.notes);

let contactTwo = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

contactTwo.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contactTwo.email.work);

delete contactTwo.email.work;
console.log(contactTwo.email.work);
console.log(contactTwo.email.private);

