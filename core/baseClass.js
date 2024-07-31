class BaseClass {
  constructor() {
    // automatically register declared methods
    for (let key of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
      if (key !== 'constructor' && typeof this[key] === 'function') {
        this[key] = this[key].bind(this);
      }
    }
  }
}

module.exports = BaseClass;