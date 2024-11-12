document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('stationsActivityChart').getContext('2d');
    const stationsActivityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Station 1',
                    data: [120, 150, 180, 220, 200, 170, 140],
                    borderColor: '#ff6445',
                    backgroundColor: 'rgba(255, 100, 69, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Station 2',
                    data: [90, 130, 160, 210, 190, 150, 130],
                    borderColor: '#3D5161',
                    backgroundColor: 'rgba(61, 81, 97, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true,
                    mode: 'index'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Days of the Week'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Activity Level'
                    }
                }
            }
        }
    });
});