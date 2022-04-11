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
}

const arrClass = new ArrayLibrary()
const res = arrClass.map([1, 'qwe', 3, 4], (a) => a + 1)
console.log(res)
