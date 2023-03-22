export default class MovieList {
    constructor(name, movies = []) {
        this.name = name;
        this.movies = movies;
    }

    addMovie(movie) {
        this.movies.push(movie); // adds movie to MovieCollection's movies array
        return console.log(`${movie.title} has successfully been added to the ${this.name} collection.`) // success message
    }

    removeMovie(movie) {
        const index = this.movies.indexOf(movie); // assigns index value to the movie being removed
        this.movies.splice(index); // using index value declared in line above, removes movie by its index from the Movie Collection's movies array
        return console.log(`${movie.title} has successfully been removed from the ${this.name} collection.`) // success message
    }
}

// export class WatchList extends MovieList {
//     constructor(name, movies, dateAdded) {
//         super(name, movies);
//         this.dateAdded = dateAdded;
//     }
// }

// export class MovieHistory extends MovieList {
//     constructor(name, movies, dateFinished, personalRating) {
//         super(name, movies);
//         this.dateFinished = dateFinished;
//         this.personalRating = personalRating;
//     }