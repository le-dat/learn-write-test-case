const number = [1, 2, 3, 4, 5];
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
    coin: 700,
    isFinish: true,
  },
  {
    name: "react",
    coin: 1000,
    isFinish: false,
  },
];

Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (i; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

// output = 2400
const numberReduce1 = courses.reduce2((total, number, index, array) => {
  return total + number.coin;
}, 0);

// output = 3400
const numberReduce2 = courses.reduce2((total, number, index, array) => {
  return total + number.coin;
}, 1000);
