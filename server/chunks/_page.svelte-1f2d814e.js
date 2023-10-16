import { c as create_ssr_component, v as validate_component, d as subscribe, f as set_store_value, a as add_attribute, b as escape, e as each } from './ssr-28e3d90a.js';
import { w as writable } from './index-cfddc26d.js';
import axios from 'axios';
import moment from 'moment-timezone';
import 'regression';

const selectedSport = writable("Abseiling");
const selectedLocation = writable({
  postcode: 0,
  suburb: "",
  state: "",
  latitude: 0,
  longitude: 0
});
const data_cur = writable({
  time: "",
  pressure: 0,
  tdb: 0,
  cloud: 0,
  rh: 0,
  wdir: 0,
  wind: 0,
  moderate: 0,
  high: 0,
  extreme: 0,
  risk_value_interpolated: 0,
  risk: "",
  riskValue: 0
});
const sports_category = {
  "Walking": 1,
  "Archery": 2,
  "Bowls": 2,
  "Field Athletics": 2,
  "Fishing": 2,
  "Golf": 2,
  "Lifesaving Surf": 2,
  "Sailing": 2,
  "Shooting": 2,
  "Walking (brisk)": 2,
  "Abseiling": 3,
  "Australian Football": 3,
  "Basketball": 3,
  "Cycling": 3,
  "Canoeing": 3,
  "Caving": 3,
  "Kayaking": 3,
  "Netball": 3,
  "Oztag": 3,
  "Rock Climbing": 3,
  "Rowing": 3,
  "Football (Soccer)": 3,
  "Tennis": 3,
  "Touch Football": 3,
  "Long Distance Running": 3,
  "Triathlon": 3,
  "Volleyball": 3,
  "Baseball": 4,
  "Bush-walking": 4,
  "Cricket": 4,
  "Equestrian": 4,
  "Horseback Riding": 4,
  "Motor Cycling": 4,
  "Rugby Union": 4,
  "Rugby League": 4,
  "Softball": 4,
  "Field Hockey": 5,
  "Mountain Biking": 5
};
const SelectSport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredSports;
  let $selectedSport, $$unsubscribe_selectedSport;
  $$unsubscribe_selectedSport = subscribe(selectedSport, (value2) => $selectedSport = value2);
  let value = "Abseiling";
  let searchValue = $selectedSport;
  {
    set_store_value(selectedSport, $selectedSport = value, $selectedSport);
  }
  filteredSports = Object.keys(sports_category);
  $$unsubscribe_selectedSport();
  return `<div class="container p-2"><div class="row align-items-center"><div class="col-auto" data-svelte-h="svelte-1pvv5tx"><label for="sportsCategoryInput">Sport:</label></div> <div class="col"><div class="dropdown"><div class="input-wrapper" style="position: relative;"><input type="text" class="form-control dropdown-toggle" id="sportsCategoryInput" data-bs-toggle="dropdown" placeholder="Search..." autocomplete="off"${add_attribute("value", searchValue, 0)}> <button aria-label="Clear input" style="background: none; border: none; position: absolute; top: 50%; right: 25px; transform: translateY(-50%); cursor: pointer; outline: none; box-shadow: none;" data-svelte-h="svelte-10wy2fz"><i class="fas fa-times fa-sm" style="color: #a9a9a9;"></i></button> <button aria-label="Toggle dropdown" style="background: none; border: none; position: absolute; top: 50%; right: 5px; transform: translateY(-50%); cursor: pointer; outline: none; box-shadow: none;"><i${add_attribute("class", `fas fa-chevron-${"down"} fa-sm`, 0)} style="color: #a9a9a9;"></i></button> <div class="dropdown-menu" aria-labelledby="sportsCategoryInput" style="${"max-height: 200px; overflow-y: auto; width: 100%; display: " + escape("none", true) + ";"}">${filteredSports.length > 0 ? `${each(filteredSports, (sport) => {
    return `<a class="dropdown-item" href="/">${escape(sport)}</a>`;
  })}` : `<span class="dropdown-item disabled" data-svelte-h="svelte-gk3f86">No result found</span>`}</div></div></div></div></div></div>`;
});
const hss_palette = {
  0: "#00AD7C",
  1: "#FFD039",
  2: "#E45A01",
  3: "#CB3327"
};
const sma_risk_messages = {
  "low": {
    "description": "Maintaining hydration through regular fluid consumption and modifying clothing is still a simple, yet effective, way of keeping cool and preserving health and performance during the summer months.",
    "suggestions": `
        <p>· Ensure pre-exercise hydration by consuming 6 ml of water per kilogram of body weight
        every 2-3 hours before exercise. For a 70kg individual, this equates to 420ml of fluid
        every 2-3 hours (a standard sports drink bottle contains 500ml).</p>
        <p>· Drink regularly throughout exercise. You should aim to drink enough to offset sweat
        losses, but it is important to avoid over-drinking because this can also have negative
        health effects. To familiarise yourself with how much you typically sweat, become
        accustomed to weighing yourself before and after practice or competition.</p>
        <p>· Where possible, select light-weight and breathable clothing with extra ventilation.</p>
        <p>· Remove unnecessary clothing/equipment and/or excess clothing layers.</p>
        · Reduce the amount of skin that is covered by clothing – this will help increase your
        sweat evaporation, which will help you dissipate heat.
        `
  },
  "moderate": {
    "description": "Mncreasing the frequency and/or duration of your rest breaks during exercise or sporting activities is an effective way of reducing your risk for heat illness even if minimal resources are available.",
    "suggestions": `
        <p>· During training sessions, provide a minimum of 15 minutes of rest for every 45 minutes
        of practice.</p>
        <p>· Extend scheduled rest breaks that naturally occur during match-play of a particular
        sport (e.g. half-time) by ~10 minutes. This is effective for sports such as soccer/football and
        rugby and can be implemented across other sports such as field hockey.</p>
        <p>· Implement additional rest breaks that are not normally scheduled to occur. For example,
        3 to 5-min “quarter-time” breaks can be introduced mid-way through each half of a
        football or rugby match, or an extended 10-min drinks break can be introduced every
        hour of a cricket match or after the second set of a tennis match.</p>
        <p>· For sports with continuous play without any scheduled breaks, courses or play duration
        can be shortened.</p>
        · During all breaks in play or practice, everyone should seek shade – if natural shade is not
        available, portable sun shelters should be provided, and water freely available
        `
  },
  "high": {
    "description": "Active cooling strategies should be applied during scheduled and additional rest breaks, or before and during activity if play is continuous. Below are strategies that have been shown to effectively reduce body temperature. The suitability and feasibility of each strategy will depend on the type of sport or exercise you are performing. ",
    "suggestions": `
        <p>· Drinking cold fluids and/or ice slushies before exercise commences. Note that cold water
        and ice slushy ingestion during exercise is less effective for cooling.</p>
        <p>· Submerging your arms/feet in cold water.</p>
        <p>· Water dousing – wetting your skin with cool water using a sponge or a spray bottle helps
        increase evaporation, which is the most effective cooling mechanism in the heat.</p>
        <p>· Ice packs/towels – placing an ice pack or damp towel filled with crushed ice around your
        neck.</p>
        · Electric (misting) fans – outdoor fans can help keep your body cool, especially when
        combined with a water misting system.
        `
  },
  "extreme": {
    "description": "Exercise/play should be suspended. If play has commenced, then all activities should be stopped as soon as possible.",
    "suggestions": `
        <p>· All players should seek shade or cool refuge in an air-conditioned space if available</p>
        * Active cooling strategies should be applied.
        `
  }
};
function getRiskDetails(risk_level) {
  const riskMessage = sma_risk_messages[risk_level];
  if (!riskMessage) {
    return {
      description: "",
      suggestion: "",
      icons: []
    };
  }
  const description = riskMessage.description;
  const suggestion = riskMessage.suggestions;
  let icons = [
    { imgSrc: "/icons/water-bottle.png", altText: "Stay hydrated" },
    { imgSrc: "/icons/tshirt.png", altText: "Wear light clothing" }
  ];
  if (risk_level === "moderate" || risk_level === "high") {
    icons.push({ imgSrc: "/icons/pause.png", altText: "Rest Breaks" });
  }
  if (risk_level === "high") {
    icons.push({ imgSrc: "/icons/slush-drink.png", altText: "Active Cooling" });
  }
  if (risk_level === "extreme") {
    icons = [
      { imgSrc: "/icons/stop.png", altText: "Consider Suspending Play", size: "100px" }
    ];
  }
  return { description, suggestion, icons };
}
const Recommendations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data_cur, $$unsubscribe_data_cur;
  let $selectedSport, $$unsubscribe_selectedSport;
  $$unsubscribe_data_cur = subscribe(data_cur, (value2) => $data_cur = value2);
  $$unsubscribe_selectedSport = subscribe(selectedSport, (value2) => $selectedSport = value2);
  let risk_level;
  let value = { description: "", suggestion: "" };
  {
    {
      risk_level = $data_cur.risk;
      if (risk_level != "") {
        console.log("risk_level:", risk_level);
        value = getRiskDetails(risk_level);
        console.log(value.description);
        console.log(value.suggestion);
        console.log(value.icons);
      }
    }
  }
  $$unsubscribe_data_cur();
  $$unsubscribe_selectedSport();
  return `${!$selectedSport ? `` : ` <div class="mt-1 alert alert-secondary" id="id-alert-risk-current-recommendations"><h3 style="color: #41464B;" data-svelte-h="svelte-w4y11h">Key recommendations:</h3> <hr>  <div style="text-align: center;">${value.icons && value.icons.length > 0 ? `${each(value.icons, ({ imgSrc, altText, size }, iconIndex) => {
    return `<div class="col-auto" style="margin: 8px 1px; display: flex; align-items: center; justify-content: center; position: relative;"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", altText, 0)} style="${"width: " + escape(size || "50px", true) + "; height: " + escape(size || "50px", true) + "; margin-right: 8px; position: relative; z-index: 1; filter: drop-shadow(2px 5px 2px rgba(0, 0, 0, 0.4));"}"> <h3 style="font-size: 28px; color:#41464B; margin: 1px 10px; position: relative; z-index: 1;">${escape(altText)}</h3></div>  ${iconIndex !== value.icons.length - 1 ? `` : ``}`;
  })}` : ``}</div></div> <div class="my-2"><div class="accordion" id="id-accordion-risk-current"><div class="accordion-item"><h2 class="accordion-header" id="headingOne" data-svelte-h="svelte-me9k7k"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Detailed suggestions:</button></h2> <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#id-accordion-risk-current"><div class="accordion-body"><p id="value-risk-description"><!-- HTML_TAG_START -->${value.description}<!-- HTML_TAG_END --> </p><p data-svelte-h="svelte-rnsfas">You should:</p>  <div style="display: inline-block; margin: 10px;"><!-- HTML_TAG_START -->${value.suggestion}<!-- HTML_TAG_END --></div></div></div></div></div></div> <h2 data-svelte-h="svelte-19xs6bx">Forecasted risk for today</h2>  <div id="fig-forecast_line"></div> <div id="fig-forecast-next-days"></div>`}`;
});
const postcodes = [
  {
    postcode: 200,
    suburb: "Australian National University",
    state: "ACT",
    latitude: -35.28,
    longitude: 149.12
  },
  {
    postcode: 221,
    suburb: "Barton",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.1
  },
  {
    postcode: 800,
    suburb: "Darwin",
    state: "NT",
    latitude: -12.8,
    longitude: 130.96
  },
  {
    postcode: 801,
    suburb: "Darwin",
    state: "NT",
    latitude: -12.8,
    longitude: 130.96
  },
  {
    postcode: 804,
    suburb: "Parap",
    state: "NT",
    latitude: -12.43,
    longitude: 130.84
  },
  {
    postcode: 810,
    suburb: "Alawa",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Brinkin",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Casuarina",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Coconut Grove",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Jingili",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Lee Point",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Lyons",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Millner",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Moil",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Muirhead",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Nakara",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Nightcliff",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Rapid Creek",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Tiwi",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Wagaman",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 810,
    suburb: "Wanguri",
    state: "NT",
    latitude: -12.38,
    longitude: 130.88
  },
  {
    postcode: 811,
    suburb: "Casuarina",
    state: "NT",
    latitude: -12.38,
    longitude: 130.85
  },
  {
    postcode: 812,
    suburb: "Anula",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Buffalo Creek",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Holmes",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Karama",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Leanyer",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Malak",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Marrara",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Northlakes",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Sanderson",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Woodleigh Gardens",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 812,
    suburb: "Wulagi",
    state: "NT",
    latitude: -12.4,
    longitude: 130.91
  },
  {
    postcode: 813,
    suburb: "Sanderson",
    state: "NT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 814,
    suburb: "Nightcliff",
    state: "NT",
    latitude: -12.38,
    longitude: 130.85
  },
  {
    postcode: 815,
    suburb: "Charles Darwin University",
    state: "NT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 820,
    suburb: "Bagot",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Bayview",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Charles Darwin",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Coonawarra",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Cullen Bay",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Darwin DC",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Darwin International Airport",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Darwin MC",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "East Point",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Eaton",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Fannie Bay",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Larrakeyah",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Ludmilla",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Parap",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Raaf Base Darwin",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Stuart Park",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "The Gardens",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "The Narrows",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Winnellie",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 820,
    suburb: "Woolner",
    state: "NT",
    latitude: -12.41,
    longitude: 130.86
  },
  {
    postcode: 821,
    suburb: "Winnellie",
    state: "NT",
    latitude: -12.43,
    longitude: 130.88
  },
  {
    postcode: 822,
    suburb: "Acacia Hills",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Angurugu",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Anindilyakwa",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Annie River",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Bathurst Island",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Bees Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Belyuen",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Black Jungle",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Blackmore",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Border Store",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Burrundie",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Bynoe",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Bynoe Harbour",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Camp Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Channel Island",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Charles Darwin",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Charlotte",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Claravale",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Cobourg",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Collett Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Coomalie Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Cox Peninsula",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Croker Island",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Daly",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Daly River",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Darwin MC",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Darwin River Dam",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Delissaville",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Douglas-Daly",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "East Arm",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "East Arnhem",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Elrundie",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Eva Valley",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Finniss Valley",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Fleming",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Fly Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Freds Pass",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Galiwinku",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Glyde Point",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Goulburn Island",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Gunbalanya",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Gunn Point",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Hayes Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Hidden Valley",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Hotham",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Hughes",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Kakadu",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Koolpinyah",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Lake Bennett",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Lambells Lagoon",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Litchfield Park",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Livingstone",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Lloyd Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Mandorah",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Maningrida",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Maranunga",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Margaret River",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Marrakai",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Mcminns Lagoon",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Mickett Creek",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Middle Point",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Milikapiti",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Milingimbi",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Millwood",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Milyakburra",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Minjilang",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Mount Bundey",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Murrumujuk",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Nauiyu",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Nemarluk",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Nganmarriyanga",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Nguiu",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Numbulwar",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Numburindi",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Oenpelli",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Palumpa",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Peppimenarti",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Pirlangimpi",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Point Stephens",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Point Stuart",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Pularumpi",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Rakula",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Ramingining",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Robin Falls",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Rum Jungle",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Sandpalms Roadhouse",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Southport",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Stapleton",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Thamarrurr",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Tipperary",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Tivendale",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Tiwi Islands",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Tortilla Flats",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Tumbling Waters",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Umbakumba",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Vernon Islands",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Wadeye",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Wagait Beach",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Wak Wak",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Warruwi",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Weddell",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "West Arnhem",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Wickham",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Winnellie",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Wishart",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 822,
    suburb: "Woolaning",
    state: "NT",
    latitude: -12.8,
    longitude: 131.13
  },
  {
    postcode: 828,
    suburb: "Berrimah",
    state: "NT",
    latitude: -12.47,
    longitude: 130.91
  },
  {
    postcode: 828,
    suburb: "Knuckey Lagoon",
    state: "NT",
    latitude: -12.47,
    longitude: 130.91
  },
  {
    postcode: 829,
    suburb: "Holtze",
    state: "NT",
    latitude: -14.46,
    longitude: 132.28
  },
  {
    postcode: 829,
    suburb: "Pinelands",
    state: "NT",
    latitude: -14.46,
    longitude: 132.28
  },
  {
    postcode: 830,
    suburb: "Archer",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Driver",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Durack",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Farrar",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Gray",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Marlow Lagoon",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Moulden",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Palmerston",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Shoal Bay",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Woodroffe",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 830,
    suburb: "Yarrawonga",
    state: "NT",
    latitude: -12.49,
    longitude: 130.97
  },
  {
    postcode: 831,
    suburb: "Palmerston",
    state: "NT",
    latitude: -12.48,
    longitude: 130.98
  },
  {
    postcode: 832,
    suburb: "Bakewell",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Bellamack",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Gunn",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Johnston",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Mitchell",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Rosebery",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Rosebery Heights",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 832,
    suburb: "Zuccoli",
    state: "NT",
    latitude: -12.49,
    longitude: 130.99
  },
  {
    postcode: 835,
    suburb: "Coolalinga",
    state: "NT",
    latitude: -12.48,
    longitude: 131.03
  },
  {
    postcode: 835,
    suburb: "Howard Springs",
    state: "NT",
    latitude: -12.48,
    longitude: 131.03
  },
  {
    postcode: 835,
    suburb: "Virginia",
    state: "NT",
    latitude: -12.48,
    longitude: 131.03
  },
  {
    postcode: 836,
    suburb: "Girraween",
    state: "NT",
    latitude: -12.53,
    longitude: 131.1
  },
  {
    postcode: 836,
    suburb: "Herbert",
    state: "NT",
    latitude: -12.53,
    longitude: 131.1
  },
  {
    postcode: 836,
    suburb: "Humpty Doo",
    state: "NT",
    latitude: -12.53,
    longitude: 131.1
  },
  {
    postcode: 837,
    suburb: "Manton",
    state: "NT",
    latitude: -12.46,
    longitude: 130.84
  },
  {
    postcode: 837,
    suburb: "Noonamah",
    state: "NT",
    latitude: -12.46,
    longitude: 130.84
  },
  {
    postcode: 838,
    suburb: "Berry Springs",
    state: "NT",
    latitude: -12.71,
    longitude: 131
  },
  {
    postcode: 840,
    suburb: "Dundee Beach",
    state: "NT",
    latitude: -12.72,
    longitude: 130.35
  },
  {
    postcode: 840,
    suburb: "Dundee Downs",
    state: "NT",
    latitude: -12.72,
    longitude: 130.35
  },
  {
    postcode: 840,
    suburb: "Dundee Forest",
    state: "NT",
    latitude: -12.72,
    longitude: 130.35
  },
  {
    postcode: 841,
    suburb: "Darwin River",
    state: "NT",
    latitude: -12.8,
    longitude: 130.96
  },
  {
    postcode: 845,
    suburb: "Batchelor",
    state: "NT",
    latitude: -13.04,
    longitude: 131.07
  },
  {
    postcode: 846,
    suburb: "Adelaide River",
    state: "NT",
    latitude: -13.23,
    longitude: 131.1
  },
  {
    postcode: 847,
    suburb: "Pine Creek",
    state: "NT",
    latitude: -13.82,
    longitude: 131.84
  },
  {
    postcode: 850,
    suburb: "Cossack",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 850,
    suburb: "Emungalan",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 850,
    suburb: "Katherine",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 850,
    suburb: "Katherine East",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 850,
    suburb: "Katherine South",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 850,
    suburb: "Lansdowne",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 851,
    suburb: "Katherine",
    state: "NT",
    latitude: -14.46,
    longitude: 132.26
  },
  {
    postcode: 852,
    suburb: "Arnold",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Baines",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Barunga",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Beswick",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Beswick Creek",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Binjari",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Birdum",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Bradshaw",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Buchanan",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Bulman Weemol",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Creswell",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Daguragu",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Daly Waters",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Delamere",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Dunmarra",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Edith",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Elsey",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Elsey Station",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Florina",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Flying Fox",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Gregory",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Gulung Mardrulk",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Gurindji",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Jilkminggan",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Kalkarindji",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Katherine",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Lajamanu",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Larrimah",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Limmen",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Manbulloo",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Maranboy",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Mataranka",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Mcarthur",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Miniyeri",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Ngukurr",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Nitmiluk",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Pellew Islands",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Pigeon Hole",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Robinson River",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Sturt Plateau",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Tanami East",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Timber Creek",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Top Springs",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Uralla",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Venn",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Victoria River",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Victoria River Downs",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Warumungu",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Wave Hill",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Wilton",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 852,
    suburb: "Yarralin",
    state: "NT",
    latitude: -14.92,
    longitude: 133.06
  },
  {
    postcode: 853,
    suburb: "Tindal",
    state: "NT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 854,
    suburb: "Borroloola",
    state: "NT",
    latitude: -16.82,
    longitude: 137.15
  },
  {
    postcode: 854,
    suburb: "King Ash Bay",
    state: "NT",
    latitude: -16.82,
    longitude: 137.15
  },
  {
    postcode: 860,
    suburb: "Tennant Creek",
    state: "NT",
    latitude: -19.65,
    longitude: 134.19
  },
  {
    postcode: 861,
    suburb: "Brunchilly",
    state: "NT",
    latitude: -18.94,
    longitude: 134.32
  },
  {
    postcode: 861,
    suburb: "Tennant Creek",
    state: "NT",
    latitude: -18.94,
    longitude: 134.32
  },
  {
    postcode: 862,
    suburb: "Avon Downs",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Calvert",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Cresswell Downs",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Elliott",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Helen Springs",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Muckaty Station",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Newcastle Waters",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Nicholson",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Pamayu",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Phillip Creek Station",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Renner Springs",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Tablelands",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Tennant Creek",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Three Ways",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Warrego",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Wollogorang Station",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 862,
    suburb: "Wycliffe Well",
    state: "NT",
    latitude: -20.23,
    longitude: 137.76
  },
  {
    postcode: 870,
    suburb: "Araluen",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Arumbera",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Braitling",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Ciccone",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Connellan",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Desert Springs",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "East Side",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Flynn",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Gillen",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Ilparpa",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Irlpme",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Larapinta",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Mount Johns",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Ross",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Sadadeen",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Stuart",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "The Gap",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "Undoolya",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 870,
    suburb: "White Gums",
    state: "NT",
    latitude: -12.44,
    longitude: 130.84
  },
  {
    postcode: 872,
    suburb: "Aherrenge",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ali Curung",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Alice Springs",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Amata",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Amoonguna",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ampilatwatja",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Anatye",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Anmatjere",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Antewenegerrde",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Areyonga",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Atitjere",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ayers Rock",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Barrow Creek",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Burt Plain",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Canteen Creek",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Chilla Well",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Costello",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Davenport",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Docker River",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Engawala",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Erldunda",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ernabella",
    state: "SA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Finke",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Fregon",
    state: "SA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ghan",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Gibson Desert North",
    state: "WA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Gibson Desert South",
    state: "WA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Haasts Bluff",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Hale",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Hart",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Hart Range",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Hermannsburg",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Hugh",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Imanpa",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Indulkana",
    state: "SA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ininti Store",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Jay Creek",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Kaltukatjara",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Kintore",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Kiwirrkurra",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Kulgera",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Kunparrka",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Lake Mackay",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Laramba",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Mereenie",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Mimili",
    state: "SA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Mount Liebig",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Mount Zeil",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Mulga Bore",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Murputja Homelands",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Mutitjulu",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Namatjira",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ngaanyatjarra-Giles",
    state: "WA",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Nyapari",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Nyirripi",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Papunya",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Patjarr",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Petermann",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Pitjantjatjara Homelands",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Sandover",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Santa Teresa",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Simpson",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Tanami",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Tara",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Thangkenharenge",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Ti Tree",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Titjikala",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Tjirrkarli",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Tjukurla",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Uluru",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Umpangara",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Urapuntja",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Wallace Rockhole",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Wanarn",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Willowra",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Wilora",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Wingellina",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Wutunugurra",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Yuelamu",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Yuendumu",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 872,
    suburb: "Yulara",
    state: "NT",
    latitude: -21,
    longitude: 134.38
  },
  {
    postcode: 880,
    suburb: "Gapuwiyak",
    state: "NT",
    latitude: -12.38,
    longitude: 130.87
  },
  {
    postcode: 880,
    suburb: "Gove",
    state: "NT",
    latitude: -12.38,
    longitude: 130.87
  },
  {
    postcode: 880,
    suburb: "Gunyangara",
    state: "NT",
    latitude: -12.38,
    longitude: 130.87
  },
  {
    postcode: 880,
    suburb: "Nhulunbuy",
    state: "NT",
    latitude: -12.38,
    longitude: 130.87
  },
  {
    postcode: 880,
    suburb: "Yirrkala",
    state: "NT",
    latitude: -12.38,
    longitude: 130.87
  },
  {
    postcode: 881,
    suburb: "Nhulunbuy",
    state: "NT",
    latitude: -12.18,
    longitude: 136.78
  },
  {
    postcode: 885,
    suburb: "Alyangula",
    state: "NT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 886,
    suburb: "Jabiru",
    state: "NT",
    latitude: -12.38,
    longitude: 130.89
  },
  {
    postcode: 906,
    suburb: "Winnellie",
    state: "NT",
    latitude: -12.43,
    longitude: 130.88
  },
  {
    postcode: 907,
    suburb: "Winnellie",
    state: "NT",
    latitude: -12.43,
    longitude: 130.88
  },
  {
    postcode: 909,
    suburb: "Charles Darwin University",
    state: "NT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1001,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1002,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1003,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1004,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1005,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1006,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1007,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1008,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1009,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1010,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1011,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1020,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1021,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1022,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1023,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1025,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1026,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1027,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1028,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1029,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1030,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1031,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1032,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.66,
    longitude: 150.87
  },
  {
    postcode: 1033,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1034,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1035,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1036,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1037,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1038,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1039,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1040,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1041,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1042,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1043,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1044,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1045,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1046,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1100,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1101,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1105,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1106,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1107,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1108,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1109,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1110,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1112,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1113,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1114,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1115,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1116,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.87
  },
  {
    postcode: 1117,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.66,
    longitude: 150.87
  },
  {
    postcode: 1118,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1119,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1120,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1121,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1122,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1123,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1124,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1125,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1126,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1127,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1128,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1129,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1130,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1131,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1132,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.66,
    longitude: 150.87
  },
  {
    postcode: 1133,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1134,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1135,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1136,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1137,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1138,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1139,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1140,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1141,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1142,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1143,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1144,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1145,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1146,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1147,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1148,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1149,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1150,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1151,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1152,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1153,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1154,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1155,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1156,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1157,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1158,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1159,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1160,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1161,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1162,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1163,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1164,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1165,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1166,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1167,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1168,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1169,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1170,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1171,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1172,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1173,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1174,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1175,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1176,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1177,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1178,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1179,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1180,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1181,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1182,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1183,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1184,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1185,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1186,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1187,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1188,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1189,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1190,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1191,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1192,
    suburb: "Sydney",
    state: "NSW",
    latitude: -34.79,
    longitude: 147.69
  },
  {
    postcode: 1193,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1194,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1195,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1196,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1197,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1198,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1199,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1200,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1201,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1202,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1203,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1204,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1205,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1206,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1207,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1208,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -29.82,
    longitude: 151.66
  },
  {
    postcode: 1209,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1210,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1211,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1212,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1213,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1214,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1215,
    suburb: "Australia Square",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 1216,
    suburb: "Grosvenor Place",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.03
  },
  {
    postcode: 1217,
    suburb: "Grosvenor Place",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.03
  },
  {
    postcode: 1218,
    suburb: "Grosvenor Place",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.03
  },
  {
    postcode: 1219,
    suburb: "Grosvenor Place",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.03
  },
  {
    postcode: 1220,
    suburb: "Grosvenor Place",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.03
  },
  {
    postcode: 1221,
    suburb: "Royal Exchange",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1222,
    suburb: "Royal Exchange",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1223,
    suburb: "Royal Exchange",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1224,
    suburb: "Royal Exchange",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1225,
    suburb: "Royal Exchange",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1226,
    suburb: "Queen Victoria Building",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1227,
    suburb: "Queen Victoria Building",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1228,
    suburb: "Queen Victoria Building",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1229,
    suburb: "Queen Victoria Building",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1230,
    suburb: "Queen Victoria Building",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.21
  },
  {
    postcode: 1231,
    suburb: "Sydney South",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.04
  },
  {
    postcode: 1232,
    suburb: "Sydney South",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.04
  },
  {
    postcode: 1233,
    suburb: "Sydney South",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.04
  },
  {
    postcode: 1234,
    suburb: "Sydney South",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.04
  },
  {
    postcode: 1235,
    suburb: "Sydney South",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.04
  },
  {
    postcode: 1236,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -29.82,
    longitude: 151.66
  },
  {
    postcode: 1237,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -29.82,
    longitude: 151.66
  },
  {
    postcode: 1238,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -29.82,
    longitude: 151.66
  },
  {
    postcode: 1239,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -29.82,
    longitude: 151.66
  },
  {
    postcode: 1240,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -29.82,
    longitude: 151.66
  },
  {
    postcode: 1291,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1292,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1293,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1294,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1295,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1296,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1297,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1298,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1299,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 1300,
    suburb: "Darlinghurst",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.22
  },
  {
    postcode: 1311,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1312,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1313,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1314,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1315,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1316,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1317,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1318,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1319,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1320,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1321,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1322,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1323,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1324,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1325,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1326,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1327,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1328,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1329,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1330,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1331,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1332,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1333,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1334,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1335,
    suburb: "Potts Point",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.12
  },
  {
    postcode: 1340,
    suburb: "Kings Cross",
    state: "NSW",
    latitude: -35.54,
    longitude: 148.02
  },
  {
    postcode: 1350,
    suburb: "Woollahra",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1355,
    suburb: "Bondi Junction",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.26
  },
  {
    postcode: 1360,
    suburb: "Double Bay",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.24
  },
  {
    postcode: 1391,
    suburb: "Ato Activity Statements",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1401,
    suburb: "Broadway",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.2
  },
  {
    postcode: 1416,
    suburb: "Southern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1419,
    suburb: "Southern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1420,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1422,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1423,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1424,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1425,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1426,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1427,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1428,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1429,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 1430,
    suburb: "Eveleigh",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.2
  },
  {
    postcode: 1435,
    suburb: "Alexandria",
    state: "NSW",
    latitude: -33.71,
    longitude: 151.11
  },
  {
    postcode: 1440,
    suburb: "Waterloo",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.06
  },
  {
    postcode: 1441,
    suburb: "Waterloo",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.06
  },
  {
    postcode: 1445,
    suburb: "Rosebery",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.01
  },
  {
    postcode: 1450,
    suburb: "Camperdown",
    state: "NSW",
    latitude: -30.31,
    longitude: 153.14
  },
  {
    postcode: 1455,
    suburb: "Botany",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.2
  },
  {
    postcode: 1460,
    suburb: "Mascot",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.21
  },
  {
    postcode: 1465,
    suburb: "Kensington",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 1466,
    suburb: "Unsw Sydney",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.23
  },
  {
    postcode: 1470,
    suburb: "Drummoyne",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.15
  },
  {
    postcode: 1475,
    suburb: "Marrickville",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.15
  },
  {
    postcode: 1476,
    suburb: "Marrickville",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.15
  },
  {
    postcode: 1480,
    suburb: "Kingsgrove",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.1
  },
  {
    postcode: 1481,
    suburb: "Hurstville BC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1484,
    suburb: "Kingsgrove DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1485,
    suburb: "Kogarah",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1487,
    suburb: "Kogarah",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1490,
    suburb: "Miranda",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.11
  },
  {
    postcode: 1493,
    suburb: "Hurstville",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.09
  },
  {
    postcode: 1495,
    suburb: "Caringbah",
    state: "NSW",
    latitude: -34.05,
    longitude: 151.12
  },
  {
    postcode: 1499,
    suburb: "Sutherland",
    state: "NSW",
    latitude: -34.02,
    longitude: 151.06
  },
  {
    postcode: 1515,
    suburb: "West Chatswood",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.21
  },
  {
    postcode: 1560,
    suburb: "Northbridge",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1565,
    suburb: "Milsons Point",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.19
  },
  {
    postcode: 1570,
    suburb: "Artarmon",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.19
  },
  {
    postcode: 1582,
    suburb: "Crows Nest",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 1585,
    suburb: "Crows Nest",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 1590,
    suburb: "St Leonards",
    state: "NSW",
    latitude: -33.29,
    longitude: 151.47
  },
  {
    postcode: 1595,
    suburb: "Lane Cove",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.19
  },
  {
    postcode: 1597,
    suburb: "Lane Cove",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.19
  },
  {
    postcode: 1602,
    suburb: "Lane Cove DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1608,
    suburb: "Lane Cove DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1610,
    suburb: "Lane Cove DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1611,
    suburb: "Lane Cove DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1630,
    suburb: "Hornsby",
    state: "NSW",
    latitude: -33.71,
    longitude: 151.1
  },
  {
    postcode: 1635,
    suburb: "Hornsby Westfield",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1639,
    suburb: "Frenchs Forest",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.25
  },
  {
    postcode: 1640,
    suburb: "Frenchs Forest",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.25
  },
  {
    postcode: 1655,
    suburb: "Manly",
    state: "NSW",
    latitude: -33.33,
    longitude: 151.51
  },
  {
    postcode: 1658,
    suburb: "Mona Vale",
    state: "NSW",
    latitude: -33.7,
    longitude: 151.22
  },
  {
    postcode: 1660,
    suburb: "Mona Vale",
    state: "NSW",
    latitude: -33.7,
    longitude: 151.22
  },
  {
    postcode: 1670,
    suburb: "North Ryde BC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1675,
    suburb: "Gladesville",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.14
  },
  {
    postcode: 1680,
    suburb: "Ryde",
    state: "NSW",
    latitude: -33.76,
    longitude: 151.14
  },
  {
    postcode: 1685,
    suburb: "West Ryde",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.09
  },
  {
    postcode: 1690,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1691,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1692,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1693,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1694,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1695,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1696,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1697,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1698,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1699,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1700,
    suburb: "Ermington",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.21
  },
  {
    postcode: 1701,
    suburb: "Rydalmere BC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1710,
    suburb: "Epping",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.12
  },
  {
    postcode: 1712,
    suburb: "Epping",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.12
  },
  {
    postcode: 1715,
    suburb: "Pennant Hills",
    state: "NSW",
    latitude: -33.76,
    longitude: 151.05
  },
  {
    postcode: 1730,
    suburb: "Seven Hills",
    state: "NSW",
    latitude: -33.76,
    longitude: 150.97
  },
  {
    postcode: 1740,
    suburb: "Parramatta",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 1741,
    suburb: "Parramatta",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 1750,
    suburb: "North Parramatta",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.02
  },
  {
    postcode: 1755,
    suburb: "Baulkham Hills",
    state: "NSW",
    latitude: -33.77,
    longitude: 150.97
  },
  {
    postcode: 1765,
    suburb: "Castle Hill",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.03
  },
  {
    postcode: 1771,
    suburb: "Pennant Hills",
    state: "NSW",
    latitude: -33.76,
    longitude: 151.05
  },
  {
    postcode: 1781,
    suburb: "Seven Hills MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1790,
    suburb: "St Marys",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.2
  },
  {
    postcode: 1797,
    suburb: "Penrith South DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1800,
    suburb: "Ashfield",
    state: "NSW",
    latitude: -34.1,
    longitude: 150.78
  },
  {
    postcode: 1805,
    suburb: "Burwood",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.1
  },
  {
    postcode: 1811,
    suburb: "Silverwater",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.05
  },
  {
    postcode: 1816,
    suburb: "Strathfield",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.09
  },
  {
    postcode: 1819,
    suburb: "Strathfield",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.09
  },
  {
    postcode: 1825,
    suburb: "Lidcombe",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1826,
    suburb: "Lidcombe",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1830,
    suburb: "Granville",
    state: "NSW",
    latitude: -33.86,
    longitude: 150.95
  },
  {
    postcode: 1831,
    suburb: "Granville",
    state: "NSW",
    latitude: -33.86,
    longitude: 150.95
  },
  {
    postcode: 1835,
    suburb: "Auburn",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.02
  },
  {
    postcode: 1848,
    suburb: "Guildford",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.97
  },
  {
    postcode: 1851,
    suburb: "Wetherill Park DC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1860,
    suburb: "Fairfield",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.96
  },
  {
    postcode: 1871,
    suburb: "Liverpool",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.1
  },
  {
    postcode: 1875,
    suburb: "Moorebank",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.92
  },
  {
    postcode: 1885,
    suburb: "Bankstown",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.02
  },
  {
    postcode: 1888,
    suburb: "Bankstown",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.02
  },
  {
    postcode: 1890,
    suburb: "Ingleburn",
    state: "NSW",
    latitude: -33.96,
    longitude: 150.8
  },
  {
    postcode: 1891,
    suburb: "Milperra",
    state: "NSW",
    latitude: -33.93,
    longitude: 151
  },
  {
    postcode: 1900,
    suburb: "Leightonfield MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 1902,
    suburb: "Leightonfield MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2e3,
    suburb: "Barangaroo",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "Dawes Point",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "Haymarket",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "Millers Point",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "Parliament House",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "Sydney South",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2e3,
    suburb: "The Rocks",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.21
  },
  {
    postcode: 2001,
    suburb: "Sydney",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 2002,
    suburb: "World Square",
    state: "NSW",
    latitude: -35.97,
    longitude: 146.41
  },
  {
    postcode: 2004,
    suburb: "Alexandria MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2004,
    suburb: "Eastern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2006,
    suburb: "The University Of Sydney",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.19
  },
  {
    postcode: 2007,
    suburb: "Broadway",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.2
  },
  {
    postcode: 2007,
    suburb: "Ultimo",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.2
  },
  {
    postcode: 2008,
    suburb: "Chippendale",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.2
  },
  {
    postcode: 2008,
    suburb: "Darlington",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.2
  },
  {
    postcode: 2009,
    suburb: "Pyrmont",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.19
  },
  {
    postcode: 2010,
    suburb: "Darlinghurst",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.22
  },
  {
    postcode: 2010,
    suburb: "Surry Hills",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.22
  },
  {
    postcode: 2011,
    suburb: "Elizabeth Bay",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.23
  },
  {
    postcode: 2011,
    suburb: "Hmas Kuttabul",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.23
  },
  {
    postcode: 2011,
    suburb: "Potts Point",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.23
  },
  {
    postcode: 2011,
    suburb: "Rushcutters Bay",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.23
  },
  {
    postcode: 2011,
    suburb: "Woolloomooloo",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.23
  },
  {
    postcode: 2012,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 2013,
    suburb: "Strawberry Hills",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.93
  },
  {
    postcode: 2015,
    suburb: "Alexandria",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.2
  },
  {
    postcode: 2015,
    suburb: "Beaconsfield",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.2
  },
  {
    postcode: 2015,
    suburb: "Eveleigh",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.2
  },
  {
    postcode: 2016,
    suburb: "Redfern",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.2
  },
  {
    postcode: 2017,
    suburb: "Waterloo",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.21
  },
  {
    postcode: 2017,
    suburb: "Zetland",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.21
  },
  {
    postcode: 2018,
    suburb: "Eastlakes",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.21
  },
  {
    postcode: 2018,
    suburb: "Rosebery",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.21
  },
  {
    postcode: 2019,
    suburb: "Banksmeadow",
    state: "NSW",
    latitude: -33.96,
    longitude: 151.21
  },
  {
    postcode: 2019,
    suburb: "Botany",
    state: "NSW",
    latitude: -33.96,
    longitude: 151.21
  },
  {
    postcode: 2020,
    suburb: "Mascot",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.19
  },
  {
    postcode: 2020,
    suburb: "Sydney Domestic Airport",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.19
  },
  {
    postcode: 2020,
    suburb: "Sydney International Airport",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.19
  },
  {
    postcode: 2021,
    suburb: "Centennial Park",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.22
  },
  {
    postcode: 2021,
    suburb: "Moore Park",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.22
  },
  {
    postcode: 2021,
    suburb: "Paddington",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.22
  },
  {
    postcode: 2022,
    suburb: "Bondi Junction",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.25
  },
  {
    postcode: 2022,
    suburb: "Bondi Junction Plaza",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.25
  },
  {
    postcode: 2022,
    suburb: "Queens Park",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.25
  },
  {
    postcode: 2023,
    suburb: "Bellevue Hill",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.26
  },
  {
    postcode: 2024,
    suburb: "Bronte",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.26
  },
  {
    postcode: 2024,
    suburb: "Waverley",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.26
  },
  {
    postcode: 2025,
    suburb: "Woollahra",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.24
  },
  {
    postcode: 2026,
    suburb: "Bondi",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.26
  },
  {
    postcode: 2026,
    suburb: "Bondi Beach",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.26
  },
  {
    postcode: 2026,
    suburb: "North Bondi",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.26
  },
  {
    postcode: 2026,
    suburb: "Tamarama",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.26
  },
  {
    postcode: 2027,
    suburb: "Darling Point",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.24
  },
  {
    postcode: 2027,
    suburb: "Edgecliff",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.24
  },
  {
    postcode: 2027,
    suburb: "Hmas Rushcutters",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.24
  },
  {
    postcode: 2027,
    suburb: "Point Piper",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.24
  },
  {
    postcode: 2028,
    suburb: "Double Bay",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.24
  },
  {
    postcode: 2029,
    suburb: "Rose Bay",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.28
  },
  {
    postcode: 2030,
    suburb: "Dover Heights",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.28
  },
  {
    postcode: 2030,
    suburb: "Hmas Watson",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.28
  },
  {
    postcode: 2030,
    suburb: "Rose Bay North",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.28
  },
  {
    postcode: 2030,
    suburb: "Vaucluse",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.28
  },
  {
    postcode: 2030,
    suburb: "Watsons Bay",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.28
  },
  {
    postcode: 2031,
    suburb: "Clovelly",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.26
  },
  {
    postcode: 2031,
    suburb: "Clovelly West",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.26
  },
  {
    postcode: 2031,
    suburb: "Randwick",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.26
  },
  {
    postcode: 2031,
    suburb: "St Pauls",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.26
  },
  {
    postcode: 2032,
    suburb: "Daceyville",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.23
  },
  {
    postcode: 2032,
    suburb: "Kingsford",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.23
  },
  {
    postcode: 2033,
    suburb: "Kensington",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.22
  },
  {
    postcode: 2034,
    suburb: "Coogee",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.25
  },
  {
    postcode: 2034,
    suburb: "South Coogee",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.25
  },
  {
    postcode: 2035,
    suburb: "Maroubra",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.24
  },
  {
    postcode: 2035,
    suburb: "Maroubra South",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.24
  },
  {
    postcode: 2035,
    suburb: "Pagewood",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Chifley",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Eastgardens",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Hillsdale",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "La Perouse",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Little Bay",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Malabar",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Matraville",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Phillip Bay",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2036,
    suburb: "Port Botany",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.24
  },
  {
    postcode: 2037,
    suburb: "Forest Lodge",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.18
  },
  {
    postcode: 2037,
    suburb: "Glebe",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.18
  },
  {
    postcode: 2038,
    suburb: "Annandale",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.17
  },
  {
    postcode: 2039,
    suburb: "Rozelle",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.17
  },
  {
    postcode: 2040,
    suburb: "Leichhardt",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.16
  },
  {
    postcode: 2040,
    suburb: "Lilyfield",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.16
  },
  {
    postcode: 2041,
    suburb: "Balmain",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.18
  },
  {
    postcode: 2041,
    suburb: "Balmain East",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.18
  },
  {
    postcode: 2041,
    suburb: "Birchgrove",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.18
  },
  {
    postcode: 2042,
    suburb: "Enmore",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.17
  },
  {
    postcode: 2042,
    suburb: "Newtown",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.17
  },
  {
    postcode: 2043,
    suburb: "Erskineville",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.19
  },
  {
    postcode: 2044,
    suburb: "St Peters",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.18
  },
  {
    postcode: 2044,
    suburb: "Sydenham",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.18
  },
  {
    postcode: 2044,
    suburb: "Tempe",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.18
  },
  {
    postcode: 2045,
    suburb: "Haberfield",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.14
  },
  {
    postcode: 2046,
    suburb: "Abbotsford",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2046,
    suburb: "Canada Bay",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2046,
    suburb: "Chiswick",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2046,
    suburb: "Five Dock",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2046,
    suburb: "Rodd Point",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2046,
    suburb: "Russell Lea",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2046,
    suburb: "Wareemba",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.13
  },
  {
    postcode: 2047,
    suburb: "Drummoyne",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.15
  },
  {
    postcode: 2048,
    suburb: "Stanmore",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.17
  },
  {
    postcode: 2048,
    suburb: "Westgate",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.17
  },
  {
    postcode: 2049,
    suburb: "Lewisham",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 2049,
    suburb: "Petersham",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 2049,
    suburb: "Petersham North",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 2050,
    suburb: "Camperdown",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 2050,
    suburb: "Missenden Road",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.18
  },
  {
    postcode: 2052,
    suburb: "Unsw Sydney",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.23
  },
  {
    postcode: 2055,
    suburb: "North Sydney",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.1
  },
  {
    postcode: 2057,
    suburb: "Chatswood",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.19
  },
  {
    postcode: 2058,
    suburb: "Northern Suburbs MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2059,
    suburb: "North Sydney",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.1
  },
  {
    postcode: 2060,
    suburb: "Hmas Platypus",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2060,
    suburb: "Hmas Waterhen",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2060,
    suburb: "Lavender Bay",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2060,
    suburb: "Mcmahons Point",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2060,
    suburb: "North Sydney",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2060,
    suburb: "North Sydney Shoppingworld",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2060,
    suburb: "Waverton",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.19
  },
  {
    postcode: 2061,
    suburb: "Kirribilli",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.21
  },
  {
    postcode: 2061,
    suburb: "Milsons Point",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.21
  },
  {
    postcode: 2062,
    suburb: "Cammeray",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.21
  },
  {
    postcode: 2063,
    suburb: "Northbridge",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.22
  },
  {
    postcode: 2064,
    suburb: "Artarmon",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.19
  },
  {
    postcode: 2065,
    suburb: "Crows Nest",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 2065,
    suburb: "Greenwich",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 2065,
    suburb: "Naremburn",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 2065,
    suburb: "Royal North Shore Hospital",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 2065,
    suburb: "St Leonards",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 2065,
    suburb: "Wollstonecraft",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.2
  },
  {
    postcode: 2066,
    suburb: "Lane Cove",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2066,
    suburb: "Lane Cove North",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2066,
    suburb: "Lane Cove West",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2066,
    suburb: "Linley Point",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2066,
    suburb: "Longueville",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2066,
    suburb: "Northwood",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2066,
    suburb: "Riverview",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.17
  },
  {
    postcode: 2067,
    suburb: "Chatswood",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.19
  },
  {
    postcode: 2067,
    suburb: "Chatswood West",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.19
  },
  {
    postcode: 2068,
    suburb: "Castlecrag",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.21
  },
  {
    postcode: 2068,
    suburb: "Middle Cove",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.21
  },
  {
    postcode: 2068,
    suburb: "North Willoughby",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.21
  },
  {
    postcode: 2068,
    suburb: "Willoughby",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.21
  },
  {
    postcode: 2068,
    suburb: "Willoughby East",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.21
  },
  {
    postcode: 2068,
    suburb: "Willoughby North",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.21
  },
  {
    postcode: 2069,
    suburb: "Castle Cove",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.2
  },
  {
    postcode: 2069,
    suburb: "Roseville",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.2
  },
  {
    postcode: 2069,
    suburb: "Roseville Chase",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.2
  },
  {
    postcode: 2070,
    suburb: "East Lindfield",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.19
  },
  {
    postcode: 2070,
    suburb: "Lindfield",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.19
  },
  {
    postcode: 2070,
    suburb: "Lindfield West",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.19
  },
  {
    postcode: 2071,
    suburb: "East Killara",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.17
  },
  {
    postcode: 2071,
    suburb: "Killara",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.17
  },
  {
    postcode: 2072,
    suburb: "Gordon",
    state: "NSW",
    latitude: -33.76,
    longitude: 151.16
  },
  {
    postcode: 2073,
    suburb: "Pymble",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.14
  },
  {
    postcode: 2073,
    suburb: "West Pymble",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.14
  },
  {
    postcode: 2074,
    suburb: "North Turramurra",
    state: "NSW",
    latitude: -33.71,
    longitude: 151.15
  },
  {
    postcode: 2074,
    suburb: "South Turramurra",
    state: "NSW",
    latitude: -33.71,
    longitude: 151.15
  },
  {
    postcode: 2074,
    suburb: "Turramurra",
    state: "NSW",
    latitude: -33.71,
    longitude: 151.15
  },
  {
    postcode: 2074,
    suburb: "Warrawee",
    state: "NSW",
    latitude: -33.71,
    longitude: 151.15
  },
  {
    postcode: 2075,
    suburb: "St Ives",
    state: "NSW",
    latitude: -33.73,
    longitude: 151.16
  },
  {
    postcode: 2075,
    suburb: "St Ives Chase",
    state: "NSW",
    latitude: -33.73,
    longitude: 151.16
  },
  {
    postcode: 2076,
    suburb: "Normanhurst",
    state: "NSW",
    latitude: -33.72,
    longitude: 151.1
  },
  {
    postcode: 2076,
    suburb: "North Wahroonga",
    state: "NSW",
    latitude: -33.72,
    longitude: 151.1
  },
  {
    postcode: 2076,
    suburb: "Wahroonga",
    state: "NSW",
    latitude: -33.72,
    longitude: 151.1
  },
  {
    postcode: 2077,
    suburb: "Asquith",
    state: "NSW",
    latitude: -33.69,
    longitude: 151.11
  },
  {
    postcode: 2077,
    suburb: "Hornsby",
    state: "NSW",
    latitude: -33.69,
    longitude: 151.11
  },
  {
    postcode: 2077,
    suburb: "Hornsby Heights",
    state: "NSW",
    latitude: -33.69,
    longitude: 151.11
  },
  {
    postcode: 2077,
    suburb: "Waitara",
    state: "NSW",
    latitude: -33.69,
    longitude: 151.11
  },
  {
    postcode: 2079,
    suburb: "Mount Colah",
    state: "NSW",
    latitude: -33.66,
    longitude: 151.12
  },
  {
    postcode: 2080,
    suburb: "Mount Kuring-Gai",
    state: "NSW",
    latitude: -33.63,
    longitude: 151.23
  },
  {
    postcode: 2081,
    suburb: "Berowra",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.15
  },
  {
    postcode: 2081,
    suburb: "Cowan",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.15
  },
  {
    postcode: 2082,
    suburb: "Berowra Creek",
    state: "NSW",
    latitude: -33.61,
    longitude: 151.14
  },
  {
    postcode: 2082,
    suburb: "Berowra Heights",
    state: "NSW",
    latitude: -33.61,
    longitude: 151.14
  },
  {
    postcode: 2082,
    suburb: "Berowra Waters",
    state: "NSW",
    latitude: -33.61,
    longitude: 151.14
  },
  {
    postcode: 2083,
    suburb: "Bar Point",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2083,
    suburb: "Brooklyn",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2083,
    suburb: "Cheero Point",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2083,
    suburb: "Cogra Bay",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2083,
    suburb: "Dangar Island",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2083,
    suburb: "Milsons Passage",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2083,
    suburb: "Mooney Mooney",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.16
  },
  {
    postcode: 2084,
    suburb: "Cottage Point",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.2
  },
  {
    postcode: 2084,
    suburb: "Duffys Forest",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.2
  },
  {
    postcode: 2084,
    suburb: "Terrey Hills",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.2
  },
  {
    postcode: 2085,
    suburb: "Belrose",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.21
  },
  {
    postcode: 2085,
    suburb: "Belrose West",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.21
  },
  {
    postcode: 2085,
    suburb: "Davidson",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.21
  },
  {
    postcode: 2086,
    suburb: "Frenchs Forest",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.23
  },
  {
    postcode: 2086,
    suburb: "Frenchs Forest East",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.23
  },
  {
    postcode: 2087,
    suburb: "Forestville",
    state: "NSW",
    latitude: -33.76,
    longitude: 151.21
  },
  {
    postcode: 2087,
    suburb: "Killarney Heights",
    state: "NSW",
    latitude: -33.76,
    longitude: 151.21
  },
  {
    postcode: 2088,
    suburb: "Mosman",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.24
  },
  {
    postcode: 2088,
    suburb: "Spit Junction",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.24
  },
  {
    postcode: 2089,
    suburb: "Neutral Bay",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.22
  },
  {
    postcode: 2089,
    suburb: "Neutral Bay Junction",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.22
  },
  {
    postcode: 2090,
    suburb: "Cremorne",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.23
  },
  {
    postcode: 2090,
    suburb: "Cremorne Junction",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.23
  },
  {
    postcode: 2090,
    suburb: "Cremorne Point",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.23
  },
  {
    postcode: 2091,
    suburb: "Hmas Penguin",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2092,
    suburb: "Seaforth",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.25
  },
  {
    postcode: 2093,
    suburb: "Balgowlah",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.26
  },
  {
    postcode: 2093,
    suburb: "Balgowlah Heights",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.26
  },
  {
    postcode: 2093,
    suburb: "Clontarf",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.26
  },
  {
    postcode: 2093,
    suburb: "Manly Vale",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.26
  },
  {
    postcode: 2093,
    suburb: "North Balgowlah",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.26
  },
  {
    postcode: 2094,
    suburb: "Fairlight",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.27
  },
  {
    postcode: 2095,
    suburb: "Manly",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.29
  },
  {
    postcode: 2095,
    suburb: "Manly East",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.29
  },
  {
    postcode: 2096,
    suburb: "Curl Curl",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.29
  },
  {
    postcode: 2096,
    suburb: "Freshwater",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.29
  },
  {
    postcode: 2096,
    suburb: "Queenscliff",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.29
  },
  {
    postcode: 2097,
    suburb: "Collaroy",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.3
  },
  {
    postcode: 2097,
    suburb: "Collaroy Beach",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.3
  },
  {
    postcode: 2097,
    suburb: "Collaroy Plateau West",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.3
  },
  {
    postcode: 2097,
    suburb: "Wheeler Heights",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.3
  },
  {
    postcode: 2099,
    suburb: "Cromer",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.28
  },
  {
    postcode: 2099,
    suburb: "Dee Why",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.28
  },
  {
    postcode: 2099,
    suburb: "Narraweena",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.28
  },
  {
    postcode: 2099,
    suburb: "North Curl Curl",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.28
  },
  {
    postcode: 2100,
    suburb: "Allambie Heights",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.25
  },
  {
    postcode: 2100,
    suburb: "Beacon Hill",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.25
  },
  {
    postcode: 2100,
    suburb: "Brookvale",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.25
  },
  {
    postcode: 2100,
    suburb: "North Manly",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.25
  },
  {
    postcode: 2100,
    suburb: "Oxford Falls",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.25
  },
  {
    postcode: 2100,
    suburb: "Warringah Mall",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.25
  },
  {
    postcode: 2101,
    suburb: "Elanora Heights",
    state: "NSW",
    latitude: -33.7,
    longitude: 151.28
  },
  {
    postcode: 2101,
    suburb: "Ingleside",
    state: "NSW",
    latitude: -33.7,
    longitude: 151.28
  },
  {
    postcode: 2101,
    suburb: "Narrabeen",
    state: "NSW",
    latitude: -33.7,
    longitude: 151.28
  },
  {
    postcode: 2101,
    suburb: "North Narrabeen",
    state: "NSW",
    latitude: -33.7,
    longitude: 151.28
  },
  {
    postcode: 2102,
    suburb: "Warriewood",
    state: "NSW",
    latitude: -33.69,
    longitude: 151.3
  },
  {
    postcode: 2102,
    suburb: "Warriewood Shopping Square",
    state: "NSW",
    latitude: -33.69,
    longitude: 151.3
  },
  {
    postcode: 2103,
    suburb: "Mona Vale",
    state: "NSW",
    latitude: -33.68,
    longitude: 151.3
  },
  {
    postcode: 2104,
    suburb: "Bayview",
    state: "NSW",
    latitude: -33.66,
    longitude: 151.3
  },
  {
    postcode: 2105,
    suburb: "Church Point",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.28
  },
  {
    postcode: 2105,
    suburb: "Elvina Bay",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.28
  },
  {
    postcode: 2105,
    suburb: "Lovett Bay",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.28
  },
  {
    postcode: 2105,
    suburb: "Morning Bay",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.28
  },
  {
    postcode: 2105,
    suburb: "Scotland Island",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.28
  },
  {
    postcode: 2106,
    suburb: "Newport",
    state: "NSW",
    latitude: -33.66,
    longitude: 151.31
  },
  {
    postcode: 2106,
    suburb: "Newport Beach",
    state: "NSW",
    latitude: -33.66,
    longitude: 151.31
  },
  {
    postcode: 2107,
    suburb: "Avalon",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.33
  },
  {
    postcode: 2107,
    suburb: "Avalon Beach",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.33
  },
  {
    postcode: 2107,
    suburb: "Bilgola",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.33
  },
  {
    postcode: 2107,
    suburb: "Clareville",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.33
  },
  {
    postcode: 2107,
    suburb: "Whale Beach",
    state: "NSW",
    latitude: -33.64,
    longitude: 151.33
  },
  {
    postcode: 2108,
    suburb: "Coasters Retreat",
    state: "NSW",
    latitude: -33.6,
    longitude: 151.3
  },
  {
    postcode: 2108,
    suburb: "Great Mackerel Beach",
    state: "NSW",
    latitude: -33.6,
    longitude: 151.3
  },
  {
    postcode: 2108,
    suburb: "Palm Beach",
    state: "NSW",
    latitude: -33.6,
    longitude: 151.3
  },
  {
    postcode: 2109,
    suburb: "Macquarie University",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.11
  },
  {
    postcode: 2110,
    suburb: "Hunters Hill",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.15
  },
  {
    postcode: 2110,
    suburb: "Woolwich",
    state: "NSW",
    latitude: -33.83,
    longitude: 151.15
  },
  {
    postcode: 2111,
    suburb: "Boronia Park",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2111,
    suburb: "Gladesville",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2111,
    suburb: "Henley",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2111,
    suburb: "Huntleys Cove",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2111,
    suburb: "Huntleys Point",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2111,
    suburb: "Monash Park",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2111,
    suburb: "Tennyson Point",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.14
  },
  {
    postcode: 2112,
    suburb: "Denistone East",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.1
  },
  {
    postcode: 2112,
    suburb: "Putney",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.1
  },
  {
    postcode: 2112,
    suburb: "Ryde",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.1
  },
  {
    postcode: 2113,
    suburb: "Blenheim Road",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.13
  },
  {
    postcode: 2113,
    suburb: "East Ryde",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.13
  },
  {
    postcode: 2113,
    suburb: "Macquarie Centre",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.13
  },
  {
    postcode: 2113,
    suburb: "Macquarie Park",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.13
  },
  {
    postcode: 2113,
    suburb: "North Ryde",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.13
  },
  {
    postcode: 2114,
    suburb: "Denistone",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.08
  },
  {
    postcode: 2114,
    suburb: "Denistone West",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.08
  },
  {
    postcode: 2114,
    suburb: "Meadowbank",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.08
  },
  {
    postcode: 2114,
    suburb: "Melrose Park",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.08
  },
  {
    postcode: 2114,
    suburb: "West Ryde",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.08
  },
  {
    postcode: 2115,
    suburb: "Ermington",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.05
  },
  {
    postcode: 2116,
    suburb: "Rydalmere",
    state: "NSW",
    latitude: -33.81,
    longitude: 151.03
  },
  {
    postcode: 2117,
    suburb: "Dundas",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.04
  },
  {
    postcode: 2117,
    suburb: "Dundas Valley",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.04
  },
  {
    postcode: 2117,
    suburb: "Oatlands",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.04
  },
  {
    postcode: 2117,
    suburb: "Telopea",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.04
  },
  {
    postcode: 2118,
    suburb: "Carlingford",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.05
  },
  {
    postcode: 2118,
    suburb: "Carlingford Court",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.05
  },
  {
    postcode: 2118,
    suburb: "Carlingford North",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.05
  },
  {
    postcode: 2118,
    suburb: "Kingsdene",
    state: "NSW",
    latitude: -33.78,
    longitude: 151.05
  },
  {
    postcode: 2119,
    suburb: "Beecroft",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.06
  },
  {
    postcode: 2119,
    suburb: "Cheltenham",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.06
  },
  {
    postcode: 2120,
    suburb: "Pennant Hills",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.07
  },
  {
    postcode: 2120,
    suburb: "Thornleigh",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.07
  },
  {
    postcode: 2120,
    suburb: "Westleigh",
    state: "NSW",
    latitude: -33.74,
    longitude: 151.07
  },
  {
    postcode: 2121,
    suburb: "Epping",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.08
  },
  {
    postcode: 2121,
    suburb: "North Epping",
    state: "NSW",
    latitude: -33.77,
    longitude: 151.08
  },
  {
    postcode: 2122,
    suburb: "Eastwood",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.08
  },
  {
    postcode: 2122,
    suburb: "Marsfield",
    state: "NSW",
    latitude: -33.79,
    longitude: 151.08
  },
  {
    postcode: 2123,
    suburb: "Parramatta",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 2124,
    suburb: "Parramatta",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 2125,
    suburb: "West Pennant Hills",
    state: "NSW",
    latitude: -33.75,
    longitude: 151.04
  },
  {
    postcode: 2126,
    suburb: "Cherrybrook",
    state: "NSW",
    latitude: -33.72,
    longitude: 151.04
  },
  {
    postcode: 2127,
    suburb: "Newington",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.08
  },
  {
    postcode: 2127,
    suburb: "Sydney Olympic Park",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.08
  },
  {
    postcode: 2127,
    suburb: "Wentworth Point",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.08
  },
  {
    postcode: 2128,
    suburb: "Silverwater",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.05
  },
  {
    postcode: 2129,
    suburb: "Sydney Markets",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.19
  },
  {
    postcode: 2130,
    suburb: "Summer Hill",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.14
  },
  {
    postcode: 2131,
    suburb: "Ashfield",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.13
  },
  {
    postcode: 2132,
    suburb: "Croydon",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.11
  },
  {
    postcode: 2133,
    suburb: "Croydon Park",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.11
  },
  {
    postcode: 2133,
    suburb: "Enfield South",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.11
  },
  {
    postcode: 2134,
    suburb: "Burwood",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.1
  },
  {
    postcode: 2134,
    suburb: "Burwood North",
    state: "NSW",
    latitude: -33.88,
    longitude: 151.1
  },
  {
    postcode: 2135,
    suburb: "Strathfield",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.09
  },
  {
    postcode: 2136,
    suburb: "Burwood Heights",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.1
  },
  {
    postcode: 2136,
    suburb: "Enfield",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.1
  },
  {
    postcode: 2136,
    suburb: "Strathfield South",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.1
  },
  {
    postcode: 2137,
    suburb: "Breakfast Point",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.11
  },
  {
    postcode: 2137,
    suburb: "Cabarita",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.11
  },
  {
    postcode: 2137,
    suburb: "Concord",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.11
  },
  {
    postcode: 2137,
    suburb: "Mortlake",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.11
  },
  {
    postcode: 2137,
    suburb: "North Strathfield",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.11
  },
  {
    postcode: 2138,
    suburb: "Concord West",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.09
  },
  {
    postcode: 2138,
    suburb: "Liberty Grove",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.09
  },
  {
    postcode: 2138,
    suburb: "Rhodes",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.09
  },
  {
    postcode: 2139,
    suburb: "Concord Repatriation Hospital",
    state: "NSW",
    latitude: -33.84,
    longitude: 151.1
  },
  {
    postcode: 2140,
    suburb: "Homebush",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.08
  },
  {
    postcode: 2140,
    suburb: "Homebush South",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.08
  },
  {
    postcode: 2140,
    suburb: "Homebush West",
    state: "NSW",
    latitude: -33.86,
    longitude: 151.08
  },
  {
    postcode: 2141,
    suburb: "Berala",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.03
  },
  {
    postcode: 2141,
    suburb: "Lidcombe",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.03
  },
  {
    postcode: 2141,
    suburb: "Lidcombe North",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.03
  },
  {
    postcode: 2141,
    suburb: "Rookwood",
    state: "NSW",
    latitude: -33.87,
    longitude: 151.03
  },
  {
    postcode: 2142,
    suburb: "Blaxcell",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2142,
    suburb: "Camellia",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2142,
    suburb: "Clyde",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2142,
    suburb: "Granville",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2142,
    suburb: "Holroyd",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2142,
    suburb: "Rosehill",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2142,
    suburb: "South Granville",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.01
  },
  {
    postcode: 2143,
    suburb: "Birrong",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.02
  },
  {
    postcode: 2143,
    suburb: "Potts Hill",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.02
  },
  {
    postcode: 2143,
    suburb: "Regents Park",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.02
  },
  {
    postcode: 2144,
    suburb: "Auburn",
    state: "NSW",
    latitude: -33.85,
    longitude: 151.03
  },
  {
    postcode: 2145,
    suburb: "Constitution Hill",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Girraween",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Greystanes",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Mays Hill",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Pemulwuy",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Pendle Hill",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "South Wentworthville",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Wentworthville",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2145,
    suburb: "Westmead",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.95
  },
  {
    postcode: 2146,
    suburb: "Old Toongabbie",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.97
  },
  {
    postcode: 2146,
    suburb: "Toongabbie",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.97
  },
  {
    postcode: 2146,
    suburb: "Toongabbie East",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.97
  },
  {
    postcode: 2147,
    suburb: "Kings Langley",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2147,
    suburb: "Lalor Park",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2147,
    suburb: "Seven Hills",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2147,
    suburb: "Seven Hills West",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2148,
    suburb: "Arndell Park",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2148,
    suburb: "Blacktown",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2148,
    suburb: "Blacktown Westpoint",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2148,
    suburb: "Huntingwood",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2148,
    suburb: "Kings Park",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2148,
    suburb: "Marayong",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2148,
    suburb: "Prospect",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.87
  },
  {
    postcode: 2150,
    suburb: "Harris Park",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.01
  },
  {
    postcode: 2150,
    suburb: "Parramatta",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.01
  },
  {
    postcode: 2150,
    suburb: "Parramatta Westfield",
    state: "NSW",
    latitude: -33.82,
    longitude: 151.01
  },
  {
    postcode: 2151,
    suburb: "North Parramatta",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.01
  },
  {
    postcode: 2151,
    suburb: "North Rocks",
    state: "NSW",
    latitude: -33.8,
    longitude: 151.01
  },
  {
    postcode: 2152,
    suburb: "Northmead",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.99
  },
  {
    postcode: 2153,
    suburb: "Baulkham Hills",
    state: "NSW",
    latitude: -33.76,
    longitude: 150.99
  },
  {
    postcode: 2153,
    suburb: "Bella Vista",
    state: "NSW",
    latitude: -33.76,
    longitude: 150.99
  },
  {
    postcode: 2153,
    suburb: "Winston Hills",
    state: "NSW",
    latitude: -33.76,
    longitude: 150.99
  },
  {
    postcode: 2154,
    suburb: "Castle Hill",
    state: "NSW",
    latitude: -33.73,
    longitude: 151.01
  },
  {
    postcode: 2155,
    suburb: "Beaumont Hills",
    state: "NSW",
    latitude: -33.7,
    longitude: 150.95
  },
  {
    postcode: 2155,
    suburb: "Kellyville",
    state: "NSW",
    latitude: -33.7,
    longitude: 150.95
  },
  {
    postcode: 2155,
    suburb: "Kellyville Ridge",
    state: "NSW",
    latitude: -33.7,
    longitude: 150.95
  },
  {
    postcode: 2155,
    suburb: "Rouse Hill",
    state: "NSW",
    latitude: -33.7,
    longitude: 150.95
  },
  {
    postcode: 2156,
    suburb: "Annangrove",
    state: "NSW",
    latitude: -33.66,
    longitude: 150.94
  },
  {
    postcode: 2156,
    suburb: "Glenhaven",
    state: "NSW",
    latitude: -33.66,
    longitude: 150.94
  },
  {
    postcode: 2156,
    suburb: "Kenthurst",
    state: "NSW",
    latitude: -33.66,
    longitude: 150.94
  },
  {
    postcode: 2157,
    suburb: "Canoelands",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.06
  },
  {
    postcode: 2157,
    suburb: "Forest Glen",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.06
  },
  {
    postcode: 2157,
    suburb: "Glenorie",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.06
  },
  {
    postcode: 2158,
    suburb: "Dural",
    state: "NSW",
    latitude: -33.68,
    longitude: 151.03
  },
  {
    postcode: 2158,
    suburb: "Middle Dural",
    state: "NSW",
    latitude: -33.68,
    longitude: 151.03
  },
  {
    postcode: 2158,
    suburb: "Round Corner",
    state: "NSW",
    latitude: -33.68,
    longitude: 151.03
  },
  {
    postcode: 2159,
    suburb: "Arcadia",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.05
  },
  {
    postcode: 2159,
    suburb: "Berrilee",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.05
  },
  {
    postcode: 2159,
    suburb: "Fiddletown",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.05
  },
  {
    postcode: 2159,
    suburb: "Galston",
    state: "NSW",
    latitude: -33.62,
    longitude: 151.05
  },
  {
    postcode: 2160,
    suburb: "Merrylands",
    state: "NSW",
    latitude: -33.84,
    longitude: 150.99
  },
  {
    postcode: 2160,
    suburb: "Merrylands West",
    state: "NSW",
    latitude: -33.84,
    longitude: 150.99
  },
  {
    postcode: 2161,
    suburb: "Guildford",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.99
  },
  {
    postcode: 2161,
    suburb: "Guildford West",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.99
  },
  {
    postcode: 2161,
    suburb: "Old Guildford",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.99
  },
  {
    postcode: 2161,
    suburb: "Yennora",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.99
  },
  {
    postcode: 2162,
    suburb: "Chester Hill",
    state: "NSW",
    latitude: -33.88,
    longitude: 151
  },
  {
    postcode: 2162,
    suburb: "Sefton",
    state: "NSW",
    latitude: -33.88,
    longitude: 151
  },
  {
    postcode: 2163,
    suburb: "Carramar",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.96
  },
  {
    postcode: 2163,
    suburb: "Lansdowne",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.96
  },
  {
    postcode: 2163,
    suburb: "Villawood",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.96
  },
  {
    postcode: 2164,
    suburb: "Smithfield",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.94
  },
  {
    postcode: 2164,
    suburb: "Smithfield West",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.94
  },
  {
    postcode: 2164,
    suburb: "Wetherill Park",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.94
  },
  {
    postcode: 2164,
    suburb: "Woodpark",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.94
  },
  {
    postcode: 2165,
    suburb: "Fairfield",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.96
  },
  {
    postcode: 2165,
    suburb: "Fairfield East",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.96
  },
  {
    postcode: 2165,
    suburb: "Fairfield Heights",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.96
  },
  {
    postcode: 2165,
    suburb: "Fairfield West",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.96
  },
  {
    postcode: 2166,
    suburb: "Cabramatta",
    state: "NSW",
    latitude: -33.9,
    longitude: 150.94
  },
  {
    postcode: 2166,
    suburb: "Cabramatta West",
    state: "NSW",
    latitude: -33.9,
    longitude: 150.94
  },
  {
    postcode: 2166,
    suburb: "Canley Heights",
    state: "NSW",
    latitude: -33.9,
    longitude: 150.94
  },
  {
    postcode: 2166,
    suburb: "Canley Vale",
    state: "NSW",
    latitude: -33.9,
    longitude: 150.94
  },
  {
    postcode: 2166,
    suburb: "Lansvale",
    state: "NSW",
    latitude: -33.9,
    longitude: 150.94
  },
  {
    postcode: 2167,
    suburb: "Glenfield",
    state: "NSW",
    latitude: -33.97,
    longitude: 150.89
  },
  {
    postcode: 2168,
    suburb: "Ashcroft",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Busby",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Cartwright",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Green Valley",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Heckenberg",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Hinchinbrook",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Miller",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2168,
    suburb: "Sadleir",
    state: "NSW",
    latitude: -33.92,
    longitude: 150.9
  },
  {
    postcode: 2170,
    suburb: "Casula",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Casula Mall",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Chipping Norton",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Hammondville",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Liverpool",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Liverpool South",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Liverpool Westfield",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Lurnea",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Moorebank",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Mount Pritchard",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Prestons",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2170,
    suburb: "Warwick Farm",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.91
  },
  {
    postcode: 2171,
    suburb: "Cecil Hills",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2171,
    suburb: "Elizabeth Hills",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2171,
    suburb: "Horningsea Park",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2171,
    suburb: "Hoxton Park",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2171,
    suburb: "Len Waters Estate",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2171,
    suburb: "Middleton Grange",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2171,
    suburb: "West Hoxton",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.85
  },
  {
    postcode: 2172,
    suburb: "Pleasure Point",
    state: "NSW",
    latitude: -33.97,
    longitude: 150.99
  },
  {
    postcode: 2172,
    suburb: "Sandy Point",
    state: "NSW",
    latitude: -33.97,
    longitude: 150.99
  },
  {
    postcode: 2172,
    suburb: "Voyager Point",
    state: "NSW",
    latitude: -33.97,
    longitude: 150.99
  },
  {
    postcode: 2173,
    suburb: "Holsworthy",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.95
  },
  {
    postcode: 2173,
    suburb: "Wattle Grove",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.95
  },
  {
    postcode: 2174,
    suburb: "Edmondson Park",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2174,
    suburb: "Ingleburn Milpo",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2175,
    suburb: "Horsley Park",
    state: "NSW",
    latitude: -33.85,
    longitude: 150.85
  },
  {
    postcode: 2176,
    suburb: "Abbotsbury",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2176,
    suburb: "Bossley Park",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2176,
    suburb: "Edensor Park",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2176,
    suburb: "Greenfield Park",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2176,
    suburb: "Prairiewood",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2176,
    suburb: "St Johns Park",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2176,
    suburb: "Wakeley",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.87
  },
  {
    postcode: 2177,
    suburb: "Bonnyrigg",
    state: "NSW",
    latitude: -33.89,
    longitude: 150.89
  },
  {
    postcode: 2177,
    suburb: "Bonnyrigg Heights",
    state: "NSW",
    latitude: -33.89,
    longitude: 150.89
  },
  {
    postcode: 2178,
    suburb: "Cecil Park",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.84
  },
  {
    postcode: 2178,
    suburb: "Kemps Creek",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.84
  },
  {
    postcode: 2178,
    suburb: "Mount Vernon",
    state: "NSW",
    latitude: -33.87,
    longitude: 150.84
  },
  {
    postcode: 2179,
    suburb: "Austral",
    state: "NSW",
    latitude: -33.93,
    longitude: 150.81
  },
  {
    postcode: 2179,
    suburb: "Leppington",
    state: "NSW",
    latitude: -33.93,
    longitude: 150.81
  },
  {
    postcode: 2190,
    suburb: "Chullora",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.06
  },
  {
    postcode: 2190,
    suburb: "Greenacre",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.06
  },
  {
    postcode: 2190,
    suburb: "Mount Lewis",
    state: "NSW",
    latitude: -33.89,
    longitude: 151.06
  },
  {
    postcode: 2191,
    suburb: "Belfield",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.08
  },
  {
    postcode: 2192,
    suburb: "Belmore",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.09
  },
  {
    postcode: 2193,
    suburb: "Ashbury",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.12
  },
  {
    postcode: 2193,
    suburb: "Canterbury",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.12
  },
  {
    postcode: 2193,
    suburb: "Hurlstone Park",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.12
  },
  {
    postcode: 2194,
    suburb: "Campsie",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.1
  },
  {
    postcode: 2195,
    suburb: "Lakemba",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.08
  },
  {
    postcode: 2195,
    suburb: "Wiley Park",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.08
  },
  {
    postcode: 2196,
    suburb: "Punchbowl",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.05
  },
  {
    postcode: 2196,
    suburb: "Roselands",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.05
  },
  {
    postcode: 2197,
    suburb: "Bass Hill",
    state: "NSW",
    latitude: -33.9,
    longitude: 150.99
  },
  {
    postcode: 2198,
    suburb: "Georges Hall",
    state: "NSW",
    latitude: -33.91,
    longitude: 150.98
  },
  {
    postcode: 2199,
    suburb: "Yagoona",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.03
  },
  {
    postcode: 2199,
    suburb: "Yagoona West",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Bankstown",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Bankstown Aerodrome",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Bankstown North",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Bankstown Square",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Condell Park",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Manahan",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2200,
    suburb: "Mount Lewis",
    state: "NSW",
    latitude: -33.92,
    longitude: 151.03
  },
  {
    postcode: 2203,
    suburb: "Dulwich Hill",
    state: "NSW",
    latitude: -33.9,
    longitude: 151.14
  },
  {
    postcode: 2204,
    suburb: "Marrickville",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.16
  },
  {
    postcode: 2204,
    suburb: "Marrickville Metro",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.16
  },
  {
    postcode: 2204,
    suburb: "Marrickville South",
    state: "NSW",
    latitude: -33.91,
    longitude: 151.16
  },
  {
    postcode: 2205,
    suburb: "Arncliffe",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.15
  },
  {
    postcode: 2205,
    suburb: "Turrella",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.15
  },
  {
    postcode: 2205,
    suburb: "Wolli Creek",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.15
  },
  {
    postcode: 2206,
    suburb: "Clemton Park",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.1
  },
  {
    postcode: 2206,
    suburb: "Earlwood",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.1
  },
  {
    postcode: 2207,
    suburb: "Bardwell Park",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.13
  },
  {
    postcode: 2207,
    suburb: "Bardwell Valley",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.13
  },
  {
    postcode: 2207,
    suburb: "Bexley",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.13
  },
  {
    postcode: 2207,
    suburb: "Bexley North",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.13
  },
  {
    postcode: 2207,
    suburb: "Bexley South",
    state: "NSW",
    latitude: -33.93,
    longitude: 151.13
  },
  {
    postcode: 2208,
    suburb: "Kingsgrove",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.1
  },
  {
    postcode: 2208,
    suburb: "Kingsway West",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.1
  },
  {
    postcode: 2209,
    suburb: "Beverly Hills",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.08
  },
  {
    postcode: 2209,
    suburb: "Narwee",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.08
  },
  {
    postcode: 2210,
    suburb: "Lugarno",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.05
  },
  {
    postcode: 2210,
    suburb: "Peakhurst",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.05
  },
  {
    postcode: 2210,
    suburb: "Peakhurst Heights",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.05
  },
  {
    postcode: 2210,
    suburb: "Riverwood",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.05
  },
  {
    postcode: 2211,
    suburb: "Padstow",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.04
  },
  {
    postcode: 2211,
    suburb: "Padstow Heights",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.04
  },
  {
    postcode: 2212,
    suburb: "Revesby",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.02
  },
  {
    postcode: 2212,
    suburb: "Revesby Heights",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.02
  },
  {
    postcode: 2212,
    suburb: "Revesby North",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.02
  },
  {
    postcode: 2213,
    suburb: "East Hills",
    state: "NSW",
    latitude: -33.96,
    longitude: 150.99
  },
  {
    postcode: 2213,
    suburb: "Panania",
    state: "NSW",
    latitude: -33.96,
    longitude: 150.99
  },
  {
    postcode: 2213,
    suburb: "Picnic Point",
    state: "NSW",
    latitude: -33.96,
    longitude: 150.99
  },
  {
    postcode: 2214,
    suburb: "Milperra",
    state: "NSW",
    latitude: -33.94,
    longitude: 150.99
  },
  {
    postcode: 2216,
    suburb: "Banksia",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.14
  },
  {
    postcode: 2216,
    suburb: "Brighton-Le-Sands",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.14
  },
  {
    postcode: 2216,
    suburb: "Kyeemagh",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.14
  },
  {
    postcode: 2216,
    suburb: "Rockdale",
    state: "NSW",
    latitude: -33.95,
    longitude: 151.14
  },
  {
    postcode: 2217,
    suburb: "Beverley Park",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.13
  },
  {
    postcode: 2217,
    suburb: "Kogarah",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.13
  },
  {
    postcode: 2217,
    suburb: "Kogarah Bay",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.13
  },
  {
    postcode: 2217,
    suburb: "Monterey",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.13
  },
  {
    postcode: 2217,
    suburb: "Ramsgate",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.13
  },
  {
    postcode: 2217,
    suburb: "Ramsgate Beach",
    state: "NSW",
    latitude: -33.98,
    longitude: 151.13
  },
  {
    postcode: 2218,
    suburb: "Allawah",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.11
  },
  {
    postcode: 2218,
    suburb: "Carlton",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.11
  },
  {
    postcode: 2219,
    suburb: "Dolls Point",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.15
  },
  {
    postcode: 2219,
    suburb: "Sandringham",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.15
  },
  {
    postcode: 2219,
    suburb: "Sans Souci",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.15
  },
  {
    postcode: 2220,
    suburb: "Hurstville",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.1
  },
  {
    postcode: 2220,
    suburb: "Hurstville Grove",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.1
  },
  {
    postcode: 2220,
    suburb: "Hurstville Westfield",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.1
  },
  {
    postcode: 2221,
    suburb: "Blakehurst",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.11
  },
  {
    postcode: 2221,
    suburb: "Carss Park",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.11
  },
  {
    postcode: 2221,
    suburb: "Connells Point",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.11
  },
  {
    postcode: 2221,
    suburb: "Kyle Bay",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.11
  },
  {
    postcode: 2221,
    suburb: "South Hurstville",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.11
  },
  {
    postcode: 2222,
    suburb: "Penshurst",
    state: "NSW",
    latitude: -33.96,
    longitude: 151.09
  },
  {
    postcode: 2223,
    suburb: "Mortdale",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.08
  },
  {
    postcode: 2223,
    suburb: "Oatley",
    state: "NSW",
    latitude: -33.97,
    longitude: 151.08
  },
  {
    postcode: 2224,
    suburb: "Kangaroo Point",
    state: "NSW",
    latitude: -34,
    longitude: 151.1
  },
  {
    postcode: 2224,
    suburb: "Sylvania",
    state: "NSW",
    latitude: -34,
    longitude: 151.1
  },
  {
    postcode: 2224,
    suburb: "Sylvania Southgate",
    state: "NSW",
    latitude: -34,
    longitude: 151.1
  },
  {
    postcode: 2224,
    suburb: "Sylvania Waters",
    state: "NSW",
    latitude: -34,
    longitude: 151.1
  },
  {
    postcode: 2225,
    suburb: "Oyster Bay",
    state: "NSW",
    latitude: -34,
    longitude: 151.09
  },
  {
    postcode: 2226,
    suburb: "Bonnet Bay",
    state: "NSW",
    latitude: -34.01,
    longitude: 151.05
  },
  {
    postcode: 2226,
    suburb: "Como",
    state: "NSW",
    latitude: -34.01,
    longitude: 151.05
  },
  {
    postcode: 2226,
    suburb: "Jannali",
    state: "NSW",
    latitude: -34.01,
    longitude: 151.05
  },
  {
    postcode: 2227,
    suburb: "Gymea",
    state: "NSW",
    latitude: -34.03,
    longitude: 151.09
  },
  {
    postcode: 2227,
    suburb: "Gymea Bay",
    state: "NSW",
    latitude: -34.03,
    longitude: 151.09
  },
  {
    postcode: 2228,
    suburb: "Miranda",
    state: "NSW",
    latitude: -34.03,
    longitude: 151.1
  },
  {
    postcode: 2228,
    suburb: "Yowie Bay",
    state: "NSW",
    latitude: -34.03,
    longitude: 151.1
  },
  {
    postcode: 2229,
    suburb: "Caringbah",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.12
  },
  {
    postcode: 2229,
    suburb: "Caringbah South",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.12
  },
  {
    postcode: 2229,
    suburb: "Dolans Bay",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.12
  },
  {
    postcode: 2229,
    suburb: "Lilli Pilli",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.12
  },
  {
    postcode: 2229,
    suburb: "Port Hacking",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.12
  },
  {
    postcode: 2229,
    suburb: "Taren Point",
    state: "NSW",
    latitude: -34.04,
    longitude: 151.12
  },
  {
    postcode: 2230,
    suburb: "Bundeena",
    state: "NSW",
    latitude: -34.09,
    longitude: 151.15
  },
  {
    postcode: 2230,
    suburb: "Burraneer",
    state: "NSW",
    latitude: -34.09,
    longitude: 151.15
  },
  {
    postcode: 2230,
    suburb: "Cronulla",
    state: "NSW",
    latitude: -34.09,
    longitude: 151.15
  },
  {
    postcode: 2230,
    suburb: "Maianbar",
    state: "NSW",
    latitude: -34.09,
    longitude: 151.15
  },
  {
    postcode: 2230,
    suburb: "Woolooware",
    state: "NSW",
    latitude: -34.09,
    longitude: 151.15
  },
  {
    postcode: 2231,
    suburb: "Kurnell",
    state: "NSW",
    latitude: -34.01,
    longitude: 151.2
  },
  {
    postcode: 2232,
    suburb: "Audley",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Garie",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Grays Point",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Kareela",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Kirrawee",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Loftus",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Sutherland",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2232,
    suburb: "Woronora",
    state: "NSW",
    latitude: -34.08,
    longitude: 151.06
  },
  {
    postcode: 2233,
    suburb: "Engadine",
    state: "NSW",
    latitude: -34.07,
    longitude: 151.01
  },
  {
    postcode: 2233,
    suburb: "Heathcote",
    state: "NSW",
    latitude: -34.07,
    longitude: 151.01
  },
  {
    postcode: 2233,
    suburb: "Waterfall",
    state: "NSW",
    latitude: -34.07,
    longitude: 151.01
  },
  {
    postcode: 2233,
    suburb: "Woronora Heights",
    state: "NSW",
    latitude: -34.07,
    longitude: 151.01
  },
  {
    postcode: 2233,
    suburb: "Yarrawarrah",
    state: "NSW",
    latitude: -34.07,
    longitude: 151.01
  },
  {
    postcode: 2234,
    suburb: "Alfords Point",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2234,
    suburb: "Bangor",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2234,
    suburb: "Barden Ridge",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2234,
    suburb: "Illawong",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2234,
    suburb: "Lucas Heights",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2234,
    suburb: "Menai",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2234,
    suburb: "Menai Central",
    state: "NSW",
    latitude: -33.99,
    longitude: 151.02
  },
  {
    postcode: 2250,
    suburb: "Bucketty",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Calga",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Central Mangrove",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "East Gosford",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Erina",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Erina Fair",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Glenworth Valley",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Gosford",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Greengrove",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Holgate",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Kariong",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Kulnura",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Lisarow",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Lower Mangrove",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Mangrove Creek",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Mangrove Mountain",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Matcham",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Mooney Mooney Creek",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Mount Elliot",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Mount White",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Narara",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Niagara Park",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "North Gosford",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Peats Ridge",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Point Clare",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Point Frederick",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Somersby",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Springfield",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Tascott",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Ten Mile Hollow",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Upper Mangrove",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Wendoree Park",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "West Gosford",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2250,
    suburb: "Wyoming",
    state: "NSW",
    latitude: -33.11,
    longitude: 151.14
  },
  {
    postcode: 2251,
    suburb: "Avoca Beach",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Bensville",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Bouddi",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Copacabana",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Davistown",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Green Point",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Kincumber",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Kincumber South",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Macmasters Beach",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Picketts Valley",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Saratoga",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2251,
    suburb: "Yattalunga",
    state: "NSW",
    latitude: -33.46,
    longitude: 151.43
  },
  {
    postcode: 2252,
    suburb: "Central Coast MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2256,
    suburb: "Blackwall",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Horsfield Bay",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Koolewong",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Little Wobby",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Patonga",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Pearl Beach",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Phegans Bay",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Wondabyne",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Woy Woy",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2256,
    suburb: "Woy Woy Bay",
    state: "NSW",
    latitude: -33.5,
    longitude: 151.33
  },
  {
    postcode: 2257,
    suburb: "Booker Bay",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Box Head",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Daleys Point",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Empire Bay",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Ettalong Beach",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Hardys Bay",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Killcare",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Killcare Heights",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Pretty Beach",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "St Huberts Island",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Umina Beach",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2257,
    suburb: "Wagstaffe",
    state: "NSW",
    latitude: -33.51,
    longitude: 151.34
  },
  {
    postcode: 2258,
    suburb: "Fountaindale",
    state: "NSW",
    latitude: -33.34,
    longitude: 151.39
  },
  {
    postcode: 2258,
    suburb: "Kangy Angy",
    state: "NSW",
    latitude: -33.34,
    longitude: 151.39
  },
  {
    postcode: 2258,
    suburb: "Ourimbah",
    state: "NSW",
    latitude: -33.34,
    longitude: 151.39
  },
  {
    postcode: 2258,
    suburb: "Palm Grove",
    state: "NSW",
    latitude: -33.34,
    longitude: 151.39
  },
  {
    postcode: 2258,
    suburb: "Palmdale",
    state: "NSW",
    latitude: -33.34,
    longitude: 151.39
  },
  {
    postcode: 2259,
    suburb: "Alison",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Bushells Ridge",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Cedar Brush Creek",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Chain Valley Bay",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Crangan Bay",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Dooralong",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Durren Durren",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Frazer Park",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Freemans",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Gwandalan",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Halloran",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Hamlyn Terrace",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Jilliby",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Kanwal",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Kiar",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Kingfisher Shores",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Lake Munmorah",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Lemon Tree",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Little Jilliby",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Mannering Park",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Mardi",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Moonee",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Point Wolstoncroft",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Ravensdale",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Rocky Point",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Summerland Point",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Tacoma",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Tacoma South",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Tuggerah",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Tuggerawong",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wadalba",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wallarah",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Warnervale",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Watanobbi",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Woongarrah",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wybung",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wyee",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wyee Point",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wyong",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wyong Creek",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Wyongah",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2259,
    suburb: "Yarramalong",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.4
  },
  {
    postcode: 2260,
    suburb: "Erina Heights",
    state: "NSW",
    latitude: -33.43,
    longitude: 151.41
  },
  {
    postcode: 2260,
    suburb: "Forresters Beach",
    state: "NSW",
    latitude: -33.43,
    longitude: 151.41
  },
  {
    postcode: 2260,
    suburb: "North Avoca",
    state: "NSW",
    latitude: -33.43,
    longitude: 151.41
  },
  {
    postcode: 2260,
    suburb: "Terrigal",
    state: "NSW",
    latitude: -33.43,
    longitude: 151.41
  },
  {
    postcode: 2260,
    suburb: "Wamberal",
    state: "NSW",
    latitude: -33.43,
    longitude: 151.41
  },
  {
    postcode: 2261,
    suburb: "Bateau Bay",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Bay Village",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Berkeley Vale",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Blue Bay",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Chittaway Bay",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Chittaway Point",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Glenning Valley",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Killarney Vale",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Long Jetty",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Magenta",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Shelly Beach",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "The Entrance",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "The Entrance North",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Toowoon Bay",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2261,
    suburb: "Tumbi Umbi",
    state: "NSW",
    latitude: -33.38,
    longitude: 151.48
  },
  {
    postcode: 2262,
    suburb: "Blue Haven",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Budgewoi",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Budgewoi Peninsula",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Buff Point",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Colongra",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Doyalson",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Doyalson North",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "Halekulani",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2262,
    suburb: "San Remo",
    state: "NSW",
    latitude: -33.21,
    longitude: 151.49
  },
  {
    postcode: 2263,
    suburb: "Canton Beach",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2263,
    suburb: "Charmhaven",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2263,
    suburb: "Gorokan",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2263,
    suburb: "Lake Haven",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2263,
    suburb: "Norah Head",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2263,
    suburb: "Noraville",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2263,
    suburb: "Toukley",
    state: "NSW",
    latitude: -33.27,
    longitude: 151.54
  },
  {
    postcode: 2264,
    suburb: "Balcolyn",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Bonnells Bay",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Brightwaters",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Dora Creek",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Eraring",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Mandalong",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Mirrabooka",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Morisset",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Morisset Park",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Myuna Bay",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Silverwater",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Sunshine",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Windermere Park",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2264,
    suburb: "Yarrawonga Park",
    state: "NSW",
    latitude: -33.1,
    longitude: 151.55
  },
  {
    postcode: 2265,
    suburb: "Cooranbong",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.45
  },
  {
    postcode: 2265,
    suburb: "Martinsville",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.45
  },
  {
    postcode: 2267,
    suburb: "Wangi Wangi",
    state: "NSW",
    latitude: -33.07,
    longitude: 151.58
  },
  {
    postcode: 2278,
    suburb: "Barnsley",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.59
  },
  {
    postcode: 2278,
    suburb: "Killingworth",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.59
  },
  {
    postcode: 2278,
    suburb: "Wakefield",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.59
  },
  {
    postcode: 2280,
    suburb: "Belmont",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Belmont North",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Belmont South",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Croudace Bay",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Floraville",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Jewells",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Marks Point",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2280,
    suburb: "Valentine",
    state: "NSW",
    latitude: -33.04,
    longitude: 151.66
  },
  {
    postcode: 2281,
    suburb: "Blacksmiths",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Cams Wharf",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Catherine Hill Bay",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Caves Beach",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Little Pelican",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Murrays Beach",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Nords Wharf",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Pelican",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Pinny Beach",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Swansea",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2281,
    suburb: "Swansea Heads",
    state: "NSW",
    latitude: -33.08,
    longitude: 151.65
  },
  {
    postcode: 2282,
    suburb: "Eleebana",
    state: "NSW",
    latitude: -32.99,
    longitude: 151.64
  },
  {
    postcode: 2282,
    suburb: "Lakelands",
    state: "NSW",
    latitude: -32.99,
    longitude: 151.64
  },
  {
    postcode: 2282,
    suburb: "Warners Bay",
    state: "NSW",
    latitude: -32.99,
    longitude: 151.64
  },
  {
    postcode: 2283,
    suburb: "Arcadia Vale",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Awaba",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Balmoral",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Blackalls Park",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Bolton Point",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Buttaba",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Carey Bay",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Coal Point",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Fassifern",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Fennell Bay",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Fishing Point",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Kilaben Bay",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Rathmines",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Ryhope",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2283,
    suburb: "Toronto",
    state: "NSW",
    latitude: -33.06,
    longitude: 151.58
  },
  {
    postcode: 2284,
    suburb: "Argenton",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2284,
    suburb: "Boolaroo",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2284,
    suburb: "Booragul",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2284,
    suburb: "Marmong Point",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2284,
    suburb: "Speers Point",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2284,
    suburb: "Teralba",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2284,
    suburb: "Woodrising",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.63
  },
  {
    postcode: 2285,
    suburb: "Cameron Park",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2285,
    suburb: "Cardiff",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2285,
    suburb: "Cardiff Heights",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2285,
    suburb: "Cardiff South",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2285,
    suburb: "Edgeworth",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2285,
    suburb: "Glendale",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2285,
    suburb: "Macquarie Hills",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.66
  },
  {
    postcode: 2286,
    suburb: "Holmesville",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.58
  },
  {
    postcode: 2286,
    suburb: "Seahampton",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.58
  },
  {
    postcode: 2286,
    suburb: "West Wallsend",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.58
  },
  {
    postcode: 2287,
    suburb: "Birmingham Gardens",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Elermore Vale",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Fletcher",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Maryland",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Minmi",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Rankin Park",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Wallsend",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2287,
    suburb: "Wallsend South",
    state: "NSW",
    latitude: -32.89,
    longitude: 151.69
  },
  {
    postcode: 2289,
    suburb: "Adamstown",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2289,
    suburb: "Adamstown Heights",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2289,
    suburb: "Garden Suburb",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2289,
    suburb: "Highfields",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2289,
    suburb: "Kotara",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2289,
    suburb: "Kotara Fair",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2289,
    suburb: "Kotara South",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.73
  },
  {
    postcode: 2290,
    suburb: "Bennetts Green",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Charlestown",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Dudley",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Gateshead",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Hillsborough",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Kahibah",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Mount Hutton",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Redhead",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Tingira Heights",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2290,
    suburb: "Whitebridge",
    state: "NSW",
    latitude: -33,
    longitude: 151.69
  },
  {
    postcode: 2291,
    suburb: "Merewether",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.75
  },
  {
    postcode: 2291,
    suburb: "Merewether Heights",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.75
  },
  {
    postcode: 2291,
    suburb: "The Junction",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.75
  },
  {
    postcode: 2292,
    suburb: "Broadmeadow",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.74
  },
  {
    postcode: 2292,
    suburb: "Hamilton North",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.74
  },
  {
    postcode: 2293,
    suburb: "Maryville",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.75
  },
  {
    postcode: 2293,
    suburb: "Wickham",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.75
  },
  {
    postcode: 2294,
    suburb: "Carrington",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.77
  },
  {
    postcode: 2295,
    suburb: "Fern Bay",
    state: "NSW",
    latitude: -32.85,
    longitude: 151.81
  },
  {
    postcode: 2295,
    suburb: "Stockton",
    state: "NSW",
    latitude: -32.85,
    longitude: 151.81
  },
  {
    postcode: 2296,
    suburb: "Islington",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.75
  },
  {
    postcode: 2297,
    suburb: "Tighes Hill",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.75
  },
  {
    postcode: 2298,
    suburb: "Georgetown",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.73
  },
  {
    postcode: 2298,
    suburb: "Waratah",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.73
  },
  {
    postcode: 2298,
    suburb: "Waratah West",
    state: "NSW",
    latitude: -32.91,
    longitude: 151.73
  },
  {
    postcode: 2299,
    suburb: "Jesmond",
    state: "NSW",
    latitude: -32.9,
    longitude: 151.69
  },
  {
    postcode: 2299,
    suburb: "Lambton",
    state: "NSW",
    latitude: -32.9,
    longitude: 151.69
  },
  {
    postcode: 2299,
    suburb: "North Lambton",
    state: "NSW",
    latitude: -32.9,
    longitude: 151.69
  },
  {
    postcode: 2300,
    suburb: "Bar Beach",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.77
  },
  {
    postcode: 2300,
    suburb: "Cooks Hill",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.77
  },
  {
    postcode: 2300,
    suburb: "Newcastle",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.77
  },
  {
    postcode: 2300,
    suburb: "Newcastle East",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.77
  },
  {
    postcode: 2300,
    suburb: "The Hill",
    state: "NSW",
    latitude: -32.94,
    longitude: 151.77
  },
  {
    postcode: 2302,
    suburb: "Newcastle West",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.76
  },
  {
    postcode: 2303,
    suburb: "Hamilton",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.75
  },
  {
    postcode: 2303,
    suburb: "Hamilton East",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.75
  },
  {
    postcode: 2303,
    suburb: "Hamilton South",
    state: "NSW",
    latitude: -32.92,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Kooragang",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Mayfield",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Mayfield East",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Mayfield North",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Mayfield West",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Sandgate",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2304,
    suburb: "Warabrook",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.75
  },
  {
    postcode: 2305,
    suburb: "Kotara East",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.71
  },
  {
    postcode: 2305,
    suburb: "New Lambton",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.71
  },
  {
    postcode: 2305,
    suburb: "New Lambton Heights",
    state: "NSW",
    latitude: -32.93,
    longitude: 151.71
  },
  {
    postcode: 2306,
    suburb: "Windale",
    state: "NSW",
    latitude: -33,
    longitude: 151.68
  },
  {
    postcode: 2307,
    suburb: "Shortland",
    state: "NSW",
    latitude: -32.88,
    longitude: 151.69
  },
  {
    postcode: 2308,
    suburb: "Callaghan",
    state: "NSW",
    latitude: -35.13,
    longitude: 147.32
  },
  {
    postcode: 2308,
    suburb: "Newcastle University",
    state: "NSW",
    latitude: -35.13,
    longitude: 147.32
  },
  {
    postcode: 2309,
    suburb: "Dangar",
    state: "NSW",
    latitude: -30.35,
    longitude: 148.89
  },
  {
    postcode: 2310,
    suburb: "Hunter Region MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2311,
    suburb: "Allynbrook",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Bingleburra",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Carrabolla",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "East Gresford",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Eccleston",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Gresford",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Halton",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Lewinsbrook",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Lostock",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Mount Rivers",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2311,
    suburb: "Upper Allyn",
    state: "NSW",
    latitude: -32.36,
    longitude: 151.54
  },
  {
    postcode: 2312,
    suburb: "Minimbah",
    state: "NSW",
    latitude: -32.15,
    longitude: 152.36
  },
  {
    postcode: 2312,
    suburb: "Nabiac",
    state: "NSW",
    latitude: -32.15,
    longitude: 152.36
  },
  {
    postcode: 2314,
    suburb: "Williamtown Raaf",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.84
  },
  {
    postcode: 2315,
    suburb: "Corlette",
    state: "NSW",
    latitude: -32.72,
    longitude: 152.11
  },
  {
    postcode: 2315,
    suburb: "Fingal Bay",
    state: "NSW",
    latitude: -32.72,
    longitude: 152.11
  },
  {
    postcode: 2315,
    suburb: "Nelson Bay",
    state: "NSW",
    latitude: -32.72,
    longitude: 152.11
  },
  {
    postcode: 2315,
    suburb: "Shoal Bay",
    state: "NSW",
    latitude: -32.72,
    longitude: 152.11
  },
  {
    postcode: 2316,
    suburb: "Anna Bay",
    state: "NSW",
    latitude: -32.78,
    longitude: 152.08
  },
  {
    postcode: 2316,
    suburb: "Boat Harbour",
    state: "NSW",
    latitude: -32.78,
    longitude: 152.08
  },
  {
    postcode: 2316,
    suburb: "Bobs Farm",
    state: "NSW",
    latitude: -32.78,
    longitude: 152.08
  },
  {
    postcode: 2316,
    suburb: "Fishermans Bay",
    state: "NSW",
    latitude: -32.78,
    longitude: 152.08
  },
  {
    postcode: 2316,
    suburb: "One Mile",
    state: "NSW",
    latitude: -32.78,
    longitude: 152.08
  },
  {
    postcode: 2316,
    suburb: "Taylors Beach",
    state: "NSW",
    latitude: -32.78,
    longitude: 152.08
  },
  {
    postcode: 2317,
    suburb: "Salamander Bay",
    state: "NSW",
    latitude: -32.72,
    longitude: 152.08
  },
  {
    postcode: 2317,
    suburb: "Soldiers Point",
    state: "NSW",
    latitude: -32.72,
    longitude: 152.08
  },
  {
    postcode: 2318,
    suburb: "Campvale",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2318,
    suburb: "Ferodale",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2318,
    suburb: "Fullerton Cove",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2318,
    suburb: "Medowie",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2318,
    suburb: "Oyster Cove",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2318,
    suburb: "Salt Ash",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2318,
    suburb: "Williamtown",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.85
  },
  {
    postcode: 2319,
    suburb: "Lemon Tree Passage",
    state: "NSW",
    latitude: -32.73,
    longitude: 152.04
  },
  {
    postcode: 2319,
    suburb: "Mallabula",
    state: "NSW",
    latitude: -32.73,
    longitude: 152.04
  },
  {
    postcode: 2319,
    suburb: "Tanilba Bay",
    state: "NSW",
    latitude: -32.73,
    longitude: 152.04
  },
  {
    postcode: 2319,
    suburb: "Tilligerry Creek",
    state: "NSW",
    latitude: -32.73,
    longitude: 152.04
  },
  {
    postcode: 2320,
    suburb: "Aberglasslyn",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Allandale",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Anambah",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Bolwarra",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Bolwarra Heights",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Farley",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Glen Oak",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Gosforth",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Hillsborough",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Horseshoe Bend",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Keinbah",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Largs",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Lorn",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Louth Park",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Maitland",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Maitland North",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Maitland Vale",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Melville",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Mindaribba",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Mount Dee",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Oakhampton",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Oakhampton Heights",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Pokolbin",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Rosebrook",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Rothbury",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Rutherford",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "South Maitland",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Telarah",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Wallalong",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2320,
    suburb: "Windella",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.53
  },
  {
    postcode: 2321,
    suburb: "Berry Park",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Butterwick",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Clarence Town",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Cliftleigh",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Duckenfield",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Duns Creek",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Gillieston Heights",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Glen Martin",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Glen William",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Harpers Hill",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Heddon Greta",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Hinton",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Lochinvar",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Luskintyre",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Morpeth",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Oswald",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Phoenix Park",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Raworth",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Windermere",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2321,
    suburb: "Woodville",
    state: "NSW",
    latitude: -32.76,
    longitude: 151.65
  },
  {
    postcode: 2322,
    suburb: "Beresfield",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Black Hill",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Chisholm",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Hexham",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Lenaghan",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Stockrington",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Tarro",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Thornton",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Tomago",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2322,
    suburb: "Woodberry",
    state: "NSW",
    latitude: -32.8,
    longitude: 151.66
  },
  {
    postcode: 2323,
    suburb: "Ashtonfield",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Brunkerville",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Buchanan",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Buttai",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "East Maitland",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Four Mile Creek",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Freemans Waterhole",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Green Hills",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Metford",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Metford DC",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Mount Vincent",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Mulbring",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Pitnacree",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Richmond Vale",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2323,
    suburb: "Tenambit",
    state: "NSW",
    latitude: -32.77,
    longitude: 151.6
  },
  {
    postcode: 2324,
    suburb: "Balickera",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Brandy Hill",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Bundabah",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Carrington",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Eagleton",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "East Seaham",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Hawks Nest",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Heatherbrae",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Karuah",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Limeburners Creek",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Millers Forest",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Nelsons Plains",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "North Arm Cove",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Osterley",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Pindimar",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Raymond Terrace",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Raymond Terrace East",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Seaham",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Swan Bay",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Tahlee",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Tea Gardens",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2324,
    suburb: "Twelve Mile Creek",
    state: "NSW",
    latitude: -32.67,
    longitude: 151.81
  },
  {
    postcode: 2325,
    suburb: "Aberdare",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Abernethy",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Bellbird",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Bellbird Heights",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Cedar Creek",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Cessnock",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Cessnock West",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Congewai",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Corrabare",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Ellalong",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Elrington",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Greta Main",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Kearsley",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Kitchener",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Laguna",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Lovedale",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Millfield",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Moruben",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Mount View",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Nulkaba",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Olney",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Paxton",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Paynes Crossing",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Pelton",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Quorrobolong",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Sweetmans Creek",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2325,
    suburb: "Wollombi",
    state: "NSW",
    latitude: -32.84,
    longitude: 151.38
  },
  {
    postcode: 2326,
    suburb: "Abermain",
    state: "NSW",
    latitude: -32.81,
    longitude: 151.43
  },
  {
    postcode: 2326,
    suburb: "Bishops Bridge",
    state: "NSW",
    latitude: -32.81,
    longitude: 151.43
  },
  {
    postcode: 2326,
    suburb: "Loxford",
    state: "NSW",
    latitude: -32.81,
    longitude: 151.43
  },
  {
    postcode: 2326,
    suburb: "Neath",
    state: "NSW",
    latitude: -32.81,
    longitude: 151.43
  },
  {
    postcode: 2326,
    suburb: "Sawyers Gully",
    state: "NSW",
    latitude: -32.81,
    longitude: 151.43
  },
  {
    postcode: 2326,
    suburb: "Weston",
    state: "NSW",
    latitude: -32.81,
    longitude: 151.43
  },
  {
    postcode: 2327,
    suburb: "Kurri Kurri",
    state: "NSW",
    latitude: -32.82,
    longitude: 151.48
  },
  {
    postcode: 2327,
    suburb: "Pelaw Main",
    state: "NSW",
    latitude: -32.82,
    longitude: 151.48
  },
  {
    postcode: 2327,
    suburb: "Stanford Merthyr",
    state: "NSW",
    latitude: -32.82,
    longitude: 151.48
  },
  {
    postcode: 2328,
    suburb: "Bureen",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Dalswinton",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Denman",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Giants Creek",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Hollydeen",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Kerrabee",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Mangoola",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Martindale",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Widden",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2328,
    suburb: "Yarrawa",
    state: "NSW",
    latitude: -32.46,
    longitude: 150.74
  },
  {
    postcode: 2329,
    suburb: "Cassilis",
    state: "NSW",
    latitude: -31.51,
    longitude: 150.64
  },
  {
    postcode: 2329,
    suburb: "Merriwa",
    state: "NSW",
    latitude: -31.51,
    longitude: 150.64
  },
  {
    postcode: 2329,
    suburb: "Uarbry",
    state: "NSW",
    latitude: -31.51,
    longitude: 150.64
  },
  {
    postcode: 2330,
    suburb: "Appletree Flat",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Big Ridge",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Big Yengo",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Bowmans Creek",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Bridgman",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Broke",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Bulga",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Camberwell",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Carrowbrook",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Clydesdale",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Combo",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Darlington",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Doyles Creek",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Dunolly",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Dural",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Dyrring",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Falbrook",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Fern Gully",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Fordwich",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Garland Valley",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Glendon",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Glendon Brook",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Glennies Creek",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Glenridding",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Goorangoola",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Gouldsville",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Gowrie",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Greenlands",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Hambledon Hill",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Hebden",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Howes Valley",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Howick",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Hunterview",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Jerrys Plains",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Lemington",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Long Point",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Maison Dieu",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Mcdougalls Hill",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Middle Falbrook",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Milbrodale",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Mirannie",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Mitchells Flat",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Mount Olive",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Mount Royal",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Mount Thorley",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Obanvale",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Putty",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Ravensworth",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Redbournberry",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Reedy Creek",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Rixs Creek",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Roughit",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Scotts Flat",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Sedgefield",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Singleton",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Singleton Heights",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "St Clair",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Warkworth",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Wattle Ponds",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Westbrook",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Whittingham",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Wollemi",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2330,
    suburb: "Wylies Flat",
    state: "NSW",
    latitude: -32.51,
    longitude: 150.86
  },
  {
    postcode: 2331,
    suburb: "Singleton Military Area",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.18
  },
  {
    postcode: 2331,
    suburb: "Singleton Milpo",
    state: "NSW",
    latitude: -32.69,
    longitude: 151.18
  },
  {
    postcode: 2333,
    suburb: "Baerami",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Baerami Creek",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Bengalla",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Castle Rock",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Edderton",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Gungal",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Kayuga",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Liddell",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Manobalai",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Mccullys Gap",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Muscle Creek",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Muswellbrook",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Sandy Hollow",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2333,
    suburb: "Wybong",
    state: "NSW",
    latitude: -32.39,
    longitude: 150.47
  },
  {
    postcode: 2334,
    suburb: "Greta",
    state: "NSW",
    latitude: -32.68,
    longitude: 151.39
  },
  {
    postcode: 2335,
    suburb: "Belford",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Branxton",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Dalwood",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "East Branxton",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Elderslie",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Lambs Valley",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Leconfield",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Lower Belford",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "North Rothbury",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2335,
    suburb: "Stanhope",
    state: "NSW",
    latitude: -32.65,
    longitude: 151.28
  },
  {
    postcode: 2336,
    suburb: "Aberdeen",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Dartbrook",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Davis Creek",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Rossgole",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Rouchel",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Rouchel Brook",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Upper Dartbrook",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2336,
    suburb: "Upper Rouchel",
    state: "NSW",
    latitude: -32.16,
    longitude: 150.89
  },
  {
    postcode: 2337,
    suburb: "Belltrees",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Brawboy",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Bunnan",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Dry Creek",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Ellerston",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Glenbawn",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Glenrock",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Gundy",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Kars Springs",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Middle Brook",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Moobi",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Moonan Brook",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Moonan Flat",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Murulla",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Omadale",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Owens Gap",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Pages Creek",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Parkville",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Scone",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Segenhoe",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Stewarts Brook",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Tomalla",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Waverly",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Wingen",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2337,
    suburb: "Woolooma",
    state: "NSW",
    latitude: -31.99,
    longitude: 151.12
  },
  {
    postcode: 2338,
    suburb: "Ardglen",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Blandford",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Crawney",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Green Creek",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Murrurundi",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Pages River",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Sandy Creek",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Scotts Creek",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2338,
    suburb: "Timor",
    state: "NSW",
    latitude: -31.73,
    longitude: 150.79
  },
  {
    postcode: 2339,
    suburb: "Big Jacks Creek",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Braefield",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Cattle Creek",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Chilcotts Creek",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Little Jacks Creek",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Macdonalds Creek",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Parraweena",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Warrah",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Warrah Creek",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2339,
    suburb: "Willow Tree",
    state: "NSW",
    latitude: -31.77,
    longitude: 150.62
  },
  {
    postcode: 2340,
    suburb: "Appleby",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Barry",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Bective",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Bithramere",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Bowling Alley Point",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Calala",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Carroll",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Daruka",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Duncans Creek",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Dungowan",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "East Tamworth",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Garoo",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Gidley",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Goonoo Goonoo",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Gowrie",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Hallsville",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Hanging Rock",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Hillvue",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Keepit",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Kingswood",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Loomberah",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Moore Creek",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Nemingha",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "North Tamworth",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Nundle",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Ogunbil",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Oxley Vale",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Piallamore",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Somerton",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "South Tamworth",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Taminda",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Tamworth",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Timbumburi",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Wallamore",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Warral",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Weabonga",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "West Tamworth",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Westdale",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2340,
    suburb: "Woolomin",
    state: "NSW",
    latitude: -30.96,
    longitude: 150.83
  },
  {
    postcode: 2341,
    suburb: "Werris Creek",
    state: "NSW",
    latitude: -31.35,
    longitude: 150.62
  },
  {
    postcode: 2342,
    suburb: "Currabubula",
    state: "NSW",
    latitude: -31.26,
    longitude: 150.73
  },
  {
    postcode: 2342,
    suburb: "Piallaway",
    state: "NSW",
    latitude: -31.26,
    longitude: 150.73
  },
  {
    postcode: 2343,
    suburb: "Blackville",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Borambil",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Bundella",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Caroona",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Colly Blue",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Coomoo Coomoo",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Pine Ridge",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Quipolly",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Quirindi",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Spring Ridge",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Wallabadah",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Warrah Ridge",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Windy",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Yannergee",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2343,
    suburb: "Yarraman",
    state: "NSW",
    latitude: -31.66,
    longitude: 150.3
  },
  {
    postcode: 2344,
    suburb: "Duri",
    state: "NSW",
    latitude: -31.22,
    longitude: 150.82
  },
  {
    postcode: 2344,
    suburb: "Winton",
    state: "NSW",
    latitude: -31.22,
    longitude: 150.82
  },
  {
    postcode: 2345,
    suburb: "Attunga",
    state: "NSW",
    latitude: -30.93,
    longitude: 150.85
  },
  {
    postcode: 2345,
    suburb: "Garthowen",
    state: "NSW",
    latitude: -30.93,
    longitude: 150.85
  },
  {
    postcode: 2346,
    suburb: "Borah Creek",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Halls Creek",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Klori",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Manilla",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Namoi River",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "New Mexico",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Rushes Creek",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Upper Manilla",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Warrabah",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Wimborne",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2346,
    suburb: "Wongo Creek",
    state: "NSW",
    latitude: -30.61,
    longitude: 150.51
  },
  {
    postcode: 2347,
    suburb: "Banoon",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Barraba",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Cobbadah",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Gulf Creek",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Gundamulda",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Ironbark",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Lindesay",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Longarm",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Mayvale",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Red Hill",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Thirloene",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Upper Horton",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2347,
    suburb: "Woodsreef",
    state: "NSW",
    latitude: -30.53,
    longitude: 150.44
  },
  {
    postcode: 2348,
    suburb: "New England MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2350,
    suburb: "Aberfoyle",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Abington",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Argyle",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Armidale",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Boorolong",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Castle Doyle",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Dangarsleigh",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Donald Creek",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Dumaresq",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Duval",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Enmore",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Hillgrove",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Invergowrie",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Jeogla",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Kellys Plains",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Lyndhurst",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Puddledock",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Saumarez",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Saumarez Ponds",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Thalgarrah",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Tilbuster",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Wards Mistake",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "West Armidale",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Wollomombi",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2350,
    suburb: "Wongwibinda",
    state: "NSW",
    latitude: -30.24,
    longitude: 152.01
  },
  {
    postcode: 2351,
    suburb: "University Of New England",
    state: "NSW",
    latitude: -30.49,
    longitude: 151.64
  },
  {
    postcode: 2352,
    suburb: "Kootingal",
    state: "NSW",
    latitude: -31.06,
    longitude: 151.05
  },
  {
    postcode: 2352,
    suburb: "Limbri",
    state: "NSW",
    latitude: -31.06,
    longitude: 151.05
  },
  {
    postcode: 2352,
    suburb: "Mulla Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 151.05
  },
  {
    postcode: 2352,
    suburb: "Tintinhull",
    state: "NSW",
    latitude: -31.06,
    longitude: 151.05
  },
  {
    postcode: 2353,
    suburb: "Moonbi",
    state: "NSW",
    latitude: -30.95,
    longitude: 151.05
  },
  {
    postcode: 2354,
    suburb: "Kentucky",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Kentucky South",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Niangala",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Nowendoc",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Walcha",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Walcha Road",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Wollun",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Woolbrook",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2354,
    suburb: "Yarrowitch",
    state: "NSW",
    latitude: -31.27,
    longitude: 151.55
  },
  {
    postcode: 2355,
    suburb: "Bendemeer",
    state: "NSW",
    latitude: -30.88,
    longitude: 151.16
  },
  {
    postcode: 2355,
    suburb: "Retreat",
    state: "NSW",
    latitude: -30.88,
    longitude: 151.16
  },
  {
    postcode: 2355,
    suburb: "Watsons Creek",
    state: "NSW",
    latitude: -30.88,
    longitude: 151.16
  },
  {
    postcode: 2356,
    suburb: "Gwabegar",
    state: "NSW",
    latitude: -30.62,
    longitude: 148.97
  },
  {
    postcode: 2357,
    suburb: "Bomera",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Box Ridge",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Bugaldie",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Coonabarabran",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Dandry",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Gowang",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Purlewaugh",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Rocky Glen",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Tannabar",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Ulamambri",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2357,
    suburb: "Wattle Springs",
    state: "NSW",
    latitude: -31.51,
    longitude: 149.79
  },
  {
    postcode: 2358,
    suburb: "Arding",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Balala",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Gostwyck",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Kingstown",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Mihi",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Rocky River",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Salisbury Plains",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Torryburn",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Uralla",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2358,
    suburb: "Yarrowyck",
    state: "NSW",
    latitude: -30.59,
    longitude: 151.56
  },
  {
    postcode: 2359,
    suburb: "Aberdeen",
    state: "NSW",
    latitude: -30,
    longitude: 151.08
  },
  {
    postcode: 2359,
    suburb: "Bakers Creek",
    state: "NSW",
    latitude: -30,
    longitude: 151.08
  },
  {
    postcode: 2359,
    suburb: "Bundarra",
    state: "NSW",
    latitude: -30,
    longitude: 151.08
  },
  {
    postcode: 2359,
    suburb: "Camerons Creek",
    state: "NSW",
    latitude: -30,
    longitude: 151.08
  },
  {
    postcode: 2360,
    suburb: "Auburn Vale",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Brodies Plains",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Bukkulla",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Cherry Tree Hill",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Copeton",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Elsmore",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Gilgai",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Graman",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Gum Flat",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Howell",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Inverell",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Kings Plains",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Little Plain",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Long Plain",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Mount Russell",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Newstead",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Nullamanna",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Oakwood",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Paradise",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Rob Roy",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Sapphire",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Spring Mountain",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Stanborough",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Swanbrook",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Wallangra",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Wandera",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2360,
    suburb: "Woodstock",
    state: "NSW",
    latitude: -29.84,
    longitude: 151.04
  },
  {
    postcode: 2361,
    suburb: "Ashford",
    state: "NSW",
    latitude: -29.32,
    longitude: 151.1
  },
  {
    postcode: 2361,
    suburb: "Atholwood",
    state: "NSW",
    latitude: -29.32,
    longitude: 151.1
  },
  {
    postcode: 2361,
    suburb: "Bonshaw",
    state: "NSW",
    latitude: -29.32,
    longitude: 151.1
  },
  {
    postcode: 2361,
    suburb: "Limestone",
    state: "NSW",
    latitude: -29.32,
    longitude: 151.1
  },
  {
    postcode: 2361,
    suburb: "Pindaroi",
    state: "NSW",
    latitude: -29.32,
    longitude: 151.1
  },
  {
    postcode: 2365,
    suburb: "Backwater",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Bald Blair",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Baldersleigh",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Bassendean",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Ben Lomond",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Black Mountain",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Briarbrook",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Brockley",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Brushy Creek",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Falconer",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Georges Creek",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Glen Nevis",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Glencoe",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Green Hills",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Guyra",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Llangothlin",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Maybole",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Mount Mitchell",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "New Valley",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Oban",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "South Guyra",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Tenterden",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "The Basin",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "The Gulf",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Tubbamurra",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2365,
    suburb: "Wandsworth",
    state: "NSW",
    latitude: -30.08,
    longitude: 151.88
  },
  {
    postcode: 2369,
    suburb: "Old Mill",
    state: "NSW",
    latitude: -29.91,
    longitude: 151.21
  },
  {
    postcode: 2369,
    suburb: "Stannifer",
    state: "NSW",
    latitude: -29.91,
    longitude: 151.21
  },
  {
    postcode: 2369,
    suburb: "Tingha",
    state: "NSW",
    latitude: -29.91,
    longitude: 151.21
  },
  {
    postcode: 2370,
    suburb: "Bald Nob",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Diehard",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Dundee",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Furracabad",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Gibraltar Range",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Glen Elgin",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Glen Innes",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Kingsgate",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Kookabookra",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Lambs Valley",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Matheson",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Moggs Swamp",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Moogem",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Morven",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Newton Boyd",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Pinkett",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Rangers Valley",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Red Range",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Reddestone",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Shannon Vale",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Stonehenge",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Swan Vale",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Wellingrove",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2370,
    suburb: "Yarrowford",
    state: "NSW",
    latitude: -29.64,
    longitude: 151.96
  },
  {
    postcode: 2371,
    suburb: "Capoompeta",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Deepwater",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Emmaville",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Rocky Creek",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Stannum",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "The Gulf",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Torrington",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Wellington Vale",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2371,
    suburb: "Yellow Dam",
    state: "NSW",
    latitude: -29.39,
    longitude: 152.04
  },
  {
    postcode: 2372,
    suburb: "Back Creek",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Bolivia",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Boonoo Boonoo",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Boorook",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Carrolls Creek",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Cullendore",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Forest Land",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Liston",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Mole River",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Rivertree",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Rocky River",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Sandy Flat",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Sandy Hill",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Silent Grove",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Tarban",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Tenterfield",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Timbarra",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Willsons Downfall",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Woodside",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2372,
    suburb: "Wylie Creek",
    state: "NSW",
    latitude: -28.93,
    longitude: 151.7
  },
  {
    postcode: 2379,
    suburb: "Goolhi",
    state: "NSW",
    latitude: -31.07,
    longitude: 149.71
  },
  {
    postcode: 2379,
    suburb: "Mullaley",
    state: "NSW",
    latitude: -31.07,
    longitude: 149.71
  },
  {
    postcode: 2379,
    suburb: "Napier Lane",
    state: "NSW",
    latitude: -31.07,
    longitude: 149.71
  },
  {
    postcode: 2379,
    suburb: "Nombi",
    state: "NSW",
    latitude: -31.07,
    longitude: 149.71
  },
  {
    postcode: 2380,
    suburb: "Blue Vale",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Emerald Hill",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Ghoolendaadi",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Gunnedah",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Kelvin",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Marys Mount",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Milroy",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Orange Grove",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2380,
    suburb: "Rangari",
    state: "NSW",
    latitude: -30.8,
    longitude: 150.2
  },
  {
    postcode: 2381,
    suburb: "Breeza",
    state: "NSW",
    latitude: -31.24,
    longitude: 150.46
  },
  {
    postcode: 2381,
    suburb: "Curlewis",
    state: "NSW",
    latitude: -31.24,
    longitude: 150.46
  },
  {
    postcode: 2381,
    suburb: "Premer",
    state: "NSW",
    latitude: -31.24,
    longitude: 150.46
  },
  {
    postcode: 2381,
    suburb: "Tambar Springs",
    state: "NSW",
    latitude: -31.24,
    longitude: 150.46
  },
  {
    postcode: 2382,
    suburb: "Boggabri",
    state: "NSW",
    latitude: -30.7,
    longitude: 150.04
  },
  {
    postcode: 2382,
    suburb: "Maules Creek",
    state: "NSW",
    latitude: -30.7,
    longitude: 150.04
  },
  {
    postcode: 2382,
    suburb: "Wean",
    state: "NSW",
    latitude: -30.7,
    longitude: 150.04
  },
  {
    postcode: 2382,
    suburb: "Willala",
    state: "NSW",
    latitude: -30.7,
    longitude: 150.04
  },
  {
    postcode: 2386,
    suburb: "Burren Junction",
    state: "NSW",
    latitude: -30.11,
    longitude: 148.97
  },
  {
    postcode: 2386,
    suburb: "Drildool",
    state: "NSW",
    latitude: -30.11,
    longitude: 148.97
  },
  {
    postcode: 2386,
    suburb: "Nowley",
    state: "NSW",
    latitude: -30.11,
    longitude: 148.97
  },
  {
    postcode: 2387,
    suburb: "Bulyeroi",
    state: "NSW",
    latitude: -29.78,
    longitude: 149.09
  },
  {
    postcode: 2387,
    suburb: "Rowena",
    state: "NSW",
    latitude: -29.78,
    longitude: 149.09
  },
  {
    postcode: 2388,
    suburb: "Boolcarroll",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Cuttabri",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Jews Lagoon",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Merah North",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Pilliga",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Spring Plains",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "The Pilliga",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Wee Waa",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2388,
    suburb: "Yarrie Lake",
    state: "NSW",
    latitude: -30.09,
    longitude: 149.44
  },
  {
    postcode: 2390,
    suburb: "Baan Baa",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Back Creek",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Berrigal",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Bohena Creek",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Bullawa Creek",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Couradda",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Edgeroi",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Eulah Creek",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Harparary",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Jacks Creek",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Kaputar",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Narrabri",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Narrabri West",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Rocky Creek",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Tarriaro",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2390,
    suburb: "Turrawan",
    state: "NSW",
    latitude: -30.6,
    longitude: 149.97
  },
  {
    postcode: 2395,
    suburb: "Binnaway",
    state: "NSW",
    latitude: -31.55,
    longitude: 149.38
  },
  {
    postcode: 2395,
    suburb: "Ropers Road",
    state: "NSW",
    latitude: -31.55,
    longitude: 149.38
  },
  {
    postcode: 2395,
    suburb: "Weetaliba",
    state: "NSW",
    latitude: -31.55,
    longitude: 149.38
  },
  {
    postcode: 2396,
    suburb: "Baradine",
    state: "NSW",
    latitude: -30.94,
    longitude: 149.07
  },
  {
    postcode: 2396,
    suburb: "Barwon",
    state: "NSW",
    latitude: -30.94,
    longitude: 149.07
  },
  {
    postcode: 2396,
    suburb: "Goorianawa",
    state: "NSW",
    latitude: -30.94,
    longitude: 149.07
  },
  {
    postcode: 2396,
    suburb: "Kenebri",
    state: "NSW",
    latitude: -30.94,
    longitude: 149.07
  },
  {
    postcode: 2397,
    suburb: "Bellata",
    state: "NSW",
    latitude: -29.92,
    longitude: 149.79
  },
  {
    postcode: 2397,
    suburb: "Millie",
    state: "NSW",
    latitude: -29.92,
    longitude: 149.79
  },
  {
    postcode: 2398,
    suburb: "Gurley",
    state: "NSW",
    latitude: -29.74,
    longitude: 149.8
  },
  {
    postcode: 2399,
    suburb: "Biniguy",
    state: "NSW",
    latitude: -29.58,
    longitude: 150.14
  },
  {
    postcode: 2399,
    suburb: "Pallamallawa",
    state: "NSW",
    latitude: -29.58,
    longitude: 150.14
  },
  {
    postcode: 2400,
    suburb: "Ashley",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Bullarah",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Crooble",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Mallowa",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Moree",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Moree East",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Terry Hie Hie",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2400,
    suburb: "Tulloona",
    state: "NSW",
    latitude: -29.32,
    longitude: 149.81
  },
  {
    postcode: 2401,
    suburb: "Gravesend",
    state: "NSW",
    latitude: -29.58,
    longitude: 150.34
  },
  {
    postcode: 2402,
    suburb: "Balfours Peak",
    state: "NSW",
    latitude: -29.51,
    longitude: 150.75
  },
  {
    postcode: 2402,
    suburb: "Coolatai",
    state: "NSW",
    latitude: -29.51,
    longitude: 150.75
  },
  {
    postcode: 2402,
    suburb: "Warialda",
    state: "NSW",
    latitude: -29.51,
    longitude: 150.75
  },
  {
    postcode: 2402,
    suburb: "Warialda Rail",
    state: "NSW",
    latitude: -29.51,
    longitude: 150.75
  },
  {
    postcode: 2403,
    suburb: "Delungra",
    state: "NSW",
    latitude: -29.65,
    longitude: 150.83
  },
  {
    postcode: 2403,
    suburb: "Gragin",
    state: "NSW",
    latitude: -29.65,
    longitude: 150.83
  },
  {
    postcode: 2403,
    suburb: "Myall Creek",
    state: "NSW",
    latitude: -29.65,
    longitude: 150.83
  },
  {
    postcode: 2404,
    suburb: "Bangheet",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Bingara",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Dinoga",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Elcombe",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Gineroi",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Keera",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Pallal",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Riverview",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2404,
    suburb: "Upper Bingara",
    state: "NSW",
    latitude: -29.8,
    longitude: 150.48
  },
  {
    postcode: 2405,
    suburb: "Boomi",
    state: "NSW",
    latitude: -28.73,
    longitude: 149.58
  },
  {
    postcode: 2405,
    suburb: "Garah",
    state: "NSW",
    latitude: -28.73,
    longitude: 149.58
  },
  {
    postcode: 2406,
    suburb: "Mungindi",
    state: "NSW",
    latitude: -29,
    longitude: 149.1
  },
  {
    postcode: 2406,
    suburb: "Mungindi",
    state: "QLD",
    latitude: -29,
    longitude: 149.1
  },
  {
    postcode: 2406,
    suburb: "Weemelah",
    state: "NSW",
    latitude: -29,
    longitude: 149.1
  },
  {
    postcode: 2408,
    suburb: "Blue Nobby",
    state: "NSW",
    latitude: -28.93,
    longitude: 150.39
  },
  {
    postcode: 2408,
    suburb: "North Star",
    state: "NSW",
    latitude: -28.93,
    longitude: 150.39
  },
  {
    postcode: 2408,
    suburb: "Yallaroi",
    state: "NSW",
    latitude: -28.93,
    longitude: 150.39
  },
  {
    postcode: 2409,
    suburb: "Boggabilla",
    state: "NSW",
    latitude: -28.74,
    longitude: 150.42
  },
  {
    postcode: 2409,
    suburb: "Boonal",
    state: "NSW",
    latitude: -28.74,
    longitude: 150.42
  },
  {
    postcode: 2410,
    suburb: "Twin Rivers",
    state: "NSW",
    latitude: -29.05,
    longitude: 150.64
  },
  {
    postcode: 2410,
    suburb: "Yetman",
    state: "NSW",
    latitude: -29.05,
    longitude: 150.64
  },
  {
    postcode: 2411,
    suburb: "Croppa Creek",
    state: "NSW",
    latitude: -29.13,
    longitude: 150.38
  },
  {
    postcode: 2415,
    suburb: "Monkerai",
    state: "NSW",
    latitude: -32.29,
    longitude: 151.86
  },
  {
    postcode: 2415,
    suburb: "Nooroo",
    state: "NSW",
    latitude: -32.29,
    longitude: 151.86
  },
  {
    postcode: 2415,
    suburb: "Stroud Road",
    state: "NSW",
    latitude: -32.29,
    longitude: 151.86
  },
  {
    postcode: 2415,
    suburb: "Upper Karuah River",
    state: "NSW",
    latitude: -32.29,
    longitude: 151.86
  },
  {
    postcode: 2415,
    suburb: "Weismantels",
    state: "NSW",
    latitude: -32.29,
    longitude: 151.86
  },
  {
    postcode: 2420,
    suburb: "Alison",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Bandon Grove",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Bendolba",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Brookfield",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Cambra",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Chichester",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Dungog",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Flat Tops",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Fosterton",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Hanleys Creek",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Hilldale",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Main Creek",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Marshdale",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Martins Creek",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Munni",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Salisbury",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Stroud Hill",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Sugarloaf",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Tabbil Creek",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Underbank",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Wallaringa",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Wallarobba",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2420,
    suburb: "Wirragulla",
    state: "NSW",
    latitude: -32.43,
    longitude: 151.77
  },
  {
    postcode: 2421,
    suburb: "Fishers Hill",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2421,
    suburb: "Paterson",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2421,
    suburb: "Summer Hill",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2421,
    suburb: "Tocal",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2421,
    suburb: "Torryburn",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2421,
    suburb: "Vacy",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2421,
    suburb: "Webbers Creek",
    state: "NSW",
    latitude: -32.51,
    longitude: 151.53
  },
  {
    postcode: 2422,
    suburb: "Back Creek",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bakers Creek",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Barrington",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Barrington Tops",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Baxters Ridge",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Belbora",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Berrico",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bindera",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bowman",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bowman Farm",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bretti",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bulliac",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Bundook",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Callaghans Creek",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Cobark",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Coneac",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Copeland",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Craven",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Craven Plateau",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Curricabark",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Dewitt",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Faulkland",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Forbesdale",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Gangat",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Giro",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Glen Ward",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Gloucester",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Gloucester Tops",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Invergordon",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Kia Ora",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Mares Run",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Mernot",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Mograni",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Moppy",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Rawdon Vale",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Rookhurst",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Stratford",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Terreel",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Tibbuc",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Titaatee Creek",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Tugrabakh",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Wallanbah",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Wards River",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Waukivory",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2422,
    suburb: "Woko",
    state: "NSW",
    latitude: -31.97,
    longitude: 152.07
  },
  {
    postcode: 2423,
    suburb: "Bombah Point",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Boolambayte",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Bulahdelah",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Bungwahl",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Coolongolook",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Crawford River",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Markwell",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Mayers Flat",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Mungo Brush",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Myall Lake",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Nerong",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Seal Rocks",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Topi Topi",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Upper Myall",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Violet Hill",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Wang Wauk",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Warranulla",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Willina",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Wootton",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2423,
    suburb: "Yagon",
    state: "NSW",
    latitude: -32.49,
    longitude: 152.28
  },
  {
    postcode: 2424,
    suburb: "Caffreys Flat",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Cells River",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Cooplacurripa",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Cundle Flat",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Knorrit Flat",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Knorrit Forest",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Mount George",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Number One",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2424,
    suburb: "Tiri",
    state: "NSW",
    latitude: -31.8,
    longitude: 152.07
  },
  {
    postcode: 2425,
    suburb: "Allworth",
    state: "NSW",
    latitude: -32.54,
    longitude: 151.96
  },
  {
    postcode: 2425,
    suburb: "Booral",
    state: "NSW",
    latitude: -32.54,
    longitude: 151.96
  },
  {
    postcode: 2425,
    suburb: "Girvan",
    state: "NSW",
    latitude: -32.54,
    longitude: 151.96
  },
  {
    postcode: 2425,
    suburb: "Stroud",
    state: "NSW",
    latitude: -32.54,
    longitude: 151.96
  },
  {
    postcode: 2425,
    suburb: "The Branch",
    state: "NSW",
    latitude: -32.54,
    longitude: 151.96
  },
  {
    postcode: 2425,
    suburb: "Washpool",
    state: "NSW",
    latitude: -32.54,
    longitude: 151.96
  },
  {
    postcode: 2426,
    suburb: "Coopernook",
    state: "NSW",
    latitude: -31.83,
    longitude: 152.61
  },
  {
    postcode: 2426,
    suburb: "Langley Vale",
    state: "NSW",
    latitude: -31.83,
    longitude: 152.61
  },
  {
    postcode: 2426,
    suburb: "Moto",
    state: "NSW",
    latitude: -31.83,
    longitude: 152.61
  },
  {
    postcode: 2427,
    suburb: "Crowdy Head",
    state: "NSW",
    latitude: -31.84,
    longitude: 152.74
  },
  {
    postcode: 2427,
    suburb: "Harrington",
    state: "NSW",
    latitude: -31.84,
    longitude: 152.74
  },
  {
    postcode: 2428,
    suburb: "Blueys Beach",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Boomerang Beach",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Booti Booti",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Charlotte Bay",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Coomba Bay",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Coomba Park",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Darawank",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Elizabeth Beach",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Forster",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Forster Shopping Village",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Green Point",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Pacific Palms",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Sandbar",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Shallow Bay",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Smiths Lake",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Tarbuck Bay",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Tiona",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Tuncurry",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Wallingat",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Wallis Lake",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2428,
    suburb: "Whoota",
    state: "NSW",
    latitude: -32.35,
    longitude: 152.54
  },
  {
    postcode: 2429,
    suburb: "Bobin",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Boorganna",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Bucca Wauka",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Bulga Forest",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Bunyah",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Burrell Creek",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Caparra",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Cedar Party",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Comboyne",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Dingo Forest",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Dollys Flat",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Dyers Crossing",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Elands",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Firefly",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Innes View",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Karaak Flat",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Khatambuhl",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Killabakh",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Killawarra",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Kimbriki",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Kippaxs",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Krambach",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Kundibakh",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Marlee",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Mooral Creek",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Strathcedar",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "The Bight",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Tipperary",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Warriwillah",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Wherrol Flat",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Wingham",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2429,
    suburb: "Yarratt Forest",
    state: "NSW",
    latitude: -31.73,
    longitude: 152.28
  },
  {
    postcode: 2430,
    suburb: "Black Head",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Bohnock",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Bootawa",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Brimbin",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Cabbage Tree Island",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Chatham",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Croki",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Cundletown",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Diamond Beach",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Dumaresq Island",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Failford",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Ghinni Ghinni",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Glenthorne",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Hallidays Point",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Hillville",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Jones Island",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Kiwarrak",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Koorainghat",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Kundle Kundle",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Lansdowne",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Lansdowne Forest",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Manning Point",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Melinga",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Mitchells Island",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Mondrook",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Old Bar",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Oxley Island",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Pampoolah",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Possum Brush",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Purfleet",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Rainbow Flat",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Red Head",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Saltwater",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Tallwoods Village",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Taree",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Taree South",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Tinonee",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Upper Lansdowne",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2430,
    suburb: "Wallabi Point",
    state: "NSW",
    latitude: -32.07,
    longitude: 152.54
  },
  {
    postcode: 2431,
    suburb: "Arakoon",
    state: "NSW",
    latitude: -30.89,
    longitude: 153.07
  },
  {
    postcode: 2431,
    suburb: "Jerseyville",
    state: "NSW",
    latitude: -30.89,
    longitude: 153.07
  },
  {
    postcode: 2431,
    suburb: "South West Rocks",
    state: "NSW",
    latitude: -30.89,
    longitude: 153.07
  },
  {
    postcode: 2439,
    suburb: "Batar Creek",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Black Creek",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Kendall",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Kerewong",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Kew",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Logans Crossing",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Lorne",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Rossglen",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Swans Crossing",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2439,
    suburb: "Upsalls Creek",
    state: "NSW",
    latitude: -31.66,
    longitude: 152.68
  },
  {
    postcode: 2440,
    suburb: "Aldavilla",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Austral Eden",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Bellbrook",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Bellimbopinni",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Belmore River",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Burnt Bridge",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Carrai",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Clybucca",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Collombatti",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Comara",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Corangula",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Crescent Head",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Deep Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Dondingalong",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "East Kempsey",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Euroka",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Frederickton",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Gladstone",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Greenhill",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Hampden Hall",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Hat Head",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Hickeys Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Kempsey",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Kinchela",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Lower Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Millbank",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Mooneba",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Moparrabah",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Mungay Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Old Station",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Pola Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Rainbow Reach",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Seven Oaks",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Sherwood",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Skillion Flat",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Smithtown",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "South Kempsey",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Summer Island",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Temagog",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Toorooka",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Turners Flat",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Verges Creek",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "West Kempsey",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Willawarrin",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Willi Willi",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Wittitrin",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Yarravel",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2440,
    suburb: "Yessabah",
    state: "NSW",
    latitude: -31.06,
    longitude: 152.77
  },
  {
    postcode: 2441,
    suburb: "Allgomera",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Ballengarra",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Barraganyatti",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Bonville",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Bril Bril",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Brinerville",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Cooperabung",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Eungai Creek",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Eungai Rail",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Fishermans Reach",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Grassy Head",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Gum Scrub",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Hacks Ferry",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Kippara",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Kundabung",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Rollands Plains",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Stuarts Point",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Tamban",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Telegraph Point",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Upper Rollands Plains",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2441,
    suburb: "Yarrahapinni",
    state: "NSW",
    latitude: -30.82,
    longitude: 152.83
  },
  {
    postcode: 2442,
    suburb: "Kempsey Msc",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2442,
    suburb: "Mid North Coast Msc",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2443,
    suburb: "Bobs Creek",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Camden Head",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Coralville",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Crowdy Bay National Park",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Deauville",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Diamond Head",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Dunbogan",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Hannam Vale",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Herons Creek",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Johns River",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Lakewood",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Laurieton",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Middle Brother",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Moorland",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "North Brother",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "North Haven",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Stewarts River",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "Waitui",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2443,
    suburb: "West Haven",
    state: "NSW",
    latitude: -31.58,
    longitude: 152.74
  },
  {
    postcode: 2444,
    suburb: "Blackmans Point",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Fernbank Creek",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Flynns Beach",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Lighthouse Beach",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Limeburners Creek",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "North Shore",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Port Macquarie",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Port Macquarie BC",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Riverside",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Settlement City",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "The Hatch",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2444,
    suburb: "Thrumster",
    state: "NSW",
    latitude: -31.4,
    longitude: 152.85
  },
  {
    postcode: 2445,
    suburb: "Bonny Hills",
    state: "NSW",
    latitude: -31.59,
    longitude: 152.84
  },
  {
    postcode: 2445,
    suburb: "Grants Beach",
    state: "NSW",
    latitude: -31.59,
    longitude: 152.84
  },
  {
    postcode: 2445,
    suburb: "Jolly Nose",
    state: "NSW",
    latitude: -31.59,
    longitude: 152.84
  },
  {
    postcode: 2445,
    suburb: "Lake Cathie",
    state: "NSW",
    latitude: -31.59,
    longitude: 152.84
  },
  {
    postcode: 2446,
    suburb: "Bagnoo",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Bago",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Banda Banda",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Beechwood",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Bellangry",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Birdwood",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Brombin",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Byabarra",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Cairncross",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Crosslands",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Debenham",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Doyles River",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Ellenborough",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Forbes River",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Frazers Creek",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Gearys Flat",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Hartys Plains",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Hollisdale",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Huntingdon",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Hyndmans Creek",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Kindee",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "King Creek",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Lake Innes",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Long Flat",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Lower Pappinbarra",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Marlo Merrican",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Mortons Creek",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Mount Seaview",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Pappinbarra",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Pembrooke",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Pipeclay",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Rawdon Island",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Redbank",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Rosewood",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Sancrox",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Toms Creek",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Upper Pappinbarra",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Wauchope",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Werrikimbe",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Yarras",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2446,
    suburb: "Yippin Creek",
    state: "NSW",
    latitude: -31.46,
    longitude: 152.53
  },
  {
    postcode: 2447,
    suburb: "Bakers Creek",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Burrapine",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Congarinni",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Congarinni North",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Donnellyville",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Gumma",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Macksville",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Newee Creek",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "North Macksville",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Scotts Head",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Talarm",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Taylors Arm",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Thumb Creek",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Upper Taylors Arm",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Utungun",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Warrell Creek",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Way Way",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Wirrimbi",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2447,
    suburb: "Yarranbella",
    state: "NSW",
    latitude: -30.8,
    longitude: 152.73
  },
  {
    postcode: 2448,
    suburb: "Hyland Park",
    state: "NSW",
    latitude: -30.62,
    longitude: 153
  },
  {
    postcode: 2448,
    suburb: "Nambucca Heads",
    state: "NSW",
    latitude: -30.62,
    longitude: 153
  },
  {
    postcode: 2448,
    suburb: "Valla",
    state: "NSW",
    latitude: -30.62,
    longitude: 153
  },
  {
    postcode: 2448,
    suburb: "Valla Beach",
    state: "NSW",
    latitude: -30.62,
    longitude: 153
  },
  {
    postcode: 2449,
    suburb: "Argents Hill",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Bowraville",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Buckra Bendinni",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Girralong",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Kennaicle Creek",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Killiekrankie",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Missabotti",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "South Arm",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2449,
    suburb: "Tewinga",
    state: "NSW",
    latitude: -30.62,
    longitude: 152.75
  },
  {
    postcode: 2450,
    suburb: "Boambee",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Brooklana",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Bucca",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Coffs Harbour",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Coffs Harbour Jetty",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Coffs Harbour Plaza",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Coramba",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Glenreagh",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Karangi",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Korora",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Lowanna",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Moonee Beach",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Nana Glen",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "North Boambee Valley",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Sapphire Beach",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Sherwood",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Ulong",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2450,
    suburb: "Upper Orara",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.07
  },
  {
    postcode: 2452,
    suburb: "Boambee East",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.08
  },
  {
    postcode: 2452,
    suburb: "Sawtell",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.08
  },
  {
    postcode: 2452,
    suburb: "Toormina",
    state: "NSW",
    latitude: -30.34,
    longitude: 153.08
  },
  {
    postcode: 2453,
    suburb: "Bielsdown Hills",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Billys Creek",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Bostobrick",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Cascade",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Clouds Creek",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Deer Vale",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Dorrigo",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Dorrigo Mountain",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Dundurrabin",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Ebor",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Fernbrook",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Hernani",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Marengo",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Megan",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Moonpar",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Never Never",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "North Dorrigo",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Tallowwood Ridge",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Tyringham",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2453,
    suburb: "Wild Cattle Creek",
    state: "NSW",
    latitude: -30.14,
    longitude: 152.6
  },
  {
    postcode: 2454,
    suburb: "Bellingen",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Brierfield",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Bundagen",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Darkwood",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Fernmount",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Gleniffer",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Kalang",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Mylestom",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Raleigh",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Repton",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Spicketts Creek",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Thora",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2454,
    suburb: "Valery",
    state: "NSW",
    latitude: -30.45,
    longitude: 152.9
  },
  {
    postcode: 2455,
    suburb: "Urunga",
    state: "NSW",
    latitude: -30.52,
    longitude: 152.98
  },
  {
    postcode: 2456,
    suburb: "Arrawarra",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Arrawarra Headland",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Corindi Beach",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Emerald Beach",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Mullaway",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Red Rock",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Safety Beach",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Sandy Beach",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Upper Corindi",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2456,
    suburb: "Woolgoolga",
    state: "NSW",
    latitude: -30.06,
    longitude: 153.19
  },
  {
    postcode: 2460,
    suburb: "Alumy Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Barcoongere",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Barretts Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Baryulgil",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Blaxlands Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Bom Bom",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Bookram",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Braunstone",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Brushgrove",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Buccarumbi",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Calamia",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Cangai",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Carnham",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Carrs Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Carrs Island",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Carrs Peninsular",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Chaelundi",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Chambigne",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Clarenza",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Clifden",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Coaldale",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Collum Collum",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Coombadjha",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Copmanhurst",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Coutts Crossing",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Cowper",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Crowther Island",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Dalmorton",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Deep Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Dilkoon",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Dirty Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Dumbudgery",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Eatonsville",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Eighteen Mile",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Elland",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Fine Flower",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Fortis Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Glenugie",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Grafton",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Grafton West",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Great Marlow",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Gurranang",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Halfway Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Heifer Station",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Jackadgery",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Junction Hill",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Kangaroo Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Koolkhan",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Kremnos",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Kungala",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Kyarran",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Lanitza",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Lawrence",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Levenstrath",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Lilydale",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Lionsville",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Lower Southgate",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Malabugilmah",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Moleville Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Mountain View",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Mylneford",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Newbold",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Nymboida",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Pulganbar",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Punchbowl",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Ramornie",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Rushforth",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Sandy Crossing",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Seelands",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Shannondale",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Smiths Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "South Arm",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "South Grafton",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Southampton",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Southgate",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Stockyard Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "The Pinnacles",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "The Whiteman",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Towallum",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Trenayr",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Tyndale",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Upper Copmanhurst",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Upper Fine Flower",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Warragai Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Washpool",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Waterview",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Waterview Heights",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Wells Crossing",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Whiteman Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Winegrove",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2460,
    suburb: "Wombat Creek",
    state: "NSW",
    latitude: -29.05,
    longitude: 152.59
  },
  {
    postcode: 2462,
    suburb: "Calliope",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Coldstream",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Diggers Camp",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Gilletts Ridge",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Lake Hiawatha",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Lavadia",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Minnie Water",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Pillar Valley",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Swan Creek",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Tucabia",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Ulmarra",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2462,
    suburb: "Wooli",
    state: "NSW",
    latitude: -29.62,
    longitude: 153.07
  },
  {
    postcode: 2463,
    suburb: "Ashby",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Ashby Heights",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Ashby Island",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Brooms Head",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Gulmarrad",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Ilarwill",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Jacky Bulbin Flat",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "James Creek",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Maclean",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Palmers Channel",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Palmers Island",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Sandon",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Shark Creek",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Taloumbi",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "The Sandon",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Townsend",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Tullymorgan",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2463,
    suburb: "Woodford Island",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.19
  },
  {
    postcode: 2464,
    suburb: "Angourie",
    state: "NSW",
    latitude: -29.48,
    longitude: 153.36
  },
  {
    postcode: 2464,
    suburb: "Freeburn Island",
    state: "NSW",
    latitude: -29.48,
    longitude: 153.36
  },
  {
    postcode: 2464,
    suburb: "Micalo Island",
    state: "NSW",
    latitude: -29.48,
    longitude: 153.36
  },
  {
    postcode: 2464,
    suburb: "Wooloweyah",
    state: "NSW",
    latitude: -29.48,
    longitude: 153.36
  },
  {
    postcode: 2464,
    suburb: "Yamba",
    state: "NSW",
    latitude: -29.48,
    longitude: 153.36
  },
  {
    postcode: 2464,
    suburb: "Yuraygir",
    state: "NSW",
    latitude: -29.48,
    longitude: 153.36
  },
  {
    postcode: 2465,
    suburb: "Harwood",
    state: "NSW",
    latitude: -29.42,
    longitude: 153.24
  },
  {
    postcode: 2466,
    suburb: "Iluka",
    state: "NSW",
    latitude: -29.41,
    longitude: 153.35
  },
  {
    postcode: 2466,
    suburb: "The Freshwater",
    state: "NSW",
    latitude: -29.41,
    longitude: 153.35
  },
  {
    postcode: 2466,
    suburb: "Woody Head",
    state: "NSW",
    latitude: -29.41,
    longitude: 153.35
  },
  {
    postcode: 2469,
    suburb: "Alice",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Banyabba",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Bean Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Bingeebeebra Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Bonalbo",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Bottle Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Bulldog",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Bungawalbin",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Busbys Flat",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Cambridge Plateau",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Camira",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Capeen Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Chatsworth",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Clearfield",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Coongbar",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Culmaran Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Deep Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Drake",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Drake Village",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Duck Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Ewingar",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Gibberagee",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Goodwood Island",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Gorge Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Haystack",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Hogarth Range",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Jacksons Flat",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Joes Box",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Keybarbin",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Kippenduff",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Louisa Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Lower Bottle Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Lower Duck Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Lower Peacock",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Mallanganee",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Mookima Wybra",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Mororo",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Mount Marsh",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Mummulgum",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Myrtle Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Old Bonalbo",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Paddys Flat",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Pagans Flat",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Peacock Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Pikapene",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Rappville",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Sandilands",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Simpkins Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Six Mile Swamp",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Tabulam",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Theresa Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Tunglebung",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Upper Duck Creek",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Warregah Island",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Whiporie",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Woombah",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Wyan",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2469,
    suburb: "Yabbra",
    state: "NSW",
    latitude: -29.34,
    longitude: 153
  },
  {
    postcode: 2470,
    suburb: "Babyl Creek",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Backmede",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Casino",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Coombell",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Dobies Bight",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Doubtful Creek",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Dyraaba",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Ellangowan",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Fairy Hill",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Irvington",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Leeville",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Lower Dyraaba",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Mongogarie",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Naughtons Gap",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "North Casino",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Piora",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Sextonville",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Shannon Brook",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Spring Grove",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Stratheden",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Upper Mongogarie",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Woodview",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Woolners Arm",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2470,
    suburb: "Yorklea",
    state: "NSW",
    latitude: -28.73,
    longitude: 152.8
  },
  {
    postcode: 2471,
    suburb: "Bora Ridge",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "Codrington",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "Coraki",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "East Coraki",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "Green Forest",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "Greenridge",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "North Woodburn",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "Swan Bay",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "Tatham",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2471,
    suburb: "West Coraki",
    state: "NSW",
    latitude: -29.05,
    longitude: 153.23
  },
  {
    postcode: 2472,
    suburb: "Broadwater",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Buckendoon",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Esk",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Kilgin",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Moonem",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "New Italy",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Rileys Hill",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Tabbimoble",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "The Gap",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Trustums Hill",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2472,
    suburb: "Woodburn",
    state: "NSW",
    latitude: -29.01,
    longitude: 153.44
  },
  {
    postcode: 2473,
    suburb: "Bundjalung",
    state: "NSW",
    latitude: -29.09,
    longitude: 153.38
  },
  {
    postcode: 2473,
    suburb: "Doonbah",
    state: "NSW",
    latitude: -29.09,
    longitude: 153.38
  },
  {
    postcode: 2473,
    suburb: "Evans Head",
    state: "NSW",
    latitude: -29.09,
    longitude: 153.38
  },
  {
    postcode: 2473,
    suburb: "Iron Gates",
    state: "NSW",
    latitude: -29.09,
    longitude: 153.38
  },
  {
    postcode: 2473,
    suburb: "South Evans Head",
    state: "NSW",
    latitude: -29.09,
    longitude: 153.38
  },
  {
    postcode: 2474,
    suburb: "Afterlee",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Barkers Vale",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Border Ranges",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Cawongla",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Cedar Point",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Collins Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Cougal",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Dairy Flat",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Eden Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Edenville",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Ettrick",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Fawcetts Plain",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Findon Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Geneva",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Ghinni Ghi",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Gradys Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Green Pigeon",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Grevillia",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Homeleigh",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Horse Station Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Horseshoe Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Iron Pot Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Kilgra",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Kyogle",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Little Back Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Loadstone",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Lynchs Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "New Park",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Old Grevillia",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Roseberry",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Roseberry Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Rukenvale",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Sawpit Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Sherwood",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Smiths Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Terrace Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "The Risk",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Toonumbar",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Unumgar",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Upper Eden Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Upper Horseshoe Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Wadeville",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Warrazambil Creek",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "West Wiangaree",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Wiangaree",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2474,
    suburb: "Wyneden",
    state: "NSW",
    latitude: -28.59,
    longitude: 152.83
  },
  {
    postcode: 2475,
    suburb: "Tooloom",
    state: "NSW",
    latitude: -28.62,
    longitude: 152.42
  },
  {
    postcode: 2475,
    suburb: "Upper Tooloom",
    state: "NSW",
    latitude: -28.62,
    longitude: 152.42
  },
  {
    postcode: 2475,
    suburb: "Urbenville",
    state: "NSW",
    latitude: -28.62,
    longitude: 152.42
  },
  {
    postcode: 2476,
    suburb: "Boomi Creek",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Brumby Plains",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Koreelah",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Legume",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Lindesay Creek",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Muli Muli",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Old Koreelah",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "The Glen",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2476,
    suburb: "Woodenbong",
    state: "NSW",
    latitude: -28.37,
    longitude: 152.32
  },
  {
    postcode: 2477,
    suburb: "Alstonvale",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Alstonville",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Bagotville",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Cabbage Tree Island",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Dalwood",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "East Wardell",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Goat Island",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Lynwood",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Meerschaum Vale",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Pearces Creek",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Rous",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Rous Mill",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Tuckombil",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Uralba",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Wardell",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2477,
    suburb: "Wollongbar",
    state: "NSW",
    latitude: -28.81,
    longitude: 153.45
  },
  {
    postcode: 2478,
    suburb: "Ballina",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Coolgardie",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Cumbalum",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "East Ballina",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Empire Vale",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Keith Hall",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Lennox Head",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Patchs Beach",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Pimlico",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Pimlico Island",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Skennars Head",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "South Ballina",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Teven",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "Tintenbar",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2478,
    suburb: "West Ballina",
    state: "NSW",
    latitude: -28.87,
    longitude: 153.56
  },
  {
    postcode: 2479,
    suburb: "Bangalow",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Binna Burra",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Brooklet",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Coopers Shoot",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Coorabell",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Fernleigh",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Knockrow",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Mcleods Shoot",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Nashua",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Newrybar",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2479,
    suburb: "Possum Creek",
    state: "NSW",
    latitude: -28.69,
    longitude: 153.52
  },
  {
    postcode: 2480,
    suburb: "Bentley",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Bexhill",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Blakebrook",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Blue Knob",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Boat Harbour",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Booerie Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Boorabee Park",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Booyong",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Bungabbee",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Caniaba",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Chilcotts Grass",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Clovass",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Clunes",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Coffee Camp",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Corndale",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Dorroughby",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Dungarubba",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Dunoon",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "East Lismore",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Eltham",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Eureka",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Federal",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Fernside",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Georgica",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Girards Hill",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Goolmangar",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Goonellabah",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Howards Grass",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Jiggi",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Keerrong",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Koonorigan",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Lagoon Grass",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Larnook",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Leycester",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Lillian Rock",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Lindendale",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Lismore",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Lismore Heights",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Loftville",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Marom Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Mckees Hill",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Mcleans Ridges",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Modanville",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Monaltrie",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Mountain Top",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Nightcap",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Nimbin",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "North Lismore",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Numulgi",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Repentance Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Richmond Hill",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Rock Valley",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Rosebank",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Ruthven",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "South Gundurimba",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "South Lismore",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Stony Chute",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Terania Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "The Channon",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Tregeagle",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Tucki Tucki",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Tuckurimba",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Tullera",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Tuncester",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Tuntable Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Whian Whian",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Woodlawn",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2480,
    suburb: "Wyrallah",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.04
  },
  {
    postcode: 2481,
    suburb: "Broken Head",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Byron Bay",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Ewingsdale",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Hayters Hill",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Myocum",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Skinners Shoot",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Suffolk Park",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Talofa",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2481,
    suburb: "Tyagarah",
    state: "NSW",
    latitude: -28.72,
    longitude: 153.59
  },
  {
    postcode: 2482,
    suburb: "Goonengerry",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Huonbrook",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Koonyum Range",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Main Arm",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Montecollum",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Mullumbimby",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Mullumbimby Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Palmwoods",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Upper Coopers Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Upper Main Arm",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Upper Wilsons Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Wanganui",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2482,
    suburb: "Wilsons Creek",
    state: "NSW",
    latitude: -28.61,
    longitude: 153.44
  },
  {
    postcode: 2483,
    suburb: "Billinudgel",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Brunswick Heads",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Burringbar",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Crabbes Creek",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Middle Pocket",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Mooball",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "New Brighton",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Ocean Shores",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Sleepy Hollow",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "South Golden Beach",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "The Pocket",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Upper Burringbar",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Wooyung",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2483,
    suburb: "Yelgun",
    state: "NSW",
    latitude: -28.5,
    longitude: 153.53
  },
  {
    postcode: 2484,
    suburb: "Back Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Bray Park",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Brays Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Byangum",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Byrrill Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Cedar Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Chillingham",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Chowan Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Clothiers Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Commissioners Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Condong",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Crystal Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Cudgera Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Doon Doon",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Dulguigan",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Dum Dum",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Dunbible",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Dungay",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Eungella",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Eviron",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Farrants Hill",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Fernvale",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Hopkins Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Kielvale",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Kunghur",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Kunghur Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Kynnumboon",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Limpinwood",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Mebbin",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Midginbil",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Mount Burrell",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Mount Warning",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Murwillumbah",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Murwillumbah South",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Nobbys Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "North Arm",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Numinbah",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Nunderi",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Palmvale",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Pumpenbil",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Reserve Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Round Mountain",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Rowlands Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Smiths Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "South Murwillumbah",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Stokers Siding",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Terragon",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Tomewin",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Tyalgum",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Tyalgum Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Tygalgah",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Uki",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Upper Crystal Creek",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Urliup",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Wardrop Valley",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2484,
    suburb: "Zara",
    state: "NSW",
    latitude: -28.4,
    longitude: 153.17
  },
  {
    postcode: 2485,
    suburb: "Tweed Heads",
    state: "NSW",
    latitude: -28.18,
    longitude: 153.54
  },
  {
    postcode: 2485,
    suburb: "Tweed Heads West",
    state: "NSW",
    latitude: -28.18,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Banora Point",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Bilambil",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Bilambil Heights",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Bungalora",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Carool",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Cobaki",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Cobaki Lakes",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Duroby",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Glengarrie",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Piggabeen",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Terranora",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Tweed Heads South",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2486,
    suburb: "Upper Duroby",
    state: "NSW",
    latitude: -28.21,
    longitude: 153.54
  },
  {
    postcode: 2487,
    suburb: "Casuarina",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Chinderah",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Cudgen",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Duranbah",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Fingal Head",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Kings Forest",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Kingscliff",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2487,
    suburb: "Stotts Creek",
    state: "NSW",
    latitude: -28.3,
    longitude: 153.57
  },
  {
    postcode: 2488,
    suburb: "Bogangar",
    state: "NSW",
    latitude: -28.33,
    longitude: 153.54
  },
  {
    postcode: 2488,
    suburb: "Cabarita Beach",
    state: "NSW",
    latitude: -28.33,
    longitude: 153.54
  },
  {
    postcode: 2488,
    suburb: "Tanglewood",
    state: "NSW",
    latitude: -28.33,
    longitude: 153.54
  },
  {
    postcode: 2489,
    suburb: "Hastings Point",
    state: "NSW",
    latitude: -28.36,
    longitude: 153.58
  },
  {
    postcode: 2489,
    suburb: "Pottsville",
    state: "NSW",
    latitude: -28.36,
    longitude: 153.58
  },
  {
    postcode: 2489,
    suburb: "Pottsville Beach",
    state: "NSW",
    latitude: -28.36,
    longitude: 153.58
  },
  {
    postcode: 2490,
    suburb: "North Tumbulgum",
    state: "NSW",
    latitude: -28.27,
    longitude: 153.47
  },
  {
    postcode: 2490,
    suburb: "Tumbulgum",
    state: "NSW",
    latitude: -28.27,
    longitude: 153.47
  },
  {
    postcode: 2500,
    suburb: "Coniston",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Gwynneville",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Keiraville",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Mangerton",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Mount Keira",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Mount Saint Thomas",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "North Wollongong",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Spring Hill",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "West Wollongong",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Wollongong",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Wollongong DC",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2500,
    suburb: "Wollongong West",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.89
  },
  {
    postcode: 2502,
    suburb: "Cringila",
    state: "NSW",
    latitude: -34.47,
    longitude: 150.87
  },
  {
    postcode: 2502,
    suburb: "Lake Heights",
    state: "NSW",
    latitude: -34.47,
    longitude: 150.87
  },
  {
    postcode: 2502,
    suburb: "Primbee",
    state: "NSW",
    latitude: -34.47,
    longitude: 150.87
  },
  {
    postcode: 2502,
    suburb: "Warrawong",
    state: "NSW",
    latitude: -34.47,
    longitude: 150.87
  },
  {
    postcode: 2505,
    suburb: "Port Kembla",
    state: "NSW",
    latitude: -34.49,
    longitude: 150.89
  },
  {
    postcode: 2506,
    suburb: "Berkeley",
    state: "NSW",
    latitude: -34.48,
    longitude: 150.84
  },
  {
    postcode: 2508,
    suburb: "Coalcliff",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Darkes Forest",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Helensburgh",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Lilyvale",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Maddens Plains",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Otford",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Stanwell Park",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Stanwell Tops",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2508,
    suburb: "Woronora Dam",
    state: "NSW",
    latitude: -34.24,
    longitude: 150.98
  },
  {
    postcode: 2515,
    suburb: "Austinmer",
    state: "NSW",
    latitude: -34.31,
    longitude: 150.93
  },
  {
    postcode: 2515,
    suburb: "Clifton",
    state: "NSW",
    latitude: -34.31,
    longitude: 150.93
  },
  {
    postcode: 2515,
    suburb: "Coledale",
    state: "NSW",
    latitude: -34.31,
    longitude: 150.93
  },
  {
    postcode: 2515,
    suburb: "Scarborough",
    state: "NSW",
    latitude: -34.31,
    longitude: 150.93
  },
  {
    postcode: 2515,
    suburb: "Thirroul",
    state: "NSW",
    latitude: -34.31,
    longitude: 150.93
  },
  {
    postcode: 2515,
    suburb: "Wombarra",
    state: "NSW",
    latitude: -34.31,
    longitude: 150.93
  },
  {
    postcode: 2516,
    suburb: "Bulli",
    state: "NSW",
    latitude: -34.33,
    longitude: 150.91
  },
  {
    postcode: 2517,
    suburb: "Russell Vale",
    state: "NSW",
    latitude: -34.36,
    longitude: 150.9
  },
  {
    postcode: 2517,
    suburb: "Woonona",
    state: "NSW",
    latitude: -34.36,
    longitude: 150.9
  },
  {
    postcode: 2517,
    suburb: "Woonona East",
    state: "NSW",
    latitude: -34.36,
    longitude: 150.9
  },
  {
    postcode: 2518,
    suburb: "Bellambi",
    state: "NSW",
    latitude: -34.37,
    longitude: 150.91
  },
  {
    postcode: 2518,
    suburb: "Corrimal",
    state: "NSW",
    latitude: -34.37,
    longitude: 150.91
  },
  {
    postcode: 2518,
    suburb: "Corrimal East",
    state: "NSW",
    latitude: -34.37,
    longitude: 150.91
  },
  {
    postcode: 2518,
    suburb: "East Corrimal",
    state: "NSW",
    latitude: -34.37,
    longitude: 150.91
  },
  {
    postcode: 2518,
    suburb: "Tarrawanna",
    state: "NSW",
    latitude: -34.37,
    longitude: 150.91
  },
  {
    postcode: 2518,
    suburb: "Towradgi",
    state: "NSW",
    latitude: -34.37,
    longitude: 150.91
  },
  {
    postcode: 2519,
    suburb: "Balgownie",
    state: "NSW",
    latitude: -34.39,
    longitude: 150.88
  },
  {
    postcode: 2519,
    suburb: "Fairy Meadow",
    state: "NSW",
    latitude: -34.39,
    longitude: 150.88
  },
  {
    postcode: 2519,
    suburb: "Fernhill",
    state: "NSW",
    latitude: -34.39,
    longitude: 150.88
  },
  {
    postcode: 2519,
    suburb: "Mount Ousley",
    state: "NSW",
    latitude: -34.39,
    longitude: 150.88
  },
  {
    postcode: 2519,
    suburb: "Mount Pleasant",
    state: "NSW",
    latitude: -34.39,
    longitude: 150.88
  },
  {
    postcode: 2520,
    suburb: "Wollongong",
    state: "NSW",
    latitude: -33.94,
    longitude: 151.14
  },
  {
    postcode: 2522,
    suburb: "University Of Wollongong",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.88
  },
  {
    postcode: 2525,
    suburb: "Figtree",
    state: "NSW",
    latitude: -34.44,
    longitude: 150.86
  },
  {
    postcode: 2526,
    suburb: "Cordeaux",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Cordeaux Heights",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Dombarton",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Farmborough Heights",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Kembla Grange",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Kembla Heights",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Mount Kembla",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Unanderra",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2526,
    suburb: "Unanderra DC",
    state: "NSW",
    latitude: -34.38,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Albion Park",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Albion Park Rail",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Calderwood",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Croom",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "North Macquarie",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Tongarra",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Tullimbar",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2527,
    suburb: "Yellow Rock",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.78
  },
  {
    postcode: 2528,
    suburb: "Barrack Heights",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.86
  },
  {
    postcode: 2528,
    suburb: "Barrack Point",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.86
  },
  {
    postcode: 2528,
    suburb: "Lake Illawarra",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.86
  },
  {
    postcode: 2528,
    suburb: "Mount Warrigal",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.86
  },
  {
    postcode: 2528,
    suburb: "Warilla",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.86
  },
  {
    postcode: 2528,
    suburb: "Windang",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.86
  },
  {
    postcode: 2529,
    suburb: "Blackbutt",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Dunmore",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Flinders",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Oak Flats",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Oak Flats DC",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Shell Cove",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Shellharbour",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2529,
    suburb: "Shellharbour City Centre",
    state: "NSW",
    latitude: -34.57,
    longitude: 150.83
  },
  {
    postcode: 2530,
    suburb: "Avondale",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Brownsville",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Cleveland",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Dapto",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Haywards Bay",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Horsley",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Huntley",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Kanahooka",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Koonawarra",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Marshall Mount",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Penrose",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Wongawilli",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2530,
    suburb: "Yallah",
    state: "NSW",
    latitude: -34.51,
    longitude: 150.73
  },
  {
    postcode: 2533,
    suburb: "Bombo",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Curramore",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Jamberoo",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Jerrara",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Kiama",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Kiama Downs",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Kiama Heights",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Minnamurra",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2533,
    suburb: "Saddleback Mountain",
    state: "NSW",
    latitude: -34.66,
    longitude: 150.85
  },
  {
    postcode: 2534,
    suburb: "Broughton Village",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Foxground",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Gerringong",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Gerroa",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Rose Valley",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Toolijooa",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Werri Beach",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2534,
    suburb: "Willow Vale",
    state: "NSW",
    latitude: -34.73,
    longitude: 150.77
  },
  {
    postcode: 2535,
    suburb: "Back Forest",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Bellawongarah",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Berry",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Berry Mountain",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Brogers Creek",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Broughton",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Broughton Vale",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Budderoo",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Bundewallah",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Coolangatta",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Far Meadow",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Jaspers Brush",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Shoalhaven Heads",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Wattamolla",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2535,
    suburb: "Woodhill",
    state: "NSW",
    latitude: -34.85,
    longitude: 150.68
  },
  {
    postcode: 2536,
    suburb: "Batehaven",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Batemans Bay",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Benandarah",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Bimbimbie",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Buckenbowra",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Catalina",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Currowan",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Denhams Beach",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Depot Beach",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Durras North",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "East Lynne",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Guerilla Bay",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Jeremadra",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Lilli Pilli",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Long Beach",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Maloneys Beach",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Malua Bay",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Mogo",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Nelligen",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "North Batemans Bay",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Pebbly Beach",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Rosedale",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Runnyford",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "South Durras",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Sunshine Bay",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Surf Beach",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Surfside",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2536,
    suburb: "Woodlands",
    state: "NSW",
    latitude: -35.73,
    longitude: 150.2
  },
  {
    postcode: 2537,
    suburb: "Bergalia",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Bingie",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Broulee",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Coila",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Congo",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Deua",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Deua River Valley",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Kiora",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Meringo",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Mogendoura",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Moruya",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Moruya Heads",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Mossy Point",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Tomakin",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Turlinjah",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Tuross Head",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2537,
    suburb: "Wamban",
    state: "NSW",
    latitude: -35.98,
    longitude: 150.11
  },
  {
    postcode: 2538,
    suburb: "Brooman",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Little Forest",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Milton",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Mogood",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Morton",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Porters Creek",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Woodburn",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2538,
    suburb: "Woodstock",
    state: "NSW",
    latitude: -35.49,
    longitude: 150.23
  },
  {
    postcode: 2539,
    suburb: "Bawley Point",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Bendalong",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Berringer Lake",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Burrill Lake",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Cockwhy",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Conjola",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Conjola Park",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Croobyar",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Cunjurong Point",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Dolphin Point",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Fishermans Paradise",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Kings Point",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Kioloa",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Lake Conjola",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Lake Tabourie",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Manyana",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Mollymook",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Mollymook Beach",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Mount Kingiman",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Narrawallee",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Pointer Mountain",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Pretty Beach",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Termeil",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Ulladulla",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Yadboro",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2539,
    suburb: "Yatte Yattah",
    state: "NSW",
    latitude: -35.52,
    longitude: 150.39
  },
  {
    postcode: 2540,
    suburb: "Bamarang",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Barringella",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Basin View",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Beecroft Peninsula",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Berrara",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Bewong",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Bolong",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Boolijah",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Bream Beach",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Browns Mountain",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Brundee",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Buangla",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Burrier",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Callala Bay",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Callala Beach",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Cambewarra",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Cambewarra Village",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Comberton",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Comerong Island",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Cudmirrah",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Culburra Beach",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Currarong",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Erowal Bay",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Ettrema",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Falls Creek",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Greenwell Point",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Hmas Albatross",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Hmas Creswell",
    state: "ACT",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Huskisson",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Hyams Beach",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Illaroo",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Jerrawangala",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Jervis Bay",
    state: "ACT",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Kinghorne",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Longreach",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Mayfield",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Meroo Meadow",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Mondayong",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Moollattoo",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Mundamia",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Myola",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Nowra Hill",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Nowra Naval Po",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Numbaa",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Old Erowal Bay",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Orient Point",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Parma",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Pyree",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Sanctuary Point",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "St Georges Basin",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Sussex Inlet",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Swanhaven",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Tallowal",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Tapitallee",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Terara",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Tomerong",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Tullarwalla",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Twelve Mile Peg",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Vincentia",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Wandandian",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Watersleigh",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Wollumboola",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Woollamia",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Worrigee",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Worrowing Heights",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Wrights Beach",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Yalwal",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2540,
    suburb: "Yerriyong",
    state: "NSW",
    latitude: -34.89,
    longitude: 150.53
  },
  {
    postcode: 2541,
    suburb: "Bangalee",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "Bomaderry",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "North Nowra",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "Nowra",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "Nowra DC",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "Nowra East",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "Nowra North",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "South Nowra",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2541,
    suburb: "West Nowra",
    state: "NSW",
    latitude: -34.84,
    longitude: 150.57
  },
  {
    postcode: 2545,
    suburb: "Belowra",
    state: "NSW",
    latitude: -36.15,
    longitude: 149.71
  },
  {
    postcode: 2545,
    suburb: "Bodalla",
    state: "NSW",
    latitude: -36.15,
    longitude: 149.71
  },
  {
    postcode: 2545,
    suburb: "Cadgee",
    state: "NSW",
    latitude: -36.15,
    longitude: 149.71
  },
  {
    postcode: 2545,
    suburb: "Eurobodalla",
    state: "NSW",
    latitude: -36.15,
    longitude: 149.71
  },
  {
    postcode: 2545,
    suburb: "Nerrigundah",
    state: "NSW",
    latitude: -36.15,
    longitude: 149.71
  },
  {
    postcode: 2545,
    suburb: "Potato Point",
    state: "NSW",
    latitude: -36.15,
    longitude: 149.71
  },
  {
    postcode: 2546,
    suburb: "Akolele",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Barragga Bay",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Bermagui",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Central Tilba",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Corunna",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Cuttagee",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Dalmeny",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Dignams Creek",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Kianga",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Murrah",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Mystery Bay",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Narooma",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "North Narooma",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Tilba Tilba",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Tinpot",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Wadbilliga",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2546,
    suburb: "Wallaga Lake",
    state: "NSW",
    latitude: -36.36,
    longitude: 150.08
  },
  {
    postcode: 2548,
    suburb: "Berrambool",
    state: "NSW",
    latitude: -36.88,
    longitude: 149.92
  },
  {
    postcode: 2548,
    suburb: "Bournda",
    state: "NSW",
    latitude: -36.88,
    longitude: 149.92
  },
  {
    postcode: 2548,
    suburb: "Merimbula",
    state: "NSW",
    latitude: -36.88,
    longitude: 149.92
  },
  {
    postcode: 2548,
    suburb: "Mirador",
    state: "NSW",
    latitude: -36.88,
    longitude: 149.92
  },
  {
    postcode: 2548,
    suburb: "Tura Beach",
    state: "NSW",
    latitude: -36.88,
    longitude: 149.92
  },
  {
    postcode: 2548,
    suburb: "Yellow Pinch",
    state: "NSW",
    latitude: -36.88,
    longitude: 149.92
  },
  {
    postcode: 2549,
    suburb: "Bald Hills",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Broadwater",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Greigs Flat",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Lochiel",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Millingandi",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Nethercote",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Pambula",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "Pambula Beach",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2549,
    suburb: "South Pambula",
    state: "NSW",
    latitude: -36.91,
    longitude: 149.85
  },
  {
    postcode: 2550,
    suburb: "Angledale",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Bega",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Bemboka",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Black Range",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Brogo",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Buckajo",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Burragate",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Candelo",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Chinnock",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Cobargo",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Coolagolite",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Coolangubra",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Coopers Gully",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Devils Hole",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Doctor George Mountain",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Frogs Hollow",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Greendale",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Jellat Jellat",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Kalaru",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Kameruka",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Kanoona",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Kingswood",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Mogareeka",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Mogilla",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Morans Crossing",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Mumbulla Mountain",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Myrtle Mountain",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Nelson",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "New Buildings",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Numbugga",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Pericoe",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Quaama",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Reedy Swamp",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Rocky Hall",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "South Wolumla",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Stony Creek",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Tanja",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Tantawangalo",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Tarraganda",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Tathra",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Toothdale",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Towamba",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Verona",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Wallagoot",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Wandella",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Wapengo",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Wog Wog",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Wolumla",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Wyndham",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Yambulla",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Yankees Creek",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2550,
    suburb: "Yowrie",
    state: "NSW",
    latitude: -36.64,
    longitude: 149.86
  },
  {
    postcode: 2551,
    suburb: "Boydtown",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Eden",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Edrom",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Green Cape",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Kiah",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Nadgee",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Narrabarba",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Nullica",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Nungatta",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Nungatta South",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Timbillica",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Wonboyn",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Wonboyn Lake",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2551,
    suburb: "Wonboyn North",
    state: "NSW",
    latitude: -37.1,
    longitude: 149.88
  },
  {
    postcode: 2555,
    suburb: "Badgerys Creek",
    state: "NSW",
    latitude: -33.88,
    longitude: 150.74
  },
  {
    postcode: 2556,
    suburb: "Bringelly",
    state: "NSW",
    latitude: -33.95,
    longitude: 150.73
  },
  {
    postcode: 2557,
    suburb: "Catherine Field",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.77
  },
  {
    postcode: 2557,
    suburb: "Gregory Hills",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.77
  },
  {
    postcode: 2557,
    suburb: "Rossmore",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.77
  },
  {
    postcode: 2558,
    suburb: "Eagle Vale",
    state: "NSW",
    latitude: -34.04,
    longitude: 150.81
  },
  {
    postcode: 2558,
    suburb: "Eschol Park",
    state: "NSW",
    latitude: -34.04,
    longitude: 150.81
  },
  {
    postcode: 2558,
    suburb: "Kearns",
    state: "NSW",
    latitude: -34.04,
    longitude: 150.81
  },
  {
    postcode: 2559,
    suburb: "Blairmount",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.8
  },
  {
    postcode: 2559,
    suburb: "Claymore",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.8
  },
  {
    postcode: 2560,
    suburb: "Airds",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Ambarvale",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Appin",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Blair Athol",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Bradbury",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Campbelltown",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Campbelltown North",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Cataract",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Englorie Park",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Gilead",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Glen Alpine",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Kentlyn",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Leumeah",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Macarthur Square",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Rosemeadow",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Ruse",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "St Helens Park",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Wedderburn",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2560,
    suburb: "Woodbine",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.83
  },
  {
    postcode: 2563,
    suburb: "Menangle Park",
    state: "NSW",
    latitude: -34.1,
    longitude: 150.76
  },
  {
    postcode: 2564,
    suburb: "Glenquarie",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.89
  },
  {
    postcode: 2564,
    suburb: "Long Point",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.89
  },
  {
    postcode: 2564,
    suburb: "Macquarie Fields",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.89
  },
  {
    postcode: 2565,
    suburb: "Bardia",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.84
  },
  {
    postcode: 2565,
    suburb: "Denham Court",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.84
  },
  {
    postcode: 2565,
    suburb: "Ingleburn",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.84
  },
  {
    postcode: 2565,
    suburb: "Macquarie Links",
    state: "NSW",
    latitude: -33.99,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "Bow Bowing",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "Minto",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "Minto DC",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "Minto Heights",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "Raby",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "St Andrews",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2566,
    suburb: "Varroville",
    state: "NSW",
    latitude: -34.02,
    longitude: 150.84
  },
  {
    postcode: 2567,
    suburb: "Currans Hill",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2567,
    suburb: "Harrington Park",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2567,
    suburb: "Mount Annan",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2567,
    suburb: "Narellan",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2567,
    suburb: "Narellan DC",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2567,
    suburb: "Narellan Vale",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2567,
    suburb: "Smeaton Grange",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.76
  },
  {
    postcode: 2568,
    suburb: "Menangle",
    state: "NSW",
    latitude: -34.11,
    longitude: 150.75
  },
  {
    postcode: 2569,
    suburb: "Douglas Park",
    state: "NSW",
    latitude: -34.19,
    longitude: 150.71
  },
  {
    postcode: 2570,
    suburb: "Belimbla Park",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Bickley Vale",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Brownlow Hill",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Camden",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Camden Park",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Camden South",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Cawdor",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Cobbitty",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Elderslie",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Ellis Lane",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Glenmore",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Grasmere",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Kirkham",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Mount Hunter",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Nattai",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Oakdale",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Oran Park",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Orangeville",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Spring Farm",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "The Oaks",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Theresa Park",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2570,
    suburb: "Werombi",
    state: "NSW",
    latitude: -34.08,
    longitude: 150.54
  },
  {
    postcode: 2571,
    suburb: "Balmoral",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Buxton",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Couridjah",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Maldon",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Mowbray Park",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Picton",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Razorback",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2571,
    suburb: "Wilton",
    state: "NSW",
    latitude: -34.29,
    longitude: 150.53
  },
  {
    postcode: 2572,
    suburb: "Lakesland",
    state: "NSW",
    latitude: -34.18,
    longitude: 150.53
  },
  {
    postcode: 2572,
    suburb: "Thirlmere",
    state: "NSW",
    latitude: -34.18,
    longitude: 150.53
  },
  {
    postcode: 2573,
    suburb: "Tahmoor",
    state: "NSW",
    latitude: -34.22,
    longitude: 150.59
  },
  {
    postcode: 2574,
    suburb: "Avon",
    state: "NSW",
    latitude: -34.35,
    longitude: 150.63
  },
  {
    postcode: 2574,
    suburb: "Bargo",
    state: "NSW",
    latitude: -34.35,
    longitude: 150.63
  },
  {
    postcode: 2574,
    suburb: "Pheasants Nest",
    state: "NSW",
    latitude: -34.35,
    longitude: 150.63
  },
  {
    postcode: 2574,
    suburb: "Yanderra",
    state: "NSW",
    latitude: -34.35,
    longitude: 150.63
  },
  {
    postcode: 2575,
    suburb: "Alpine",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Aylmerton",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Braemar",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Bullio",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Colo Vale",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "High Range",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Hill Top",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Joadja",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Mittagong",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Mount Lindsey",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Wattle Ridge",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Welby",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Willow Vale",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Woodlands",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2575,
    suburb: "Yerrinbool",
    state: "NSW",
    latitude: -34.41,
    longitude: 150.52
  },
  {
    postcode: 2576,
    suburb: "Bowral",
    state: "NSW",
    latitude: -34.54,
    longitude: 150.39
  },
  {
    postcode: 2576,
    suburb: "Burradoo",
    state: "NSW",
    latitude: -34.54,
    longitude: 150.39
  },
  {
    postcode: 2576,
    suburb: "East Bowral",
    state: "NSW",
    latitude: -34.54,
    longitude: 150.39
  },
  {
    postcode: 2576,
    suburb: "East Kangaloon",
    state: "NSW",
    latitude: -34.54,
    longitude: 150.39
  },
  {
    postcode: 2576,
    suburb: "Glenquarry",
    state: "NSW",
    latitude: -34.54,
    longitude: 150.39
  },
  {
    postcode: 2576,
    suburb: "Kangaloon",
    state: "NSW",
    latitude: -34.54,
    longitude: 150.39
  },
  {
    postcode: 2577,
    suburb: "Avoca",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Bangadilly",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Barren Grounds",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Barrengarry",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Beaumont",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Belanglo",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Berrima",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Budgong",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Burrawang",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Canyonleigh",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Carrington Falls",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Fitzroy Falls",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Hanging Rock",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Kangaroo Valley",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Knights Hill",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Macquarie Pass",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Manchester Square",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Medway",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Meryla",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Moss Vale",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Mount Murray",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "New Berrima",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Paddys River",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Red Rocks",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Robertson",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Sutton Forest",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Upper Kangaroo River",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Upper Kangaroo Valley",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Werai",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2577,
    suburb: "Wildes Meadow",
    state: "NSW",
    latitude: -34.61,
    longitude: 150.48
  },
  {
    postcode: 2578,
    suburb: "Bundanoon",
    state: "NSW",
    latitude: -34.63,
    longitude: 150.32
  },
  {
    postcode: 2579,
    suburb: "Big Hill",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2579,
    suburb: "Brayton",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2579,
    suburb: "Exeter",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2579,
    suburb: "Marulan",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2579,
    suburb: "Penrose",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2579,
    suburb: "Tallong",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2579,
    suburb: "Wingello",
    state: "NSW",
    latitude: -34.56,
    longitude: 149.99
  },
  {
    postcode: 2580,
    suburb: "Bannaby",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Bannister",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Baw Baw",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Boxers Creek",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Brisbane Grove",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Bungonia",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Carrick",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Chatsbury",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Currawang",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Curraweela",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Golspie",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Goulburn",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Goulburn DC",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Goulburn North",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Greenwich Park",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Gundary",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Jerrong",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Kingsdale",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Lake Bathurst",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Lower Boro",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Mayfield",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Middle Arm",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Mount Fairy",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Mummel",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Myrtleville",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Paling Yards",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Parkesbourne",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Pomeroy",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Quialigo",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Richlands",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Roslyn",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Run-O-Waters",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Stonequarry",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Tarago",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Taralga",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Tarlo",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Tirrannaville",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Towrang",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Wayo",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Wiarborough",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Windellama",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Wombeyan Caves",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Woodhouselee",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Yalbraith",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2580,
    suburb: "Yarra",
    state: "NSW",
    latitude: -34.44,
    longitude: 149.96
  },
  {
    postcode: 2581,
    suburb: "Bellmount Forest",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Bevendale",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Biala",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Blakney Creek",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Breadalbane",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Broadway",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Collector",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Cullerin",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Dalton",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Gunning",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Gurrundah",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Lade Vale",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Lake George",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Lerida",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Merrill",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Oolong",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2581,
    suburb: "Wollogorang",
    state: "NSW",
    latitude: -34.92,
    longitude: 149.24
  },
  {
    postcode: 2582,
    suburb: "Bango",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Berremangra",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Boambolo",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Bookham",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Bowning",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Burrinjuck",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Cavan",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Good Hope",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Jeir",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Jerrawa",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Kangiara",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Laverstock",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Manton",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Marchmont",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Mullion",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Murrumbateman",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Narrangullen",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Wee Jasper",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Woolgarlo",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Yass",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2582,
    suburb: "Yass River",
    state: "NSW",
    latitude: -34.75,
    longitude: 148.96
  },
  {
    postcode: 2583,
    suburb: "Bigga",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Binda",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Crooked Corner",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Crookwell",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Fullerton",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Grabben Gullen",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Grabine",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Laggan",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Limerick",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Lost River",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Narrawa",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Peelwood",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Pejar",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Rugby",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Tuena",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2583,
    suburb: "Wheeo",
    state: "NSW",
    latitude: -34.08,
    longitude: 149.15
  },
  {
    postcode: 2584,
    suburb: "Binalong",
    state: "NSW",
    latitude: -34.67,
    longitude: 148.63
  },
  {
    postcode: 2585,
    suburb: "Galong",
    state: "NSW",
    latitude: -34.6,
    longitude: 148.56
  },
  {
    postcode: 2586,
    suburb: "Boorowa",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2586,
    suburb: "Frogmore",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2586,
    suburb: "Godfreys Creek",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2586,
    suburb: "Murringo",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2586,
    suburb: "Reids Flat",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2586,
    suburb: "Rye Park",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2586,
    suburb: "Taylors Flat",
    state: "NSW",
    latitude: -34.44,
    longitude: 148.72
  },
  {
    postcode: 2587,
    suburb: "Harden",
    state: "NSW",
    latitude: -34.55,
    longitude: 148.37
  },
  {
    postcode: 2587,
    suburb: "Kingsvale",
    state: "NSW",
    latitude: -34.55,
    longitude: 148.37
  },
  {
    postcode: 2587,
    suburb: "Mcmahons Reef",
    state: "NSW",
    latitude: -34.55,
    longitude: 148.37
  },
  {
    postcode: 2587,
    suburb: "Murrumburrah",
    state: "NSW",
    latitude: -34.55,
    longitude: 148.37
  },
  {
    postcode: 2587,
    suburb: "Nubba",
    state: "NSW",
    latitude: -34.55,
    longitude: 148.37
  },
  {
    postcode: 2587,
    suburb: "Wombat",
    state: "NSW",
    latitude: -34.55,
    longitude: 148.37
  },
  {
    postcode: 2588,
    suburb: "Wallendbeen",
    state: "NSW",
    latitude: -34.52,
    longitude: 148.16
  },
  {
    postcode: 2590,
    suburb: "Bethungra",
    state: "NSW",
    latitude: -34.76,
    longitude: 147.85
  },
  {
    postcode: 2590,
    suburb: "Cootamundra",
    state: "NSW",
    latitude: -34.76,
    longitude: 147.85
  },
  {
    postcode: 2590,
    suburb: "Illabo",
    state: "NSW",
    latitude: -34.76,
    longitude: 147.85
  },
  {
    postcode: 2594,
    suburb: "Berthong",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Bribbaree",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Bulla Creek",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Burrangong",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Kikiamah",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Maimuru",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Memagong",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Milvale",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Monteagle",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Thuddungra",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Tubbul",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Weedallion",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2594,
    suburb: "Young",
    state: "NSW",
    latitude: -34.43,
    longitude: 148.07
  },
  {
    postcode: 2600,
    suburb: "Barton",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Canberra",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Capital Hill",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Deakin",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Deakin West",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Duntroon",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Harman",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Hmas Harman",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Parkes",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Parliament House",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Russell",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Russell Hill",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2600,
    suburb: "Yarralumla",
    state: "ACT",
    latitude: -35.31,
    longitude: 149.14
  },
  {
    postcode: 2601,
    suburb: "Acton",
    state: "ACT",
    latitude: -35.28,
    longitude: 149.11
  },
  {
    postcode: 2601,
    suburb: "Black Mountain",
    state: "ACT",
    latitude: -35.28,
    longitude: 149.11
  },
  {
    postcode: 2601,
    suburb: "Canberra",
    state: "ACT",
    latitude: -35.28,
    longitude: 149.11
  },
  {
    postcode: 2601,
    suburb: "City",
    state: "ACT",
    latitude: -35.28,
    longitude: 149.11
  },
  {
    postcode: 2602,
    suburb: "Ainslie",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2602,
    suburb: "Dickson",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2602,
    suburb: "Downer",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2602,
    suburb: "Hackett",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2602,
    suburb: "Lyneham",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2602,
    suburb: "O\\'Connor",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2602,
    suburb: "Watson",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.15
  },
  {
    postcode: 2603,
    suburb: "Forrest",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.12
  },
  {
    postcode: 2603,
    suburb: "Griffith",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.12
  },
  {
    postcode: 2603,
    suburb: "Manuka",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.12
  },
  {
    postcode: 2603,
    suburb: "Red Hill",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.12
  },
  {
    postcode: 2604,
    suburb: "Causeway",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.15
  },
  {
    postcode: 2604,
    suburb: "Kingston",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.15
  },
  {
    postcode: 2604,
    suburb: "Narrabundah",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.15
  },
  {
    postcode: 2605,
    suburb: "Curtin",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.08
  },
  {
    postcode: 2605,
    suburb: "Garran",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.08
  },
  {
    postcode: 2605,
    suburb: "Hughes",
    state: "ACT",
    latitude: -35.32,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "Chifley",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "Lyons",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "O\\'Malley",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "Phillip",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "Phillip DC",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "Swinger Hill",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2606,
    suburb: "Woden",
    state: "ACT",
    latitude: -35.35,
    longitude: 149.08
  },
  {
    postcode: 2607,
    suburb: "Farrer",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.1
  },
  {
    postcode: 2607,
    suburb: "Isaacs",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.1
  },
  {
    postcode: 2607,
    suburb: "Mawson",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.1
  },
  {
    postcode: 2607,
    suburb: "Pearce",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.1
  },
  {
    postcode: 2607,
    suburb: "Torrens",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.1
  },
  {
    postcode: 2608,
    suburb: "Civic Square",
    state: "ACT",
    latitude: -35.28,
    longitude: 149.13
  },
  {
    postcode: 2609,
    suburb: "Canberra International Airport",
    state: "ACT",
    latitude: -35.3,
    longitude: 149.19
  },
  {
    postcode: 2609,
    suburb: "Fyshwick",
    state: "ACT",
    latitude: -35.3,
    longitude: 149.19
  },
  {
    postcode: 2609,
    suburb: "Majura",
    state: "ACT",
    latitude: -35.3,
    longitude: 149.19
  },
  {
    postcode: 2609,
    suburb: "Pialligo",
    state: "ACT",
    latitude: -35.3,
    longitude: 149.19
  },
  {
    postcode: 2609,
    suburb: "Symonston",
    state: "ACT",
    latitude: -35.3,
    longitude: 149.19
  },
  {
    postcode: 2610,
    suburb: "Canberra BC",
    state: "ACT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2610,
    suburb: "Canberra MC",
    state: "ACT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2611,
    suburb: "Bimberi",
    state: "NSW",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Brindabella",
    state: "NSW",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Chapman",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Cooleman",
    state: "NSW",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Duffy",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Fisher",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Holder",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Mount Stromlo",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Pierces Creek",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Rivett",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Stirling",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Uriarra",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Uriarra",
    state: "NSW",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Uriarra Forest",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Waramanga",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Weston",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2611,
    suburb: "Weston Creek",
    state: "ACT",
    latitude: -35.56,
    longitude: 148.62
  },
  {
    postcode: 2612,
    suburb: "Braddon",
    state: "ACT",
    latitude: -35.27,
    longitude: 149.13
  },
  {
    postcode: 2612,
    suburb: "Campbell",
    state: "ACT",
    latitude: -35.27,
    longitude: 149.13
  },
  {
    postcode: 2612,
    suburb: "Reid",
    state: "ACT",
    latitude: -35.27,
    longitude: 149.13
  },
  {
    postcode: 2612,
    suburb: "Turner",
    state: "ACT",
    latitude: -35.27,
    longitude: 149.13
  },
  {
    postcode: 2614,
    suburb: "Aranda",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Cook",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Hawker",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Jamison Centre",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Macquarie",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Page",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Scullin",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2614,
    suburb: "Weetangera",
    state: "ACT",
    latitude: -35.26,
    longitude: 149.08
  },
  {
    postcode: 2615,
    suburb: "Charnwood",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Dunlop",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Florey",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Flynn",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Fraser",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Higgins",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Holt",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Kippax",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Latham",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Macgregor",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Melba",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2615,
    suburb: "Spence",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.03
  },
  {
    postcode: 2616,
    suburb: "Belconnen",
    state: "ACT",
    latitude: -35.25,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Belconnen",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Belconnen DC",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Bruce",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Evatt",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Giralang",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Kaleen",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Lawson",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "Mckellar",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2617,
    suburb: "University Of Canberra",
    state: "ACT",
    latitude: -35.24,
    longitude: 149.07
  },
  {
    postcode: 2618,
    suburb: "Hall",
    state: "ACT",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2618,
    suburb: "Nanima",
    state: "NSW",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2618,
    suburb: "Springrange",
    state: "NSW",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2618,
    suburb: "Wallaroo",
    state: "NSW",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2619,
    suburb: "Jerrabomberra",
    state: "NSW",
    latitude: -35.38,
    longitude: 149.2
  },
  {
    postcode: 2620,
    suburb: "Beard",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Burra",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Carwoola",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Clear Range",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Crestwood",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Environa",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Googong",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Greenleigh",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Gundaroo",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Hume",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Karabar",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Kowen Forest",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Michelago",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Oaks Estate",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Queanbeyan",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Queanbeyan DC",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Queanbeyan East",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Queanbeyan West",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Royalla",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Sutton",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Tharwa",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "The Angle",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "The Ridgeway",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Tinderry",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Top Naas",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Tralee",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Urila",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Wamboin",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Williamsdale",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Williamsdale",
    state: "ACT",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2620,
    suburb: "Yarrow",
    state: "NSW",
    latitude: -35.58,
    longitude: 149.23
  },
  {
    postcode: 2621,
    suburb: "Anembo",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2621,
    suburb: "Bungendore",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2621,
    suburb: "Bywong",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2621,
    suburb: "Forbes Creek",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2621,
    suburb: "Hoskinstown",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2621,
    suburb: "Primrose Valley",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2621,
    suburb: "Rossi",
    state: "NSW",
    latitude: -35.81,
    longitude: 149.43
  },
  {
    postcode: 2622,
    suburb: "Araluen",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Back Creek",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Ballalaba",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Bendoura",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Berlang",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Bombay",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Boro",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Braidwood",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Budawang",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Bulee",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Charleys Forest",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Coolumburra",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Corang",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Durran Durra",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Endrick",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Farringdon",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Harolds Cross",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Hereford Hall",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Jembaicumbene",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Jerrabattgulla",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Jinden",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Jingera",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Kindervale",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Krawarree",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Larbert",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Majors Creek",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Manar",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Marlowe",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Merricumbene",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Monga",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Mongarlowe",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Mulloon",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Murrengenburg",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Neringla",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Nerriga",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Northangera",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Oallen",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Palerang",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Quiera",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Reidsdale",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Sassafras",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Snowball",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "St George",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Tianjara",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Tolwong",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Tomboye",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Touga",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Warri",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Wog Wog",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2622,
    suburb: "Wyanbene",
    state: "NSW",
    latitude: -35.65,
    longitude: 149.81
  },
  {
    postcode: 2623,
    suburb: "Captains Flat",
    state: "NSW",
    latitude: -35.55,
    longitude: 149.45
  },
  {
    postcode: 2624,
    suburb: "Perisher Valley",
    state: "NSW",
    latitude: -36.18,
    longitude: 148.44
  },
  {
    postcode: 2625,
    suburb: "Thredbo",
    state: "NSW",
    latitude: -36.51,
    longitude: 148.3
  },
  {
    postcode: 2626,
    suburb: "Bredbo",
    state: "NSW",
    latitude: -35.96,
    longitude: 149.15
  },
  {
    postcode: 2626,
    suburb: "Bumbalong",
    state: "NSW",
    latitude: -35.96,
    longitude: 149.15
  },
  {
    postcode: 2626,
    suburb: "Colinton",
    state: "NSW",
    latitude: -35.96,
    longitude: 149.15
  },
  {
    postcode: 2627,
    suburb: "Crackenback",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "East Jindabyne",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Grosses Plain",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Ingebirah",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Jindabyne",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Kalkite",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Kosciuszko",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Kosciuszko National Park",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Moonbah",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2627,
    suburb: "Pilot Wilderness",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.51
  },
  {
    postcode: 2628,
    suburb: "Avonside",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Beloka",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Berridale",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Braemar Bay",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Byadbo Wilderness",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Cootralantra",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Dalgety",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Eucumbene",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Hill Top",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Nimmo",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Numbla Vale",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Paupong",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Rocky Plain",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2628,
    suburb: "Snowy Plain",
    state: "NSW",
    latitude: -36.44,
    longitude: 148.7
  },
  {
    postcode: 2629,
    suburb: "Adaminaby",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Anglers Reach",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Bolaro",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Cabramurra",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Long Plain",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Old Adaminaby",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Providence Portal",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Tantangara",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2629,
    suburb: "Yaouk",
    state: "NSW",
    latitude: -36,
    longitude: 148.77
  },
  {
    postcode: 2630,
    suburb: "Arable",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Badja",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Billilingra",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Binjura",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Bobundara",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Buckenderra",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Bungarby",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Bunyan",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Carlaminda",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Chakola",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Coolringdon",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Cooma",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Cooma North",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Countegany",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Dairymans Plains",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Dangelong",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Dry Plain",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Frying Pan",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Glen Fergus",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Ironmungy",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Jerangle",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Jimenbuen",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Maffra",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Middle Flat",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Middlingbank",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Murrumbucca",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Myalla",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Numeralla",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Peak View",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Pine Valley",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Polo Flat",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Rhine Falls",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Rock Flat",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Rose Valley",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Shannons Flat",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Springfield",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "The Brothers",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Tuross",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2630,
    suburb: "Wambrook",
    state: "NSW",
    latitude: -36.37,
    longitude: 148.95
  },
  {
    postcode: 2631,
    suburb: "Ando",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Boco",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Creewah",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Glen Allen",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Greenlands",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Holts Flat",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Jincumbilly",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Kybeyan",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Mount Cooper",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Nimmitabel",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Steeple Flat",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2631,
    suburb: "Winifred",
    state: "NSW",
    latitude: -36.74,
    longitude: 149.26
  },
  {
    postcode: 2632,
    suburb: "Bibbenluke",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Bombala",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Bondi Forest",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Bukalong",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Cambalong",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Cathcart",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Coolumbooka",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Craigie",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Gunningrah",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Lords Hill",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Merriangaah",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Mila",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Mount Darragh",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Paddys Flat",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Palarang",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Quidong",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Rockton",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2632,
    suburb: "Rosemeath",
    state: "NSW",
    latitude: -36.82,
    longitude: 149.28
  },
  {
    postcode: 2633,
    suburb: "Corrowong",
    state: "NSW",
    latitude: -36.93,
    longitude: 148.83
  },
  {
    postcode: 2633,
    suburb: "Delegate",
    state: "NSW",
    latitude: -36.93,
    longitude: 148.83
  },
  {
    postcode: 2633,
    suburb: "Tombong",
    state: "NSW",
    latitude: -36.93,
    longitude: 148.83
  },
  {
    postcode: 2640,
    suburb: "Albury",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Bungowannah",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "East Albury",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Ettamogah",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Glenroy",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Lavington DC",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Moorwatha",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "North Albury",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Ournie",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "South Albury",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Splitters Creek",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Table Top",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Talmalmo",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Thurgoona",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "West Albury",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Wirlinga",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2640,
    suburb: "Wymah",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.91
  },
  {
    postcode: 2641,
    suburb: "Hamilton Valley",
    state: "NSW",
    latitude: -36.04,
    longitude: 146.92
  },
  {
    postcode: 2641,
    suburb: "Lavington",
    state: "NSW",
    latitude: -36.04,
    longitude: 146.92
  },
  {
    postcode: 2641,
    suburb: "Springdale Heights",
    state: "NSW",
    latitude: -36.04,
    longitude: 146.92
  },
  {
    postcode: 2642,
    suburb: "Bidgeemia",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Brocklesby",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Burrumbuttock",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Geehi",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Gerogery",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Glenellen",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Greg Greg",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Indi",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Jagumba",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Jagungal Wilderness",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Jindera",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Jingellic",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Khancoban",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Murray Gorge",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Rand",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Tooma",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Walbundrie",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Welaregang",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Wrathall",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2642,
    suburb: "Yerong Creek",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.44
  },
  {
    postcode: 2643,
    suburb: "Howlong",
    state: "NSW",
    latitude: -35.96,
    longitude: 146.61
  },
  {
    postcode: 2644,
    suburb: "Bowna",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Coppabella",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Holbrook",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Lankeys Creek",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Little Billabong",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Mountain Creek",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Mullengandra",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Wantagong",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Woomargama",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2644,
    suburb: "Yarara",
    state: "NSW",
    latitude: -35.96,
    longitude: 147.13
  },
  {
    postcode: 2645,
    suburb: "Cullivel",
    state: "NSW",
    latitude: -35.13,
    longitude: 146.13
  },
  {
    postcode: 2645,
    suburb: "Urana",
    state: "NSW",
    latitude: -35.13,
    longitude: 146.13
  },
  {
    postcode: 2646,
    suburb: "Balldale",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Collendina",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Coreen",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Corowa",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Daysdale",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Goombargana",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Hopefield",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Lowesdale",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Nyora",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Oaklands",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Redlands",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Rennie",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Ringwood",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Sanger",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2646,
    suburb: "Savernake",
    state: "NSW",
    latitude: -35.85,
    longitude: 146.52
  },
  {
    postcode: 2647,
    suburb: "Mulwala",
    state: "NSW",
    latitude: -35.95,
    longitude: 145.96
  },
  {
    postcode: 2648,
    suburb: "Anabranch",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2648,
    suburb: "Curlwaa",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2648,
    suburb: "Pan Ban",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2648,
    suburb: "Pooncarie",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2648,
    suburb: "Rufus River",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2648,
    suburb: "Scotia",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2648,
    suburb: "Wentworth",
    state: "NSW",
    latitude: -34.15,
    longitude: 142.09
  },
  {
    postcode: 2649,
    suburb: "Laurel Hill",
    state: "NSW",
    latitude: -35.6,
    longitude: 148.09
  },
  {
    postcode: 2649,
    suburb: "Nurenmerenmong",
    state: "NSW",
    latitude: -35.6,
    longitude: 148.09
  },
  {
    postcode: 2650,
    suburb: "Alfredtown",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Ashmont",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Belfrayden",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Big Springs",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Bomen",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Book Book",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Boorooma",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Borambola",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Bourkelands",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Brucedale",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Bulgary",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Burrandana",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Carabost",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Cartwrights Hill",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Collingullie",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Cookardinia",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Currawarna",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Downside",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "East Wagga Wagga",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Estella",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Euberta",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Eunanoreenya",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Galore",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Gelston Park",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Glenfield Park",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Gobbagombalin",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Gregadoo",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Harefield",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Hillgrove",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Kooringal",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Kyeamba",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Lake Albert",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Lloyd",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Maxwell",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Moorong",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Mount Austin",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "North Wagga Wagga",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Oberne Creek",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Oura",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Pulletop",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Rowan",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "San Isidore",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Springvale",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Tatton",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "The Gap",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Tolland",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Turvey Park",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Wagga Wagga",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Wagga Wagga BC",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Wallacetown",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Wantabadgery",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Yarragundry",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2650,
    suburb: "Yathella",
    state: "NSW",
    latitude: -35.16,
    longitude: 147.51
  },
  {
    postcode: 2651,
    suburb: "Forest Hill",
    state: "NSW",
    latitude: -32.71,
    longitude: 151.55
  },
  {
    postcode: 2651,
    suburb: "Wagga Wagga Raaf",
    state: "NSW",
    latitude: -32.71,
    longitude: 151.55
  },
  {
    postcode: 2652,
    suburb: "Boorga",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Boree Creek",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Goolgowi",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Grong Grong",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Gumly Gumly",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Humula",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Ladysmith",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Landervale",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Mangoplah",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Marrar",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Matong",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Merriwagga",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Murrulebale",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Old Junee",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Rosewood",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Tabbita",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Tarcutta",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2652,
    suburb: "Uranquinty",
    state: "NSW",
    latitude: -34.04,
    longitude: 146.03
  },
  {
    postcode: 2653,
    suburb: "Burra",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Courabyra",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Glenroy",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Mannus",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Maragle",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Munderoo",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Paddys River",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Taradale",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Tumbarumba",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Westdale",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2653,
    suburb: "Willigobung",
    state: "NSW",
    latitude: -35.83,
    longitude: 148.07
  },
  {
    postcode: 2655,
    suburb: "French Park",
    state: "NSW",
    latitude: -35.32,
    longitude: 147.19
  },
  {
    postcode: 2655,
    suburb: "Kubura",
    state: "NSW",
    latitude: -35.32,
    longitude: 147.19
  },
  {
    postcode: 2655,
    suburb: "The Rock",
    state: "NSW",
    latitude: -35.32,
    longitude: 147.19
  },
  {
    postcode: 2655,
    suburb: "Tootool",
    state: "NSW",
    latitude: -35.32,
    longitude: 147.19
  },
  {
    postcode: 2656,
    suburb: "Brookdale",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Brookong",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Fargunyah",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Lockhart",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Milbrulong",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Osborne",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Urangeline",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2656,
    suburb: "Urangeline East",
    state: "NSW",
    latitude: -35.12,
    longitude: 147
  },
  {
    postcode: 2658,
    suburb: "Henty",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.99
  },
  {
    postcode: 2658,
    suburb: "Munyabla",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.99
  },
  {
    postcode: 2658,
    suburb: "Pleasant Hills",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.99
  },
  {
    postcode: 2658,
    suburb: "Ryan",
    state: "NSW",
    latitude: -35.44,
    longitude: 146.99
  },
  {
    postcode: 2659,
    suburb: "Alma Park",
    state: "NSW",
    latitude: -35.6,
    longitude: 146.79
  },
  {
    postcode: 2659,
    suburb: "Walla Walla",
    state: "NSW",
    latitude: -35.6,
    longitude: 146.79
  },
  {
    postcode: 2660,
    suburb: "Culcairn",
    state: "NSW",
    latitude: -35.67,
    longitude: 147
  },
  {
    postcode: 2660,
    suburb: "Morven",
    state: "NSW",
    latitude: -35.67,
    longitude: 147
  },
  {
    postcode: 2661,
    suburb: "Kapooka",
    state: "NSW",
    latitude: -35.15,
    longitude: 147.3
  },
  {
    postcode: 2663,
    suburb: "Cowabbie",
    state: "NSW",
    latitude: -35.15,
    longitude: 145.98
  },
  {
    postcode: 2663,
    suburb: "Erin Vale",
    state: "NSW",
    latitude: -35.15,
    longitude: 145.98
  },
  {
    postcode: 2663,
    suburb: "Eurongilly",
    state: "NSW",
    latitude: -35.15,
    longitude: 145.98
  },
  {
    postcode: 2663,
    suburb: "Junee",
    state: "NSW",
    latitude: -35.15,
    longitude: 145.98
  },
  {
    postcode: 2663,
    suburb: "Marinna",
    state: "NSW",
    latitude: -35.15,
    longitude: 145.98
  },
  {
    postcode: 2663,
    suburb: "Wantiool",
    state: "NSW",
    latitude: -35.15,
    longitude: 145.98
  },
  {
    postcode: 2665,
    suburb: "Ardlethan",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Ariah Park",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Barellan",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Beckom",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Bectric",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Binya",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Kamarah",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Mirrool",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Moombooldool",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Quandary",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Tara",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2665,
    suburb: "Walleroobie",
    state: "NSW",
    latitude: -34.36,
    longitude: 146.9
  },
  {
    postcode: 2666,
    suburb: "Combaning",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Dirnaseer",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Gidginbung",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Grogan",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Junee Reefs",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Mimosa",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Morangarell",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Narraburra",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Pucawan",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Reefton",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Sebastopol",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Springdale",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Temora",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2666,
    suburb: "Trungley Hall",
    state: "NSW",
    latitude: -34.46,
    longitude: 147.68
  },
  {
    postcode: 2668,
    suburb: "Barmedman",
    state: "NSW",
    latitude: -34.18,
    longitude: 147.41
  },
  {
    postcode: 2669,
    suburb: "Erigolia",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Girral",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Kikoira",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Melbergen",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Naradhan",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Rankins Springs",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Tallimba",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Tullibigeal",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Ungarie",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2669,
    suburb: "Weethalle",
    state: "NSW",
    latitude: -33.5,
    longitude: 146.8
  },
  {
    postcode: 2671,
    suburb: "Alleena",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2671,
    suburb: "Back Creek",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2671,
    suburb: "Burcher",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2671,
    suburb: "Lake Cowal",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2671,
    suburb: "North Yalgogrin",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2671,
    suburb: "West Wyalong",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2671,
    suburb: "Wyalong",
    state: "NSW",
    latitude: -34.11,
    longitude: 147.14
  },
  {
    postcode: 2672,
    suburb: "Curlew Waters",
    state: "NSW",
    latitude: -33.39,
    longitude: 146.58
  },
  {
    postcode: 2672,
    suburb: "Lake Cargelligo",
    state: "NSW",
    latitude: -33.39,
    longitude: 146.58
  },
  {
    postcode: 2672,
    suburb: "Murrin Bridge",
    state: "NSW",
    latitude: -33.39,
    longitude: 146.58
  },
  {
    postcode: 2675,
    suburb: "Hillston",
    state: "NSW",
    latitude: -33.48,
    longitude: 145.53
  },
  {
    postcode: 2675,
    suburb: "Lake Brewster",
    state: "NSW",
    latitude: -33.48,
    longitude: 145.53
  },
  {
    postcode: 2675,
    suburb: "Monia Gap",
    state: "NSW",
    latitude: -33.48,
    longitude: 145.53
  },
  {
    postcode: 2675,
    suburb: "Roto",
    state: "NSW",
    latitude: -33.48,
    longitude: 145.53
  },
  {
    postcode: 2675,
    suburb: "Wallanthery",
    state: "NSW",
    latitude: -33.48,
    longitude: 145.53
  },
  {
    postcode: 2678,
    suburb: "Charles Sturt University",
    state: "NSW",
    latitude: -35.06,
    longitude: 147.35
  },
  {
    postcode: 2678,
    suburb: "Riverina Msc",
    state: "NSW",
    latitude: -35.06,
    longitude: 147.35
  },
  {
    postcode: 2680,
    suburb: "Beelbangera",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Benerembah",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Bilbul",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Griffith",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Griffith DC",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Griffith East",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Hanwood",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Kooba",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Lake Wyangan",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Nericon",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Tharbogang",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Warburn",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Warrawidgee",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Widgelli",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Willbriggie",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2680,
    suburb: "Yoogali",
    state: "NSW",
    latitude: -34.26,
    longitude: 146.1
  },
  {
    postcode: 2681,
    suburb: "Myall Park",
    state: "NSW",
    latitude: -34.18,
    longitude: 146.11
  },
  {
    postcode: 2681,
    suburb: "Yenda",
    state: "NSW",
    latitude: -34.18,
    longitude: 146.11
  },
  {
    postcode: 2700,
    suburb: "Bundure",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Colinroobie",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Corobimilla",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Cudgel",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Euroley",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Gillenbah",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Kywong",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Morundah",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Narrandera",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2700,
    suburb: "Sandigo",
    state: "NSW",
    latitude: -35.03,
    longitude: 146.61
  },
  {
    postcode: 2701,
    suburb: "Berry Jerry",
    state: "NSW",
    latitude: -34.82,
    longitude: 147.2
  },
  {
    postcode: 2701,
    suburb: "Coolamon",
    state: "NSW",
    latitude: -34.82,
    longitude: 147.2
  },
  {
    postcode: 2701,
    suburb: "Methul",
    state: "NSW",
    latitude: -34.82,
    longitude: 147.2
  },
  {
    postcode: 2701,
    suburb: "Rannock",
    state: "NSW",
    latitude: -34.82,
    longitude: 147.2
  },
  {
    postcode: 2702,
    suburb: "Ganmain",
    state: "NSW",
    latitude: -34.79,
    longitude: 147.04
  },
  {
    postcode: 2703,
    suburb: "Yanco",
    state: "NSW",
    latitude: -34.63,
    longitude: 146.4
  },
  {
    postcode: 2705,
    suburb: "Brobenah",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Corbie Hill",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Gogeldrie",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Leeton",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Merungle Hill",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Murrami",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Stanbridge",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2705,
    suburb: "Whitton",
    state: "NSW",
    latitude: -34.49,
    longitude: 146.43
  },
  {
    postcode: 2706,
    suburb: "Darlington Point",
    state: "NSW",
    latitude: -34.56,
    longitude: 146.01
  },
  {
    postcode: 2707,
    suburb: "Argoon",
    state: "NSW",
    latitude: -34.86,
    longitude: 145.67
  },
  {
    postcode: 2707,
    suburb: "Coleambally",
    state: "NSW",
    latitude: -34.86,
    longitude: 145.67
  },
  {
    postcode: 2708,
    suburb: "Albury Msc",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2708,
    suburb: "Murray Region MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2710,
    suburb: "Barratta",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Birganbigil",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Booroorban",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Bullatale",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Caldwell",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Calimo",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Conargo",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Coree",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Deniliquin",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Hartwood",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Lindifferon",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Mathoura",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Mayrung",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Moonbria",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Morago",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Pretty Pine",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Steam Plains",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Stud Park",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Wakool",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Wandook",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Wanganella",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Warragoon",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2710,
    suburb: "Willurah",
    state: "NSW",
    latitude: -35.23,
    longitude: 144.49
  },
  {
    postcode: 2711,
    suburb: "Booligal",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Carrathool",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Clare",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Corrong",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Gunbar",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Hay",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Hay South",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Keri Keri",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Maude",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "One Tree",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Oxley",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Waugorah",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2711,
    suburb: "Yanga",
    state: "NSW",
    latitude: -33.68,
    longitude: 144.75
  },
  {
    postcode: 2712,
    suburb: "Berrigan",
    state: "NSW",
    latitude: -35.66,
    longitude: 145.81
  },
  {
    postcode: 2712,
    suburb: "Boomanoomana",
    state: "NSW",
    latitude: -35.66,
    longitude: 145.81
  },
  {
    postcode: 2713,
    suburb: "Blighty",
    state: "NSW",
    latitude: -35.59,
    longitude: 145.29
  },
  {
    postcode: 2713,
    suburb: "Finley",
    state: "NSW",
    latitude: -35.59,
    longitude: 145.29
  },
  {
    postcode: 2713,
    suburb: "Logie Brae",
    state: "NSW",
    latitude: -35.59,
    longitude: 145.29
  },
  {
    postcode: 2713,
    suburb: "Myrtle Park",
    state: "NSW",
    latitude: -35.59,
    longitude: 145.29
  },
  {
    postcode: 2714,
    suburb: "Aratula",
    state: "NSW",
    latitude: -35.51,
    longitude: 145.05
  },
  {
    postcode: 2714,
    suburb: "Pine Lodge",
    state: "NSW",
    latitude: -35.51,
    longitude: 145.05
  },
  {
    postcode: 2714,
    suburb: "Tocumwal",
    state: "NSW",
    latitude: -35.51,
    longitude: 145.05
  },
  {
    postcode: 2714,
    suburb: "Tuppal",
    state: "NSW",
    latitude: -35.51,
    longitude: 145.05
  },
  {
    postcode: 2715,
    suburb: "Arumpo",
    state: "NSW",
    latitude: -33.87,
    longitude: 142.89
  },
  {
    postcode: 2715,
    suburb: "Balranald",
    state: "NSW",
    latitude: -33.87,
    longitude: 142.89
  },
  {
    postcode: 2715,
    suburb: "Hatfield",
    state: "NSW",
    latitude: -33.87,
    longitude: 142.89
  },
  {
    postcode: 2715,
    suburb: "Mungo",
    state: "NSW",
    latitude: -33.87,
    longitude: 142.89
  },
  {
    postcode: 2716,
    suburb: "Four Corners",
    state: "NSW",
    latitude: -35.35,
    longitude: 145.53
  },
  {
    postcode: 2716,
    suburb: "Gala Vale",
    state: "NSW",
    latitude: -35.35,
    longitude: 145.53
  },
  {
    postcode: 2716,
    suburb: "Jerilderie",
    state: "NSW",
    latitude: -35.35,
    longitude: 145.53
  },
  {
    postcode: 2716,
    suburb: "Mabins Well",
    state: "NSW",
    latitude: -35.35,
    longitude: 145.53
  },
  {
    postcode: 2716,
    suburb: "Mairjimmy",
    state: "NSW",
    latitude: -35.35,
    longitude: 145.53
  },
  {
    postcode: 2717,
    suburb: "Dareton",
    state: "NSW",
    latitude: -34.09,
    longitude: 142.04
  },
  {
    postcode: 2720,
    suburb: "Argalong",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Blowering",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Bogong Peaks Wilderness",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Bombowlee",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Bombowlee Creek",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Buddong",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Couragago",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Gadara",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Gilmore",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Gocup",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Goobarragandra",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Jones Bridge",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Killimicat",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Lacmalac",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Little River",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Minjary",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Mundongo",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Pinbeyan",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Red Hill",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Talbingo",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Tumorrama",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Tumut",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Tumut Plains",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Wereboldera",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Wermatong",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Windowie",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Wyangle",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2720,
    suburb: "Yarrangobilly",
    state: "NSW",
    latitude: -35.32,
    longitude: 148.45
  },
  {
    postcode: 2721,
    suburb: "Bland",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.68
  },
  {
    postcode: 2721,
    suburb: "Quandialla",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.68
  },
  {
    postcode: 2722,
    suburb: "Brungle",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Brungle Creek",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Burra Creek",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Darbalara",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Gundagai",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Jones Creek",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Muttama",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "Nangus",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2722,
    suburb: "South Gundagai",
    state: "NSW",
    latitude: -34.82,
    longitude: 148.08
  },
  {
    postcode: 2725,
    suburb: "Stockinbingal",
    state: "NSW",
    latitude: -34.51,
    longitude: 147.88
  },
  {
    postcode: 2726,
    suburb: "Jugiong",
    state: "NSW",
    latitude: -34.91,
    longitude: 148.32
  },
  {
    postcode: 2727,
    suburb: "Adjungbilly",
    state: "NSW",
    latitude: -35.08,
    longitude: 148.41
  },
  {
    postcode: 2727,
    suburb: "Coolac",
    state: "NSW",
    latitude: -35.08,
    longitude: 148.41
  },
  {
    postcode: 2727,
    suburb: "Gobarralong",
    state: "NSW",
    latitude: -35.08,
    longitude: 148.41
  },
  {
    postcode: 2729,
    suburb: "Adelong",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Bangadang",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Black Creek",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Califat",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Cooleys Creek",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Darlow",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Ellerslie",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Grahamstown",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Mount Adrah",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Mount Horeb",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Mundarlo",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Sandy Gully",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Sharps Creek",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Tumblong",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Westwood",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Wondalga",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2729,
    suburb: "Yaven Creek",
    state: "NSW",
    latitude: -35.31,
    longitude: 148.06
  },
  {
    postcode: 2730,
    suburb: "Batlow",
    state: "NSW",
    latitude: -31.49,
    longitude: 152.66
  },
  {
    postcode: 2730,
    suburb: "Green Hills",
    state: "NSW",
    latitude: -31.49,
    longitude: 152.66
  },
  {
    postcode: 2730,
    suburb: "Kunama",
    state: "NSW",
    latitude: -31.49,
    longitude: 152.66
  },
  {
    postcode: 2730,
    suburb: "Lower Bago",
    state: "NSW",
    latitude: -31.49,
    longitude: 152.66
  },
  {
    postcode: 2731,
    suburb: "Bunnaloo",
    state: "NSW",
    latitude: -35.79,
    longitude: 144.63
  },
  {
    postcode: 2731,
    suburb: "Moama",
    state: "NSW",
    latitude: -35.79,
    longitude: 144.63
  },
  {
    postcode: 2731,
    suburb: "Tantonan",
    state: "NSW",
    latitude: -35.79,
    longitude: 144.63
  },
  {
    postcode: 2731,
    suburb: "Thyra",
    state: "NSW",
    latitude: -35.79,
    longitude: 144.63
  },
  {
    postcode: 2731,
    suburb: "Womboota",
    state: "NSW",
    latitude: -35.79,
    longitude: 144.63
  },
  {
    postcode: 2732,
    suburb: "Barham",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2732,
    suburb: "Burraboi",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2732,
    suburb: "Cobramunga",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2732,
    suburb: "Gonn",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2732,
    suburb: "Noorong",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2732,
    suburb: "Thule",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2732,
    suburb: "Tullakool",
    state: "NSW",
    latitude: -35.63,
    longitude: 144.13
  },
  {
    postcode: 2733,
    suburb: "Dhuragoon",
    state: "NSW",
    latitude: -35.19,
    longitude: 144.16
  },
  {
    postcode: 2733,
    suburb: "Moulamein",
    state: "NSW",
    latitude: -35.19,
    longitude: 144.16
  },
  {
    postcode: 2733,
    suburb: "Niemur",
    state: "NSW",
    latitude: -35.19,
    longitude: 144.16
  },
  {
    postcode: 2734,
    suburb: "Cunninyeuk",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Dilpurra",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Kyalite",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Mellool",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Moolpa",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Stony Crossing",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Tooranie",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2734,
    suburb: "Wetuppa",
    state: "NSW",
    latitude: -35.25,
    longitude: 143.9
  },
  {
    postcode: 2735,
    suburb: "Koraleigh",
    state: "NSW",
    latitude: -35.66,
    longitude: 144.14
  },
  {
    postcode: 2735,
    suburb: "Speewa",
    state: "NSW",
    latitude: -35.66,
    longitude: 144.14
  },
  {
    postcode: 2736,
    suburb: "Goodnight",
    state: "NSW",
    latitude: -34.96,
    longitude: 143.34
  },
  {
    postcode: 2736,
    suburb: "Tooleybuc",
    state: "NSW",
    latitude: -34.96,
    longitude: 143.34
  },
  {
    postcode: 2737,
    suburb: "Euston",
    state: "NSW",
    latitude: -34.51,
    longitude: 142.85
  },
  {
    postcode: 2738,
    suburb: "Gol Gol",
    state: "NSW",
    latitude: -34.18,
    longitude: 142.22
  },
  {
    postcode: 2738,
    suburb: "Monak",
    state: "NSW",
    latitude: -34.18,
    longitude: 142.22
  },
  {
    postcode: 2739,
    suburb: "Buronga",
    state: "NSW",
    latitude: -34.17,
    longitude: 142.18
  },
  {
    postcode: 2745,
    suburb: "Glenmore Park",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.67
  },
  {
    postcode: 2745,
    suburb: "Greendale",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.67
  },
  {
    postcode: 2745,
    suburb: "Luddenham",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.67
  },
  {
    postcode: 2745,
    suburb: "Mulgoa",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.67
  },
  {
    postcode: 2745,
    suburb: "Regentville",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.67
  },
  {
    postcode: 2745,
    suburb: "Wallacia",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.67
  },
  {
    postcode: 2747,
    suburb: "Cambridge Gardens",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Cambridge Park",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Claremont Meadows",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Kingswood",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Llandilo",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Shanes Park",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Werrington",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Werrington County",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2747,
    suburb: "Werrington Downs",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.72
  },
  {
    postcode: 2748,
    suburb: "Orchard Hills",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.72
  },
  {
    postcode: 2749,
    suburb: "Castlereagh",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.68
  },
  {
    postcode: 2749,
    suburb: "Cranebrook",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.68
  },
  {
    postcode: 2750,
    suburb: "Emu Heights",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "Emu Plains",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "Jamisontown",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "Leonay",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "Penrith",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "Penrith Plaza",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "Penrith South",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2750,
    suburb: "South Penrith",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.65
  },
  {
    postcode: 2751,
    suburb: "Penrith",
    state: "NSW",
    latitude: -33.73,
    longitude: 151.28
  },
  {
    postcode: 2752,
    suburb: "Silverdale",
    state: "NSW",
    latitude: -33.94,
    longitude: 150.58
  },
  {
    postcode: 2752,
    suburb: "Warragamba",
    state: "NSW",
    latitude: -33.94,
    longitude: 150.58
  },
  {
    postcode: 2753,
    suburb: "Agnes Banks",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Bowen Mountain",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Grose Vale",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Grose Wold",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Hobartville",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Londonderry",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Richmond",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Richmond Lowlands",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2753,
    suburb: "Yarramundi",
    state: "NSW",
    latitude: -33.62,
    longitude: 150.71
  },
  {
    postcode: 2754,
    suburb: "North Richmond",
    state: "NSW",
    latitude: -33.58,
    longitude: 150.72
  },
  {
    postcode: 2754,
    suburb: "Tennyson",
    state: "NSW",
    latitude: -33.58,
    longitude: 150.72
  },
  {
    postcode: 2754,
    suburb: "The Slopes",
    state: "NSW",
    latitude: -33.58,
    longitude: 150.72
  },
  {
    postcode: 2755,
    suburb: "Richmond Raaf",
    state: "NSW",
    latitude: -33.6,
    longitude: 150.8
  },
  {
    postcode: 2756,
    suburb: "Bligh Park",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Cattai",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Central Colo",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Clarendon",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Colo",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Colo Heights",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Cornwallis",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Cumberland Reach",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Ebenezer",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Freemans Reach",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Glossodia",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Lower Portland",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Maroota",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Mcgraths Hill",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Mellong",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Mulgrave",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Pitt Town",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Pitt Town Bottoms",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Sackville",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Sackville North",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Scheyville",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "South Maroota",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "South Windsor",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Upper Colo",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Wilberforce",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Windsor",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Windsor Downs",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2756,
    suburb: "Womerah",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.79
  },
  {
    postcode: 2757,
    suburb: "Kurmond",
    state: "NSW",
    latitude: -33.55,
    longitude: 150.7
  },
  {
    postcode: 2758,
    suburb: "Berambing",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Bilpin",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Blaxlands Ridge",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "East Kurrajong",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Kurrajong",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Kurrajong Heights",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Kurrajong Hills",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Mount Tomah",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Mountain Lagoon",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "The Devils Wilderness",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2758,
    suburb: "Wheeny Creek",
    state: "NSW",
    latitude: -33.54,
    longitude: 150.44
  },
  {
    postcode: 2759,
    suburb: "Erskine Park",
    state: "NSW",
    latitude: -33.81,
    longitude: 150.79
  },
  {
    postcode: 2759,
    suburb: "St Clair",
    state: "NSW",
    latitude: -33.81,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "Colyton",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "North St Marys",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "Oxley Park",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "Ropes Crossing",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "St Marys",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "St Marys East",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2760,
    suburb: "St Marys South",
    state: "NSW",
    latitude: -33.78,
    longitude: 150.79
  },
  {
    postcode: 2761,
    suburb: "Colebee",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.87
  },
  {
    postcode: 2761,
    suburb: "Dean Park",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.87
  },
  {
    postcode: 2761,
    suburb: "Glendenning",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.87
  },
  {
    postcode: 2761,
    suburb: "Hassall Grove",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.87
  },
  {
    postcode: 2761,
    suburb: "Oakhurst",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.87
  },
  {
    postcode: 2761,
    suburb: "Plumpton",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.87
  },
  {
    postcode: 2762,
    suburb: "Schofields",
    state: "NSW",
    latitude: -33.7,
    longitude: 150.89
  },
  {
    postcode: 2763,
    suburb: "Acacia Gardens",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.91
  },
  {
    postcode: 2763,
    suburb: "Quakers Hill",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.91
  },
  {
    postcode: 2765,
    suburb: "Berkshire Park",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Box Hill",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Maraylya",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Marsden Park",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Nelson",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Oakville",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Riverstone",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2765,
    suburb: "Vineyard",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.8
  },
  {
    postcode: 2766,
    suburb: "Eastern Creek",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.85
  },
  {
    postcode: 2766,
    suburb: "Rooty Hill",
    state: "NSW",
    latitude: -33.8,
    longitude: 150.85
  },
  {
    postcode: 2767,
    suburb: "Doonside",
    state: "NSW",
    latitude: -33.77,
    longitude: 150.87
  },
  {
    postcode: 2767,
    suburb: "Woodcroft",
    state: "NSW",
    latitude: -33.77,
    longitude: 150.87
  },
  {
    postcode: 2768,
    suburb: "Glenwood",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2768,
    suburb: "Parklea",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2768,
    suburb: "Stanhope Gardens",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.92
  },
  {
    postcode: 2769,
    suburb: "The Ponds",
    state: "NSW",
    latitude: -34.05,
    longitude: 150.75
  },
  {
    postcode: 2770,
    suburb: "Bidwill",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Blackett",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Dharruk",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Emerton",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Hebersham",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Lethbridge Park",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Minchinbury",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Mount Druitt",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Mount Druitt Village",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Shalvey",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Tregear",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Whalan",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2770,
    suburb: "Willmot",
    state: "NSW",
    latitude: -33.73,
    longitude: 150.82
  },
  {
    postcode: 2773,
    suburb: "Glenbrook",
    state: "NSW",
    latitude: -33.77,
    longitude: 150.62
  },
  {
    postcode: 2773,
    suburb: "Lapstone",
    state: "NSW",
    latitude: -33.77,
    longitude: 150.62
  },
  {
    postcode: 2774,
    suburb: "Blaxland",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.61
  },
  {
    postcode: 2774,
    suburb: "Blaxland East",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.61
  },
  {
    postcode: 2774,
    suburb: "Mount Riverview",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.61
  },
  {
    postcode: 2774,
    suburb: "Warrimoo",
    state: "NSW",
    latitude: -33.74,
    longitude: 150.61
  },
  {
    postcode: 2775,
    suburb: "Central Macdonald",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Fernances",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Gunderman",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Higher Macdonald",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Laughtondale",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Leets Vale",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Lower Macdonald",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Marlow",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Mogo Creek",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Perrys Crossing",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Singletons Mill",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Spencer",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "St Albans",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Upper Macdonald",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Webbs Creek",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Wisemans Ferry",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2775,
    suburb: "Wrights Creek",
    state: "NSW",
    latitude: -33.33,
    longitude: 150.98
  },
  {
    postcode: 2776,
    suburb: "Faulconbridge",
    state: "NSW",
    latitude: -33.7,
    longitude: 150.53
  },
  {
    postcode: 2777,
    suburb: "Hawkesbury Heights",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.65
  },
  {
    postcode: 2777,
    suburb: "Springwood",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.65
  },
  {
    postcode: 2777,
    suburb: "Sun Valley",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.65
  },
  {
    postcode: 2777,
    suburb: "Valley Heights",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.65
  },
  {
    postcode: 2777,
    suburb: "Winmalee",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.65
  },
  {
    postcode: 2777,
    suburb: "Yellow Rock",
    state: "NSW",
    latitude: -33.67,
    longitude: 150.65
  },
  {
    postcode: 2778,
    suburb: "Linden",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.04
  },
  {
    postcode: 2778,
    suburb: "Woodford",
    state: "NSW",
    latitude: -33.79,
    longitude: 150.04
  },
  {
    postcode: 2779,
    suburb: "Hazelbrook",
    state: "NSW",
    latitude: -33.72,
    longitude: 150.45
  },
  {
    postcode: 2780,
    suburb: "Katoomba",
    state: "NSW",
    latitude: -33.71,
    longitude: 150.31
  },
  {
    postcode: 2780,
    suburb: "Katoomba DC",
    state: "NSW",
    latitude: -33.71,
    longitude: 150.31
  },
  {
    postcode: 2780,
    suburb: "Leura",
    state: "NSW",
    latitude: -33.71,
    longitude: 150.31
  },
  {
    postcode: 2780,
    suburb: "Medlow Bath",
    state: "NSW",
    latitude: -33.71,
    longitude: 150.31
  },
  {
    postcode: 2782,
    suburb: "Wentworth Falls",
    state: "NSW",
    latitude: -33.71,
    longitude: 150.38
  },
  {
    postcode: 2783,
    suburb: "Lawson",
    state: "NSW",
    latitude: -33.72,
    longitude: 150.43
  },
  {
    postcode: 2784,
    suburb: "Bullaburra",
    state: "NSW",
    latitude: -33.72,
    longitude: 150.41
  },
  {
    postcode: 2785,
    suburb: "Blackheath",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.28
  },
  {
    postcode: 2785,
    suburb: "Megalong",
    state: "NSW",
    latitude: -33.64,
    longitude: 150.28
  },
  {
    postcode: 2786,
    suburb: "Bell",
    state: "NSW",
    latitude: -33.51,
    longitude: 150.28
  },
  {
    postcode: 2786,
    suburb: "Dargan",
    state: "NSW",
    latitude: -33.51,
    longitude: 150.28
  },
  {
    postcode: 2786,
    suburb: "Mount Irvine",
    state: "NSW",
    latitude: -33.51,
    longitude: 150.28
  },
  {
    postcode: 2786,
    suburb: "Mount Victoria",
    state: "NSW",
    latitude: -33.51,
    longitude: 150.28
  },
  {
    postcode: 2786,
    suburb: "Mount Wilson",
    state: "NSW",
    latitude: -33.51,
    longitude: 150.28
  },
  {
    postcode: 2787,
    suburb: "Black Springs",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Chatham Valley",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Duckmaloi",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Edith",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Gingkin",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Gurnang",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Hazelgrove",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Jaunter",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Kanangra",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Mayfield",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Mount Olive",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Mount Werong",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Mozart",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Norway",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Oberon",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Porters Retreat",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Shooters Hill",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "Tarana",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2787,
    suburb: "The Meadows",
    state: "NSW",
    latitude: -33.84,
    longitude: 149.71
  },
  {
    postcode: 2790,
    suburb: "Ben Bullen",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Blackmans Flat",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Bowenfels",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Clarence",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Cobar Park",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Corney Town",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Cullen Bullen",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Doctors Gap",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Ganbenang",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Hampton",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Hartley",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Hartley Vale",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Hassans Walls",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Hermitage Flat",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Jenolan",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Kanimbla",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Lidsdale",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Lithgow",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Lithgow DC",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Little Hartley",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Littleton",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Lowther",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Marrangaroo",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Mckellars Park",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Morts Estate",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Mount Lambie",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Newnes",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Newnes Plateau",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Oaky Park",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Pottery Estate",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Rydal",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Sheedys Gully",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Sodwalls",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "South Bowenfels",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "South Littleton",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Springvale",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "State Mine Gully",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Vale Of Clwydd",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Wolgan Valley",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2790,
    suburb: "Wollangambe",
    state: "NSW",
    latitude: -33.22,
    longitude: 150.02
  },
  {
    postcode: 2791,
    suburb: "Carcoar",
    state: "NSW",
    latitude: -33.61,
    longitude: 149.14
  },
  {
    postcode: 2791,
    suburb: "Errowanbang",
    state: "NSW",
    latitude: -33.61,
    longitude: 149.14
  },
  {
    postcode: 2792,
    suburb: "Burnt Yards",
    state: "NSW",
    latitude: -33.59,
    longitude: 149.03
  },
  {
    postcode: 2792,
    suburb: "Mandurama",
    state: "NSW",
    latitude: -33.59,
    longitude: 149.03
  },
  {
    postcode: 2793,
    suburb: "Darbys Falls",
    state: "NSW",
    latitude: -33.93,
    longitude: 148.86
  },
  {
    postcode: 2793,
    suburb: "Roseberg",
    state: "NSW",
    latitude: -33.93,
    longitude: 148.86
  },
  {
    postcode: 2793,
    suburb: "Woodstock",
    state: "NSW",
    latitude: -33.93,
    longitude: 148.86
  },
  {
    postcode: 2794,
    suburb: "Bumbaldry",
    state: "NSW",
    latitude: -33.91,
    longitude: 148.46
  },
  {
    postcode: 2794,
    suburb: "Cowra",
    state: "NSW",
    latitude: -33.91,
    longitude: 148.46
  },
  {
    postcode: 2794,
    suburb: "Hovells Creek",
    state: "NSW",
    latitude: -33.91,
    longitude: 148.46
  },
  {
    postcode: 2794,
    suburb: "Mount Collins",
    state: "NSW",
    latitude: -33.91,
    longitude: 148.46
  },
  {
    postcode: 2794,
    suburb: "Wattamondara",
    state: "NSW",
    latitude: -33.91,
    longitude: 148.46
  },
  {
    postcode: 2795,
    suburb: "Abercrombie",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Abercrombie River",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Arkell",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Arkstone",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Bald Ridge",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Ballyroe",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Bathampton",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Bathurst",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Billywillinga",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Brewongle",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Bruinbun",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Burraga",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Caloola",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Charles Sturt University",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Charlton",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Clear Creek",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Colo",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Copperhannia",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Cow Flat",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Crudine",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Curragh",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Dark Corner",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Dog Rocks",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Dunkeld",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Duramana",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Eglinton",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Essington",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Evans Plains",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Fitzgeralds Valley",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Forest Grove",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Fosters Valley",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Freemantle",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Gemalla",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Georges Plains",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Gilmandyke",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Glanmire",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Gormans Hill",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Gowan",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Hobbys Yards",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Isabella",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Jeremy",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Judds Creek",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Kelso",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Killongbutta",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Kirkconnell",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Laffing Waters",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Limekilns",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Llanarth",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Locksley",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Meadow Flat",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Milkers Flat",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Millah Murrah",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Mitchell",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Moorilda",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Mount David",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Mount Panorama",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Mount Rankin",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Napoleon Reef",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Newbridge",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "O\\'Connell",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Orton Park",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Paling Yards",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Palmers Oaky",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Peel",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Perthville",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Raglan",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Robin Hill",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Rock Forest",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Rockley",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Rockley Mount",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Sofala",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "South Bathurst",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Stewarts Mount",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Sunny Corner",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Tambaroora",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Tannas Mount",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "The Lagoon",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "The Rocks",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Triangle Flat",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Trunkey Creek",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Turondale",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Twenty Forests",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Upper Turon",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Walang",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Wambool",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Wattle Flat",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Watton",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "West Bathurst",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "White Rock",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Wiagdon",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Wimbledon",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Winburndale",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Windradyne",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Wisemans Creek",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Yarras",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2795,
    suburb: "Yetholme",
    state: "NSW",
    latitude: -33.91,
    longitude: 149.33
  },
  {
    postcode: 2796,
    suburb: "Bathurst MC",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2797,
    suburb: "Garland",
    state: "NSW",
    latitude: -33.71,
    longitude: 149.03
  },
  {
    postcode: 2797,
    suburb: "Lyndhurst",
    state: "NSW",
    latitude: -33.71,
    longitude: 149.03
  },
  {
    postcode: 2798,
    suburb: "Byng",
    state: "NSW",
    latitude: -33.34,
    longitude: 149.25
  },
  {
    postcode: 2798,
    suburb: "Forest Reefs",
    state: "NSW",
    latitude: -33.34,
    longitude: 149.25
  },
  {
    postcode: 2798,
    suburb: "Guyong",
    state: "NSW",
    latitude: -33.34,
    longitude: 149.25
  },
  {
    postcode: 2798,
    suburb: "Millthorpe",
    state: "NSW",
    latitude: -33.34,
    longitude: 149.25
  },
  {
    postcode: 2798,
    suburb: "Spring Terrace",
    state: "NSW",
    latitude: -33.34,
    longitude: 149.25
  },
  {
    postcode: 2798,
    suburb: "Tallwood",
    state: "NSW",
    latitude: -33.34,
    longitude: 149.25
  },
  {
    postcode: 2799,
    suburb: "Barry",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2799,
    suburb: "Blayney",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2799,
    suburb: "Browns Creek",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2799,
    suburb: "Fitzgeralds Mount",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2799,
    suburb: "Kings Plains",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2799,
    suburb: "Neville",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2799,
    suburb: "Vittoria",
    state: "NSW",
    latitude: -33.65,
    longitude: 149.27
  },
  {
    postcode: 2800,
    suburb: "Belgravia",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Borenore",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Cadia",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Canobolas",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Cargo",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Clergate",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Clifton Grove",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Emu Swamp",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Four Mile Creek",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Huntley",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Kangaroobie",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Kerrs Creek",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Lewis Ponds",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Lidster",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Lower Lewis Ponds",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Lucknow",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "March",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Mullion Creek",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Nangar",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Nashdale",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Ophir",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Orange",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Orange DC",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Orange East",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Panuara",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Shadforth",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Spring Creek",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Spring Hill",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Springside",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Summer Hill Creek",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Waldegrave",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2800,
    suburb: "Windera",
    state: "NSW",
    latitude: -33.12,
    longitude: 149.03
  },
  {
    postcode: 2803,
    suburb: "Bendick Murrell",
    state: "NSW",
    latitude: -34.16,
    longitude: 148.45
  },
  {
    postcode: 2803,
    suburb: "Crowther",
    state: "NSW",
    latitude: -34.16,
    longitude: 148.45
  },
  {
    postcode: 2803,
    suburb: "Wirrimah",
    state: "NSW",
    latitude: -34.16,
    longitude: 148.45
  },
  {
    postcode: 2804,
    suburb: "Billimari",
    state: "NSW",
    latitude: -33.68,
    longitude: 148.62
  },
  {
    postcode: 2804,
    suburb: "Canowindra",
    state: "NSW",
    latitude: -33.68,
    longitude: 148.62
  },
  {
    postcode: 2804,
    suburb: "Moorbel",
    state: "NSW",
    latitude: -33.68,
    longitude: 148.62
  },
  {
    postcode: 2804,
    suburb: "Nyrang Creek",
    state: "NSW",
    latitude: -33.68,
    longitude: 148.62
  },
  {
    postcode: 2805,
    suburb: "Gooloogong",
    state: "NSW",
    latitude: -33.65,
    longitude: 148.41
  },
  {
    postcode: 2806,
    suburb: "Eugowra",
    state: "NSW",
    latitude: -33.43,
    longitude: 148.37
  },
  {
    postcode: 2807,
    suburb: "Koorawatha",
    state: "NSW",
    latitude: -34.04,
    longitude: 148.55
  },
  {
    postcode: 2808,
    suburb: "Wyangala",
    state: "NSW",
    latitude: -33.94,
    longitude: 149.05
  },
  {
    postcode: 2809,
    suburb: "Greenethorpe",
    state: "NSW",
    latitude: -34.04,
    longitude: 148.4
  },
  {
    postcode: 2810,
    suburb: "Bimbi",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Caragabal",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Glenelg",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Grenfell",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Piney Range",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Pinnacle",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Pullabooka",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2810,
    suburb: "Warraderry",
    state: "NSW",
    latitude: -33.99,
    longitude: 147.93
  },
  {
    postcode: 2820,
    suburb: "Apsley",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Arthurville",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Bakers Swamp",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Bodangora",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Comobella",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Curra Creek",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Dripstone",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Farnham",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Gollan",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Lake Burrendong",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Maryvale",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Medway",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Montefiores",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Mookerawa",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Mount Aquila",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Mount Arthur",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Mumbil",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Nanima",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Neurea",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Spicers Creek",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Stuart Town",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Suntop",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Walmer",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Wellington",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Wuuluman",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2820,
    suburb: "Yarragal",
    state: "NSW",
    latitude: -32.6,
    longitude: 148.96
  },
  {
    postcode: 2821,
    suburb: "Burroway",
    state: "NSW",
    latitude: -32.06,
    longitude: 148.26
  },
  {
    postcode: 2821,
    suburb: "Narromine",
    state: "NSW",
    latitude: -32.06,
    longitude: 148.26
  },
  {
    postcode: 2823,
    suburb: "Bundemar",
    state: "NSW",
    latitude: -31.84,
    longitude: 148.18
  },
  {
    postcode: 2823,
    suburb: "Cathundral",
    state: "NSW",
    latitude: -31.84,
    longitude: 148.18
  },
  {
    postcode: 2823,
    suburb: "Dandaloo",
    state: "NSW",
    latitude: -31.84,
    longitude: 148.18
  },
  {
    postcode: 2823,
    suburb: "Gin Gin",
    state: "NSW",
    latitude: -31.84,
    longitude: 148.18
  },
  {
    postcode: 2823,
    suburb: "Trangie",
    state: "NSW",
    latitude: -31.84,
    longitude: 148.18
  },
  {
    postcode: 2824,
    suburb: "Beemunnel",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Eenaweena",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Marthaguy",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Mount Foster",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Mount Harris",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Mumblebone Plain",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Oxley",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Pigeonbah",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Ravenswood",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Red Hill",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Snakes Plain",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Tenandra",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2824,
    suburb: "Warren",
    state: "NSW",
    latitude: -31.67,
    longitude: 147.86
  },
  {
    postcode: 2825,
    suburb: "Babinda",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Bobadah",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Bogan",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Buddabadah",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Canonba",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Five Ways",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Honeybugle",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Miandetta",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Mulla",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Mullengudgery",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Murrawombie",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Nyngan",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2825,
    suburb: "Pangee",
    state: "NSW",
    latitude: -31.94,
    longitude: 146.48
  },
  {
    postcode: 2827,
    suburb: "Bearbong",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2827,
    suburb: "Biddon",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2827,
    suburb: "Breelong",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2827,
    suburb: "Collie",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2827,
    suburb: "Curban",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2827,
    suburb: "Gilgandra",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2827,
    suburb: "Merrigal",
    state: "NSW",
    latitude: -31.66,
    longitude: 148.88
  },
  {
    postcode: 2828,
    suburb: "Black Hollow",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2828,
    suburb: "Bourbah",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2828,
    suburb: "Gulargambone",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2828,
    suburb: "Mount Tenandra",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2828,
    suburb: "Quanda",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2828,
    suburb: "Tonderburine",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2828,
    suburb: "Warrumbungle",
    state: "NSW",
    latitude: -31.11,
    longitude: 148.86
  },
  {
    postcode: 2829,
    suburb: "Billeroy",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Combara",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Conimbia",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Coonamble",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Gilgooma",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Magometon",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Nebea",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Pine Grove",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Teridgerie",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Urawilkie",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2829,
    suburb: "Wingadee",
    state: "NSW",
    latitude: -31.12,
    longitude: 148.37
  },
  {
    postcode: 2830,
    suburb: "Ballimore",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Barbigal",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Beni",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Boothenba",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Brocklehurst",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Bruah",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Bunglegumbie",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Burrabadine",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Butlers Falls",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Coolbaggie",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Cumboogle",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Dubbo",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Dubbo DC",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Dubbo East",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Dubbo Grove",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Dubbo West",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Eschol",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Eulomogo",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Glengerra",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Goonoo Forest",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Jones Creek",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Kickabil",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Minore",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Mogriguy",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Mountain Creek",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Muronbung",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Murrumbidgerie",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Rawsonville",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Terramungamine",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Toongi",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Wambangalang",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2830,
    suburb: "Yarrabar",
    state: "NSW",
    latitude: -32.2,
    longitude: 148.9
  },
  {
    postcode: 2831,
    suburb: "Armatree",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Balladoran",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Brenda",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Bullagreen",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Byrock",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Carinda",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Coolabah",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Elong Elong",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Eumungerie",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Geurie",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Girilambone",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Goodooga",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Gungalman",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Hermidale",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Macquarie Marshes",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Merrygoen",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Neilrex",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Nevertire",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Nubingerie",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Nymagee",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Pine Clump",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Ponto",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Quambone",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Terrabella",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "The Marra",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Tooloon",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Tooraweenah",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Westella",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2831,
    suburb: "Wongarbon",
    state: "NSW",
    latitude: -31.45,
    longitude: 148.41
  },
  {
    postcode: 2832,
    suburb: "Come By Chance",
    state: "NSW",
    latitude: -29.11,
    longitude: 147.9
  },
  {
    postcode: 2832,
    suburb: "Cryon",
    state: "NSW",
    latitude: -29.11,
    longitude: 147.9
  },
  {
    postcode: 2832,
    suburb: "Cumborah",
    state: "NSW",
    latitude: -29.11,
    longitude: 147.9
  },
  {
    postcode: 2832,
    suburb: "Walgett",
    state: "NSW",
    latitude: -29.11,
    longitude: 147.9
  },
  {
    postcode: 2833,
    suburb: "Collarenebri",
    state: "NSW",
    latitude: -29.55,
    longitude: 148.58
  },
  {
    postcode: 2834,
    suburb: "Angledool",
    state: "NSW",
    latitude: -29.43,
    longitude: 147.98
  },
  {
    postcode: 2834,
    suburb: "Lightning Ridge",
    state: "NSW",
    latitude: -29.43,
    longitude: 147.98
  },
  {
    postcode: 2835,
    suburb: "Bulla",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Canbelego",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Cobar",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Cubba",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Gilgunnia",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Irymple",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Kerrigundi",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Kulwin",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Lerida",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Noona",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Sandy Creek",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2835,
    suburb: "Tindarey",
    state: "NSW",
    latitude: -32.03,
    longitude: 144.44
  },
  {
    postcode: 2836,
    suburb: "White Cliffs",
    state: "NSW",
    latitude: -30.81,
    longitude: 142.88
  },
  {
    postcode: 2836,
    suburb: "Wilcannia",
    state: "NSW",
    latitude: -30.81,
    longitude: 142.88
  },
  {
    postcode: 2839,
    suburb: "Bogan",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2839,
    suburb: "Brewarrina",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2839,
    suburb: "Collerina",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2839,
    suburb: "Gongolgon",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2839,
    suburb: "Narran Lake",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2839,
    suburb: "Talawanta",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2839,
    suburb: "Weilmoringle",
    state: "NSW",
    latitude: -30.2,
    longitude: 146.54
  },
  {
    postcode: 2840,
    suburb: "Bourke",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Enngonia",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Fords Bridge",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Gumbalie",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Gunderbooka",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Hungerford",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Louth",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Tilpa",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Wanaaring",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2840,
    suburb: "Yantabulla",
    state: "NSW",
    latitude: -29.19,
    longitude: 145.88
  },
  {
    postcode: 2842,
    suburb: "Mendooran",
    state: "NSW",
    latitude: -31.82,
    longitude: 149.12
  },
  {
    postcode: 2842,
    suburb: "Mollyan",
    state: "NSW",
    latitude: -31.82,
    longitude: 149.12
  },
  {
    postcode: 2842,
    suburb: "Wattle Springs",
    state: "NSW",
    latitude: -31.82,
    longitude: 149.12
  },
  {
    postcode: 2842,
    suburb: "Yarragrin",
    state: "NSW",
    latitude: -31.82,
    longitude: 149.12
  },
  {
    postcode: 2843,
    suburb: "Coolah",
    state: "NSW",
    latitude: -31.77,
    longitude: 149.61
  },
  {
    postcode: 2844,
    suburb: "Birriwa",
    state: "NSW",
    latitude: -32.12,
    longitude: 149.47
  },
  {
    postcode: 2844,
    suburb: "Dunedoo",
    state: "NSW",
    latitude: -32.12,
    longitude: 149.47
  },
  {
    postcode: 2844,
    suburb: "Leadville",
    state: "NSW",
    latitude: -32.12,
    longitude: 149.47
  },
  {
    postcode: 2845,
    suburb: "Wallerawang",
    state: "NSW",
    latitude: -33.41,
    longitude: 150.06
  },
  {
    postcode: 2846,
    suburb: "Capertee",
    state: "NSW",
    latitude: -33.15,
    longitude: 149.99
  },
  {
    postcode: 2846,
    suburb: "Glen Davis",
    state: "NSW",
    latitude: -33.15,
    longitude: 149.99
  },
  {
    postcode: 2846,
    suburb: "Round Swamp",
    state: "NSW",
    latitude: -33.15,
    longitude: 149.99
  },
  {
    postcode: 2847,
    suburb: "Portland",
    state: "NSW",
    latitude: -33.35,
    longitude: 149.98
  },
  {
    postcode: 2848,
    suburb: "Brogans Creek",
    state: "NSW",
    latitude: -32.97,
    longitude: 149.96
  },
  {
    postcode: 2848,
    suburb: "Charbon",
    state: "NSW",
    latitude: -32.97,
    longitude: 149.96
  },
  {
    postcode: 2848,
    suburb: "Clandulla",
    state: "NSW",
    latitude: -32.97,
    longitude: 149.96
  },
  {
    postcode: 2848,
    suburb: "Kandos",
    state: "NSW",
    latitude: -32.97,
    longitude: 149.96
  },
  {
    postcode: 2849,
    suburb: "Bogee",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Breakfast Creek",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Budden",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Bylong",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Camboon",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Carwell",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Coggan",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Coxs Creek",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Coxs Crown",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Dabee",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Dungeree",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Dunville Loop",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Ginghi",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Glen Alice",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Growee",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Kelgoola",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Lee Creek",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Mount Marsden",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Murrumbo",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Nullo Mountain",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Olinda",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Pinnacle Swamp",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Pyangle",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Reedy Creek",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Rylstone",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Upper Bylong",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Upper Growee",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Upper Nile",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2849,
    suburb: "Wirraba",
    state: "NSW",
    latitude: -32.98,
    longitude: 150.1
  },
  {
    postcode: 2850,
    suburb: "Aarons Pass",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Apple Tree Flat",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Avisford",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Bara",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Barigan",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Ben Buckley",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Bocoble",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Bombira",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Botobolar",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Buckaroo",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Budgee Budgee",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Burrundulla",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Caerleon",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Canadian Lead",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Carcalgong",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Collingwood",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Cooks Gap",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Cooyal",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Cross Roads",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Cudgegong",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Cullenbone",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Cumbo",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Erudgere",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Eurunderee",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Frog Rock",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Galambine",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Glen Ayr",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Grattai",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Green Gully",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Hargraves",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Havilah",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Hayes Gap",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Hill End",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Home Rule",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Ilford",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Kains Flat",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Linburn",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Lue",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Maitland Bar",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Menah",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Meroo",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Milroy",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Mogo",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Monivae",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Moolarben",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Mount Frome",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Mount Knowles",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Mount Vincent",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Mudgee",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Mullamuddy",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Munghorn",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Piambong",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Putta Bucca",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Pyramul",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Queens Pinch",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Razorback",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Riverlea",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Running Stream",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Sallys Flat",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Spring Flat",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "St Fillans",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Stony Creek",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Tambaroora",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Tichular",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Totnes Valley",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Triamble",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Turill",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Twelve Mile",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Ulan",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Ullamalla",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Wilbetree",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Wilpinjong",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Windeyer",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Wollar",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Worlds End",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Yarrabin",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2850,
    suburb: "Yarrawonga",
    state: "NSW",
    latitude: -32.86,
    longitude: 149.8
  },
  {
    postcode: 2852,
    suburb: "Barneys Reef",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Beryl",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Biraganbil",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Bungaba",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Cope",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Cumbandry",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Goolma",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Gulgong",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Mebul",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Merotherie",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Stubbo",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2852,
    suburb: "Tallawang",
    state: "NSW",
    latitude: -32.19,
    longitude: 149.53
  },
  {
    postcode: 2864,
    suburb: "Boree",
    state: "NSW",
    latitude: -33.23,
    longitude: 148.84
  },
  {
    postcode: 2864,
    suburb: "Bowan Park",
    state: "NSW",
    latitude: -33.23,
    longitude: 148.84
  },
  {
    postcode: 2864,
    suburb: "Cudal",
    state: "NSW",
    latitude: -33.23,
    longitude: 148.84
  },
  {
    postcode: 2864,
    suburb: "Murga",
    state: "NSW",
    latitude: -33.23,
    longitude: 148.84
  },
  {
    postcode: 2864,
    suburb: "Toogong",
    state: "NSW",
    latitude: -33.23,
    longitude: 148.84
  },
  {
    postcode: 2865,
    suburb: "Bocobra",
    state: "NSW",
    latitude: -33.1,
    longitude: 148.54
  },
  {
    postcode: 2865,
    suburb: "Gumble",
    state: "NSW",
    latitude: -33.1,
    longitude: 148.54
  },
  {
    postcode: 2865,
    suburb: "Manildra",
    state: "NSW",
    latitude: -33.1,
    longitude: 148.54
  },
  {
    postcode: 2866,
    suburb: "Amaroo",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2866,
    suburb: "Boomey",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2866,
    suburb: "Cundumbul",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2866,
    suburb: "Euchareena",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2866,
    suburb: "Garra",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2866,
    suburb: "Larras Lee",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2866,
    suburb: "Molong",
    state: "NSW",
    latitude: -33.18,
    longitude: 148.93
  },
  {
    postcode: 2867,
    suburb: "Baldry",
    state: "NSW",
    latitude: -32.87,
    longitude: 148.5
  },
  {
    postcode: 2867,
    suburb: "Cumnock",
    state: "NSW",
    latitude: -32.87,
    longitude: 148.5
  },
  {
    postcode: 2867,
    suburb: "Eurimbla",
    state: "NSW",
    latitude: -32.87,
    longitude: 148.5
  },
  {
    postcode: 2867,
    suburb: "Loombah",
    state: "NSW",
    latitude: -32.87,
    longitude: 148.5
  },
  {
    postcode: 2867,
    suburb: "Yullundry",
    state: "NSW",
    latitude: -32.87,
    longitude: 148.5
  },
  {
    postcode: 2868,
    suburb: "Bournewood",
    state: "NSW",
    latitude: -32.75,
    longitude: 148.75
  },
  {
    postcode: 2868,
    suburb: "Little River",
    state: "NSW",
    latitude: -32.75,
    longitude: 148.75
  },
  {
    postcode: 2868,
    suburb: "North Yeoval",
    state: "NSW",
    latitude: -32.75,
    longitude: 148.75
  },
  {
    postcode: 2868,
    suburb: "Obley",
    state: "NSW",
    latitude: -32.75,
    longitude: 148.75
  },
  {
    postcode: 2868,
    suburb: "Upper Obley",
    state: "NSW",
    latitude: -32.75,
    longitude: 148.75
  },
  {
    postcode: 2868,
    suburb: "Yeoval",
    state: "NSW",
    latitude: -32.75,
    longitude: 148.75
  },
  {
    postcode: 2869,
    suburb: "Peak Hill",
    state: "NSW",
    latitude: -32.73,
    longitude: 148.19
  },
  {
    postcode: 2869,
    suburb: "Tomingley",
    state: "NSW",
    latitude: -32.73,
    longitude: 148.19
  },
  {
    postcode: 2869,
    suburb: "Trewilga",
    state: "NSW",
    latitude: -32.73,
    longitude: 148.19
  },
  {
    postcode: 2870,
    suburb: "Alectown",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Bumberry",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Cookamidgera",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Cooks Myalls",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Goonumbla",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Mandagery",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Parkes",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2870,
    suburb: "Tichborne",
    state: "NSW",
    latitude: -32.93,
    longitude: 148.26
  },
  {
    postcode: 2871,
    suburb: "Bandon",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Bedgerebong",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Bundaburrah",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Calarie",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Carrawabbity",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Corinella",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Cumbijowa",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Daroobalgie",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Fairholme",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Forbes",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Garema",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Grawlin",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Gunning Gap",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Jemalong",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Mulyandry",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Ooma",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Warroo",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Weelong",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Wirrinya",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2871,
    suburb: "Yarragong",
    state: "NSW",
    latitude: -33.5,
    longitude: 148.31
  },
  {
    postcode: 2873,
    suburb: "Albert",
    state: "NSW",
    latitude: -32.42,
    longitude: 147.51
  },
  {
    postcode: 2873,
    suburb: "Miamley",
    state: "NSW",
    latitude: -32.42,
    longitude: 147.51
  },
  {
    postcode: 2873,
    suburb: "Tottenham",
    state: "NSW",
    latitude: -32.42,
    longitude: 147.51
  },
  {
    postcode: 2874,
    suburb: "Tullamore",
    state: "NSW",
    latitude: -32.63,
    longitude: 147.56
  },
  {
    postcode: 2875,
    suburb: "Bruie Plains",
    state: "NSW",
    latitude: -32.78,
    longitude: 147.86
  },
  {
    postcode: 2875,
    suburb: "Fifield",
    state: "NSW",
    latitude: -32.78,
    longitude: 147.86
  },
  {
    postcode: 2875,
    suburb: "Ootha",
    state: "NSW",
    latitude: -32.78,
    longitude: 147.86
  },
  {
    postcode: 2875,
    suburb: "Trundle",
    state: "NSW",
    latitude: -32.78,
    longitude: 147.86
  },
  {
    postcode: 2875,
    suburb: "Yarrabandai",
    state: "NSW",
    latitude: -32.78,
    longitude: 147.86
  },
  {
    postcode: 2876,
    suburb: "Bogan Gate",
    state: "NSW",
    latitude: -33.11,
    longitude: 147.8
  },
  {
    postcode: 2876,
    suburb: "Gunningbland",
    state: "NSW",
    latitude: -33.11,
    longitude: 147.8
  },
  {
    postcode: 2876,
    suburb: "Nelungaloo",
    state: "NSW",
    latitude: -33.11,
    longitude: 147.8
  },
  {
    postcode: 2877,
    suburb: "Boona Mount",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Condobolin",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Derriwong",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Eremerang",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Euabalong",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Euabalong West",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Kiacatoo",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Mount Hope",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2877,
    suburb: "Mulguthrie",
    state: "NSW",
    latitude: -33.09,
    longitude: 147.15
  },
  {
    postcode: 2878,
    suburb: "Ivanhoe",
    state: "NSW",
    latitude: -32.83,
    longitude: 143.86
  },
  {
    postcode: 2878,
    suburb: "Mossgiel",
    state: "NSW",
    latitude: -32.83,
    longitude: 143.86
  },
  {
    postcode: 2879,
    suburb: "Menindee",
    state: "NSW",
    latitude: -32.26,
    longitude: 142.41
  },
  {
    postcode: 2879,
    suburb: "Sunset Strip",
    state: "NSW",
    latitude: -32.26,
    longitude: 142.41
  },
  {
    postcode: 2880,
    suburb: "Broken Hill",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Broken Hill North",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Broken Hill West",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Broughams Gate",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Fowlers Gap",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Little Topar",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Milparinka",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Mutawintji",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Packsaddle",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Silverton",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "South Broken Hill",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2880,
    suburb: "Tibooburra",
    state: "NSW",
    latitude: -31.96,
    longitude: 141.47
  },
  {
    postcode: 2890,
    suburb: "Australian Defence Forces",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2891,
    suburb: "Sydney Gateway Facility",
    state: "NSW",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2898,
    suburb: "Lord Howe Island",
    state: "NSW",
    latitude: -31.55,
    longitude: 159.08
  },
  {
    postcode: 2899,
    suburb: "Norfolk Island",
    state: "NSW",
    latitude: -36.08,
    longitude: 146.93
  },
  {
    postcode: 2900,
    suburb: "Greenway",
    state: "ACT",
    latitude: -35.42,
    longitude: 149.07
  },
  {
    postcode: 2900,
    suburb: "Tuggeranong",
    state: "ACT",
    latitude: -35.42,
    longitude: 149.07
  },
  {
    postcode: 2901,
    suburb: "Tuggeranong DC",
    state: "ACT",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 2902,
    suburb: "Kambah",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.05
  },
  {
    postcode: 2902,
    suburb: "Kambah Village",
    state: "ACT",
    latitude: -35.38,
    longitude: 149.05
  },
  {
    postcode: 2903,
    suburb: "Erindale Centre",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.1
  },
  {
    postcode: 2903,
    suburb: "Oxley",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.1
  },
  {
    postcode: 2903,
    suburb: "Wanniassa",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.1
  },
  {
    postcode: 2904,
    suburb: "Fadden",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.12
  },
  {
    postcode: 2904,
    suburb: "Gowrie",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.12
  },
  {
    postcode: 2904,
    suburb: "Macarthur",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.12
  },
  {
    postcode: 2904,
    suburb: "Monash",
    state: "ACT",
    latitude: -35.4,
    longitude: 149.12
  },
  {
    postcode: 2905,
    suburb: "Bonython",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2905,
    suburb: "Calwell",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2905,
    suburb: "Chisholm",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2905,
    suburb: "Gilmore",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2905,
    suburb: "Isabella Plains",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2905,
    suburb: "Richardson",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2905,
    suburb: "Theodore",
    state: "ACT",
    latitude: -35.43,
    longitude: 149.08
  },
  {
    postcode: 2906,
    suburb: "Banks",
    state: "ACT",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2906,
    suburb: "Conder",
    state: "ACT",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2906,
    suburb: "Gordon",
    state: "ACT",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2911,
    suburb: "Crace",
    state: "ACT",
    latitude: -35.22,
    longitude: 149.12
  },
  {
    postcode: 2911,
    suburb: "Mitchell",
    state: "ACT",
    latitude: -35.22,
    longitude: 149.12
  },
  {
    postcode: 2912,
    suburb: "Gungahlin",
    state: "ACT",
    latitude: -35.52,
    longitude: 149.08
  },
  {
    postcode: 2913,
    suburb: "Casey",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Franklin",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Ginninderra Village",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Kinlyside",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Ngunnawal",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Nicholls",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Palmerston",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2913,
    suburb: "Taylor",
    state: "ACT",
    latitude: -35.2,
    longitude: 149.13
  },
  {
    postcode: 2914,
    suburb: "Amaroo",
    state: "ACT",
    latitude: -35.17,
    longitude: 149.13
  },
  {
    postcode: 2914,
    suburb: "Bonner",
    state: "ACT",
    latitude: -35.17,
    longitude: 149.13
  },
  {
    postcode: 2914,
    suburb: "Forde",
    state: "ACT",
    latitude: -35.17,
    longitude: 149.13
  },
  {
    postcode: 2914,
    suburb: "Harrison",
    state: "ACT",
    latitude: -35.17,
    longitude: 149.13
  },
  {
    postcode: 2914,
    suburb: "Moncrieff",
    state: "ACT",
    latitude: -35.17,
    longitude: 149.13
  },
  {
    postcode: 3e3,
    suburb: "Melbourne",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.97
  },
  {
    postcode: 3001,
    suburb: "Melbourne",
    state: "VIC",
    latitude: -38.37,
    longitude: 144.77
  },
  {
    postcode: 3002,
    suburb: "East Melbourne",
    state: "VIC",
    latitude: -37.82,
    longitude: 144.99
  },
  {
    postcode: 3003,
    suburb: "West Melbourne",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.94
  },
  {
    postcode: 3004,
    suburb: "Melbourne",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.98
  },
  {
    postcode: 3004,
    suburb: "St Kilda Road Central",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.98
  },
  {
    postcode: 3005,
    suburb: "World Trade Centre",
    state: "VIC",
    latitude: -37.82,
    longitude: 144.95
  },
  {
    postcode: 3006,
    suburb: "South Wharf",
    state: "VIC",
    latitude: -37.82,
    longitude: 144.97
  },
  {
    postcode: 3006,
    suburb: "Southbank",
    state: "VIC",
    latitude: -37.82,
    longitude: 144.97
  },
  {
    postcode: 3008,
    suburb: "Docklands",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.95
  },
  {
    postcode: 3010,
    suburb: "University Of Melbourne",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.96
  },
  {
    postcode: 3011,
    suburb: "Footscray",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.9
  },
  {
    postcode: 3011,
    suburb: "Seddon",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.9
  },
  {
    postcode: 3011,
    suburb: "Seddon West",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.9
  },
  {
    postcode: 3012,
    suburb: "Brooklyn",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.85
  },
  {
    postcode: 3012,
    suburb: "Kingsville",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.85
  },
  {
    postcode: 3012,
    suburb: "Kingsville West",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.85
  },
  {
    postcode: 3012,
    suburb: "Maidstone",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.85
  },
  {
    postcode: 3012,
    suburb: "Tottenham",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.85
  },
  {
    postcode: 3012,
    suburb: "West Footscray",
    state: "VIC",
    latitude: -37.81,
    longitude: 144.85
  },
  {
    postcode: 3013,
    suburb: "Yarraville",
    state: "VIC",
    latitude: -37.82,
    longitude: 144.89
  },
  {
    postcode: 3013,
    suburb: "Yarraville West",
    state: "VIC",
    latitude: -37.82,
    longitude: 144.89
  },
  {
    postcode: 3015,
    suburb: "Newport",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.88
  },
  {
    postcode: 3015,
    suburb: "South Kingsville",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.88
  },
  {
    postcode: 3015,
    suburb: "Spotswood",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.88
  },
  {
    postcode: 3016,
    suburb: "Williamstown",
    state: "VIC",
    latitude: -37.86,
    longitude: 144.9
  },
  {
    postcode: 3016,
    suburb: "Williamstown North",
    state: "VIC",
    latitude: -37.86,
    longitude: 144.9
  },
  {
    postcode: 3018,
    suburb: "Altona",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.83
  },
  {
    postcode: 3018,
    suburb: "Seaholme",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.83
  },
  {
    postcode: 3019,
    suburb: "Braybrook",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.86
  },
  {
    postcode: 3019,
    suburb: "Braybrook North",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.86
  },
  {
    postcode: 3019,
    suburb: "Robinson",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.86
  },
  {
    postcode: 3020,
    suburb: "Albion",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.82
  },
  {
    postcode: 3020,
    suburb: "Glengala",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.82
  },
  {
    postcode: 3020,
    suburb: "Sunshine",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.82
  },
  {
    postcode: 3020,
    suburb: "Sunshine North",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.82
  },
  {
    postcode: 3020,
    suburb: "Sunshine West",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.82
  },
  {
    postcode: 3021,
    suburb: "Albanvale",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.77
  },
  {
    postcode: 3021,
    suburb: "Kealba",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.77
  },
  {
    postcode: 3021,
    suburb: "Kings Park",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.77
  },
  {
    postcode: 3021,
    suburb: "St Albans",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.77
  },
  {
    postcode: 3022,
    suburb: "Ardeer",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.8
  },
  {
    postcode: 3022,
    suburb: "Deer Park East",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.8
  },
  {
    postcode: 3023,
    suburb: "Burnside",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3023,
    suburb: "Burnside Heights",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3023,
    suburb: "Cairnlea",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3023,
    suburb: "Caroline Springs",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3023,
    suburb: "Deer Park",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3023,
    suburb: "Deer Park North",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3023,
    suburb: "Ravenhall",
    state: "VIC",
    latitude: -37.75,
    longitude: 144.75
  },
  {
    postcode: 3024,
    suburb: "Mambourin",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.56
  },
  {
    postcode: 3024,
    suburb: "Mount Cottrell",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.56
  },
  {
    postcode: 3024,
    suburb: "Wyndham Vale",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.56
  },
  {
    postcode: 3025,
    suburb: "Altona East",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.86
  },
  {
    postcode: 3025,
    suburb: "Altona Gate",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.86
  },
  {
    postcode: 3025,
    suburb: "Altona North",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.86
  },
  {
    postcode: 3026,
    suburb: "Laverton North",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.8
  },
  {
    postcode: 3027,
    suburb: "Williams Landing",
    state: "VIC",
    latitude: -37.86,
    longitude: 144.76
  },
  {
    postcode: 3028,
    suburb: "Altona Meadows",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.78
  },
  {
    postcode: 3028,
    suburb: "Laverton",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.78
  },
  {
    postcode: 3028,
    suburb: "Seabrook",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.78
  },
  {
    postcode: 3029,
    suburb: "Hoppers Crossing",
    state: "VIC",
    latitude: -37.88,
    longitude: 144.7
  },
  {
    postcode: 3029,
    suburb: "Tarneit",
    state: "VIC",
    latitude: -37.88,
    longitude: 144.7
  },
  {
    postcode: 3029,
    suburb: "Truganina",
    state: "VIC",
    latitude: -37.88,
    longitude: 144.7
  },
  {
    postcode: 3030,
    suburb: "Cocoroc",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.58
  },
  {
    postcode: 3030,
    suburb: "Derrimut",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.58
  },
  {
    postcode: 3030,
    suburb: "Point Cook",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.58
  },
  {
    postcode: 3030,
    suburb: "Quandong",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.58
  },
  {
    postcode: 3030,
    suburb: "Werribee",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.58
  },
  {
    postcode: 3030,
    suburb: "Werribee South",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.58
  },
  {
    postcode: 3031,
    suburb: "Flemington",
    state: "VIC",
    latitude: -37.79,
    longitude: 144.93
  },
  {
    postcode: 3031,
    suburb: "Kensington",
    state: "VIC",
    latitude: -37.79,
    longitude: 144.93
  },
  {
    postcode: 3032,
    suburb: "Ascot Vale",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.92
  },
  {
    postcode: 3032,
    suburb: "Highpoint City",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.92
  },
  {
    postcode: 3032,
    suburb: "Maribyrnong",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.92
  },
  {
    postcode: 3032,
    suburb: "Travancore",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.92
  },
  {
    postcode: 3033,
    suburb: "Keilor East",
    state: "VIC",
    latitude: -37.74,
    longitude: 144.8
  },
  {
    postcode: 3034,
    suburb: "Avondale Heights",
    state: "VIC",
    latitude: -37.74,
    longitude: 144.82
  },
  {
    postcode: 3036,
    suburb: "Keilor",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.83
  },
  {
    postcode: 3036,
    suburb: "Keilor North",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.83
  },
  {
    postcode: 3037,
    suburb: "Calder Park",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.78
  },
  {
    postcode: 3037,
    suburb: "Delahey",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.78
  },
  {
    postcode: 3037,
    suburb: "Hillside",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.78
  },
  {
    postcode: 3037,
    suburb: "Sydenham",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.78
  },
  {
    postcode: 3037,
    suburb: "Taylors Hill",
    state: "VIC",
    latitude: -37.72,
    longitude: 144.78
  },
  {
    postcode: 3038,
    suburb: "Keilor Downs",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.81
  },
  {
    postcode: 3038,
    suburb: "Keilor Lodge",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.81
  },
  {
    postcode: 3038,
    suburb: "Taylors Lakes",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.81
  },
  {
    postcode: 3038,
    suburb: "Watergardens",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.81
  },
  {
    postcode: 3039,
    suburb: "Moonee Ponds",
    state: "VIC",
    latitude: -37.77,
    longitude: 144.92
  },
  {
    postcode: 3040,
    suburb: "Aberfeldie",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.9
  },
  {
    postcode: 3040,
    suburb: "Essendon",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.9
  },
  {
    postcode: 3040,
    suburb: "Essendon West",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.9
  },
  {
    postcode: 3041,
    suburb: "Essendon Fields",
    state: "VIC",
    latitude: -37.74,
    longitude: 144.91
  },
  {
    postcode: 3041,
    suburb: "Essendon North",
    state: "VIC",
    latitude: -37.74,
    longitude: 144.91
  },
  {
    postcode: 3041,
    suburb: "Strathmore",
    state: "VIC",
    latitude: -37.74,
    longitude: 144.91
  },
  {
    postcode: 3041,
    suburb: "Strathmore Heights",
    state: "VIC",
    latitude: -37.74,
    longitude: 144.91
  },
  {
    postcode: 3042,
    suburb: "Airport West",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.89
  },
  {
    postcode: 3042,
    suburb: "Keilor Park",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.89
  },
  {
    postcode: 3042,
    suburb: "Niddrie",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.89
  },
  {
    postcode: 3043,
    suburb: "Gladstone Park",
    state: "VIC",
    latitude: -37.69,
    longitude: 144.88
  },
  {
    postcode: 3043,
    suburb: "Gowanbrae",
    state: "VIC",
    latitude: -37.69,
    longitude: 144.88
  },
  {
    postcode: 3043,
    suburb: "Tullamarine",
    state: "VIC",
    latitude: -37.69,
    longitude: 144.88
  },
  {
    postcode: 3044,
    suburb: "Pascoe Vale",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.94
  },
  {
    postcode: 3044,
    suburb: "Pascoe Vale South",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.94
  },
  {
    postcode: 3045,
    suburb: "Melbourne Airport",
    state: "VIC",
    latitude: -37.67,
    longitude: 144.83
  },
  {
    postcode: 3046,
    suburb: "Glenroy",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.92
  },
  {
    postcode: 3046,
    suburb: "Hadfield",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.92
  },
  {
    postcode: 3046,
    suburb: "Oak Park",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.92
  },
  {
    postcode: 3047,
    suburb: "Broadmeadows",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.92
  },
  {
    postcode: 3047,
    suburb: "Dallas",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.92
  },
  {
    postcode: 3047,
    suburb: "Jacana",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.92
  },
  {
    postcode: 3048,
    suburb: "Coolaroo",
    state: "VIC",
    latitude: -37.65,
    longitude: 144.93
  },
  {
    postcode: 3048,
    suburb: "Meadow Heights",
    state: "VIC",
    latitude: -37.65,
    longitude: 144.93
  },
  {
    postcode: 3049,
    suburb: "Attwood",
    state: "VIC",
    latitude: -37.67,
    longitude: 144.89
  },
  {
    postcode: 3049,
    suburb: "Westmeadows",
    state: "VIC",
    latitude: -37.67,
    longitude: 144.89
  },
  {
    postcode: 3050,
    suburb: "Royal Melbourne Hospital",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.96
  },
  {
    postcode: 3051,
    suburb: "Hotham Hill",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.06
  },
  {
    postcode: 3051,
    suburb: "North Melbourne",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.06
  },
  {
    postcode: 3052,
    suburb: "Melbourne University",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.96
  },
  {
    postcode: 3052,
    suburb: "Parkville",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.96
  },
  {
    postcode: 3053,
    suburb: "Carlton",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.97
  },
  {
    postcode: 3053,
    suburb: "Carlton South",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.97
  },
  {
    postcode: 3054,
    suburb: "Carlton North",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.97
  },
  {
    postcode: 3054,
    suburb: "Princes Hill",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.97
  },
  {
    postcode: 3055,
    suburb: "Brunswick South",
    state: "VIC",
    latitude: -37.77,
    longitude: 144.94
  },
  {
    postcode: 3055,
    suburb: "Brunswick West",
    state: "VIC",
    latitude: -37.77,
    longitude: 144.94
  },
  {
    postcode: 3055,
    suburb: "Moonee Vale",
    state: "VIC",
    latitude: -37.77,
    longitude: 144.94
  },
  {
    postcode: 3055,
    suburb: "Moreland West",
    state: "VIC",
    latitude: -37.77,
    longitude: 144.94
  },
  {
    postcode: 3056,
    suburb: "Brunswick",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.94
  },
  {
    postcode: 3056,
    suburb: "Brunswick Lower",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.94
  },
  {
    postcode: 3056,
    suburb: "Brunswick North",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.94
  },
  {
    postcode: 3057,
    suburb: "Brunswick East",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.98
  },
  {
    postcode: 3057,
    suburb: "Lygon Street North",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.98
  },
  {
    postcode: 3057,
    suburb: "Sumner",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.98
  },
  {
    postcode: 3058,
    suburb: "Batman",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.96
  },
  {
    postcode: 3058,
    suburb: "Coburg",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.96
  },
  {
    postcode: 3058,
    suburb: "Coburg North",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.96
  },
  {
    postcode: 3058,
    suburb: "Merlynston",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.96
  },
  {
    postcode: 3058,
    suburb: "Moreland",
    state: "VIC",
    latitude: -37.73,
    longitude: 144.96
  },
  {
    postcode: 3059,
    suburb: "Greenvale",
    state: "VIC",
    latitude: -37.64,
    longitude: 144.89
  },
  {
    postcode: 3060,
    suburb: "Fawkner",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.9
  },
  {
    postcode: 3060,
    suburb: "Fawkner East",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.9
  },
  {
    postcode: 3060,
    suburb: "Fawkner North",
    state: "VIC",
    latitude: -37.76,
    longitude: 144.9
  },
  {
    postcode: 3061,
    suburb: "Campbellfield",
    state: "VIC",
    latitude: -37.64,
    longitude: 144.95
  },
  {
    postcode: 3062,
    suburb: "Somerton",
    state: "VIC",
    latitude: -37.64,
    longitude: 144.94
  },
  {
    postcode: 3063,
    suburb: "Oaklands Junction",
    state: "VIC",
    latitude: -37.63,
    longitude: 144.84
  },
  {
    postcode: 3063,
    suburb: "Yuroke",
    state: "VIC",
    latitude: -37.63,
    longitude: 144.84
  },
  {
    postcode: 3064,
    suburb: "Craigieburn",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.94
  },
  {
    postcode: 3064,
    suburb: "Donnybrook",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.94
  },
  {
    postcode: 3064,
    suburb: "Kalkallo",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.94
  },
  {
    postcode: 3064,
    suburb: "Mickleham",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.94
  },
  {
    postcode: 3064,
    suburb: "Roxburgh Park",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.94
  },
  {
    postcode: 3065,
    suburb: "Fitzroy",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.98
  },
  {
    postcode: 3066,
    suburb: "Collingwood",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.98
  },
  {
    postcode: 3066,
    suburb: "Collingwood North",
    state: "VIC",
    latitude: -37.8,
    longitude: 144.98
  },
  {
    postcode: 3067,
    suburb: "Abbotsford",
    state: "VIC",
    latitude: -37.8,
    longitude: 145
  },
  {
    postcode: 3068,
    suburb: "Clifton Hill",
    state: "VIC",
    latitude: -37.79,
    longitude: 144.99
  },
  {
    postcode: 3068,
    suburb: "Fitzroy North",
    state: "VIC",
    latitude: -37.79,
    longitude: 144.99
  },
  {
    postcode: 3070,
    suburb: "Northcote",
    state: "VIC",
    latitude: -37.77,
    longitude: 145
  },
  {
    postcode: 3070,
    suburb: "Northcote South",
    state: "VIC",
    latitude: -37.77,
    longitude: 145
  },
  {
    postcode: 3071,
    suburb: "Thornbury",
    state: "VIC",
    latitude: -37.76,
    longitude: 145
  },
  {
    postcode: 3072,
    suburb: "Gilberton",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3072,
    suburb: "Northland Centre",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3072,
    suburb: "Preston",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3072,
    suburb: "Preston Lower",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3072,
    suburb: "Preston South",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3072,
    suburb: "Preston West",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3072,
    suburb: "Regent West",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.03
  },
  {
    postcode: 3073,
    suburb: "Keon Park",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.01
  },
  {
    postcode: 3073,
    suburb: "Reservoir",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.01
  },
  {
    postcode: 3073,
    suburb: "Reservoir East",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.01
  },
  {
    postcode: 3073,
    suburb: "Reservoir North",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.01
  },
  {
    postcode: 3073,
    suburb: "Reservoir South",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.01
  },
  {
    postcode: 3074,
    suburb: "Thomastown",
    state: "VIC",
    latitude: -37.68,
    longitude: 145.01
  },
  {
    postcode: 3075,
    suburb: "Lalor",
    state: "VIC",
    latitude: -37.67,
    longitude: 145.02
  },
  {
    postcode: 3075,
    suburb: "Lalor Plaza",
    state: "VIC",
    latitude: -37.67,
    longitude: 145.02
  },
  {
    postcode: 3076,
    suburb: "Epping",
    state: "VIC",
    latitude: -37.64,
    longitude: 145.01
  },
  {
    postcode: 3076,
    suburb: "Epping DC",
    state: "VIC",
    latitude: -37.64,
    longitude: 145.01
  },
  {
    postcode: 3078,
    suburb: "Alphington",
    state: "VIC",
    latitude: -37.78,
    longitude: 145.03
  },
  {
    postcode: 3078,
    suburb: "Fairfield",
    state: "VIC",
    latitude: -37.78,
    longitude: 145.03
  },
  {
    postcode: 3079,
    suburb: "Ivanhoe",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.04
  },
  {
    postcode: 3079,
    suburb: "Ivanhoe East",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.04
  },
  {
    postcode: 3079,
    suburb: "Ivanhoe North",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.04
  },
  {
    postcode: 3081,
    suburb: "Bellfield",
    state: "VIC",
    latitude: -37.75,
    longitude: 145.05
  },
  {
    postcode: 3081,
    suburb: "Heidelberg Heights",
    state: "VIC",
    latitude: -37.75,
    longitude: 145.05
  },
  {
    postcode: 3081,
    suburb: "Heidelberg Rgh",
    state: "VIC",
    latitude: -37.75,
    longitude: 145.05
  },
  {
    postcode: 3081,
    suburb: "Heidelberg West",
    state: "VIC",
    latitude: -37.75,
    longitude: 145.05
  },
  {
    postcode: 3082,
    suburb: "Mill Park",
    state: "VIC",
    latitude: -37.67,
    longitude: 145.06
  },
  {
    postcode: 3083,
    suburb: "Bundoora",
    state: "VIC",
    latitude: -37.7,
    longitude: 145.07
  },
  {
    postcode: 3083,
    suburb: "Kingsbury",
    state: "VIC",
    latitude: -37.7,
    longitude: 145.07
  },
  {
    postcode: 3083,
    suburb: "La Trobe University",
    state: "VIC",
    latitude: -37.7,
    longitude: 145.07
  },
  {
    postcode: 3084,
    suburb: "Banyule",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.09
  },
  {
    postcode: 3084,
    suburb: "Eaglemont",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.09
  },
  {
    postcode: 3084,
    suburb: "Heidelberg",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.09
  },
  {
    postcode: 3084,
    suburb: "Rosanna",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.09
  },
  {
    postcode: 3084,
    suburb: "Viewbank",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.09
  },
  {
    postcode: 3085,
    suburb: "Macleod",
    state: "VIC",
    latitude: -37.73,
    longitude: 145.07
  },
  {
    postcode: 3085,
    suburb: "Macleod West",
    state: "VIC",
    latitude: -37.73,
    longitude: 145.07
  },
  {
    postcode: 3085,
    suburb: "Yallambie",
    state: "VIC",
    latitude: -37.73,
    longitude: 145.07
  },
  {
    postcode: 3086,
    suburb: "La Trobe University",
    state: "VIC",
    latitude: -37.72,
    longitude: 145.05
  },
  {
    postcode: 3087,
    suburb: "Watsonia",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.08
  },
  {
    postcode: 3087,
    suburb: "Watsonia North",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.08
  },
  {
    postcode: 3088,
    suburb: "Briar Hill",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.12
  },
  {
    postcode: 3088,
    suburb: "Greensborough",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.12
  },
  {
    postcode: 3088,
    suburb: "St Helena",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.12
  },
  {
    postcode: 3089,
    suburb: "Diamond Creek",
    state: "VIC",
    latitude: -37.64,
    longitude: 145.22
  },
  {
    postcode: 3090,
    suburb: "Plenty",
    state: "VIC",
    latitude: -37.67,
    longitude: 145.12
  },
  {
    postcode: 3091,
    suburb: "Yarrambat",
    state: "VIC",
    latitude: -37.64,
    longitude: 145.13
  },
  {
    postcode: 3093,
    suburb: "Lower Plenty",
    state: "VIC",
    latitude: -37.73,
    longitude: 145.09
  },
  {
    postcode: 3094,
    suburb: "Montmorency",
    state: "VIC",
    latitude: -37.72,
    longitude: 145.12
  },
  {
    postcode: 3095,
    suburb: "Eltham",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.15
  },
  {
    postcode: 3095,
    suburb: "Eltham North",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.15
  },
  {
    postcode: 3095,
    suburb: "Research",
    state: "VIC",
    latitude: -37.71,
    longitude: 145.15
  },
  {
    postcode: 3096,
    suburb: "Wattle Glen",
    state: "VIC",
    latitude: -37.67,
    longitude: 145.19
  },
  {
    postcode: 3097,
    suburb: "Bend Of Islands",
    state: "VIC",
    latitude: -37.7,
    longitude: 145.28
  },
  {
    postcode: 3097,
    suburb: "Kangaroo Ground",
    state: "VIC",
    latitude: -37.7,
    longitude: 145.28
  },
  {
    postcode: 3097,
    suburb: "Watsons Creek",
    state: "VIC",
    latitude: -37.7,
    longitude: 145.28
  },
  {
    postcode: 3099,
    suburb: "Arthurs Creek",
    state: "VIC",
    latitude: -37.59,
    longitude: 145.22
  },
  {
    postcode: 3099,
    suburb: "Cottles Bridge",
    state: "VIC",
    latitude: -37.59,
    longitude: 145.22
  },
  {
    postcode: 3099,
    suburb: "Hurstbridge",
    state: "VIC",
    latitude: -37.59,
    longitude: 145.22
  },
  {
    postcode: 3099,
    suburb: "Nutfield",
    state: "VIC",
    latitude: -37.59,
    longitude: 145.22
  },
  {
    postcode: 3099,
    suburb: "Strathewen",
    state: "VIC",
    latitude: -37.59,
    longitude: 145.22
  },
  {
    postcode: 3101,
    suburb: "Cotham",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.04
  },
  {
    postcode: 3101,
    suburb: "Kew",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.04
  },
  {
    postcode: 3102,
    suburb: "Kew East",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.05
  },
  {
    postcode: 3103,
    suburb: "Balwyn",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.08
  },
  {
    postcode: 3103,
    suburb: "Balwyn East",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.08
  },
  {
    postcode: 3104,
    suburb: "Balwyn North",
    state: "VIC",
    latitude: -37.79,
    longitude: 145.07
  },
  {
    postcode: 3104,
    suburb: "Greythorn",
    state: "VIC",
    latitude: -37.79,
    longitude: 145.07
  },
  {
    postcode: 3105,
    suburb: "Bulleen",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.08
  },
  {
    postcode: 3105,
    suburb: "Bulleen South",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.08
  },
  {
    postcode: 3106,
    suburb: "Templestowe",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.12
  },
  {
    postcode: 3107,
    suburb: "Templestowe Lower",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.1
  },
  {
    postcode: 3108,
    suburb: "Doncaster",
    state: "VIC",
    latitude: -37.78,
    longitude: 145.12
  },
  {
    postcode: 3109,
    suburb: "Doncaster East",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.19
  },
  {
    postcode: 3109,
    suburb: "Doncaster Heights",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.19
  },
  {
    postcode: 3109,
    suburb: "The Pines",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.19
  },
  {
    postcode: 3109,
    suburb: "Tunstall Square Po",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.19
  },
  {
    postcode: 3110,
    suburb: "Nunawading BC",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3111,
    suburb: "Donvale",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.47
  },
  {
    postcode: 3113,
    suburb: "North Warrandyte",
    state: "VIC",
    latitude: -37.73,
    longitude: 145.22
  },
  {
    postcode: 3113,
    suburb: "Warrandyte",
    state: "VIC",
    latitude: -37.73,
    longitude: 145.22
  },
  {
    postcode: 3114,
    suburb: "Park Orchards",
    state: "VIC",
    latitude: -37.78,
    longitude: 145.21
  },
  {
    postcode: 3115,
    suburb: "Wonga Park",
    state: "VIC",
    latitude: -37.74,
    longitude: 145.27
  },
  {
    postcode: 3116,
    suburb: "Chirnside Park",
    state: "VIC",
    latitude: -37.75,
    longitude: 145.33
  },
  {
    postcode: 3121,
    suburb: "Burnley",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3121,
    suburb: "Burnley North",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3121,
    suburb: "Cremorne",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3121,
    suburb: "Richmond",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3121,
    suburb: "Richmond East",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3121,
    suburb: "Richmond North",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3121,
    suburb: "Richmond South",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3122,
    suburb: "Auburn South",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.05
  },
  {
    postcode: 3122,
    suburb: "Glenferrie South",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.05
  },
  {
    postcode: 3122,
    suburb: "Hawthorn",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.05
  },
  {
    postcode: 3122,
    suburb: "Hawthorn North",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.05
  },
  {
    postcode: 3122,
    suburb: "Hawthorn West",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.05
  },
  {
    postcode: 3123,
    suburb: "Auburn",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.04
  },
  {
    postcode: 3123,
    suburb: "Hawthorn East",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.04
  },
  {
    postcode: 3124,
    suburb: "Camberwell",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.06
  },
  {
    postcode: 3124,
    suburb: "Camberwell North",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.06
  },
  {
    postcode: 3124,
    suburb: "Camberwell South",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.06
  },
  {
    postcode: 3124,
    suburb: "Camberwell West",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.06
  },
  {
    postcode: 3124,
    suburb: "Hartwell",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.06
  },
  {
    postcode: 3124,
    suburb: "Middle Camberwell",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.06
  },
  {
    postcode: 3125,
    suburb: "Bennettswood",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.12
  },
  {
    postcode: 3125,
    suburb: "Burwood",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.12
  },
  {
    postcode: 3125,
    suburb: "Surrey Hills South",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.12
  },
  {
    postcode: 3126,
    suburb: "Camberwell East",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.09
  },
  {
    postcode: 3126,
    suburb: "Canterbury",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.09
  },
  {
    postcode: 3127,
    suburb: "Mont Albert",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.1
  },
  {
    postcode: 3127,
    suburb: "Surrey Hills",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.1
  },
  {
    postcode: 3127,
    suburb: "Surrey Hills North",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.1
  },
  {
    postcode: 3128,
    suburb: "Box Hill",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.12
  },
  {
    postcode: 3128,
    suburb: "Box Hill Central",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.12
  },
  {
    postcode: 3128,
    suburb: "Box Hill South",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.12
  },
  {
    postcode: 3128,
    suburb: "Houston",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.12
  },
  {
    postcode: 3128,
    suburb: "Wattle Park",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.12
  },
  {
    postcode: 3129,
    suburb: "Box Hill North",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.13
  },
  {
    postcode: 3129,
    suburb: "Kerrimuir",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.13
  },
  {
    postcode: 3129,
    suburb: "Mont Albert North",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.13
  },
  {
    postcode: 3130,
    suburb: "Blackburn",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.15
  },
  {
    postcode: 3130,
    suburb: "Blackburn North",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.15
  },
  {
    postcode: 3130,
    suburb: "Blackburn South",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.15
  },
  {
    postcode: 3130,
    suburb: "Laburnum",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.15
  },
  {
    postcode: 3131,
    suburb: "Brentford Square",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.18
  },
  {
    postcode: 3131,
    suburb: "Forest Hill",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.18
  },
  {
    postcode: 3131,
    suburb: "Nunawading",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.18
  },
  {
    postcode: 3132,
    suburb: "Mitcham",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.19
  },
  {
    postcode: 3132,
    suburb: "Mitcham North",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.19
  },
  {
    postcode: 3132,
    suburb: "Rangeview",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.19
  },
  {
    postcode: 3133,
    suburb: "Vermont",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.19
  },
  {
    postcode: 3133,
    suburb: "Vermont South",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.19
  },
  {
    postcode: 3134,
    suburb: "Heathwood",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.23
  },
  {
    postcode: 3134,
    suburb: "Ringwood",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.23
  },
  {
    postcode: 3134,
    suburb: "Ringwood North",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.23
  },
  {
    postcode: 3134,
    suburb: "Warrandyte South",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.23
  },
  {
    postcode: 3134,
    suburb: "Warranwood",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.23
  },
  {
    postcode: 3135,
    suburb: "Bedford Road",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.25
  },
  {
    postcode: 3135,
    suburb: "Heathmont",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.25
  },
  {
    postcode: 3135,
    suburb: "Ringwood East",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.25
  },
  {
    postcode: 3136,
    suburb: "Croydon",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.28
  },
  {
    postcode: 3136,
    suburb: "Croydon Hills",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.28
  },
  {
    postcode: 3136,
    suburb: "Croydon North",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.28
  },
  {
    postcode: 3136,
    suburb: "Croydon South",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.28
  },
  {
    postcode: 3137,
    suburb: "Kilsyth",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.31
  },
  {
    postcode: 3137,
    suburb: "Kilsyth South",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.31
  },
  {
    postcode: 3138,
    suburb: "Mooroolbark",
    state: "VIC",
    latitude: -37.77,
    longitude: 145.33
  },
  {
    postcode: 3139,
    suburb: "Beenak",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Don Valley",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Hoddles Creek",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Launching Place",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Seville",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Seville East",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Wandin East",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Wandin North",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Woori Yallock",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3139,
    suburb: "Yellingbo",
    state: "VIC",
    latitude: -37.8,
    longitude: 145.54
  },
  {
    postcode: 3140,
    suburb: "Lilydale",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.35
  },
  {
    postcode: 3141,
    suburb: "Chapel Street North",
    state: "VIC",
    latitude: -36.99,
    longitude: 144.06
  },
  {
    postcode: 3141,
    suburb: "Domain Road Po",
    state: "VIC",
    latitude: -36.99,
    longitude: 144.06
  },
  {
    postcode: 3141,
    suburb: "South Yarra",
    state: "VIC",
    latitude: -36.99,
    longitude: 144.06
  },
  {
    postcode: 3142,
    suburb: "Hawksburn",
    state: "VIC",
    latitude: -37.84,
    longitude: 145
  },
  {
    postcode: 3142,
    suburb: "Toorak",
    state: "VIC",
    latitude: -37.84,
    longitude: 145
  },
  {
    postcode: 3143,
    suburb: "Armadale",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.02
  },
  {
    postcode: 3143,
    suburb: "Armadale North",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.02
  },
  {
    postcode: 3144,
    suburb: "Kooyong",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.03
  },
  {
    postcode: 3144,
    suburb: "Malvern",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.03
  },
  {
    postcode: 3144,
    suburb: "Malvern North",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.03
  },
  {
    postcode: 3145,
    suburb: "Caulfield East",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.04
  },
  {
    postcode: 3145,
    suburb: "Central Park",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.04
  },
  {
    postcode: 3145,
    suburb: "Darling",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.04
  },
  {
    postcode: 3145,
    suburb: "Darling South",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.04
  },
  {
    postcode: 3145,
    suburb: "Malvern East",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.04
  },
  {
    postcode: 3145,
    suburb: "Wattletree Road Po",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.04
  },
  {
    postcode: 3146,
    suburb: "Glen Iris",
    state: "VIC",
    latitude: -37.85,
    longitude: 145.07
  },
  {
    postcode: 3147,
    suburb: "Ashburton",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.08
  },
  {
    postcode: 3147,
    suburb: "Ashwood",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.08
  },
  {
    postcode: 3148,
    suburb: "Chadstone",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.08
  },
  {
    postcode: 3148,
    suburb: "Chadstone Centre",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.08
  },
  {
    postcode: 3148,
    suburb: "Holmesglen",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.08
  },
  {
    postcode: 3148,
    suburb: "Jordanville",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.08
  },
  {
    postcode: 3149,
    suburb: "Mount Waverley",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.13
  },
  {
    postcode: 3149,
    suburb: "Pinewood",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.13
  },
  {
    postcode: 3149,
    suburb: "Syndal",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.13
  },
  {
    postcode: 3150,
    suburb: "Brandon Park",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.17
  },
  {
    postcode: 3150,
    suburb: "Glen Waverley",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.17
  },
  {
    postcode: 3150,
    suburb: "Wheelers Hill",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.17
  },
  {
    postcode: 3151,
    suburb: "Burwood East",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.14
  },
  {
    postcode: 3151,
    suburb: "Burwood Heights",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.14
  },
  {
    postcode: 3152,
    suburb: "Knox City Centre",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.24
  },
  {
    postcode: 3152,
    suburb: "Studfield",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.24
  },
  {
    postcode: 3152,
    suburb: "Wantirna",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.24
  },
  {
    postcode: 3152,
    suburb: "Wantirna South",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.24
  },
  {
    postcode: 3153,
    suburb: "Bayswater",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.27
  },
  {
    postcode: 3153,
    suburb: "Bayswater North",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.27
  },
  {
    postcode: 3154,
    suburb: "The Basin",
    state: "VIC",
    latitude: -37.85,
    longitude: 145.31
  },
  {
    postcode: 3155,
    suburb: "Boronia",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.28
  },
  {
    postcode: 3156,
    suburb: "Ferntree Gully",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.3
  },
  {
    postcode: 3156,
    suburb: "Lysterfield",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.3
  },
  {
    postcode: 3156,
    suburb: "Lysterfield South",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.3
  },
  {
    postcode: 3156,
    suburb: "Mountain Gate",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.3
  },
  {
    postcode: 3156,
    suburb: "Upper Ferntree Gully",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.3
  },
  {
    postcode: 3158,
    suburb: "Upwey",
    state: "VIC",
    latitude: -37.9,
    longitude: 145.33
  },
  {
    postcode: 3159,
    suburb: "Menzies Creek",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.4
  },
  {
    postcode: 3159,
    suburb: "Selby",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.4
  },
  {
    postcode: 3160,
    suburb: "Belgrave",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.36
  },
  {
    postcode: 3160,
    suburb: "Belgrave Heights",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.36
  },
  {
    postcode: 3160,
    suburb: "Belgrave South",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.36
  },
  {
    postcode: 3160,
    suburb: "Tecoma",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.36
  },
  {
    postcode: 3161,
    suburb: "Caulfield Junction",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.31
  },
  {
    postcode: 3161,
    suburb: "Caulfield North",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.31
  },
  {
    postcode: 3162,
    suburb: "Caulfield",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.03
  },
  {
    postcode: 3162,
    suburb: "Caulfield South",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.03
  },
  {
    postcode: 3162,
    suburb: "Hopetoun Gardens",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.03
  },
  {
    postcode: 3163,
    suburb: "Booran Road Po",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.06
  },
  {
    postcode: 3163,
    suburb: "Carnegie",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.06
  },
  {
    postcode: 3163,
    suburb: "Glen Huntly",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.06
  },
  {
    postcode: 3163,
    suburb: "Murrumbeena",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.06
  },
  {
    postcode: 3164,
    suburb: "Dandenong South",
    state: "VIC",
    latitude: -38.02,
    longitude: 145.24
  },
  {
    postcode: 3165,
    suburb: "Bentleigh East",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.06
  },
  {
    postcode: 3165,
    suburb: "Coatesville",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.06
  },
  {
    postcode: 3166,
    suburb: "Hughesdale",
    state: "VIC",
    latitude: -37.9,
    longitude: 145.08
  },
  {
    postcode: 3166,
    suburb: "Huntingdale",
    state: "VIC",
    latitude: -37.9,
    longitude: 145.08
  },
  {
    postcode: 3166,
    suburb: "Oakleigh",
    state: "VIC",
    latitude: -37.9,
    longitude: 145.08
  },
  {
    postcode: 3166,
    suburb: "Oakleigh East",
    state: "VIC",
    latitude: -37.9,
    longitude: 145.08
  },
  {
    postcode: 3167,
    suburb: "Oakleigh South",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.1
  },
  {
    postcode: 3168,
    suburb: "Clayton",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.12
  },
  {
    postcode: 3168,
    suburb: "Notting Hill",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.12
  },
  {
    postcode: 3169,
    suburb: "Clarinda",
    state: "VIC",
    latitude: -37.94,
    longitude: 145.1
  },
  {
    postcode: 3169,
    suburb: "Clayton South",
    state: "VIC",
    latitude: -37.94,
    longitude: 145.1
  },
  {
    postcode: 3170,
    suburb: "Mulgrave",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.1
  },
  {
    postcode: 3170,
    suburb: "Waverley Gardens",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.1
  },
  {
    postcode: 3171,
    suburb: "Sandown Village",
    state: "VIC",
    latitude: -37.95,
    longitude: 145.16
  },
  {
    postcode: 3171,
    suburb: "Springvale",
    state: "VIC",
    latitude: -37.95,
    longitude: 145.16
  },
  {
    postcode: 3172,
    suburb: "Dingley Village",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.12
  },
  {
    postcode: 3172,
    suburb: "Springvale South",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.12
  },
  {
    postcode: 3173,
    suburb: "Keysborough",
    state: "VIC",
    latitude: -37.99,
    longitude: 145.15
  },
  {
    postcode: 3174,
    suburb: "Noble Park",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.18
  },
  {
    postcode: 3174,
    suburb: "Noble Park East",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.18
  },
  {
    postcode: 3174,
    suburb: "Noble Park North",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Bangholme",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Dandenong",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Dandenong East",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Dandenong North",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Dandenong Plaza",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Dandenong South",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3175,
    suburb: "Dunearn",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.18
  },
  {
    postcode: 3176,
    suburb: "Scoresby BC",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3177,
    suburb: "Doveton",
    state: "VIC",
    latitude: -38,
    longitude: 145.24
  },
  {
    postcode: 3177,
    suburb: "Eumemmerring",
    state: "VIC",
    latitude: -38,
    longitude: 145.24
  },
  {
    postcode: 3178,
    suburb: "Rowville",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.24
  },
  {
    postcode: 3179,
    suburb: "Scoresby",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.26
  },
  {
    postcode: 3180,
    suburb: "Knoxfield",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.25
  },
  {
    postcode: 3181,
    suburb: "Prahran",
    state: "VIC",
    latitude: -37.85,
    longitude: 144.99
  },
  {
    postcode: 3181,
    suburb: "Prahran East",
    state: "VIC",
    latitude: -37.85,
    longitude: 144.99
  },
  {
    postcode: 3181,
    suburb: "Windsor",
    state: "VIC",
    latitude: -37.85,
    longitude: 144.99
  },
  {
    postcode: 3182,
    suburb: "St Kilda",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.98
  },
  {
    postcode: 3182,
    suburb: "St Kilda South",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.98
  },
  {
    postcode: 3182,
    suburb: "St Kilda West",
    state: "VIC",
    latitude: -37.87,
    longitude: 144.98
  },
  {
    postcode: 3183,
    suburb: "Balaclava",
    state: "VIC",
    latitude: -37.87,
    longitude: 145
  },
  {
    postcode: 3183,
    suburb: "St Kilda East",
    state: "VIC",
    latitude: -37.87,
    longitude: 145
  },
  {
    postcode: 3184,
    suburb: "Brighton Road",
    state: "VIC",
    latitude: -37.88,
    longitude: 145
  },
  {
    postcode: 3184,
    suburb: "Elwood",
    state: "VIC",
    latitude: -37.88,
    longitude: 145
  },
  {
    postcode: 3185,
    suburb: "Elsternwick",
    state: "VIC",
    latitude: -37.88,
    longitude: 145
  },
  {
    postcode: 3185,
    suburb: "Gardenvale",
    state: "VIC",
    latitude: -37.88,
    longitude: 145
  },
  {
    postcode: 3185,
    suburb: "Ripponlea",
    state: "VIC",
    latitude: -37.88,
    longitude: 145
  },
  {
    postcode: 3186,
    suburb: "Brighton",
    state: "VIC",
    latitude: -37.91,
    longitude: 144.99
  },
  {
    postcode: 3186,
    suburb: "Brighton North",
    state: "VIC",
    latitude: -37.91,
    longitude: 144.99
  },
  {
    postcode: 3186,
    suburb: "Dendy",
    state: "VIC",
    latitude: -37.91,
    longitude: 144.99
  },
  {
    postcode: 3186,
    suburb: "Were Street Po",
    state: "VIC",
    latitude: -37.91,
    longitude: 144.99
  },
  {
    postcode: 3187,
    suburb: "Brighton East",
    state: "VIC",
    latitude: -37.9,
    longitude: 145
  },
  {
    postcode: 3187,
    suburb: "North Road",
    state: "VIC",
    latitude: -37.9,
    longitude: 145
  },
  {
    postcode: 3188,
    suburb: "Hampton",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.03
  },
  {
    postcode: 3188,
    suburb: "Hampton East",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.03
  },
  {
    postcode: 3188,
    suburb: "Hampton North",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.03
  },
  {
    postcode: 3189,
    suburb: "Moorabbin",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.04
  },
  {
    postcode: 3189,
    suburb: "Moorabbin East",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.04
  },
  {
    postcode: 3189,
    suburb: "Wishart",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.04
  },
  {
    postcode: 3190,
    suburb: "Highett",
    state: "VIC",
    latitude: -37.95,
    longitude: 145.03
  },
  {
    postcode: 3191,
    suburb: "Sandringham",
    state: "VIC",
    latitude: -37.95,
    longitude: 145.01
  },
  {
    postcode: 3192,
    suburb: "Cheltenham",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.06
  },
  {
    postcode: 3192,
    suburb: "Cheltenham East",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.06
  },
  {
    postcode: 3192,
    suburb: "Cheltenham North",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.06
  },
  {
    postcode: 3192,
    suburb: "Southland Centre",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.06
  },
  {
    postcode: 3193,
    suburb: "Beaumaris",
    state: "VIC",
    latitude: -37.99,
    longitude: 145.03
  },
  {
    postcode: 3193,
    suburb: "Black Rock",
    state: "VIC",
    latitude: -37.99,
    longitude: 145.03
  },
  {
    postcode: 3193,
    suburb: "Black Rock North",
    state: "VIC",
    latitude: -37.99,
    longitude: 145.03
  },
  {
    postcode: 3193,
    suburb: "Cromer",
    state: "VIC",
    latitude: -37.99,
    longitude: 145.03
  },
  {
    postcode: 3194,
    suburb: "Mentone",
    state: "VIC",
    latitude: -37.98,
    longitude: 145.06
  },
  {
    postcode: 3194,
    suburb: "Mentone East",
    state: "VIC",
    latitude: -37.98,
    longitude: 145.06
  },
  {
    postcode: 3194,
    suburb: "Moorabbin Airport",
    state: "VIC",
    latitude: -37.98,
    longitude: 145.06
  },
  {
    postcode: 3195,
    suburb: "Aspendale",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3195,
    suburb: "Aspendale Gardens",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3195,
    suburb: "Braeside",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3195,
    suburb: "Mordialloc",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3195,
    suburb: "Mordialloc North",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3195,
    suburb: "Parkdale",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3195,
    suburb: "Waterways",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.1
  },
  {
    postcode: 3196,
    suburb: "Bonbeach",
    state: "VIC",
    latitude: -38.06,
    longitude: 145.12
  },
  {
    postcode: 3196,
    suburb: "Chelsea",
    state: "VIC",
    latitude: -38.06,
    longitude: 145.12
  },
  {
    postcode: 3196,
    suburb: "Chelsea Heights",
    state: "VIC",
    latitude: -38.06,
    longitude: 145.12
  },
  {
    postcode: 3196,
    suburb: "Edithvale",
    state: "VIC",
    latitude: -38.06,
    longitude: 145.12
  },
  {
    postcode: 3197,
    suburb: "Carrum",
    state: "VIC",
    latitude: -38.08,
    longitude: 145.12
  },
  {
    postcode: 3197,
    suburb: "Patterson Lakes",
    state: "VIC",
    latitude: -38.08,
    longitude: 145.12
  },
  {
    postcode: 3198,
    suburb: "Belvedere Park",
    state: "VIC",
    latitude: -38.11,
    longitude: 145.16
  },
  {
    postcode: 3198,
    suburb: "Seaford",
    state: "VIC",
    latitude: -38.11,
    longitude: 145.16
  },
  {
    postcode: 3199,
    suburb: "Frankston",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.12
  },
  {
    postcode: 3199,
    suburb: "Frankston East",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.12
  },
  {
    postcode: 3199,
    suburb: "Frankston Heights",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.12
  },
  {
    postcode: 3199,
    suburb: "Frankston South",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.12
  },
  {
    postcode: 3199,
    suburb: "Karingal",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.12
  },
  {
    postcode: 3199,
    suburb: "Karingal Centre",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.12
  },
  {
    postcode: 3200,
    suburb: "Frankston North",
    state: "VIC",
    latitude: -38.17,
    longitude: 145.19
  },
  {
    postcode: 3200,
    suburb: "Pines Forest",
    state: "VIC",
    latitude: -38.17,
    longitude: 145.19
  },
  {
    postcode: 3201,
    suburb: "Carrum Downs",
    state: "VIC",
    latitude: -38.09,
    longitude: 145.19
  },
  {
    postcode: 3202,
    suburb: "Heatherton",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.21
  },
  {
    postcode: 3204,
    suburb: "Bentleigh",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.04
  },
  {
    postcode: 3204,
    suburb: "Mckinnon",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.04
  },
  {
    postcode: 3204,
    suburb: "Ormond",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.04
  },
  {
    postcode: 3204,
    suburb: "Patterson",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.04
  },
  {
    postcode: 3205,
    suburb: "South Melbourne",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.03
  },
  {
    postcode: 3205,
    suburb: "South Melbourne DC",
    state: "VIC",
    latitude: -37.93,
    longitude: 145.03
  },
  {
    postcode: 3206,
    suburb: "Albert Park",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.96
  },
  {
    postcode: 3206,
    suburb: "Middle Park",
    state: "VIC",
    latitude: -37.84,
    longitude: 144.96
  },
  {
    postcode: 3207,
    suburb: "Garden City",
    state: "VIC",
    latitude: -37.83,
    longitude: 144.96
  },
  {
    postcode: 3207,
    suburb: "Port Melbourne",
    state: "VIC",
    latitude: -37.83,
    longitude: 144.96
  },
  {
    postcode: 3211,
    suburb: "Little River",
    state: "VIC",
    latitude: -37.97,
    longitude: 144.53
  },
  {
    postcode: 3212,
    suburb: "Avalon",
    state: "VIC",
    latitude: -38.02,
    longitude: 144.41
  },
  {
    postcode: 3212,
    suburb: "Lara",
    state: "VIC",
    latitude: -38.02,
    longitude: 144.41
  },
  {
    postcode: 3212,
    suburb: "Point Wilson",
    state: "VIC",
    latitude: -38.02,
    longitude: 144.41
  },
  {
    postcode: 3214,
    suburb: "Corio",
    state: "VIC",
    latitude: -38.07,
    longitude: 144.36
  },
  {
    postcode: 3214,
    suburb: "Norlane",
    state: "VIC",
    latitude: -38.07,
    longitude: 144.36
  },
  {
    postcode: 3214,
    suburb: "North Shore",
    state: "VIC",
    latitude: -38.07,
    longitude: 144.36
  },
  {
    postcode: 3215,
    suburb: "Bell Park",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3215,
    suburb: "Bell Post Hill",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3215,
    suburb: "Drumcondra",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3215,
    suburb: "Geelong North",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3215,
    suburb: "Hamlyn Heights",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3215,
    suburb: "North Geelong",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3215,
    suburb: "Rippleside",
    state: "VIC",
    latitude: -38.11,
    longitude: 144.33
  },
  {
    postcode: 3216,
    suburb: "Belmont",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Freshwater Creek",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Grovedale",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Grovedale East",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Highton",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Marshall",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Mount Duneed",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Wandana Heights",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3216,
    suburb: "Waurn Ponds",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.34
  },
  {
    postcode: 3217,
    suburb: "Deakin University",
    state: "VIC",
    latitude: -38.2,
    longitude: 144.3
  },
  {
    postcode: 3218,
    suburb: "Geelong West",
    state: "VIC",
    latitude: -38.14,
    longitude: 144.35
  },
  {
    postcode: 3218,
    suburb: "Herne Hill",
    state: "VIC",
    latitude: -38.14,
    longitude: 144.35
  },
  {
    postcode: 3218,
    suburb: "Manifold Heights",
    state: "VIC",
    latitude: -38.14,
    longitude: 144.35
  },
  {
    postcode: 3219,
    suburb: "Breakwater",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.38
  },
  {
    postcode: 3219,
    suburb: "East Geelong",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.38
  },
  {
    postcode: 3219,
    suburb: "Newcomb",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.38
  },
  {
    postcode: 3219,
    suburb: "St Albans Park",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.38
  },
  {
    postcode: 3219,
    suburb: "Thomson",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.38
  },
  {
    postcode: 3219,
    suburb: "Whittington",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.38
  },
  {
    postcode: 3220,
    suburb: "Bareena",
    state: "VIC",
    latitude: -38.18,
    longitude: 145.11
  },
  {
    postcode: 3220,
    suburb: "Geelong",
    state: "VIC",
    latitude: -38.18,
    longitude: 145.11
  },
  {
    postcode: 3220,
    suburb: "Newtown",
    state: "VIC",
    latitude: -38.18,
    longitude: 145.11
  },
  {
    postcode: 3220,
    suburb: "South Geelong",
    state: "VIC",
    latitude: -38.18,
    longitude: 145.11
  },
  {
    postcode: 3221,
    suburb: "Anakie",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Barrabool",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Batesford",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Bellarine",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Ceres",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Fyansford",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Geelong MC",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Gnarwarre",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Grey River",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Kennett River",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Lovely Banks",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Moolap",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Moorabool",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Murgheboluc",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Separation Creek",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Staughton Vale",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Stonehaven",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Sugarloaf",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Wallington",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Wongarra",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3221,
    suburb: "Wye River",
    state: "VIC",
    latitude: -37.9,
    longitude: 144.25
  },
  {
    postcode: 3222,
    suburb: "Clifton Springs",
    state: "VIC",
    latitude: -38.16,
    longitude: 144.56
  },
  {
    postcode: 3222,
    suburb: "Curlewis",
    state: "VIC",
    latitude: -38.16,
    longitude: 144.56
  },
  {
    postcode: 3222,
    suburb: "Drysdale",
    state: "VIC",
    latitude: -38.16,
    longitude: 144.56
  },
  {
    postcode: 3222,
    suburb: "Mannerim",
    state: "VIC",
    latitude: -38.16,
    longitude: 144.56
  },
  {
    postcode: 3222,
    suburb: "Marcus Hill",
    state: "VIC",
    latitude: -38.16,
    longitude: 144.56
  },
  {
    postcode: 3223,
    suburb: "Indented Head",
    state: "VIC",
    latitude: -38.14,
    longitude: 144.71
  },
  {
    postcode: 3223,
    suburb: "Portarlington",
    state: "VIC",
    latitude: -38.14,
    longitude: 144.71
  },
  {
    postcode: 3223,
    suburb: "St Leonards",
    state: "VIC",
    latitude: -38.14,
    longitude: 144.71
  },
  {
    postcode: 3224,
    suburb: "Leopold",
    state: "VIC",
    latitude: -38.18,
    longitude: 144.46
  },
  {
    postcode: 3225,
    suburb: "Point Lonsdale",
    state: "VIC",
    latitude: -38.29,
    longitude: 144.61
  },
  {
    postcode: 3225,
    suburb: "Queenscliff",
    state: "VIC",
    latitude: -38.29,
    longitude: 144.61
  },
  {
    postcode: 3225,
    suburb: "Swan Bay",
    state: "VIC",
    latitude: -38.29,
    longitude: 144.61
  },
  {
    postcode: 3225,
    suburb: "Swan Island",
    state: "VIC",
    latitude: -38.29,
    longitude: 144.61
  },
  {
    postcode: 3226,
    suburb: "Ocean Grove",
    state: "VIC",
    latitude: -38.27,
    longitude: 144.54
  },
  {
    postcode: 3227,
    suburb: "Barwon Heads",
    state: "VIC",
    latitude: -38.28,
    longitude: 144.49
  },
  {
    postcode: 3227,
    suburb: "Breamlea",
    state: "VIC",
    latitude: -38.28,
    longitude: 144.49
  },
  {
    postcode: 3227,
    suburb: "Connewarre",
    state: "VIC",
    latitude: -38.28,
    longitude: 144.49
  },
  {
    postcode: 3228,
    suburb: "Bellbrae",
    state: "VIC",
    latitude: -38.33,
    longitude: 144.26
  },
  {
    postcode: 3228,
    suburb: "Bells Beach",
    state: "VIC",
    latitude: -38.33,
    longitude: 144.26
  },
  {
    postcode: 3228,
    suburb: "Jan Juc",
    state: "VIC",
    latitude: -38.33,
    longitude: 144.26
  },
  {
    postcode: 3228,
    suburb: "Torquay",
    state: "VIC",
    latitude: -38.33,
    longitude: 144.26
  },
  {
    postcode: 3230,
    suburb: "Anglesea",
    state: "VIC",
    latitude: -38.41,
    longitude: 144.19
  },
  {
    postcode: 3231,
    suburb: "Aireys Inlet",
    state: "VIC",
    latitude: -38.46,
    longitude: 144.11
  },
  {
    postcode: 3231,
    suburb: "Big Hill",
    state: "VIC",
    latitude: -38.46,
    longitude: 144.11
  },
  {
    postcode: 3231,
    suburb: "Eastern View",
    state: "VIC",
    latitude: -38.46,
    longitude: 144.11
  },
  {
    postcode: 3231,
    suburb: "Fairhaven",
    state: "VIC",
    latitude: -38.46,
    longitude: 144.11
  },
  {
    postcode: 3231,
    suburb: "Moggs Creek",
    state: "VIC",
    latitude: -38.46,
    longitude: 144.11
  },
  {
    postcode: 3232,
    suburb: "Lorne",
    state: "VIC",
    latitude: -38.52,
    longitude: 144
  },
  {
    postcode: 3233,
    suburb: "Apollo Bay",
    state: "VIC",
    latitude: -38.75,
    longitude: 143.67
  },
  {
    postcode: 3233,
    suburb: "Cape Otway",
    state: "VIC",
    latitude: -38.75,
    longitude: 143.67
  },
  {
    postcode: 3233,
    suburb: "Marengo",
    state: "VIC",
    latitude: -38.75,
    longitude: 143.67
  },
  {
    postcode: 3233,
    suburb: "Petticoat Creek",
    state: "VIC",
    latitude: -38.75,
    longitude: 143.67
  },
  {
    postcode: 3233,
    suburb: "Skenes Creek",
    state: "VIC",
    latitude: -38.75,
    longitude: 143.67
  },
  {
    postcode: 3233,
    suburb: "Skenes Creek North",
    state: "VIC",
    latitude: -38.75,
    longitude: 143.67
  },
  {
    postcode: 3235,
    suburb: "Benwerrin",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.93
  },
  {
    postcode: 3235,
    suburb: "Boonah",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.93
  },
  {
    postcode: 3235,
    suburb: "Deans Marsh",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.93
  },
  {
    postcode: 3235,
    suburb: "Pennyroyal",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.93
  },
  {
    postcode: 3236,
    suburb: "Forrest",
    state: "VIC",
    latitude: -38.52,
    longitude: 143.71
  },
  {
    postcode: 3236,
    suburb: "Mount Sabine",
    state: "VIC",
    latitude: -38.52,
    longitude: 143.71
  },
  {
    postcode: 3237,
    suburb: "Aire Valley",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Beech Forest",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Ferguson",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Gellibrand Lower",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Wattle Hill",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Weeaproinah",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Wyelangta",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3237,
    suburb: "Yuulong",
    state: "VIC",
    latitude: -38.69,
    longitude: 143.56
  },
  {
    postcode: 3238,
    suburb: "Glenaire",
    state: "VIC",
    latitude: -38.78,
    longitude: 143.43
  },
  {
    postcode: 3238,
    suburb: "Hordern Vale",
    state: "VIC",
    latitude: -38.78,
    longitude: 143.43
  },
  {
    postcode: 3238,
    suburb: "Johanna",
    state: "VIC",
    latitude: -38.78,
    longitude: 143.43
  },
  {
    postcode: 3238,
    suburb: "Lavers Hill",
    state: "VIC",
    latitude: -38.78,
    longitude: 143.43
  },
  {
    postcode: 3239,
    suburb: "Carlisle River",
    state: "VIC",
    latitude: -38.56,
    longitude: 143.4
  },
  {
    postcode: 3239,
    suburb: "Chapple Vale",
    state: "VIC",
    latitude: -38.56,
    longitude: 143.4
  },
  {
    postcode: 3239,
    suburb: "Gellibrand",
    state: "VIC",
    latitude: -38.56,
    longitude: 143.4
  },
  {
    postcode: 3239,
    suburb: "Kennedys Creek",
    state: "VIC",
    latitude: -38.56,
    longitude: 143.4
  },
  {
    postcode: 3240,
    suburb: "Buckley",
    state: "VIC",
    latitude: -38.22,
    longitude: 144.08
  },
  {
    postcode: 3240,
    suburb: "Gherang",
    state: "VIC",
    latitude: -38.22,
    longitude: 144.08
  },
  {
    postcode: 3240,
    suburb: "Modewarre",
    state: "VIC",
    latitude: -38.22,
    longitude: 144.08
  },
  {
    postcode: 3240,
    suburb: "Moriac",
    state: "VIC",
    latitude: -38.22,
    longitude: 144.08
  },
  {
    postcode: 3240,
    suburb: "Mount Moriac",
    state: "VIC",
    latitude: -38.22,
    longitude: 144.08
  },
  {
    postcode: 3240,
    suburb: "Paraparap",
    state: "VIC",
    latitude: -38.22,
    longitude: 144.08
  },
  {
    postcode: 3241,
    suburb: "Bambra",
    state: "VIC",
    latitude: -38.37,
    longitude: 143.95
  },
  {
    postcode: 3241,
    suburb: "Ombersley",
    state: "VIC",
    latitude: -38.37,
    longitude: 143.95
  },
  {
    postcode: 3241,
    suburb: "Wensleydale",
    state: "VIC",
    latitude: -38.37,
    longitude: 143.95
  },
  {
    postcode: 3241,
    suburb: "Winchelsea",
    state: "VIC",
    latitude: -38.37,
    longitude: 143.95
  },
  {
    postcode: 3241,
    suburb: "Winchelsea South",
    state: "VIC",
    latitude: -38.37,
    longitude: 143.95
  },
  {
    postcode: 3241,
    suburb: "Wurdiboluc",
    state: "VIC",
    latitude: -38.37,
    longitude: 143.95
  },
  {
    postcode: 3242,
    suburb: "Birregurra",
    state: "VIC",
    latitude: -38.31,
    longitude: 143.79
  },
  {
    postcode: 3243,
    suburb: "Barwon Downs",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.76
  },
  {
    postcode: 3243,
    suburb: "Murroon",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.76
  },
  {
    postcode: 3243,
    suburb: "Warncoort",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.76
  },
  {
    postcode: 3243,
    suburb: "Whoorel",
    state: "VIC",
    latitude: -38.47,
    longitude: 143.76
  },
  {
    postcode: 3249,
    suburb: "Alvie",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Balintore",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Barongarook",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Barongarook West",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Barramunga",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Coragulac",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Corunnun",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Dreeite",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Dreeite South",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Gerangamete",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Irrewarra",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Irrewillipe",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Irrewillipe East",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Kawarren",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Larpent",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Nalangil",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Ondit",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Pirron Yallock",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Pomborneit East",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Swan Marsh",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Tanybryn",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Warrion",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Wool Wool",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Yeo",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3249,
    suburb: "Yeodene",
    state: "VIC",
    latitude: -38.24,
    longitude: 143.48
  },
  {
    postcode: 3250,
    suburb: "Colac",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.58
  },
  {
    postcode: 3250,
    suburb: "Colac East",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.58
  },
  {
    postcode: 3250,
    suburb: "Colac West",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.58
  },
  {
    postcode: 3250,
    suburb: "Elliminyt",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.58
  },
  {
    postcode: 3251,
    suburb: "Beeac",
    state: "VIC",
    latitude: -38.19,
    longitude: 143.64
  },
  {
    postcode: 3251,
    suburb: "Cundare",
    state: "VIC",
    latitude: -38.19,
    longitude: 143.64
  },
  {
    postcode: 3251,
    suburb: "Cundare North",
    state: "VIC",
    latitude: -38.19,
    longitude: 143.64
  },
  {
    postcode: 3251,
    suburb: "Eurack",
    state: "VIC",
    latitude: -38.19,
    longitude: 143.64
  },
  {
    postcode: 3251,
    suburb: "Weering",
    state: "VIC",
    latitude: -38.19,
    longitude: 143.64
  },
  {
    postcode: 3254,
    suburb: "Cororooke",
    state: "VIC",
    latitude: -38.3,
    longitude: 143.52
  },
  {
    postcode: 3260,
    suburb: "Bookaar",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Bostocks Creek",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Bungador",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Camperdown",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Carpendeit",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Chocolyn",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Gnotuk",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Kariah",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Koallah",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Leslie Manor",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Pomborneit",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Pomborneit North",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Skibo",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "South Purrumbete",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Stonyford",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Tandarook",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Tesbury",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3260,
    suburb: "Weerite",
    state: "VIC",
    latitude: -38.13,
    longitude: 143.1
  },
  {
    postcode: 3264,
    suburb: "Terang",
    state: "VIC",
    latitude: -38.24,
    longitude: 142.91
  },
  {
    postcode: 3265,
    suburb: "Boorcan",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Cudgee",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Dixie",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Ecklin South",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Ellerslie",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Framlingham",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Framlingham East",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Garvoc",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Glenormiston North",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Glenormiston South",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Kolora",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Laang",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Noorat",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Noorat East",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Panmure",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "Taroon",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3265,
    suburb: "The Sisters",
    state: "VIC",
    latitude: -38.21,
    longitude: 143.01
  },
  {
    postcode: 3266,
    suburb: "Bullaharre",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Cobden",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Cobrico",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Elingamite",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Elingamite North",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Glenfyne",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Jancourt",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Jancourt East",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Naroghid",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3266,
    suburb: "Simpson",
    state: "VIC",
    latitude: -38.34,
    longitude: 143.14
  },
  {
    postcode: 3267,
    suburb: "Scotts Creek",
    state: "VIC",
    latitude: -38.45,
    longitude: 143.11
  },
  {
    postcode: 3268,
    suburb: "Ayrford",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Brucknell",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Cooriemungle",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Cowleys Creek",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Curdies River",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Curdievale",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Heytesbury Lower",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Newfield",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Nirranda",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Nirranda East",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Nirranda South",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Nullawarre",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Nullawarre North",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Paaratte",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "The Cove",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Timboon",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3268,
    suburb: "Timboon West",
    state: "VIC",
    latitude: -38.42,
    longitude: 142.86
  },
  {
    postcode: 3269,
    suburb: "Port Campbell",
    state: "VIC",
    latitude: -38.62,
    longitude: 143
  },
  {
    postcode: 3269,
    suburb: "Princetown",
    state: "VIC",
    latitude: -38.62,
    longitude: 143
  },
  {
    postcode: 3269,
    suburb: "Waarre",
    state: "VIC",
    latitude: -38.62,
    longitude: 143
  },
  {
    postcode: 3270,
    suburb: "Peterborough",
    state: "VIC",
    latitude: -38.58,
    longitude: 142.86
  },
  {
    postcode: 3271,
    suburb: "Darlington",
    state: "VIC",
    latitude: -38,
    longitude: 143.05
  },
  {
    postcode: 3271,
    suburb: "Dundonnell",
    state: "VIC",
    latitude: -38,
    longitude: 143.05
  },
  {
    postcode: 3271,
    suburb: "Pura Pura",
    state: "VIC",
    latitude: -38,
    longitude: 143.05
  },
  {
    postcode: 3272,
    suburb: "Mortlake",
    state: "VIC",
    latitude: -38.08,
    longitude: 142.81
  },
  {
    postcode: 3272,
    suburb: "Woorndoo",
    state: "VIC",
    latitude: -38.08,
    longitude: 142.81
  },
  {
    postcode: 3273,
    suburb: "Hexham",
    state: "VIC",
    latitude: -38.06,
    longitude: 142.61
  },
  {
    postcode: 3274,
    suburb: "Caramut",
    state: "VIC",
    latitude: -37.91,
    longitude: 142.52
  },
  {
    postcode: 3275,
    suburb: "Mailors Flat",
    state: "VIC",
    latitude: -38.3,
    longitude: 142.46
  },
  {
    postcode: 3276,
    suburb: "Minjah",
    state: "VIC",
    latitude: -38.04,
    longitude: 142.44
  },
  {
    postcode: 3276,
    suburb: "Woolsthorpe",
    state: "VIC",
    latitude: -38.04,
    longitude: 142.44
  },
  {
    postcode: 3277,
    suburb: "Allansford",
    state: "VIC",
    latitude: -38.39,
    longitude: 142.59
  },
  {
    postcode: 3277,
    suburb: "Mepunga",
    state: "VIC",
    latitude: -38.39,
    longitude: 142.59
  },
  {
    postcode: 3277,
    suburb: "Mepunga East",
    state: "VIC",
    latitude: -38.39,
    longitude: 142.59
  },
  {
    postcode: 3277,
    suburb: "Mepunga West",
    state: "VIC",
    latitude: -38.39,
    longitude: 142.59
  },
  {
    postcode: 3277,
    suburb: "Naringal",
    state: "VIC",
    latitude: -38.39,
    longitude: 142.59
  },
  {
    postcode: 3277,
    suburb: "Naringal East",
    state: "VIC",
    latitude: -38.39,
    longitude: 142.59
  },
  {
    postcode: 3278,
    suburb: "Purnim",
    state: "VIC",
    latitude: -38.28,
    longitude: 142.62
  },
  {
    postcode: 3278,
    suburb: "Purnim West",
    state: "VIC",
    latitude: -38.28,
    longitude: 142.62
  },
  {
    postcode: 3279,
    suburb: "Ballangeich",
    state: "VIC",
    latitude: -38.21,
    longitude: 142.66
  },
  {
    postcode: 3279,
    suburb: "Wangoom",
    state: "VIC",
    latitude: -38.21,
    longitude: 142.66
  },
  {
    postcode: 3280,
    suburb: "Dennington",
    state: "VIC",
    latitude: -38.36,
    longitude: 142.44
  },
  {
    postcode: 3280,
    suburb: "Warrnambool",
    state: "VIC",
    latitude: -38.36,
    longitude: 142.44
  },
  {
    postcode: 3280,
    suburb: "Warrnambool East",
    state: "VIC",
    latitude: -38.36,
    longitude: 142.44
  },
  {
    postcode: 3280,
    suburb: "Warrnambool West",
    state: "VIC",
    latitude: -38.36,
    longitude: 142.44
  },
  {
    postcode: 3281,
    suburb: "Bushfield",
    state: "VIC",
    latitude: -38.33,
    longitude: 142.51
  },
  {
    postcode: 3281,
    suburb: "Grassmere",
    state: "VIC",
    latitude: -38.33,
    longitude: 142.51
  },
  {
    postcode: 3281,
    suburb: "Winslow",
    state: "VIC",
    latitude: -38.33,
    longitude: 142.51
  },
  {
    postcode: 3281,
    suburb: "Woodford",
    state: "VIC",
    latitude: -38.33,
    longitude: 142.51
  },
  {
    postcode: 3282,
    suburb: "Illowa",
    state: "VIC",
    latitude: -38.33,
    longitude: 142.41
  },
  {
    postcode: 3282,
    suburb: "Koroit",
    state: "VIC",
    latitude: -38.33,
    longitude: 142.41
  },
  {
    postcode: 3283,
    suburb: "Crossley",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Killarney",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Kirkstall",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Southern Cross",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Tarrone",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Tower Hill",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Warrong",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Willatook",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Yangery",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3283,
    suburb: "Yarpturk",
    state: "VIC",
    latitude: -38.31,
    longitude: 142.33
  },
  {
    postcode: 3284,
    suburb: "Orford",
    state: "VIC",
    latitude: -38.21,
    longitude: 142.15
  },
  {
    postcode: 3284,
    suburb: "Port Fairy",
    state: "VIC",
    latitude: -38.21,
    longitude: 142.15
  },
  {
    postcode: 3285,
    suburb: "Codrington",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "Narrawong",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "Rosebrook",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "St Helens",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "Toolong",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "Tyrendarra",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "Tyrendarra East",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3285,
    suburb: "Yambuk",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.97
  },
  {
    postcode: 3286,
    suburb: "Condah Swamp",
    state: "VIC",
    latitude: -37.97,
    longitude: 141.83
  },
  {
    postcode: 3286,
    suburb: "Knebsworth",
    state: "VIC",
    latitude: -37.97,
    longitude: 141.83
  },
  {
    postcode: 3286,
    suburb: "Macarthur",
    state: "VIC",
    latitude: -37.97,
    longitude: 141.83
  },
  {
    postcode: 3286,
    suburb: "Warrabkook",
    state: "VIC",
    latitude: -37.97,
    longitude: 141.83
  },
  {
    postcode: 3287,
    suburb: "Hawkesdale",
    state: "VIC",
    latitude: -38.11,
    longitude: 142.32
  },
  {
    postcode: 3287,
    suburb: "Minhamite",
    state: "VIC",
    latitude: -38.11,
    longitude: 142.32
  },
  {
    postcode: 3289,
    suburb: "Gazette",
    state: "VIC",
    latitude: -37.9,
    longitude: 142.17
  },
  {
    postcode: 3289,
    suburb: "Gerrigerrup",
    state: "VIC",
    latitude: -37.9,
    longitude: 142.17
  },
  {
    postcode: 3289,
    suburb: "Penshurst",
    state: "VIC",
    latitude: -37.9,
    longitude: 142.17
  },
  {
    postcode: 3289,
    suburb: "Purdeet",
    state: "VIC",
    latitude: -37.9,
    longitude: 142.17
  },
  {
    postcode: 3289,
    suburb: "Tabor",
    state: "VIC",
    latitude: -37.9,
    longitude: 142.17
  },
  {
    postcode: 3292,
    suburb: "Nelson",
    state: "VIC",
    latitude: -38.05,
    longitude: 141.01
  },
  {
    postcode: 3293,
    suburb: "Glenthompson",
    state: "VIC",
    latitude: -37.64,
    longitude: 142.55
  },
  {
    postcode: 3293,
    suburb: "Nareeb",
    state: "VIC",
    latitude: -37.64,
    longitude: 142.55
  },
  {
    postcode: 3293,
    suburb: "Narrapumelap South",
    state: "VIC",
    latitude: -37.64,
    longitude: 142.55
  },
  {
    postcode: 3294,
    suburb: "Dunkeld",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3294,
    suburb: "Karabeal",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3294,
    suburb: "Mirranatwa",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3294,
    suburb: "Moutajup",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3294,
    suburb: "Victoria Point",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3294,
    suburb: "Victoria Valley",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3294,
    suburb: "Woodhouse",
    state: "VIC",
    latitude: -37.65,
    longitude: 142.34
  },
  {
    postcode: 3300,
    suburb: "Byaduk North",
    state: "VIC",
    latitude: -37.88,
    longitude: 141.96
  },
  {
    postcode: 3300,
    suburb: "Hamilton",
    state: "VIC",
    latitude: -37.88,
    longitude: 141.96
  },
  {
    postcode: 3301,
    suburb: "Bochara",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Broadwater",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Buckley Swamp",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Byaduk",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Croxton East",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Hensley Park",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Morgiana",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Mount Napier",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Strathkellar",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Tahara",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Tarrington",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Wannon",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Warrayure",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Yatchaw",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3301,
    suburb: "Yulecart",
    state: "VIC",
    latitude: -37.7,
    longitude: 141.93
  },
  {
    postcode: 3302,
    suburb: "Branxholme",
    state: "VIC",
    latitude: -37.86,
    longitude: 141.79
  },
  {
    postcode: 3302,
    suburb: "Grassdale",
    state: "VIC",
    latitude: -37.86,
    longitude: 141.79
  },
  {
    postcode: 3303,
    suburb: "Breakaway Creek",
    state: "VIC",
    latitude: -38.03,
    longitude: 141.81
  },
  {
    postcode: 3303,
    suburb: "Condah",
    state: "VIC",
    latitude: -38.03,
    longitude: 141.81
  },
  {
    postcode: 3303,
    suburb: "Hotspur",
    state: "VIC",
    latitude: -38.03,
    longitude: 141.81
  },
  {
    postcode: 3303,
    suburb: "Lake Condah",
    state: "VIC",
    latitude: -38.03,
    longitude: 141.81
  },
  {
    postcode: 3303,
    suburb: "Wallacedale",
    state: "VIC",
    latitude: -38.03,
    longitude: 141.81
  },
  {
    postcode: 3304,
    suburb: "Bessiebelle",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Dartmoor",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Drik Drik",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Drumborg",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Greenwald",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Heywood",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Homerton",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Lyons",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Milltown",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Mumbannar",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Myamyn",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3304,
    suburb: "Winnap",
    state: "VIC",
    latitude: -38.15,
    longitude: 141.97
  },
  {
    postcode: 3305,
    suburb: "Allestree",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Bolwarra",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Cape Bridgewater",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Cashmore",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Dutton Way",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Gorae",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Gorae West",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Heathmere",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Mount Richmond",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Portland",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Portland North",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3305,
    suburb: "Portland West",
    state: "VIC",
    latitude: -38.27,
    longitude: 141.65
  },
  {
    postcode: 3309,
    suburb: "Digby",
    state: "VIC",
    latitude: -37.79,
    longitude: 141.5
  },
  {
    postcode: 3310,
    suburb: "Merino",
    state: "VIC",
    latitude: -37.72,
    longitude: 141.55
  },
  {
    postcode: 3310,
    suburb: "Tahara West",
    state: "VIC",
    latitude: -37.72,
    longitude: 141.55
  },
  {
    postcode: 3311,
    suburb: "Casterton",
    state: "VIC",
    latitude: -37.58,
    longitude: 141.41
  },
  {
    postcode: 3311,
    suburb: "Corndale",
    state: "VIC",
    latitude: -37.58,
    longitude: 141.41
  },
  {
    postcode: 3312,
    suburb: "Bahgallah",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Brimboal",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Carapook",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Chetwynd",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Dergholm",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Dorodong",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Dunrobin",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Henty",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Killara",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Lake Mundi",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Lindsay",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Nangeela",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Poolaijelo",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Powers Creek",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Sandford",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Strathdownie",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Wando Bridge",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Wando Vale",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3312,
    suburb: "Warrock",
    state: "VIC",
    latitude: -37.64,
    longitude: 141.37
  },
  {
    postcode: 3314,
    suburb: "Bulart",
    state: "VIC",
    latitude: -37.59,
    longitude: 141.94
  },
  {
    postcode: 3314,
    suburb: "Cavendish",
    state: "VIC",
    latitude: -37.59,
    longitude: 141.94
  },
  {
    postcode: 3314,
    suburb: "Glenisla",
    state: "VIC",
    latitude: -37.59,
    longitude: 141.94
  },
  {
    postcode: 3314,
    suburb: "Grampians",
    state: "VIC",
    latitude: -37.59,
    longitude: 141.94
  },
  {
    postcode: 3314,
    suburb: "Mooralla",
    state: "VIC",
    latitude: -37.59,
    longitude: 141.94
  },
  {
    postcode: 3315,
    suburb: "Brit Brit",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Clover Flat",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Coleraine",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Coojar",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Culla",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Gringegalgona",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Gritjurk",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Hilgay",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Konongwootong",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Melville Forest",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Muntham",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Nareen",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Paschendale",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Tahara Bridge",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Tarrayoukyan",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Tarrenlea",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3315,
    suburb: "Wootong Vale",
    state: "VIC",
    latitude: -37.44,
    longitude: 141.76
  },
  {
    postcode: 3317,
    suburb: "Harrow",
    state: "VIC",
    latitude: -37.12,
    longitude: 141.6
  },
  {
    postcode: 3318,
    suburb: "Charam",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3318,
    suburb: "Connewirricoo",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3318,
    suburb: "Edenhope",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3318,
    suburb: "Kadnook",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3318,
    suburb: "Langkoop",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3318,
    suburb: "Patyah",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3318,
    suburb: "Ullswater",
    state: "VIC",
    latitude: -36.99,
    longitude: 141.51
  },
  {
    postcode: 3319,
    suburb: "Apsley",
    state: "VIC",
    latitude: -36.97,
    longitude: 141.08
  },
  {
    postcode: 3319,
    suburb: "Benayeo",
    state: "VIC",
    latitude: -36.97,
    longitude: 141.08
  },
  {
    postcode: 3319,
    suburb: "Bringalbert",
    state: "VIC",
    latitude: -36.97,
    longitude: 141.08
  },
  {
    postcode: 3321,
    suburb: "Hesse",
    state: "VIC",
    latitude: -38.11,
    longitude: 143.86
  },
  {
    postcode: 3321,
    suburb: "Inverleigh",
    state: "VIC",
    latitude: -38.11,
    longitude: 143.86
  },
  {
    postcode: 3321,
    suburb: "Wingeel",
    state: "VIC",
    latitude: -38.11,
    longitude: 143.86
  },
  {
    postcode: 3322,
    suburb: "Cressy",
    state: "VIC",
    latitude: -38.03,
    longitude: 143.64
  },
  {
    postcode: 3323,
    suburb: "Berrybank",
    state: "VIC",
    latitude: -37.99,
    longitude: 143.49
  },
  {
    postcode: 3323,
    suburb: "Duverney",
    state: "VIC",
    latitude: -37.99,
    longitude: 143.49
  },
  {
    postcode: 3323,
    suburb: "Foxhow",
    state: "VIC",
    latitude: -37.99,
    longitude: 143.49
  },
  {
    postcode: 3324,
    suburb: "Lismore",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.34
  },
  {
    postcode: 3324,
    suburb: "Mingay",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.34
  },
  {
    postcode: 3324,
    suburb: "Mount Bute",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.34
  },
  {
    postcode: 3325,
    suburb: "Derrinallum",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.22
  },
  {
    postcode: 3325,
    suburb: "Larralea",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.22
  },
  {
    postcode: 3325,
    suburb: "Vite Vite",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.22
  },
  {
    postcode: 3325,
    suburb: "Vite Vite North",
    state: "VIC",
    latitude: -37.95,
    longitude: 143.22
  },
  {
    postcode: 3328,
    suburb: "Teesdale",
    state: "VIC",
    latitude: -38.04,
    longitude: 144.05
  },
  {
    postcode: 3329,
    suburb: "Barunah Park",
    state: "VIC",
    latitude: -38.02,
    longitude: 143.86
  },
  {
    postcode: 3329,
    suburb: "Barunah Plains",
    state: "VIC",
    latitude: -38.02,
    longitude: 143.86
  },
  {
    postcode: 3329,
    suburb: "Shelford",
    state: "VIC",
    latitude: -38.02,
    longitude: 143.86
  },
  {
    postcode: 3330,
    suburb: "Rokewood",
    state: "VIC",
    latitude: -37.84,
    longitude: 143.68
  },
  {
    postcode: 3331,
    suburb: "Bannockburn",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3331,
    suburb: "Gheringhap",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3331,
    suburb: "Maude",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3331,
    suburb: "Russells Bridge",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3331,
    suburb: "She Oaks",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3331,
    suburb: "Steiglitz",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3331,
    suburb: "Sutherlands Creek",
    state: "VIC",
    latitude: -38.05,
    longitude: 144.17
  },
  {
    postcode: 3332,
    suburb: "Lethbridge",
    state: "VIC",
    latitude: -37.96,
    longitude: 144.14
  },
  {
    postcode: 3333,
    suburb: "Bamganie",
    state: "VIC",
    latitude: -37.92,
    longitude: 144.03
  },
  {
    postcode: 3333,
    suburb: "Meredith",
    state: "VIC",
    latitude: -37.92,
    longitude: 144.03
  },
  {
    postcode: 3334,
    suburb: "Bungal",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.09
  },
  {
    postcode: 3334,
    suburb: "Cargerie",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.09
  },
  {
    postcode: 3334,
    suburb: "Elaine",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.09
  },
  {
    postcode: 3334,
    suburb: "Morrisons",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.09
  },
  {
    postcode: 3334,
    suburb: "Mount Doran",
    state: "VIC",
    latitude: -37.71,
    longitude: 144.09
  },
  {
    postcode: 3335,
    suburb: "Plumpton",
    state: "VIC",
    latitude: -37.69,
    longitude: 144.69
  },
  {
    postcode: 3335,
    suburb: "Rockbank",
    state: "VIC",
    latitude: -37.69,
    longitude: 144.69
  },
  {
    postcode: 3337,
    suburb: "Kurunjang",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.59
  },
  {
    postcode: 3337,
    suburb: "Melton",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.59
  },
  {
    postcode: 3337,
    suburb: "Melton West",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.59
  },
  {
    postcode: 3337,
    suburb: "Toolern Vale",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.59
  },
  {
    postcode: 3338,
    suburb: "Brookfield",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.54
  },
  {
    postcode: 3338,
    suburb: "Exford",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.54
  },
  {
    postcode: 3338,
    suburb: "Eynesbury",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.54
  },
  {
    postcode: 3338,
    suburb: "Melton South",
    state: "VIC",
    latitude: -37.7,
    longitude: 144.54
  },
  {
    postcode: 3340,
    suburb: "Bacchus Marsh",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Balliang",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Balliang East",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Coimadai",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Darley",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Glenmore",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Hopetoun Park",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Long Forest",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Maddingley",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Merrimu",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Parwan",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3340,
    suburb: "Rowsley",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.44
  },
  {
    postcode: 3341,
    suburb: "Dales Creek",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.31
  },
  {
    postcode: 3341,
    suburb: "Greendale",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.31
  },
  {
    postcode: 3341,
    suburb: "Korobeit",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.31
  },
  {
    postcode: 3341,
    suburb: "Myrniong",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.31
  },
  {
    postcode: 3341,
    suburb: "Pentland Hills",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.31
  },
  {
    postcode: 3342,
    suburb: "Ballan",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Beremboke",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Blakeville",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Bunding",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Colbrook",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Durdidwarrah",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Fiskville",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Ingliston",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3342,
    suburb: "Mount Wallace",
    state: "VIC",
    latitude: -37.6,
    longitude: 144.23
  },
  {
    postcode: 3345,
    suburb: "Gordon",
    state: "VIC",
    latitude: -37.59,
    longitude: 144.1
  },
  {
    postcode: 3350,
    suburb: "Alfredton",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Bakery Hill",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Ballarat",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Ballarat Central",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Ballarat East",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Ballarat North",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Ballarat West",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Black Hill",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Brown Hill",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Canadian",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Eureka",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Golden Point",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Invermay Park",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Lake Wendouree",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Mount Clear",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Mount Helen",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Mount Pleasant",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Nerrina",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Newington",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Redan",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3350,
    suburb: "Soldiers Hill",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.82
  },
  {
    postcode: 3351,
    suburb: "Berringa",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Bo Peep",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Cape Clear",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Carngham",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Chepstowe",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Haddon",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Hillcrest",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Illabarook",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Lake Bolac",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Mininera",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Mount Emu",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Nerrin Nerrin",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Newtown",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Nintingbool",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Piggoreet",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Pitfield",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Rokewood Junction",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Ross Creek",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Scarsdale",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Smythes Creek",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Smythesdale",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Snake Valley",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Springdallah",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Staffordshire Reef",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Streatham",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Wallinduc",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3351,
    suburb: "Westmere",
    state: "VIC",
    latitude: -37.77,
    longitude: 143.68
  },
  {
    postcode: 3352,
    suburb: "Addington",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Ballarat Roadside Delivery",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Blowhard",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Bolwarrah",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Bonshaw",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Brewster",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Bullarook",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Bungaree",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Bunkers Hill",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Burrumbeet",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Cambrian Hill",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Cardigan",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Cardigan Village",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Chapel Flat",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Clarendon",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Claretown",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Clarkes Hill",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Corindhap",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Dereel",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Dunnstown",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Durham Lead",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Enfield",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Ercildoune",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Garibaldi",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Glen Park",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Glenbrae",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Gong Gong",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Grenville",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Invermay",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Lal Lal",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Lamplough",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Langi Kal Kal",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Learmonth",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Leigh Creek",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Lexton",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Magpie",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Millbrook",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Miners Rest",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Mitchell Park",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Mollongghip",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Mount Bolton",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Mount Egerton",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Mount Mercer",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Mount Rowan",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Napoleons",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Navigators",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Pootilla",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Scotchmans Lead",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Scotsburn",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Springbank",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Sulky",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Wallace",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Warrenheip",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Wattle Flat",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Waubra",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Weatherboard",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Werneth",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Windermere",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3352,
    suburb: "Yendon",
    state: "VIC",
    latitude: -37.38,
    longitude: 143.67
  },
  {
    postcode: 3353,
    suburb: "Ballarat",
    state: "VIC",
    latitude: -37.78,
    longitude: 144.84
  },
  {
    postcode: 3354,
    suburb: "Bakery Hill",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.87
  },
  {
    postcode: 3354,
    suburb: "Ballarat MC",
    state: "VIC",
    latitude: -37.56,
    longitude: 143.87
  },
  {
    postcode: 3355,
    suburb: "Lake Gardens",
    state: "VIC",
    latitude: -37.55,
    longitude: 143.82
  },
  {
    postcode: 3355,
    suburb: "Mitchell Park",
    state: "VIC",
    latitude: -37.55,
    longitude: 143.82
  },
  {
    postcode: 3355,
    suburb: "Wendouree",
    state: "VIC",
    latitude: -37.55,
    longitude: 143.82
  },
  {
    postcode: 3355,
    suburb: "Wendouree Village",
    state: "VIC",
    latitude: -37.55,
    longitude: 143.82
  },
  {
    postcode: 3356,
    suburb: "Delacombe",
    state: "VIC",
    latitude: -37.59,
    longitude: 143.83
  },
  {
    postcode: 3356,
    suburb: "Sebastopol",
    state: "VIC",
    latitude: -37.59,
    longitude: 143.83
  },
  {
    postcode: 3357,
    suburb: "Buninyong",
    state: "VIC",
    latitude: -37.65,
    longitude: 143.92
  },
  {
    postcode: 3357,
    suburb: "Scotsmans Lead",
    state: "VIC",
    latitude: -37.65,
    longitude: 143.92
  },
  {
    postcode: 3360,
    suburb: "Happy Valley",
    state: "VIC",
    latitude: -37.69,
    longitude: 143.56
  },
  {
    postcode: 3360,
    suburb: "Linton",
    state: "VIC",
    latitude: -37.69,
    longitude: 143.56
  },
  {
    postcode: 3360,
    suburb: "Mannibadar",
    state: "VIC",
    latitude: -37.69,
    longitude: 143.56
  },
  {
    postcode: 3360,
    suburb: "Pittong",
    state: "VIC",
    latitude: -37.69,
    longitude: 143.56
  },
  {
    postcode: 3360,
    suburb: "Willowvale",
    state: "VIC",
    latitude: -37.69,
    longitude: 143.56
  },
  {
    postcode: 3361,
    suburb: "Bradvale",
    state: "VIC",
    latitude: -37.78,
    longitude: 143.41
  },
  {
    postcode: 3361,
    suburb: "Carranballac",
    state: "VIC",
    latitude: -37.78,
    longitude: 143.41
  },
  {
    postcode: 3361,
    suburb: "Skipton",
    state: "VIC",
    latitude: -37.78,
    longitude: 143.41
  },
  {
    postcode: 3363,
    suburb: "Creswick",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3363,
    suburb: "Creswick North",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3363,
    suburb: "Dean",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3363,
    suburb: "Glendaruel",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3363,
    suburb: "Langdons Hill",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3363,
    suburb: "Mount Beckworth",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3363,
    suburb: "Tourello",
    state: "VIC",
    latitude: -37.42,
    longitude: 143.89
  },
  {
    postcode: 3364,
    suburb: "Allendale",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Ascot",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Bald Hills",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Barkstead",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Blampied",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Broomfield",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Cabbage Tree",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Campbelltown",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Coghills Creek",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Glendonald",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Kingston",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Kooroocheang",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Lawrence",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Mount Prospect",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Newlyn",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Newlyn North",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Rocklyn",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Smeaton",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Smokeytown",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Springmount",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Strathlea",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3364,
    suburb: "Werona",
    state: "VIC",
    latitude: -37.37,
    longitude: 143.94
  },
  {
    postcode: 3370,
    suburb: "Clunes",
    state: "VIC",
    latitude: -37.29,
    longitude: 143.79
  },
  {
    postcode: 3370,
    suburb: "Glengower",
    state: "VIC",
    latitude: -37.29,
    longitude: 143.79
  },
  {
    postcode: 3370,
    suburb: "Mount Cameron",
    state: "VIC",
    latitude: -37.29,
    longitude: 143.79
  },
  {
    postcode: 3370,
    suburb: "Ullina",
    state: "VIC",
    latitude: -37.29,
    longitude: 143.79
  },
  {
    postcode: 3371,
    suburb: "Amherst",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Burnbank",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Caralulup",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Dunach",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Evansford",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Lillicur",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Mount Glasgow",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Red Lion",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Stony Creek",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3371,
    suburb: "Talbot",
    state: "VIC",
    latitude: -37.15,
    longitude: 143.67
  },
  {
    postcode: 3373,
    suburb: "Beaufort",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Chute",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Cross Roads",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Lake Goldsmith",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Lake Wongan",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Main Lead",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Mena Park",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Nerring",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Raglan",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Stockyard Hill",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Stoneleigh",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Trawalla",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3373,
    suburb: "Waterloo",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.38
  },
  {
    postcode: 3374,
    suburb: "Great Western",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3375,
    suburb: "Ballyrogan",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.13
  },
  {
    postcode: 3375,
    suburb: "Bayindeen",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.13
  },
  {
    postcode: 3375,
    suburb: "Buangor",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.13
  },
  {
    postcode: 3375,
    suburb: "Middle Creek",
    state: "VIC",
    latitude: -37.43,
    longitude: 143.13
  },
  {
    postcode: 3377,
    suburb: "Ararat",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Armstrong",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Bulgana",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Cathcart",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Crowlands",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Denicull Creek",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Dobie",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Dunneworthy",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Eversley",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Langi Logan",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Maroona",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Mount Cole",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Mount Cole Creek",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Moyston",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Norval",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Rhymney",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Rocky Point",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Rossbridge",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Shays Flat",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3377,
    suburb: "Warrak",
    state: "VIC",
    latitude: -37.28,
    longitude: 142.93
  },
  {
    postcode: 3378,
    suburb: "Tatyoon",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.94
  },
  {
    postcode: 3378,
    suburb: "Yalla-Y-Poora",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.94
  },
  {
    postcode: 3379,
    suburb: "Bornes Hill",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3379,
    suburb: "Chatsworth",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3379,
    suburb: "Mafeking",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3379,
    suburb: "Stavely",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3379,
    suburb: "Wickliffe",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3379,
    suburb: "Willaura",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3379,
    suburb: "Willaura North",
    state: "VIC",
    latitude: -37.53,
    longitude: 142.52
  },
  {
    postcode: 3380,
    suburb: "Stawell",
    state: "VIC",
    latitude: -37.16,
    longitude: 142.7
  },
  {
    postcode: 3380,
    suburb: "Stawell West",
    state: "VIC",
    latitude: -37.16,
    longitude: 142.7
  },
  {
    postcode: 3381,
    suburb: "Bellellen",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Bellfield",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Black Range",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Fyans Creek",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Halls Gap",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Illawarra",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Lake Fyans",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Lake Lonsdale",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Mokepilly",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Mount Dryden",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3381,
    suburb: "Pomonal",
    state: "VIC",
    latitude: -36.94,
    longitude: 143.21
  },
  {
    postcode: 3384,
    suburb: "Barkly",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Concongella",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Frenchmans",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Joel Joel",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Joel South",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Landsborough",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Landsborough West",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Navarre",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Tulkara",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3384,
    suburb: "Wattle Creek",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.2
  },
  {
    postcode: 3385,
    suburb: "Dadswells Bridge",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Deep Lead",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Glenorchy",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Ledcourt",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Lubeck",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Riachella",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Roses Gap",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3385,
    suburb: "Wal Wal",
    state: "VIC",
    latitude: -36.92,
    longitude: 142.51
  },
  {
    postcode: 3387,
    suburb: "Bolangum",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Callawadda",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Campbells Bridge",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Germania",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Greens Creek",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Kanya",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Marnoo",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Marnoo West",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Morrl Morrl",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Wallaloo",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3387,
    suburb: "Wallaloo East",
    state: "VIC",
    latitude: -36.67,
    longitude: 142.87
  },
  {
    postcode: 3388,
    suburb: "Banyena",
    state: "VIC",
    latitude: -36.57,
    longitude: 142.82
  },
  {
    postcode: 3388,
    suburb: "Rupanyup",
    state: "VIC",
    latitude: -36.57,
    longitude: 142.82
  },
  {
    postcode: 3390,
    suburb: "Kewell",
    state: "VIC",
    latitude: -36.45,
    longitude: 142.42
  },
  {
    postcode: 3390,
    suburb: "Murtoa",
    state: "VIC",
    latitude: -36.45,
    longitude: 142.42
  },
  {
    postcode: 3391,
    suburb: "Brim",
    state: "VIC",
    latitude: -36.07,
    longitude: 142.52
  },
  {
    postcode: 3392,
    suburb: "Boolite",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.59
  },
  {
    postcode: 3392,
    suburb: "Minyip",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.59
  },
  {
    postcode: 3392,
    suburb: "Sheep Hills",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.59
  },
  {
    postcode: 3393,
    suburb: "Aubrey",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Bangerang",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Cannum",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Crymelon",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Kellalac",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Lah",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Warracknabeal",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Wilkur",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3393,
    suburb: "Willenabrina",
    state: "VIC",
    latitude: -36.33,
    longitude: 142.36
  },
  {
    postcode: 3395,
    suburb: "Beulah",
    state: "VIC",
    latitude: -35.94,
    longitude: 142.42
  },
  {
    postcode: 3395,
    suburb: "Kenmare",
    state: "VIC",
    latitude: -35.94,
    longitude: 142.42
  },
  {
    postcode: 3395,
    suburb: "Reedy Dam",
    state: "VIC",
    latitude: -35.94,
    longitude: 142.42
  },
  {
    postcode: 3395,
    suburb: "Rosebery",
    state: "VIC",
    latitude: -35.94,
    longitude: 142.42
  },
  {
    postcode: 3396,
    suburb: "Hopetoun",
    state: "VIC",
    latitude: -35.73,
    longitude: 142.36
  },
  {
    postcode: 3400,
    suburb: "Horsham",
    state: "VIC",
    latitude: -36.71,
    longitude: 142.2
  },
  {
    postcode: 3400,
    suburb: "Horsham West",
    state: "VIC",
    latitude: -36.71,
    longitude: 142.2
  },
  {
    postcode: 3401,
    suburb: "Blackheath",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Brimpaen",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Bungalally",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Cherrypool",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Dooen",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Drung",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Gymbowen",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Haven",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Jung",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Kalkee",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Kanagulk",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Karnak",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Laharum",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Longerenong",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Lower Norton",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Mckenzie Creek",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Mockinya",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Murra Warra",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Nurcoung",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Nurrabiel",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Pimpinio",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Quantong",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Riverside",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Rocklands",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "St Helens Plains",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Telangatuk East",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Toolondo",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Vectis",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Wail",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Wallup",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Wartook",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Wonwondah",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3401,
    suburb: "Zumsteins",
    state: "VIC",
    latitude: -36.46,
    longitude: 142.31
  },
  {
    postcode: 3402,
    suburb: "Horsham",
    state: "VIC",
    latitude: -37.16,
    longitude: 142.67
  },
  {
    postcode: 3407,
    suburb: "Balmoral",
    state: "VIC",
    latitude: -37.25,
    longitude: 141.84
  },
  {
    postcode: 3407,
    suburb: "Englefield",
    state: "VIC",
    latitude: -37.25,
    longitude: 141.84
  },
  {
    postcode: 3407,
    suburb: "Gatum",
    state: "VIC",
    latitude: -37.25,
    longitude: 141.84
  },
  {
    postcode: 3407,
    suburb: "Pigeon Ponds",
    state: "VIC",
    latitude: -37.25,
    longitude: 141.84
  },
  {
    postcode: 3407,
    suburb: "Vasey",
    state: "VIC",
    latitude: -37.25,
    longitude: 141.84
  },
  {
    postcode: 3409,
    suburb: "Arapiles",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Clear Lake",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Douglas",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Duchembegarra",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Grass Flat",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Jilpanger",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Miga Lake",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Mitre",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Natimuk",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Noradjuha",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Tooan",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3409,
    suburb: "Wombelano",
    state: "VIC",
    latitude: -36.78,
    longitude: 141.76
  },
  {
    postcode: 3412,
    suburb: "Goroke",
    state: "VIC",
    latitude: -36.75,
    longitude: 141.47
  },
  {
    postcode: 3413,
    suburb: "Minimay",
    state: "VIC",
    latitude: -36.71,
    longitude: 141.18
  },
  {
    postcode: 3413,
    suburb: "Neuarpurr",
    state: "VIC",
    latitude: -36.71,
    longitude: 141.18
  },
  {
    postcode: 3413,
    suburb: "Ozenkadnook",
    state: "VIC",
    latitude: -36.71,
    longitude: 141.18
  },
  {
    postcode: 3413,
    suburb: "Peronne",
    state: "VIC",
    latitude: -36.71,
    longitude: 141.18
  },
  {
    postcode: 3414,
    suburb: "Antwerp",
    state: "VIC",
    latitude: -36.3,
    longitude: 142.02
  },
  {
    postcode: 3414,
    suburb: "Dimboola",
    state: "VIC",
    latitude: -36.3,
    longitude: 142.02
  },
  {
    postcode: 3414,
    suburb: "Tarranyurk",
    state: "VIC",
    latitude: -36.3,
    longitude: 142.02
  },
  {
    postcode: 3415,
    suburb: "Miram",
    state: "VIC",
    latitude: -36.38,
    longitude: 141.36
  },
  {
    postcode: 3418,
    suburb: "Broughton",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Gerang Gerung",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Glenlee",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Kiata",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Lawloit",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Little Desert",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Lorquon",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Netherby",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Nhill",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3418,
    suburb: "Yanac",
    state: "VIC",
    latitude: -36.17,
    longitude: 141.33
  },
  {
    postcode: 3419,
    suburb: "Kaniva",
    state: "VIC",
    latitude: -36.38,
    longitude: 141.24
  },
  {
    postcode: 3420,
    suburb: "Lillimur",
    state: "VIC",
    latitude: -36.36,
    longitude: 141.12
  },
  {
    postcode: 3420,
    suburb: "Serviceton",
    state: "VIC",
    latitude: -36.36,
    longitude: 141.12
  },
  {
    postcode: 3420,
    suburb: "Telopea Downs",
    state: "VIC",
    latitude: -36.36,
    longitude: 141.12
  },
  {
    postcode: 3423,
    suburb: "Jeparit",
    state: "VIC",
    latitude: -36.14,
    longitude: 141.99
  },
  {
    postcode: 3424,
    suburb: "Albacutya",
    state: "VIC",
    latitude: -35.69,
    longitude: 141.97
  },
  {
    postcode: 3424,
    suburb: "Rainbow",
    state: "VIC",
    latitude: -35.69,
    longitude: 141.97
  },
  {
    postcode: 3424,
    suburb: "Yaapeet",
    state: "VIC",
    latitude: -35.69,
    longitude: 141.97
  },
  {
    postcode: 3427,
    suburb: "Diggers Rest",
    state: "VIC",
    latitude: -37.63,
    longitude: 144.72
  },
  {
    postcode: 3428,
    suburb: "Bulla",
    state: "VIC",
    latitude: -37.64,
    longitude: 144.8
  },
  {
    postcode: 3429,
    suburb: "Sunbury",
    state: "VIC",
    latitude: -37.58,
    longitude: 144.73
  },
  {
    postcode: 3429,
    suburb: "Wildwood",
    state: "VIC",
    latitude: -37.58,
    longitude: 144.73
  },
  {
    postcode: 3430,
    suburb: "Clarkefield",
    state: "VIC",
    latitude: -37.48,
    longitude: 144.75
  },
  {
    postcode: 3431,
    suburb: "Riddells Creek",
    state: "VIC",
    latitude: -37.46,
    longitude: 144.67
  },
  {
    postcode: 3432,
    suburb: "Bolinda",
    state: "VIC",
    latitude: -37.43,
    longitude: 144.78
  },
  {
    postcode: 3433,
    suburb: "Monegeetta",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3434,
    suburb: "Cherokee",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.64
  },
  {
    postcode: 3434,
    suburb: "Kerrie",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.64
  },
  {
    postcode: 3434,
    suburb: "Romsey",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.64
  },
  {
    postcode: 3434,
    suburb: "Springfield",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.64
  },
  {
    postcode: 3435,
    suburb: "Benloch",
    state: "VIC",
    latitude: -37.19,
    longitude: 144.69
  },
  {
    postcode: 3435,
    suburb: "Goldie",
    state: "VIC",
    latitude: -37.19,
    longitude: 144.69
  },
  {
    postcode: 3435,
    suburb: "Lancefield",
    state: "VIC",
    latitude: -37.19,
    longitude: 144.69
  },
  {
    postcode: 3435,
    suburb: "Nulla Vale",
    state: "VIC",
    latitude: -37.19,
    longitude: 144.69
  },
  {
    postcode: 3437,
    suburb: "Bullengarook",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.48
  },
  {
    postcode: 3437,
    suburb: "Gisborne",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.48
  },
  {
    postcode: 3437,
    suburb: "Gisborne South",
    state: "VIC",
    latitude: -37.52,
    longitude: 144.48
  },
  {
    postcode: 3438,
    suburb: "New Gisborne",
    state: "VIC",
    latitude: -37.46,
    longitude: 144.6
  },
  {
    postcode: 3440,
    suburb: "Macedon",
    state: "VIC",
    latitude: -37.4,
    longitude: 144.59
  },
  {
    postcode: 3441,
    suburb: "Mount Macedon",
    state: "VIC",
    latitude: -37.4,
    longitude: 144.59
  },
  {
    postcode: 3442,
    suburb: "Ashbourne",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Cadello",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Carlsruhe",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Cobaw",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Hesket",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Newham",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Rochford",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Woodend",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3442,
    suburb: "Woodend North",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.45
  },
  {
    postcode: 3444,
    suburb: "Barfold",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Baynton",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Baynton East",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Edgecombe",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Glenhope",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Greenhill",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Kyneton",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Kyneton South",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Langley",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Lauriston",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Lyal",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Metcalfe East",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Mia Mia",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Myrtle Creek",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Pastoria",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Pastoria East",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Pipers Creek",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Redesdale",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Sidonia",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Spring Hill",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Tylden",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3444,
    suburb: "Tylden South",
    state: "VIC",
    latitude: -37.09,
    longitude: 144.51
  },
  {
    postcode: 3446,
    suburb: "Drummond North",
    state: "VIC",
    latitude: -37.2,
    longitude: 144.29
  },
  {
    postcode: 3446,
    suburb: "Malmsbury",
    state: "VIC",
    latitude: -37.2,
    longitude: 144.29
  },
  {
    postcode: 3447,
    suburb: "Taradale",
    state: "VIC",
    latitude: -37.13,
    longitude: 144.36
  },
  {
    postcode: 3448,
    suburb: "Elphinstone",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.34
  },
  {
    postcode: 3448,
    suburb: "Metcalfe",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.34
  },
  {
    postcode: 3448,
    suburb: "Sutton Grange",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.34
  },
  {
    postcode: 3450,
    suburb: "Castlemaine",
    state: "VIC",
    latitude: -37.06,
    longitude: 144.22
  },
  {
    postcode: 3450,
    suburb: "Moonlight Flat",
    state: "VIC",
    latitude: -37.06,
    longitude: 144.22
  },
  {
    postcode: 3451,
    suburb: "Barkers Creek",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Campbells Creek",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Chewton",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Chewton Bushlands",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Faraday",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Fryerstown",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Glenluce",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Golden Point",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Gower",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Guildford",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Irishtown",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Mckenzie Hill",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Muckleford",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Tarilta",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Vaughan",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3451,
    suburb: "Yapeen",
    state: "VIC",
    latitude: -37.03,
    longitude: 144.24
  },
  {
    postcode: 3453,
    suburb: "Harcourt",
    state: "VIC",
    latitude: -37,
    longitude: 144.26
  },
  {
    postcode: 3453,
    suburb: "Harcourt North",
    state: "VIC",
    latitude: -37,
    longitude: 144.26
  },
  {
    postcode: 3453,
    suburb: "Ravenswood",
    state: "VIC",
    latitude: -37,
    longitude: 144.26
  },
  {
    postcode: 3453,
    suburb: "Ravenswood South",
    state: "VIC",
    latitude: -37,
    longitude: 144.26
  },
  {
    postcode: 3458,
    suburb: "Barrys Reef",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Blackwood",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Fern Hill",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Lerderderg",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Little Hampton",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Newbury",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "North Blackwood",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Trentham",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3458,
    suburb: "Trentham East",
    state: "VIC",
    latitude: -37.45,
    longitude: 144.29
  },
  {
    postcode: 3460,
    suburb: "Basalt",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.09
  },
  {
    postcode: 3460,
    suburb: "Daylesford",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.09
  },
  {
    postcode: 3461,
    suburb: "Bullarto",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Bullarto South",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Clydesdale",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Coomoora",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Denver",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Drummond",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Dry Diggings",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Eganstown",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Elevated Plains",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Franklinford",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Glenlyon",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Hepburn",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Hepburn Springs",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Korweinguboora",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Leonards Hill",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Lyonville",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Mount Franklin",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Musk",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Musk Vale",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Porcupine Ridge",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Sailors Falls",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Sailors Hill",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Shepherds Flat",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Spargo Creek",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Strangways",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Wheatsheaf",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Yandoit",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3461,
    suburb: "Yandoit Hills",
    state: "VIC",
    latitude: -37.39,
    longitude: 144.22
  },
  {
    postcode: 3462,
    suburb: "Green Gully",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.1
  },
  {
    postcode: 3462,
    suburb: "Joyces Creek",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.1
  },
  {
    postcode: 3462,
    suburb: "Muckleford South",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.1
  },
  {
    postcode: 3462,
    suburb: "Newstead",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.1
  },
  {
    postcode: 3462,
    suburb: "Sandon",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.1
  },
  {
    postcode: 3462,
    suburb: "Welshmans Reef",
    state: "VIC",
    latitude: -37.11,
    longitude: 144.1
  },
  {
    postcode: 3463,
    suburb: "Baringhup",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Baringhup West",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Bradford",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Eastville",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Laanecoorie",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Maldon",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Neereman",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Nuggetty",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Shelbourne",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Tarrengower",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Walmer",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3463,
    suburb: "Woodstock West",
    state: "VIC",
    latitude: -36.98,
    longitude: 143.95
  },
  {
    postcode: 3464,
    suburb: "Carisbrook",
    state: "VIC",
    latitude: -37.01,
    longitude: 143.8
  },
  {
    postcode: 3465,
    suburb: "Adelaide Lead",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Alma",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Bowenvale",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Bung Bong",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Cotswold",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Craigie",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Daisy Hill",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Flagstaff",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Golden Point",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Havelock",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Homebush",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Majorca",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Maryborough",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Moolort",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Moonlight Flat",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Natte Yallock",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Rathscar",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Rathscar West",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Simson",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Timor",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Timor West",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3465,
    suburb: "Wareek",
    state: "VIC",
    latitude: -37.07,
    longitude: 143.68
  },
  {
    postcode: 3467,
    suburb: "Avoca",
    state: "VIC",
    latitude: -37.09,
    longitude: 143.47
  },
  {
    postcode: 3468,
    suburb: "Amphitheatre",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.4
  },
  {
    postcode: 3468,
    suburb: "Mount Lonarch",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.4
  },
  {
    postcode: 3469,
    suburb: "Elmhurst",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.25
  },
  {
    postcode: 3469,
    suburb: "Glenlofty",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.25
  },
  {
    postcode: 3469,
    suburb: "Glenlogie",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.25
  },
  {
    postcode: 3469,
    suburb: "Glenpatrick",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.25
  },
  {
    postcode: 3469,
    suburb: "Nowhere Creek",
    state: "VIC",
    latitude: -37.18,
    longitude: 143.25
  },
  {
    postcode: 3472,
    suburb: "Bet Bet",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Betley",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Bromley",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Dunluce",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Dunolly",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Eddington",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Goldsborough",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Inkerman",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Mcintyre",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Moliagul",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3472,
    suburb: "Mount Hooghly",
    state: "VIC",
    latitude: -36.92,
    longitude: 143.76
  },
  {
    postcode: 3475,
    suburb: "Archdale",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3475,
    suburb: "Archdale Junction",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3475,
    suburb: "Bealiba",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3475,
    suburb: "Burkes Flat",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3475,
    suburb: "Cochranes Creek",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3475,
    suburb: "Emu",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3475,
    suburb: "Logan",
    state: "VIC",
    latitude: -36.83,
    longitude: 143.5
  },
  {
    postcode: 3477,
    suburb: "Avon Plains",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Beazleys Bridge",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Carapooee",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Carapooee West",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Coonooer Bridge",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Coonooer West",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Dalyenong",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Gooroc",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Gowar East",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Grays Bridge",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Gre Gre",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Gre Gre North",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Gre Gre South",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Kooreh",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Marnoo East",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Moolerr",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Moyreisk",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Paradise",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Redbank",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Rostron",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Slaty Creek",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "St Arnaud East",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "St Arnaud North",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Stuart Mill",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Sutherland",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Swanwater",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Tottington",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Traynors Lagoon",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "Winjallok",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3477,
    suburb: "York Plains",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3478,
    suburb: "Dooboobetic",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "Medlyn",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "Moonambel",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "Percydale",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "St Arnaud",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "Tanwood",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "Warrenmang",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3478,
    suburb: "Yawong Hills",
    state: "VIC",
    latitude: -36.54,
    longitude: 142.92
  },
  {
    postcode: 3480,
    suburb: "Areegra",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Carron",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Cope Cope",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Corack",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Corack East",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Donald",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Gil Gil",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Jeffcott",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Jeffcott North",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Laen",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Laen East",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Laen North",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Lake Buloke",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Lawler",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Litchfield",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Rich Avon",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Rich Avon East",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Rich Avon West",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3480,
    suburb: "Swanwater West",
    state: "VIC",
    latitude: -36.24,
    longitude: 142.69
  },
  {
    postcode: 3482,
    suburb: "Massey",
    state: "VIC",
    latitude: -36.23,
    longitude: 142.86
  },
  {
    postcode: 3482,
    suburb: "Morton Plains",
    state: "VIC",
    latitude: -36.23,
    longitude: 142.86
  },
  {
    postcode: 3482,
    suburb: "Warmur",
    state: "VIC",
    latitude: -36.23,
    longitude: 142.86
  },
  {
    postcode: 3482,
    suburb: "Watchem",
    state: "VIC",
    latitude: -36.23,
    longitude: 142.86
  },
  {
    postcode: 3482,
    suburb: "Watchem West",
    state: "VIC",
    latitude: -36.23,
    longitude: 142.86
  },
  {
    postcode: 3483,
    suburb: "Ballapur",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Birchip",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Birchip West",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Curyo",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Jil Jil",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Karyrie",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Kinnabulla",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Marlbed",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Narraport",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3483,
    suburb: "Whirily",
    state: "VIC",
    latitude: -35.98,
    longitude: 142.75
  },
  {
    postcode: 3485,
    suburb: "Banyan",
    state: "VIC",
    latitude: -35.64,
    longitude: 142.77
  },
  {
    postcode: 3485,
    suburb: "Watchupga",
    state: "VIC",
    latitude: -35.64,
    longitude: 142.77
  },
  {
    postcode: 3485,
    suburb: "Willangie",
    state: "VIC",
    latitude: -35.64,
    longitude: 142.77
  },
  {
    postcode: 3485,
    suburb: "Woomelang",
    state: "VIC",
    latitude: -35.64,
    longitude: 142.77
  },
  {
    postcode: 3487,
    suburb: "Lascelles",
    state: "VIC",
    latitude: -35.61,
    longitude: 142.58
  },
  {
    postcode: 3488,
    suburb: "Speed",
    state: "VIC",
    latitude: -35.4,
    longitude: 142.44
  },
  {
    postcode: 3488,
    suburb: "Turriff",
    state: "VIC",
    latitude: -35.4,
    longitude: 142.44
  },
  {
    postcode: 3488,
    suburb: "Turriff East",
    state: "VIC",
    latitude: -35.4,
    longitude: 142.44
  },
  {
    postcode: 3489,
    suburb: "Tempy",
    state: "VIC",
    latitude: -35.34,
    longitude: 142.48
  },
  {
    postcode: 3490,
    suburb: "Big Desert",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Boinka",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Kulwin",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Mittyack",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Murray-Sunset",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Ouyen",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Torrita",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3490,
    suburb: "Tutye",
    state: "VIC",
    latitude: -35.2,
    longitude: 141.6
  },
  {
    postcode: 3491,
    suburb: "Patchewollock",
    state: "VIC",
    latitude: -35.38,
    longitude: 142.19
  },
  {
    postcode: 3494,
    suburb: "Carwarp",
    state: "VIC",
    latitude: -34.46,
    longitude: 142.23
  },
  {
    postcode: 3494,
    suburb: "Colignan",
    state: "VIC",
    latitude: -34.46,
    longitude: 142.23
  },
  {
    postcode: 3494,
    suburb: "Iraak",
    state: "VIC",
    latitude: -34.46,
    longitude: 142.23
  },
  {
    postcode: 3494,
    suburb: "Nangiloc",
    state: "VIC",
    latitude: -34.46,
    longitude: 142.23
  },
  {
    postcode: 3496,
    suburb: "Cardross",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Cullulleraine",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Lindsay Point",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Meringur",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Merrinee",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Neds Corner",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Red Cliffs",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Sunnycliffs",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3496,
    suburb: "Werrimull",
    state: "VIC",
    latitude: -34.29,
    longitude: 142.15
  },
  {
    postcode: 3498,
    suburb: "Irymple",
    state: "VIC",
    latitude: -34.23,
    longitude: 142.18
  },
  {
    postcode: 3500,
    suburb: "Mildura",
    state: "VIC",
    latitude: -34.18,
    longitude: 142.16
  },
  {
    postcode: 3500,
    suburb: "Mildura West",
    state: "VIC",
    latitude: -34.18,
    longitude: 142.16
  },
  {
    postcode: 3500,
    suburb: "Paringi",
    state: "NSW",
    latitude: -34.18,
    longitude: 142.16
  },
  {
    postcode: 3501,
    suburb: "Hattah",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.33
  },
  {
    postcode: 3501,
    suburb: "Koorlong",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.33
  },
  {
    postcode: 3501,
    suburb: "Mildura Centre Plaza",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.33
  },
  {
    postcode: 3501,
    suburb: "Mildura South",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.33
  },
  {
    postcode: 3501,
    suburb: "Nichols Point",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.33
  },
  {
    postcode: 3502,
    suburb: "Mildura",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.26
  },
  {
    postcode: 3505,
    suburb: "Birdwoodton",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3505,
    suburb: "Cabarita",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3505,
    suburb: "Merbein",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3505,
    suburb: "Merbein South",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3505,
    suburb: "Merbein West",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3505,
    suburb: "Wargan",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3505,
    suburb: "Yelta",
    state: "VIC",
    latitude: -34.2,
    longitude: 142.06
  },
  {
    postcode: 3506,
    suburb: "Cowangie",
    state: "VIC",
    latitude: -35.28,
    longitude: 141.4
  },
  {
    postcode: 3507,
    suburb: "Walpeup",
    state: "VIC",
    latitude: -35.19,
    longitude: 142.02
  },
  {
    postcode: 3509,
    suburb: "Linga",
    state: "VIC",
    latitude: -35.17,
    longitude: 141.69
  },
  {
    postcode: 3509,
    suburb: "Underbool",
    state: "VIC",
    latitude: -35.17,
    longitude: 141.69
  },
  {
    postcode: 3512,
    suburb: "Carina",
    state: "VIC",
    latitude: -35.22,
    longitude: 141.09
  },
  {
    postcode: 3512,
    suburb: "Murrayville",
    state: "VIC",
    latitude: -35.22,
    longitude: 141.09
  },
  {
    postcode: 3512,
    suburb: "Panitya",
    state: "VIC",
    latitude: -35.22,
    longitude: 141.09
  },
  {
    postcode: 3515,
    suburb: "Marong",
    state: "VIC",
    latitude: -36.74,
    longitude: 144.13
  },
  {
    postcode: 3515,
    suburb: "Shelbourne",
    state: "VIC",
    latitude: -36.74,
    longitude: 144.13
  },
  {
    postcode: 3515,
    suburb: "Wilsons Hill",
    state: "VIC",
    latitude: -36.74,
    longitude: 144.13
  },
  {
    postcode: 3516,
    suburb: "Bridgewater",
    state: "VIC",
    latitude: -36.59,
    longitude: 143.92
  },
  {
    postcode: 3516,
    suburb: "Bridgewater North",
    state: "VIC",
    latitude: -36.59,
    longitude: 143.92
  },
  {
    postcode: 3516,
    suburb: "Bridgewater On Loddon",
    state: "VIC",
    latitude: -36.59,
    longitude: 143.92
  },
  {
    postcode: 3516,
    suburb: "Derby",
    state: "VIC",
    latitude: -36.59,
    longitude: 143.92
  },
  {
    postcode: 3516,
    suburb: "Leichardt",
    state: "VIC",
    latitude: -36.59,
    longitude: 143.92
  },
  {
    postcode: 3516,
    suburb: "Yarraberb",
    state: "VIC",
    latitude: -36.59,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Bears Lagoon",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Brenanah",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Glenalbyn",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Inglewood",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Jarklin",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Kingower",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Kurting",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Powlett Plains",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Rheola",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Salisbury West",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3517,
    suburb: "Serpentine",
    state: "VIC",
    latitude: -36.3,
    longitude: 143.92
  },
  {
    postcode: 3518,
    suburb: "Berrimal",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Borung",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Fentons Creek",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Fernihurst",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Fiery Flat",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Kurraca",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Kurraca West",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Mysia",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Nine Mile",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Richmond Plains",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Skinners Flat",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Wedderburn",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Wedderburn Junction",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Wehla",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Woolshed Flat",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3518,
    suburb: "Woosang",
    state: "VIC",
    latitude: -36.5,
    longitude: 143.46
  },
  {
    postcode: 3520,
    suburb: "Kinypanial",
    state: "VIC",
    latitude: -36.33,
    longitude: 143.84
  },
  {
    postcode: 3520,
    suburb: "Korong Vale",
    state: "VIC",
    latitude: -36.33,
    longitude: 143.84
  },
  {
    postcode: 3521,
    suburb: "Pyalong",
    state: "VIC",
    latitude: -37.12,
    longitude: 144.88
  },
  {
    postcode: 3522,
    suburb: "Glenhope East",
    state: "VIC",
    latitude: -37.13,
    longitude: 144.75
  },
  {
    postcode: 3522,
    suburb: "Tooborac",
    state: "VIC",
    latitude: -37.13,
    longitude: 144.75
  },
  {
    postcode: 3523,
    suburb: "Argyle",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Costerfield",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Derrinal",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Heathcote",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Heathcote South",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Knowsley",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Ladys Pass",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Moormbool West",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Mount Camel",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3523,
    suburb: "Redcastle",
    state: "VIC",
    latitude: -36.94,
    longitude: 144.73
  },
  {
    postcode: 3525,
    suburb: "Barrakee",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Buckrabanyule",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Charlton",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Chirrip",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Granite Flat",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Lake Marmal",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Nareewillock",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Terrappee",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Wooroonook",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Wychitella",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Wychitella North",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Yeungroon",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3525,
    suburb: "Yeungroon East",
    state: "VIC",
    latitude: -36.27,
    longitude: 143.43
  },
  {
    postcode: 3527,
    suburb: "Bunguluke",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Dumosa",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Glenloth",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Glenloth East",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Jeruk",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Ninyeunook",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Teddywaddy",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Teddywaddy West",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Thalia",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Towaninny",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Towaninny South",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Wycheproof",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3527,
    suburb: "Wycheproof South",
    state: "VIC",
    latitude: -36.06,
    longitude: 143.39
  },
  {
    postcode: 3529,
    suburb: "Kalpienung",
    state: "VIC",
    latitude: -35.78,
    longitude: 143.26
  },
  {
    postcode: 3529,
    suburb: "Nullawil",
    state: "VIC",
    latitude: -35.78,
    longitude: 143.26
  },
  {
    postcode: 3530,
    suburb: "Culgoa",
    state: "VIC",
    latitude: -35.72,
    longitude: 143.11
  },
  {
    postcode: 3530,
    suburb: "Sutton",
    state: "VIC",
    latitude: -35.72,
    longitude: 143.11
  },
  {
    postcode: 3530,
    suburb: "Wangie",
    state: "VIC",
    latitude: -35.72,
    longitude: 143.11
  },
  {
    postcode: 3530,
    suburb: "Warne",
    state: "VIC",
    latitude: -35.72,
    longitude: 143.11
  },
  {
    postcode: 3531,
    suburb: "Berriwillock",
    state: "VIC",
    latitude: -35.64,
    longitude: 142.99
  },
  {
    postcode: 3531,
    suburb: "Boigbeat",
    state: "VIC",
    latitude: -35.64,
    longitude: 142.99
  },
  {
    postcode: 3533,
    suburb: "Bimbourie",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Lake Tyrrell",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Myall",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Nandaly",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Ninda",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Nyarrin",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Pier Milan",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Sea Lake",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Straten",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Tyenna",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Tyrrell",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3533,
    suburb: "Tyrrell Downs",
    state: "VIC",
    latitude: -35.36,
    longitude: 142.79
  },
  {
    postcode: 3537,
    suburb: "Barraport",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Barraport West",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Boort",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Canary Island",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Catumnal",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Gredgwin",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Leaghur",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Minmindie",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3537,
    suburb: "Yando",
    state: "VIC",
    latitude: -36.01,
    longitude: 143.67
  },
  {
    postcode: 3540,
    suburb: "Cannie",
    state: "VIC",
    latitude: -35.76,
    longitude: 143.45
  },
  {
    postcode: 3540,
    suburb: "Oakvale",
    state: "VIC",
    latitude: -35.76,
    longitude: 143.45
  },
  {
    postcode: 3540,
    suburb: "Quambatook",
    state: "VIC",
    latitude: -35.76,
    longitude: 143.45
  },
  {
    postcode: 3542,
    suburb: "Cokum",
    state: "VIC",
    latitude: -35.76,
    longitude: 143.28
  },
  {
    postcode: 3542,
    suburb: "Lalbert",
    state: "VIC",
    latitude: -35.76,
    longitude: 143.28
  },
  {
    postcode: 3542,
    suburb: "Tittybong",
    state: "VIC",
    latitude: -35.76,
    longitude: 143.28
  },
  {
    postcode: 3544,
    suburb: "Chinangin",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3544,
    suburb: "Gowanford",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3544,
    suburb: "Murnungin",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3544,
    suburb: "Springfield",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3544,
    suburb: "Ultima",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3544,
    suburb: "Ultima East",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3544,
    suburb: "Waitchie",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.2
  },
  {
    postcode: 3546,
    suburb: "Bolton",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3546,
    suburb: "Chinkapook",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3546,
    suburb: "Cocamba",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3546,
    suburb: "Gerahmin",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3546,
    suburb: "Manangatang",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3546,
    suburb: "Turoar",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3546,
    suburb: "Winnambool",
    state: "VIC",
    latitude: -34.96,
    longitude: 142.88
  },
  {
    postcode: 3549,
    suburb: "Annuello",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Bannerton",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Happy Valley",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Liparoo",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Robinvale",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Robinvale Irrigation District Section B",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Robinvale Irrigation District Section C",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Robinvale Irrigation District Section D",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Robinvale Irrigation District Section E",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Tol Tol",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Wandown",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3549,
    suburb: "Wemen",
    state: "VIC",
    latitude: -34.85,
    longitude: 142.83
  },
  {
    postcode: 3550,
    suburb: "Bendigo",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Bendigo South",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "East Bendigo",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Flora Hill",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Ironbark",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Kennington",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Long Gully",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "North Bendigo",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Quarry Hill",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Sandhurst East",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Spring Gully",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "Strathdale",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "West Bendigo",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3550,
    suburb: "White Hills",
    state: "VIC",
    latitude: -36.76,
    longitude: 144.28
  },
  {
    postcode: 3551,
    suburb: "Arnold",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Arnold West",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Ascot",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Axe Creek",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Axedale",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Bagshot",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Bagshot North",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Bendigo Forward",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Cornella",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Emu Creek",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Eppalock",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Epsom",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Huntly",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Huntly North",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Junortoun",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Kimbolton",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Lake Eppalock",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Llanelly",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Lockwood",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Lockwood South",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Longlea",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Maiden Gully",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Mandurang",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Mandurang South",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Minto",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Murphys Creek",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Myola",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Newbridge",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Painswick",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Sedgwick",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Strathfieldsaye",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Tarnagulla",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Toolleen",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Waanyarra",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Wellsford",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3551,
    suburb: "Woodstock On Loddon",
    state: "VIC",
    latitude: -36.69,
    longitude: 143.87
  },
  {
    postcode: 3552,
    suburb: "Bendigo",
    state: "VIC",
    latitude: -37.83,
    longitude: 145.01
  },
  {
    postcode: 3554,
    suburb: "Bendigo DC",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3555,
    suburb: "Big Hill",
    state: "VIC",
    latitude: -36.83,
    longitude: 144.23
  },
  {
    postcode: 3555,
    suburb: "Golden Gully",
    state: "VIC",
    latitude: -36.83,
    longitude: 144.23
  },
  {
    postcode: 3555,
    suburb: "Golden Square",
    state: "VIC",
    latitude: -36.83,
    longitude: 144.23
  },
  {
    postcode: 3555,
    suburb: "Kangaroo Flat",
    state: "VIC",
    latitude: -36.83,
    longitude: 144.23
  },
  {
    postcode: 3555,
    suburb: "Lansell Plaza",
    state: "VIC",
    latitude: -36.83,
    longitude: 144.23
  },
  {
    postcode: 3556,
    suburb: "California Gully",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Campbells Forest",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Eaglehawk",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Eaglehawk North",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Jackass Flat",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Myers Flat",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Sailors Gully",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Sebastian",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Whipstick",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3556,
    suburb: "Woodvale",
    state: "VIC",
    latitude: -36.73,
    longitude: 144.26
  },
  {
    postcode: 3557,
    suburb: "Barnadown",
    state: "VIC",
    latitude: -36.65,
    longitude: 144.51
  },
  {
    postcode: 3557,
    suburb: "Fosterville",
    state: "VIC",
    latitude: -36.65,
    longitude: 144.51
  },
  {
    postcode: 3557,
    suburb: "Goornong",
    state: "VIC",
    latitude: -36.65,
    longitude: 144.51
  },
  {
    postcode: 3557,
    suburb: "Muskerry",
    state: "VIC",
    latitude: -36.65,
    longitude: 144.51
  },
  {
    postcode: 3558,
    suburb: "Burnewang",
    state: "VIC",
    latitude: -36.49,
    longitude: 144.71
  },
  {
    postcode: 3558,
    suburb: "Corop West",
    state: "VIC",
    latitude: -36.49,
    longitude: 144.71
  },
  {
    postcode: 3558,
    suburb: "Elmore",
    state: "VIC",
    latitude: -36.49,
    longitude: 144.71
  },
  {
    postcode: 3558,
    suburb: "Hunter",
    state: "VIC",
    latitude: -36.49,
    longitude: 144.71
  },
  {
    postcode: 3558,
    suburb: "Runnymede",
    state: "VIC",
    latitude: -36.49,
    longitude: 144.71
  },
  {
    postcode: 3559,
    suburb: "Avonmore",
    state: "VIC",
    latitude: -36.53,
    longitude: 144.6
  },
  {
    postcode: 3559,
    suburb: "Burramboot",
    state: "VIC",
    latitude: -36.53,
    longitude: 144.6
  },
  {
    postcode: 3559,
    suburb: "Colbinabbin",
    state: "VIC",
    latitude: -36.53,
    longitude: 144.6
  },
  {
    postcode: 3559,
    suburb: "Corop",
    state: "VIC",
    latitude: -36.53,
    longitude: 144.6
  },
  {
    postcode: 3559,
    suburb: "Gobarup",
    state: "VIC",
    latitude: -36.53,
    longitude: 144.6
  },
  {
    postcode: 3561,
    suburb: "Ballendella",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Bamawm",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Bamawm Extension",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Bonn",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Diggora",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Fairy Dell",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Nanneella",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Rochester",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3561,
    suburb: "Timmering",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.67
  },
  {
    postcode: 3562,
    suburb: "Torrumbarry",
    state: "VIC",
    latitude: -35.98,
    longitude: 144.46
  },
  {
    postcode: 3563,
    suburb: "Lockington",
    state: "VIC",
    latitude: -36.27,
    longitude: 144.48
  },
  {
    postcode: 3564,
    suburb: "Echuca",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Echuca South",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Echuca Village",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Echuca West",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Kanyapella",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Patho",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Roslynmead",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3564,
    suburb: "Wharparilla",
    state: "VIC",
    latitude: -36.13,
    longitude: 144.73
  },
  {
    postcode: 3565,
    suburb: "Kotta",
    state: "VIC",
    latitude: -36.19,
    longitude: 144.53
  },
  {
    postcode: 3566,
    suburb: "Gunbower",
    state: "VIC",
    latitude: -35.96,
    longitude: 144.37
  },
  {
    postcode: 3567,
    suburb: "Horfield",
    state: "VIC",
    latitude: -35.89,
    longitude: 144.24
  },
  {
    postcode: 3567,
    suburb: "Leitchville",
    state: "VIC",
    latitude: -35.89,
    longitude: 144.24
  },
  {
    postcode: 3568,
    suburb: "Burkes Bridge",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Cohuna",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Cullen",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Daltons Bridge",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Gannawarra",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Keely",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Macorna North",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Mcmillans",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Mead",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Mincha West",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3568,
    suburb: "Wee Wee Rup",
    state: "VIC",
    latitude: -35.84,
    longitude: 144.34
  },
  {
    postcode: 3570,
    suburb: "Auchmore",
    state: "VIC",
    latitude: -36.47,
    longitude: 144.11
  },
  {
    postcode: 3570,
    suburb: "Drummartin",
    state: "VIC",
    latitude: -36.47,
    longitude: 144.11
  },
  {
    postcode: 3570,
    suburb: "Kamarooka",
    state: "VIC",
    latitude: -36.47,
    longitude: 144.11
  },
  {
    postcode: 3570,
    suburb: "Neilborough",
    state: "VIC",
    latitude: -36.47,
    longitude: 144.11
  },
  {
    postcode: 3570,
    suburb: "Raywood",
    state: "VIC",
    latitude: -36.47,
    longitude: 144.11
  },
  {
    postcode: 3571,
    suburb: "Dingee",
    state: "VIC",
    latitude: -36.37,
    longitude: 144.23
  },
  {
    postcode: 3571,
    suburb: "Kamarooka North",
    state: "VIC",
    latitude: -36.37,
    longitude: 144.23
  },
  {
    postcode: 3571,
    suburb: "Pompapiel",
    state: "VIC",
    latitude: -36.37,
    longitude: 144.23
  },
  {
    postcode: 3571,
    suburb: "Tandarra",
    state: "VIC",
    latitude: -36.37,
    longitude: 144.23
  },
  {
    postcode: 3572,
    suburb: "Milloo",
    state: "VIC",
    latitude: -36.36,
    longitude: 144.38
  },
  {
    postcode: 3572,
    suburb: "Piavella",
    state: "VIC",
    latitude: -36.36,
    longitude: 144.38
  },
  {
    postcode: 3572,
    suburb: "Prairie",
    state: "VIC",
    latitude: -36.36,
    longitude: 144.38
  },
  {
    postcode: 3572,
    suburb: "Tennyson",
    state: "VIC",
    latitude: -36.36,
    longitude: 144.38
  },
  {
    postcode: 3573,
    suburb: "Calivil",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.09
  },
  {
    postcode: 3573,
    suburb: "Mitiamo",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.09
  },
  {
    postcode: 3573,
    suburb: "Pine Grove",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.09
  },
  {
    postcode: 3573,
    suburb: "Terrick Terrick East",
    state: "VIC",
    latitude: -36.3,
    longitude: 144.09
  },
  {
    postcode: 3575,
    suburb: "Gladfield",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Jungaburra",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Loddon Vale",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Mincha",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Mologa",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Pyramid Hill",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Sylvaterre",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Terrick Terrick",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3575,
    suburb: "Yarrawalla",
    state: "VIC",
    latitude: -36.04,
    longitude: 143.99
  },
  {
    postcode: 3576,
    suburb: "Durham Ox",
    state: "VIC",
    latitude: -36.2,
    longitude: 143.96
  },
  {
    postcode: 3579,
    suburb: "Appin",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Appin South",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Bael Bael",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Beauchamp",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Benjeroop",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Budgerum East",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Capels Crossing",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Dingwall",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Fairley",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Gonn Crossing",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Kerang",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Kerang East",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Koroop",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Lake Meran",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Macorna",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Meering West",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Milnes Bridge",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Murrabit",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Murrabit West",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Myall",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Mystic Park",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Normanville",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Pine View",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Reedy Lake",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Sandhill Lake",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Teal Point",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Tragowel",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Wandella",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3579,
    suburb: "Westby",
    state: "VIC",
    latitude: -35.88,
    longitude: 143.87
  },
  {
    postcode: 3580,
    suburb: "Koondrook",
    state: "VIC",
    latitude: -35.64,
    longitude: 144.11
  },
  {
    postcode: 3581,
    suburb: "Lake Charm",
    state: "VIC",
    latitude: -35.62,
    longitude: 143.8
  },
  {
    postcode: 3583,
    suburb: "Tresco",
    state: "VIC",
    latitude: -35.51,
    longitude: 143.64
  },
  {
    postcode: 3584,
    suburb: "Lake Boga",
    state: "VIC",
    latitude: -35.46,
    longitude: 143.63
  },
  {
    postcode: 3584,
    suburb: "Tresco West",
    state: "VIC",
    latitude: -35.46,
    longitude: 143.63
  },
  {
    postcode: 3585,
    suburb: "Castle Donnington",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Chillingollah",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Fish Point",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Goschen",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Kunat",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Meatian",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Murray Downs",
    state: "NSW",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Nowie",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Nyrraby",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Pira",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Polisbet",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Speewa",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Swan Hill",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Swan Hill Pioneer",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Swan Hill West",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3585,
    suburb: "Winlaton",
    state: "VIC",
    latitude: -35.42,
    longitude: 143.59
  },
  {
    postcode: 3586,
    suburb: "Bulga",
    state: "VIC",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3586,
    suburb: "Mallan",
    state: "NSW",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3586,
    suburb: "Murrawee",
    state: "VIC",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3586,
    suburb: "Murraydale",
    state: "VIC",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3586,
    suburb: "Pental Island",
    state: "VIC",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3586,
    suburb: "Tyntynder",
    state: "VIC",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3586,
    suburb: "Tyntynder South",
    state: "VIC",
    latitude: -35.3,
    longitude: 143.36
  },
  {
    postcode: 3588,
    suburb: "Woorinen South",
    state: "VIC",
    latitude: -35.27,
    longitude: 143.45
  },
  {
    postcode: 3589,
    suburb: "Woorinen",
    state: "VIC",
    latitude: -35.26,
    longitude: 143.47
  },
  {
    postcode: 3589,
    suburb: "Woorinen North",
    state: "VIC",
    latitude: -35.26,
    longitude: 143.47
  },
  {
    postcode: 3590,
    suburb: "Beverford",
    state: "VIC",
    latitude: -35.24,
    longitude: 143.48
  },
  {
    postcode: 3591,
    suburb: "Vinifera",
    state: "VIC",
    latitude: -35.22,
    longitude: 143.41
  },
  {
    postcode: 3594,
    suburb: "Nyah",
    state: "VIC",
    latitude: -35.15,
    longitude: 143.36
  },
  {
    postcode: 3595,
    suburb: "Nyah West",
    state: "VIC",
    latitude: -35.19,
    longitude: 143.35
  },
  {
    postcode: 3596,
    suburb: "Miralie",
    state: "VIC",
    latitude: -35.12,
    longitude: 143.33
  },
  {
    postcode: 3596,
    suburb: "Towan",
    state: "VIC",
    latitude: -35.12,
    longitude: 143.33
  },
  {
    postcode: 3596,
    suburb: "Wood Wood",
    state: "VIC",
    latitude: -35.12,
    longitude: 143.33
  },
  {
    postcode: 3597,
    suburb: "Kenley",
    state: "VIC",
    latitude: -34.86,
    longitude: 143.34
  },
  {
    postcode: 3597,
    suburb: "Kooloonong",
    state: "VIC",
    latitude: -34.86,
    longitude: 143.34
  },
  {
    postcode: 3597,
    suburb: "Lake Powell",
    state: "VIC",
    latitude: -34.86,
    longitude: 143.34
  },
  {
    postcode: 3597,
    suburb: "Narrung",
    state: "VIC",
    latitude: -34.86,
    longitude: 143.34
  },
  {
    postcode: 3597,
    suburb: "Natya",
    state: "VIC",
    latitude: -34.86,
    longitude: 143.34
  },
  {
    postcode: 3597,
    suburb: "Piangil",
    state: "VIC",
    latitude: -34.86,
    longitude: 143.34
  },
  {
    postcode: 3599,
    suburb: "Boundary Bend",
    state: "VIC",
    latitude: -34.74,
    longitude: 143.14
  },
  {
    postcode: 3607,
    suburb: "Tabilk",
    state: "VIC",
    latitude: -36.85,
    longitude: 145.2
  },
  {
    postcode: 3608,
    suburb: "Bailieston",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Goulburn Weir",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Graytown",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Kirwans Bridge",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Mitchellstown",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Nagambie",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Wahring",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3608,
    suburb: "Wirrate",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.03
  },
  {
    postcode: 3610,
    suburb: "Dhurringile",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.28
  },
  {
    postcode: 3610,
    suburb: "Moorilim",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.28
  },
  {
    postcode: 3610,
    suburb: "Murchison",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.28
  },
  {
    postcode: 3610,
    suburb: "Murchison East",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.28
  },
  {
    postcode: 3610,
    suburb: "Murchison North",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.28
  },
  {
    postcode: 3612,
    suburb: "Moora",
    state: "VIC",
    latitude: -36.59,
    longitude: 144.95
  },
  {
    postcode: 3612,
    suburb: "Rushworth",
    state: "VIC",
    latitude: -36.59,
    longitude: 144.95
  },
  {
    postcode: 3612,
    suburb: "Wanalta",
    state: "VIC",
    latitude: -36.59,
    longitude: 144.95
  },
  {
    postcode: 3612,
    suburb: "Waranga Shores",
    state: "VIC",
    latitude: -36.59,
    longitude: 144.95
  },
  {
    postcode: 3612,
    suburb: "Whroo",
    state: "VIC",
    latitude: -36.59,
    longitude: 144.95
  },
  {
    postcode: 3614,
    suburb: "Toolamba",
    state: "VIC",
    latitude: -36.48,
    longitude: 145.26
  },
  {
    postcode: 3614,
    suburb: "Toolamba West",
    state: "VIC",
    latitude: -36.48,
    longitude: 145.26
  },
  {
    postcode: 3616,
    suburb: "Cooma",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Gillieston",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Girgarre East",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Harston",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Mooroopna North West",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Tatura",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Tatura East",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3616,
    suburb: "Waranga",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.07
  },
  {
    postcode: 3617,
    suburb: "Byrneside",
    state: "VIC",
    latitude: -36.42,
    longitude: 145.15
  },
  {
    postcode: 3618,
    suburb: "Merrigum",
    state: "VIC",
    latitude: -36.37,
    longitude: 145.17
  },
  {
    postcode: 3619,
    suburb: "Kyabram",
    state: "VIC",
    latitude: -37.66,
    longitude: 144.94
  },
  {
    postcode: 3620,
    suburb: "Kyabram",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3620,
    suburb: "Kyabram South",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3620,
    suburb: "Lancaster",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3620,
    suburb: "St Germains",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3620,
    suburb: "Taripta",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3620,
    suburb: "Wyuna",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3620,
    suburb: "Wyuna East",
    state: "VIC",
    latitude: -36.31,
    longitude: 145.05
  },
  {
    postcode: 3621,
    suburb: "Kyvalley",
    state: "VIC",
    latitude: -36.27,
    longitude: 144.85
  },
  {
    postcode: 3621,
    suburb: "Tongala",
    state: "VIC",
    latitude: -36.27,
    longitude: 144.85
  },
  {
    postcode: 3621,
    suburb: "Yambuna",
    state: "VIC",
    latitude: -36.27,
    longitude: 144.85
  },
  {
    postcode: 3622,
    suburb: "Koyuga",
    state: "VIC",
    latitude: -36.16,
    longitude: 144.77
  },
  {
    postcode: 3622,
    suburb: "Strathallan",
    state: "VIC",
    latitude: -36.16,
    longitude: 144.77
  },
  {
    postcode: 3623,
    suburb: "Carag Carag",
    state: "VIC",
    latitude: -36.46,
    longitude: 144.9
  },
  {
    postcode: 3623,
    suburb: "Stanhope",
    state: "VIC",
    latitude: -36.46,
    longitude: 144.9
  },
  {
    postcode: 3623,
    suburb: "Stanhope South",
    state: "VIC",
    latitude: -36.46,
    longitude: 144.9
  },
  {
    postcode: 3624,
    suburb: "Girgarre",
    state: "VIC",
    latitude: -36.44,
    longitude: 145.07
  },
  {
    postcode: 3629,
    suburb: "Ardmona",
    state: "VIC",
    latitude: -36.38,
    longitude: 145.3
  },
  {
    postcode: 3629,
    suburb: "Coomboona",
    state: "VIC",
    latitude: -36.38,
    longitude: 145.3
  },
  {
    postcode: 3629,
    suburb: "Mooroopna",
    state: "VIC",
    latitude: -36.38,
    longitude: 145.3
  },
  {
    postcode: 3629,
    suburb: "Mooroopna North",
    state: "VIC",
    latitude: -36.38,
    longitude: 145.3
  },
  {
    postcode: 3629,
    suburb: "Undera",
    state: "VIC",
    latitude: -36.38,
    longitude: 145.3
  },
  {
    postcode: 3630,
    suburb: "Branditt",
    state: "VIC",
    latitude: -36.36,
    longitude: 145.4
  },
  {
    postcode: 3630,
    suburb: "Caniambo",
    state: "VIC",
    latitude: -36.36,
    longitude: 145.4
  },
  {
    postcode: 3630,
    suburb: "Colliver",
    state: "VIC",
    latitude: -36.36,
    longitude: 145.4
  },
  {
    postcode: 3630,
    suburb: "Dunkirk",
    state: "VIC",
    latitude: -36.36,
    longitude: 145.4
  },
  {
    postcode: 3630,
    suburb: "Shepparton",
    state: "VIC",
    latitude: -36.36,
    longitude: 145.4
  },
  {
    postcode: 3630,
    suburb: "Shepparton South",
    state: "VIC",
    latitude: -36.36,
    longitude: 145.4
  },
  {
    postcode: 3631,
    suburb: "Arcadia",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Arcadia South",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Cosgrove",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Cosgrove South",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Grahamvale",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Karramomus",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Kialla",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Kialla East",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Kialla West",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Lemnos",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Orrvale",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Pine Lodge",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Shepparton East",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3631,
    suburb: "Shepparton North",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.36
  },
  {
    postcode: 3632,
    suburb: "Shepparton",
    state: "VIC",
    latitude: -36.54,
    longitude: 145.6
  },
  {
    postcode: 3633,
    suburb: "Congupna",
    state: "VIC",
    latitude: -36.3,
    longitude: 145.48
  },
  {
    postcode: 3634,
    suburb: "Bunbartha",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3634,
    suburb: "Katandra",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3634,
    suburb: "Katandra West",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3634,
    suburb: "Marionvale",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3634,
    suburb: "Marungi",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3634,
    suburb: "Tallygaroopna",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3634,
    suburb: "Zeerust",
    state: "VIC",
    latitude: -36.22,
    longitude: 145.34
  },
  {
    postcode: 3635,
    suburb: "Kaarimba",
    state: "VIC",
    latitude: -36.16,
    longitude: 145.3
  },
  {
    postcode: 3635,
    suburb: "Mundoona",
    state: "VIC",
    latitude: -36.16,
    longitude: 145.3
  },
  {
    postcode: 3635,
    suburb: "Wunghnu",
    state: "VIC",
    latitude: -36.16,
    longitude: 145.3
  },
  {
    postcode: 3636,
    suburb: "Drumanure",
    state: "VIC",
    latitude: -36.14,
    longitude: 145.5
  },
  {
    postcode: 3636,
    suburb: "Invergordon",
    state: "VIC",
    latitude: -36.14,
    longitude: 145.5
  },
  {
    postcode: 3636,
    suburb: "Naring",
    state: "VIC",
    latitude: -36.14,
    longitude: 145.5
  },
  {
    postcode: 3636,
    suburb: "Numurkah",
    state: "VIC",
    latitude: -36.14,
    longitude: 145.5
  },
  {
    postcode: 3637,
    suburb: "Waaia",
    state: "VIC",
    latitude: -36.05,
    longitude: 145.33
  },
  {
    postcode: 3637,
    suburb: "Yalca",
    state: "VIC",
    latitude: -36.05,
    longitude: 145.33
  },
  {
    postcode: 3638,
    suburb: "Kotupna",
    state: "VIC",
    latitude: -36.15,
    longitude: 145.17
  },
  {
    postcode: 3638,
    suburb: "Nathalia",
    state: "VIC",
    latitude: -36.15,
    longitude: 145.17
  },
  {
    postcode: 3638,
    suburb: "Yielima",
    state: "VIC",
    latitude: -36.15,
    longitude: 145.17
  },
  {
    postcode: 3639,
    suburb: "Barmah",
    state: "VIC",
    latitude: -36.02,
    longitude: 144.97
  },
  {
    postcode: 3639,
    suburb: "Lower Moira",
    state: "VIC",
    latitude: -36.02,
    longitude: 144.97
  },
  {
    postcode: 3639,
    suburb: "Picola",
    state: "VIC",
    latitude: -36.02,
    longitude: 144.97
  },
  {
    postcode: 3639,
    suburb: "Picola West",
    state: "VIC",
    latitude: -36.02,
    longitude: 144.97
  },
  {
    postcode: 3640,
    suburb: "Katunga",
    state: "VIC",
    latitude: -35.97,
    longitude: 145.46
  },
  {
    postcode: 3641,
    suburb: "Bearii",
    state: "VIC",
    latitude: -35.92,
    longitude: 145.33
  },
  {
    postcode: 3641,
    suburb: "Mywee",
    state: "VIC",
    latitude: -35.92,
    longitude: 145.33
  },
  {
    postcode: 3641,
    suburb: "Strathmerton",
    state: "VIC",
    latitude: -35.92,
    longitude: 145.33
  },
  {
    postcode: 3641,
    suburb: "Ulupna",
    state: "VIC",
    latitude: -35.92,
    longitude: 145.33
  },
  {
    postcode: 3643,
    suburb: "Cobram",
    state: "VIC",
    latitude: -35.96,
    longitude: 145.63
  },
  {
    postcode: 3644,
    suburb: "Barooga",
    state: "NSW",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3644,
    suburb: "Cobram",
    state: "VIC",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3644,
    suburb: "Cobram East",
    state: "VIC",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3644,
    suburb: "Koonoomoo",
    state: "VIC",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3644,
    suburb: "Lalalty",
    state: "NSW",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3644,
    suburb: "Muckatah",
    state: "VIC",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3644,
    suburb: "Yarroweyah",
    state: "VIC",
    latitude: -35.91,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Dookie",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Mount Major",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Nalinga",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Waggarandall",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Yabba North",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Yabba South",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3646,
    suburb: "Youanmite",
    state: "VIC",
    latitude: -36.33,
    longitude: 145.69
  },
  {
    postcode: 3647,
    suburb: "Dookie College",
    state: "VIC",
    latitude: -36.4,
    longitude: 145.7
  },
  {
    postcode: 3649,
    suburb: "Katamatite",
    state: "VIC",
    latitude: -36.08,
    longitude: 145.69
  },
  {
    postcode: 3649,
    suburb: "Katamatite East",
    state: "VIC",
    latitude: -36.08,
    longitude: 145.69
  },
  {
    postcode: 3658,
    suburb: "Broadford",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Clonbinane",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Flowerdale",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Hazeldene",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Reedy Creek",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Strath Creek",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Sugarloaf Creek",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Sunday Creek",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Tyaak",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3658,
    suburb: "Waterford Park",
    state: "VIC",
    latitude: -37.2,
    longitude: 145.05
  },
  {
    postcode: 3659,
    suburb: "Tallarook",
    state: "VIC",
    latitude: -37.13,
    longitude: 145.02
  },
  {
    postcode: 3660,
    suburb: "Caveat",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Dropmore",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Highlands",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Hilldene",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Kerrisdale",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Northwood",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Seymour",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Seymour South",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Trawool",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3660,
    suburb: "Whiteheads Creek",
    state: "VIC",
    latitude: -37.09,
    longitude: 145.5
  },
  {
    postcode: 3661,
    suburb: "Seymour",
    state: "VIC",
    latitude: -38.2,
    longitude: 146.54
  },
  {
    postcode: 3662,
    suburb: "Puckapunyal",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3662,
    suburb: "Puckapunyal Milpo",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3663,
    suburb: "Mangalore",
    state: "VIC",
    latitude: -36.94,
    longitude: 145.16
  },
  {
    postcode: 3664,
    suburb: "Avenel",
    state: "VIC",
    latitude: -36.89,
    longitude: 145.23
  },
  {
    postcode: 3664,
    suburb: "Upton Hill",
    state: "VIC",
    latitude: -36.89,
    longitude: 145.23
  },
  {
    postcode: 3665,
    suburb: "Locksley",
    state: "VIC",
    latitude: -36.82,
    longitude: 145.36
  },
  {
    postcode: 3665,
    suburb: "Longwood",
    state: "VIC",
    latitude: -36.82,
    longitude: 145.36
  },
  {
    postcode: 3666,
    suburb: "Balmattum",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Creightons Creek",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Euroa",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Gooram",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Kelvin View",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Kithbrook",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Longwood East",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Miepoll",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Moglonemby",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Molka",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Pranjip",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Riggs Creek",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Ruffy",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Sheans Creek",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Strathbogie",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3666,
    suburb: "Tarcombe",
    state: "VIC",
    latitude: -36.71,
    longitude: 145.64
  },
  {
    postcode: 3669,
    suburb: "Boho",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Boho South",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Creek Junction",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Earlston",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Gowangardie",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Koonda",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Marraweeney",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Tamleugh",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Tamleugh North",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Upotipotpon",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3669,
    suburb: "Violet Town",
    state: "VIC",
    latitude: -36.7,
    longitude: 145.77
  },
  {
    postcode: 3670,
    suburb: "Baddaginnie",
    state: "VIC",
    latitude: -36.59,
    longitude: 145.86
  },
  {
    postcode: 3670,
    suburb: "Tarnook",
    state: "VIC",
    latitude: -36.59,
    longitude: 145.86
  },
  {
    postcode: 3670,
    suburb: "Warrenbayne",
    state: "VIC",
    latitude: -36.59,
    longitude: 145.86
  },
  {
    postcode: 3671,
    suburb: "Benalla",
    state: "VIC",
    latitude: -36.39,
    longitude: 145.42
  },
  {
    postcode: 3672,
    suburb: "Benalla",
    state: "VIC",
    latitude: -36.55,
    longitude: 145.99
  },
  {
    postcode: 3672,
    suburb: "Benalla West",
    state: "VIC",
    latitude: -36.55,
    longitude: 145.99
  },
  {
    postcode: 3673,
    suburb: "Broken Creek",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Goomalibee",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Lima",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Lima East",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Lima South",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Lurg",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Molyullah",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Moorngag",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Samaria",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Swanpool",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Tatong",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Upper Lurg",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Upper Ryans Creek",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Winton",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3673,
    suburb: "Winton North",
    state: "VIC",
    latitude: -36.43,
    longitude: 145.89
  },
  {
    postcode: 3675,
    suburb: "Boweya",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Boweya North",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Glenrowan",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Glenrowan West",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Greta",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Greta South",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Greta West",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Hansonville",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Mount Bruno",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3675,
    suburb: "Taminick",
    state: "VIC",
    latitude: -36.27,
    longitude: 146.13
  },
  {
    postcode: 3676,
    suburb: "Wangaratta",
    state: "VIC",
    latitude: -36.34,
    longitude: 146.34
  },
  {
    postcode: 3677,
    suburb: "Wangaratta",
    state: "VIC",
    latitude: -36.35,
    longitude: 146.3
  },
  {
    postcode: 3677,
    suburb: "Wangaratta West",
    state: "VIC",
    latitude: -36.35,
    longitude: 146.3
  },
  {
    postcode: 3677,
    suburb: "Yarrunga",
    state: "VIC",
    latitude: -36.35,
    longitude: 146.3
  },
  {
    postcode: 3678,
    suburb: "Bobinawarrah",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Boorhaman",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Boorhaman East",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Bowser",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Byawatha",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Carboor",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Cheshunt",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Cheshunt South",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Docker",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Dockers Plains",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "East Wangaratta",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Edi",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Edi Upper",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Everton",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Everton Upper",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Killawarra",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "King Valley",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Laceby",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Londrigan",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Markwood",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Meadow Creek",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Milawa",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "North Wangaratta",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Oxley",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Oxley Flats",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Peechelba",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Peechelba East",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Rose River",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Tarrawingee",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Wabonga",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Waldara",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Wangandary",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Wangaratta Forward",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Wangaratta South",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3678,
    suburb: "Whitlands",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.5
  },
  {
    postcode: 3682,
    suburb: "Boralma",
    state: "VIC",
    latitude: -36.24,
    longitude: 146.41
  },
  {
    postcode: 3682,
    suburb: "Lilliput",
    state: "VIC",
    latitude: -36.24,
    longitude: 146.41
  },
  {
    postcode: 3682,
    suburb: "Norong",
    state: "VIC",
    latitude: -36.24,
    longitude: 146.41
  },
  {
    postcode: 3682,
    suburb: "Springhurst",
    state: "VIC",
    latitude: -36.24,
    longitude: 146.41
  },
  {
    postcode: 3683,
    suburb: "Chiltern",
    state: "VIC",
    latitude: -36.15,
    longitude: 146.61
  },
  {
    postcode: 3683,
    suburb: "Chiltern Valley",
    state: "VIC",
    latitude: -36.15,
    longitude: 146.61
  },
  {
    postcode: 3683,
    suburb: "Cornishtown",
    state: "VIC",
    latitude: -36.15,
    longitude: 146.61
  },
  {
    postcode: 3685,
    suburb: "Boorhaman North",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Brimin",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Browns Plains",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Carlyle",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Gooramadda",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Great Southern",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Lake Moodemere",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Prentice North",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3685,
    suburb: "Rutherglen",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.22
  },
  {
    postcode: 3687,
    suburb: "Wahgunyah",
    state: "VIC",
    latitude: -36.01,
    longitude: 146.4
  },
  {
    postcode: 3688,
    suburb: "Barnawartha",
    state: "VIC",
    latitude: -36.11,
    longitude: 146.67
  },
  {
    postcode: 3688,
    suburb: "Indigo Valley",
    state: "VIC",
    latitude: -36.11,
    longitude: 146.67
  },
  {
    postcode: 3689,
    suburb: "Wodonga",
    state: "VIC",
    latitude: -37.68,
    longitude: 144.99
  },
  {
    postcode: 3690,
    suburb: "West Wodonga",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.82
  },
  {
    postcode: 3690,
    suburb: "Wodonga",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.82
  },
  {
    postcode: 3690,
    suburb: "Wodonga Plaza",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.82
  },
  {
    postcode: 3691,
    suburb: "Allans Flat",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Bandiana",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Baranduda",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Barnawartha North",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Bellbridge",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Berringama",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Bethanga",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Bonegilla",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Bungil",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Castle Creek",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Coral Bank",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Dederang",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Ebden",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Gateway Island",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Glen Creek",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Gundowring",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Huon Creek",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Kancoona",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Kergunyah",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Kergunyah South",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Kiewa",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Killara",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Lake Hume Village",
    state: "NSW",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Leneva",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Lucyvale",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Mongans Bridge",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Osbornes Flat",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Running Creek",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Staghorn Flat",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Talgarno",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Tangambalanga",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Thologolong",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Upper Gundowring",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3691,
    suburb: "Wodonga Forward",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.91
  },
  {
    postcode: 3694,
    suburb: "Bandiana Milpo",
    state: "VIC",
    latitude: -36.14,
    longitude: 146.92
  },
  {
    postcode: 3695,
    suburb: "Charleroi",
    state: "VIC",
    latitude: -36.3,
    longitude: 147.14
  },
  {
    postcode: 3695,
    suburb: "Huon",
    state: "VIC",
    latitude: -36.3,
    longitude: 147.14
  },
  {
    postcode: 3695,
    suburb: "Sandy Creek",
    state: "VIC",
    latitude: -36.3,
    longitude: 147.14
  },
  {
    postcode: 3697,
    suburb: "Tawonga",
    state: "VIC",
    latitude: -36.67,
    longitude: 147.21
  },
  {
    postcode: 3698,
    suburb: "Tawonga South",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3699,
    suburb: "Bogong",
    state: "VIC",
    latitude: -36.81,
    longitude: 147.22
  },
  {
    postcode: 3699,
    suburb: "Falls Creek",
    state: "VIC",
    latitude: -36.81,
    longitude: 147.22
  },
  {
    postcode: 3699,
    suburb: "Mount Beauty",
    state: "VIC",
    latitude: -36.81,
    longitude: 147.22
  },
  {
    postcode: 3699,
    suburb: "Nelse",
    state: "VIC",
    latitude: -36.81,
    longitude: 147.22
  },
  {
    postcode: 3700,
    suburb: "Bullioh",
    state: "VIC",
    latitude: -36.18,
    longitude: 147.34
  },
  {
    postcode: 3700,
    suburb: "Georges Creek",
    state: "VIC",
    latitude: -36.18,
    longitude: 147.34
  },
  {
    postcode: 3700,
    suburb: "Jarvis Creek",
    state: "VIC",
    latitude: -36.18,
    longitude: 147.34
  },
  {
    postcode: 3700,
    suburb: "Tallangatta",
    state: "VIC",
    latitude: -36.18,
    longitude: 147.34
  },
  {
    postcode: 3700,
    suburb: "Tallangatta East",
    state: "VIC",
    latitude: -36.18,
    longitude: 147.34
  },
  {
    postcode: 3701,
    suburb: "Dartmouth",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Eskdale",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Granya",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Mitta Mitta",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Old Tallangatta",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Shelley",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Tallandoon",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Tallangatta South",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3701,
    suburb: "Tallangatta Valley",
    state: "VIC",
    latitude: -36.53,
    longitude: 147.5
  },
  {
    postcode: 3704,
    suburb: "Koetong",
    state: "VIC",
    latitude: -36.1,
    longitude: 147.54
  },
  {
    postcode: 3705,
    suburb: "Cudgewa",
    state: "VIC",
    latitude: -36.19,
    longitude: 147.77
  },
  {
    postcode: 3707,
    suburb: "Biggara",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Bringenbrong",
    state: "NSW",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Colac Colac",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Corryong",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Nariel Valley",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Thowgla Valley",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Tom Groggin",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Towong",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3707,
    suburb: "Towong Upper",
    state: "VIC",
    latitude: -36.28,
    longitude: 148.03
  },
  {
    postcode: 3708,
    suburb: "Tintaldra",
    state: "VIC",
    latitude: -36.05,
    longitude: 147.93
  },
  {
    postcode: 3709,
    suburb: "Burrowye",
    state: "VIC",
    latitude: -36.05,
    longitude: 147.56
  },
  {
    postcode: 3709,
    suburb: "Guys Forest",
    state: "VIC",
    latitude: -36.05,
    longitude: 147.56
  },
  {
    postcode: 3709,
    suburb: "Mount Alfred",
    state: "VIC",
    latitude: -36.05,
    longitude: 147.56
  },
  {
    postcode: 3709,
    suburb: "Pine Mountain",
    state: "VIC",
    latitude: -36.05,
    longitude: 147.56
  },
  {
    postcode: 3709,
    suburb: "Walwa",
    state: "VIC",
    latitude: -36.05,
    longitude: 147.56
  },
  {
    postcode: 3711,
    suburb: "Buxton",
    state: "VIC",
    latitude: -37.42,
    longitude: 145.71
  },
  {
    postcode: 3712,
    suburb: "Rubicon",
    state: "VIC",
    latitude: -37.33,
    longitude: 145.86
  },
  {
    postcode: 3712,
    suburb: "Thornton",
    state: "VIC",
    latitude: -37.33,
    longitude: 145.86
  },
  {
    postcode: 3713,
    suburb: "Eildon",
    state: "VIC",
    latitude: -37.23,
    longitude: 145.91
  },
  {
    postcode: 3713,
    suburb: "Lake Eildon",
    state: "VIC",
    latitude: -37.23,
    longitude: 145.91
  },
  {
    postcode: 3713,
    suburb: "Taylor Bay",
    state: "VIC",
    latitude: -37.23,
    longitude: 145.91
  },
  {
    postcode: 3714,
    suburb: "Acheron",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Alexandra",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Cathkin",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Crystal Creek",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Devils River",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Fawcett",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Koriella",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Maintongoon",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Taggerty",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3714,
    suburb: "Whanregarwen",
    state: "VIC",
    latitude: -37.25,
    longitude: 145.7
  },
  {
    postcode: 3715,
    suburb: "Ancona",
    state: "VIC",
    latitude: -36.97,
    longitude: 145.79
  },
  {
    postcode: 3715,
    suburb: "Merton",
    state: "VIC",
    latitude: -36.97,
    longitude: 145.79
  },
  {
    postcode: 3715,
    suburb: "Woodfield",
    state: "VIC",
    latitude: -36.97,
    longitude: 145.79
  },
  {
    postcode: 3717,
    suburb: "Flowerdale",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Ghin Ghin",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Glenburn",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Homewood",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Killingworth",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Limestone",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Murrindindi",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3717,
    suburb: "Yea",
    state: "VIC",
    latitude: -37.34,
    longitude: 145.29
  },
  {
    postcode: 3718,
    suburb: "Molesworth",
    state: "VIC",
    latitude: -37.13,
    longitude: 145.53
  },
  {
    postcode: 3719,
    suburb: "Gobur",
    state: "VIC",
    latitude: -37.01,
    longitude: 145.62
  },
  {
    postcode: 3719,
    suburb: "Kanumbra",
    state: "VIC",
    latitude: -37.01,
    longitude: 145.62
  },
  {
    postcode: 3719,
    suburb: "Terip Terip",
    state: "VIC",
    latitude: -37.01,
    longitude: 145.62
  },
  {
    postcode: 3719,
    suburb: "Yarck",
    state: "VIC",
    latitude: -37.01,
    longitude: 145.62
  },
  {
    postcode: 3720,
    suburb: "Bonnie Doon",
    state: "VIC",
    latitude: -37.02,
    longitude: 145.86
  },
  {
    postcode: 3722,
    suburb: "Barwite",
    state: "VIC",
    latitude: -37.01,
    longitude: 146.22
  },
  {
    postcode: 3722,
    suburb: "Mansfield",
    state: "VIC",
    latitude: -37.01,
    longitude: 146.22
  },
  {
    postcode: 3722,
    suburb: "Mirimbah",
    state: "VIC",
    latitude: -37.01,
    longitude: 146.22
  },
  {
    postcode: 3723,
    suburb: "Archerton",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Barjarg",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Boorolite",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Bridge Creek",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Delatite",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Enochs Point",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Gaffneys Creek",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Goughs Bay",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Howes Creek",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Howqua",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Howqua Hills",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Howqua Inlet",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Jamieson",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Kevington",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Knockwood",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Macs Cove",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Maindample",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Matlock",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Merrijig",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Mount Buller",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Mountain Bay",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Piries",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Sawmill Settlement",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Tolmie",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3723,
    suburb: "Woods Point",
    state: "VIC",
    latitude: -36.89,
    longitude: 146.26
  },
  {
    postcode: 3724,
    suburb: "Mansfield",
    state: "VIC",
    latitude: -37.05,
    longitude: 146.08
  },
  {
    postcode: 3725,
    suburb: "Boxwood",
    state: "VIC",
    latitude: -36.32,
    longitude: 145.8
  },
  {
    postcode: 3725,
    suburb: "Chesney Vale",
    state: "VIC",
    latitude: -36.32,
    longitude: 145.8
  },
  {
    postcode: 3725,
    suburb: "Goorambat",
    state: "VIC",
    latitude: -36.32,
    longitude: 145.8
  },
  {
    postcode: 3725,
    suburb: "Major Plains",
    state: "VIC",
    latitude: -36.32,
    longitude: 145.8
  },
  {
    postcode: 3725,
    suburb: "Stewarton",
    state: "VIC",
    latitude: -36.32,
    longitude: 145.8
  },
  {
    postcode: 3726,
    suburb: "Bungeet",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.06
  },
  {
    postcode: 3726,
    suburb: "Bungeet West",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.06
  },
  {
    postcode: 3726,
    suburb: "Devenish",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.06
  },
  {
    postcode: 3726,
    suburb: "Thoona",
    state: "VIC",
    latitude: -36.28,
    longitude: 146.06
  },
  {
    postcode: 3727,
    suburb: "Almonds",
    state: "VIC",
    latitude: -36.23,
    longitude: 146.06
  },
  {
    postcode: 3727,
    suburb: "Lake Rowan",
    state: "VIC",
    latitude: -36.23,
    longitude: 146.06
  },
  {
    postcode: 3727,
    suburb: "Pelluebla",
    state: "VIC",
    latitude: -36.23,
    longitude: 146.06
  },
  {
    postcode: 3727,
    suburb: "St James",
    state: "VIC",
    latitude: -36.23,
    longitude: 146.06
  },
  {
    postcode: 3727,
    suburb: "Yundool",
    state: "VIC",
    latitude: -36.23,
    longitude: 146.06
  },
  {
    postcode: 3728,
    suburb: "Boomahnoomoonah",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.08
  },
  {
    postcode: 3728,
    suburb: "Tungamah",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.08
  },
  {
    postcode: 3728,
    suburb: "Wilby",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.08
  },
  {
    postcode: 3728,
    suburb: "Youarang",
    state: "VIC",
    latitude: -36.1,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Bathumi",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Boosey",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Bundalong",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Bundalong South",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Burramine",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Burramine South",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Esmond",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Telford",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Yarrawonga",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3730,
    suburb: "Yarrawonga South",
    state: "VIC",
    latitude: -36.03,
    longitude: 146.08
  },
  {
    postcode: 3732,
    suburb: "Moyhu",
    state: "VIC",
    latitude: -36.58,
    longitude: 146.38
  },
  {
    postcode: 3732,
    suburb: "Myrrhee",
    state: "VIC",
    latitude: -36.58,
    longitude: 146.38
  },
  {
    postcode: 3733,
    suburb: "Whitfield",
    state: "VIC",
    latitude: -36.75,
    longitude: 146.41
  },
  {
    postcode: 3735,
    suburb: "Bowmans Forest",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.58
  },
  {
    postcode: 3735,
    suburb: "Whorouly",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.58
  },
  {
    postcode: 3735,
    suburb: "Whorouly East",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.58
  },
  {
    postcode: 3735,
    suburb: "Whorouly South",
    state: "VIC",
    latitude: -36.52,
    longitude: 146.58
  },
  {
    postcode: 3736,
    suburb: "Myrtleford",
    state: "VIC",
    latitude: -36.46,
    longitude: 146.48
  },
  {
    postcode: 3737,
    suburb: "Abbeyard",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Barwidgee",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Buffalo River",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Dandongadale",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Gapsted",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Havilah",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Merriang",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Merriang South",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Mudgegonga",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Myrtleford",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Nug Nug",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Rosewhite",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Selwyn",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3737,
    suburb: "Wonnangatta",
    state: "VIC",
    latitude: -36.98,
    longitude: 146.78
  },
  {
    postcode: 3738,
    suburb: "Ovens",
    state: "VIC",
    latitude: -36.61,
    longitude: 146.79
  },
  {
    postcode: 3739,
    suburb: "Eurobin",
    state: "VIC",
    latitude: -36.7,
    longitude: 146.85
  },
  {
    postcode: 3740,
    suburb: "Buckland",
    state: "VIC",
    latitude: -36.82,
    longitude: 146.85
  },
  {
    postcode: 3740,
    suburb: "Mount Buffalo",
    state: "VIC",
    latitude: -36.82,
    longitude: 146.85
  },
  {
    postcode: 3740,
    suburb: "Porepunkah",
    state: "VIC",
    latitude: -36.82,
    longitude: 146.85
  },
  {
    postcode: 3741,
    suburb: "Bright",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3741,
    suburb: "Freeburgh",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3741,
    suburb: "Germantown",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3741,
    suburb: "Harrietville",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3741,
    suburb: "Hotham Heights",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3741,
    suburb: "Mount Hotham",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3741,
    suburb: "Smoko",
    state: "VIC",
    latitude: -36.73,
    longitude: 146.96
  },
  {
    postcode: 3744,
    suburb: "Wandiligong",
    state: "VIC",
    latitude: -36.75,
    longitude: 146.98
  },
  {
    postcode: 3746,
    suburb: "Eldorado",
    state: "VIC",
    latitude: -36.3,
    longitude: 146.58
  },
  {
    postcode: 3747,
    suburb: "Beechworth",
    state: "VIC",
    latitude: -36.36,
    longitude: 146.69
  },
  {
    postcode: 3747,
    suburb: "Murmungee",
    state: "VIC",
    latitude: -36.36,
    longitude: 146.69
  },
  {
    postcode: 3747,
    suburb: "Stanley",
    state: "VIC",
    latitude: -36.36,
    longitude: 146.69
  },
  {
    postcode: 3747,
    suburb: "Woolshed",
    state: "VIC",
    latitude: -36.36,
    longitude: 146.69
  },
  {
    postcode: 3747,
    suburb: "Wooragee",
    state: "VIC",
    latitude: -36.36,
    longitude: 146.69
  },
  {
    postcode: 3749,
    suburb: "Bruarong",
    state: "VIC",
    latitude: -36.41,
    longitude: 146.86
  },
  {
    postcode: 3749,
    suburb: "Yackandandah",
    state: "VIC",
    latitude: -36.41,
    longitude: 146.86
  },
  {
    postcode: 3750,
    suburb: "Wollert",
    state: "VIC",
    latitude: -38.38,
    longitude: 144.81
  },
  {
    postcode: 3751,
    suburb: "Woodstock",
    state: "VIC",
    latitude: -37.69,
    longitude: 144.89
  },
  {
    postcode: 3752,
    suburb: "Morang South",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.1
  },
  {
    postcode: 3752,
    suburb: "South Morang",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.1
  },
  {
    postcode: 3753,
    suburb: "Beveridge",
    state: "VIC",
    latitude: -37.47,
    longitude: 145
  },
  {
    postcode: 3754,
    suburb: "Doreen",
    state: "VIC",
    latitude: -37.62,
    longitude: 145.15
  },
  {
    postcode: 3754,
    suburb: "Mernda",
    state: "VIC",
    latitude: -37.62,
    longitude: 145.15
  },
  {
    postcode: 3755,
    suburb: "Yan Yean",
    state: "VIC",
    latitude: -37.57,
    longitude: 145.14
  },
  {
    postcode: 3756,
    suburb: "Chintin",
    state: "VIC",
    latitude: -37.4,
    longitude: 144.8
  },
  {
    postcode: 3756,
    suburb: "Darraweit Guim",
    state: "VIC",
    latitude: -37.4,
    longitude: 144.8
  },
  {
    postcode: 3756,
    suburb: "Upper Plenty",
    state: "VIC",
    latitude: -37.4,
    longitude: 144.8
  },
  {
    postcode: 3756,
    suburb: "Wallan",
    state: "VIC",
    latitude: -37.4,
    longitude: 144.8
  },
  {
    postcode: 3757,
    suburb: "Eden Park",
    state: "VIC",
    latitude: -37.45,
    longitude: 145.11
  },
  {
    postcode: 3757,
    suburb: "Humevale",
    state: "VIC",
    latitude: -37.45,
    longitude: 145.11
  },
  {
    postcode: 3757,
    suburb: "Kinglake Central",
    state: "VIC",
    latitude: -37.45,
    longitude: 145.11
  },
  {
    postcode: 3757,
    suburb: "Kinglake West",
    state: "VIC",
    latitude: -37.45,
    longitude: 145.11
  },
  {
    postcode: 3757,
    suburb: "Pheasant Creek",
    state: "VIC",
    latitude: -37.45,
    longitude: 145.11
  },
  {
    postcode: 3757,
    suburb: "Whittlesea",
    state: "VIC",
    latitude: -37.45,
    longitude: 145.11
  },
  {
    postcode: 3758,
    suburb: "Heathcote Junction",
    state: "VIC",
    latitude: -37.38,
    longitude: 145.03
  },
  {
    postcode: 3758,
    suburb: "Wandong",
    state: "VIC",
    latitude: -37.38,
    longitude: 145.03
  },
  {
    postcode: 3759,
    suburb: "Panton Hill",
    state: "VIC",
    latitude: -37.64,
    longitude: 145.24
  },
  {
    postcode: 3760,
    suburb: "Smiths Gully",
    state: "VIC",
    latitude: -37.62,
    longitude: 145.29
  },
  {
    postcode: 3761,
    suburb: "St Andrews",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3762,
    suburb: "Bylands",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3763,
    suburb: "Kinglake",
    state: "VIC",
    latitude: -37.48,
    longitude: 145.28
  },
  {
    postcode: 3764,
    suburb: "Forbes",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "Glenaroua",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "High Camp",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "Kilmore",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "Kilmore East",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "Moranding",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "Tantaraboo",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3764,
    suburb: "Willowmavin",
    state: "VIC",
    latitude: -37.31,
    longitude: 144.89
  },
  {
    postcode: 3765,
    suburb: "Montrose",
    state: "VIC",
    latitude: -37.81,
    longitude: 145.34
  },
  {
    postcode: 3766,
    suburb: "Kalorama",
    state: "VIC",
    latitude: -37.82,
    longitude: 145.37
  },
  {
    postcode: 3767,
    suburb: "Mount Dandenong",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.36
  },
  {
    postcode: 3770,
    suburb: "Coldstream",
    state: "VIC",
    latitude: -37.72,
    longitude: 145.38
  },
  {
    postcode: 3770,
    suburb: "Gruyere",
    state: "VIC",
    latitude: -37.72,
    longitude: 145.38
  },
  {
    postcode: 3770,
    suburb: "Yering",
    state: "VIC",
    latitude: -37.72,
    longitude: 145.38
  },
  {
    postcode: 3775,
    suburb: "Christmas Hills",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.32
  },
  {
    postcode: 3775,
    suburb: "Dixons Creek",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.32
  },
  {
    postcode: 3775,
    suburb: "Steels Creek",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.32
  },
  {
    postcode: 3775,
    suburb: "Tarrawarra",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.32
  },
  {
    postcode: 3775,
    suburb: "Yarra Glen",
    state: "VIC",
    latitude: -37.65,
    longitude: 145.32
  },
  {
    postcode: 3777,
    suburb: "Badger Creek",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Castella",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Chum Creek",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Healesville",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Healesville Main Street",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Healesville Post Shop",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Mount Toolebewong",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3777,
    suburb: "Toolangi",
    state: "VIC",
    latitude: -37.69,
    longitude: 145.54
  },
  {
    postcode: 3778,
    suburb: "Fernshaw",
    state: "VIC",
    latitude: -37.63,
    longitude: 145.7
  },
  {
    postcode: 3778,
    suburb: "Narbethong",
    state: "VIC",
    latitude: -37.63,
    longitude: 145.7
  },
  {
    postcode: 3779,
    suburb: "Cambarville",
    state: "VIC",
    latitude: -37.56,
    longitude: 145.89
  },
  {
    postcode: 3779,
    suburb: "Marysville",
    state: "VIC",
    latitude: -37.56,
    longitude: 145.89
  },
  {
    postcode: 3781,
    suburb: "Cockatoo",
    state: "VIC",
    latitude: -37.94,
    longitude: 145.49
  },
  {
    postcode: 3781,
    suburb: "Mount Burnett",
    state: "VIC",
    latitude: -37.94,
    longitude: 145.49
  },
  {
    postcode: 3781,
    suburb: "Nangana",
    state: "VIC",
    latitude: -37.94,
    longitude: 145.49
  },
  {
    postcode: 3782,
    suburb: "Avonsleigh",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.47
  },
  {
    postcode: 3782,
    suburb: "Clematis",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.47
  },
  {
    postcode: 3782,
    suburb: "Emerald",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.47
  },
  {
    postcode: 3782,
    suburb: "Macclesfield",
    state: "VIC",
    latitude: -37.92,
    longitude: 145.47
  },
  {
    postcode: 3783,
    suburb: "Gembrook",
    state: "VIC",
    latitude: -37.95,
    longitude: 145.55
  },
  {
    postcode: 3785,
    suburb: "Tremont",
    state: "VIC",
    latitude: -38.27,
    longitude: 144.49
  },
  {
    postcode: 3786,
    suburb: "Ferny Creek",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.34
  },
  {
    postcode: 3787,
    suburb: "Sassafras",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.37
  },
  {
    postcode: 3787,
    suburb: "Sassafras Gully",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.37
  },
  {
    postcode: 3788,
    suburb: "Olinda",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.36
  },
  {
    postcode: 3789,
    suburb: "Sherbrooke",
    state: "VIC",
    latitude: -37.88,
    longitude: 145.36
  },
  {
    postcode: 3791,
    suburb: "Kallista",
    state: "VIC",
    latitude: -37.9,
    longitude: 145.41
  },
  {
    postcode: 3792,
    suburb: "The Patch",
    state: "VIC",
    latitude: -37.89,
    longitude: 145.39
  },
  {
    postcode: 3793,
    suburb: "Monbulk",
    state: "VIC",
    latitude: -37.87,
    longitude: 145.41
  },
  {
    postcode: 3795,
    suburb: "Silvan",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.41
  },
  {
    postcode: 3796,
    suburb: "Mount Evelyn",
    state: "VIC",
    latitude: -37.79,
    longitude: 145.38
  },
  {
    postcode: 3797,
    suburb: "Gilderoy",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.71
  },
  {
    postcode: 3797,
    suburb: "Gladysdale",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.71
  },
  {
    postcode: 3797,
    suburb: "Powelltown",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.71
  },
  {
    postcode: 3797,
    suburb: "Three Bridges",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.71
  },
  {
    postcode: 3797,
    suburb: "Yarra Junction",
    state: "VIC",
    latitude: -37.86,
    longitude: 145.71
  },
  {
    postcode: 3799,
    suburb: "Big Pats Creek",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3799,
    suburb: "East Warburton",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3799,
    suburb: "Mcmahons Creek",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3799,
    suburb: "Millgrove",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3799,
    suburb: "Reefton",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3799,
    suburb: "Warburton",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3799,
    suburb: "Wesburn",
    state: "VIC",
    latitude: -37.76,
    longitude: 145.75
  },
  {
    postcode: 3800,
    suburb: "Monash University",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.13
  },
  {
    postcode: 3802,
    suburb: "Endeavour Hills",
    state: "VIC",
    latitude: -37.98,
    longitude: 145.25
  },
  {
    postcode: 3803,
    suburb: "Hallam",
    state: "VIC",
    latitude: -38,
    longitude: 145.27
  },
  {
    postcode: 3804,
    suburb: "Narre Warren East",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.36
  },
  {
    postcode: 3804,
    suburb: "Narre Warren North",
    state: "VIC",
    latitude: -37.97,
    longitude: 145.36
  },
  {
    postcode: 3805,
    suburb: "Fountain Gate",
    state: "VIC",
    latitude: -38.02,
    longitude: 145.3
  },
  {
    postcode: 3805,
    suburb: "Narre Warren",
    state: "VIC",
    latitude: -38.02,
    longitude: 145.3
  },
  {
    postcode: 3805,
    suburb: "Narre Warren South",
    state: "VIC",
    latitude: -38.02,
    longitude: 145.3
  },
  {
    postcode: 3806,
    suburb: "Berwick",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.34
  },
  {
    postcode: 3806,
    suburb: "Harkaway",
    state: "VIC",
    latitude: -38.03,
    longitude: 145.34
  },
  {
    postcode: 3807,
    suburb: "Beaconsfield",
    state: "VIC",
    latitude: -38.05,
    longitude: 145.37
  },
  {
    postcode: 3807,
    suburb: "Guys Hill",
    state: "VIC",
    latitude: -38.05,
    longitude: 145.37
  },
  {
    postcode: 3808,
    suburb: "Beaconsfield Upper",
    state: "VIC",
    latitude: -38,
    longitude: 145.41
  },
  {
    postcode: 3808,
    suburb: "Dewhurst",
    state: "VIC",
    latitude: -38,
    longitude: 145.41
  },
  {
    postcode: 3809,
    suburb: "Officer",
    state: "VIC",
    latitude: -38.06,
    longitude: 145.41
  },
  {
    postcode: 3809,
    suburb: "Officer South",
    state: "VIC",
    latitude: -38.06,
    longitude: 145.41
  },
  {
    postcode: 3810,
    suburb: "Pakenham",
    state: "VIC",
    latitude: -38.08,
    longitude: 145.49
  },
  {
    postcode: 3810,
    suburb: "Pakenham South",
    state: "VIC",
    latitude: -38.08,
    longitude: 145.49
  },
  {
    postcode: 3810,
    suburb: "Pakenham Upper",
    state: "VIC",
    latitude: -38.08,
    longitude: 145.49
  },
  {
    postcode: 3810,
    suburb: "Rythdale",
    state: "VIC",
    latitude: -38.08,
    longitude: 145.49
  },
  {
    postcode: 3812,
    suburb: "Maryknoll",
    state: "VIC",
    latitude: -38.04,
    longitude: 145.61
  },
  {
    postcode: 3812,
    suburb: "Nar Nar Goon",
    state: "VIC",
    latitude: -38.04,
    longitude: 145.61
  },
  {
    postcode: 3812,
    suburb: "Nar Nar Goon North",
    state: "VIC",
    latitude: -38.04,
    longitude: 145.61
  },
  {
    postcode: 3813,
    suburb: "Tynong",
    state: "VIC",
    latitude: -38.09,
    longitude: 145.63
  },
  {
    postcode: 3813,
    suburb: "Tynong North",
    state: "VIC",
    latitude: -38.09,
    longitude: 145.63
  },
  {
    postcode: 3814,
    suburb: "Cora Lynn",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.61
  },
  {
    postcode: 3814,
    suburb: "Garfield",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.61
  },
  {
    postcode: 3814,
    suburb: "Garfield North",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.61
  },
  {
    postcode: 3814,
    suburb: "Vervale",
    state: "VIC",
    latitude: -38.15,
    longitude: 145.61
  },
  {
    postcode: 3815,
    suburb: "Bunyip",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.72
  },
  {
    postcode: 3815,
    suburb: "Bunyip North",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.72
  },
  {
    postcode: 3815,
    suburb: "Iona",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.72
  },
  {
    postcode: 3815,
    suburb: "Tonimbuk",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.72
  },
  {
    postcode: 3816,
    suburb: "Labertouche",
    state: "VIC",
    latitude: -38.05,
    longitude: 145.83
  },
  {
    postcode: 3816,
    suburb: "Longwarry",
    state: "VIC",
    latitude: -38.05,
    longitude: 145.83
  },
  {
    postcode: 3816,
    suburb: "Longwarry North",
    state: "VIC",
    latitude: -38.05,
    longitude: 145.83
  },
  {
    postcode: 3816,
    suburb: "Modella",
    state: "VIC",
    latitude: -38.05,
    longitude: 145.83
  },
  {
    postcode: 3818,
    suburb: "Athlone",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Drouin",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Drouin East",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Drouin South",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Drouin West",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Hallora",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Jindivick",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3818,
    suburb: "Ripplebrook",
    state: "VIC",
    latitude: -38.24,
    longitude: 145.78
  },
  {
    postcode: 3820,
    suburb: "Bona Vista",
    state: "VIC",
    latitude: -38.21,
    longitude: 145.96
  },
  {
    postcode: 3820,
    suburb: "Lillico",
    state: "VIC",
    latitude: -38.21,
    longitude: 145.96
  },
  {
    postcode: 3820,
    suburb: "Warragul",
    state: "VIC",
    latitude: -38.21,
    longitude: 145.96
  },
  {
    postcode: 3821,
    suburb: "Brandy Creek",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Bravington",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Buln Buln",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Buln Buln East",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Crossover",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Ellinbank",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Ferndale",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Lardner",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Nilma",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Nilma North",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Rokeby",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Seaview",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Shady Creek",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Tetoora Road",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Torwood",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Warragul South",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3821,
    suburb: "Warragul West",
    state: "VIC",
    latitude: -38.1,
    longitude: 145.92
  },
  {
    postcode: 3822,
    suburb: "Cloverlea",
    state: "VIC",
    latitude: -38.24,
    longitude: 146
  },
  {
    postcode: 3822,
    suburb: "Darnum",
    state: "VIC",
    latitude: -38.24,
    longitude: 146
  },
  {
    postcode: 3822,
    suburb: "Gainsborough",
    state: "VIC",
    latitude: -38.24,
    longitude: 146
  },
  {
    postcode: 3823,
    suburb: "Allambee",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.03
  },
  {
    postcode: 3823,
    suburb: "Yarragon",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.03
  },
  {
    postcode: 3823,
    suburb: "Yarragon South",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.03
  },
  {
    postcode: 3824,
    suburb: "Childers",
    state: "VIC",
    latitude: -38.3,
    longitude: 146.11
  },
  {
    postcode: 3824,
    suburb: "Narracan",
    state: "VIC",
    latitude: -38.3,
    longitude: 146.11
  },
  {
    postcode: 3824,
    suburb: "Thorpdale South",
    state: "VIC",
    latitude: -38.3,
    longitude: 146.11
  },
  {
    postcode: 3824,
    suburb: "Trafalgar",
    state: "VIC",
    latitude: -38.3,
    longitude: 146.11
  },
  {
    postcode: 3824,
    suburb: "Trafalgar East",
    state: "VIC",
    latitude: -38.3,
    longitude: 146.11
  },
  {
    postcode: 3824,
    suburb: "Trafalgar South",
    state: "VIC",
    latitude: -38.3,
    longitude: 146.11
  },
  {
    postcode: 3825,
    suburb: "Aberfeldy",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Amor",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Boola",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Caringal",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Coalville",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Coopers Creek",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Erica",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Fumina",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Fumina South",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Hernes Oak",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Hill End",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Jacob Creek",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Jericho",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Moe",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Moe South",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Moondarra",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Newborough",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Newborough East",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Rawson",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Tanjil",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Tanjil South",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Thalloo",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Thomson",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Toombon",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Walhalla",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Walhalla East",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Westbury",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Willow Grove",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Yallourn",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3825,
    suburb: "Yallourn North",
    state: "VIC",
    latitude: -37.7,
    longitude: 146.36
  },
  {
    postcode: 3831,
    suburb: "Neerim",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.99
  },
  {
    postcode: 3831,
    suburb: "Neerim East",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.99
  },
  {
    postcode: 3831,
    suburb: "Neerim South",
    state: "VIC",
    latitude: -37.96,
    longitude: 145.99
  },
  {
    postcode: 3832,
    suburb: "Nayook",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.93
  },
  {
    postcode: 3832,
    suburb: "Neerim Junction",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.93
  },
  {
    postcode: 3832,
    suburb: "Neerim North",
    state: "VIC",
    latitude: -37.91,
    longitude: 145.93
  },
  {
    postcode: 3833,
    suburb: "Ada",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Baw Baw",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Baw Baw Village",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Gentle Annie",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Icy Creek",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Loch Valley",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Noojee",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Piedmont",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Tanjil Bren",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Toorongo",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3833,
    suburb: "Vesper",
    state: "VIC",
    latitude: -37.84,
    longitude: 145.85
  },
  {
    postcode: 3835,
    suburb: "Thorpdale",
    state: "VIC",
    latitude: -38.33,
    longitude: 146.12
  },
  {
    postcode: 3840,
    suburb: "Driffield",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Hazelwood",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Hazelwood North",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Hazelwood South",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Jeeralang",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Jeeralang Junction",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Maryvale",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Mid Valley",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Morwell",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Morwell East",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3840,
    suburb: "Morwell Upper",
    state: "VIC",
    latitude: -38.28,
    longitude: 146.32
  },
  {
    postcode: 3841,
    suburb: "Gippsland MC",
    state: "VIC",
    latitude: 0,
    longitude: 0
  },
  {
    postcode: 3842,
    suburb: "Churchill",
    state: "VIC",
    latitude: -38.32,
    longitude: 146.42
  },
  {
    postcode: 3844,
    suburb: "Blackwarry",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Callignee",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Callignee North",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Callignee South",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Carrajung",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Carrajung Lower",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Carrajung South",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Flynn",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Flynns Creek",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Koornalla",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Loy Yang",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Mount Tassie",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Traralgon",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Traralgon East",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Traralgon South",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3844,
    suburb: "Tyers",
    state: "VIC",
    latitude: -38.41,
    longitude: 146.64
  },
  {
    postcode: 3847,
    suburb: "Hiamdale",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.75
  },
  {
    postcode: 3847,
    suburb: "Nambrok",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.75
  },
  {
    postcode: 3847,
    suburb: "Rosedale",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.75
  },
  {
    postcode: 3847,
    suburb: "Willung",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.75
  },
  {
    postcode: 3847,
    suburb: "Willung South",
    state: "VIC",
    latitude: -38.26,
    longitude: 146.75
  },
  {
    postcode: 3850,
    suburb: "Sale",
    state: "VIC",
    latitude: -38.42,
    longitude: 147.08
  },
  {
    postcode: 3850,
    suburb: "Sale North",
    state: "VIC",
    latitude: -38.42,
    longitude: 147.08
  },
  {
    postcode: 3850,
    suburb: "Wurruk",
    state: "VIC",
    latitude: -38.42,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Airly",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Bundalaguah",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Clydebank",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Cobains",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Darriman",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Dutson",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Dutson Downs",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Flamingo Beach",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Fulham",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Giffard",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Giffard West",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Glomar Beach",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Golden Beach",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Kilmany",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Lake Wellington",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Loch Sport",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Longford",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Montgomery",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Myrtlebank",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Paradise Beach",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Pearsondale",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Seacombe",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Seaspray",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Somerton Park",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "Stradbroke",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "The Heart",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3851,
    suburb: "The Honeysuckles",
    state: "VIC",
    latitude: -38.04,
    longitude: 147.08
  },
  {
    postcode: 3852,
    suburb: "East Sale",
    state: "VIC",
    latitude: -38.11,
    longitude: 147.13
  },
  {
    postcode: 3852,
    suburb: "Sale East Raaf",
    state: "VIC",
    latitude: -38.11,
    longitude: 147.13
  },
  {
    postcode: 3853,
    suburb: "Sale",
    state: "VIC",
    latitude: -38.1,
    longitude: 146.06
  },
  {
    postcode: 3854,
    suburb: "Glengarry",
    state: "VIC",
    latitude: -38.12,
    longitude: 146.57
  },
  {
    postcode: 3854,
    suburb: "Glengarry North",
    state: "VIC",
    latitude: -38.12,
    longitude: 146.57
  },
  {
    postcode: 3854,
    suburb: "Glengarry West",
    state: "VIC",
    latitude: -38.12,
    longitude: 146.57
  },
  {
    postcode: 3856,
    suburb: "Toongabbie",
    state: "VIC",
    latitude: -38.07,
    longitude: 146.67
  },
  {
    postcode: 3857,
    suburb: "Cowwarr",
    state: "VIC",
    latitude: -38,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Arbuckle",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Billabong",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Buragwonduc",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Crookayan",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Dawson",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Denison",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Gillum",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Glenfalloch",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Glenmaggie",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Heyfield",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Howitt Plains",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Licola",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Licola North",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Reynard",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Sargood",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Seaton",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Tamboritha",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Winnindoo",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Worrowing",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3858,
    suburb: "Yangoura",
    state: "VIC",
    latitude: -37.97,
    longitude: 146.69
  },
  {
    postcode: 3859,
    suburb: "Maffra West Upper",
    state: "VIC",
    latitude: -37.89,
    longitude: 146.85
  },
  {
    postcode: 3859,
    suburb: "Newry",
    state: "VIC",
    latitude: -37.89,
    longitude: 146.85
  },
  {
    postcode: 3859,
    suburb: "Tinamba",
    state: "VIC",
    latitude: -37.89,
    longitude: 146.85
  },
  {
    postcode: 3859,
    suburb: "Tinamba West",
    state: "VIC",
    latitude: -37.89,
    longitude: 146.85
  },
  {
    postcode: 3860,
    suburb: "Boisdale",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Briagolong",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Bushy Park",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Coongulla",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Koorool",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Maffra",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Monomak",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Moroka",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Nap Nap Marra",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Riverslea",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Toolome",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Valencia Creek",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Woolenook",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Wrathung",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3860,
    suburb: "Wrixon",
    state: "VIC",
    latitude: -37.88,
    longitude: 146.99
  },
  {
    postcode: 3862,
    suburb: "Budgee Budgee",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Cobbannah",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Cowa",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Crooked River",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Dargo",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Hawkhurst",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Hollands Landing",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Llowalong",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Meerlieu",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Miowera",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Moornapa",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Munro",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Perry Bridge",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Stockdale",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Stratford",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Waterford",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3862,
    suburb: "Wongungarra",
    state: "VIC",
    latitude: -37.57,
    longitude: 147.19
  },
  {
    postcode: 3864,
    suburb: "Fernbank",
    state: "VIC",
    latitude: -37.86,
    longitude: 147.34
  },
  {
    postcode: 3864,
    suburb: "Glenaladale",
    state: "VIC",
    latitude: -37.86,
    longitude: 147.34
  },
  {
    postcode: 3864,
    suburb: "The Fingerboard",
    state: "VIC",
    latitude: -37.86,
    longitude: 147.34
  },
  {
    postcode: 3865,
    suburb: "Lindenow",
    state: "VIC",
    latitude: -37.8,
    longitude: 147.46
  },
  {
    postcode: 3869,
    suburb: "Jumbuk",
    state: "VIC",
    latitude: -38.4,
    longitude: 146.42
  },
  {
    postcode: 3869,
    suburb: "Yinnar",
    state: "VIC",
    latitude: -38.4,
    longitude: 146.42
  },
  {
    postcode: 3869,
    suburb: "Yinnar South",
    state: "VIC",
    latitude: -38.4,
    longitude: 146.42
  },
  {
    postcode: 3870,
    suburb: "Boolarra",
    state: "VIC",
    latitude: -38.38,
    longitude: 146.28
  },
  {
    postcode: 3870,
    suburb: "Boolarra South",
    state: "VIC",
    latitude: -38.38,
    longitude: 146.28
  },
  {
    postcode: 3870,
    suburb: "Budgeree",
    state: "VIC",
    latitude: -38.38,
    longitude: 146.28
  },
  {
  {