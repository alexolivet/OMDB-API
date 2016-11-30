$(document).ready(function() {

    //varibale to delay the onkeyup
    var timer;

    $("#movie-title").on('keyup', function() {
        //Get data from input box
        var movieTitle = $('#movie-title').val();
        movieTitle = jQuery.trim(movieTitle); //trim is used to remove white space in front and end of words

        if (movieTitle.length === 1) {
            $("#result").html("Please enter at least 2 characters");
        } else {

            $("#result").html("");
            //Build our URI with the movie title
            var sURL = "http://www.omdbapi.com/?s=" + movieTitle + "&plot=full&r=json";

            //Grab our container and assign it to variable for later use
            var container = $('#container');

            //timeout starts here
            //before the search starts
            clearTimeout(timer); //clear any running timeout on key up
            timer = setTimeout(function() {

                $.ajax({ //start ajax get
                    method: 'GET',
                    url: sURL,
                    success: function(results) {
                        //console.log("Done: ", results); // leave this for test purpose
                        var movies = results.Search;
                        if (results.Search === undefined) { // so if title does not exist or cannot be found
                            $("#result").html("no Movies found under this title");
                            $(".table").hide(); //on no result no need to display table at all
                        } else {
                            for (var i = 0; i <= movies.length - 1; i++) {
                                container.append('<tr><td> <img src=' + movies[i].Poster + '/> </td>' +
                                    '<td>' + movies[i].Title + '</td>' +
                                    '<td>' + movies[i].Type + '</td>' +
                                    '<td> ' + movies[i].imdbID + '</td>' +
                                    '<td>' + movies[i].Year + '</td></tr>');

                            }

                        }

                        $('#do-search').hide(); // on success response, hide search button
                        $('#do-search-title').hide(); // on success response, hide search button
                        $('#movie-title').hide(); // on success response, hide search button
                        $('#PageRefresh').show(); // on success response, display new search button
                        $('#container').show(); // on success response, display results in table

                    },

                    error: function(error) {
                        console.error('@ERROR', error);
                    },
                }); //end ajax get
                //timeout stops here
                //this is the place the change the timeout value
            }, 1000);
        };

    });

    //refresh the page
    //this is linked to the new search button
    $('#PageRefresh').click(function() {
        location.reload();
    });


}); //End of document.ready