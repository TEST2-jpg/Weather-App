async function getAPI(location) {
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2509b65fb135e05466a84e6de5fe4f84`, { mode: 'cors' });
    const data = await api.json();
    return data
}
async function getData(infos) {
    const data = await infos;
    const name = data.name;
    const { temp, humidity, temp_max, temp_min } = data.main;
    const { main } = data.weather[0];
    console.log(data);
    console.log(name, temp, humidity, temp_max, temp_min, main);
    domStuff(name, main, temp, humidity);
}

function domStuff(name, main, temp, humidity) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    const city = document.createElement('h2');
    city.textContent = name;
    card.appendChild(city)

    const temperature = document.createElement('div');
    temperature.textContent = Math.round(temp - 273.15) + '°C';
    card.appendChild(temperature)

    const moist = document.createElement('div');
    moist.textContent ='Humidity: ' + humidity + '%';
    card.appendChild(moist);

    const weather = document.createElement('div');
    weather.textContent = main;
    card.appendChild(weather)

}
const search = document.querySelector('#search')
search.addEventListener('submit', e => {
    e.preventDefault();
    const location = document.querySelector('#location').value;
    console.log(location);
    const infos = getAPI(location);
    getData(infos);
    document.querySelector('#location').value = ''

})
