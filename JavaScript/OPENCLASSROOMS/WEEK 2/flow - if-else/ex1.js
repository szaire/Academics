class Episode {
      constructor(title, duration, minutesWatched) {
            this.title = title;
            this.duration = duration;
            if (minutesWatched == duration) {
                  this.hasBeenWatched = true;
            }
            else {
                  this.hasBeenWatched = false;
            }
      }
}

let firstEpisode = new Episode("Episode 1", 45, 45);
let secondEpisode = new Episode("Episode 2", 45, 10);
let thirdEpisode = new Episode("Episode 3", 50, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

for (let i = 0; i < episodes.length; i++) {
      if (episodes[i].hasBeenWatched) {
            document.write(`Already Been watched!<br>`);
      }
      else {
            document.write(`Not yet watched!<br>`);
      }
}
