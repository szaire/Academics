class Show {
      constructor(title, numberOfSeasons) {
            this.title = title;
            this.numberOfSeasons = numberOfSeasons;
            this.ratings = [];
            this.avarage = 0;
      }
      addRating(rating) {
            this.ratings.push(rating);
            let sum = 0;
            for (let i in this.ratings) {
                  sum += this.ratings[i]; 
            }
            this.avarage = sum / this.ratings.length;
      }
}