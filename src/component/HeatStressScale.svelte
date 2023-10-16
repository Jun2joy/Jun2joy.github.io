<script>
  import { selectedSport, data_cur } from '../store/store.js'; 
  import { onMount } from 'svelte';
  
  let riskValue;
  let Plotly;

  onMount(async () => {
      await importPlotly();
      riskValue = $data_cur.risk_value_interpolated;
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      }
  });

  $: {
      if (riskValue !== 0.0 && Plotly) {
          createPlotlyChart(riskValue);
      }
  }

  function handleResize() {
      if (Plotly) {
          createPlotlyChart(riskValue);
      }
  }

  function createPlotlyChart(value) {
      const fig = {
        data: [
          {
              type: "indicator",
              mode: "gauge",
              value: value,
              gauge: {
                shape: "bullet",
                axis: { range: [0, 4] },
                steps: [
                  { range: [0, 1], color: "#00AD7C" },
                  { range: [1, 2], color: "#FFD039" },
                  { range: [2, 3], color: "#E45A01" },
                  { range: [3, 4], color: "#CB3327" },
                ],
                borderwidth: 0,
                bar: {
                  color: "lightgray",
                  thickness: 0.3,
                  line: { color: "black", width: 1 },
                },
              },
              domain: { x: [0, 1], y: [0, 1] }
            },
          ],
          layout: {
            annotations: [
              {
                x: value / 4,
                y: 1,
                text: "Now",
                showarrow: false,
                font: {
                  color: "#fff",
                },
              },
            ],
            height: 70,
              margin: {
                  autoexpand: true, 
                  l: 0, 
                  r: 0, 
                  t: 0, 
                  b: 0
              },
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
                      color: "rgb(82, 82, 82)",
                  },
                  title_text: "",
              },
              yaxis: {
                  showgrid: true,
                  zeroline: false,
                  showline: false,
                  showticklabels: true,
              },
              autosize: true,
              showlegend: false,
              plot_bgcolor: "white",
              paper_bgcolor: "transparent",
              
          },
          config: {
            staticPlot: true
           }
        };
        
    
        Plotly.newPlot("indicator-chart", fig);

      }

  
  async function importPlotly() {
      return new Promise((resolve, reject) => {
          if (!window.Plotly) {
              const script = document.createElement('script');
              script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
              script.async = true;
              script.onload = () => {
                  Plotly = window.Plotly;
                  resolve();
              };
              script.onerror = reject;
              document.head.appendChild(script);
          } else {
              Plotly = window.Plotly;
              resolve();
          }
      });
  }
</script>

{#if !$selectedSport}
<!-- no sport -->
{:else}
<!--select sport -->
<h3 style="margin-top: 1rem;">Heat Stress Scale:</h3>
<div id="indicator-chart" style="width: 100%;"></div>
<!-- legend_risk() -->
{/if}
