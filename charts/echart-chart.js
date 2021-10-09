import data from '../data/data.js'

var myChart = echarts.init(document.getElementById('echart-chart'), null, {
    width: 900,
    height: 700
});

// adding configuration object
var option = {
    series: [
        {
            type: 'pie',
            data: data,
            radius: '50%'
        }
    ]
};

// building pie chart by using configuration object.
myChart.setOption(option);
