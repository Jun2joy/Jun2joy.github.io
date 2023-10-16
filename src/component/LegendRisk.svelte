<script lang="ts">
   import { selectedSport} from '../store/store.js'; 
</script>
{#if !$selectedSport}
  <!-- no sport -->
{:else}
    <div class="my-2 justify-content-around row">
      <div class="col-auto">
        <div class= "align-items-center row"> 
          <div class ="col">
           <div style="background-color: #00AD7C; border-radius: 50%; height: 1em; width: 1em;"></div>
           </div>
          <div class="p-0 col">low</div>
        </div>
      </div>
      
      <div class="col-auto">
        <div class= "align-items-center row"> 
          <div class ="col">
           <div style="background-color: #FFD039; border-radius: 50%; height: 1em; width: 1em;"></div>
           </div>
          <div class="p-0 col">moderate</div>
        </div>
      </div>

      <div class="col-auto">
        <div class= "align-items-center row"> 
          <div class ="col">
           <div style="background-color: #E45A01; border-radius: 50%; height: 1em; width: 1em;"></div>
           </div>
          <div class="p-0 col">high</div>
        </div>
      </div>

      <div class="col-auto">
        <div class= "align-items-center row"> 
          <div class ="col">
           <div style="background-color: #CB3327; border-radius: 50%; height: 1em; width: 1em;"></div>
           </div>
          <div class="p-0 col">extreme</div>
        </div>
      </div>
    </div>

{/if}