// weather.js
import axios from 'axios';
import moment from 'moment-timezone';

const time_zones = {
  NSW: "Australia/Sydney",
  WA: "Australia/Perth",
  ACT: "Australia/Canberra",
  NT: "Australia/Darwin",
  SA: "Australia/Adelaide",
  QLD: "Australia/Brisbane",
  VIC: "Australia/Melbourne",
  TAS: "Australia/Hobart",
};

export async function getWeatherData(lat, lon , tz) {
  try {
    const response = await axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`, {
      // headers: {
      //   'User-Agent': 'https://federicotartarini.github.io/air-quality-weather-sg',
      // },
    });
    const timeseries = response.data.properties.timeseries;
    // Extract relevant data
    const filteredTimeseries = timeseries.filter(entry => entry.time);
    const weatherData = filteredTimeseries.map(entry => ({
      time: moment(entry.time).tz(time_zones[tz]),
      pressure: entry.data.instant.details.air_pressure_at_sea_level,
      tdb: entry.data.instant.details.air_temperature,
      cloud: entry.data.instant.details.cloud_area_fraction,
      rh: entry.data.instant.details.relative_humidity,
      wdir: entry.data.instant.details.wind_from_direction,
      wind: entry.data.instant.details.wind_speed,
    }));

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}