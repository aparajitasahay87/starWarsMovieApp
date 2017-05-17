var express = require('express');

var app = express();

app.set('view engine','ejs');

var path = require('path');

var routes = require('./routes');

//Directory for static pages  -> static asset in public path directory
app.use(express.static(path.join(__dirname, 'public')));
//Routes 
app.get('/',routes.home);


//redirect to a webpage get with parameter
app.get('/star_wars_episodes/:episode_number?',routes.movie_single);

//Page not found
app.get('*', routes.notFound);

/*app.listen(3000, function(req,res)
{
    console.log("Applicatio is running on local host");
}
);
*/
//For production env listen to production env port or listen to local host port :3000
app.listen(process.env.PORT || 3000);