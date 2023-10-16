import lines from "./lines.js";
import { sports_category } from "../store/sportsCategoryStore.js";

export async function calculateComfortIndices(dataFor, sportClass) {
    const regression_lines = lines[sports_category[sportClass]-1];
    dataFor.forEach((row) => {
        //  moderate
        row.moderate = calculateValue(regression_lines[1], row.tdb);
        //  high 
        row.high = calculateValue(regression_lines[2], row.tdb);
        //  extreme 
        row.extreme = calculateValue(regression_lines[3], row.tdb);
    });

    // Iterate over each row in the dataFor map
    dataFor.forEach((row)=>{
        var top = 100;
        if (row.extreme > top) {
            top = row.extreme + 10;
        }

        var x = [0, row.moderate, row.high, row.extreme, top];
        var y = [0, 1, 2, 3, 4];
        var interpolated = interpolate(row.rh, x, y);
        
        // Round the interpolated value to one decimal place
        row.risk_value_interpolated = Math.round(interpolated * 10) / 10;
        console.log(row.risk_value_interpolated);
    });

    //define risk level
    var riskValue = {
        "low": 0,
        "moderate": 1,
        "high": 2,
        "extreme": 3
    };
    //add risk level
    dataFor.forEach((row)=>{
        row.moderate = Math.max(0, row.moderate);
        row.moderate = Math.min(100, row.moderate);
        row.high = Math.max(0,row.high);
        row.high = Math.min(100,row.high);
        row.extreme = Math.max(0,row.extreme);
        row.extreme = Math.min(100,row.extreme);
        row.risk = 'low';
        if (row.rh > row.extreme) {
            row.risk = "extreme";
        } 
        else if(row.rh > row.high)
        {
            row.risk = "high";
        } 
        else if(row.rh > row.moderate)
        {
            row.risk = "moderate";
        } 
        
        // Map the "risk" values to "risk_value" values
        row.riskValue = riskValue[row.risk];
    });

    return dataFor;
    
}

function interpolate(x, X, Y) {
    // Linear interpolation function
    var n = X.length;
    if (x <= X[0]) return Y[0];
    if (x >= X[n - 1]) return Y[n - 1];
    for (var i = 1; i < n; i++) {
        if (x <= X[i]) {
            var t = (x - X[i - 1]) / (X[i] - X[i - 1]);
            return Y[i - 1] + t * (Y[i] - Y[i - 1]);
        }
    }
}

function calculateValue(line, x) {
    //console.log(equationWithX);
    try {
        const result = line[0]*x*x+line[1]*x+line[2];
        return result.toPrecision(8);
    } catch (error) {
        console.error('Error evaluating equation:', error);
        return NaN; // 如果计算出错，返回 NaN
    }
}