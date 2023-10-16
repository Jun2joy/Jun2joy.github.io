import regression from 'regression'
import { sports_category } from '../store/sportsCategoryStore';

export function generateRegressionCurves(sportClass, points) {
    const dfPoints = points;
    const dfClass = dfPoints.filter((row) => row.class == sports_category[sportClass]);
    var regressionLines = {};

    dfClass.forEach((row) => {
        if (!regressionLines[row.line]) {
            regressionLines[row.line] = [];
        }
        regressionLines[row.line].push([parseFloat(row.x), parseFloat(row.y)]);
    });

    for (const line in regressionLines) {
        if (regressionLines.hasOwnProperty(line)) {
            const data = regressionLines[line];
            const result = regression.polynomial(data, 2);
            const equation = result.string;
            regressionLines[line] = equation;
        }
    }
    //console.log(regressionLines);
    return regressionLines;
}

