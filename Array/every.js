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
    isFinish: true,
  },
  {
    name: "css",
    coin: 500,
    isFinish: true,
  },
  {
    name: "js",
    coin: 750,
    isFinish: true,
  },
  {
    name: "react",
    coin: 1000,
    isFinish: true,
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
    isFinish: false,
  },
];
Array.prototype.every2 = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (!result) {
        return false;
      }
    }
  }
  return true;
};

// output false
const result1 = courses1.every2((course, index, array) => {
  return course.isFinish;
});
console.log(result1);

// output true
const result2 = courses2.every2((course, index, array) => {
  return course.isFinish;
});
console.log(result2);

// output false
const result3 = courses3.every2((course, index, array) => {
  return course.isFinish;
});
console.log(result3);
