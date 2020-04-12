const jituGoogleCharts = require('../src');


const options = JSON.parse(process.argv[2]);

jituGoogleCharts(options)
.then(console.log)
.catch(console.error);
