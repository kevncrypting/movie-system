// import { WatchList, MovieHistory } from './MovieList.js';

export default class MovieWatcher {
    constructor(firstName = ``, lastName = ``, watchList = [], movieHistory = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.watchList = watchList;
        this.movieHistory = movieHistory;
    }

    // rateMovie(movieName, rating = null) {
    //     // this.movieHistory[movieName]["personalRating"];
    //     this.movieHistory[movieName]["personalRating"] = rating;
    // }

    addMovieToWatchlist(movieName) {
        this.watchList.push(movieName); // adds movie to MovieWatcher's watchList array
        return console.log(`${movieName.title} was successfully added to ${this.firstName} ${this.lastName}'s movie watch list.`); // success message
    }

    addMovieToHistory(movieName, rating) {
        // if (rating != null) {
        //     this.rateMovie(movieName, rating);
        // }
        this.movieHistory.push(movieName); // adds movie to MovieWatcher's movieHistory array
        return console.log(`${movieName.title} was successfully added to ${this.firstName} ${this.lastName}'s movie watch history.`); // success message
    }

    // finishMovie(movieName, rating, finishedDate) {
    //     if (this.movieHistory) {

    //     } else if (this.watchList) {

    //     } else {

    //     };
    // }

    // deleteMovie(movieName) {
    //     // list
    // }
}


    // addMovie(movieName, targetList) {
    //     // let listName = this.lists.reduce(list => {
    //     //     return Object.getOwnPropertyDescriptor(list, targetList)
    //     // })
    //     let list = this.lists.find(list => list.name == targetList);

    //     if (list === watchList) {

    //     } else if (list === movieHistory) {

    //     } else {
    //         return console.log(`Please try adding that movie again and specify what list you would like to add it to (watchList OR movieHistory).`); // error message
    //     }
    // }

        // this.lists.includes(Object.getOwnPropertyNames(targetList)