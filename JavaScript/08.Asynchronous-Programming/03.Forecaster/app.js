function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    const locationElement = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const upcomingElement = document.getElementById('upcoming');

    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    submitButton.addEventListener('click', async () => {
        let locationResponse = await fetch(`${baseUrl}/locations`);
        let locationData = await locationResponse.json();
        const { code } = locationData.find(location => location.name === locationElement.value);

        let todayResponse = await fetch(`${baseUrl}/today/${code}`);
        let today = await todayResponse.json();

        let upcomingResponse = fetch(`${baseUrl}/upcoming/${code}`);
        let upcomingDays = await (await upcomingResponse).json();

        forecastElement.style.display = 'block';

        const symbolSpanElement = document.createElement('span');
        symbolSpanElement.classList.add('condition');
        symbolSpanElement.classList.add('symbol');
        symbolSpanElement.textContent = weatherSymbol[today.forecast.condition];

        // Don't do this at home
        const anotherSpan = document.createElement('span');
        anotherSpan.innerHTML = `
            <span class="condition">
                <span class="forecast-data">${today.name}</span>
                <span class="forecast-data">${today.forecast.low}/${today.forecast.high}</span>
                <span class="forecast-data">${today.forecast.condition}</span>
            </span>
        `;

        const forecastsElement = document.createElement('div');
        forecastsElement.classList.add('forecasts');
        forecastsElement.appendChild(symbolSpanElement);
        forecastsElement.appendChild(anotherSpan);

        currentElement.appendChild(forecastsElement);

        // Create upcoming
        const upcomingForecastElement = document.createElement('div');
        upcomingForecastElement.classList.add('forecast-info')
        for (const day of upcomingDays.forecast) {
            const upcomingElement = document.createElement('span');
            upcomingElement.classList.add('upcoming')

            const symbolElement = document.createElement('span');
            symbolElement.classList.add('symbol');
            symbolElement.textContent = weatherSymbol[day.condition];

            const temperatureElement = document.createElement('span');
            temperatureElement.classList.add('forecast-data');
            temperatureElement.textContent = `${day.low} / ${day.high}`;

            const conditionElement = document.createElement('span');
            conditionElement.classList.add('forecast-data');
            conditionElement.textContent = day.condition;

            upcomingElement.appendChild(symbolElement);
            upcomingElement.appendChild(temperatureElement);
            upcomingElement.appendChild(conditionElement);

            upcomingForecastElement.appendChild(upcomingElement)
        }
        upcomingElement.appendChild(upcomingForecastElement);
    });

}

attachEvents();
