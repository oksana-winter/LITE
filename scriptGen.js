const geoApiHeaders = {
  "X-RapidAPI-Key": "e103f2a061msh51a75c81697ce14p1946e3jsne278d729bdf3",
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
};

async function generatePlace() {
  const cityData = await fetchRandomCity();
  if (!cityData) return;

  const { city, country, latitude, longitude } = cityData;
  const weather = await fetchWeather(latitude, longitude);
  const imageUrl = await fetchImage(city);

  const description = `Explore the beauty of ${city}, ${country}! A perfect destination with rich culture and stunning scenery.`;

  document.getElementById("carta").style.background = `url('${imageUrl}') center/cover no-repeat fixed`;
  document.body.style.background = `url('${imageUrl}') center/cover no-repeat fixed`;
  


  document.getElementById("contentCarta").innerHTML = `
  <h2><img src="set/ic-places-mountains@2x.png" alt="Location Icon" class="icon"> ${city}, ${country}</h2>
  <p><img src="set/ic-sport-yard@2x.png" alt="Coordinates Icon" class="icon"> Coordinates: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}</p>
  <p><img src="set/ic-weather-temperature@2x.png" alt="Weather Icon" class="icon"> Weather: ${weather?.temp}°C, ${weather?.desc}</p>
  <p><img src="set/ic-ecommerce-card@2x.png" alt="Description Icon" class="icon"> ${description}</p>
`;

}

async function fetchRandomCity() {
  const offset = Math.floor(Math.random() * 10000);
  const res = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=1&offset=${offset}`, {
    method: "GET",
    headers: geoApiHeaders
  });
  const data = await res.json();
  const city = data.data[0];
  return {
    city: city.city,
    country: city.country,
    latitude: city.latitude,
    longitude: city.longitude
  };
}

async function fetchWeather(lat, lon) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3785a0c437aad34ef51743426bd13219`);
    const data = await res.json();
    return {
      temp: data.main.temp,
      desc: data.weather[0].description
    };
  } catch {
    return null;
  }
}

async function fetchImage(query) {
  try {
    // Try to found an image by the city name
    // If not found, try to found an image by the country name
    let res = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=ReeBw8kq36Z3ZXTYvct_TAv6D5-70wK-nqb3HNdAVt4`);
    let data = await res.json();

    if (data && data.urls && data.urls.regular) {
      return data.urls.regular;
    }

 // If not found, try to found an image by the country name or fullback-theme
 
    const fallbackTopics = ["travel", "landscape", "nature", "city", "adventure"];
    const randomTopic = fallbackTopics[Math.floor(Math.random() * fallbackTopics.length)];

    res = await fetch(`https://api.unsplash.com/photos/random?query=${randomTopic}&client_id=ReeBw8kq36Z3ZXTYvct_TAv6D5-70wK-nqb3HNdAVt4`);
    data = await res.json();

    return data.urls?.regular || "https://via.placeholder.com/600x400";

  } catch (e) {
    return "https://via.placeholder.com/600x400";
  }
}
