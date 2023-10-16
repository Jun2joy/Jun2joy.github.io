<script>
  import { onMount } from 'svelte';
  import { selectedLocation, selectedSport, data_cur } from '../store/store';
  import { getWeatherData } from '../calculate/weather';
  import { generateRegressionCurves } from '../calculate/regression_curves';
  import { calculateComfortIndices } from '../calculate/calculate_comfort_index';


  let location = null;
  let sport = null;
  let points = null;
      

  $: {
      location = $selectedLocation;
      sport = $selectedSport;
    if (location.state!=''&&sport) {
      (async () =>{
        try {
          const weatherData = await getWeatherData(
            location.latitude,
            location.longitude,
            location.state
          );

          const data = await calculateComfortIndices(weatherData,sport);
          console.log(data);
          data_cur.set(data[0]);
        } catch (error) {
          console.error('Error updating weather data:', error);
        }
      })();
    }
  }
  
</script>