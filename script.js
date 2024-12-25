document.addEventListener('DOMContentLoaded', function () {
	const button = document.querySelector('button');
	const heading = document.querySelector('h1');

	button.addEventListener('click', function () {
		heading.textContent = 'Fetching data...';

		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(data => {
				heading.textContent = `Title: ${data.title}`;
			})
			.catch(error => {
				heading.textContent = 'Error fetching data';
				console.error('Error:', error);
			});
	});
});