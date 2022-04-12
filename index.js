class ArrayLibrary {
    checkArray(array) {
        if (!Array.isArray(array)) throw new Error('array is invalid')
    }

    checkNumberOfElements(n) {
        if (!Number.isInteger(n)) {
            throw new Error('number of elements must be integer')
        }
        if (Number.isNaN(n)) throw new Error('number of elements is NaN')
        if (n < 0) throw new Error('number of elements must be greater than 0')
    }

    checkInitialValue(initialValue) {
        if (!Number.isInteger(initialValue)) {
            throw new Error('initial value of elements must be integer')
        }
        if (Number.isNaN(initialValue)) throw new Error('initial value of elements is NaN')
    }

    checkCallback(callback) {
        if (typeof callback !== 'function')
            throw new Error('callback is not a function')
    }

    minElement = (a, b) => (a < b ? a : b)

    take(array, n) {
        this.checkArray(array)
        this.checkNumberOfElements(n)
        const newArray = []
        const minEl = this.minElement(array.length, n)
        for (let i = 0; i < minEl; i++) {
            newArray.push(array[i])
        }
        return newArray
    }

    reverse(array) {
        for (let i = 0; i < array.length / 2; i++) {
            console.log(array[i])
            console.log(array[array.length - 1 - i])
            const el = array[i]
            array[i] = array[array.length - 1 - i]

            array[array.length - 1 - i] = el
        }
        return array
    }

    skip(array, n) {
        this.checkArray(array)
        this.checkNumberOfElements(n)

        const newArray = []
        for (let i = n; i < array.length; i++) {
            newArray.push(array[i])
        }
        return newArray
    }

    map(array, callback) {
        this.checkArray(array)
        this.checkCallback(callback)

        const newArray = []
        for (let i = 0; i < array.length; i++) {
            newArray.push(callback(array[i], i, array))
        }
        return newArray
    }

    filter(array, callback) {
        this.checkArray(array)
        this.checkCallback(callback)

        const newArray = []
        for (let i = 0; i <= array.length - 1; i++) {
            if (callback(array[i], i, array)) {
                newArray.push(array[i])
            }
        }
        return newArray
    }

    forEach(array, callback) {
        this.checkArray(array)
        this.checkCallback(callback)

        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array)
        }
    }

    reduce(array, callback, initialValue) {
        this.checkArray(array)
        this.checkCallback(callback)
        let accumulator = initialValue;
        for (let i = 0; i < array.length; i++) {
            accumulator = callback(accumulator, array[i], i, array)
        }
        return accumulator;
    }

    chain(array) {
        let Obj = {
            take: function (n) {
                this.data = this.self.take(this.data, n)
                return this;
            },
            skip: function (n) {
                this.data = this.self.skip(this.data, n)
                return this;
            },
            map: function (callback) {
                this.data = this.self.map(this.data, callback)
                return this;
            },
            filter: function (callback) {
                this.data = this.self.filter(this.data, callback)
                return this;
            },
            forEach: function (callback) {
                this.data = this.self.forEach(this.data, callback)
                return this;
            },
            reduce: function (callback, initialValue) {
                this.data = this.self.reduce(this.data, callback, initialValue)
                return this;
            },
            value: function () {
                return this.data;
            }
        }
        Obj.data = array;
        Obj.self = this;
        return Obj;
    }

}

const arrClass = new ArrayLibrary()
const res = arrClass.chain([10, 20, 30, 40, 50]).take(3).reduce((accumulator, element) => accumulator + element, 0).value();
console.log(res)
const res1 = arrClass.chain([10, 20, 30, 40, 50]).take(4).map(a => a - 1).value();
console.log(res1)