<script lang="ts">
  import { onMount } from 'svelte';
  import postcodes from '../assets/postcodes.json';
  import { selectedLocation } from '../store/store.js';

  let selectedLocationName: string = 'Camperdown';
  let searchValue: string = 'Camperdown, NSW, 2050'; 
  let showFullList = true;
  let map: any;
  let marker: any;
  let dropdownOpen = false;
  let locationInput: any;
  let hasSelectedlocation = false;
  let isInitialized = false;
  let inputCharacterCount = 0;


  $: filteredLocations = showFullList
      ? postcodes
      : postcodes.filter(location => location.suburb.toLowerCase().includes(searchValue.toLowerCase()));


  onMount(async () => {
    const L = await import('leaflet');
    map = L.map('map'); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const icon = L.icon({
      iconUrl: '/marker-icon-2x.png',
      shadowUrl: '/marker-shadow.png',
      iconSize: [25, 41],
      shadowSize: [25, 41],
    });

    marker = L.marker([0, 0], { icon }).addTo(map);
    updateMarker('Camperdown'); 
    isInitialized = true;
  });

  function updateMarker(location: string): void {
    let selectedPostcode;
    if (location === 'Camperdown') {
        selectedPostcode = postcodes.find(postcode => postcode.suburb === location && postcode.postcode === 2050);
    } else {
        selectedPostcode = postcodes.find(postcode => postcode.suburb === location);
    }
    console.log("Selected postcode data:", selectedPostcode);
    if (selectedPostcode) {
        const latlng = [selectedPostcode.latitude, selectedPostcode.longitude];
        marker.setLatLng(latlng).update();
        map.setView(latlng, 11);
        selectedLocation.set(selectedPostcode);
    }
}

  onMount(() => {

    function handleGlobalClick(event: MouseEvent) {
      if (locationInput && !locationInput.contains(event.target)) {
        if (!hasSelectedlocation && inputCharacterCount > 0) {
          searchValue = '';
          inputCharacterCount = 0; 
        }
        dropdownOpen = false;
      }
    }

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  });


  function clearInput() {
    searchValue = '';
    dropdownOpen = false;
    hasSelectedlocation = false;
  }
  
  function selectLocation(location: string) {
    searchValue = location;
    updateMarker(location.split(', ')[0]);
    hasSelectedlocation = true;
    dropdownOpen = false; 
  }

  function handleInput() {
    if (searchValue !== '') {
      showFullList = false;
      inputCharacterCount = searchValue.length; 
    } else {
      showFullList = true;
      inputCharacterCount = 0; 
    }
  }
  
  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;

    if (hasSelectedlocation) {
        showFullList = true;
    }
}

  function handleKeyDown(event: KeyboardEvent) {
  // Check if the key pressed is backspace or delete
  if ((event.key === 'Backspace' || event.key === 'Delete') && (hasSelectedlocation || searchValue === "Camperdown, NSW, 2050")) {
    event.preventDefault(); // Prevent default behavior
    searchValue = ''; // Clear the entire location name

    // Reset the location to its default values
    selectedLocation.set({
      postcode: 0,
      suburb: '',
      state: '',
      latitude: 0,
      longitude: 0,
    });
    
    hasSelectedlocation = false; // Reset the flag
  }

  // If an alphanumeric key is pressed and a location is selected or the cursor is at the start or the value is the default one
  const isAlphanumeric = /^[a-z0-9]$/i.test(event.key);
  const cursorAtStart = (event.target as HTMLInputElement).selectionStart === 0;
  
  if ((isAlphanumeric && (hasSelectedlocation || searchValue === "Camperdown, NSW, 2050")) || (isAlphanumeric && cursorAtStart)) {
    searchValue = ''; // Clear the existing location or default value
    
    // Reset the location to its default values
    selectedLocation.set({
      postcode: 0,
      suburb: '',
      state: '',
      latitude: 0,
      longitude: 0,
    });
    
    hasSelectedlocation = false;
  }
}

</script>

<div class="container p-2">
  <div class="row align-items-center">
    <div class="col-auto">
      <label for="locationInput">Location:</label>
    </div>
    <div class="col">
      <div class="dropdown">
        <div class="input-wrapper" style="position: relative;">
          <input  bind:this={locationInput}  type="text" class="form-control dropdown-toggle" id="locationInput"  bind:value={searchValue}  on:keydown={handleKeyDown}  on:input={handleInput}  on:click={toggleDropdown}  placeholder="Search..." autocomplete="off"/>
          <button  on:click|stopPropagation={clearInput}  aria-label="Clear input" style="background: none; border: none; position: absolute; top: 50%; right: 25px; transform: translateY(-50%); cursor: pointer; outline: none; box-shadow: none;">
            <i class="fas fa-times fa-sm" style="color: #a9a9a9;"></i>
          </button>
          <button on:click|stopPropagation= {toggleDropdown} aria-label="Toggle dropdown" style="background: none; border: none; position: absolute; top: 50%; right: 5px; transform: translateY(-50%); cursor: pointer; outline: none; box-shadow: none;">
              <i class={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'} fa-sm`} style="color: #a9a9a9;"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="sportsCategoryInput" style="max-height: 200px; overflow-y: auto; width: 100%; display: {dropdownOpen ? 'block' : 'none'};">
            {#if filteredLocations.length > 0}
                {#each filteredLocations as location}
                 <a class="dropdown-item" href="/" on:click|stopPropagation = {e => {e.preventDefault(); selectLocation(`${location.suburb}, ${location.state}, ${location.postcode}`);}}> {location.suburb}, {location.state}, {location.postcode} </a>
                {/each}
            {:else}
            <div class="dropdown-item" style="color: gray;">No result found</div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class='col p-1'>
<div id="map" style="height: 180px; width:100%;"></div>
</div>