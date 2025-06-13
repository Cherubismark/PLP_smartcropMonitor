const api = '/api/crops';

document.getElementById('cropForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const crop = {
    name: document.getElementById('name').value,
    location: document.getElementById('location').value,
    plantedAt: document.getElementById('plantedAt').value
  };

  const res = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(crop)
  });

  const data = await res.json();
  alert('Crop added: ' + data.name);
});

async function loadCrops() {
  const res = await fetch(api);
  const crops = await res.json();

  const list = document.getElementById('cropList');
  list.innerHTML = '';

  crops.forEach(crop => {
    const li = document.createElement('li');
    li.textContent = `${crop.name} - ${crop.location} - Planted on ${crop.plantedAt.substring(0,10)}`;
    list.appendChild(li);
  });
}

async function getWeather() {
  const location = document.getElementById('weatherLocation').value;
  const res = await fetch(`${api}/weather/${location}`);
  const weather = await res.json();

  const result = document.getElementById('weatherResult');
  result.innerHTML = `
    <p>Temperature: ${weather.main.temp}°C</p>
    <p>Condition: ${weather.weather[0].description}</p>
    <p>Humidity: ${weather.main.humidity}%</p>
  `;
}
