function solve(commands){
    let movies = [];
    const addMovieCommand = 'addMovie';
    const directedByCommand = 'directedBy';
    const onDateCommand = "onDate";
    for (const command of commands) {
        if (command.includes(addMovieCommand)){
            let movie = {
                name: command.substring(addMovieCommand.length + 1),
            }
            movies.push(movie)
        }

        if (command.includes(directedByCommand)){
            const [movie_name, ...director_name] = command.split(` ${directedByCommand} `);
            const movie = movies.find(movie => movie.name === movie_name);
            if (movie){
                movie.director = director_name.join(" ");
            }
        }
        if (command.includes(onDateCommand)){
            const [movie_name, date] = command.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movie_name);
            if (movie){
                movie.date = date;
            }
        }
    }
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)))
}

[command, ...name] = 'addMovie Fast and Furious'.split(" ");
name = name.join(" ")
console.log(command, name)
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

