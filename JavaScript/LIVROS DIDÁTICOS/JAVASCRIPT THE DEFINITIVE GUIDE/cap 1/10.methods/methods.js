// Methods
// when fucntions are assigned inside the properties of an object we have methods
let a = [];
a.push(1, 2, 3);  // the push method adds elements to an array
a.reverse();      // the reverse method does what it's named for

let points = [
      {x:0, y:0},
      {x:1, y:1}
]

points.dist = function() {          // this is how a method looks like (??)
      let p1 = this[0];             // The "this" keyword refers to the object on which the method is defined
      let p2 = this[1];
      let a = p2.x - p1.x;          
      let b = p2.y - p1.y;          
      let c = Math.sqrt(a*a + b*b); 
      return c;                     
}      

console.log(points.dist().toFixed(5));
 