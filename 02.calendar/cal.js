#!/usr/bin/env node

const main = () => {
  const options = parseArgs(process.argv.slice(2))
  const date = new Date(Date.UTC(options.y, options.m - 1))

  console.log(`      ${date.getMonth() + 1}月 ${date.getFullYear()}`)
  process.stdout.write('日 月 火 水 木 金 土\n')
  printCalendar(date)
}

const parseArgs = (inputOptions) => {
  const today = new Date()
  const defaultOption = {
    default: {
      m: today.getMonth() + 1,
      y: today.getFullYear()
    }
  }
  return require('minimist')(inputOptions, defaultOption)
}

const printCalendar = (date) => {
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
