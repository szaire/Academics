class Episode {
      constructor(title, duration, minutesWatched) {
            this.title = title;
            this.duration = duration;
            this.continueWatching = false;

            if (minutesWatched == 0) {
                  this.watchedText = 'Not yet watched!';
            }
            else if (minutesWatched > 0 && minutesWatched < duration){
                  this.watchedText = 'Watching';
                  this.continueWatching = true;
            }
            else {
                  this.watchedText = 'Watched!';
            }
      }
}

let firstEpisode = new Episode("Episode 1", 45, 45, false);
let secondEpisode = new Episode("Episode 2", 45, 10, true);
let thirdEpisode = new Episode("Episode 3", 50, 0, false);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

for (let i = 0; i < episodes.length; i++) {
      document.write(`${episodes[i].watchedText}`);
      if (episodes[i].continueWatching) {
            document.write(` --- still watching<br>`);
      }
      else {
            document.write(` --- no watching<br>`);
      }
}