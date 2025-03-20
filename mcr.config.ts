import { CoverageReportOptions} from "monocart-coverage-reports"

// https://github.com/cenfun/monocart-coverage-reports
const coverageOptions: CoverageReportOptions = {

    name: 'My Playwright Coverage Report',

    reports: [
        'v8',
        'console-summary'
    ],

    // entryFilter: {
    //     '**/node_modules/**': false,
    //     '**/*.js': true
    // },

    // sourceFilter: {
    //     '**/node_modules/**': false,
    //     '**/*.js': true
    // },

    outputDir: './coverage-reports'
}

export default coverageOptions