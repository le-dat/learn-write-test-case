const courses = [
  {
    name: "html",
    coin: 200,
    isFinish: true,
  },
  {
    name: "css",
    coin: 500,
    isFinish: false,
  },
  {
    name: "js",
    coin: 750,
    isFinish: true,
  },
  {
    name: "react",
    coin: 1000,
    isFinish: false,
  },
];

Array.prototype.filter2 = function (callback) {
  let output = [];
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      let result = callback(this[i], i, this);
      if (result) {
        output = [...output, this[i]];
      }
    }
  }
  return output;
};

// output js, react
const result1 = courses.filter2((item, index, array) => {
  return item.coin > 700;
});
console.log(result1);

// output html, css, js, react
const result2 = courses.filter2((item, index, array) => {
  return item.coin > 0;
});
console.log(result2);

// output []
const result3 = courses.filter2((item, index, array) => {
  return item.coin > 1000;
});
console.log(result3);
