const test = {
    nr: 10,
    b: false,
    str: "uno dos tres",
    arr: [10, 20, 30],
    obj: {
        x: 10,
        y: 20
    },
    fn: function (param) { console.log(param) }
}

test.fn('123')

console.log(test.obj.x)