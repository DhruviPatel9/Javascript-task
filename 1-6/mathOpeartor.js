// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) * f;
  }
  console.log(myFunction(6, 2, 1, 4, 2, 3));