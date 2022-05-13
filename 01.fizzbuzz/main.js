// 判定する最大値の設定
const MAX_NUM = 20;

const main = () => {
  for (let i = 1; i <= MAX_NUM; i++) {
    puts(fizzbuzz_changer(i))
  }
}

// 表示用関数
const puts = (string) => {
  console.log(string);
}

// FizzBuzz変換関数
const fizzbuzz_changer = (num) => {
  var ans = '';

  num % 3 || (ans += 'Fizz'); // 3の倍数ならFizzをansに結合
  num % 5 || (ans += 'Buzz'); // 5の倍数ならBuzzをansに結合
  ans == '' && (ans = num); // ansが空のままならnumをそのまま返答

  return ans;
}

// main関数を実行
main();