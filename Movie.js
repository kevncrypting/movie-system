export default class Movie {
    constructor(title, year, length, mpaaRating, genres, imbdRating, budget) {
        this.title = title;
        this.year = year;
        this.length = length;
        this.mpaaRating = mpaaRating;
        this.genres = genres;
        this.imbdRating = imbdRating;
        this.budget = budget;
    }

    showDetails(movie) {
        return `${this.title} was released in ${this.year} ...`
    }
}