import { writable } from 'svelte/store';
export const renderHome = writable(true);
export const selectedSport = writable("Abseiling"); // 设置默认值

export const selectedLocation = writable({
    postcode: 0,
    suburb: '',
    state: '',
    latitude: 0,
    longitude: 0,
});

export const data_cur = writable({
    time: '',
    pressure: 0,
    tdb: 0,
    cloud: 0,
    rh: 0,
    wdir: 0,
    wind: 0,
    moderate: 0,
    high: 0,
    extreme: 0,
    risk_value_interpolated: 0.0,
    risk: '',
    riskValue: 0
});