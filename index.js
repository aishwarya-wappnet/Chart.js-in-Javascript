let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777'
// Create object and use the myChart element 
// Chart.js is an free JavaScript library for making HTML-based charts. It is one of the simplest visualization libraries for JavaScript, and comes with the following built-in chart types
let gujPopChart = new Chart(myChart, {
    type: 'line', // bar, horizontal, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
        datasets: [{
            label: 'Population',
            data: [8253000, 6936534, 5240522,1934000, 410323],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(225, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 225, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBordeColor: '#000'
        }]
    },
    options:{
        title: {
            display: true,
            text: 'Largest Cities in Gujarat',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels:{
                fontColor: '#000'
            }
        },
        layout:{
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips:{
            enabled: true
        }
    }
})