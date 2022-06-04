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
Array.prototype.map2 = function (callback) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};

//  output  = 200,500,700,1000
const result1 = courses.map2((course, index, array) =>
  console.log(course.coin)
);

//  output  = 'html','css','js','react'
const result2 = courses.map2((course, index, array) =>
  console.log(course.name)
);
