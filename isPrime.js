// kiểm tra số nguyên tố

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// output true
console.log(isPrime(2));

// output true
console.log(isPrime(19));

// output false
console.log(isPrime(6));

// output false
console.log(isPrime(100));
