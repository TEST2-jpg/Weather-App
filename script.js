// class WeatherInfo {
//     constructor(location, main, wind) {
//         this.location = location
//         this.main = main
//         this.wind = wind
//     }
// }
async function getAPI(location) {
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2509b65fb135e05466a84e6de5fe4f84`, { mode: 'cors' });
    const data = await api.json();
    return data
}
async function getData() {
    const data = await mic;
    const name = data.name
    const { temp, humidity, temp_max, temp_min } = data.main
    const { main, description } = data.weather[0]
    console.log(data)
    console.log(name,temp, humidity, temp_max, temp_min, main, description)
}

const search = document.querySelector('#search')
const test = prompt()
const mic = getAPI(test)

getData()
