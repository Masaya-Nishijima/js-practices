#!/usr/bin/env node

// Main関数
const main = () => {
  const options = cutInput(process.argv.slice(2)) // 入力された引数を切り分け
  console.log('    ', String(options.m), '月  ', String(options.y)) // 一行目の年月の表示
  const date = new Date(options.y, --options.m, '2') // 取り扱う年月を設定
  printCalDay() // 二行目の曜日(日~土)を表示
  printCalMain(date) // カレンダー本体(ex 1~31)の表示
}

/* 引数を切り分ける関数 */
const cutInput = (inputOptions) => {
  const today = new Date() // 引数がないときのための今日の日付の取得
  const defaultOption = { // 引数なしのときの年月の設定
    default: {
      m: today.getMonth() + 1,
      y: today.getFullYear()
    }
  }
  const options = require('minimist')(inputOptions, defaultOption) // 引数の切り分け
  return options
}

/* 曜日(文字)を表示する関数 */
const printCalDay = () => {
  const day = ['日', '月', '火', '水', '木', '金', '土'] // 曜日の行列
  for (let index = 0; index < (day.length); index++) { // 曜日を並べて表示するループ
    process.stdout.write(day[index] + ' ')
  }
  process.stdout.write('\n')
}

/* カレンダー本体を表示する関数 */
const printCalMain = (date) => {
  // maxDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  let weekOfDay = date.getDay() - 1 // 曜日を計算するための変数
  for (let index = 0; index < (date.getDay() - 1) * 3; index++) { // 初期位置調整用の空白を設置するループ
    process.stdout.write(' ')
  }
  for (let index = 1; index <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); index++) { // カレンダー本体の描写をするループ
    process.stdout.write(('  ' + index).slice(-2) + ' ') // 二桁で数字を表示(空白埋め)
    ++weekOfDay % 7 || process.stdout.write('\n') // 土曜日なら改行をする。
  }
  process.stdout.write('\n') // 末尾の改行
}

main()
