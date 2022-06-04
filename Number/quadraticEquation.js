// giai pt bac 2
const solve = (a, b, c) => {
  if (a === 0) {
    console.log("day khong phai pt bac 2");
    return;
  }
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    console.log("pt vo nghiem");
  } else if (delta === 0) {
    const result = -b / (2 * a);
    console.log("pt co nghiem kep x1 = x2 = " + result);
  } else if (delta > 0) {
    const x1 = ((-b + Math.sqrt(delta)) / 2) * a;
    const x2 = ((-b - Math.sqrt(delta)) / 2) * a;
    console.log("pt co 2 nghiem phan biet x1= " + x1 + ", x2= " + x2);
  }
};

// test
// output kt pt bac 2
solve(0, 1, 1);

// output pt vo nghiem
solve(5, 1, 5);

// output pt co nghiem kep
solve(1, -4, 4);

// output pt co 2 nghiem phan biet
solve(2, 5, 2);
