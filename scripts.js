// Parcel Tracking
function Parcel() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const trackingResult = document.getElementById('trackingResult');
    
    if (trackingNumber) {
        trackingResult.innerHTML = <p>Your parcel with tracking number <strong>${trackingNumber}</strong> is in transit.</p>;
    } else {
        trackingResult.innerHTML = <p class="error">Please enter a valid tracking number.</p>;
    }
}

const costResult = document.getElementById("costResult");

// Check if costResult element exists
if (costResult) {
    // Check if estimatedCost is defined
    if (typeof estimatedCost !== 'undefined') {
        costResult.innerHTML = `<p>Estimated Shipping Cost: <strong>$${estimatedCost}</strong></p>
                                <p>Estimated Delivery Time: <strong>3-5 Days</strong></p>`;
    } else {
        console.error("estimatedCost is not defined.");
    }
} else {
    console.error("costResult element not found.");
}

    function schedulePickup() {
        // Get the values from the form fields
        var pickupAddress = document.getElementById("pickupAddress").value;
        var pickupDate = document.getElementById("pickupDate").value;
        var pickupTime = document.getElementById("pickupTime").value;

        // Display an alert with the scheduled information
        if (pickupAddress && pickupDate && pickupTime) {
            alert("Pickup Scheduled! \n\nAddress: " + pickupAddress + "\nDate: " + pickupDate + "\nTime: " + pickupTime);
        } else {
            alert("Please fill in all the required fields.");
        }
    }
  
    function schedulePickup() {
        // Get the values from the form fields
        var pickupAddress = document.getElementById("pickupAddress").value;
        var pickupDate = document.getElementById("pickupDate").value;
        var pickupTime = document.getElementById("pickupTime").value;

        // Check if all fields are filled
        if (pickupAddress && pickupDate && pickupTime) {
            var modalMessage = "Pickup Scheduled! \n\nAddress: " + pickupAddress + "\nDate: " + pickupDate + "\nTime: " + pickupTime;
            document.getElementById("modalMessage").textContent = modalMessage;

            // Show the modal
            document.getElementById("popupModal").style.display = "block";
        } else {
            alert("Please fill in all the required fields.");
        }
    }

    function closeModal() {
        document.getElementById("popupModal").style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        var modal = document.getElementById("popupModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }





// Contact Support
function sendMessage() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert("Your message has been sent!");
    } else {
        alert("Please fill in all fields.");
    }
}