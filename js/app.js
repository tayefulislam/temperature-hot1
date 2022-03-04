const API_KEY = `14f925dbdaf25bebe997db65603ee867`;
const search = () => {

    const getInput = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTempareature(data))
}

const setInnerText = (id, value) => {
    document.getElementById(id).innerHTML = value;
}

const displayTempareature = (teminfo) => {
    console.log(teminfo)
    setInnerText('city', `${teminfo.name}`);
    setInnerText('temperature', `${teminfo.main.temp}`);
    setInnerText('condition', `${teminfo.weather[0].main}`);

    const url = `https://openweathermap.org/img/wn/${teminfo.weather[0].icon}@2x.png`

    console.log(url);

    const setIcon = document.getElementById('weather-icon');

    setIcon.setAttribute('src', url);


}

