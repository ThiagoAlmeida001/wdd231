
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

const myKey = "3489e8eed52f83c52398d5a4cf0592b0";
const myLat = "-33.44173";
const myLong = "-70.6572781";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }

        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw new Error(await forecastResponse.text());
        }
    } catch (error) {
        console.error("Weather API Error:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyForecasts.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(day.main.temp);

        const p = document.createElement('p');
        p.innerHTML = `<strong>${dayName}:</strong> ${temp}&deg;F`;
        forecastContainer.appendChild(p);
    });
}

const membersURL = "data/members.json";
const spotlightContainer = document.querySelector('#spotlight-container');

async function getSpotlights() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        }
    } catch (error) {
        console.error("Spotlights JSON Error:", error);
    }
}

function displaySpotlights(members) {
    const eligibleMembers = members.filter(member => 
        member.MEMBERSHIP_LEVEL === 3 || member.MEMBERSHIP_LEVEL === 2
    );

    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

    const selectedMembers = shuffled.slice(0, 3);

    selectedMembers.forEach(member => {
        const card = document.createElement('section');
        card.className = 'spotlight-card';

        const levelName = member.MEMBERSHIP_LEVEL === 3 ? "Gold" : "Silver";

        card.innerHTML = `
            <h3>${member.NAME}</h3>
            <span class="badge ${levelName.toLowerCase()}">${levelName} Member</span>
            <img src="images/${member.IMAGE}.jpg" alt="${member.NAME} Logo" loading="lazy" width="120" height="80">
            <p><strong>Phone:</strong> ${member.PHONE}</p>
            <p><strong>Address:</strong> ${member.ADDRESS}</p>
            <p><a href="https://${member.WEBSITE}" target="_blank">Visit Website</a></p>
        `;
        spotlightContainer.appendChild(card);
    });
}

fetchWeather();
getSpotlights();
