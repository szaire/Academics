class Episode {
      constructor(title, duration, hasBeenWatched) {
            this.title = title;
            this.duration = duration;
            this.hasBeenWatched = hasBeenWatched;
      }
}

let firstEpisode = new Episode("Episode 1", 45, true);
let secondEpisode = new Episode("Episode 2", 45, true);
let thirdEpisode = new Episode("Episode 3", 50, false);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

// 1
episodes.push(thirdEpisode);
console.log(episodes);

// 2
episodes.pop();
console.log(episodes);

// 3
let numberOfEpisodes = episodes.length;
console.log(numberOfEpisodes);