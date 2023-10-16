<script src="https://cdn.plot.ly/plotly-latest.min.js">
    import { onMount } from 'svelte';
    import { selectedLocation,selectedSport,data_cur } from '../store/store';
    import points_curves from '../calculate/points_curves';
    import { getWeatherData } from '../calculate/weather';
    import { generateRegressionCurves } from '../calculate/regression_curves';
    import { calculateComfortIndices } from '../calculate/calculate_comfort_index';
  
    let dataFor;
    const hss_palette = ['#00AD7C', '#FFD039', '#E45A01', '#CB3327'];
    
    let chartElements = [];
    let location = null;
    let sport = null;
    let points = null;
    let isExpanded = [false, false, false];
    let dayMaxRisks = [];
    let currentDate = new Date();
    
  
    onMount(async() => {
      importPlotly();
      //console.log(points);
    });
  
    $:{
      location = $selectedLocation;
      sport = $selectedSport;
      
      if (location.state!=''&&sport) {
          (async () =>{
              try {
                  console.log("location");
                  const weatherData = await getWeatherData(
                      location.latitude,
                      location.longitude,
                      location.state
                  );
                  const data = await calculateComfortIndices(weatherData,sport);
                  currentDate = new Date(data[0].time);
                  let result = extractDayData(data);
                    dayMaxRisks = result.maxRisk;
                  console.log(result);
                  //console.log(result.maxRisk);
                  paintLineChart(result.data);
  
                  //console.log(result.maxRisks); // 打印每天的最大风险值
                  
              } catch (error) {
                  console.error('Error updating weather data:', error);
              }
          })();   
      }
  };
    
    function paintLineChart(daysData)
    {
      console.log("painted");
      const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
      daysData.forEach((singleDayData, dayIndex) => {
      let traces = [];
  
      traces.push({
          x: singleDayData.map((entry,index) => {
              let entryDate = new Date(entry.time);
              const month = monthNames[entryDate.getMonth()];
              if(index == 0){
                return `${entryDate.getHours().toString().padStart(2, '0')}:${entryDate.getMinutes().toString().padStart(2, '0')}<br>${month} ${entryDate.getDate()},${entryDate.getFullYear()}`;
              };
              return `${entryDate.getHours().toString().padStart(2, '0')}:${entryDate.getMinutes().toString().padStart(2, '0')}`;  
          }),
          y: new Array(singleDayData.length).fill(1),
          fill: "tozeroy",
          fillcolor: hss_palette[0],
          mode: "none"
      });
  
      [2, 3, 4].forEach((risk, ix) => {
          traces.push({
              x: singleDayData.map((entry,index) => {
                  let entryDate = new Date(entry.time);

                const month = monthNames[entryDate.getMonth()];
                if(index == 0){

                    return `${entryDate.getHours().toString().padStart(2, '0')}:${entryDate.getMinutes().toString().padStart(2, '0')}<br>${month} ${entryDate.getDate()},${entryDate.getFullYear()}`;
                };
                return `${entryDate.getHours().toString().padStart(2, '0')}:${entryDate.getMinutes().toString().padStart(2, '0')}`;
              }),
              y: new Array(singleDayData.length).fill(risk),
              fill: "tonexty",
              fillcolor: hss_palette[ix + 1],
              mode: "none"
          });
      });
  
      traces.push({
          x: singleDayData.map((entry,index) => {
              let entryDate = new Date(entry.time);
              const month = monthNames[entryDate.getMonth()];
              if(index == 0){
                return `${entryDate.getHours().toString().padStart(2, '0')}:${entryDate.getMinutes().toString().padStart(2, '0')}<br>${month} ${entryDate.getDate()},${entryDate.getFullYear()}`;
              };
              return `${entryDate.getHours().toString().padStart(2, '0')}:${entryDate.getMinutes().toString().padStart(2, '0')}`;  
          }),
          y: singleDayData.map(row => row["risk_value_interpolated"]),
          mode: "lines+markers",
          line: {
              color: "black",
              shape: "spline",
              smoothing: 1.3
          }
      });
  
      // ... (Rest of the code remains the same)
  
  
      const standardLayout = {
      xaxis: {
          showline: true,
          showgrid: false,
          showticklabels: true,
          linecolor: "rgb(204, 204, 204)",
          linewidth: 2,
          ticks: "outside",
          tickfont: {
              family: "Arial",
              size: 12,
              color: "rgb(82, 82, 82)"
          },
          tickangle: 0, // Rotate tick labels by 45 degrees for clarity
          tickvals: singleDayData.map((_, idx) =>  idx ).filter((idx) => idx % 2 === 0),  // Use every data point as tick
          title_text: ""
      },
      yaxis: {
          showgrid: false,
          zeroline: false,
          showline: false,
          showticklabels: false
      },
      autosize: true,
      margin: {
			l: 50, 
			r: 20, 
			t: 30, 
			b: 40 
	},
      showlegend: false,
      plot_bgcolor: "white"
  };
  
  const config = {
    staticPlot: true,
    responsive: true
  };
  
  Plotly.newPlot(chartElements[dayIndex], traces, standardLayout, config);
  });
}
  
