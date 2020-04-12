var data = [
	 ['country', 'popularity'], 
          ['germany', 200], 
          ['united states', 300], 
          ['brazil', 400], 
          ['canada', 500], 
          ['france', 600], 
          ['ru', 700] 
];


const jituGoogleCharts = require('../src');


jituGoogleCharts({
  chartType: 'GeoChart',
  dataTable: data,
  options: {},
})
.then(console.log)
.catch(console.error);
