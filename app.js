var favTvShows = [];

function tvShow() {
	return Math.floor(Math.random() * favTvShows.length);
}

function refresh() {
	document.getElementById("myshows").innerHTML = favTvShows.splice(tvShow(),1);
	if (favTvShows.length === 0) {
		favTvShows = ['Simpsons', 'The Mindy Project', 'SNL', 'Breaking Bad'];
	}
}
