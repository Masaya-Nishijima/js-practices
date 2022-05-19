// 判定する最大値の設定
const MAX_NUM = 20;

const main = () => {
  for (let i = 1; i <= MAX_NUM; i++) {
    console.log(fizzbuzzChanger(i))
  }
}

// FizzBuzz変換関数
const fizzbuzzChanger = (num) => {
  let answer = '';

  num % 3 || (answer += 'Fizz'); // 3の倍数ならFizzをanswerに結合
  num % 5 || (answer += 'Buzz'); // 5の倍数ならBuzzをanswerに結合
  answer == '' && (answer += num); // answerが空のままならnumをそのまま返答

  return answer;
}

// main関数を実行
main();
