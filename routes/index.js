var movieJSON = require('../movies.json');
//Routing functionality - all the get function in app.js is redirected
//Routes 
exports.home = function(reg,res)
{
//server response -> res.send();
//res.send("This is server response");
var movies = movieJSON.movies;
res.render('home', {
    title: "Star wars movies",
    movies : movies
});
};


//redirect to a webpage get with parameter
exports.movie_single = function(req,res)
{
    var episode_number = req.params.episode_number;
    var movies = movieJSON.movies;

    if(episode_number > 0 && episode_number <= movies.length)
    {
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;

        res.render('movies_single', {
        movies: movies , 
        title: title ,
        movie : movie,
        main_characters:main_characters
    });
    }
    else
    {
        //res.send("page not found!!!");
        red.render('notFound', {
            movies : movies,
            title : "This is not the page you are looking for "
        });
    }
};


//Page not found
exports.notFound = function(req,res)
{
    var movies = movieJSON.movies;
    //res.send("OOPS Page not found!!!!");
    res.render('notFound', {
            movies : movies,
            title : "This is not the page you are looking for "
    });

};

