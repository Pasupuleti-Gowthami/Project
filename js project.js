const searchForm = document.getElementById('search-form');
const searchBtn = document.getElementById('search-btn');
const flightResultsDiv = document.getElementById('flight-results');

searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const from = document.getElementById('from').value;
	const to = document.getElementById('to').value;
	const date = document.getElementById('date').value;
	
	// API call or data manipulation goes here
	// For demonstration purposes, we'll just display a message
	const flightResultsHTML = `
		<h2>Flight Results</h2>
		<p>From: ${from}</p>
		<p>To: ${to}</p>
		<p>Date: ${date}</p>
	`;
	flightResultsDiv.innerHTML = flightResultsHTML;
});
