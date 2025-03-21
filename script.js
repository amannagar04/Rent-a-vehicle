function openPopup(vehicleName) {
    document.getElementById('popup-title').textContent = 'Book ' + vehicleName;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const collegeId = document.getElementById('college-id').value;  // Get College ID
    const rentDate = document.getElementById('rent-date').value;
    const duration = document.getElementById('duration').value;

    // Prepare the booking data
    const bookingData = { name, collegeId, rentDate, duration };

    // Store the data in localStorage
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Provide confirmation to the user
    alert('Thank You! Booking done Successfully.');
    
    // Close the popup
    closePopup();
});
