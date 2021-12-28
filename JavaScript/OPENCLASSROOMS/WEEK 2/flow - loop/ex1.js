class Episode {
      constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
      }
}

let episodes = [
      new Episode('Dark Beginnings', 45, true),
      new Episode('The Mystery Continues', 45, true),
      new Episode('An Unexpected Climax', 60, true)
];

for (let episode of episodes) {
      episode.hasBeenWatched = false;
      if (episode.hasBeenWatched == false) {
            document.write(`Not yet watched!<br>`);
      }
      else {
            document.write(`Watched!<br>`);
      }
}