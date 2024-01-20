document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_REST_COUNTRIES_API_URL' with the actual endpoint of the Rest Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            displayCountryCards(data);
        })
        .catch(error => console.error('Error fetching countries:', error));
});

function displayCountryCards(countries) {
    const countryCardsContainer = document.getElementById('countryCards');

    countries.forEach(country => {
        const card = createCountryCard(country);
        countryCardsContainer.appendChild(card);

        // Fetch weather data for each country
        fetchWeatherData(country.alpha2Code);
    });
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';

    card.innerHTML = `
        <div class="card">
            <img src="${country.flags[0]}" class="card-img-top" alt="${country.name.common} Flag">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text"><strong>Capital:</strong> ${country.capital}</p>
                <p class="card-text"><strong>Region:</strong> ${country.region}</p>
                <p class="card-text"><strong>Country Code:</strong> ${country.cca2}</p>
                <p class="card-text"><strong>Latitude:</strong> ${country.latlng[0]}</p>
                <p class="card-text"><strong>Longitude:</strong> ${country.latlng[1]}</p>
            </div>
        </div>
    `;

    return card;
}

function fetchWeatherData(countryCode) {
    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = 'https://api.example.com/data1';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?country=${countryCode}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(weatherData => {
            // Handle weather data and update card if needed
            console.log('Weather Data:', weatherData);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
