<script lang="ts">
  import { onMount } from 'svelte';
  import { selectedSport } from '../store/store.js'; 
  import { sports_category } from '../store/sportsCategoryStore.js';


  let value: string | null = "Abseiling";
  let searchValue = $selectedSport;  
  let showFullList = true;  // Initially show the full list
  let dropdownOpen = false;
  let hasSelectedSport = false;



  $: if (value !== null) $selectedSport = value;

  $: filteredSports = showFullList
      ? Object.keys(sports_category)
      : Object.keys(sports_category).filter(sport => sport.toLowerCase().includes(searchValue.toLowerCase()));

  function clearInput() {
    searchValue = '';
    showFullList = true;  // Show the full list after clearing
    selectedSport.set(''); 
    hasSelectedSport = false; 
  }

  function selectSport(sport: string) {
    value = sport;
    searchValue = sport;
    showFullList = true;  // Show the full list after selecting
    dropdownOpen = false; 
    hasSelectedSport = true;
  }

  function handleDropdownShow() {
      dropdownOpen = true;
    }
  
    function handleDropdownHide() {
      dropdownOpen = false;
     // 如果没有选择任何运动，则重置搜索值
      if (!hasSelectedSport) {
       searchValue = '';
      }
}

  
    function handleInput() {
      if (!searchValue) { // Reset to initial value if searchValue is empty
      dropdownOpen = true;
      showFullList = true;
      return; // Return early so we don't process the rest of the function
      }
      if (searchValue !== '') {
        showFullList = false; // When user types something, filter the list
      } else {
        showFullList = true; // Show the full list if searchValue is empty
      }
    }
  
    onMount(() => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      dropdown.addEventListener('show.bs.dropdown', handleDropdownShow);
      dropdown.addEventListener('hide.bs.dropdown', handleDropdownHide);
    }
    
    function closeDropdownOnClickOutside(event: MouseEvent) {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      dropdownOpen = false;
    }

  }

    // 添加全局点击事件监听器以关闭下拉菜单
    window.addEventListener('click', closeDropdownOnClickOutside);

    return () => {
      if (dropdown) {
        dropdown.removeEventListener('show.bs.dropdown', handleDropdownShow);
        dropdown.removeEventListener('hide.bs.dropdown', handleDropdownHide);
      }
      // 在组件销毁时移除全局点击事件监听器
      window.removeEventListener('click', closeDropdownOnClickOutside);
    }
  });
     function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function handleKeyDown(event: KeyboardEvent) {
  // Check if the key pressed is backspace or delete
  if ((event.key === 'Backspace' || event.key === 'Delete') && (hasSelectedSport || searchValue === "Abseiling")) {
    event.preventDefault(); // Prevent default behavior
    searchValue = ''; // Clear the entire sport name
    selectedSport.set(''); // Clear the selected sport from the store
    hasSelectedSport = false; // Reset the flag
  }

  // If an alphanumeric key is pressed and a sport is selected or the cursor is at the start or the value is the default one
  const isAlphanumeric = /^[a-z0-9]$/i.test(event.key);
  const cursorAtStart = (event.target as HTMLInputElement).selectionStart === 0;
  if ((isAlphanumeric && (hasSelectedSport || searchValue === "Abseiling")) || (isAlphanumeric && cursorAtStart)) {
    searchValue = ''; // Clear the existing sport or default value
    selectedSport.set(''); 
    hasSelectedSport = false;
  }
}


</script>
<div class="container p-2">
  <div class="row align-items-center">
    <div class="col-auto">
      <label for="sportsCategoryInput">Sport:</label>
    </div>
    <div class="col">
      <div class="dropdown">
        <div class="input-wrapper" style="position: relative;">
          <input type="text" class="form-control dropdown-toggle" id="sportsCategoryInput" bind:value={searchValue} on:input={handleInput} on:keydown={handleKeyDown} data-bs-toggle="dropdown" placeholder="Search..." autocomplete="off"/>
          <button on:click={clearInput} aria-label="Clear input" style="background: none; border: none; position: absolute; top: 50%; right: 25px; transform: translateY(-50%); cursor: pointer; outline: none; box-shadow: none;">
            <i class="fas fa-times fa-sm" style="color: #a9a9a9;"></i>
          </button>
          <button on:click="{toggleDropdown}" aria-label="Toggle dropdown" style="background: none; border: none; position: absolute; top: 50%; right: 5px; transform: translateY(-50%); cursor: pointer; outline: none; box-shadow: none;">
            <i class={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'} fa-sm`} style="color: #a9a9a9;"></i>
          </button>          
          <div class="dropdown-menu" aria-labelledby="sportsCategoryInput" style="max-height: 200px; overflow-y: auto; width: 100%; display: {dropdownOpen ? 'block' : 'none'};">
            {#if filteredSports.length > 0}
              {#each filteredSports as sport}
                <a class="dropdown-item" href="/" on:click={e => {e.preventDefault(); selectSport(sport);}}>{sport}</a>
              {/each}
            {:else}
              <span class="dropdown-item disabled">No result found</span>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>