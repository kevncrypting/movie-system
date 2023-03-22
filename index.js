import Movie from './Movie.js'; 
import MovieList from './MovieList.js'; 
import MovieWatcher from './MovieWatcher.js'; 

// creates new movie objects based off Movie class
let ironMan = new Movie("Iron Man", 2008, 126, "PG-13", ["Action", "Adventure", "Sci-Fi"], 7.9, "Jon Favreau", ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"])

let theIncredibleHulk = new Movie("The Incredible Hulk", 2008, 112, "PG-13", ["Action", "Adventure", "Sci-Fi"], 6.6, "Louis Leterrier", ["Edward Norton", "Liv Tyler", "Tim Roth"]);

let ironMan2 = new Movie("Iron Man 2", 2010, 125, "PG-13", ["Action", "Sci-Fi"], 6.9, "Jon Favreau", ["Robert Downey Jr.", "Mickey Rourke", "Gwyneth Paltrow"]);

let thor = new Movie("Thor", 2011, 114, "PG-13", ["Action", "Fantasy"], 7.0, "Kenneth Branagh", ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"]);

let captainAmericaTheFirstAvenger = new Movie("Captain America: The First Avenger", 2011, 124, "PG-13", ["Action", "Adventure", "Sci-Fi"], 6.9, "Joe Johnston", ["Chris Evans", "Hugo Weaving", "Samuel L. Jackson"]);

let theAvengers = new Movie("The Avengers", 2012, 143, "PG-13", ["Action", "Sci-Fi"], 8.0, "Joss Whedon", ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]);

// creates new movie list object based off MovieList class called marvelCinematicUniverse
let marvelCinematicUniverse = new MovieList("Marvel Cinematic Universe");

// // tests adding and removing a movie from a movie collection
marvelCinematicUniverse.addMovie(ironMan);
marvelCinematicUniverse.removeMovie(ironMan);

marvelCinematicUniverse.addMovie(ironMan);
marvelCinematicUniverse.addMovie(theIncredibleHulk);
marvelCinematicUniverse.addMovie(ironMan2);
marvelCinematicUniverse.addMovie(thor);
marvelCinematicUniverse.addMovie(captainAmericaTheFirstAvenger);
marvelCinematicUniverse.addMovie(theAvengers);

// tests contents of marvelCinematicUniverse
console.log(marvelCinematicUniverse);

// creates new movie watcher objects based off MovieWatcher class
let kevinPrachith = new MovieWatcher("Kevin", "Prachith");
let testWatcher = new MovieWatcher("Test", "Watcher");

// tests contents of ironMan
// console.log(ironMan);

// tests contents of kevinPrachith
// console.log(kevinPrachith);

// tests showDetails method of Movie Class
ironMan.showDetails();
theIncredibleHulk.showDetails();

// tests adding movies to history
kevinPrachith.addMovieToHistory(ironMan);

testWatcher.addMovieToHistory(ironMan);

// checks contents of MovieWatchers
console.log(kevinPrachith);
console.log(testWatcher);