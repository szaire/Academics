// for... in is a more simple way to write all the for loop statement
// ex:
// casual for loop:
// const passengers = [
//       'Will Alexander',
//       'Sarah Kate',
//       'Audrey Simon',
//       'Tau Perkington'
// ]
  
// for (let i = 0; i < passengers.length; i++) {
//       console.log('Boarding passenger ' + passengers[i]);
// }

// for... in loop:
const passengers = [
      'John',
      'Maria',
      'Nickel',
      'Will'
]

for(let i in passengers) {
      document.write(`Boarding passenger ${passengers[i]}<br>`);
}