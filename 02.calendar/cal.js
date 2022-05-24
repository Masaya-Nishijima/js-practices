#!/usr/bin/env node

const main = () => {
  const options = cutInput(process.argv.slice(2))
  console.log(`      ${options.m}月 ${options.y}`)
  const date = new Date(Date.UTC(options.y, --options.m))
  process.stdout.write('日 月 火 水 木 金 土\n')
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

const printCalMain = (date) => {
  const maxDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  let weekOfDay = date.getDay()
  for (let index = 0; index < weekOfDay; index++) {
    process.stdout.write('   ')
  }
  for (let index = 1; index <= maxDate; index++) {
    process.stdout.write(String(index).padStart(2, ' ') + ' ')
    ++weekOfDay % 7 || process.stdout.write('\n')
  }
  process.stdout.write('\n')
}

main()
