Synopsis

This is project is my first attempt to play with API using Ajax and JSON. This project presents different search possibilities using Ajax ( and OMDB API ). 


Code Explanation

The app allows for a general search returning all movies/series that has a matching word this means the API will return various results. The other possibility, pulls movie by title and this search pulls 1 movie only. Note that buttons disappear after each search to allow only for a new search to be made.

I have also a onkey up search functionality to further enhance the ajax call capabilities. I have set some timeout to delay the onkey speed of action. Now a user may enter a movie title with ease without getting results being returned after the second letter is entered. Also added .trim() to get rid of whitespace before and after the movie title.


API Reference

This roject uses the OMDB API. The full API and examples can be found here: http://omdbapi.com.


