// enforcing arguments are a numbers
// enforcing return is a string
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

// use void for function that do not return a value
function addition(x: number, y: number): void {
  (x + y).toString();
}

pow(5,10)
