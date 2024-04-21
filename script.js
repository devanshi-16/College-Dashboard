// Placement statistics pie chart
var ctxPlacement = document.getElementById('placementChart').getContext('2d');
var placementChart = new Chart(ctxPlacement, {
    type: 'pie',
    data: {
        labels: ['Placed', 'Not Placed'],
        datasets: [{
            label: 'Placement Status',
            data: [80, 20], // Sample data for illustration
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Placement Status'
        },
        legend: {
            display: true,
            position: 'bottom'
        }
    }
});

// Course statistics bar graph
var ctxCourse = document.getElementById('courseChart').getContext('2d');
var courseChart = new Chart(ctxCourse, {
    type: 'bar',
    data: {
        labels: ['Engineering', 'Management', 'Arts', 'Science', 'Others'],
        datasets: [{
            label: 'Course Distribution',
            data: [30, 20, 15, 25, 10], // Sample data for illustration
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Course Distribution'
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    
});
function toggleDescription(card) {
    card.querySelector('.card-description').classList.toggle('show');
  }
  
  function showDescription(targetId) {
    const targetCard = document.getElementById(targetId);
    if (targetCard) {
      targetCard.querySelector('.card-description').classList.toggle('show');
    }
  }
  document.getElementById("inquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Serialize form data
    var formData = $(this).serialize();

    // Make AJAX request to submit form data to the server
    $.ajax({
        type: 'POST',
        url: 'submit_inquiry.php', // Change to your PHP file for handling form submission
        data: formData,
        success: function (response) {
            $('#formResponse').html(response);
        }
    });

    // Convert form data to JSON and store in local storage
    var formObject = {};
    $(this).serializeArray().forEach(function(item) {
        formObject[item.name] = item.value;
    });
    localStorage.setItem('inquiryFormData', JSON.stringify(formObject));

    // Optionally, you can display a message to the user
    // or redirect them to a thank you page
    alert("Your inquiry has been saved locally and submitted to the server. Thank you!");

    // Clear the form fields
    this.reset();
});

var storedData = localStorage.getItem('inquiryFormData');
if (storedData) {
    var formData = JSON.parse(storedData);
    // Do something with the formData, such as displaying it to the user or sending it to the server
}


  
  
  