async function importPlotly() {
        if (!window.Plotly) {
          const script = document.createElement('script');
          script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
          script.async = true;
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
          document.head.appendChild(script);
          Plotly = window.Plotly;
        } else {
          Plotly = window.Plotly;
        }
      }
  
      function determineMaxRisk(dayData) {
      const risksInOrder = ["extreme", "high", "moderate", "low"];
      for (const risk of risksInOrder) {
          if (dayData.some(entry => entry.risk === risk)) {
              return risk;
          }
      }
      return "low";  // Default to low if nothing matches
  }
  
  function extractDayData(data) {
      let currentDate = new Date(data[0].time); // 使用数据的第一条数据作为开始日期
      let maxRisks = [];
      let extractedData = [];
      
      // 定义风险等级的优先级
      const riskLevels = ["extreme", "high", "moderate", "low"];
  
      for (let i = 0; i < 4; i++) { // 对于4天
          let dailyData = data.filter(entry => {
              let entryDate = new Date(entry.time);
              return entryDate.getDate() === currentDate.getDate();
          });
  
          // 查找每天的最大风险
          let maxRisk = riskLevels.find(risk => dailyData.some(entry => entry.risk === risk));
          maxRisks.push(maxRisk);
  
          extractedData.push(dailyData);
          
          currentDate.setDate(currentDate.getDate() + 1); // 移到下一天
      }
  
      return {
          data: extractedData,
          maxRisk: maxRisks
      };
  }
  
  function toggleExpand(day) {
    isExpanded[day] = !isExpanded[day];
    if (isExpanded[day]) {
        // 当面板展开时，重新绘制图表以适应视口大小
        setTimeout(() => {
            Plotly.Plots.resize(chartElements[day]);
        });
    }
}

function getColorClass(risk) {
    switch (risk) {
        case "low": return "#00AD7C";
        case "moderate": return "#FFD039";
        case "high": return "#E45A01";
        case "extreme": return "#CB3327";
        default: return "grey";  // 或者任何其他默认颜色
    }
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  </script>
{#if !$selectedSport}
<!-- no sport -->
{:else}
<!-- Day 1 Displayed Outside of the Accordion -->
<div class="container pb-5" style="width: 100%;">
    <div bind:this={chartElements[0]} style="width: 100%; height: 400px;"></div>
</div>

<!-- Accordion for Day 2, 3, and 4 -->

    <div class="accordion accordion-flush" id="weatherAccordion">
        {#each [1, 2, 3] as day}
        <div class="accordion-item">
            <!-- Accordion Header -->
            <h2 class="accordion-header" id="headingDay{day}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDay{day}" aria-expanded="{isExpanded[day]}" aria-controls="collapseDay{day}"on:click={() => toggleExpand(day)}>
                    {daysOfWeek[(currentDate.getDay()+day)%7]}
            <div style="position: absolute; right: 60px; top: 50%; transform: translateY(-60%);">
                <div class="d-flex align-items-center">
                    <div class="p-0 m-0">Max risk:</div>
                    <div style="background-color: {getColorClass(dayMaxRisks[day])}" class="ms-1 p-1 m-0 badge">
                        {dayMaxRisks[day]}
                    </div>
                </div>

            </div>
            </button>
            </h2>
            <!-- Accordion Body -->
            <div id="collapseDay{day}" class="accordion-collapse collapse"aria-labelledby="headingDay{day}" data-bs-parent="#weatherAccordion" class:expanded={isExpanded[day]}>
            <div class="accordion-body p-2">
             <div bind:this={chartElements[day]}></div>
           </div>
       </div>
        </div>
        {/each}
    </div>

{/if}