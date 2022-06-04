const courses1 = [
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

const courses2 = [
  {
    name: "html",
    coin: 200,
    isFinish: false,
  },
  {
    name: "css",
    coin: 500,
    isFinish: false,
  },
  {
    name: "js",
    coin: 750,
    isFinish: false,
  },
  {
    name: "react",
    coin: 1000,
    isFinish: false,
  },
];

const courses3 = [
  {
    name: "html",
    coin: 200,
    isFinish: false,
  },
  {
    name: "css",
    coin: 500,
    isFinish: false,
  },
  {
    name: "js",
    coin: 750,
    isFinish: false,
  },
  {
    name: "react",
    coin: 1000,
    isFinish: true,
  },
];
Array.prototype.some2 = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      let result = callback(this[i], i, this);
      if (result) return true;
    }
  }
  return false;
};

// output true
const result1 = courses1.some2((course, index, array) => {
  return course.isFinish;
});
console.log(result1);

// output false
const result2 = courses2.some2((course, index, array) => {
  return course.isFinish;
});
console.log(result2);

// output true
const result3 = courses3.some2((course, index, array) => {
  return course.isFinish;
});
console.log(result3);
