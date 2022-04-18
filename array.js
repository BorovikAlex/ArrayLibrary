  function checkNumberOfElements(n) {
      if (!Number.isInteger(n)) {
          throw new Error('number of elements must be integer')
      }
      if (Number.isNaN(n)) throw new Error('number of elements is NaN')
      if (n < 0) throw new Error('number of elements must be greater than 0')
  }

  function checkInitialValue(initialValue) {
      if (!Number.isInteger(initialValue)) {
          throw new Error('initial value of elements must be integer')
      }
      if (Number.isNaN(initialValue)) throw new Error('initial value of elements is NaN')
  }

  function checkCallback(callback) {
      if (typeof callback !== 'function')
          throw new Error('callback is not a function')
  }

  minElement = (a, b) => (a < b ? a : b)

  Array.prototype.select = function (callback) {
      checkCallback(callback);
      const newArray = []
      for (let i = 0; i < this.length; i++) {
          newArray.push(callback(this[i], i, this))
      }
      return newArray
  };

  Array.prototype.take = function (n) {
      checkNumberOfElements(n)
      const newArray = []
      const minEl = minElement(this.length, n)
      for (let i = 0; i < minEl; i++) {
          newArray.push(this[i])
      }
      return newArray
  };

  Array.prototype.skip = function (n) {
      checkNumberOfElements(n)
      const newArray = []
      for (let i = n; i < this.length; i++) {
          newArray.push(this[i])
      }
      return newArray
  };

  Array.prototype.reverse = function () {
      for (let i = 0; i < this.length / 2; i++) {
          const el = this[i]
          this[i] = this[this.length - 1 - i]

          this[this.length - 1 - i] = el
      }
      return this
  };

  Array.prototype.map = function (callback) {
      checkCallback(callback)
      const newArray = []
      for (let i = 0; i < this.length; i++) {
          newArray.push(callback(this[i], i, this))
      }
      return newArray
  };

  Array.prototype.filter = function (callback) {
      checkCallback(callback)
      const newArray = []
      for (let i = 0; i <= this.length - 1; i++) {
          if (callback(this[i], i, this)) {
              newArray.push(this[i])
          }
      }
      return newArray
  };

  Array.prototype.forEach = function (callback) {
      checkCallback(callback)
      for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this)
      }
  };

  Array.prototype.reduce = function (callback, initialValue) {
      checkCallback(callback)
      let accumulator = initialValue;
      for (let i = 0; i < this.length; i++) {
          accumulator = callback(accumulator, this[i], i, this)
      }
      return accumulator;
  };

  const data = [5, 8, 9, 11, 13];

  const result = [1, 2, 3, 4].reduce((accumulator, element) => accumulator + element, 0);


  console.log(result);