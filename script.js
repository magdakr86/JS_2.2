var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Fim o czarodzieju',
		img: {
			src: './images/harry_potter.jpg',
			alt: 'Harry Potter'
		}
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o lwie',
		img: {
			src: './images/krol_lew.jpg',
			alt: 'Król Lew'
		}
	},
	{
		id: 3,
		title: 'Madagaskar',
		desc: 'Film o zwierzętach dżungli',
		img: {
			src: './images/madagaskar.jpg',
			alt: 'Madagaskar'
		}
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img.src, alt: movie.img.alt}),
	);	
});


var element = 
    React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement('ul', {}, moviesElements)
    );


ReactDOM.render(element, document.getElementById('app'));






