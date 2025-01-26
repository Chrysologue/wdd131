const today = new Date();
const span = document.querySelector('span');
span.textContent = `${today.getFullYear()}`;
const lastModified = document.querySelector('#last-modified');
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


function calculateWindchillCelsius(temperature, windspeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16);
}

const temperature = 15;
const windspeed = 5;

const temp = document.querySelector('.temp');
temp.innerHTML = `<strong>Temperature:</strong> ${temperature}° C`;

const cond = document.querySelector('.cond');
cond.innerHTML = `<strong>Condition:</strong> Partly cloudy`;

const wind = document.querySelector('.wind');
wind.innerHTML = `<strong>Wind:</strong> ${windspeed} km/h`;

const windchill = document.querySelector('.winschill');

if (temperature <= 10 && windspeed > 4.8) {
    const windChillTemp = calculateWindchillCelsius(temperature, windspeed);
    windchill.innerHTML = `<strong>Wind Chill:</strong> ${windChillTemp.toFixed(1)}° C`;
} else {
    windchill.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}
