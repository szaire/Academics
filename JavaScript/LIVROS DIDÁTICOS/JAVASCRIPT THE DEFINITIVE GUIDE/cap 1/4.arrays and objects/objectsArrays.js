// Arrays and objects can hold other arrays and objects
let points = [          // An array with 2 elements.
      {x:0, y:0},       // Each element is an object.
      {x:1, y:1}
];

let data = {
      trial1: [1, 2],
      trial2: [[1, 2], [3, 4]]
};

console.log(points[0]);
console.log(points[1]);
console.log(data["trial1"]); // why does it also returns me the length?
console.log(data["trial2"]); // why does it also returns me the length?