export default class Movie {
    constructor(title, year, length, mpaaRating, genres, imbdRating, director, actors) {
        this.title = title;
        this.year = year;
        this.length = length;
        this.mpaaRating = mpaaRating;
        this.genres = genres;
        this.imbdRating = imbdRating;
        this.director = director;
        this.actors = actors;
    }

    showDetails() { // returns an informational message using template literals, populated using Movie object's properties using "this" keyword
        return console.log(`
        ${this.title} was released in ${this.year} with a runtime of ${this.length} minutes. It was directed by ${this.director} (starring ${this.actors}). 
        
        MPAA Rating: ${this.mpaaRating} | IMBD Rating: ${this.imbdRating} | Genre(s): ${this.genres}
        `);
    }
}