
Array.prototype.select = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
};
var data = [5, 8, 9, 11, 13];

var product = [5, 8, 9, 11, 13].select(a => a + 1);


console.log(product);
