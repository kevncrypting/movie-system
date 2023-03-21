export default class MovieWatcher {
    constructor(firstName, lastName, movieHistory, watchList) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.movieHistory = movieHistory;
        this.watchList = watchList;
    }

    addMovie(movieName, list) {
        if (list === watchList) {

        } else if (list === movieHistory) {

        } else {
            return `Please try adding that movie again and specify what list you would like to add this movie to (watchList OR movieHistory).`
        }
    }

    finishMovie(movieName, rating, finishedDate) {
        if (this.movieHistory) {

        } else if (this.watchList) {

        } else {

        }
    }

    deleteMovie(movieName) {
        // list
    }
}