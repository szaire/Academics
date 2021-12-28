sum = (total, num) => {
      return total + num;
}

calculateRating = (arrayOfRatings) => {
      let avarage = 0;
      for (let i in arrayOfRatings) {
            avarage += arrayOfRatings[i];
      }
      avarage = avarage / arrayOfRatings.length;
      return avarage;
}

let arr = [5, 3, 2.5, 4]
const avarage = calculateRating(arr);
console.log(avarage.toFixed(1)); 