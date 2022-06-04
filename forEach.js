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

Array.prototype.forEach2 = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};

//output: arrayItem, index , array
const result = courses.forEach2((course, index, array) => {
  console.log(course, index, array);
});
