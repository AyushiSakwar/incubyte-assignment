import reporter from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
};

reporter.generate(options);
