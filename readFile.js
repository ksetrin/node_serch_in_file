const fs = require('fs')

module.exports = class UserActions {
  static getArrayFromFile(filepath) {
    try {
      const fileData = fs.readFileSync(filepath, {encoding: 'utf-8'})
      return fileData.split('\n')
    }
    catch(error) {
      console.error('getArrayFromFile', error.message);
    }
  }
}
