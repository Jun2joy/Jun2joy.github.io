<script lang="ts">
  import SelectSport from '../component/SelectSport.svelte';
  import Recommendations from '../component/Recommendations.svelte';
  import SelectLocation from '../component/SelectLocation.svelte';
  import Activity from '../component/Activity.svelte';
  import LineChart from '../component/LineChart.svelte';
  import Data from '../component/DataPreparation.svelte';
  import LegendRisk from '../component/LegendRisk.svelte';
  import HeatStressScale from '../component/HeatStressScale.svelte';
	
  let selectedSport: string | null = null;

  function handleSportSelection(event: CustomEvent<string | null>) {
    selectedSport = event.detail;
  }
</script>

<div class="container-fluid">

  <!-- Sport Selection -->
  <div class="row mb-2">
    <div class="col ">
      <SelectSport on:sportSelected={handleSportSelection} />
      <SelectLocation />
    </div>
  </div>

  <!-- Location Selection -->
  <div class="row mb-2">
    <div class="col pb-1">
   
    </div>
  </div>

<!-- Activity Display -->
<div class="row mb-2">
  <div class="col pb-1">
    <Activity  />
    <HeatStressScale />
    <Data/>
    <LegendRisk />
    <Recommendations />
  </div>
</div>

<div class="row mb-2">
  <div class="col pb-1">
    <LegendRisk />
    <LineChart  />
  </div>

</div>
</div>

