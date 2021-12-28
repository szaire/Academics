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

console.log(episodes);