const argv = process.argv.slice(2)
if (argv.length < 2) return console.log('not enough arguments')

const utils = require('./utils');
const records = utils.getArrayFromFile(argv[0])
const queries = utils.getArrayFromFile(argv[1])
const queriesCopy = [...queries]
const results = {}

for (let i = 0; i < records.length; i++) {
  const record = records[i].split(',')
  if (!queries.length) break
  for (let j = 0; j < queries.length; j++) {
    let query = queries[j].split(',')
    const result = utils.intersect(record, query)
    if (result.length >= query.length) {
      const difference = utils.diff(record, query)
      const index = queriesCopy.indexOf(queries[j])
      results[index] = utils.countDuplicates(difference)
      queries.splice(j, 1)
      break;
    }
  }
}

console.log('results', results)
