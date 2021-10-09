import data from '../data/data.js'

const ctx = document.getElementById('chartjs-chart').getContext('2d');

const values = [];

data.forEach(function (item) {
    values.push(item.value);
})

// building pie chart by just passing configuration object

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Value 1', 'Value 2', 'Value 3'],
        datasets: [{
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false
    },
});
