#!/usr/bin/env node

const main = () => {
  const options = cutInput(process.argv.slice(2))
  console.log('    ', String(options.m), '月  ', String(options.y))
  const date = new Date(options.y, --options.m, '2')
  printCalDay()
  printCalMain(date)
}

const cutInput = (inputOptions) => {
  const today = new Date()
  const defaultOption = {
    default: {
      m: today.getMonth() + 1,
      y: today.getFullYear()
    }
  }
  const options = require('minimist')(inputOptions, defaultOption)
  return options
}

const printCalDay = () => {
  const day = ['日', '月', '火', '水', '木', '金', '土']
  for (let index = 0; index < (day.length); index++) {
    process.stdout.write(day[index] + ' ')
  }
  process.stdout.write('\n')
}

const printCalMain = (date) => {
  // maxDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  let weekOfDay = date.getDay() - 1
  for (let index = 0; index < (date.getDay() - 1) * 3; index++) {
    process.stdout.write(' ')
  }
  for (let index = 1; index <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); index++) {
    process.stdout.write(('  ' + index).slice(-2) + ' ')
    ++weekOfDay % 7 || process.stdout.write('\n')
  }
  console.log()
}

main()
