$(document).ready(function(){

	$("#do-search").on('click',function(){
	//Get data from input box
	var movieTitle = $('#movie-title').val();
	if (movieTitle.length === 1) {
		$("#result").html("Please enter at least 2 characters");
	} 
	else{


	//Build our URI with the movie title
	var sURL = "http://www.omdbapi.com/?s=" + movieTitle + "&plot=full&r=json";

	//Grab our container and assign it to variable for later use
	var container = $('#container');

	$.ajax({
		method: 'GET',
		url: sURL,
		success: function(results){
			//console.log("Done: ", results); // leave this for test purpose
			var movies = results.Search;
			for(var i = 0; i <= movies.length-1; i++){
				container.append('<tr><td> <img src=' + movies[i].Poster + '/> </td>' +
					'<td>' + movies[i].title + '</td>' +
					'<td>' + movies[i].Type + '</td>' +
					'<td> '+ movies[i].imdbID +'</td>' +
					'<td>' + movies[i].Year + '</td></tr>');
			
			}

			$('#do-search').hide(); // on success response, hide search button
			$('#do-search-title').hide(); // on success response, hide search button
			$('#movie-title').hide(); // on success response, hide search button
			$('#PageRefresh').show(); // on success response, display new search button
			$('#container').show(); // on success response, display results in table

		},

		error: function(error){
			console.error('@ERROR', error);
		}
	});
};

});

$("#do-search-title").on('click',function(){
	//Get data from input box
	var movieTitleSearch = $('#movie-title').val();
	if (movieTitleSearch.length === 1) {
		$("#result").html("Please enter at least 2 characters");
	} 
	else{


	//Build our URI with the movie title
	var sURL = "http://www.omdbapi.com/?t=" + movieTitleSearch + "&plot=full&r=json";

	//Grab our container and assign it to variable for later use
	var container = $('#container_single');

	$.ajax({
		method: 'GET',
		url: sURL,
		success: function(results){
			//console.log("Done: ", results); // leave this for test purpose
			var movies = results.Search;
			 if (results.Response === "True") { 
				container.append('<tr><td> <img src=' + results.Poster + '/> </td>' +
					'<td>' + results.Title + '</td>' +
					'<td>' + results.Type + '</td>' +
					'<td>' + results.Plot + '</td>' +
					'<td>' + results.Year + '</td></tr>');
			}

			$('#do-search').hide(); // on success response, hide search button
			$('#do-search-title').hide(); // on success response, hide search button
			$('#movie-title').hide(); // on success response, hide search button
			$('#PageRefresh').show(); // on success response, display new search button
			$('#container_single').show(); // on success response, display results in table
		},

		error: function(error){
			console.error('@ERROR', error);
		}
	});
};

});

//refresh the page
$('#PageRefresh').click(function() {
	location.reload();
});


});//End of document.ready


