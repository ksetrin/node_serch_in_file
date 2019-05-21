module.exports = class Utils {
  static intersect(a, b) {
    return a.filter(value => b.includes(value))
  }

  static diff(a, b) {
    return a.filter(value => !b.includes(value))
  }

  static countDuplicates(data) {
    return data.reduce((acc, cur) => {
      acc[cur] = acc.hasOwnProperty(cur) ? acc[cur] + 1 : 1;
      return acc
    }, {})
  }
}
