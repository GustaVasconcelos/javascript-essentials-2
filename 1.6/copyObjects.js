let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
// let point2 = {};
// Object.assign(point2, point0);  //  copy properties into the new object
// let point2 = Object.assign({}, point0);
let point2 = { ...point0};

console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false

// let point3 = {};
// Object.assign(point3, point0, {z: 100});
// let point3 = Object.assign({}, point0, {z: 100});
let point3 = { ...point0, z: 100};

console.log(point3.z);

// var point4 = {};
// Object.assign(point4, point3, {z: 200, color: "red"});
let point4 = { ...point3, ...{z: 200, color: "red"}};

console.log(point4.z);