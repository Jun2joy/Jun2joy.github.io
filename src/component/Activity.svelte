<script lang="ts">
      import { selectedSport, data_cur} from '../store/store.js'; 
      import { hss_palette} from '../store/textstore.js'; 
    let iconPath: string;
    let defaultIconPath = "/icons/Abseiling.png";
    let backgroundColor: string; 
    let risk_level= 1;
    let risk: string;

    $: {
        iconPath = $selectedSport 
            ? `/icons/${$selectedSport}.png` 
            : defaultIconPath;

            risk_level = $data_cur.riskValue;
            if (risk_level === 1) {
                backgroundColor = hss_palette[1]; 
            } else if(risk_level === 2) { 
                backgroundColor = hss_palette[2]; 
            }else if(risk_level === 3) { 
                backgroundColor = hss_palette[3];
            }
            else if(risk_level === 0) { 
                backgroundColor = hss_palette[0];
            }
            risk = $data_cur.risk;
    }
  
    function handleImageError() {
        iconPath = defaultIconPath;
    }
  </script>

{#if $selectedSport !== ''}
  <div role="alert" class="fade alert show" id="id-alert-risk-current-value" style="text-align: center; background-color: {backgroundColor};">
    <div id="id-icon-sport" class="p-2">
        <div class="my-1 align-items-center justify-content-center row">
            <!-- Icon/Image section -->
            <div class="col-auto" style="text-align: right;">
                <img 
                    src={iconPath} 
                    alt={`Activity: ${$selectedSport || 'Abseiling'}`} 
                    on:error={handleImageError}
                    width="50px" 
                    style="max-width: 100%; height: auto; filter: drop-shadow(rgba(0, 0, 0, 0.4) 2px 5px 2px);"
                />
            </div>
  
            <!-- Text section -->
            <div class="col-auto" style="text-align: left;">
                <h3>Activity: {$selectedSport || 'Abseiling'}</h3>
            </div>
        </div>
    </div>
    <hr>
    <h6>Current estimated Heat Stress Risk is:</h6>
    {#if risk ==='moderate'}
    <h1 id="value-hss-current" class="alert-heading">Moderate</h1>
    {:else if risk ===  'high'}
    <h1 id="value-hss-current" class="alert-heading">High</h1>
   {:else if risk === 'extreme'}
    <h1 id="value-hss-current" class="alert-heading">Extreme</h1>
   {:else}
    <h1 id="value-hss-current" class="alert-heading">Low</h1>
    {/if}
  </div>
{:else}
  <div class="mt-2 alert alert-danger" role="alert">
    Please select a sport
  </div>
{/if}