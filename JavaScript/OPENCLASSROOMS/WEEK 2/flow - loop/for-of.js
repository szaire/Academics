// for.. of loops are used for cases where the specific index 
// of an element is not needed during iteration

const passengers = [
      {
          name: 'Will Alexander',
          ticketNumber: 209542
      },
      {
          name: 'Sarah Kate',
          ticketNumber: 169336
      },
      {
          name: 'Audrey Simon',
          ticketNumber: 779042
      },
      {
          name: 'Tau Perkington',
          ticketNumber: 703911
      }
]

for(let passenger of passengers) {
      document.write(`Boarding passenger: ${passenger.name} with ticket number: ${passenger.ticketNumber}<br>`);
}