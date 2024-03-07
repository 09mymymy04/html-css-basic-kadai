// 配列の宣言および値の代入
let holidays =["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// forを使った繰り返し処理は以下
for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}

// whileを使った繰り返しは以下
let i = 0;
while(i < holidays.length) {
  console.log(holidays[i]);
  i++;
}