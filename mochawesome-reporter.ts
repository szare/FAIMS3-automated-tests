import { create } from 'mochawesome';
import * as path from 'path';
import * as fs from 'fs';

const reporterOptions = {
    reportDir: 'cypress',
    overwrite: true,
    html: true,
    json: false,
    reportFilename: 'cypress-mochawesome-report.json',
    timestamp: 'yyyy-mm-dd HH:MM:ss',
};

function createMochawesomeReport(results: any): Promise<void> {
    const reportFilePath = path.join(reporterOptions.reportDir, reporterOptions.reportFilename);
    return create(reporterOptions).then((report: any) => {
        fs.writeFileSync(reportFilePath, JSON.stringify(report, null, 2), 'utf-8');
    });
}

export = function (on: any) {
    on('after:run', (results: any) => {
        createMochawesomeReport(results);
    });
};
