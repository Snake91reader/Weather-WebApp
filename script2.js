const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    'f00c38e0279b7bc85480c3fe775d518c';



async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${data.main.temp}&#176;C`); // Use HTML entity for the degree symbol
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);

    const weatherCondition = data.weather[0].main.toLowerCase();
    
    const weatherImageMap = {
        clear: 'a.png',
        clouds: 'b.png',
        rain: 'c.png',
        drizzle: 'd.png',
        snow: 'e.png',
        thunderstorm: 'f.png',
        fog: 'g.png'
    };

    const weatherImage = weatherImageMap[weatherCondition] // || 'path/to/default-weather.png';
    $('#weather-icon').attr('src', weatherImage); 
    
    $('#weather-info').fadeIn();

   
    
}
