#!/usr/bin/env node

const main = () => {
  const options = cut_input(process.argv.slice(2))
  console.log('    ', String(options.m), '月  ', String(options.y))
  const date = new Date(options.y, --options.m, '2')
  print_cal_day()
  print_cal_main(date)
}

const cut_input = (inputOptions) => {
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

const print_cal_day = () => {
  const day = ['日', '月', '火', '水', '木', '金', '土']
  for (let index = 0; index < (day.length); index++) {
    process.stdout.write(day[index] + ' ')
  }
  process.stdout.write('\n')
}

const print_cal_main = (date) => {
  max_date = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  let week_of_day = date.getDay() - 1
  for (let index = 0; index < (date.getDay() - 1) * 3; index++) {
    process.stdout.write(' ')
  }
  for (let index = 1; index <= max_date; index++) {
    process.stdout.write(('  ' + index).slice(-2) + ' ')
    ++week_of_day % 7 || process.stdout.write('\n')
  }
  console.log()
}

main()
