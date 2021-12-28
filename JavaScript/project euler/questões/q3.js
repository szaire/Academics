var num = 600851475143;
var largestFactor = 0;
var counter = 2;

while (counter * counter <= num) {
      if (num % counter == 0) {
            num /= counter;
            largestFactor = counter;
      }
      else {
            counter++;
      }
}
if (num > largestFactor) {
      largestFactor = num;
}
console.log(largestFactor);

var n = 600851475143
for (let i = 1; i <= n/2; i++) {
      // se i é primo, n é divisivel por i
}