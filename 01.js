document.addEventListener('DOMContentLoaded', function() {
    var ctxAttendance = document.getElementById('attendanceChart').getContext('2d');
    var attendanceChart = new Chart(ctxAttendance, {
        type: 'doughnut',
        data: {
            labels: ['Attendance', 'Absence'],
            datasets: [{
                data: [30, 70],
                backgroundColor: ['#4caf50', '#f44336'],
                borderWidth: 1.5
            }]
        },
        options: {
            cutout: '80%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    var ctxCGPA = document.getElementById('cgpaChart').getContext('2d');
    var cgpaChart = new Chart(ctxCGPA, {
        type: 'doughnut',
        data: {
            labels: ['CGPA', 'Remaining'],
            datasets: [{
                data: [9, 1],
                backgroundColor: ['#ff9800', '#e0e0e0'],
                borderWidth: 2
            }]
        },
        options: {
            cutout: '75%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    document.getElementById('attendanceLabel').innerText = '30%';

    document.getElementById('cgpaLabel').innerText = '9.0';
});