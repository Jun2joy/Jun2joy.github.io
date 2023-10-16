<script >
  import { selectedSport, data_cur} from '../store/store.js'; 
  import {} from '../store/store.js';
  import {getRiskDetails} from '../store/textstore.js';
  let risk_level;
  let value = { description: '', suggestion: '' }; // 新增一个变量value


  $: {
    risk_level = $data_cur.risk;
    if(risk_level!=''){
      console.log('risk_level:', risk_level);
      value = getRiskDetails(risk_level);
      console.log(value.description);
      console.log(value.suggestion);
      console.log(value.icons);
    }
  }
  
  
</script>

{#if !$selectedSport}
  <!-- no sport -->
{:else}
  <!--select sport -->
    <div class="mt-1 alert alert-secondary" id="id-alert-risk-current-recommendations" >
      <h3 style="color: #41464B;">Key recommendations:</h3>
      <hr>
      <!-- div-icons-suggestions -->
      <div style="text-align: center;">
        {#if value.icons && value.icons.length > 0}
            {#each value.icons as { imgSrc, altText, size }, iconIndex}
                <div class = "col-auto" style="margin:  8px 1px; display: flex; align-items: center; justify-content: center; position: relative;">
                    <img src={imgSrc} alt={altText} style="width: {size || '50px'}; height: {size || '50px'}; margin-right: 8px; position: relative; z-index: 1; filter: drop-shadow(2px 5px 2px rgba(0, 0, 0, 0.4));" />
                    <h3 style="font-size: 28px; color:#41464B; margin: 1px 10px; position: relative; z-index: 1;">{altText}</h3>
                </div>
                <!-- svelte-ignore empty-block -->
                {#if iconIndex !== value.icons.length - 1}
                {/if}
            {/each}
        {/if} 
    </div>
    
    
    </div>



    <div class="my-2">
      <div class="accordion" id="id-accordion-risk-current">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne"> 
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Detailed suggestions: 
            </button>            
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#id-accordion-risk-current">
            <div class="accordion-body">
              <p id="value-risk-description">{@html value.description}
                <p>You should:</p>
              <!-- value-risk-suggestions-->
              <div style="display: inline-block; margin: 10px;">{@html value.suggestion}
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2>Forecasted risk for today</h2>
    <!-- legend_risk() -->
    <div id="fig-forecast_line"></div>
    <div id="fig-forecast-next-days"></div>
{/if}